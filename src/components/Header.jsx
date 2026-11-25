import React from 'react';
import { 
  Building2, 
  Search, 
  SlidersHorizontal, 
  CheckCircle2, 
  TrendingUp, 
  Home, 
  Coins, 
  MapPin, 
  Sparkles,
  RotateCcw
} from 'lucide-react';

export default function Header({ 
  filters, 
  setFilters, 
  viewMode, 
  setViewMode, 
  totalCount, 
  filteredCount,
  onResetFilters
}) {
  return (
    <header className="bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-50 shadow-md">
      {/* Upper Main Bar */}
      <div className="px-4 py-3 flex flex-wrap items-center justify-between gap-3">
        {/* Brand & Title */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center shadow-lg shadow-emerald-500/20">
            <Building2 className="w-6 h-6 text-slate-950 font-bold" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-bold tracking-tight text-white flex items-center gap-1.5">
                수도권 내집마련 실황 체크 현황판
              </h1>
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                서울·경기 전용
              </span>
            </div>
            <p className="text-xs text-slate-400 hidden sm:block">
              실거래가 시세와 실제 매물 분리 조회 · 내 예산 맞춤형 실시간 적합도(녹색/적색) 진단
            </p>
          </div>
        </div>

        {/* View Mode Switcher (직전 실거래가 vs 실제 매물 vs 전체) */}
        <div className="flex items-center bg-slate-800/90 p-1 rounded-xl border border-slate-700/80">
          <button
            onClick={() => setViewMode('recent')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              viewMode === 'recent'
                ? 'bg-emerald-500 text-slate-950 shadow-sm font-bold'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5" />
            <span>직전 실거래가</span>
          </button>
          <button
            onClick={() => setViewMode('listing')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              viewMode === 'listing'
                ? 'bg-blue-500 text-white shadow-sm font-bold'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <Home className="w-3.5 h-3.5" />
            <span>실제 등록 매물</span>
          </button>
          <button
            onClick={() => setViewMode('both')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              viewMode === 'both'
                ? 'bg-purple-500 text-white shadow-sm font-bold'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>동시 비교</span>
          </button>
        </div>
      </div>

      {/* Lower Filter Ribbon */}
      <div className="px-4 py-2.5 bg-slate-950/60 border-t border-slate-800/80 flex flex-wrap items-center gap-2.5 text-xs">
        {/* Search Input */}
        <div className="relative min-w-[200px] flex-1 sm:flex-initial">
          <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={filters.keyword}
            onChange={(e) => setFilters(prev => ({ ...prev, keyword: e.target.value }))}
            placeholder="아파트명, 동, 역 이름 검색..."
            className="w-full pl-8 pr-3 py-1.5 bg-slate-800 text-white placeholder-slate-400 rounded-lg border border-slate-700 focus:outline-none focus:border-emerald-500 text-xs transition-colors"
          />
        </div>

        {/* District Selector */}
        <select
          value={filters.region}
          onChange={(e) => setFilters(prev => ({ ...prev, region: e.target.value }))}
          className="bg-slate-800 text-slate-200 border border-slate-700 rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-emerald-500 text-xs cursor-pointer"
        >
          <option value="all">📍 지역 전체 (서울/경기)</option>
          <optgroup label="서울 주요 권역">
            <option value="gangnam">강남 / 서초 / 송파</option>
            <option value="mayong">마포 / 용산 / 성동 (마용성)</option>
            <option value="seoul_etc">노원 / 서대문 등 서울 기타</option>
          </optgroup>
          <optgroup label="경기 주요 권역">
            <option value="bundang_pangyo">분당 / 판교 / 과천</option>
            <option value="newtown">광교 / 동탄 / 하남 / 일산 신도시</option>
          </optgroup>
        </select>

        {/* Price Filter */}
        <select
          value={filters.priceRange}
          onChange={(e) => setFilters(prev => ({ ...prev, priceRange: e.target.value }))}
          className="bg-slate-800 text-slate-200 border border-slate-700 rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-emerald-500 text-xs cursor-pointer"
        >
          <option value="all">💰 가격대 전체</option>
          <option value="under10">10억 이하</option>
          <option value="10to15">10억 ~ 15억</option>
          <option value="15to20">15억 ~ 20억</option>
          <option value="over20">20억 초과</option>
        </select>

        {/* Built Year Filter */}
        <select
          value={filters.builtYear}
          onChange={(e) => setFilters(prev => ({ ...prev, builtYear: e.target.value }))}
          className="bg-slate-800 text-slate-200 border border-slate-700 rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-emerald-500 text-xs cursor-pointer"
        >
          <option value="all">🏗️ 준공년도 전체</option>
          <option value="new5">5년 이내 (신축: 2019~)</option>
          <option value="under10">10년 이내 (2014~)</option>
          <option value="over20">20년 이상 (재건축 연한)</option>
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
