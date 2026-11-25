import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import { SEOUL_GYEONGGI_BOUNDS } from '../data/apartmentsData';
import { formatCompactPrice, formatPrice, getBudgetEvaluation, calculateAcquisitionCosts } from '../utils/calculator';
import { MapPin, Navigation, CheckCircle2, AlertCircle, AlertTriangle, Layers, RotateCcw } from 'lucide-react';

const TILE_PROVIDERS = {
  osm: {
    name: '표준 OSM 지도',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    options: {
      subdomains: ['a', 'b', 'c'],
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19
    }
  },
  carto_voyager: {
    name: '모던 컬러 지도',
    url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
    options: {
      subdomains: 'abcd',
      attribution: '&copy; CARTO &copy; OpenStreetMap',
      maxZoom: 19
    }
  },
  carto_light: {
    name: '심플 라이트 지도',
    url: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
    options: {
      subdomains: 'abcd',
      attribution: '&copy; CARTO &copy; OpenStreetMap',
      maxZoom: 19
    }
  }
};

export default function MapView({
  apartments,
  selectedApartment,
  onSelectApartment,
  viewMode,
  userTotalBudgetManwon,
  splitRatio
}) {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const currentTileLayerRef = useRef(null);
  const markersRef = useRef({});
  const [activeTileKey, setActiveTileKey] = useState('osm'); // Default to standard OSM which is 100% reliable worldwide

  // Initialize Leaflet Map
  useEffect(() => {
    if (!mapContainerRef.current) return;
    if (mapInstanceRef.current) return;

    // Create Leaflet Map constrained to Seoul/Gyeonggi
    const map = L.map(mapContainerRef.current, {
      center: SEOUL_GYEONGGI_BOUNDS.center,
      zoom: SEOUL_GYEONGGI_BOUNDS.defaultZoom,
      minZoom: 9,
      maxZoom: 19,
      maxBounds: [
        [36.7, 126.2], // 경기 남서부 확장
        [38.4, 127.9]  // 경기 북동부 확장
      ],
      maxBoundsViscosity: 0.6,
      zoomControl: false
    });

    // Add Tile Layer
    const provider = TILE_PROVIDERS[activeTileKey];
    const tileLayer = L.tileLayer(provider.url, provider.options).addTo(map);
    currentTileLayerRef.current = tileLayer;

    // Zoom control on top-left
    L.control.zoom({ position: 'topleft' }).addTo(map);

    mapInstanceRef.current = map;

    // Immediate resize invalidate
    setTimeout(() => {
      map.invalidateSize();
    }, 150);

    // Watch resize of container via ResizeObserver so dragging split panel instantly redraws map
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

  // Update Tile Layer if user toggles map style
  const handleSwitchTileLayer = (key) => {
    const map = mapInstanceRef.current;
    if (!map) return;

    if (currentTileLayerRef.current) {
      map.removeLayer(currentTileLayerRef.current);
    }

    const provider = TILE_PROVIDERS[key];
    const newLayer = L.tileLayer(provider.url, provider.options).addTo(map);
    currentTileLayerRef.current = newLayer;
    setActiveTileKey(key);
  };

  // Invalidate map size when splitRatio changes
  useEffect(() => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.invalidateSize();
    }
  }, [splitRatio]);

  // Update Markers whenever apartments, viewMode, selectedApartment, or userTotalBudgetManwon change
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    // Clear old markers
    Object.values(markersRef.current).forEach(marker => marker.remove());
    markersRef.current = {};

    apartments.forEach(apt => {
      // Determine comparison price based on viewMode
      const recentPrice = apt.recentTransaction.price;
      const minListingPrice = apt.actualListings.length > 0 
        ? Math.min(...apt.actualListings.map(l => l.price))
        : recentPrice;
      
      let targetPrice = recentPrice;
      if (viewMode === 'listing') targetPrice = minListingPrice;
      else if (viewMode === 'both') targetPrice = minListingPrice;

      // Calculate total acquisition cost for this apartment
      const costs = calculateAcquisitionCosts(targetPrice, 34);
      const evalResult = getBudgetEvaluation(costs.totalRequiredBudgetManwon, userTotalBudgetManwon);

      const isSelected = selectedApartment && selectedApartment.id === apt.id;

      // Color logic: Green / Yellow / Red
      let pinColor = '#10b981'; // green
      let pinBg = 'bg-emerald-600';
      let pinBorder = 'border-emerald-700';
      let statusIcon = '✓';

      if (evalResult.status === 'warning') {
        pinColor = '#f59e0b'; // yellow
        pinBg = 'bg-amber-500';
        pinBorder = 'border-amber-600';
        statusIcon = '▲';
      } else if (evalResult.status === 'danger') {
        pinColor = '#ef4444'; // red
        pinBg = 'bg-rose-600';
        pinBorder = 'border-rose-700';
        statusIcon = '!';
      }

      // Display text depending on viewMode
      let priceLabel = '';
      if (viewMode === 'recent') {
        priceLabel = `실거래 ${formatCompactPrice(recentPrice)}`;
      } else if (viewMode === 'listing') {
        priceLabel = `매물 ${formatCompactPrice(minListingPrice)}`;
      } else {
        priceLabel = `${formatCompactPrice(recentPrice)} / 매${formatCompactPrice(minListingPrice)}`;
      }

      // Custom HTML Marker Icon
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
        iconSize: [120, 32],
        iconAnchor: [60, 30],
        popupAnchor: [0, -28]
      });

      const marker = L.marker([apt.lat, apt.lng], { icon: customIcon }).addTo(map);

      // Popup Content
      const popupHtml = `
        <div style="font-family: inherit; min-width: 210px; padding: 4px;">
          <div style="font-size: 11px; color: #64748b; font-weight: 600;">${apt.city} ${apt.district} ${apt.dong}</div>
          <div style="font-size: 15px; font-weight: 800; color: #0f172a; margin-top: 2px;">${apt.name}</div>
          
          <div style="margin-top: 8px; padding: 8px; background-color: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0; font-size: 12px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
              <span style="color: #64748b;">직전 실거래가:</span>
              <strong style="color: #0284c7;">${formatPrice(recentPrice)} (${apt.recentTransaction.date})</strong>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
              <span style="color: #64748b;">실제 등록 매물:</span>
              <strong style="color: #10b981;">최저 ${formatPrice(minListingPrice)} (${apt.actualListings.length}건)</strong>
            </div>
            <div style="display: flex; justify-content: space-between; border-top: 1px dashed #cbd5e1; padding-top: 4px;">
              <span style="color: #64748b;">내 예산 적합도:</span>
              <span style="font-weight: 700; color: ${evalResult.color};">${evalResult.label}</span>
            </div>
          </div>

          <div style="margin-top: 8px; display: grid; grid-template-columns: 1fr 1fr; gap: 4px; font-size: 11px; color: #475569;">
            <div>🏗️ ${apt.builtYear}년 준공</div>
            <div>🏘️ ${apt.totalHouseholds.toLocaleString()}세대</div>
            <div>🚗 주차 ${apt.parkingPerHousehold}대</div>
            <div>🚇 ${apt.nearestStation.split(' ')[0]}</div>
          </div>
        </div>
      `;

      marker.bindPopup(popupHtml, { closeButton: false, offset: [0, -10] });

      marker.on('click', () => {
        onSelectApartment(apt);
      });

      markersRef.current[apt.id] = marker;
    });

    // If an apartment is selected, smoothly pan to it
    if (selectedApartment) {
      const selectedMarker = markersRef.current[selectedApartment.id];
      if (selectedMarker) {
        selectedMarker.openPopup();
      }
    }
  }, [apartments, viewMode, selectedApartment, userTotalBudgetManwon, onSelectApartment]);

  // Pan to selected apartment when user picks it from list
  useEffect(() => {
    if (!selectedApartment || !mapInstanceRef.current) return;
    mapInstanceRef.current.flyTo([selectedApartment.lat, selectedApartment.lng], 14, {
      duration: 1.2
    });
  }, [selectedApartment]);

  // Quick Region Panner
  const handleJumpRegion = (lat, lng, zoom = 12) => {
    if (!mapInstanceRef.current) return;
    mapInstanceRef.current.flyTo([lat, lng], zoom, { duration: 1 });
  };

  return (
    <div className="relative w-full h-full flex flex-col bg-slate-100 overflow-hidden">
      {/* Map Container */}
      <div ref={mapContainerRef} className="w-full h-full z-0 leaflet-map-wrapper" />

      {/* Top Floating Region Navigation Pills */}
      <div className="absolute top-3 left-14 z-[400] flex flex-wrap gap-1.5 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-md border border-slate-200 text-xs">
        <span className="text-slate-400 font-semibold self-center mr-1 hidden sm:inline">빠른 이동:</span>
        <button
          onClick={() => handleJumpRegion(37.525, 127.025, 11)}
          className="px-2 py-1 rounded-lg hover:bg-slate-100 text-slate-700 font-medium transition"
        >
          수도권 전체
        </button>
        <button
          onClick={() => handleJumpRegion(37.502, 127.045, 13)}
          className="px-2 py-1 rounded-lg hover:bg-emerald-50 text-emerald-700 font-semibold transition"
        >
          강남·서초·송파
        </button>
        <button
          onClick={() => handleJumpRegion(37.545, 126.965, 13)}
          className="px-2 py-1 rounded-lg hover:bg-blue-50 text-blue-700 font-semibold transition"
        >
          마포·용산·성동
        </button>
        <button
          onClick={() => handleJumpRegion(37.385, 127.115, 13)}
          className="px-2 py-1 rounded-lg hover:bg-purple-50 text-purple-700 font-semibold transition"
        >
          분당·판교
        </button>
        <button
          onClick={() => handleJumpRegion(37.427, 126.988, 14)}
          className="px-2 py-1 rounded-lg hover:bg-slate-100 text-slate-700 font-medium transition"
        >
          과천
        </button>
        <button
          onClick={() => handleJumpRegion(37.284, 127.058, 13)}
          className="px-2 py-1 rounded-lg hover:bg-slate-100 text-slate-700 font-medium transition"
        >
          광교
        </button>
        <button
          onClick={() => handleJumpRegion(37.200, 127.096, 13)}
          className="px-2 py-1 rounded-lg hover:bg-slate-100 text-slate-700 font-medium transition"
        >
          동탄
        </button>
      </div>

      {/* Top Right: Map Tile Layer Switcher (No API Key Required!) */}
      <div className="absolute top-3 right-3 z-[400] flex items-center bg-white/95 backdrop-blur-md rounded-xl p-1 shadow-md border border-slate-200 text-xs">
        <Layers className="w-3.5 h-3.5 text-slate-500 ml-2 mr-1" />
        <select
          value={activeTileKey}
          onChange={(e) => handleSwitchTileLayer(e.target.value)}
          className="bg-transparent text-slate-700 font-semibold text-xs py-1 px-1.5 focus:outline-none cursor-pointer"
        >
          <option value="osm">🗺️ OpenStreetMap (표준)</option>
          <option value="carto_voyager">🎨 Carto Voyager (모던)</option>
          <option value="carto_light">🏙️ Carto Light (심플)</option>
        </select>
      </div>

      {/* Bottom Floating Legend & Summary Pill */}
      <div className="absolute bottom-4 left-4 z-[400] bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-xl border border-slate-200/90 max-w-sm">
        <div className="text-xs font-bold text-slate-800 mb-2 flex items-center justify-between">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            내 예산 맞춤 핀 상태
          </span>
          <span className="text-[11px] text-slate-400 font-normal">서울·경기 한정</span>
        </div>
        <div className="grid grid-cols-3 gap-2 text-[11px]">
          <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-800 px-2 py-1 rounded-lg border border-emerald-200 font-medium">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 flex items-center justify-center text-[9px] text-white">✓</span>
            <span>예산 내 (안전)</span>
          </div>
          <div className="flex items-center gap-1.5 bg-amber-50 text-amber-800 px-2 py-1 rounded-lg border border-amber-200 font-medium">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 flex items-center justify-center text-[9px] text-white">▲</span>
            <span>근접 (10%내)</span>
          </div>
          <div className="flex items-center gap-1.5 bg-rose-50 text-rose-800 px-2 py-1 rounded-lg border border-rose-200 font-medium">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500 flex items-center justify-center text-[9px] text-white">!</span>
            <span>예산 초과</span>
          </div>
        </div>
        <p className="text-[10px] text-slate-500 mt-2">
          💡 별도 유료 API 키 없이 즉시 동작하며, 우측에서 자본금/대출을 조절하면 핀 색상이 실시간 변경됩니다.
        </p>
      </div>
    </div>
  );
}
