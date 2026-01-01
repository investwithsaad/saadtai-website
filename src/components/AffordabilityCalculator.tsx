'use client'

import { useState, useMemo } from 'react'
import { Heading, Text, Button, FormInput } from '@/components/ui'
import { LeadFormModal } from '@/components/LeadFormModal'

type CalculationsType = {
  maxHomePrice: number
  maxDownPayment: number
  monthlyPayment: number
  principalInterest: number
  propertyTax: number
  other: number
  principalPercent: string
  taxPercent: string
  otherPercent: string
}

export function AffordabilityCalculator() {
  const [annualIncome, setAnnualIncome] = useState(100000)
  const [monthlyDebts, setMonthlyDebts] = useState(500)
  const [downPaymentPercent, setDownPaymentPercent] = useState(20)
  const [loanTerm, setLoanTerm] = useState(30)
  const [interestRate, setInterestRate] = useState(6.5)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const calculations: CalculationsType = useMemo(() => {
    // Step 1: Calculate total monthly housing budget
    // Formula: (income / 12) * 0.36 - monthly debts
    const monthlyIncome = annualIncome / 12
    const totalBudget = Math.max(0, (monthlyIncome * 0.36) - monthlyDebts)

    // Fixed costs
    const otherMonthly = 75
    const monthlyTaxRate = 0.015 / 12 // 1.5% annual property tax

    const monthlyRate = interestRate / 100 / 12
    const numberOfPayments = loanTerm * 12

    let mortgageMultiplier = numberOfPayments // fallback for 0% rate
    if (monthlyRate > 0) {
      const numerator = Math.pow(1 + monthlyRate, numberOfPayments) - 1
      const denominator = monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)
      mortgageMultiplier = numerator / denominator
    }

    // Step 2: Calculate P&I accounting for tax, other, AND down payment percentage
    // homePrice = loanAmount / (1 - dpPercent/100)
    // propertyTax = homePrice * monthlyTaxRate
    // P&I + propertyTax + other = totalBudget
    // Solving: P&I = (totalBudget - other) / (1 + monthlyTaxRate * mortgageMultiplier / (1 - dpPercent/100))
    const dpRatio = downPaymentPercent / 100
    const loanRatio = 1 - dpRatio // e.g., 0.8 for 20% down

    const availableForPIAndTax = totalBudget - otherMonthly
    const principalInterest = Math.max(0,
      availableForPIAndTax / (1 + (monthlyTaxRate * mortgageMultiplier) / loanRatio)
    )

    // Step 3: Calculate loan amount, home price, and down payment
    const loanAmount = principalInterest * mortgageMultiplier
    const maxHomePrice = Math.max(0, Math.round(loanAmount / loanRatio))
    const calculatedDownPayment = Math.round(maxHomePrice * dpRatio)

    // Step 4: Calculate actual tax from home price
    const propertyTaxMonthly = maxHomePrice * monthlyTaxRate

    return {
      maxHomePrice,
      maxDownPayment: calculatedDownPayment,
      monthlyPayment: Math.round(totalBudget),
      principalInterest: Math.round(principalInterest),
      propertyTax: Math.round(propertyTaxMonthly),
      other: otherMonthly,
      principalPercent: totalBudget > 0 ? ((principalInterest / totalBudget) * 100).toFixed(2) : '0.00',
      taxPercent: totalBudget > 0 ? ((propertyTaxMonthly / totalBudget) * 100).toFixed(2) : '0.00',
      otherPercent: totalBudget > 0 ? ((otherMonthly / totalBudget) * 100).toFixed(2) : '0.00',
    }
  }, [annualIncome, monthlyDebts, downPaymentPercent, loanTerm, interestRate])

  const handleDownPaymentPercentChange = (value: string) => {
    const percent = parseFloat(value) || 0
    setDownPaymentPercent(Math.min(99, Math.max(0, percent))) // Clamp 0-99%
  }

  const handleDownPaymentDollarChange = (value: string) => {
    const dollar = parseFloat(value) || 0
    if (calculations.maxHomePrice > 0) {
      // Calculate what percentage this dollar amount represents
      const percent = (dollar / calculations.maxHomePrice) * 100
      setDownPaymentPercent(Math.min(99, Math.max(0, Math.round(percent * 10) / 10)))
    }
  }

  return (
    <>
      <div className="mb-12">
        <Heading size="h2" className="font-heading mb-4">What can I afford?</Heading>
        <Text size="lg" className="text-gray-700 max-w-3xl">
          Our affordability calculator will help you estimate how much you can pay on a new home, your down payment, and your closing costs.
        </Text>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Left Column - Inputs */}
        <div className="space-y-6">
          {/* Annual Income */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">Annual income</label>
            <div className="relative">
              <span className="absolute left-4 top-3 text-gray-500 font-semibold">$</span>
              <input
                type="number"
                value={annualIncome}
                onChange={(e) => setAnnualIncome(parseFloat(e.target.value) || 0)}
                className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
            </div>
          </div>

          {/* Monthly Debts */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">Monthly debts (credit card, bills, etc)</label>
            <div className="relative">
              <span className="absolute left-4 top-3 text-gray-500 font-semibold">$</span>
              <input
                type="number"
                value={monthlyDebts}
                onChange={(e) => setMonthlyDebts(parseFloat(e.target.value) || 0)}
                className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
            </div>
          </div>

          {/* Down Payment */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">Down payment</label>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative">
                <span className="absolute left-4 top-3 text-gray-500">$</span>
                <input
                  type="number"
                  value={calculations.maxDownPayment}
                  onChange={(e) => handleDownPaymentDollarChange(e.target.value)}
                  className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                />
              </div>
              <div className="relative">
                <input
                  type="number"
                  value={downPaymentPercent}
                  onChange={(e) => handleDownPaymentPercentChange(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                />
                <span className="absolute right-4 top-3 text-gray-500">%</span>
              </div>
            </div>
          </div>

          {/* Loan Term */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">Loan term</label>
            <select
              value={loanTerm}
              onChange={(e) => setLoanTerm(parseFloat(e.target.value))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
            >
              <option value={10}>10 years</option>
              <option value={15}>15 years</option>
              <option value={20}>20 years</option>
              <option value={25}>25 years</option>
              <option value={30}>30 years</option>
            </select>
          </div>

          {/* Interest Rate */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">Interest rate</label>
            <div className="relative">
              <input
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(parseFloat(e.target.value) || 0)}
                step="0.1"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
              <span className="absolute right-4 top-3 text-gray-500">%</span>
            </div>
          </div>

        </div>

        {/* Right Column - Results */}
        <div className="border border-gray-300 rounded-lg p-8 bg-gray-50 h-fit">
          <div className="mb-8">
            <Text className="text-gray-600 text-sm mb-1">You can afford</Text>
            <div className="text-5xl font-bold text-gray-900 mb-2">
              ${calculations.maxHomePrice.toLocaleString('en-US')}
            </div>
          </div>

          <div className="mb-8 pb-8 border-b border-gray-300">
            <Text className="text-gray-600 text-sm mb-1">Down payment</Text>
            <div className="text-3xl font-bold text-gray-900">
              ${calculations.maxDownPayment.toLocaleString('en-US')}
            </div>
          </div>

          {/* Payment Breakdown Chart */}
          <div className="mb-8">
            <div className="text-sm font-semibold text-gray-900 mb-3">
              ${calculations.monthlyPayment.toLocaleString('en-US')}/mo
            </div>
            <div className="flex h-6 rounded-full overflow-hidden mb-6 bg-gray-200">
              <div
                className="bg-green-500"
                style={{ width: `${calculations.principalPercent}%` }}
              ></div>
              <div
                className="bg-blue-500"
                style={{ width: `${calculations.taxPercent}%` }}
              ></div>
              <div
                className="bg-yellow-400"
                style={{ width: `${calculations.otherPercent}%` }}
              ></div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <Text className="font-medium text-sm">Principal & Interest</Text>
                </div>
                <div className="text-right">
                  <div className="font-bold text-gray-900 text-sm">${calculations.principalInterest.toLocaleString('en-US')}</div>
                  <Text className="text-xs text-gray-600">{calculations.principalPercent}%</Text>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <Text className="font-medium text-sm">Property tax</Text>
                </div>
                <div className="text-right">
                  <div className="font-bold text-gray-900 text-sm">${calculations.propertyTax.toLocaleString('en-US')}</div>
                  <Text className="text-xs text-gray-600">{calculations.taxPercent}%</Text>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <Text className="font-medium text-sm">Other</Text>
                </div>
                <div className="text-right">
                  <div className="font-bold text-gray-900 text-sm">${calculations.other.toLocaleString('en-US')}</div>
                  <Text className="text-xs text-gray-600">{calculations.otherPercent}%</Text>
                </div>
              </div>
            </div>
          </div>

          <Button 
            variant="default" 
            className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-lg mb-6"
            onClick={() => setIsModalOpen(true)}
          >
            Get Started
          </Button>

          <Text className="text-xs text-gray-600">
            The affordability calculator serves an educational purpose only. The actual rates and monthly payment figures are susceptible to market changes and are influenced by various factors, including location and loan specifics. The estimations rely on the information provided by you and might not encompass additional charges and expenses that lenders may impose alongside principal and interest payments, such as taxes and insurance. It should be noted that we do not provide loans, and this tool doesn't promise lending.
          </Text>
        </div>
      </div>

      {/* Lead Form Modal */}
      <LeadFormModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        prefillComments={`Affordability Calculator Results:
- Max Home Price: $${calculations.maxHomePrice.toLocaleString('en-US')}
- Down Payment: $${calculations.maxDownPayment.toLocaleString('en-US')}
- Monthly Payment: $${calculations.monthlyPayment.toLocaleString('en-US')}/month
- Principal & Interest: $${calculations.principalInterest.toLocaleString('en-US')}
- Property Tax: $${calculations.propertyTax.toLocaleString('en-US')}`}
      />
    </>
  )
}
