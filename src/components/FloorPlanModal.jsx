import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { X, Compass, Home, Layers, CheckCircle } from 'lucide-react';

export default function FloorPlanModal({ apartment, isOpen, onClose }) {
  const [selectedPlanIdx, setSelectedPlanIdx] = useState(0);

  if (!isOpen || !apartment) return null;

  const floorPlans = apartment.floorPlans && apartment.floorPlans.length > 0 
    ? apartment.floorPlans 
    : [
        {
          name: "84㎡ (34평형)",
          type: "4-Bay 판상형",
          rooms: "방3 / 욕실2 / 드레스룸 / 팬트리",
          bay: 4,
          structure: "맞통풍 우수 남향 설계",
          kitchen: "ㄷ자형 주방"
        }
      ];

  const currentPlan = floorPlans[selectedPlanIdx] || floorPlans[0];

  const modalContent = (
    <div 
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl border border-slate-300 w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden relative z-[100000]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-4 sm:px-6 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
              <Home className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-base text-white">{apartment.name} 상세 평면도</h3>
                <span className="text-[11px] bg-emerald-500 text-slate-950 font-bold px-2 py-0.5 rounded-full">
                  {currentPlan.type}
                </span>
              </div>
              <p className="text-xs text-slate-400">{apartment.city} {apartment.district} {apartment.dong} · 준공 {apartment.builtYear}년</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Plan Select Tabs */}
        {floorPlans.length > 1 && (
          <div className="flex bg-slate-100 p-2 gap-2 border-b border-slate-200 text-xs font-semibold">
            {floorPlans.map((plan, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedPlanIdx(idx)}
                className={`px-3 py-1.5 rounded-lg transition flex items-center gap-1.5 ${
                  selectedPlanIdx === idx 
                    ? 'bg-white text-emerald-700 shadow-sm font-bold border border-emerald-200' 
                    : 'text-slate-600 hover:bg-slate-200'
                }`}
              >
                <span>{plan.name}</span>
                <span className="text-[10px] text-slate-400 font-normal">({plan.type})</span>
              </button>
            ))}
          </div>
        )}

        {/* Modal Body: Architectural SVG Blueprint & Spec Sheet */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 grid grid-cols-1 md:grid-cols-3 gap-6 bg-slate-50">
          {/* Blueprint SVG (Left 2 cols) */}
          <div className="md:col-span-2 bg-white rounded-xl border border-slate-200 p-4 flex flex-col items-center justify-center shadow-inner relative">
            <div className="absolute top-3 left-3 flex items-center gap-1 bg-slate-100 px-2 py-1 rounded text-[11px] font-semibold text-slate-600">
              <Compass className="w-3.5 h-3.5 text-blue-500" />
              <span>남향 위주 배치</span>
            </div>
            <div className="absolute top-3 right-3 text-[10px] text-slate-400 font-mono">
              SCALE 1:100 (실측 기준 모식도)
            </div>

            {/* Custom Interactive SVG Floor Plan Drawing */}
            <svg viewBox="0 0 600 400" className="w-full max-h-[380px] select-none">
              {/* Outer Wall */}
              <rect x="30" y="30" width="540" height="340" fill="#f8fafc" stroke="#334155" strokeWidth="6" rx="4" />
              
              {/* Front Balcony (South) */}
              <rect x="30" y="320" width="540" height="50" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4 2" />
              <text x="300" y="350" textAnchor="middle" fill="#64748b" fontSize="12" fontWeight="bold">발코니 1 (남향 테라스 및 광폭 서비스면적)</text>

              {/* Back Balcony (North) */}
              <rect x="30" y="30" width="220" height="40" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4 2" />
              <text x="140" y="55" textAnchor="middle" fill="#64748b" fontSize="11">다용도실 / 세탁실</text>

              {/* Master Bedroom (안방) */}
              <rect x="30" y="160" width="170" height="160" fill="#ffffff" stroke="#475569" strokeWidth="3" />
              <text x="115" y="235" textAnchor="middle" fill="#0f172a" fontSize="14" fontWeight="bold">안방 (침실 1)</text>
              <text x="115" y="255" textAnchor="middle" fill="#64748b" fontSize="11">3.6m × 3.9m</text>
              
              {/* Dress Room & Master Bath */}
              <rect x="30" y="70" width="90" height="90" fill="#f0fdf4" stroke="#475569" strokeWidth="2" />
              <text x="75" y="115" textAnchor="middle" fill="#15803d" fontSize="11" fontWeight="bold">드레스룸</text>
              <rect x="120" y="70" width="80" height="90" fill="#e0f2fe" stroke="#475569" strokeWidth="2" />
              <text x="160" y="115" textAnchor="middle" fill="#0369a1" fontSize="11" fontWeight="bold">부부욕실</text>

              {/* Living Room (거실) */}
              <rect x="200" y="160" width="210" height="160" fill="#ffffff" stroke="#475569" strokeWidth="3" />
              <text x="305" y="235" textAnchor="middle" fill="#0f172a" fontSize="16" fontWeight="900">거 실</text>
              <text x="305" y="255" textAnchor="middle" fill="#64748b" fontSize="11">4.5m × 4.8m (우물천장)</text>

              {/* Kitchen & Dining */}
              <rect x="250" y="30" width="160" height="130" fill="#ffffff" stroke="#475569" strokeWidth="3" />
              <text x="330" y="90" textAnchor="middle" fill="#0f172a" fontSize="14" fontWeight="bold">주방 / 식당</text>
              <rect x="260" y="40" width="80" height="20" fill="#cbd5e1" stroke="#64748b" strokeWidth="1" />
              <text x="300" y="55" textAnchor="middle" fill="#334155" fontSize="10">싱크대 / 인덕션</text>
              <rect x="350" y="40" width="50" height="20" fill="#cbd5e1" stroke="#64748b" strokeWidth="1" />
              <text x="375" y="55" textAnchor="middle" fill="#334155" fontSize="10">냉장고장</text>

              {/* Bedroom 2 */}
              <rect x="410" y="180" width="160" height="140" fill="#ffffff" stroke="#475569" strokeWidth="3" />
              <text x="490" y="245" textAnchor="middle" fill="#0f172a" fontSize="13" fontWeight="bold">침실 2</text>
              <text x="490" y="265" textAnchor="middle" fill="#64748b" fontSize="11">3.0m × 3.3m</text>

              {/* Bedroom 3 */}
              <rect x="410" y="30" width="160" height="110" fill="#ffffff" stroke="#475569" strokeWidth="3" />
              <text x="490" y="80" textAnchor="middle" fill="#0f172a" fontSize="13" fontWeight="bold">침실 3</text>
              <text x="490" y="100" textAnchor="middle" fill="#64748b" fontSize="11">붙박이장 기본</text>

              {/* Common Bath & Entrance */}
              <rect x="200" y="70" width="50" height="90" fill="#e0f2fe" stroke="#475569" strokeWidth="2" />
              <text x="225" y="120" textAnchor="middle" fill="#0369a1" fontSize="10" fontWeight="bold">공용욕실</text>
              <rect x="410" y="140" width="50" height="40" fill="#fef3c7" stroke="#475569" strokeWidth="2" />
              <text x="435" y="165" textAnchor="middle" fill="#b45309" fontSize="10" fontWeight="bold">현관</text>
            </svg>

            <div className="w-full flex items-center justify-between text-[11px] text-slate-500 mt-3 pt-2 border-t border-slate-100">
              <span>* 본 평면도는 타입별 표준 설계도면 기준이며 동호수별 상이할 수 있습니다.</span>
              <span className="font-semibold text-emerald-600">4-Bay 맞통풍 환기 구조</span>
            </div>
          </div>

          {/* Right Column: Spec Detail Cards */}
          <div className="space-y-3 text-xs">
            {/* Structure Highlights */}
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-2.5 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-emerald-600" />
                구조 및 공간 특화
              </h4>
              <div className="space-y-2">
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">전용/공급 면적:</span>
                  <span className="font-bold text-slate-800">전용 84.9㎡ / 공급 112㎡</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">방 / 욕실수:</span>
                  <span className="font-bold text-slate-800">{currentPlan.rooms}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Bay 구조:</span>
                  <span className="font-bold text-emerald-600">{currentPlan.bay}-Bay 전면 배치</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">통풍/환기:</span>
                  <span className="font-bold text-slate-800">{currentPlan.structure}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">주방 구조:</span>
                  <span className="font-bold text-slate-800">{currentPlan.kitchen || "ㄷ자형 와이드 키친"}</span>
                </div>
              </div>
            </div>

            {/* Parking & Living Specs */}
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-blue-600" />
                단지 주차 및 지형 스펙
              </h4>
              <div className="space-y-1.5 text-slate-600">
                <p>🚗 <strong>주차:</strong> {apartment.parkingTotal ? `총 ${apartment.parkingTotal.toLocaleString()}대 (세대당 ${apartment.parkingPerHousehold}대)` : `세대당 ${apartment.parkingPerHousehold}대`}</p>
                <p>⚡ <strong>전기차 충전:</strong> {apartment.evChargers || "충전기 완비"}</p>
                <p>🏢 <strong>지하주차장 직결:</strong> {apartment.undergroundParkingDirect ? "전동 엘리베이터 직통 연결 (O)" : "지상/지하 혼합"}</p>
                <p>⛰️ <strong>단지 지형:</strong> {apartment.slopeStatus || "평지 단지"}</p>
              </div>
            </div>

            {/* Convenience Radius */}
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-2">도보 생활권 실측 정보</h4>
              <div className="space-y-1 text-slate-600 text-[11px]">
                <p>🏪 <strong>편의점:</strong> {apartment.amenities?.convenienceStore}</p>
                <p>💄 <strong>올리브영:</strong> {apartment.amenities?.oliveyoung}</p>
                <p>🛒 <strong>다이소:</strong> {apartment.amenities?.daiso}</p>
                <p>🚇 <strong>역세권:</strong> {apartment.amenities?.subwayDetail || apartment.nearestStation}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-3 bg-white border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-800 hover:bg-slate-900 text-white rounded-xl text-xs font-bold transition"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
