import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import { SEOUL_GYEONGGI_BOUNDS, QUICK_REGIONS } from '../data/apartmentsData';
import { LANDMARKS, LANDMARK_CATEGORIES } from '../data/landmarksData';
import { PIN_TYPES, calculateDistanceKm, estimateCommuteTime } from './CustomPinManager';
import { formatCompactPrice, formatPrice, getBudgetEvaluation, calculateAcquisitionCosts, calculateJeonseCosts } from '../utils/calculator';
import { Layers, MapPin, Navigation, Landmark, Crosshair } from 'lucide-react';

const TILE_PROVIDERS = {
  osm: {
    name: '🗺️ OpenStreetMap (표준)',
    url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    options: {
      attribution: '&copy; OpenStreetMap contributors',
      maxZoom: 19
    }
  },
  carto_voyager: {
    name: '🎨 Carto Voyager (모던 컬러)',
    url: 'https://basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png',
    options: {
      attribution: '&copy; CARTO &copy; OpenStreetMap',
      maxZoom: 19
    }
  },
  carto_light: {
    name: '🏙️ Carto Light (심플 라이트)',
    url: 'https://basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
    options: {
      attribution: '&copy; CARTO &copy; OpenStreetMap',
      maxZoom: 19
    }
  },
  esri_sat: {
    name: '🛰️ 고화질 위성 지도',
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    options: {
      attribution: '&copy; Esri World Imagery',
      maxZoom: 18
    }
  },
  esri_street: {
    name: '🗺️ Esri 상세 도로망',
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
    options: {
      attribution: '&copy; Esri World Street Map',
      maxZoom: 19
    }
  }
};

export default function MapView({
  apartments,
  selectedApartment,
  onSelectApartment,
  viewMode,
  tradeType,
  userTotalBudgetManwon,
  splitRatio,
  customPins,
  onAddCustomPin,
  isDroppingPin,
  setIsDroppingPin,
  showLandmarks
}) {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const currentTileLayerRef = useRef(null);
  const aptMarkersRef = useRef({});
  const landmarkMarkersRef = useRef({});
  const customPinMarkersRef = useRef({});
  const distanceLinesRef = useRef([]);
  const [activeTileKey, setActiveTileKey] = useState('osm');

  // Initialize Leaflet Map
  useEffect(() => {
    if (!mapContainerRef.current) return;
    if (mapInstanceRef.current) return;

    // Strict 수도권 bounds & restrictions (04 요구사항)
    const map = L.map(mapContainerRef.current, {
      center: SEOUL_GYEONGGI_BOUNDS.center,
      zoom: SEOUL_GYEONGGI_BOUNDS.defaultZoom,
      minZoom: 10,  // Prevents zooming out of metropolitan area
      maxZoom: 19,
      maxBounds: SEOUL_GYEONGGI_BOUNDS.maxBounds,
      maxBoundsViscosity: 1.0, // Strict bounce back
      zoomControl: false
    });

    // Add Tile Layer
    const provider = TILE_PROVIDERS[activeTileKey];
    const tileLayer = L.tileLayer(provider.url, provider.options).addTo(map);
    tileLayer.bringToBack();
    currentTileLayerRef.current = tileLayer;

    // Zoom control
    L.control.zoom({ position: 'topleft' }).addTo(map);

    mapInstanceRef.current = map;

    // Map click handler for dropping custom pin (07 요구사항)
    map.on('click', (e) => {
      // Check if user is in dropping pin mode
      if (window.__isDroppingPin) {
        const pinName = prompt('추가할 거점 핀의 이름을 입력하세요 (예: 우리 회사, 본가, 학교):', '새 거점');
        if (pinName && pinName.trim()) {
          window.__handleAddPinDirect({
            id: `pin-${Date.now()}`,
            name: pinName.trim(),
            type: 'company',
            lat: e.latlng.lat,
            lng: e.latlng.lng
          });
          if (window.__setDroppingPinOff) window.__setDroppingPinOff(false);
        }
      }
    });

    setTimeout(() => {
      map.invalidateSize();
    }, 150);

    // Watch resize of container via ResizeObserver
    let resizeObserver = null;
    if (window.ResizeObserver && mapContainerRef.current) {
      resizeObserver = new ResizeObserver(() => {
        if (mapInstanceRef.current) {
          mapInstanceRef.current.invalidateSize();
        }
      });
      resizeObserver.observe(mapContainerRef.current);
    }

    return () => {
      if (resizeObserver) resizeObserver.disconnect();
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  // Sync window callbacks for map click pin dropping
  useEffect(() => {
    window.__isDroppingPin = isDroppingPin;
    window.__handleAddPinDirect = onAddCustomPin;
    window.__setDroppingPinOff = setIsDroppingPin;
  }, [isDroppingPin, onAddCustomPin, setIsDroppingPin]);

  // Handle Tile Layer Switcher (01 요구사항)
  const handleSwitchTileLayer = (key) => {
    const map = mapInstanceRef.current;
    if (!map) return;

    if (currentTileLayerRef.current) {
      map.removeLayer(currentTileLayerRef.current);
    }

    const provider = TILE_PROVIDERS[key];
    const newLayer = L.tileLayer(provider.url, provider.options).addTo(map);
    newLayer.bringToBack();
    currentTileLayerRef.current = newLayer;
    setActiveTileKey(key);
  };

  // Invalidate map size on split ratio change
  useEffect(() => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.invalidateSize();
    }
  }, [splitRatio]);

  // 1. RENDER APARTMENT PINS
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    // Clear old apartment markers
    Object.values(aptMarkersRef.current).forEach(m => m.remove());
    aptMarkersRef.current = {};

    apartments.forEach(apt => {
      // Pricing depending on tradeType [sale | jeonse | rent]
      let targetPrice = apt.recentTransaction.price;
      let priceLabel = '';
      let costs = null;

      if (tradeType === 'sale') {
        const minSale = apt.actualListings.filter(l => l.tradeType === 'sale').map(l => l.price);
        const listingPrice = minSale.length > 0 ? Math.min(...minSale) : apt.recentTransaction.price;
        targetPrice = viewMode === 'listing' ? listingPrice : apt.recentTransaction.price;
        costs = calculateAcquisitionCosts(targetPrice, 34);

        if (viewMode === 'recent') priceLabel = `실거래 ${formatCompactPrice(apt.recentTransaction.price)}`;
        else if (viewMode === 'listing') priceLabel = `매물 ${formatCompactPrice(listingPrice)}`;
        else priceLabel = `${formatCompactPrice(apt.recentTransaction.price)} / 매${formatCompactPrice(listingPrice)}`;
      } else if (tradeType === 'jeonse') {
        const jeonseBase = apt.jeonsePrice || Math.round(apt.recentTransaction.price * 0.55);
        const minJeonse = apt.actualListings.filter(l => l.tradeType === 'jeonse').map(l => l.price);
        targetPrice = minJeonse.length > 0 && viewMode === 'listing' ? Math.min(...minJeonse) : jeonseBase;
        costs = calculateJeonseCosts(targetPrice);
        priceLabel = `전세 ${formatCompactPrice(targetPrice)}`;
      } else {
        // Rent (월세)
        const rentInfo = apt.monthlyRent || { deposit: 10000, rent: 250 };
        targetPrice = rentInfo.deposit;
        costs = { totalRequiredBudgetManwon: rentInfo.deposit + 300 };
        priceLabel = `월세 ${formatCompactPrice(rentInfo.deposit)}/${rentInfo.rent}만`;
      }

      // Budget Evaluation
      const evalResult = getBudgetEvaluation(costs.totalRequiredBudgetManwon, userTotalBudgetManwon);
      const isSelected = selectedApartment && selectedApartment.id === apt.id;

      // Color logic
      let pinBg = 'bg-emerald-600';
      let pinBorder = 'border-emerald-700';
      let statusIcon = '✓';

      if (evalResult.status === 'warning') {
        pinBg = 'bg-amber-500';
        pinBorder = 'border-amber-600';
        statusIcon = '▲';
      } else if (evalResult.status === 'danger') {
        pinBg = 'bg-rose-600';
        pinBorder = 'border-rose-700';
        statusIcon = '!';
      }

      const customIcon = L.divIcon({
        className: 'custom-leaflet-marker',
        html: `
          <div class="custom-pin relative flex flex-col items-center cursor-pointer ${isSelected ? 'selected' : ''}">
            ${isSelected ? `<div class="pulse-ring ${evalResult.status === 'danger' ? 'pulse-ring-danger' : ''}"></div>` : ''}
            <div class="flex items-center gap-1 px-2.5 py-1 rounded-full text-white text-[11px] font-bold shadow-lg border ${pinBg} ${pinBorder} whitespace-nowrap">
              <span class="w-3.5 h-3.5 rounded-full bg-white/25 flex items-center justify-center text-[10px] font-black">${statusIcon}</span>
              <span class="truncate max-w-[100px]">${apt.name}</span>
              <span class="font-black border-l border-white/30 pl-1 text-[11px]">${priceLabel}</span>
            </div>
            <div class="w-2 h-2 rotate-45 -mt-1 ${pinBg} border-r border-b ${pinBorder}"></div>
          </div>
        `,
        iconSize: [130, 32],
        iconAnchor: [65, 30],
        popupAnchor: [0, -28]
      });

      const marker = L.marker([apt.lat, apt.lng], { icon: customIcon }).addTo(map);

      // Popup content with 2026 dates and rich specs
      const popupHtml = `
        <div style="font-family: inherit; min-width: 230px; padding: 4px;">
          <div style="font-size: 11px; color: #64748b; font-weight: 600;">${apt.city} ${apt.district} ${apt.dong}</div>
          <div style="font-size: 15px; font-weight: 800; color: #0f172a; margin-top: 2px;">${apt.name}</div>
          
          <div style="margin-top: 8px; padding: 8px; background-color: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0; font-size: 12px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
              <span style="color: #64748b;">기준 가격 (${tradeType === 'sale' ? '매매' : tradeType === 'jeonse' ? '전세' : '월세'}):</span>
              <strong style="color: #0284c7;">${formatPrice(targetPrice)}</strong>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
              <span style="color: #64748b;">매물 보유 현황:</span>
              <strong style="color: #10b981;">총 ${apt.listingCounts?.total || 30}건 (매매 ${apt.listingCounts?.sale || 15}/전세 ${apt.listingCounts?.jeonse || 10})</strong>
            </div>
            <div style="display: flex; justify-content: space-between; border-top: 1px dashed #cbd5e1; padding-top: 4px;">
              <span style="color: #64748b;">내 예산 진단:</span>
              <span style="font-weight: 700; color: ${evalResult.color};">${evalResult.label}</span>
            </div>
          </div>

          <div style="margin-top: 8px; font-size: 11px; color: #475569; display: flex; flex-direction: column; gap: 3px;">
            <div>🏗️ ${apt.builtYear}년 준공 (${2026 - apt.builtYear}년차) · ${apt.totalHouseholds.toLocaleString()}세대</div>
            <div>🚗 주차 ${apt.parkingPerHousehold}대 (지하 직통: ${apt.undergroundParkingDirect ? 'O' : 'X'})</div>
            <div>⚡ ${apt.evChargers || '전기차 충전시설 완비'}</div>
            <div>⛰️ ${apt.slopeStatus}</div>
            <div>🚇 ${apt.amenities?.subwayDetail || apt.nearestStation}</div>
          </div>
        </div>
      `;

      marker.bindPopup(popupHtml, { closeButton: false, offset: [0, -10] });
      marker.on('click', () => onSelectApartment(apt));
      aptMarkersRef.current[apt.id] = marker;
    });

    if (selectedApartment && aptMarkersRef.current[selectedApartment.id]) {
      aptMarkersRef.current[selectedApartment.id].openPopup();
    }
  }, [apartments, viewMode, tradeType, selectedApartment, userTotalBudgetManwon, onSelectApartment]);

  // 2. RENDER USER CUSTOM PINS (07 요구사항)
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    Object.values(customPinMarkersRef.current).forEach(m => m.remove());
    customPinMarkersRef.current = {};

    customPins.forEach(pin => {
      const typeInfo = PIN_TYPES[pin.type] || PIN_TYPES.company;

      const pinIcon = L.divIcon({
        className: 'custom-pin-marker',
        html: `
          <div class="flex flex-col items-center cursor-pointer">
            <div class="px-2 py-1 rounded-full text-white text-[11px] font-black shadow-xl border-2 border-white ${typeInfo.bg} flex items-center gap-1 animate-bounce">
              <span>${typeInfo.icon}</span>
              <span>${pin.name}</span>
            </div>
            <div class="w-2.5 h-2.5 rotate-45 -mt-1 ${typeInfo.bg} border-r border-b border-white"></div>
          </div>
        `,
        iconSize: [100, 36],
        iconAnchor: [50, 32]
      });

      const marker = L.marker([pin.lat, pin.lng], { icon: pinIcon }).addTo(map);
      marker.bindTooltip(`나의 거점: ${pin.name}`, { direction: 'top', offset: [0, -25] });
      customPinMarkersRef.current[pin.id] = marker;
    });
  }, [customPins]);

  // 3. RENDER DISTANCE CONNECTION LINES FROM SELECTED APARTMENT TO CUSTOM PINS
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    // Clear old lines
    distanceLinesRef.current.forEach(l => l.remove());
    distanceLinesRef.current = [];

    if (!selectedApartment || customPins.length === 0) return;

    customPins.forEach(pin => {
      const distKm = calculateDistanceKm(selectedApartment.lat, selectedApartment.lng, pin.lat, pin.lng);
      const commute = estimateCommuteTime(distKm);

      // Draw dashed connecting polyline
      const line = L.polyline(
        [
          [selectedApartment.lat, selectedApartment.lng],
          [pin.lat, pin.lng]
        ],
        {
          color: '#3b82f6',
          weight: 2.5,
          opacity: 0.75,
          dashArray: '6, 6'
        }
      ).addTo(map);

      // Midpoint label
      const midLat = (selectedApartment.lat + pin.lat) / 2;
      const midLng = (selectedApartment.lng + pin.lng) / 2;
      const labelMarker = L.marker([midLat, midLng], {
        icon: L.divIcon({
          className: 'distance-label',
          html: `
            <div class="bg-blue-900/90 text-white font-bold text-[10px] px-2 py-0.5 rounded-full shadow border border-blue-400/50 whitespace-nowrap">
              ${pin.name}: ${distKm}km (${commute.time})
            </div>
          `,
          iconSize: [120, 20],
          iconAnchor: [60, 10]
        })
      }).addTo(map);

      distanceLinesRef.current.push(line, labelMarker);
    });
  }, [selectedApartment, customPins]);

  // 4. RENDER LANDMARKS (08 요구사항: 대형쇼핑몰, 백화점, 병원, 경찰서, 공원)
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    Object.values(landmarkMarkersRef.current).forEach(m => m.remove());
    landmarkMarkersRef.current = {};

    if (!showLandmarks) return;

    LANDMARKS.forEach(lm => {
      const cat = LANDMARK_CATEGORIES[lm.category] || LANDMARK_CATEGORIES.shopping;

      const lmIcon = L.divIcon({
        className: 'landmark-marker',
        html: `
          <div class="flex items-center gap-1 px-1.5 py-0.5 rounded-lg bg-white/95 text-slate-800 text-[10px] font-bold shadow-md border border-slate-300 hover:scale-110 transition cursor-pointer">
            <span>${cat.icon}</span>
            <span class="hidden sm:inline">${lm.name}</span>
          </div>
        `,
        iconSize: [80, 24],
        iconAnchor: [40, 12]
      });

      const marker = L.marker([lm.lat, lm.lng], { icon: lmIcon }).addTo(map);
      marker.bindPopup(`
        <div style="font-size:12px; font-family:inherit; padding:2px;">
          <strong style="color: ${cat.color};">${cat.icon} ${lm.name}</strong>
          <p style="margin-top:3px; color:#475569; font-size:11px;">${lm.desc}</p>
        </div>
      `, { closeButton: false });

      landmarkMarkersRef.current[lm.id] = marker;
    });
  }, [showLandmarks]);

  // Pan to selected apartment smoothly
  useEffect(() => {
    if (!selectedApartment || !mapInstanceRef.current) return;
    mapInstanceRef.current.flyTo([selectedApartment.lat, selectedApartment.lng], 14, { duration: 1 });
  }, [selectedApartment]);

  return (
    <div className="relative w-full h-full flex flex-col bg-slate-100 overflow-hidden">
      {/* Map View Wrapper */}
      <div 
        ref={mapContainerRef} 
        className={`w-full h-full z-0 leaflet-map-wrapper ${isDroppingPin ? 'cursor-crosshair' : ''}`} 
      />

      {/* Pin Dropping Active Banner */}
      {isDroppingPin && (
        <div className="absolute top-3 left-1/2 -translate-x-1/2 z-[500] bg-rose-600 text-white font-bold text-xs px-4 py-2 rounded-full shadow-2xl flex items-center gap-2 animate-bounce">
          <Crosshair className="w-4 h-4 animate-spin" />
          <span>지도의 원하는 위치를 클릭하면 핀이 생성됩니다!</span>
          <button
            onClick={() => setIsDroppingPin(false)}
            className="ml-2 bg-white text-rose-700 px-2 py-0.5 rounded text-[11px]"
          >
            취소
          </button>
        </div>
      )}

      {/* Top Right: Map Tile Layer Switcher (01 요구사항 수정 - 5개 고화질 타일 지원) */}
      <div className="absolute top-3 right-3 z-[400] flex items-center bg-white/95 backdrop-blur-md rounded-xl p-1 shadow-md border border-slate-200 text-xs">
        <Layers className="w-3.5 h-3.5 text-slate-500 ml-2 mr-1" />
        <select
          value={activeTileKey}
          onChange={(e) => handleSwitchTileLayer(e.target.value)}
          className="bg-transparent text-slate-700 font-semibold text-xs py-1 px-1.5 focus:outline-none cursor-pointer"
        >
          {Object.entries(TILE_PROVIDERS).map(([k, v]) => (
            <option key={k} value={k}>{v.name}</option>
          ))}
        </select>
      </div>

      {/* Bottom Floating Legend & Summary Pill */}
      <div className="absolute bottom-4 left-4 z-[400] bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-xl border border-slate-200/90 max-w-sm">
        <div className="text-xs font-bold text-slate-800 mb-2 flex items-center justify-between">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            내 예산 맞춤 핀 상태 ({tradeType === 'sale' ? '매매' : tradeType === 'jeonse' ? '전세' : '월세'})
          </span>
          <span className="text-[10px] text-slate-400 font-normal">수도권 전역</span>
        </div>
        <div className="grid grid-cols-3 gap-2 text-[11px]">
          <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-800 px-2 py-1 rounded-lg border border-emerald-200 font-medium">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 flex items-center justify-center text-[9px] text-white">✓</span>
            <span>예산 내</span>
          </div>
          <div className="flex items-center gap-1.5 bg-amber-50 text-amber-800 px-2 py-1 rounded-lg border border-amber-200 font-medium">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 flex items-center justify-center text-[9px] text-white">▲</span>
            <span>근접 (8%내)</span>
          </div>
          <div className="flex items-center gap-1.5 bg-rose-50 text-rose-800 px-2 py-1 rounded-lg border border-rose-200 font-medium">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500 flex items-center justify-center text-[9px] text-white">!</span>
            <span>예산 초과</span>
          </div>
        </div>
      </div>
    </div>
  );
}
