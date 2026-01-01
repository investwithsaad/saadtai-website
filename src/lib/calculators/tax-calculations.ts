/**
 * Tax and Depreciation Calculation Functions
 * Pure functions for depreciation, cost basis, and tax benefits
 */

/**
 * Calculate depreciable basis for residential property
 * Land is not depreciable; only building/improvements are
 *
 * @param purchasePrice - Total property purchase price
 * @param landValuePercent - Percentage of value attributable to land (0-100)
 * @returns Depreciable basis (building value)
 */
export function calculateDepreciableBasis(
  purchasePrice: number,
  landValuePercent: number
): number {
  const buildingValuePercent = 100 - landValuePercent
  return purchasePrice * (buildingValuePercent / 100)
}

/**
 * Calculate annual depreciation allowance
 * Residential properties: 27.5 year straight-line depreciation
 * Commercial properties: 39 year straight-line depreciation
 *
 * @param depreciableBasis - Basis available for depreciation
 * @param depreciationPeriodYears - Useful life in years (default 27.5 for residential)
 * @returns Annual depreciation amount
 */
export function calculateAnnualDepreciation(
  depreciableBasis: number,
  depreciationPeriodYears: number = 27.5
): number {
  return depreciableBasis / depreciationPeriodYears
}

/**
 * Calculate cumulative depreciation over multiple years
 *
 * @param depreciableBasis - Original basis
 * @param depreciationPeriodYears - Depreciation period in years
 * @param yearsElapsed - Number of years to calculate
 * @returns Total depreciation claimed
 */
export function calculateCumulativeDepreciation(
  depreciableBasis: number,
  depreciationPeriodYears: number,
  yearsElapsed: number
): number {
  const annualDepreciation = calculateAnnualDepreciation(depreciableBasis, depreciationPeriodYears)
  return annualDepreciation * Math.min(yearsElapsed, depreciationPeriodYears)
}

/**
 * Calculate book value (adjusted basis)
 * Original basis minus cumulative depreciation claimed
 *
 * @param originalBasis - Original depreciable basis
 * @param cumulativeDepreciation - Total depreciation claimed
 * @returns Current book value
 */
export function calculateBookValue(
  originalBasis: number,
  cumulativeDepreciation: number
): number {
  return Math.max(0, originalBasis - cumulativeDepreciation)
}

/**
 * Calculate tax savings from depreciation deduction
 * Depreciation is a non-cash deduction that reduces taxable income
 *
 * @param depreciation - Annual depreciation amount
 * @param marginalTaxRate - Investor's marginal tax rate (as percentage, e.g., 25 for 25%)
 * @returns Annual tax savings
 */
export function calculateTaxSavingsFromDepreciation(
  depreciation: number,
  marginalTaxRate: number
): number {
  return depreciation * (marginalTaxRate / 100)
}

/**
 * Calculate depreciation recapture tax at sale
 * When property is sold, accumulated depreciation is taxed at recapture rate
 * Typically 25% federal + state taxes
 *
 * @param cumulativeDepreciation - Total depreciation claimed
 * @param recaptureRate - Recapture tax rate (typically 0.25 for 25% federal)
 * @returns Tax owed on depreciation recapture
 */
export function calculateDepreciationRecaptureTax(
  cumulativeDepreciation: number,
  recaptureRate: number = 0.25
): number {
  return cumulativeDepreciation * recaptureRate
}

/**
 * Calculate capital gains tax on property sale
 * Long-term capital gains are typically taxed at lower rates than ordinary income
 *
 * @param salePrice - Sale proceeds
 * @param adjustedBasis - Adjusted basis (original cost minus depreciation claimed)
 * @param capitalGainsTaxRate - Long-term capital gains tax rate (typically 0.15-0.20)
 * @returns Capital gains tax owed
 */
export function calculateCapitalGainsTax(
  salePrice: number,
  adjustedBasis: number,
  capitalGainsTaxRate: number = 0.15
): number {
  const capitalGain = Math.max(0, salePrice - adjustedBasis)
  return capitalGain * capitalGainsTaxRate
}

/**
 * Calculate total tax on sale proceeds
 * Includes both depreciation recapture and long-term capital gains
 *
 * @param salePrice - Sale proceeds
 * @param originalPurchasePrice - Original purchase price
 * @param cumulativeDepreciation - Total depreciation claimed
 * @param recaptureRate - Depreciation recapture rate (default 0.25)
 * @param capitalGainsTaxRate - Capital gains tax rate (default 0.15)
 * @returns Total tax owed on sale
 */
export function calculateTotalSalesTax(
  salePrice: number,
  originalPurchasePrice: number,
  cumulativeDepreciation: number,
  recaptureRate: number = 0.25,
  capitalGainsTaxRate: number = 0.15
): number {
  // Adjusted basis = original cost - depreciation
  const adjustedBasis = originalPurchasePrice - cumulativeDepreciation

  // Depreciation recapture
  const recaptureTax = calculateDepreciationRecaptureTax(cumulativeDepreciation, recaptureRate)

  // Capital gains on appreciation beyond original cost
  const capitalGainsTax = calculateCapitalGainsTax(salePrice, adjustedBasis, capitalGainsTaxRate)

  return recaptureTax + capitalGainsTax
}

/**
 * Calculate 1031 exchange benefit
 * In a 1031 exchange, capital gains tax can be deferred
 *
 * @param salePrice - Sale proceeds
 * @param originalPurchasePrice - Original purchase price
 * @returns Deferred capital gains tax amount
 */
export function calculate1031DeferredTax(
  salePrice: number,
  originalPurchasePrice: number,
  capitalGainsTaxRate: number = 0.15
): number {
  const capitalGain = Math.max(0, salePrice - originalPurchasePrice)
  return capitalGain * capitalGainsTaxRate
}

/**
 * Calculate passive loss limitations effect
 * Active real estate professionals can deduct unlimited losses
 * Passive investors limited to $25k/year in passive losses
 *
 * @param operatingLoss - Annual operating loss (negative cash flow)
 * @param isActiveRealEstateTrader - Whether investor qualifies as active
 * @returns Deductible loss amount (remaining loss carried forward if passive)
 */
export interface PassiveLossResult {
  deductibleLoss: number
  carriedForwardLoss: number
}

export function calculatePassiveLossLimitation(
  operatingLoss: number,
  isActiveRealEstateTrader: boolean = false,
  passiveLossLimit: number = 25000
): PassiveLossResult {
  if (isActiveRealEstateTrader || operatingLoss <= 0) {
    // Active traders can deduct all losses; no loss in profitable years
    return {
      deductibleLoss: Math.max(0, operatingLoss),
      carriedForwardLoss: 0,
    }
  }

  // Passive investor - limited deduction
  const deductibleLoss = Math.min(Math.abs(operatingLoss), passiveLossLimit)
  const carriedForwardLoss = Math.max(0, Math.abs(operatingLoss) - passiveLossLimit)

  return {
    deductibleLoss: deductibleLoss,
    carriedForwardLoss: carriedForwardLoss,
  }
}
