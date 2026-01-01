/**
 * Market-Specific Investment Calculator Presets
 * Regional defaults based on actual market data
 */

import { InvestmentInputs } from './investment-types'

export type MarketRegion = 'troy_ny' | 'buffalo_ny' | 'florida' | 'custom'

export interface MarketPreset {
  name: string
  description: string
  region: MarketRegion
  inputs: Partial<InvestmentInputs>
}

/**
 * Troy, NY Market Preset
 * Based on 2-unit multifamily data
 * Price range: $320-400k | Rents: $900-1,100/unit | Cap rates: 5-6%
 */
export const TROY_NY_PRESET: MarketPreset = {
  name: 'Troy, NY',
  description: '2-unit multifamily, $320-400k range, $900-1,100 rents',
  region: 'troy_ny',
  inputs: {
    propertyType: 'multifamily',
    purchasePrice: 360000, // Mid-range of $320-400k
    closingCostsAmount: 10800, // 3% of purchase price
    rehabBudget: 18000, // ~5% for typical rehab
    landValuePercent: 20,

    downPaymentPercent: 25,
    downPaymentAmount: 90000,
    loanAmount: 270000,
    loanTermYears: 30,
    interestRate: 6.5,
    loanPointsPercent: 1.0,
    amortizationType: 'standard',

    numberOfUnits: 2,
    unitRents: [1000, 1000], // Mid-range of $900-1,100
    otherMonthlyIncome: 0,
    vacancyRatePercent: 5,
    rentGrowthRatePercent: 3,

    annualPropertyTax: 5400, // ~1.5% of purchase price (Troy area)
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
  },
}

/**
 * Buffalo, NY Market Preset
 * Similar to Troy but with slightly different market conditions
 */
export const BUFFALO_NY_PRESET: MarketPreset = {
  name: 'Buffalo, NY',
  description: 'Capital region multifamily, established markets',
  region: 'buffalo_ny',
  inputs: {
    ...TROY_NY_PRESET.inputs,
    purchasePrice: 280000, // Buffalo slightly lower than Troy
    closingCostsAmount: 8400,
    rehabBudget: 14000,
    downPaymentAmount: 70000,
    loanAmount: 210000,
    numberOfUnits: 2,
    unitRents: [950, 950], // Slightly lower than Troy
    annualPropertyTax: 4200,
    propertyAppreciationPercent: 2.5, // Slightly slower appreciation
  },
}

/**
 * Florida Market Preset
 * Placeholder with typical Florida multifamily metrics
 */
export const FLORIDA_PRESET: MarketPreset = {
  name: 'Florida',
  description: 'Florida multifamily, higher rent markets',
  region: 'florida',
  inputs: {
    propertyType: 'multifamily',
    purchasePrice: 450000,
    closingCostsAmount: 13500,
    rehabBudget: 22500,
    landValuePercent: 15,

    downPaymentPercent: 25,
    downPaymentAmount: 112500,
    loanAmount: 337500,
    loanTermYears: 30,
    interestRate: 6.5,
    loanPointsPercent: 1.0,
    amortizationType: 'standard',

    numberOfUnits: 2,
    unitRents: [1400, 1400], // Higher rents in Florida
    otherMonthlyIncome: 50,
    vacancyRatePercent: 7, // Slightly higher vacancy
    rentGrowthRatePercent: 3.5,

    annualPropertyTax: 6750, // ~1.5% Florida rate
    annualInsurance: 1800, // Higher insurance due to hurricanes
    maintenanceType: 'percent',
    maintenancePercent: 6, // Slightly higher due to climate
    maintenanceMonthly: undefined,
    repairsReserveMonthly: 150,
    capexReserveMonthly: 200,
    propertyManagementPercent: 8,
    utilitiesMonthly: 0,
    hoaFeesMonthly: 0,
    annualAdminLegalAccounting: 600,

    marginalTaxRatePercent: 25,
    depreciationPeriodYears: 27.5,
    propertyAppreciationPercent: 3.5,
    expenseInflationPercent: 2.5,

    plannedHoldYears: 10,
    plannedSaleYear: 10,
    sellingCostsPercent: 7,

    targetCashOnCashPercent: 8,
    targetTotalROIPercent: 100,
  },
}

/**
 * All available market presets
 */
export const MARKET_PRESETS: Record<MarketRegion, MarketPreset> = {
  troy_ny: TROY_NY_PRESET,
  buffalo_ny: BUFFALO_NY_PRESET,
  florida: FLORIDA_PRESET,
  custom: {
    name: 'Custom',
    description: 'Customize all parameters',
    region: 'custom',
    inputs: {}, // Empty - user provides their own
  },
}

/**
 * Get preset by region
 */
export function getMarketPreset(region: MarketRegion): MarketPreset {
  return MARKET_PRESETS[region] || TROY_NY_PRESET
}

/**
 * List all available markets for UI
 */
export function getAvailableMarkets(): Array<{ value: MarketRegion; label: string; description: string }> {
  return [
    { value: 'troy_ny', label: 'Troy, NY', description: '2-unit multifamily, $360k typical' },
    { value: 'buffalo_ny', label: 'Buffalo, NY', description: '2-unit multifamily, $280k typical' },
    { value: 'florida', label: 'Florida', description: 'Multifamily, higher rent markets' },
    { value: 'custom', label: 'Custom', description: 'Enter your own numbers' },
  ]
}
