import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { MapPin, Briefcase, Home, GraduationCap, Star, Plus, Trash2, X, Crosshair } from 'lucide-react';

export const PIN_TYPES = {
  company: { label: '직장/회사', icon: '🏢', color: '#3b82f6', bg: 'bg-blue-600' },
  home: { label: '현재 집/본가', icon: '🏠', color: '#10b981', bg: 'bg-emerald-600' },
  school: { label: '학교/어린이집', icon: '🏫', color: '#f59e0b', bg: 'bg-amber-600' },
  custom: { label: '관심 거점', icon: '⭐️', color: '#8b5cf6', bg: 'bg-purple-600' }
};

export const PRESET_PINS = [
  { name: '강남역 테헤란로 (GBD)', type: 'company', lat: 37.4979, lng: 127.0276 },
  { name: '판교역 테크노밸리', type: 'company', lat: 37.3948, lng: 127.1112 },
  { name: '여의도 금융 중심가 (YBD)', type: 'company', lat: 37.5218, lng: 126.9242 },
  { name: '광화문·종로 도심 (CBD)', type: 'company', lat: 37.5714, lng: 126.9768 },
  { name: '상암 디지털미디어시티', type: 'company', lat: 37.5785, lng: 126.8912 },
  { name: '가산디지털단지', type: 'company', lat: 37.4815, lng: 126.8825 }
];

// Haversine distance calculator in KM
export function calculateDistanceKm(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c * 10) / 10;
}

// Commute estimate helper
export function estimateCommuteTime(km) {
  if (km <= 3) return { time: "약 10~15분", transit: "지하철 1~2정거장 or 자전거/도보" };
  if (km <= 7) return { time: "약 20~25분", transit: "지하철 3~5정거장" };
  if (km <= 15) return { time: "약 30~40분", transit: "지하철 환승 1회 or 광역버스" };
  if (km <= 25) return { time: "약 45~55분", transit: "광역버스/급행전철" };
  return { time: "약 60분 이상", transit: "광역교통망 필수 (GTX/광역버스)" };
}

export default function CustomPinManager({
  customPins,
  onAddPin,
  onDeletePin,
  isDroppingPin,
  setIsDroppingPin,
  isOpen,
  onClose
}) {
  if (!isOpen) return null;

  const handleAddPreset = (preset) => {
    onAddPin({
      id: `pin-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      name: preset.name,
      type: preset.type,
      lat: preset.lat,
      lng: preset.lng
    });
  };

  const modalContent = (
    <div 
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl border border-slate-300 w-full max-w-lg max-h-[85vh] flex flex-col overflow-hidden relative z-[100000]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base">나만의 거점 핀 관리 (집·직장 등)</h3>
              <p className="text-xs text-slate-400">등록한 핀과 각 아파트 간의 출퇴근 거리·소요시간이 자동 계산됩니다.</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 flex-1 overflow-y-auto space-y-4 text-xs">
          {/* Map click drop mode banner */}
          <div className="bg-blue-50 p-3.5 rounded-xl border border-blue-200 flex items-center justify-between">
            <div>
              <span className="font-bold text-blue-900 block">지도 직접 클릭해서 핀 찍기</span>
              <span className="text-[11px] text-blue-700">활성화 후 지도의 원하는 지점을 클릭하면 즉시 핀이 추가됩니다.</span>
            </div>
            <button
              onClick={() => {
                setIsDroppingPin(!isDroppingPin);
                onClose();
              }}
              className={`px-3 py-1.5 rounded-lg font-bold flex items-center gap-1 transition ${
                isDroppingPin ? 'bg-rose-600 text-white animate-pulse' : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              <Crosshair className="w-3.5 h-3.5" />
              <span>{isDroppingPin ? '핀 찍기 해제' : '지도에 핀 찍기'}</span>
            </button>
          </div>

          {/* Quick Preset Buttons */}
          <div>
            <label className="font-bold text-slate-700 mb-1.5 block">주요 업무지구 1초 원클릭 추가:</label>
            <div className="grid grid-cols-2 gap-1.5">
              {PRESET_PINS.map((preset, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAddPreset(preset)}
                  className="p-2 rounded-lg border border-slate-200 bg-slate-50 hover:bg-emerald-50 hover:border-emerald-300 text-left transition flex items-center justify-between group"
                >
                  <span className="font-medium text-slate-800 group-hover:text-emerald-700">🏢 {preset.name}</span>
                  <Plus className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-600" />
                </button>
              ))}
            </div>
          </div>

          {/* My Current Pins List */}
          <div className="pt-2 border-t border-slate-100">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-slate-800">등록된 나의 핀 목록 ({customPins.length}개)</span>
            </div>

            {customPins.length === 0 ? (
              <div className="p-6 text-center text-slate-400 bg-slate-50 rounded-xl border border-dashed border-slate-200">
                등록된 핀이 없습니다. 상단에서 직장 위치를 추가해보세요!
              </div>
            ) : (
              <div className="space-y-2">
                {customPins.map((pin) => {
                  const typeInfo = PIN_TYPES[pin.type] || PIN_TYPES.company;
                  return (
                    <div key={pin.id} className="p-3 bg-white border border-slate-200 rounded-xl flex items-center justify-between shadow-xs">
                      <div className="flex items-center gap-2.5">
                        <span className="text-xl">{typeInfo.icon}</span>
                        <div>
                          <strong className="text-slate-900 block">{pin.name}</strong>
                          <span className="text-[10px] text-slate-500">
                            {typeInfo.label} · 위도 {pin.lat.toFixed(4)}, 경도 {pin.lng.toFixed(4)}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => onDeletePin(pin.id)}
                        className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition"
                        title="핀 삭제"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800"
          >
            확인 및 완료
          </button>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
