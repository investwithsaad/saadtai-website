'use client'

import { useState, useMemo } from 'react'
import { Heading, Text, Button } from '@/components/ui'

export function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState(300000)
  const [downPaymentDollar, setDownPaymentDollar] = useState(60000)
  const [downPaymentPercent, setDownPaymentPercent] = useState(20)
  const [loanTerm, setLoanTerm] = useState(30)
  const [interestRate, setInterestRate] = useState(6.5)
  const [state, setState] = useState('NY')

  const calculations = useMemo(() => {
    const loanAmount = homePrice - downPaymentDollar
    const monthlyRate = interestRate / 100 / 12
    const numberOfPayments = loanTerm * 12

    // Calculate principal and interest using mortgage formula
    let principalInterest = 0
    if (monthlyRate > 0) {
      principalInterest = (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
                         (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
    } else {
      principalInterest = loanAmount / numberOfPayments
    }

    // Estimate property tax (varies by state, using NY average of ~1.5% annually)
    const propertyTaxAnnual = homePrice * 0.015
    const propertyTaxMonthly = propertyTaxAnnual / 12

    // Other costs (insurance, HOA, etc.) - estimate
    const otherMonthly = 75

    const totalMonthly = principalInterest + propertyTaxMonthly + otherMonthly
    const totalInterest = principalInterest * numberOfPayments - loanAmount

    return {
      loanAmount,
      principalInterest: Math.round(principalInterest),
      propertyTax: Math.round(propertyTaxMonthly),
      other: otherMonthly,
      totalMonthly: Math.round(totalMonthly),
      totalInterest: Math.round(totalInterest),
      principalPercent: ((principalInterest / totalMonthly) * 100).toFixed(2),
      taxPercent: ((propertyTaxMonthly / totalMonthly) * 100).toFixed(2),
      otherPercent: ((otherMonthly / totalMonthly) * 100).toFixed(2)
    }
  }, [homePrice, downPaymentDollar, loanTerm, interestRate])

  const handleDownPaymentDollarChange = (value: string) => {
    const dollar = parseFloat(value) || 0
    setDownPaymentDollar(dollar)
    const percent = (dollar / homePrice) * 100
    setDownPaymentPercent(Math.round(percent * 100) / 100)
  }

  const handleDownPaymentPercentChange = (value: string) => {
    const percent = parseFloat(value) || 0
    setDownPaymentPercent(percent)
    const dollar = (homePrice * percent) / 100
    setDownPaymentDollar(Math.round(dollar))
  }

  const handleHomePriceChange = (value: string) => {
    const price = parseFloat(value) || 0
    setHomePrice(price)
    // Keep percentage, update dollar amount
    const newDownPayment = (price * downPaymentPercent) / 100
    setDownPaymentDollar(Math.round(newDownPayment))
  }

  return (
    <>
      <div className="mb-12">
        <Heading size="h2" className="font-heading mb-4">Mortgage Calculator</Heading>
        <Text size="lg" className="text-gray-700 max-w-3xl">
          Enter your details below to estimate your monthly mortgage payment with taxes, fees and insurance.
        </Text>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Inputs */}
          <div className="space-y-6">
            {/* Home Price */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Home price</label>
              <div className="relative">
                <span className="absolute left-4 top-3 text-gray-500 font-semibold">$</span>
                <input
                  type="number"
                  value={homePrice}
                  onChange={(e) => handleHomePriceChange(e.target.value)}
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
                    value={downPaymentDollar}
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
                <option value={15}>15 years</option>
                <option value={20}>20 years</option>
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

            {/* State */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">State</label>
              <select
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
              >
                <option value="NY">New York</option>
                <option value="PA">Pennsylvania</option>
                <option value="MA">Massachusetts</option>
                <option value="CT">Connecticut</option>
                <option value="VT">Vermont</option>
              </select>
            </div>
          </div>

          {/* Right Column - Results */}
          <div className="border border-gray-300 rounded-lg p-8 bg-gray-50 h-fit">
            <div className="mb-8">
              <Text className="text-gray-600 text-sm mb-1">Estimated monthly payment</Text>
              <div className="text-5xl font-bold text-gray-900 mb-2">
                ${calculations.totalMonthly.toLocaleString('en-US')}
              </div>
              <Text className="text-gray-600">
                {loanTerm} Year Fixed, {interestRate}% Interest
              </Text>
            </div>

            {/* Breakdown Chart */}
            <div className="mb-8">
              <div className="flex h-6 rounded-full overflow-hidden mb-4 bg-gray-200">
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
                    <Text className="font-medium">Principal & Interest</Text>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-gray-900">${calculations.principalInterest.toLocaleString('en-US')}</div>
                    <Text className="text-sm text-gray-600">{calculations.principalPercent}%</Text>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <Text className="font-medium">Property tax</Text>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-gray-900">${calculations.propertyTax.toLocaleString('en-US')}</div>
                    <Text className="text-sm text-gray-600">{calculations.taxPercent}%</Text>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <Text className="font-medium">Other</Text>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-gray-900">${calculations.other.toLocaleString('en-US')}</div>
                    <Text className="text-sm text-gray-600">{calculations.otherPercent}%</Text>
                  </div>
                </div>
              </div>
            </div>

            <Button variant="default" className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-lg mb-6">
              Get Started
            </Button>

            <Text className="text-xs text-gray-600">
              This mortgage calculator is for educational purposes only. Real-world interest rates and payments can differ due to factors like market trends, location, and loan specifics. Calculations are based on your inputs and might not consider extra costs a lender may add, such as insurance, taxes, and fees; thus, actual repayments could surpass estimates. Please note, we don't provide loans, and this tool doesn't promise lending.
            </Text>
          </div>
        </div>
      </>
  )
}
