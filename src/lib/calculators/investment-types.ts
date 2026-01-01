/**
 * Investment Calculator Type Definitions
 * Comprehensive TypeScript interfaces for real estate investment analysis
 */

// Property & Finance Types
export type PropertyType = 'single_family' | 'multifamily'
export type AmortizationType = 'standard' | 'interest_only'

/**
 * Main input structure for investment calculator
 * All 30+ input fields organized by category
 */
export interface InvestmentInputs {
  // Market Selection
  marketRegion?: 'troy_ny' | 'buffalo_ny' | 'florida' | 'custom'

  // Property & Purchase
  propertyType: PropertyType
  purchasePrice: number
  closingCostsAmount: number
  rehabBudget: number
  landValuePercent: number // For depreciation basis
  acquisitionDate: Date

  // Financing
  downPaymentPercent: number
  downPaymentAmount: number // Calculated, but can be overridden
  loanAmount: number
  loanTermYears: number
  interestRate: number
  loanPointsPercent: number
  amortizationType: AmortizationType
  refinanceYear?: number
  refinanceRate?: number

  // Income
  // For Single Family:
  monthlyRent?: number
  // For Multifamily:
  numberOfUnits?: number
  unitRents?: number[] // Array of monthly rents per unit
  otherMonthlyIncome: number // Parking, laundry, etc.
  vacancyRatePercent: number
  rentGrowthRatePercent: number

  // Operating Expenses
  annualPropertyTax: number
  annualInsurance: number
  // Maintenance (either % or fixed)
  maintenanceType: 'percent' | 'fixed'
  maintenancePercent?: number
  maintenanceMonthly?: number
  repairsReserveMonthly: number
  capexReserveMonthly: number
  propertyManagementPercent: number
  utilitiesMonthly: number
  hoaFeesMonthly: number
  annualAdminLegalAccounting: number

  // Tax & Market Assumptions
  marginalTaxRatePercent: number
  depreciationPeriodYears: number // Default 27.5 for residential
  propertyAppreciationPercent: number
  expenseInflationPercent: number

  // Exit Strategy
  plannedHoldYears: number
  plannedSaleYear: number
  sellingCostsPercent: number

  // Investor Targets (for comparison only)
  targetCashOnCashPercent: number
  targetTotalROIPercent: number
}

/**
 * Default input values for calculator initialization
 * Based on Troy, NY market data
 */
export const DEFAULT_INVESTMENT_INPUTS: InvestmentInputs = {
  marketRegion: 'troy_ny',
  propertyType: 'multifamily',
  purchasePrice: 360000, // Mid-range of $320-400k Troy market
  closingCostsAmount: 10800,
  rehabBudget: 18000,
  landValuePercent: 20,
  acquisitionDate: new Date(),

  downPaymentPercent: 25,
  downPaymentAmount: 90000,
  loanAmount: 270000,
  loanTermYears: 30,
  interestRate: 6.5,
  loanPointsPercent: 1.0,
  amortizationType: 'standard',

  monthlyRent: 2000, // For single family comparison
  numberOfUnits: 2,
  unitRents: [1000, 1000], // Troy market: $900-1,100/unit
  otherMonthlyIncome: 0,
  vacancyRatePercent: 5,
  rentGrowthRatePercent: 3,

  annualPropertyTax: 5400, // ~1.5% in Troy area
  annualInsurance: 1200,
  maintenanceType: 'percent',
  maintenancePercent: 5,
  maintenanceMonthly: undefined,
  repairsReserveMonthly: 100,
  capexReserveMonthly: 150,
  propertyManagementPercent: 8,
  utilitiesMonthly: 0,
  hoaFeesMonthly: 0,
  annualAdminLegalAccounting: 500,

  marginalTaxRatePercent: 25,
  depreciationPeriodYears: 27.5,
  propertyAppreciationPercent: 3,
  expenseInflationPercent: 2,

  plannedHoldYears: 10,
  plannedSaleYear: 10,
  sellingCostsPercent: 7,

  targetCashOnCashPercent: 8,
  targetTotalROIPercent: 100,
}

/**
 * Year-by-year projection data
 */
export interface YearlyProjection {
  year: number
  propertyValue: number
  loanBalance: number
  equity: number
  grossScheduledIncome: number
  vacancyLoss: number
  effectiveGrossIncome: number
  totalOperatingExpenses: number
  noi: number
  annualDebtService: number
  cashFlow: number
  cumulativeCashFlow: number
  capRate: number
  cashOnCashReturn: number
}

/**
 * Exit/sale analysis
 */
export interface SaleAnalysis {
  salePrice: number
  sellingCosts: number
  remainingLoanBalance: number
  netSaleProceeds: number

  // Total returns
  totalCashFlow: number
  totalProfit: number
  totalROI: number
  equityMultiple: number
  annualizedReturn: number
}

/**
 * Complete investment metrics output
 */
export interface InvestmentMetrics {
  // Initial Investment
  totalProjectCost: number
  downPaymentAmount: number
  loanAmount: number
  loanPointsAmount: number
  totalCashInvested: number

  // Mortgage Details
  monthlyMortgagePayment: number
  annualDebtService: number

  // Year 1 Income (Gross)
  grossScheduledRent: number
  otherAnnualIncome: number
  grossIncome: number

  // Year 1 Vacancy & Effective Income
  vacancyLoss: number
  effectiveGrossIncome: number
  monthlyEffectiveIncome: number

  // Year 1 Operating Expenses
  propertyTax: number
  insurance: number
  maintenance: number
  repairsReserve: number
  capexReserve: number
  propertyManagement: number
  utilities: number
  hoaFees: number
  adminLegalAccounting: number
  totalOperatingExpenses: number
  monthlyOperatingExpenses: number

  // Year 1 Net Operating Income
  noi: number

  // Year 1 Cash Flow
  annualCashFlowBeforeTax: number
  monthlyCashFlow: number

  // Depreciation & Tax Benefits
  depreciableBasis: number
  annualDepreciation: number
  annualTaxSavings: number
  afterTaxCashFlow: number

  // Key Ratios
  capRate: number
  cashOnCashReturn: number
  debtServiceCoverageRatio: number
  operatingExpenseRatio: number
  breakEvenOccupancy: number

  // Multi-Year Projections
  yearlyProjections: YearlyProjection[]

  // Exit/Sale Analysis
  saleAnalysis: SaleAnalysis
}

/**
 * UI State for calculator
 */
export interface CalculatorUIState {
  // Lead capture gating
  hasSubmittedLead: boolean
  isLeadModalOpen: boolean

  // Results display
  showResults: boolean
  activeResultsTab: 'summary' | 'cashflow' | 'projections' | 'sale'

  // Input sections
  expandedSections: Set<string>

  // Form state
  isSubmitting: boolean
  error: string | null
}
