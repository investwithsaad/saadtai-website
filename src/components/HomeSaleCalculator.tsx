'use client'

import { useState, useMemo } from 'react'
import { HelpCircle } from 'lucide-react'
import { Section, Container, Heading, Text, Button } from '@/components/ui'

export function HomeSaleCalculator() {
  const [homeSalePrice, setHomeSalePrice] = useState(200000)
  const [mortgagePayoff, setMortgagePayoff] = useState(0)
  const [repairsPercent, setRepairsPercent] = useState(0)
  const [repairsDollar, setRepairsDollar] = useState(0)
  const [commissionPercent, setCommissionPercent] = useState(6)
  const [commissionDollar, setCommissionDollar] = useState(12000)
  const [transferTaxPercent, setTransferTaxPercent] = useState(1)
  const [transferTaxDollar, setTransferTaxDollar] = useState(2000)

  const calculations = useMemo(() => {
    const repairs = repairsPercent > 0 ? homeSalePrice * (repairsPercent / 100) : repairsDollar
    const commission = commissionPercent > 0 ? homeSalePrice * (commissionPercent / 100) : commissionDollar
    const transferTax = transferTaxPercent > 0 ? homeSalePrice * (transferTaxPercent / 100) : transferTaxDollar

    const totalCosts = mortgagePayoff + repairs + commission + transferTax
    const netProceeds = homeSalePrice - totalCosts

    return {
      repairs,
      commission,
      transferTax,
      totalCosts,
      netProceeds
    }
  }, [homeSalePrice, mortgagePayoff, repairsPercent, repairsDollar, commissionPercent, commissionDollar, transferTaxPercent, transferTaxDollar])

  const handleCommissionPercentChange = (value: string) => {
    const percent = parseFloat(value) || 0
    setCommissionPercent(percent)
    setCommissionDollar(homeSalePrice * (percent / 100))
  }

  const handleCommissionDollarChange = (value: string) => {
    const dollar = parseFloat(value) || 0
    setCommissionDollar(dollar)
    setCommissionPercent((dollar / homeSalePrice) * 100)
  }

  const handleRepairsPercentChange = (value: string) => {
    const percent = parseFloat(value) || 0
    setRepairsPercent(percent)
    setRepairsDollar(homeSalePrice * (percent / 100))
  }

  const handleRepairsDollarChange = (value: string) => {
    const dollar = parseFloat(value) || 0
    setRepairsDollar(dollar)
    setRepairsPercent((dollar / homeSalePrice) * 100)
  }

  const handleTransferTaxPercentChange = (value: string) => {
    const percent = parseFloat(value) || 0
    setTransferTaxPercent(percent)
    setTransferTaxDollar(homeSalePrice * (percent / 100))
  }

  const handleTransferTaxDollarChange = (value: string) => {
    const dollar = parseFloat(value) || 0
    setTransferTaxDollar(dollar)
    setTransferTaxPercent((dollar / homeSalePrice) * 100)
  }

  return (
    <Section background="white">
      <Container>
        <div className="mb-12">
          <Heading size="h2" className="font-heading mb-4">How much will I make selling my home?</Heading>
          <Text size="lg" className="text-gray-700 max-w-3xl">
            When selling your home, there are additional costs like repairs, title fees, and agent commissions that impact the net cash amount after a sale is complete. Use the home sale net proceeds calculator below to estimate your home sale price, total costs, and net proceeds.
          </Text>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Inputs */}
          <div className="space-y-6">
            {/* Address */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Where is your home located?</label>
              <input
                type="text"
                placeholder="Enter your address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              />
            </div>

            {/* Home Sale Price */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-900 mb-2">
                Home Sale Price
                <HelpCircle size={16} className="text-gray-400" />
              </label>
              <div className="relative">
                <span className="absolute left-4 top-3 text-gray-500 font-semibold">$</span>
                <input
                  type="number"
                  value={homeSalePrice}
                  onChange={(e) => setHomeSalePrice(parseFloat(e.target.value) || 0)}
                  className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                />
              </div>
            </div>

            {/* Mortgage Payoff */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-900 mb-2">
                Mortgage Payoff Amount
                <HelpCircle size={16} className="text-gray-400" />
              </label>
              <div className="relative">
                <span className="absolute left-4 top-3 text-gray-500 font-semibold">$</span>
                <input
                  type="number"
                  value={mortgagePayoff}
                  onChange={(e) => setMortgagePayoff(parseFloat(e.target.value) || 0)}
                  className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                />
              </div>
            </div>

            {/* Repairs/Improvements/Staging */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-900 mb-2">
                Repairs / Improvements / Staging
                <HelpCircle size={16} className="text-gray-400" />
              </label>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    type="number"
                    value={repairsPercent}
                    onChange={(e) => handleRepairsPercentChange(e.target.value)}
                    placeholder="0"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  />
                  <span className="absolute right-4 top-3 text-gray-500">%</span>
                </div>
                <div className="relative">
                  <span className="absolute left-4 top-3 text-gray-500">$</span>
                  <input
                    type="number"
                    value={Math.round(repairsDollar)}
                    onChange={(e) => handleRepairsDollarChange(e.target.value)}
                    placeholder="0"
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Commission */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-900 mb-2">
                Commission
                <HelpCircle size={16} className="text-gray-400" />
              </label>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    type="number"
                    value={commissionPercent}
                    onChange={(e) => handleCommissionPercentChange(e.target.value)}
                    placeholder="0"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  />
                  <span className="absolute right-4 top-3 text-gray-500">%</span>
                </div>
                <div className="relative">
                  <span className="absolute left-4 top-3 text-gray-500">$</span>
                  <input
                    type="number"
                    value={Math.round(commissionDollar)}
                    onChange={(e) => handleCommissionDollarChange(e.target.value)}
                    placeholder="0"
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Transfer Tax */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-900 mb-2">
                Transfer Tax
                <HelpCircle size={16} className="text-gray-400" />
              </label>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    type="number"
                    value={transferTaxPercent}
                    onChange={(e) => handleTransferTaxPercentChange(e.target.value)}
                    placeholder="0"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  />
                  <span className="absolute right-4 top-3 text-gray-500">%</span>
                </div>
                <div className="relative">
                  <span className="absolute left-4 top-3 text-gray-500">$</span>
                  <input
                    type="number"
                    value={Math.round(transferTaxDollar)}
                    onChange={(e) => handleTransferTaxDollarChange(e.target.value)}
                    placeholder="0"
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            <Text size="sm" className="text-gray-600 mt-8">
              All calculations are estimates and provided for informational purposes only. Actual amounts may vary.
            </Text>
          </div>

          {/* Right Column - Results */}
          <div className="flex flex-col">
            <div className="border border-gray-300 rounded-lg p-8 bg-gray-50 flex-1 flex flex-col justify-between">
              <div>
                <Heading size="h3" className="font-heading text-gray-900 mb-8">Estimated net when selling your home</Heading>

                <div className="mb-12">
                  <div className="text-5xl font-bold text-gray-900 mb-2">
                    ${calculations.netProceeds.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-8 mb-8">
                  <div>
                    <Text className="text-gray-600 text-sm mb-1">Home Sale Price</Text>
                    <div className="text-2xl font-bold text-gray-900">
                      ${homeSalePrice.toLocaleString('en-US')}
                    </div>
                  </div>
                  <div>
                    <Text className="text-gray-600 text-sm mb-1">Total costs to sell</Text>
                    <div className="text-2xl font-bold text-gray-900">
                      ${calculations.totalCosts.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                    </div>
                  </div>
                </div>
              </div>

              <Button variant="default" className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-lg">
                Get Estimate
              </Button>

              <Text className="text-gray-700 text-sm mt-6">
                This net proceeds calculator provides an estimate of costs that are meant for educational purposes only; our calculation is not a guarantee and is based on the information that you've entered. Our total costs to sell include remaining mortgage, commission and estimated closing costs.
              </Text>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
