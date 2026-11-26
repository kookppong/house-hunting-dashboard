// Price formatting and real estate financial calculations (매매, 전세, 월세 통합)

/**
 * Format 만원 to readable Korean currency (e.g. 185000 -> "18억 5,000만원", 72000 -> "7억 2,000만원")
 */
export function formatPrice(manwon) {
  if (!manwon || isNaN(manwon)) return "0원";
  const eok = Math.floor(manwon / 10000);
  const remainder = Math.round(manwon % 10000);

  if (eok > 0 && remainder > 0) {
    return `${eok}억 ${remainder.toLocaleString()}만원`;
  } else if (eok > 0) {
    return `${eok}억원`;
  } else {
    return `${remainder.toLocaleString()}만원`;
  }
}

/**
 * Compact format for badges & pins (e.g. 185000 -> "18.5억", 72000 -> "7.2억")
 */
export function formatCompactPrice(manwon) {
  if (!manwon || isNaN(manwon)) return "0억";
  const eok = (manwon / 10000).toFixed(1);
  return `${eok.replace('.0', '')}억`;
}

/**
 * Calculate Sale Acquisition Costs (취득세, 중개보수, 채권할인/등기비, 예비비)
 */
export function calculateAcquisitionCosts(priceManwon, areaPyeong = 34, movingBudget = 1500) {
  const priceWon = priceManwon * 10000;
  
  // 1. 취득세 (1주택 기준 실거래가별)
  let acquisitionTaxRate = 0.011; // 6억 이하: 1.1%
  if (priceWon > 600000000 && priceWon <= 900000000) {
    const pEok = priceWon / 100000000;
    const baseRate = (pEok * (2 / 3) - 3) / 100;
    acquisitionTaxRate = baseRate * 1.1;
  } else if (priceWon > 900000000) {
    acquisitionTaxRate = areaPyeong > 34 ? 0.035 : 0.033;
  }
  const acquisitionTaxManwon = Math.round((priceWon * acquisitionTaxRate) / 10000);

  // 2. 중개보수 (상한요율 적용 + 부가세 10%)
  let brokerRate = 0.004;
  if (priceWon >= 900000000 && priceWon < 1200000000) {
    brokerRate = 0.005;
  } else if (priceWon >= 1200000000 && priceWon < 1500000000) {
    brokerRate = 0.006;
  } else if (priceWon >= 1500000000) {
    brokerRate = 0.007;
  }
  const brokerageFeeManwon = Math.round((priceWon * brokerRate * 1.1) / 10000);

  // 3. 법무사 및 국민주택채권할인 (약 0.25%)
  const legalBondFeeManwon = Math.round(priceManwon * 0.0025);

  // 4. 이사 및 인테리어 예비비
  const contingencyFeeManwon = movingBudget;

  const totalAdditionalCostManwon = acquisitionTaxManwon + brokerageFeeManwon + legalBondFeeManwon + contingencyFeeManwon;
  const totalRequiredBudgetManwon = priceManwon + totalAdditionalCostManwon;

  return {
    priceManwon,
    acquisitionTaxManwon,
    acquisitionTaxRate: (acquisitionTaxRate * 100).toFixed(1),
    brokerageFeeManwon,
    brokerRate: (brokerRate * 100).toFixed(1),
    legalBondFeeManwon,
    contingencyFeeManwon,
    totalAdditionalCostManwon,
    totalRequiredBudgetManwon
  };
}

/**
 * Calculate Jeonse Acquisition & Loan Costs (전세보증금, 전세중개료, 전세보증보험료, 전세대출이자)
 */
export function calculateJeonseCosts(jeonsePriceManwon, movingBudget = 300) {
  const priceWon = jeonsePriceManwon * 10000;

  // 전세 중개수수료 (상한요율 + VAT 10%)
  let brokerRate = 0.003; // 1억~6억 0.3%, 6억 이상 0.4%
  if (priceWon >= 600000000) brokerRate = 0.004;
  const brokerageFeeManwon = Math.round((priceWon * brokerRate * 1.1) / 10000);

  // HUG 전세보증금 반환보증보험료 (연 약 0.128%, 2년치 약 0.25%)
  const guaranteeInsuranceManwon = Math.round(jeonsePriceManwon * 0.0025);

  const totalAdditionalCostManwon = brokerageFeeManwon + guaranteeInsuranceManwon + movingBudget;
  const totalRequiredBudgetManwon = jeonsePriceManwon + totalAdditionalCostManwon;

  return {
    jeonsePriceManwon,
    brokerageFeeManwon,
    brokerRate: (brokerRate * 100).toFixed(1),
    guaranteeInsuranceManwon,
    movingBudget,
    totalAdditionalCostManwon,
    totalRequiredBudgetManwon
  };
}

/**
 * Monthly loan repayment (원리금균등분할상환 - 매매 주담대)
 */
export function calculateMonthlyPayment(principalManwon, annualInterestRate = 3.8, termYears = 30) {
  if (principalManwon <= 0) return 0;
  const P = principalManwon * 10000;
  const r = (annualInterestRate / 100) / 12;
  const n = termYears * 12;
  const monthly = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  return Math.round(monthly); // in won
}

/**
 * Monthly interest only (만기일시상환 - 전세자금대출)
 */
export function calculateMonthlyJeonseInterest(principalManwon, annualInterestRate = 3.5) {
  if (principalManwon <= 0) return 0;
  const P = principalManwon * 10000;
  const r = (annualInterestRate / 100) / 12;
  return Math.round(P * r); // in won
}

/**
 * Match status against target budget
 */
export function getBudgetEvaluation(totalRequiredBudgetManwon, totalAvailableCapitalManwon) {
  const diff = totalAvailableCapitalManwon - totalRequiredBudgetManwon;
  const matchRatio = totalRequiredBudgetManwon > 0 
    ? Math.min(200, Math.round((totalAvailableCapitalManwon / totalRequiredBudgetManwon) * 100))
    : 100;

  if (diff >= 0) {
    return {
      status: "safe", // 녹색
      color: "#16a34a",
      badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-300",
      barClass: "bg-emerald-500",
      label: "예산 내 안전 도달",
      message: `가용 예산이 ${formatPrice(diff)} 여유롭습니다!`,
      diff,
      matchRatio
    };
  } else if (Math.abs(diff) <= totalRequiredBudgetManwon * 0.08) {
    return {
      status: "warning", // 황색 근접
      color: "#eab308",
      badgeClass: "bg-amber-50 text-amber-700 border-amber-300",
      barClass: "bg-amber-500",
      label: "예산 근접 (약간 부족)",
      message: `${formatPrice(Math.abs(diff))} 부족 (약간의 자금 조달 필요)`,
      diff,
      matchRatio
    };
  } else {
    return {
      status: "danger", // 붉은색
      color: "#dc2626",
      badgeClass: "bg-rose-50 text-rose-700 border-rose-300",
      barClass: "bg-rose-500",
      label: "예산 초과 (자금 부족)",
      message: `${formatPrice(Math.abs(diff))} 부족! (대출 증액 또는 목표 수정 권장)`,
      diff,
      matchRatio
    };
  }
}
