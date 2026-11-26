import React, { useState } from 'react';
import { 
  formatPrice, 
  formatCompactPrice, 
  calculateAcquisitionCosts, 
  calculateJeonseCosts,
  calculateMonthlyPayment, 
  calculateMonthlyJeonseInterest,
  getBudgetEvaluation 
} from '../utils/calculator';
import { calculateDistanceKm, estimateCommuteTime, PIN_TYPES } from './CustomPinManager';
import { 
  Building, 
  Wallet, 
  PiggyBank, 
  Landmark, 
  Calculator, 
  CheckCircle2, 
  AlertTriangle, 
  XCircle, 
  Home, 
  Layers, 
  Sparkles,
  Maximize2,
  Car,
  Zap,
  Mountain,
  Store,
  Navigation,
  KeyRound,
  CalendarCheck,
  CheckCircle
} from 'lucide-react';
import FloorPlanModal from './FloorPlanModal';

export default function BudgetSimulator({
  selectedApartment,
  userBudget,
  setUserBudget,
  viewMode,
  tradeType,
  selectedListing,
  onSelectListing,
  customPins = []
}) {
  const [activeTab, setActiveTab] = useState('budget'); // 'budget' | 'cost' | 'specs'
  const [isFloorPlanOpen, setIsFloorPlanOpen] = useState(false);

  if (!selectedApartment) {
    return (
      <div className="h-full flex flex-col items-center justify-center p-8 text-center bg-slate-50 text-slate-500">
        <Building className="w-16 h-16 text-slate-300 mb-4 animate-bounce" />
        <h3 className="text-lg font-bold text-slate-700">분석할 아파트를 선택하세요</h3>
        <p className="text-sm mt-1 text-slate-500">
          왼쪽 지도에서 아파트 핀을 클릭하거나 상단 필터로 검색해보세요.
        </p>
      </div>
    );
  }

  // Active pricing base determination
  const recentSalePrice = selectedApartment.recentTransaction.price;
  const jeonseBasePrice = selectedApartment.jeonsePrice || Math.round(recentSalePrice * 0.55);
  const rentBaseInfo = selectedApartment.monthlyRent || { deposit: 15000, rent: 250 };

  const listings = selectedApartment.actualListings || [];
  const filteredListings = listings.filter(l => l.tradeType === tradeType);

  let activePrice = recentSalePrice;
  if (tradeType === 'sale') {
    const minSale = filteredListings.length > 0 ? Math.min(...filteredListings.map(l => l.price)) : recentSalePrice;
    activePrice = selectedListing ? selectedListing.price : (viewMode === 'listing' ? minSale : recentSalePrice);
  } else if (tradeType === 'jeonse') {
    const minJeonse = filteredListings.length > 0 ? Math.min(...filteredListings.map(l => l.price)) : jeonseBasePrice;
    activePrice = selectedListing ? selectedListing.price : (viewMode === 'listing' ? minJeonse : jeonseBasePrice);
  } else {
    // Rent
    activePrice = selectedListing ? selectedListing.price : rentBaseInfo.deposit;
  }

  // 1. Costs Calculation
  let costs = null;
  if (tradeType === 'sale') {
    costs = calculateAcquisitionCosts(activePrice, 34, userBudget.movingCost);
  } else if (tradeType === 'jeonse') {
    costs = calculateJeonseCosts(activePrice, 300);
  } else {
    costs = {
      priceManwon: activePrice,
      totalAdditionalCostManwon: 150,
      totalRequiredBudgetManwon: activePrice + 150
    };
  }

  // 2. Loan & Capital Calculation
  // Mortgage Loan (매매) vs Jeonse Loan (전세대출 - 05 요구사항)
  let loanPrincipalManwon = 0;
  let monthlyRepaymentWon = 0;
  let totalAvailableCapital = 0;

  if (tradeType === 'sale') {
    const mortgageCap = Math.round(activePrice * (userBudget.ltvRate / 100));
    loanPrincipalManwon = mortgageCap + userBudget.creditLoan;
    monthlyRepaymentWon = calculateMonthlyPayment(loanPrincipalManwon, userBudget.interestRate, userBudget.loanTermYears);
    totalAvailableCapital = userBudget.cash + userBudget.jeonseReturn + userBudget.creditLoan + mortgageCap;
  } else if (tradeType === 'jeonse') {
    // 전세대출: 보증금의 최대 80% 한도 (수도권 일반 시중은행 5억, HUG/HF 기준)
    const jeonseLoanCap = Math.round(activePrice * (userBudget.jeonseLoanRate / 100));
    loanPrincipalManwon = jeonseLoanCap + userBudget.creditLoan;
    // 전세대출은 원금 균등상환이 아닌 '만기일시상환(매월 이자만 납부)'
    monthlyRepaymentWon = calculateMonthlyJeonseInterest(loanPrincipalManwon, userBudget.jeonseInterestRate);
    totalAvailableCapital = userBudget.cash + userBudget.jeonseReturn + userBudget.creditLoan + jeonseLoanCap;
  } else {
    // 월세
    totalAvailableCapital = userBudget.cash + userBudget.jeonseReturn;
    monthlyRepaymentWon = (rentBaseInfo.rent * 10000) + 250000; // 월세 + 관리비
  }

  // Budget Evaluation
  const evaluation = getBudgetEvaluation(costs.totalRequiredBudgetManwon, totalAvailableCapital);

  return (
    <div className="h-full flex flex-col bg-slate-50 border-l border-slate-200 overflow-y-auto">
      {/* 1. Header: Apartment Basic Specs */}
      <div className="bg-white p-4 sm:p-5 border-b border-slate-200 shadow-sm sticky top-0 z-20">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                {selectedApartment.city} {selectedApartment.district}
              </span>
              <span className="text-xs text-slate-500 font-medium">
                {selectedApartment.dong}
              </span>
              <span className="text-[10px] font-black px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800">
                {tradeType === 'sale' ? '매매' : tradeType === 'jeonse' ? '전세' : '월세'} 모드
              </span>
            </div>
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-1 flex items-center gap-2">
              {selectedApartment.name}
            </h2>
          </div>

          <div className="text-right">
            <span className="text-[11px] text-slate-500 block">선택 기준 가격</span>
            <span className="text-lg font-black text-slate-900">
              {tradeType === 'rent' ? `보증금 ${formatPrice(activePrice)} / 월 ${rentBaseInfo.rent}만` : formatPrice(activePrice)}
            </span>
            <div className="text-[11px] text-slate-500">
              {selectedListing ? (
                <span className="text-blue-600 font-semibold">{selectedListing.dong} {selectedListing.floor}</span>
              ) : viewMode === 'listing' ? (
                <span className="text-blue-600 font-semibold">실제 매물 최저가 기준</span>
              ) : (
                <span className="text-emerald-600 font-semibold">최근 실거래가 기준</span>
              )}
            </div>
          </div>
        </div>

        {/* Tags & Floor Plan Action Button */}
        <div className="flex flex-wrap items-center justify-between gap-1.5 mt-2.5">
          <div className="flex flex-wrap gap-1.5">
            {selectedApartment.tags.map((tag, idx) => (
              <span key={idx} className="text-[10px] font-medium bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full border border-emerald-200/60">
                #{tag}
              </span>
            ))}
          </div>
          {/* Floor Plan View Button (06 요구사항) */}
          <button
            onClick={() => setIsFloorPlanOpen(true)}
            className="px-2.5 py-1 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-bold flex items-center gap-1 shadow-sm transition"
          >
            <Maximize2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>📐 평면도 보기</span>
          </button>
        </div>

        {/* 2. THE HIGHLIGHT: Budget Match Check Bar (녹색 체크바 ↔ 붉은색 바) */}
        <div className="mt-3.5 p-3.5 rounded-xl border transition-all duration-300"
          style={{
            backgroundColor: evaluation.status === 'safe' ? '#f0fdf4' : evaluation.status === 'warning' ? '#fefce8' : '#fef2f2',
            borderColor: evaluation.status === 'safe' ? '#bbf7d0' : evaluation.status === 'warning' ? '#fef08a' : '#fecaca'
          }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {evaluation.status === 'safe' ? (
                <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold shadow-md shadow-emerald-500/30">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              ) : evaluation.status === 'warning' ? (
                <div className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold shadow-md shadow-amber-500/30">
                  <AlertTriangle className="w-3.5 h-3.5" />
                </div>
              ) : (
                <div className="w-6 h-6 rounded-full bg-rose-600 text-white flex items-center justify-center font-bold shadow-md shadow-rose-600/30">
                  <XCircle className="w-4 h-4" />
                </div>
              )}
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600 block">
                  예산 적합도 진단
                </span>
                <span className="text-sm font-black" style={{ color: evaluation.color }}>
                  {evaluation.label}
                </span>
              </div>
            </div>

            <div className="text-right">
              <span className="text-[10px] text-slate-500 block">예산 격차</span>
              <span className="text-xs sm:text-sm font-black" style={{ color: evaluation.color }}>
                {evaluation.diff >= 0 ? `+${formatPrice(evaluation.diff)} 여유` : `-${formatPrice(Math.abs(evaluation.diff))} 부족`}
              </span>
            </div>
          </div>

          {/* Visual Gauge Bar */}
          <div className="mt-2.5">
            <div className="flex justify-between text-[11px] text-slate-600 font-semibold mb-1">
              <span>내 가용 예산: <strong>{formatPrice(totalAvailableCapital)}</strong></span>
              <span>총 필요 자금: <strong>{formatPrice(costs.totalRequiredBudgetManwon)}</strong></span>
            </div>
            
            <div className="w-full h-3 bg-slate-200/80 rounded-full overflow-hidden p-0.5 relative shadow-inner">
              <div 
                className={`h-full rounded-full transition-all duration-500 ${
                  evaluation.status === 'safe' 
                    ? 'bg-gradient-to-r from-emerald-500 to-green-500' 
                    : evaluation.status === 'warning'
                    ? 'bg-gradient-to-r from-amber-400 to-amber-500'
                    : 'bg-gradient-to-r from-rose-500 to-red-600'
                }`}
                style={{ width: `${Math.min(100, (totalAvailableCapital / costs.totalRequiredBudgetManwon) * 100)}%` }}
              />
            </div>
            
            <div className="flex justify-between items-center text-[10px] text-slate-500 mt-1">
              <span>자금 충족률: <strong className="text-slate-800">{Math.round((totalAvailableCapital / costs.totalRequiredBudgetManwon) * 100)}%</strong></span>
              <span className="italic">{evaluation.message}</span>
            </div>
          </div>
        </div>

        {/* 3. Navigation Tabs */}
        <div className="flex border-b border-slate-200 mt-3.5 -mb-1 text-xs font-bold">
          <button
            onClick={() => setActiveTab('budget')}
            className={`flex-1 py-2 text-center border-b-2 transition flex items-center justify-center gap-1.5 ${
              activeTab === 'budget' 
                ? 'border-emerald-600 text-emerald-700 bg-emerald-50/50' 
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <Wallet className="w-3.5 h-3.5" />
            <span>내 예산 & {tradeType === 'jeonse' ? '전세대출' : '대출'}</span>
          </button>
          <button
            onClick={() => setActiveTab('cost')}
            className={`flex-1 py-2 text-center border-b-2 transition flex items-center justify-center gap-1.5 ${
              activeTab === 'cost' 
                ? 'border-emerald-600 text-emerald-700 bg-emerald-50/50' 
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <Calculator className="w-3.5 h-3.5" />
            <span>비용 상세</span>
          </button>
          <button
            onClick={() => setActiveTab('specs')}
            className={`flex-1 py-2 text-center border-b-2 transition flex items-center justify-center gap-1.5 ${
              activeTab === 'specs' 
                ? 'border-emerald-600 text-emerald-700 bg-emerald-50/50' 
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <Home className="w-3.5 h-3.5" />
            <span>단지스펙 & 매물</span>
          </button>
        </div>
      </div>

      {/* 4. Tab Contents */}
      <div className="p-4 sm:p-5 flex-1 space-y-4">
        {/* TAB 1: 내 예산 구성 & 대출 (매매 주담대 or 전세대출) */}
        {activeTab === 'budget' && (
          <div className="space-y-4">
            {/* Total Available Capital Summary Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-4 rounded-xl shadow-md">
              <div className="text-xs text-slate-400 flex items-center justify-between">
                <span>현재 나의 총 가용 자금</span>
                <span className="text-emerald-400 font-semibold">{tradeType === 'jeonse' ? '전세자금 모드' : '매매 자금 모드'}</span>
              </div>
              <div className="text-2xl font-black text-white mt-1">
                {formatPrice(totalAvailableCapital)}
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2 text-xs pt-2.5 border-t border-slate-700/80">
                <div>
                  <span className="text-slate-400">순수 자기자본:</span>
                  <span className="font-bold text-slate-200 ml-1">
                    {formatPrice(userBudget.cash + userBudget.jeonseReturn)}
                  </span>
                </div>
                <div>
                  <span className="text-slate-400">대출 조달액:</span>
                  <span className="font-bold text-amber-300 ml-1">
                    {formatPrice(loanPrincipalManwon)}
                  </span>
                </div>
              </div>
            </div>

            {/* User Cash & Equity */}
            <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-3.5">
              <h4 className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                <PiggyBank className="w-4 h-4 text-emerald-600" />
                보유 자기자본 설정
              </h4>

              <div>
                <div className="flex justify-between text-xs text-slate-700 font-medium mb-1">
                  <span>보유 현금 / 예적금</span>
                  <strong className="text-emerald-700">{formatPrice(userBudget.cash)}</strong>
                </div>
                <input
                  type="range"
                  min="0"
                  max="200000"
                  step="1000"
                  value={userBudget.cash}
                  onChange={(e) => setUserBudget(prev => ({ ...prev, cash: Number(e.target.value) }))}
                  className="w-full accent-emerald-600 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs text-slate-700 font-medium mb-1">
                  <span>기존 전세보증금 회수액</span>
                  <strong className="text-emerald-700">{formatPrice(userBudget.jeonseReturn)}</strong>
                </div>
                <input
                  type="range"
                  min="0"
                  max="150000"
                  step="1000"
                  value={userBudget.jeonseReturn}
                  onChange={(e) => setUserBudget(prev => ({ ...prev, jeonseReturn: Number(e.target.value) }))}
                  className="w-full accent-emerald-600 cursor-pointer"
                />
              </div>
            </div>

            {/* Loan Simulator (전세대출 vs 매매 주담대 - 05 요구사항) */}
            <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-3.5">
              <h4 className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                <Landmark className="w-4 h-4 text-blue-600" />
                {tradeType === 'jeonse' ? '🔑 전세자금대출 시뮬레이션' : '🏷️ 주택담보대출 (LTV) 설정'}
              </h4>

              {tradeType === 'jeonse' ? (
                /* 전세대출 설정 */
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs text-slate-700 font-medium mb-1">
                      <span>전세대출 실행 비율</span>
                      <strong className="text-blue-700 font-bold">{userBudget.jeonseLoanRate || 70}% (보증금 기준 최대 80%)</strong>
                    </div>
                    <div className="grid grid-cols-4 gap-1.5 mb-2">
                      {[50, 60, 70, 80].map(rate => (
                        <button
                          key={rate}
                          onClick={() => setUserBudget(prev => ({ ...prev, jeonseLoanRate: rate }))}
                          className={`py-1 rounded text-xs font-bold border transition ${
                            (userBudget.jeonseLoanRate || 70) === rate
                              ? 'bg-blue-600 text-white border-blue-600'
                              : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          {rate}%
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-slate-600 block mb-1">전세대출 금리 (연)</label>
                    <select
                      value={userBudget.jeonseInterestRate || 3.5}
                      onChange={(e) => setUserBudget(prev => ({ ...prev, jeonseInterestRate: Number(e.target.value) }))}
                      className="w-full p-1.5 border border-slate-200 rounded-lg bg-slate-50 text-slate-800 font-semibold text-xs"
                    >
                      <option value="2.5">연 2.5% (버팀목 전세자금 우대금리)</option>
                      <option value="3.2">연 3.2% (시중 1금융 신규코픽스)</option>
                      <option value="3.5">연 3.5% (일반 전세대출 표준)</option>
                      <option value="4.0">연 4.0%</option>
                    </select>
                  </div>

                  <div className="bg-blue-50/80 p-3 rounded-lg border border-blue-200 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-blue-900 font-medium">월 예상 이자 부담액:</span>
                      <span className="text-base font-extrabold text-blue-700">
                        약 {Math.round(monthlyRepaymentWon / 10000).toLocaleString()}만원
                      </span>
                    </div>
                    <p className="text-[10px] text-blue-600 mt-1">
                      * 전세대출은 만기일시상환으로 매월 순수 이자만 납부합니다 (대출 {formatPrice(loanPrincipalManwon)}, 연 {userBudget.jeonseInterestRate || 3.5}%)
                    </p>
                  </div>
                </div>
              ) : (
                /* 매매 주담대 설정 */
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs text-slate-700 font-medium mb-1">
                      <span>담보대출 비율 (LTV)</span>
                      <span className="font-bold text-blue-700">{userBudget.ltvRate}%</span>
                    </div>
                    <div className="grid grid-cols-4 gap-1.5 mb-2">
                      {[40, 50, 60, 70].map(rate => (
                        <button
                          key={rate}
                          onClick={() => setUserBudget(prev => ({ ...prev, ltvRate: rate }))}
                          className={`py-1 rounded text-xs font-bold border transition ${
                            userBudget.ltvRate === rate
                              ? 'bg-blue-600 text-white border-blue-600'
                              : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          {rate}%
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <label className="text-slate-600 block mb-1">주담대 금리 (연)</label>
                      <select
                        value={userBudget.interestRate}
                        onChange={(e) => setUserBudget(prev => ({ ...prev, interestRate: Number(e.target.value) }))}
                        className="w-full p-1.5 border border-slate-200 rounded-lg bg-slate-50 text-slate-800 font-semibold"
                      >
                        <option value="3.5">연 3.5%</option>
                        <option value="3.8">연 3.8%</option>
                        <option value="4.2">연 4.2%</option>
                        <option value="4.5">연 4.5%</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-slate-600 block mb-1">상환 만기</label>
                      <select
                        value={userBudget.loanTermYears}
                        onChange={(e) => setUserBudget(prev => ({ ...prev, loanTermYears: Number(e.target.value) }))}
                        className="w-full p-1.5 border border-slate-200 rounded-lg bg-slate-50 text-slate-800 font-semibold"
                      >
                        <option value="30">30년 만기</option>
                        <option value="40">40년 만기</option>
                      </select>
                    </div>
                  </div>

                  <div className="bg-blue-50/80 p-3 rounded-lg border border-blue-200 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-blue-900 font-medium">월 원리금 상환액:</span>
                      <span className="text-base font-extrabold text-blue-700">
                        약 {Math.round(monthlyRepaymentWon / 10000).toLocaleString()}만원
                      </span>
                    </div>
                    <p className="text-[10px] text-blue-600 mt-1">
                      * 원리금균등분할상환 기준 (원금 {formatPrice(loanPrincipalManwon)}, {userBudget.loanTermYears}년 만기)
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 2: 취득 및 부대 비용 상세 */}
        {activeTab === 'cost' && (
          <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-3 text-xs">
            <h4 className="font-bold text-slate-800 flex items-center justify-between">
              <span>{tradeType === 'sale' ? '총 취득 필요자금 명세서' : '전세 계약 필요자금 명세서'}</span>
              <span className="text-emerald-700 font-black">{formatPrice(costs.totalRequiredBudgetManwon)}</span>
            </h4>

            <div className="space-y-2">
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="font-semibold text-slate-800">
                  {tradeType === 'sale' ? '아파트 매매가' : tradeType === 'jeonse' ? '전세 보증금' : '월세 보증금'}
                </span>
                <strong className="text-slate-900 text-sm">{formatPrice(costs.priceManwon || activePrice)}</strong>
              </div>

              {tradeType === 'sale' ? (
                <>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-600">취득세 및 지방교육세:</span>
                    <strong className="text-slate-800">+{formatPrice(costs.acquisitionTaxManwon)}</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-600">부동산 중개수수료 (복비):</span>
                    <strong className="text-slate-800">+{formatPrice(costs.brokerageFeeManwon)}</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-600">등기 법무사비 & 채권할인:</span>
                    <strong className="text-slate-800">+{formatPrice(costs.legalBondFeeManwon)}</strong>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-600">전세 중개수수료:</span>
                    <strong className="text-slate-800">+{formatPrice(costs.brokerageFeeManwon || 45)}</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-600">HUG 전세반환보증보험료 (2년):</span>
                    <strong className="text-slate-800">+{formatPrice(costs.guaranteeInsuranceManwon || 120)}</strong>
                  </div>
                </>
              )}

              <div className="flex justify-between py-1">
                <span className="text-slate-600">이사/입주 예비비:</span>
                <strong className="text-slate-800">+{formatPrice(costs.contingencyFeeManwon || 1500)}</strong>
              </div>
            </div>

            <div className="mt-3 bg-amber-50 p-3 rounded-lg border border-amber-200">
              <div className="flex justify-between items-center font-bold text-amber-900">
                <span>총 부대비용 합계:</span>
                <span>+{formatPrice(costs.totalAdditionalCostManwon)}</span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: 단지 스펙 (06 요구사항: 평면도, 주차, 전기차, 언덕, 편의시설, 2026매물) */}
        {activeTab === 'specs' && (
          <div className="space-y-4 text-xs">
            {/* 1. Distance to My Custom Pins (07 요구사항 연계) */}
            {customPins.length > 0 && (
              <div className="bg-blue-50/80 p-3.5 rounded-xl border border-blue-200">
                <h4 className="font-bold text-blue-900 mb-2 flex items-center gap-1.5">
                  <Navigation className="w-4 h-4 text-blue-600" />
                  나의 거점 핀 통근 거리 & 예상 시간
                </h4>
                <div className="space-y-1.5">
                  {customPins.map(pin => {
                    const distKm = calculateDistanceKm(selectedApartment.lat, selectedApartment.lng, pin.lat, pin.lng);
                    const commute = estimateCommuteTime(distKm);
                    return (
                      <div key={pin.id} className="flex items-center justify-between bg-white px-3 py-1.5 rounded-lg border border-blue-100 shadow-2xs">
                        <span className="font-semibold text-slate-800">🏢 {pin.name}</span>
                        <div className="text-right">
                          <span className="text-blue-700 font-extrabold">{distKm}km </span>
                          <span className="text-slate-500 font-normal">({commute.time})</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* 2. Complex Specs & Parking / Terrain (06 요구사항) */}
            <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2.5">
              <h4 className="font-bold text-slate-900 flex items-center justify-between">
                <span>단지 기본 정보 및 시설</span>
                <span className="text-[11px] text-emerald-600 font-semibold">2026 최신 검증</span>
              </h4>

              <div className="grid grid-cols-2 gap-2">
                <div className="p-2 bg-slate-50 rounded-lg">
                  <span className="text-[10px] text-slate-400 block">준공년도</span>
                  <strong className="text-slate-800">{selectedApartment.builtYear}년 ({2026 - selectedApartment.builtYear}년차)</strong>
                </div>
                <div className="p-2 bg-slate-50 rounded-lg">
                  <span className="text-[10px] text-slate-400 block">총 세대수 / 동수</span>
                  <strong className="text-slate-800">{selectedApartment.totalHouseholds.toLocaleString()}세대 / {selectedApartment.totalBuildings}동</strong>
                </div>
                <div className="p-2 bg-slate-50 rounded-lg">
                  <span className="text-[10px] text-slate-400 block">주차 대수</span>
                  <strong className="text-slate-800">{selectedApartment.parkingTotal ? `총 ${selectedApartment.parkingTotal.toLocaleString()}대 (세대당 ${selectedApartment.parkingPerHousehold}대)` : `세대당 ${selectedApartment.parkingPerHousehold}대`}</strong>
                </div>
                <div className="p-2 bg-slate-50 rounded-lg">
                  <span className="text-[10px] text-slate-400 block">지하주차장 직결</span>
                  <strong className="text-slate-800">{selectedApartment.undergroundParkingDirect ? "전동 엘리베이터 직통 연결 (O)" : "지상/지하 혼합"}</strong>
                </div>
                <div className="p-2 bg-slate-50 rounded-lg col-span-2">
                  <span className="text-[10px] text-slate-400 block">전기차 충전 시설</span>
                  <strong className="text-slate-800">{selectedApartment.evChargers || "충전기 완비"}</strong>
                </div>
                <div className="p-2 bg-slate-50 rounded-lg col-span-2">
                  <span className="text-[10px] text-slate-400 block">단지 지형 및 경사도</span>
                  <strong className="text-slate-800">{selectedApartment.slopeStatus}</strong>
                </div>
              </div>
            </div>

            {/* 3. Living Infrastructure Radius (편의점, 올리브영, 다이소, 지하철) */}
            <div className="bg-white p-4 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-1.5">
                <Store className="w-4 h-4 text-emerald-600" />
                슬세권 생활 편의시설 도보 거리
              </h4>
              <div className="space-y-1.5 text-slate-600">
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span>🏪 편의점:</span>
                  <strong className="text-slate-800">{selectedApartment.amenities?.convenienceStore}</strong>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span>💄 올리브영:</span>
                  <strong className="text-slate-800">{selectedApartment.amenities?.oliveyoung}</strong>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span>🛒 다이소:</span>
                  <strong className="text-slate-800">{selectedApartment.amenities?.daiso}</strong>
                </div>
                <div className="flex justify-between py-1">
                  <span>🚇 지하철역:</span>
                  <strong className="text-slate-800">{selectedApartment.amenities?.subwayDetail || selectedApartment.nearestStation}</strong>
                </div>
              </div>
            </div>

            {/* 4. Active Listings Inventory & Items (2026 확인 날짜 - 06 요구사항) */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-slate-900">
                  현재 등록 매물 ({filteredListings.length}건)
                </h4>
                <span className="text-[11px] text-slate-500">
                  전체 물량: 매매 {selectedApartment.listingCounts?.sale || 15} · 전세 {selectedApartment.listingCounts?.jeonse || 10}
                </span>
              </div>

              {filteredListings.length === 0 ? (
                <div className="p-4 bg-white rounded-xl border text-center text-slate-400">
                  해당 거래 유형({tradeType === 'sale' ? '매매' : tradeType === 'jeonse' ? '전세' : '월세'})의 등록 매물이 없습니다.
                </div>
              ) : (
                filteredListings.map(item => (
                  <div
                    key={item.id}
                    onClick={() => onSelectListing(item)}
                    className={`p-3 rounded-xl border transition-all cursor-pointer ${
                      selectedListing && selectedListing.id === item.id 
                        ? 'border-blue-500 bg-blue-50/50 ring-2 ring-blue-500/20 shadow-sm' 
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="font-black text-slate-900 text-sm">
                            {formatPrice(item.price)}
                          </span>
                          <span className="text-[11px] bg-slate-100 px-1.5 py-0.5 rounded font-bold text-slate-700">
                            {item.areaPyeong}평 ({item.floor})
                          </span>
                          <span className="text-[11px] text-slate-500">
                            {item.dong} · {item.direction}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 mt-1">{item.description}</p>
                      </div>
                    </div>
                    <div className="mt-2 pt-1.5 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400">
                      <span>중개: {item.broker} (확인일자: <strong>{item.verifiedDate}</strong>)</span>
                      <span className="text-blue-600 font-bold">
                        {selectedListing && selectedListing.id === item.id ? '✓ 계산 적용됨' : '선택 →'}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>

      {/* Floor Plan Blueprint Modal */}
      <FloorPlanModal
        apartment={selectedApartment}
        isOpen={isFloorPlanOpen}
        onClose={() => setIsFloorPlanOpen(false)}
      />
    </div>
  );
}
