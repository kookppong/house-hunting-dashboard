import React from 'react';
import { 
  Building2, 
  Search, 
  TrendingUp, 
  Home, 
  Sparkles,
  RotateCcw,
  MapPin,
  Landmark,
  KeyRound,
  CalendarCheck
} from 'lucide-react';
import { QUICK_REGIONS } from '../data/apartmentsData';

export default function Header({ 
  filters, 
  setFilters, 
  viewMode, 
  setViewMode, 
  tradeType,
  setTradeType,
  totalCount, 
  filteredCount,
  onResetFilters,
  onJumpRegion,
  customPinsCount,
  onOpenPinManager,
  showLandmarks,
  setShowLandmarks,
  isDroppingPin
}) {
  return (
    <header className="bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-50 shadow-md">
      {/* 1. Main Navigation Bar */}
      <div className="px-4 py-2.5 flex flex-wrap items-center justify-between gap-3">
        {/* Brand & Title */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center shadow-lg shadow-emerald-500/20">
            <Building2 className="w-5 h-5 text-slate-950 font-bold" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-base sm:text-lg font-bold tracking-tight text-white flex items-center gap-1.5">
                수도권 내집마련 실황 체크 현황판
              </h1>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                2026 최신판
              </span>
            </div>
            <p className="text-[11px] text-slate-400 hidden md:block">
              실거래가·등록매물 분리 조회 · 내 예산(매매/전세대출) 실시간 적합도(녹색/적색) 진단
            </p>
          </div>
        </div>

        {/* Trade Type Switcher [ 매매 | 전세 | 월세 ] (02 요구사항) */}
        <div className="flex items-center bg-slate-950/80 p-1 rounded-xl border border-slate-700">
          <button
            onClick={() => setTradeType('sale')}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              tradeType === 'sale'
                ? 'bg-emerald-500 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <span>🏷️ 매매</span>
          </button>
          <button
            onClick={() => setTradeType('jeonse')}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              tradeType === 'jeonse'
                ? 'bg-blue-500 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <KeyRound className="w-3 h-3" />
            <span>전세</span>
          </button>
          <button
            onClick={() => setTradeType('rent')}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              tradeType === 'rent'
                ? 'bg-amber-500 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <CalendarCheck className="w-3 h-3" />
            <span>월세</span>
          </button>
        </div>

        {/* View Mode Switcher [ 직전 실거래가 | 실제 등록 매물 | 동시 비교 ] */}
        <div className="flex items-center bg-slate-800/90 p-1 rounded-xl border border-slate-700/80">
          <button
            onClick={() => setViewMode('recent')}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              viewMode === 'recent'
                ? 'bg-emerald-500 text-slate-950 font-bold'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5" />
            <span>직전 실거래가</span>
          </button>
          <button
            onClick={() => setViewMode('listing')}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              viewMode === 'listing'
                ? 'bg-blue-500 text-white font-bold'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <Home className="w-3.5 h-3.5" />
            <span>실제 등록 매물</span>
          </button>
          <button
            onClick={() => setViewMode('both')}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              viewMode === 'both'
                ? 'bg-purple-500 text-white font-bold'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>동시 비교</span>
          </button>
        </div>

        {/* Quick Utilities: My Custom Pins & Landmarks Toggle */}
        <div className="flex items-center gap-1.5">
          {/* Custom Pins Manager Button */}
          <button
            onClick={onOpenPinManager}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-bold border transition ${
              isDroppingPin
                ? 'bg-rose-600 text-white border-rose-500 animate-pulse'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
            }`}
          >
            <MapPin className="w-3.5 h-3.5 text-blue-400" />
            <span>내 거점 핀</span>
            <span className="bg-blue-500/20 text-blue-300 text-[10px] px-1.5 rounded-full">
              {customPinsCount}
            </span>
          </button>

          {/* Landmarks Toggle Button */}
          <button
            onClick={() => setShowLandmarks(!showLandmarks)}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-bold border transition ${
              showLandmarks
                ? 'bg-pink-600 text-white border-pink-500'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700'
            }`}
          >
            <Landmark className="w-3.5 h-3.5 text-pink-400" />
            <span>랜드마크</span>
            <span className="text-[10px] opacity-80">{showLandmarks ? 'ON' : 'OFF'}</span>
          </button>
        </div>
      </div>

      {/* 2. Filter & Quick Jump Ribbon */}
      <div className="px-4 py-2 bg-slate-950/70 border-t border-slate-800/80 flex flex-wrap items-center gap-2 text-xs">
        {/* Search Input */}
        <div className="relative min-w-[180px] flex-1 sm:flex-initial">
          <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={filters.keyword}
            onChange={(e) => setFilters(prev => ({ ...prev, keyword: e.target.value }))}
            placeholder="아파트명, 동, 역세권 검색..."
            className="w-full pl-8 pr-3 py-1.5 bg-slate-800 text-white placeholder-slate-400 rounded-lg border border-slate-700 focus:outline-none focus:border-emerald-500 text-xs"
          />
        </div>

        {/* Quick District Jump Dropdown (03 요구사항: 다른 구들 추가) */}
        <select
          onChange={(e) => {
            const region = QUICK_REGIONS.find(r => r.name === e.target.value);
            if (region) onJumpRegion(region.lat, region.lng, region.zoom);
          }}
          defaultValue=""
          className="bg-slate-800 text-emerald-400 font-semibold border border-slate-700 rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-emerald-500 text-xs cursor-pointer"
        >
          <option value="" disabled>🚀 주요 구·지역 바로가기</option>
          <optgroup label="서울 주요 권역">
            <option value="강남·서초·송파">강남·서초·송파</option>
            <option value="마포·용산·성동">마포·용산·성동 (마용성)</option>
            <option value="영등포·여의도·양천">영등포·여의도·양천(목동)</option>
            <option value="노원·도봉·강북">노원·도봉·강북</option>
            <option value="강동·광진">강동·광진</option>
            <option value="서대문·은평">서대문·은평</option>
          </optgroup>
          <optgroup label="경기 주요 권역">
            <option value="분당·판교">성남 분당·판교</option>
            <option value="과천·안양(평촌)">과천·안양(평촌)</option>
            <option value="광교(수원)·수지">수원(광교)·용인(수지)</option>
            <option value="동탄(화성)">화성 동탄신도시</option>
            <option value="하남(미사)·남양주">하남 미사·남양주</option>
            <option value="일산(고양)">고양 일산신도시</option>
          </optgroup>
        </select>

        {/* Price Range Filter */}
        <select
          value={filters.priceRange}
          onChange={(e) => setFilters(prev => ({ ...prev, priceRange: e.target.value }))}
          className="bg-slate-800 text-slate-200 border border-slate-700 rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-emerald-500 text-xs cursor-pointer"
        >
          <option value="all">💰 가격대 전체</option>
          <option value="under10">10억 이하 (가성비)</option>
          <option value="10to15">10억 ~ 15억</option>
          <option value="15to20">15억 ~ 20억</option>
          <option value="over20">20억 초과 (하이엔드)</option>
        </select>

        {/* Built Year Filter */}
        <select
          value={filters.builtYear}
          onChange={(e) => setFilters(prev => ({ ...prev, builtYear: e.target.value }))}
          className="bg-slate-800 text-slate-200 border border-slate-700 rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-emerald-500 text-xs cursor-pointer"
        >
          <option value="all">🏗️ 준공년도 전체</option>
          <option value="new5">5년 이내 (신축: 2021~)</option>
          <option value="under10">10년 이내 (2016~)</option>
          <option value="over20">20년 이상 (재건축 대상)</option>
        </select>

        {/* Households Filter */}
        <select
          value={filters.households}
          onChange={(e) => setFilters(prev => ({ ...prev, households: e.target.value }))}
          className="bg-slate-800 text-slate-200 border border-slate-700 rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-emerald-500 text-xs cursor-pointer"
        >
          <option value="all">🏘️ 세대수 전체</option>
          <option value="500">500세대 이상</option>
          <option value="1000">1,000세대 이상 대단지</option>
          <option value="2000">2,000세대 이상 초대단지</option>
        </select>

        {/* Reset Filter Button */}
        <button
          onClick={onResetFilters}
          title="필터 초기화"
          className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors border border-transparent hover:border-slate-700 flex items-center gap-1"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span className="hidden md:inline">초기화</span>
        </button>

        {/* Counter Badge */}
        <div className="ml-auto flex items-center gap-2 text-slate-400">
          <span>검색 단지:</span>
          <span className="font-semibold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/50">
            {filteredCount} / {totalCount}개
          </span>
        </div>
      </div>
    </header>
  );
}
