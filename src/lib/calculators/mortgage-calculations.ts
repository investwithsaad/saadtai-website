/**
 * Mortgage and Loan Calculation Functions
 * Pure functions for amortization, payment calculations, and loan balance
 */

import { AmortizationType } from './investment-types'

/**
 * Calculate monthly mortgage payment
 * Supports standard amortization and interest-only loans
 *
 * @param loanAmount - Principal loan amount
 * @param annualRate - Annual interest rate (as percentage, e.g., 6.5 for 6.5%)
 * @param termYears - Loan term in years
 * @param amortizationType - 'standard' for P&I, 'interest_only' for I-only
 * @returns Monthly payment amount
 *
 * Standard formula: P = L * [r(1+r)^n] / [(1+r)^n - 1]
 * Where: P = payment, L = loan amount, r = monthly rate, n = number of payments
 */
export function calculateMortgagePayment(
  loanAmount: number,
  annualRate: number,
  termYears: number,
  amortizationType: AmortizationType = 'standard'
): number {
  if (loanAmount <= 0 || annualRate < 0) {
    return 0
  }

  if (amortizationType === 'interest_only') {
    // Interest-only payment
    return (loanAmount * annualRate / 100) / 12
  }

  // Standard amortization (Principal + Interest)
  const monthlyRate = annualRate / 100 / 12
  const numberOfPayments = termYears * 12

  if (monthlyRate === 0) {
    // No interest - simple division
    return loanAmount / numberOfPayments
  }

  // Standard amortization formula
  const numerator = monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)
  const denominator = Math.pow(1 + monthlyRate, numberOfPayments) - 1
  const payment = loanAmount * (numerator / denominator)

  return payment
}

/**
 * Calculate remaining loan balance after N years
 * Used for multi-year projections and exit analysis
 *
 * @param loanAmount - Original loan amount
 * @param annualRate - Annual interest rate
 * @param termYears - Original loan term in years
 * @param yearsPassed - Years elapsed
 * @param amortizationType - Type of amortization
 * @returns Remaining loan balance
 */
export function calculateLoanBalance(
  loanAmount: number,
  annualRate: number,
  termYears: number,
  yearsPassed: number,
  amortizationType: AmortizationType = 'standard'
): number {
  if (amortizationType === 'interest_only') {
    // Principal doesn't decrease with interest-only payments
    return loanAmount
  }

  const monthlyRate = annualRate / 100 / 12
  const totalPayments = termYears * 12
  const paymentsMade = yearsPassed * 12

  // If we've made all payments, balance is zero
  if (paymentsMade >= totalPayments) {
    return 0
  }

  if (monthlyRate === 0) {
    // No interest - simple calculation
    const remainingMonths = totalPayments - paymentsMade
    return loanAmount * (remainingMonths / totalPayments)
  }

  // Calculate remaining balance
  // Balance = Payment * [(1+r)^n - (1+r)^p] / [(1+r)^n - 1]
  // Where n = total payments, p = payments made
  const monthlyPayment = calculateMortgagePayment(
    loanAmount,
    annualRate,
    termYears,
    amortizationType
  )

  const futurePaymentsFactor = Math.pow(1 + monthlyRate, totalPayments - paymentsMade) - 1
  const totalPaymentsFactor = Math.pow(1 + monthlyRate, totalPayments) - 1

  const balance = monthlyPayment * (futurePaymentsFactor / monthlyRate) / (totalPaymentsFactor / monthlyRate)

  return Math.max(0, balance)
}

/**
 * Create a full amortization schedule for analysis
 * Returns array of payment breakdowns for each month/year
 *
 * @param loanAmount - Original loan amount
 * @param annualRate - Annual interest rate
 * @param termYears - Loan term in years
 * @returns Array of amortization schedule entries
 */
export interface AmortizationScheduleEntry {
  period: number // Month number
  payment: number
  principal: number
  interest: number
  balance: number
}

export function generateAmortizationSchedule(
  loanAmount: number,
  annualRate: number,
  termYears: number
): AmortizationScheduleEntry[] {
  const monthlyRate = annualRate / 100 / 12
  const numberOfPayments = termYears * 12
  const monthlyPayment = calculateMortgagePayment(loanAmount, annualRate, termYears, 'standard')

  const schedule: AmortizationScheduleEntry[] = []
  let remainingBalance = loanAmount

  for (let period = 1; period <= numberOfPayments; period++) {
    const interestPayment = remainingBalance * monthlyRate
    const principalPayment = monthlyPayment - interestPayment
    remainingBalance -= principalPayment

    schedule.push({
      period,
      payment: monthlyPayment,
      principal: Math.max(0, principalPayment),
      interest: interestPayment,
      balance: Math.max(0, remainingBalance),
    })
  }

  return schedule
}

/**
 * Calculate total interest paid over loan life
 *
 * @param loanAmount - Original loan amount
 * @param monthlyPayment - Monthly payment amount
 * @param termYears - Loan term in years
 * @returns Total interest paid
 */
export function calculateTotalInterest(
  loanAmount: number,
  monthlyPayment: number,
  termYears: number
): number {
  const totalPayments = monthlyPayment * (termYears * 12)
  return totalPayments - loanAmount
}

/**
 * Calculate effective annual rate accounting for points/fees
 *
 * @param annualRate - Stated annual rate
 * @param pointsPercent - Loan points as percentage of loan amount
 * @param termYears - Loan term in years
 * @returns Effective annual rate
 */
export function calculateEffectiveRate(
  annualRate: number,
  pointsPercent: number,
  termYears: number
): number {
  // Simplified calculation: spread points over loan term
  const annualCost = pointsPercent / termYears
  return annualRate + annualCost
}
