import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import { SEOUL_GYEONGGI_BOUNDS } from '../data/apartmentsData';
import { LANDMARKS, LANDMARK_CATEGORIES } from '../data/landmarksData';
import { PIN_TYPES, calculateDistanceKm, estimateCommuteTime } from './CustomPinManager';
import { formatCompactPrice, formatPrice, getBudgetEvaluation, calculateAcquisitionCosts, calculateJeonseCosts } from '../utils/calculator';
import { Layers, MapPin, Navigation, Landmark, Crosshair, RefreshCw, Check, Plus, Trash2 } from 'lucide-react';

// Only TWO Tile Providers as requested by user (기본 & 심플)
const TILE_PROVIDERS = {
  osm: {
    name: '🗺️ 기본 지도 (OpenStreetMap)',
    url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    options: {
      attribution: '&copy; OpenStreetMap contributors',
      maxZoom: 19
    }
  },
  carto_light: {
    name: '🏙️ 심플 지도 (Carto Light)',
    url: 'https://basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
    options: {
      attribution: '&copy; CARTO &copy; OpenStreetMap',
      maxZoom: 19
    }
  }
};

export default function MapView({
  apartments,
  allApartments,
  selectedApartment,
  onSelectApartment,
  viewMode,
  tradeType,
  userTotalBudgetManwon,
  splitRatio,
  customPins,
  onAddCustomPin,
  onDeleteCustomPin,
  showLandmarks,
  onSearchInBounds
}) {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const currentTileLayerRef = useRef(null);
  const aptMarkersRef = useRef({});
  const landmarkMarkersRef = useRef({});
  const customPinMarkersRef = useRef({});
  const distanceLinesRef = useRef([]);

  // Map Tile: Only 'osm' (기본) and 'carto_light' (심플)
  const [activeTileKey, setActiveTileKey] = useState('osm');

  // "현 지도 영역에서 검색" State
  const [hasMapMoved, setHasMapMoved] = useState(false);
  const [inViewAptCount, setInViewAptCount] = useState(apartments.length);

  // In-map Pin Dropping Mode (Map is 100% visible at all times!)
  const [isPinModeActive, setIsPinModeActive] = useState(false);
  const pinPromptMarkerRef = useRef(null);

  // Initialize Leaflet Map
  useEffect(() => {
    if (!mapContainerRef.current) return;
    if (mapInstanceRef.current) return;

    const map = L.map(mapContainerRef.current, {
      center: SEOUL_GYEONGGI_BOUNDS.center,
      zoom: SEOUL_GYEONGGI_BOUNDS.defaultZoom,
      minZoom: 10,
      maxZoom: 19,
      maxBounds: SEOUL_GYEONGGI_BOUNDS.maxBounds,
      maxBoundsViscosity: 1.0,
      zoomControl: false
    });

    // Add Tile Layer
    const provider = TILE_PROVIDERS[activeTileKey];
    const tileLayer = L.tileLayer(provider.url, provider.options).addTo(map);
    tileLayer.bringToBack();
    currentTileLayerRef.current = tileLayer;

    // Zoom control on top-left
    L.control.zoom({ position: 'topleft' }).addTo(map);

    mapInstanceRef.current = map;

    // Listen to Map Move / Zoom to trigger "현 지도 영역에서 검색" button
    const handleMoveEnd = () => {
      const bounds = map.getBounds();
      const count = allApartments.filter(a => bounds.contains([a.lat, a.lng])).length;
      setInViewAptCount(count);
      setHasMapMoved(true);
    };

    map.on('moveend', handleMoveEnd);

    // Map Click for Pin Dropping (In-map popup, map NEVER disappears!)
    map.on('click', (e) => {
      if (!window.__isPinModeActive) return;

      // Remove existing temp prompt marker if any
      if (pinPromptMarkerRef.current) {
        pinPromptMarkerRef.current.remove();
      }

      const tempMarker = L.marker(e.latlng, {
        icon: L.divIcon({
          className: 'temp-pin-marker',
          html: `
            <div class="flex flex-col items-center animate-bounce">
              <div class="px-2 py-1 rounded-full text-white text-[11px] font-bold shadow-xl bg-blue-600 border border-white">
                📍 새 거점
              </div>
              <div class="w-2 h-2 rotate-45 -mt-1 bg-blue-600 border-r border-b border-white"></div>
            </div>
          `,
          iconSize: [60, 30],
          iconAnchor: [30, 26]
        })
      }).addTo(map);

      // Custom in-map popup for creating pin
      const popupDiv = document.createElement('div');
      popupDiv.style.fontFamily = 'inherit';
      popupDiv.style.padding = '4px';
      popupDiv.style.minWidth = '220px';
      popupDiv.innerHTML = `
        <div style="font-weight: 800; font-size: 13px; color: #0f172a; margin-bottom: 6px;">📍 나의 거점 핀 등록</div>
        <input id="pin-name-input" type="text" placeholder="거점 이름 (예: 강남역 회사, 본가)" style="width: 100%; padding: 6px 8px; font-size: 12px; border: 1px solid #cbd5e1; border-radius: 6px; outline: none; margin-bottom: 8px;" value="우리 회사" />
        <div style="display: flex; gap: 4px; margin-bottom: 8px;">
          <button id="type-company" style="flex:1; padding: 4px; font-size: 11px; font-weight: 700; background: #3b82f6; color: white; border: none; border-radius: 4px; cursor: pointer;">🏢 직장</button>
          <button id="type-home" style="flex:1; padding: 4px; font-size: 11px; font-weight: 700; background: #f1f5f9; color: #334155; border: 1px solid #cbd5e1; border-radius: 4px; cursor: pointer;">🏠 집</button>
          <button id="type-custom" style="flex:1; padding: 4px; font-size: 11px; font-weight: 700; background: #f1f5f9; color: #334155; border: 1px solid #cbd5e1; border-radius: 4px; cursor: pointer;">⭐️ 기타</button>
        </div>
        <div style="display: flex; justify-content: flex-end; gap: 4px;">
          <button id="btn-cancel-pin" style="padding: 4px 10px; font-size: 11px; background: #f1f5f9; border: 1px solid #cbd5e1; border-radius: 4px; cursor: pointer;">취소</button>
          <button id="btn-save-pin" style="padding: 4px 12px; font-size: 11px; font-weight: 700; background: #0f172a; color: white; border: none; border-radius: 4px; cursor: pointer;">저장</button>
        </div>
      `;

      let selectedType = 'company';

      popupDiv.querySelector('#type-company').onclick = () => {
        selectedType = 'company';
        popupDiv.querySelector('#type-company').style.background = '#3b82f6';
        popupDiv.querySelector('#type-company').style.color = '#fff';
        popupDiv.querySelector('#type-home').style.background = '#f1f5f9';
        popupDiv.querySelector('#type-home').style.color = '#334155';
        popupDiv.querySelector('#type-custom').style.background = '#f1f5f9';
        popupDiv.querySelector('#type-custom').style.color = '#334155';
      };

      popupDiv.querySelector('#type-home').onclick = () => {
        selectedType = 'home';
        popupDiv.querySelector('#type-home').style.background = '#10b981';
        popupDiv.querySelector('#type-home').style.color = '#fff';
        popupDiv.querySelector('#type-company').style.background = '#f1f5f9';
        popupDiv.querySelector('#type-company').style.color = '#334155';
        popupDiv.querySelector('#type-custom').style.background = '#f1f5f9';
        popupDiv.querySelector('#type-custom').style.color = '#334155';
      };

      popupDiv.querySelector('#type-custom').onclick = () => {
        selectedType = 'custom';
        popupDiv.querySelector('#type-custom').style.background = '#8b5cf6';
        popupDiv.querySelector('#type-custom').style.color = '#fff';
        popupDiv.querySelector('#type-company').style.background = '#f1f5f9';
        popupDiv.querySelector('#type-company').style.color = '#334155';
        popupDiv.querySelector('#type-home').style.background = '#f1f5f9';
        popupDiv.querySelector('#type-home').style.color = '#334155';
      };

      popupDiv.querySelector('#btn-cancel-pin').onclick = () => {
        tempMarker.remove();
      };

      popupDiv.querySelector('#btn-save-pin').onclick = () => {
        const name = popupDiv.querySelector('#pin-name-input').value.trim() || '나의 거점';
        window.__handleAddPinDirect({
          id: `pin-${Date.now()}`,
          name,
          type: selectedType,
          lat: e.latlng.lat,
          lng: e.latlng.lng
        });
        tempMarker.remove();
        if (window.__setPinModeOff) window.__setPinModeOff(false);
      };

      tempMarker.bindPopup(popupDiv, { closeButton: false, offset: [0, -20] }).openPopup();
      pinPromptMarkerRef.current = tempMarker;
    });

    setTimeout(() => map.invalidateSize(), 150);

    let resizeObserver = null;
    if (window.ResizeObserver && mapContainerRef.current) {
      resizeObserver = new ResizeObserver(() => {
        if (mapInstanceRef.current) mapInstanceRef.current.invalidateSize();
      });
      resizeObserver.observe(mapContainerRef.current);
    }

    return () => {
      if (resizeObserver) resizeObserver.disconnect();
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  // Sync window callbacks for in-map pin dropping
  useEffect(() => {
    window.__isPinModeActive = isPinModeActive;
    window.__handleAddPinDirect = onAddCustomPin;
    window.__setPinModeOff = setIsPinModeActive;
  }, [isPinModeActive, onAddCustomPin]);

  // Switch Tile Layer (기본 vs 심플)
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

  // Click "현 지도 영역에서 검색"
  const handleTriggerSearchInBounds = () => {
    if (!mapInstanceRef.current) return;
    const bounds = mapInstanceRef.current.getBounds();
    onSearchInBounds(bounds);
    setHasMapMoved(false);
  };

  // 1. RENDER APARTMENT PINS
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    // Clear old markers
    Object.values(aptMarkersRef.current).forEach(m => m.remove());
    aptMarkersRef.current = {};

    apartments.forEach(apt => {
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
        const rentInfo = apt.monthlyRent || { deposit: 10000, rent: 250 };
        targetPrice = rentInfo.deposit;
        costs = { totalRequiredBudgetManwon: rentInfo.deposit + 300 };
        priceLabel = `월세 ${formatCompactPrice(rentInfo.deposit)}/${rentInfo.rent}만`;
      }

      const evalResult = getBudgetEvaluation(costs.totalRequiredBudgetManwon, userTotalBudgetManwon);
      const isSelected = selectedApartment && selectedApartment.id === apt.id;

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
            <div class="flex items-center gap-1 px-2 py-0.5 rounded-full text-white text-[11px] font-bold shadow-lg border ${pinBg} ${pinBorder} whitespace-nowrap">
              <span class="w-3.5 h-3.5 rounded-full bg-white/25 flex items-center justify-center text-[10px] font-black">${statusIcon}</span>
              <span class="truncate max-w-[95px]">${apt.name}</span>
              <span class="font-black border-l border-white/30 pl-1 text-[10px]">${priceLabel}</span>
            </div>
            <div class="w-2 h-2 rotate-45 -mt-1 ${pinBg} border-r border-b ${pinBorder}"></div>
          </div>
        `,
        iconSize: [125, 30],
        iconAnchor: [62, 28],
        popupAnchor: [0, -28]
      });

      const marker = L.marker([apt.lat, apt.lng], { icon: customIcon }).addTo(map);

      // Popup
      const popupHtml = `
        <div style="font-family: inherit; min-width: 230px; padding: 4px;">
          <div style="font-size: 11px; color: #64748b; font-weight: 600;">${apt.city} ${apt.district} ${apt.dong}</div>
          <div style="font-size: 15px; font-weight: 800; color: #0f172a; margin-top: 2px;">${apt.name}</div>
          
          <div style="margin-top: 8px; padding: 8px; background-color: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0; font-size: 12px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
              <span style="color: #64748b;">기준 가격 (${tradeType === 'sale' ? '매매' : tradeType === 'jeonse' ? '전세' : '월세'}):</span>
              <strong style="color: #0284c7;">${formatPrice(targetPrice)}</strong>
            </div>
            <div style="display: flex; justify-content: space-between; border-top: 1px dashed #cbd5e1; padding-top: 4px;">
              <span style="color: #64748b;">내 예산 진단:</span>
              <span style="font-weight: 700; color: ${evalResult.color};">${evalResult.label}</span>
            </div>
          </div>

          <div style="margin-top: 8px; font-size: 11px; color: #475569; display: flex; flex-direction: column; gap: 3px;">
            <div>🏗️ ${apt.builtYear}년 준공 (${2026 - apt.builtYear}년차) · ${apt.totalHouseholds.toLocaleString()}세대</div>
            <div>🚗 주차 ${apt.parkingPerHousehold}대 (지하 직통: ${apt.undergroundParkingDirect ? 'O' : 'X'})</div>
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

  // 2. RENDER CUSTOM USER PINS (집, 회사 등)
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
            <div class="px-2.5 py-1 rounded-full text-white text-[11px] font-black shadow-xl border-2 border-white ${typeInfo.bg} flex items-center gap-1 animate-bounce">
              <span>${typeInfo.icon}</span>
              <span>${pin.name}</span>
            </div>
            <div class="w-2.5 h-2.5 rotate-45 -mt-1 ${typeInfo.bg} border-r border-b border-white"></div>
          </div>
        `,
        iconSize: [110, 36],
        iconAnchor: [55, 32]
      });

      const marker = L.marker([pin.lat, pin.lng], { icon: pinIcon }).addTo(map);

      // Popup with Delete Button
      const popupContent = document.createElement('div');
      popupContent.style.padding = '4px';
      popupContent.style.fontSize = '12px';
      popupContent.innerHTML = `
        <div style="font-weight: 800; color: #0f172a; margin-bottom: 4px;">${typeInfo.icon} ${pin.name}</div>
        <div style="color: #64748b; font-size: 11px; margin-bottom: 8px;">나의 거점 핀 (${typeInfo.label})</div>
        <button id="del-pin-${pin.id}" style="width:100%; padding: 4px; font-size: 11px; font-weight: 700; color: #e11d48; background: #ffe4e6; border: 1px solid #fecdd3; border-radius: 4px; cursor: pointer;">핀 삭제</button>
      `;
      popupContent.querySelector(`#del-pin-${pin.id}`).onclick = () => {
        onDeleteCustomPin(pin.id);
      };

      marker.bindPopup(popupContent, { closeButton: false });
      customPinMarkersRef.current[pin.id] = marker;
    });
  }, [customPins, onDeleteCustomPin]);

  // 3. RENDER DISTANCE CONNECTION LINES
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    distanceLinesRef.current.forEach(l => l.remove());
    distanceLinesRef.current = [];

    if (!selectedApartment || customPins.length === 0) return;

    customPins.forEach(pin => {
      const distKm = calculateDistanceKm(selectedApartment.lat, selectedApartment.lng, pin.lat, pin.lng);
      const commute = estimateCommuteTime(distKm);

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

  // 4. RENDER LANDMARKS
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
      {/* The Leaflet Map Element */}
      <div 
        ref={mapContainerRef} 
        className={`w-full h-full z-0 leaflet-map-wrapper ${isPinModeActive ? 'cursor-crosshair' : ''}`} 
      />

      {/* Floating: "현 지도 영역에서 검색" 버튼 (호갱노노/네이버부동산 스타일) */}
      {hasMapMoved && (
        <div className="absolute top-3 left-1/2 -translate-x-1/2 z-[450] animate-in slide-in-from-top duration-200">
          <button
            onClick={handleTriggerSearchInBounds}
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-4 py-2 rounded-full shadow-xl border border-emerald-400 transition hover:scale-105 active:scale-95"
          >
            <RefreshCw className="w-3.5 h-3.5 animate-spin" />
            <span>현 지도 영역에서 검색 ({inViewAptCount}개 단지)</span>
          </button>
        </div>
      )}

      {/* Floating Left: In-map Pin Dropping Mode Button (지도 가림 없는 100% 실시간 핀 찍기) */}
      <div className="absolute top-3 left-14 z-[400] flex items-center gap-1.5">
        <button
          onClick={() => setIsPinModeActive(!isPinModeActive)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold shadow-md border transition ${
            isPinModeActive
              ? 'bg-rose-600 text-white border-rose-400 ring-2 ring-rose-400/50 animate-pulse'
              : 'bg-white/95 hover:bg-white text-slate-800 border-slate-300'
          }`}
        >
          <Crosshair className="w-3.5 h-3.5 text-rose-500" />
          <span>{isPinModeActive ? '🎯 원하는 곳을 클릭하세요' : '📍 지도에 핀 찍기'}</span>
        </button>
        {isPinModeActive && (
          <span className="text-[11px] bg-slate-900/90 text-white px-2 py-1 rounded-lg shadow font-medium">
            지도 어디든 클릭하면 팝업으로 저장됩니다
          </span>
        )}
      </div>

      {/* Top Right: Map Tile Layer Switcher (딱 2가지만 제공: 기본 vs 심플) */}
      <div className="absolute top-3 right-3 z-[400] flex items-center bg-white/95 backdrop-blur-md rounded-xl p-1 shadow-md border border-slate-300 text-xs">
        <Layers className="w-3.5 h-3.5 text-slate-600 ml-2 mr-1" />
        <select
          value={activeTileKey}
          onChange={(e) => handleSwitchTileLayer(e.target.value)}
          className="bg-transparent text-slate-800 font-bold text-xs py-1 px-1.5 focus:outline-none cursor-pointer"
        >
          <option value="osm">🗺️ 기본 지도 (OSM)</option>
          <option value="carto_light">🏙️ 심플 지도 (Carto Light)</option>
        </select>
      </div>

      {/* Bottom Floating Legend */}
      <div className="absolute bottom-4 left-4 z-[400] bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-xl border border-slate-200/90 max-w-sm">
        <div className="text-xs font-bold text-slate-800 mb-2 flex items-center justify-between">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            내 예산 맞춤 핀 ({tradeType === 'sale' ? '매매' : tradeType === 'jeonse' ? '전세' : '월세'})
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
