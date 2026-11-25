import React, { useState } from 'react';
import { 
  formatPrice, 
  formatCompactPrice, 
  calculateAcquisitionCosts, 
  calculateMonthlyPayment, 
  getBudgetEvaluation 
} from '../utils/calculator';
import { 
  Building, 
  Calendar, 
  Users, 
  Car, 
  Train, 
  GraduationCap, 
  Flame, 
  Wallet, 
  PiggyBank, 
  Landmark, 
  Calculator, 
  CheckCircle2, 
  AlertTriangle, 
  XCircle, 
  ArrowRight, 
  TrendingUp, 
  Home, 
  Layers, 
  Sparkles,
  ChevronRight,
  Info
} from 'lucide-react';

export default function BudgetSimulator({
  selectedApartment,
  userBudget,
  setUserBudget,
  viewMode,
  selectedListing,
  onSelectListing
}) {
  const [activeTab, setActiveTab] = useState('budget'); // 'budget' | 'cost' | 'listings'
  const [useCustomPrice, setUseCustomPrice] = useState(false);
  const [customPriceManwon, setCustomPriceManwon] = useState(150000);

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

  // Determine current active pricing base
  const recentPrice = selectedApartment.recentTransaction.price;
  const listings = selectedApartment.actualListings || [];
  const minListingPrice = listings.length > 0 ? Math.min(...listings.map(l => l.price)) : recentPrice;

  let activePrice = recentPrice;
  if (selectedListing) {
    activePrice = selectedListing.price;
  } else if (viewMode === 'listing') {
    activePrice = minListingPrice;
  }

  if (useCustomPrice) {
    activePrice = customPriceManwon;
  }

  // Acquisition cost calculation
  const costs = calculateAcquisitionCosts(activePrice, 34, userBudget.movingCost);

  // User Total Budget calculation
  // Total available = Cash + Jeonse return + Credit loan + Mortgage Loan (LTV calculated on activePrice)
  const mortgageLoanCap = Math.round(activePrice * (userBudget.ltvRate / 100));
  const mortgageLoanAmount = Math.min(mortgageLoanCap, userBudget.maxMortgageDesired || mortgageLoanCap);
  const totalAvailableCapital = userBudget.cash + userBudget.jeonseReturn + userBudget.creditLoan + mortgageLoanAmount;

  // Monthly loan repayment calculation
  const totalLoanPrincipal = mortgageLoanAmount + userBudget.creditLoan;
  const monthlyRepaymentWon = calculateMonthlyPayment(
    totalLoanPrincipal, 
    userBudget.interestRate, 
    userBudget.loanTermYears
  );

  // Budget Evaluation (Green Check vs Red Danger)
  const evaluation = getBudgetEvaluation(costs.totalRequiredBudgetManwon, totalAvailableCapital);

  // Percentage for the comparative bar
  const progressPercent = Math.min(
    100, 
    Math.max(5, Math.round((totalAvailableCapital / costs.totalRequiredBudgetManwon) * 100))
  );

  return (
    <div className="h-full flex flex-col bg-slate-50 border-l border-slate-200 overflow-y-auto">
      {/* 1. Header: Apartment Basic Specs */}
      <div className="bg-white p-5 border-b border-slate-200 shadow-sm sticky top-0 z-20">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                {selectedApartment.city} {selectedApartment.district}
              </span>
              <span className="text-xs text-slate-500 font-medium">
                {selectedApartment.dong}
              </span>
            </div>
            <h2 className="text-xl font-extrabold text-slate-900 mt-1 flex items-center gap-2">
              {selectedApartment.name}
            </h2>
          </div>

          <div className="text-right">
            <span className="text-[11px] text-slate-500 block">선택 기준 가격</span>
            <span className="text-lg font-black text-slate-900">
              {formatPrice(activePrice)}
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

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {selectedApartment.tags.map((tag, idx) => (
            <span key={idx} className="text-[11px] font-medium bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full border border-emerald-200/60">
              #{tag}
            </span>
          ))}
          <span className="text-[11px] font-medium bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">
            🚇 {selectedApartment.nearestStation}
          </span>
        </div>

        {/* 2. THE HIGHLIGHT: Budget Match Check Bar (녹색 체크바 vs 붉은색 바) */}
        <div className="mt-4 p-4 rounded-xl border transition-all duration-300"
          style={{
            backgroundColor: evaluation.status === 'safe' ? '#f0fdf4' : evaluation.status === 'warning' ? '#fefce8' : '#fef2f2',
            borderColor: evaluation.status === 'safe' ? '#bbf7d0' : evaluation.status === 'warning' ? '#fef08a' : '#fecaca'
          }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {evaluation.status === 'safe' ? (
                <div className="w-7 h-7 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold shadow-md shadow-emerald-500/30">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
              ) : evaluation.status === 'warning' ? (
                <div className="w-7 h-7 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold shadow-md shadow-amber-500/30">
                  <AlertTriangle className="w-4 h-4" />
                </div>
              ) : (
                <div className="w-7 h-7 rounded-full bg-rose-600 text-white flex items-center justify-center font-bold shadow-md shadow-rose-600/30">
                  <XCircle className="w-5 h-5" />
                </div>
              )}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-600 block">
                  예산 적합도 진단
                </span>
                <span className="text-base font-black" style={{ color: evaluation.color }}>
                  {evaluation.label}
                </span>
              </div>
            </div>

            <div className="text-right">
              <span className="text-[11px] text-slate-500 block">예산 격차</span>
              <span className="text-sm font-black" style={{ color: evaluation.color }}>
                {evaluation.diff >= 0 ? `+${formatPrice(evaluation.diff)} 여유` : `-${formatPrice(Math.abs(evaluation.diff))} 부족`}
              </span>
            </div>
          </div>

          {/* Animated Visual Gauge Bar */}
          <div className="mt-3">
            <div className="flex justify-between text-[11px] text-slate-600 font-semibold mb-1">
              <span>내 가용 예산: <strong>{formatPrice(totalAvailableCapital)}</strong></span>
              <span>총 소요 비용: <strong>{formatPrice(costs.totalRequiredBudgetManwon)}</strong></span>
            </div>
            
            {/* The Bar */}
            <div className="w-full h-3.5 bg-slate-200/80 rounded-full overflow-hidden p-0.5 relative shadow-inner">
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
            
            <div className="flex justify-between items-center text-[11px] text-slate-500 mt-1.5">
              <span>자금 충족률: <strong className="text-slate-800">{Math.round((totalAvailableCapital / costs.totalRequiredBudgetManwon) * 100)}%</strong></span>
              <span className="italic">{evaluation.message}</span>
            </div>
          </div>
        </div>

        {/* 3. Navigation Tabs */}
        <div className="flex border-b border-slate-200 mt-4 -mb-1 text-xs font-bold">
          <button
            onClick={() => setActiveTab('budget')}
            className={`flex-1 py-2 text-center border-b-2 transition flex items-center justify-center gap-1.5 ${
              activeTab === 'budget' 
                ? 'border-emerald-600 text-emerald-700 bg-emerald-50/50' 
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <Wallet className="w-3.5 h-3.5" />
            <span>내 예산 구성·대출</span>
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
            <span>필요 예산 상세</span>
          </button>
          <button
            onClick={() => setActiveTab('listings')}
            className={`flex-1 py-2 text-center border-b-2 transition flex items-center justify-center gap-1.5 ${
              activeTab === 'listings' 
                ? 'border-emerald-600 text-emerald-700 bg-emerald-50/50' 
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <Home className="w-3.5 h-3.5" />
            <span>단지스펙 & 매물 ({listings.length})</span>
          </button>
        </div>
      </div>

      {/* 4. Tab Contents */}
      <div className="p-5 flex-1 space-y-5">
        {/* TAB 1: 내 예산 구성 & 대출 시뮬레이터 */}
        {activeTab === 'budget' && (
          <div className="space-y-5">
            {/* Total Available Capital Summary Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-4 rounded-xl shadow-md">
              <div className="text-xs text-slate-400 flex items-center justify-between">
                <span>현재 나의 총 가용 자금</span>
                <span className="text-emerald-400 font-semibold">실시간 계산 중</span>
              </div>
              <div className="text-2xl font-black text-white mt-1">
                {formatPrice(totalAvailableCapital)}
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2 text-xs pt-3 border-t border-slate-700/80">
                <div>
                  <span className="text-slate-400">순수 자기자본:</span>
                  <span className="font-bold text-slate-200 ml-1">
                    {formatPrice(userBudget.cash + userBudget.jeonseReturn)}
                  </span>
                </div>
                <div>
                  <span className="text-slate-400">총 대출 규모:</span>
                  <span className="font-bold text-amber-300 ml-1">
                    {formatPrice(totalLoanPrincipal)}
                  </span>
                </div>
              </div>
            </div>

            {/* User Budget Inputs */}
            <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-4">
              <h4 className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                <PiggyBank className="w-4 h-4 text-emerald-600" />
                보유 자기자본 입력
              </h4>

              {/* Cash */}
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
                <div className="flex justify-between text-[10px] text-slate-400">
                  <span>0원</span>
                  <span>10억</span>
                  <span>20억</span>
                </div>
              </div>

              {/* Jeonse Deposit Return */}
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
                <div className="flex justify-between text-[10px] text-slate-400">
                  <span>0원</span>
                  <span>5억</span>
                  <span>15억</span>
                </div>
              </div>
            </div>

            {/* Loan Simulator Inputs */}
            <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-4">
              <h4 className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                <Landmark className="w-4 h-4 text-blue-600" />
                주택담보대출 및 레버리지 설정
              </h4>

              {/* LTV */}
              <div>
                <div className="flex justify-between text-xs text-slate-700 font-medium mb-1">
                  <span>주택담보대출 비율 (LTV)</span>
                  <span className="font-bold text-blue-700">{userBudget.ltvRate}% (한도: {formatPrice(mortgageLoanCap)})</span>
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

              {/* Additional Credit Loan */}
              <div>
                <div className="flex justify-between text-xs text-slate-700 font-medium mb-1">
                  <span>신용대출 / 기타 자금</span>
                  <strong className="text-slate-800">{formatPrice(userBudget.creditLoan)}</strong>
                </div>
                <input
                  type="range"
                  min="0"
                  max="30000"
                  step="1000"
                  value={userBudget.creditLoan}
                  onChange={(e) => setUserBudget(prev => ({ ...prev, creditLoan: Number(e.target.value) }))}
                  className="w-full accent-blue-600 cursor-pointer"
                />
              </div>

              {/* Interest Rate & Term */}
              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-100 text-xs">
                <div>
                  <label className="text-slate-600 block mb-1">대출 금리 (연)</label>
                  <select
                    value={userBudget.interestRate}
                    onChange={(e) => setUserBudget(prev => ({ ...prev, interestRate: Number(e.target.value) }))}
                    className="w-full p-1.5 border border-slate-200 rounded-lg bg-slate-50 text-slate-800 font-semibold"
                  >
                    <option value="3.5">연 3.5% (특례/우대)</option>
                    <option value="3.8">연 3.8% (시중 1금융)</option>
                    <option value="4.2">연 4.2%</option>
                    <option value="4.5">연 4.5%</option>
                    <option value="5.0">연 5.0%</option>
                  </select>
                </div>
                <div>
                  <label className="text-slate-600 block mb-1">상환 기간</label>
                  <select
                    value={userBudget.loanTermYears}
                    onChange={(e) => setUserBudget(prev => ({ ...prev, loanTermYears: Number(e.target.value) }))}
                    className="w-full p-1.5 border border-slate-200 rounded-lg bg-slate-50 text-slate-800 font-semibold"
                  >
                    <option value="30">30년 만기 (360개월)</option>
                    <option value="40">40년 만기 (480개월)</option>
                    <option value="20">20년 만기 (240개월)</option>
                  </select>
                </div>
              </div>

              {/* Monthly Payment Estimation Box */}
              <div className="bg-blue-50/70 p-3 rounded-lg border border-blue-200/80">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-blue-900 font-medium">월 예상 원리금 상환액:</span>
                  <span className="text-base font-extrabold text-blue-700">
                    약 {Math.round(monthlyRepaymentWon / 10000).toLocaleString()}만원
                  </span>
                </div>
                <p className="text-[10px] text-blue-600 mt-1">
                  * 원리금균등분할상환 기준 (총 대출 {formatPrice(totalLoanPrincipal)}, {userBudget.loanTermYears}년, {userBudget.interestRate}%)
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: 필요 예산 상세 (취득세, 복비, 기타비용) */}
        {activeTab === 'cost' && (
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-3">
              <h4 className="text-xs font-bold text-slate-800 flex items-center justify-between">
                <span>총 취득 필요자금 명세서</span>
                <span className="text-emerald-700 font-black">{formatPrice(costs.totalRequiredBudgetManwon)}</span>
              </h4>

              <div className="space-y-2.5 text-xs">
                {/* 1. Base Price */}
                <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-900"></span>
                    <span className="font-semibold text-slate-800">아파트 매매가</span>
                  </div>
                  <strong className="text-slate-900 text-sm">{formatPrice(costs.priceManwon)}</strong>
                </div>

                {/* 2. Acquisition Tax */}
                <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
                  <div>
                    <span className="font-medium text-slate-700">취득세 및 지방교육세</span>
                    <span className="text-[10px] text-slate-400 block">세율 {costs.acquisitionTaxRate}% 적용</span>
                  </div>
                  <strong className="text-slate-800">+{formatPrice(costs.acquisitionTaxManwon)}</strong>
                </div>

                {/* 3. Brokerage Fee */}
                <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
                  <div>
                    <span className="font-medium text-slate-700">부동산 중개보수 (복비)</span>
                    <span className="text-[10px] text-slate-400 block">상한요율 {costs.brokerRate}% + VAT 10%</span>
                  </div>
                  <strong className="text-slate-800">+{formatPrice(costs.brokerageFeeManwon)}</strong>
                </div>

                {/* 4. Legal / Bond Fee */}
                <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
                  <div>
                    <span className="font-medium text-slate-700">등기 법무사비 & 채권할인</span>
                    <span className="text-[10px] text-slate-400 block">소유권이전등기 실비</span>
                  </div>
                  <strong className="text-slate-800">+{formatPrice(costs.legalBondFeeManwon)}</strong>
                </div>

                {/* 5. Contingency / Moving */}
                <div className="flex justify-between items-center py-1.5">
                  <div>
                    <span className="font-medium text-slate-700">이사 및 인테리어 예비비</span>
                    <span className="text-[10px] text-slate-400 block">설정 가능</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <strong className="text-slate-800">+{formatPrice(userBudget.movingCost)}</strong>
                  </div>
                </div>
              </div>

              {/* Total Additional Expense Highlight */}
              <div className="mt-3 bg-amber-50 p-3 rounded-lg border border-amber-200 text-xs">
                <div className="flex justify-between items-center font-bold text-amber-900">
                  <span>총 부대비용 (세금/복비 등) 합계:</span>
                  <span>+{formatPrice(costs.totalAdditionalCostManwon)}</span>
                </div>
                <p className="text-[10px] text-amber-700 mt-1">
                  💡 매매가 외에도 약 {Math.round((costs.totalAdditionalCostManwon / costs.priceManwon) * 100)}%의 부대 현금이 추가로 필요합니다.
                </p>
              </div>
            </div>

            {/* Gap Analysis Box */}
            <div className="bg-white p-4 rounded-xl border border-slate-200 text-xs space-y-2">
              <h5 className="font-bold text-slate-800">자금 조달 밸런스 점검</h5>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">총 필요 자금:</span>
                <span className="font-bold text-slate-900">{formatPrice(costs.totalRequiredBudgetManwon)}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">현재 총 가용 자금:</span>
                <span className="font-bold text-emerald-700">{formatPrice(totalAvailableCapital)}</span>
              </div>
              <div className="flex justify-between py-1.5 font-bold text-sm">
                <span className="text-slate-800">최종 부족/여유분:</span>
                <span style={{ color: evaluation.color }}>
                  {evaluation.diff >= 0 ? `+${formatPrice(evaluation.diff)} 여유` : `-${formatPrice(Math.abs(evaluation.diff))} 부족`}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: 단지 기본 스펙 & 실제 등록 매물 */}
        {activeTab === 'listings' && (
          <div className="space-y-4">
            {/* Apartment Spec Grid */}
            <div className="bg-white p-4 rounded-xl border border-slate-200">
              <h4 className="text-xs font-bold text-slate-800 mb-3 flex items-center gap-1.5">
                <Building className="w-4 h-4 text-slate-600" />
                단지 기본 정보
              </h4>
              <div className="grid grid-cols-2 gap-2.5 text-xs text-slate-600">
                <div className="p-2 bg-slate-50 rounded-lg">
                  <span className="text-[11px] text-slate-400 block">완공년도</span>
                  <strong className="text-slate-800">{selectedApartment.builtYear}년 ({new Date().getFullYear() - selectedApartment.builtYear}년차)</strong>
                </div>
                <div className="p-2 bg-slate-50 rounded-lg">
                  <span className="text-[11px] text-slate-400 block">총 세대수 / 동수</span>
                  <strong className="text-slate-800">{selectedApartment.totalHouseholds.toLocaleString()}세대 / {selectedApartment.totalBuildings}개동</strong>
                </div>
                <div className="p-2 bg-slate-50 rounded-lg">
                  <span className="text-[11px] text-slate-400 block">세대당 주차대수</span>
                  <strong className="text-slate-800">{selectedApartment.parkingPerHousehold}대</strong>
                </div>
                <div className="p-2 bg-slate-50 rounded-lg">
                  <span className="text-[11px] text-slate-400 block">용적률 / 건폐율</span>
                  <strong className="text-slate-800">{selectedApartment.floorAreaRatio}% / {selectedApartment.buildingCoverageRatio}%</strong>
                </div>
                <div className="p-2 bg-slate-50 rounded-lg col-span-2">
                  <span className="text-[11px] text-slate-400 block">배정 초등학교</span>
                  <strong className="text-slate-800">{selectedApartment.school}</strong>
                </div>
                <div className="p-2 bg-slate-50 rounded-lg col-span-2">
                  <span className="text-[11px] text-slate-400 block">난방 방식</span>
                  <strong className="text-slate-800">{selectedApartment.heating}</strong>
                </div>
              </div>
            </div>

            {/* Price Comparison Summary: Recent vs Listings */}
            <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-blue-50 p-3.5 rounded-xl border border-emerald-200/80 text-xs">
              <div className="flex justify-between items-center mb-1">
                <span className="text-slate-700 font-bold">📊 직전 실거래가:</span>
                <span className="text-emerald-800 font-extrabold text-sm">
                  {formatPrice(recentPrice)} ({selectedApartment.recentTransaction.floor}, {selectedApartment.recentTransaction.date})
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-700 font-bold">🏠 등록 매물 최저가:</span>
                <span className="text-blue-800 font-extrabold text-sm">
                  {formatPrice(minListingPrice)}
                </span>
              </div>
            </div>

            {/* Actual Listings List */}
            <div className="space-y-2.5">
              <h4 className="text-xs font-bold text-slate-800 flex items-center justify-between">
                <span>실제 등록 매물 목록 ({listings.length}건)</span>
                <span className="text-[11px] text-slate-400 font-normal">원하는 매물을 클릭하여 예산 계산</span>
              </h4>

              {listings.map((item) => {
                const isItemActive = selectedListing && selectedListing.id === item.id;
                const itemCosts = calculateAcquisitionCosts(item.price, item.areaPyeong, userBudget.movingCost);
                const itemEval = getBudgetEvaluation(itemCosts.totalRequiredBudgetManwon, totalAvailableCapital);

                return (
                  <div
                    key={item.id}
                    onClick={() => onSelectListing(item)}
                    className={`p-3 rounded-xl border transition-all cursor-pointer ${
                      isItemActive 
                        ? 'border-blue-500 bg-blue-50/40 ring-2 ring-blue-500/20 shadow-sm' 
                        : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-xs'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="font-extrabold text-slate-900 text-sm">
                            {formatPrice(item.price)}
                          </span>
                          <span className="text-[11px] bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded font-medium">
                            {item.areaPyeong}평 ({item.floor})
                          </span>
                          <span className="text-[11px] text-slate-500">
                            {item.dong} · {item.direction}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 mt-1 font-medium">
                          {item.description}
                        </p>
                      </div>

                      <div className="text-right">
                        <span 
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${itemEval.badgeClass}`}
                        >
                          {itemEval.label}
                        </span>
                      </div>
                    </div>

                    <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                      <span>중개: {item.broker} (확인 {item.verifiedDate})</span>
                      <span className="text-blue-600 font-bold flex items-center gap-0.5">
                        {isItemActive ? '✓ 선택 적용됨' : '선택하여 계산 →'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
