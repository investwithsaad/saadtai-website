/**
 * Core Investment Calculation Engine
 * Comprehensive real estate investment analysis and projections
 */

import {
  InvestmentInputs,
  InvestmentMetrics,
  YearlyProjection,
  SaleAnalysis,
} from './investment-types'
import {
  calculateMortgagePayment,
  calculateLoanBalance,
} from './mortgage-calculations'
import {
  calculateDepreciableBasis,
  calculateAnnualDepreciation,
  calculateTaxSavingsFromDepreciation,
} from './tax-calculations'

/**
 * Main calculation function - orchestrates all investment metrics
 * This is the heart of the calculator
 */
export function calculateInvestmentMetrics(inputs: InvestmentInputs): InvestmentMetrics {
  // ==========================================
  // SECTION 1: INITIAL INVESTMENT
  // ==========================================

  const totalProjectCost = inputs.purchasePrice + inputs.closingCostsAmount + inputs.rehabBudget
  const downPaymentAmount = inputs.downPaymentAmount
  const loanPointsAmount = inputs.loanAmount * (inputs.loanPointsPercent / 100)
  const totalCashInvested = downPaymentAmount + inputs.closingCostsAmount + inputs.rehabBudget + loanPointsAmount

  // ==========================================
  // SECTION 2: MORTGAGE PAYMENTS
  // ==========================================

  const monthlyMortgagePayment = calculateMortgagePayment(
    inputs.loanAmount,
    inputs.interestRate,
    inputs.loanTermYears,
    inputs.amortizationType
  )
  const annualDebtService = monthlyMortgagePayment * 12

  // ==========================================
  // SECTION 3: GROSS INCOME (YEAR 1)
  // ==========================================

  let grossScheduledRent: number

  if (inputs.propertyType === 'single_family') {
    grossScheduledRent = (inputs.monthlyRent || 0) * 12
  } else {
    // Multifamily - sum all unit rents
    const totalMonthlyRent = (inputs.unitRents || []).reduce((sum, rent) => sum + rent, 0)
    grossScheduledRent = totalMonthlyRent * 12
  }

  const otherAnnualIncome = inputs.otherMonthlyIncome * 12
  const grossIncome = grossScheduledRent + otherAnnualIncome

  // ==========================================
  // SECTION 4: VACANCY & EFFECTIVE GROSS INCOME
  // ==========================================

  const vacancyLoss = grossScheduledRent * (inputs.vacancyRatePercent / 100)
  const effectiveGrossIncome = grossScheduledRent - vacancyLoss + otherAnnualIncome
  const monthlyEffectiveIncome = effectiveGrossIncome / 12

  // ==========================================
  // SECTION 5: OPERATING EXPENSES
  // ==========================================

  const propertyTax = inputs.annualPropertyTax
  const insurance = inputs.annualInsurance

  // Maintenance - either percentage of rent or fixed
  const maintenance = inputs.maintenanceType === 'percent'
    ? grossScheduledRent * (inputs.maintenancePercent || 0) / 100
    : (inputs.maintenanceMonthly || 0) * 12

  const repairsReserve = inputs.repairsReserveMonthly * 12
  const capexReserve = inputs.capexReserveMonthly * 12

  // Property management - calculated on collected rent (effective income from actual rent)
  const collectedRent = grossScheduledRent - vacancyLoss
  const propertyManagement = collectedRent * (inputs.propertyManagementPercent / 100)

  const utilities = inputs.utilitiesMonthly * 12
  const hoaFees = inputs.hoaFeesMonthly * 12
  const adminLegalAccounting = inputs.annualAdminLegalAccounting

  const totalOperatingExpenses =
    propertyTax +
    insurance +
    maintenance +
    repairsReserve +
    capexReserve +
    propertyManagement +
    utilities +
    hoaFees +
    adminLegalAccounting

  const monthlyOperatingExpenses = totalOperatingExpenses / 12

  // ==========================================
  // SECTION 6: NET OPERATING INCOME (NOI)
  // ==========================================

  const noi = effectiveGrossIncome - totalOperatingExpenses

  // ==========================================
  // SECTION 7: CASH FLOW
  // ==========================================

  const annualCashFlowBeforeTax = noi - annualDebtService
  const monthlyCashFlow = annualCashFlowBeforeTax / 12

  // ==========================================
  // SECTION 8: DEPRECIATION & TAX BENEFITS
  // ==========================================

  const depreciableBasis = calculateDepreciableBasis(inputs.purchasePrice, inputs.landValuePercent)
  const annualDepreciation = calculateAnnualDepreciation(depreciableBasis, inputs.depreciationPeriodYears)
  const annualTaxSavings = calculateTaxSavingsFromDepreciation(
    annualDepreciation,
    inputs.marginalTaxRatePercent
  )
  const afterTaxCashFlow = annualCashFlowBeforeTax + annualTaxSavings

  // ==========================================
  // SECTION 9: KEY RATIOS
  // ==========================================

  const capRate = inputs.purchasePrice > 0 ? (noi / inputs.purchasePrice) * 100 : 0
  const cashOnCashReturn = totalCashInvested > 0 ? (annualCashFlowBeforeTax / totalCashInvested) * 100 : 0
  const debtServiceCoverageRatio = annualDebtService > 0 ? noi / annualDebtService : 0
  const operatingExpenseRatio = effectiveGrossIncome > 0 ? (totalOperatingExpenses / effectiveGrossIncome) * 100 : 0
  const breakEvenOccupancy =
    grossScheduledRent > 0
      ? ((totalOperatingExpenses + annualDebtService) / grossScheduledRent) * 100
      : 0

  // ==========================================
  // SECTION 10: MULTI-YEAR PROJECTIONS
  // ==========================================

  const yearlyProjections = calculateYearlyProjections(
    inputs,
    {
      grossScheduledRent,
      vacancyLoss,
      otherAnnualIncome,
      totalOperatingExpenses,
      annualDebtService,
      annualDepreciation,
      annualTaxSavings,
    },
    totalCashInvested
  )

  // ==========================================
  // SECTION 11: SALE ANALYSIS
  // ==========================================

  const saleAnalysis = calculateSaleAnalysis(inputs, yearlyProjections, totalCashInvested)

  // ==========================================
  // RETURN COMPLETE METRICS
  // ==========================================

  return {
    // Initial Investment
    totalProjectCost,
    downPaymentAmount,
    loanAmount: inputs.loanAmount,
    loanPointsAmount,
    totalCashInvested,

    // Mortgage Details
    monthlyMortgagePayment,
    annualDebtService,

    // Year 1 Income
    grossScheduledRent,
    otherAnnualIncome,
    grossIncome,

    // Year 1 Vacancy & Effective Income
    vacancyLoss,
    effectiveGrossIncome,
    monthlyEffectiveIncome,

    // Year 1 Operating Expenses
    propertyTax,
    insurance,
    maintenance,
    repairsReserve,
    capexReserve,
    propertyManagement,
    utilities,
    hoaFees,
    adminLegalAccounting,
    totalOperatingExpenses,
    monthlyOperatingExpenses,

    // Year 1 NOI
    noi,

    // Year 1 Cash Flow
    annualCashFlowBeforeTax,
    monthlyCashFlow,

    // Depreciation & Taxes
    depreciableBasis,
    annualDepreciation,
    annualTaxSavings,
    afterTaxCashFlow,

    // Ratios
    capRate,
    cashOnCashReturn,
    debtServiceCoverageRatio,
    operatingExpenseRatio,
    breakEvenOccupancy,

    // Projections and exit
    yearlyProjections,
    saleAnalysis,
  }
}

/**
 * Calculate year-by-year projections with appreciation, inflation, and equity growth
 */
function calculateYearlyProjections(
  inputs: InvestmentInputs,
  baseMetrics: {
    grossScheduledRent: number
    vacancyLoss: number
    otherAnnualIncome: number
    totalOperatingExpenses: number
    annualDebtService: number
    annualDepreciation: number
    annualTaxSavings: number
  },
  totalCashInvested?: number
): YearlyProjection[] {
  const projections: YearlyProjection[] = []
  let cumulativeCashFlow = 0

  // Calculate total cash invested if not provided
  const cashInvested = totalCashInvested || (() => {
    const downPaymentAmount = inputs.downPaymentAmount
    const loanPointsAmount = inputs.loanAmount * (inputs.loanPointsPercent / 100)
    return downPaymentAmount + inputs.closingCostsAmount + inputs.rehabBudget + loanPointsAmount
  })()

  for (let year = 1; year <= inputs.plannedHoldYears; year++) {
    // Property appreciation
    const propertyValue =
      inputs.purchasePrice * Math.pow(1 + inputs.propertyAppreciationPercent / 100, year)

    // Loan balance (amortization)
    const loanBalance = calculateLoanBalance(
      inputs.loanAmount,
      inputs.interestRate,
      inputs.loanTermYears,
      year,
      inputs.amortizationType
    )

    // Equity
    const equity = propertyValue - loanBalance

    // Income with rent growth
    const yearGsr = baseMetrics.grossScheduledRent * Math.pow(1 + inputs.rentGrowthRatePercent / 100, year)
    const yearVacancy = yearGsr * (inputs.vacancyRatePercent / 100)
    const yearEgi = yearGsr - yearVacancy + baseMetrics.otherAnnualIncome

    // Expenses with inflation
    const yearExpenses = baseMetrics.totalOperatingExpenses * Math.pow(1 + inputs.expenseInflationPercent / 100, year)

    // NOI and Cash Flow
    const yearNoi = yearEgi - yearExpenses
    const yearCashFlow = yearNoi - baseMetrics.annualDebtService
    cumulativeCashFlow += yearCashFlow

    // Cap rate for this year
    const yearCapRate = inputs.purchasePrice > 0 ? (yearNoi / inputs.purchasePrice) * 100 : 0
    const yearCashOnCash = cashInvested > 0 ? (yearCashFlow / cashInvested) * 100 : 0

    projections.push({
      year,
      propertyValue,
      loanBalance,
      equity,
      grossScheduledIncome: yearGsr,
      vacancyLoss: yearVacancy,
      effectiveGrossIncome: yearEgi,
      totalOperatingExpenses: yearExpenses,
      noi: yearNoi,
      annualDebtService: baseMetrics.annualDebtService,
      cashFlow: yearCashFlow,
      cumulativeCashFlow,
      capRate: yearCapRate,
      cashOnCashReturn: yearCashOnCash,
    })
  }

  return projections
}

/**
 * Calculate sale/exit analysis for specified year
 */
function calculateSaleAnalysis(
  inputs: InvestmentInputs,
  projections: YearlyProjection[],
  totalCashInvested?: number
): SaleAnalysis {
  const saleYear = Math.min(inputs.plannedSaleYear, inputs.plannedHoldYears)
  const saleYearData = projections[saleYear - 1] // Array is 0-indexed

  // Calculate total cash invested if not provided
  const cashInvested = totalCashInvested || (() => {
    const downPaymentAmount = inputs.downPaymentAmount
    const loanPointsAmount = inputs.loanAmount * (inputs.loanPointsPercent / 100)
    return downPaymentAmount + inputs.closingCostsAmount + inputs.rehabBudget + loanPointsAmount
  })()

  // Sale price with appreciation
  const salePrice = inputs.purchasePrice * Math.pow(1 + inputs.propertyAppreciationPercent / 100, saleYear)

  // Selling costs
  const sellingCosts = salePrice * (inputs.sellingCostsPercent / 100)

  // Remaining loan balance
  const remainingLoanBalance = calculateLoanBalance(
    inputs.loanAmount,
    inputs.interestRate,
    inputs.loanTermYears,
    saleYear,
    inputs.amortizationType
  )

  // Net proceeds
  const netSaleProceeds = salePrice - sellingCosts - remainingLoanBalance

  // Total cash flow from operations
  const totalCashFlow = projections.slice(0, saleYear).reduce((sum, p) => sum + p.cashFlow, 0)

  // Total profit
  const totalProfit = totalCashFlow + netSaleProceeds - cashInvested

  // Returns
  const totalROI = cashInvested > 0 ? (totalProfit / cashInvested) * 100 : 0
  const equityMultiple = cashInvested > 0 ? (totalCashFlow + netSaleProceeds) / cashInvested : 0
  const annualizedReturn = equityMultiple > 0 ? (Math.pow(equityMultiple, 1 / saleYear) - 1) * 100 : 0

  return {
    salePrice,
    sellingCosts,
    remainingLoanBalance,
    netSaleProceeds,
    totalCashFlow,
    totalProfit,
    totalROI,
    equityMultiple,
    annualizedReturn,
  }
}

/**
 * Validation helper - check if inputs are within reasonable ranges
 */
export function validateInvestmentInputs(inputs: Partial<InvestmentInputs>): string[] {
  const errors: string[] = []

  if (!inputs.purchasePrice || inputs.purchasePrice <= 0) {
    errors.push('Purchase price must be greater than zero')
  }

  if (!inputs.loanTermYears || inputs.loanTermYears < 1 || inputs.loanTermYears > 40) {
    errors.push('Loan term must be between 1 and 40 years')
  }

  if (!inputs.interestRate || inputs.interestRate < 0 || inputs.interestRate > 20) {
    errors.push('Interest rate must be between 0% and 20%')
  }

  if (!inputs.depreciationPeriodYears || inputs.depreciationPeriodYears < 1) {
    errors.push('Depreciation period must be at least 1 year')
  }

  if (!inputs.plannedHoldYears || inputs.plannedHoldYears < 1 || inputs.plannedHoldYears > 50) {
    errors.push('Hold period must be between 1 and 50 years')
  }

  return errors
}
