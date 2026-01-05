'use client'

import React, { useState, useMemo, useEffect } from 'react'
import { DEFAULT_INVESTMENT_INPUTS, InvestmentInputs, CalculatorUIState } from '@/lib/calculators/investment-types'
import { calculateInvestmentMetrics } from '@/lib/calculators/investment-calculations'
import { Heading, Text } from '@/components/ui'

// Will import input section components when created
// import { PropertyInputs } from './InvestmentCalculator/InputSections/PropertyInputs'
// import { FinancingInputs } from './InvestmentCalculator/InputSections/FinancingInputs'
// etc...

/**
 * Main Investment Calculator Component
 * Orchestrates all input sections, calculations, and results display
 *
 * Features:
 * - Real-time calculation with memoization
 * - Accordion input sections for mobile UX
 * - Tabbed results view
 * - Debounced updates for performance
 * - Email gating handled by landing page (no need for duplicate capture)
 */
export function InvestmentCalculator() {
  // ==========================================
  // STATE MANAGEMENT
  // ==========================================

  const [inputs, setInputs] = useState<InvestmentInputs>(DEFAULT_INVESTMENT_INPUTS)
  const [uiState, setUiState] = useState<CalculatorUIState>({
    showResults: false,
    activeResultsTab: 'summary',
    expandedSections: new Set(['property']),
  } as CalculatorUIState)

  // Debounce calculations for performance (300ms)
  const [debouncedInputs, setDebouncedInputs] = useState<InvestmentInputs>(inputs)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedInputs(inputs)
    }, 300)

    return () => clearTimeout(timer)
  }, [inputs])

  // ==========================================
  // CALCULATIONS (MEMOIZED)
  // ==========================================

  const metrics = useMemo(() => {
    return calculateInvestmentMetrics(debouncedInputs)
  }, [debouncedInputs])

  // ==========================================
  // EVENT HANDLERS
  // ==========================================

  const handleInputChange = (newInputs: Partial<InvestmentInputs>) => {
    setInputs(prev => ({ ...prev, ...newInputs }))
    // Always show results once user starts calculating
    setUiState(prev => ({ ...prev, showResults: true }))
  }

  const toggleSection = (section: string) => {
    setUiState(prev => {
      const newExpanded = new Set(prev.expandedSections)
      if (newExpanded.has(section)) {
        newExpanded.delete(section)
      } else {
        newExpanded.add(section)
      }
      return { ...prev, expandedSections: newExpanded }
    })
  }

  // ==========================================
  // RENDER
  // ==========================================

  return (
    <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden">
      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
        {/* Left Column: Inputs */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-3 mb-6">
            <Heading size="h3">Deal Inputs</Heading>
            <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
              {inputs.propertyType === 'single_family' ? 'Single Family' : 'Multifamily'}
            </span>
          </div>

          {/* Property Type Toggle */}
          <div className="flex gap-3 mb-6">
            <button
              onClick={() => handleInputChange({ propertyType: 'single_family' })}
              className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                inputs.propertyType === 'single_family'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Single Family
            </button>
            <button
              onClick={() => handleInputChange({ propertyType: 'multifamily' })}
              className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                inputs.propertyType === 'multifamily'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Multifamily
            </button>
          </div>

          {/* Input Sections - Accordion Style */}
          <div className="space-y-3">
            {/* Property Inputs Section */}
            <AccordionSection
              title="Property & Purchase"
              isOpen={uiState.expandedSections.has('property')}
              onToggle={() => toggleSection('property')}
            >
              <PropertyInputsContent inputs={inputs} onChange={handleInputChange} />
            </AccordionSection>

            {/* Financing Inputs Section */}
            <AccordionSection
              title="Financing"
              isOpen={uiState.expandedSections.has('financing')}
              onToggle={() => toggleSection('financing')}
            >
              <FinancingInputsContent inputs={inputs} onChange={handleInputChange} />
            </AccordionSection>

            {/* Income Inputs Section */}
            <AccordionSection
              title="Income"
              isOpen={uiState.expandedSections.has('income')}
              onToggle={() => toggleSection('income')}
            >
              <IncomeInputsContent inputs={inputs} onChange={handleInputChange} />
            </AccordionSection>

            {/* Expense Inputs Section */}
            <AccordionSection
              title="Operating Expenses"
              isOpen={uiState.expandedSections.has('expenses')}
              onToggle={() => toggleSection('expenses')}
            >
              <ExpenseInputsContent inputs={inputs} onChange={handleInputChange} />
            </AccordionSection>

            {/* Assumptions Section */}
            <AccordionSection
              title="Tax & Market Assumptions"
              isOpen={uiState.expandedSections.has('assumptions')}
              onToggle={() => toggleSection('assumptions')}
            >
              <AssumptionsInputsContent inputs={inputs} onChange={handleInputChange} />
            </AccordionSection>
          </div>
        </div>

        {/* Right Column: Key Metrics (Sticky on Desktop) */}
        <div className="lg:sticky lg:top-20 h-fit space-y-4">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
            <Heading size="h4" className="mb-6">
              Quick Metrics
            </Heading>

            <div className="space-y-4">
              <MetricItem
                label="Cap Rate"
                value={`${metrics.capRate.toFixed(2)}%`}
              />
              <MetricItem
                label="Cash-on-Cash Return"
                value={`${metrics.cashOnCashReturn.toFixed(2)}%`}
              />
              <MetricItem
                label="Monthly Cash Flow"
                value={`$${metrics.monthlyCashFlow.toLocaleString('en-US', { maximumFractionDigits: 0 })}`}
              />
              <MetricItem
                label="Total ROI"
                value={`${metrics.saleAnalysis.totalROI.toFixed(2)}%`}
              />
              <MetricItem
                label="Equity Multiple"
                value={`${metrics.saleAnalysis.equityMultiple.toFixed(2)}x`}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Results Section - Below inputs on mobile, same as sticky on desktop */}
      {uiState.showResults && (
        <div className="border-t border-gray-200 p-6">
          <ResultsSection
            metrics={metrics}
            inputs={inputs}
            activeTab={uiState.activeResultsTab}
            onTabChange={(tab: 'summary' | 'cashflow' | 'projections' | 'sale') => setUiState(prev => ({ ...prev, activeResultsTab: tab }))}
          />
        </div>
      )}
    </div>
  )
}

// ==========================================
// SUB-COMPONENTS
// ==========================================

interface AccordionSectionProps {
  title: string
  isOpen: boolean
  onToggle: () => void
  children: React.ReactNode
}

function AccordionSection({ title, isOpen, onToggle, children }: AccordionSectionProps) {
  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-4 py-3 bg-gray-50 hover:bg-gray-100 font-medium text-left flex items-center justify-between transition-colors"
      >
        {title}
        <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      {isOpen && <div className="p-4 bg-white border-t border-gray-200">{children}</div>}
    </div>
  )
}

interface MetricItemProps {
  label: string
  value: string
}

function MetricItem({ label, value }: MetricItemProps) {
  return (
    <div>
      <div className="flex justify-between items-start mb-1">
        <Text size="sm" className="text-gray-700">
          {label}
        </Text>
      </div>
      <div className="text-2xl font-bold text-gray-900">{value}</div>
    </div>
  )
}

// ==========================================
// PLACEHOLDER INPUT SECTION COMPONENTS
// These will be extracted to separate files later
// ==========================================

interface InputSectionProps {
  inputs: InvestmentInputs
  onChange: (inputs: Partial<InvestmentInputs>) => void
}

function PropertyInputsContent({ inputs, onChange }: InputSectionProps) {
  return (
    <div className="space-y-4">
      <FormInput
        label="Purchase Price"
        type="number"
        value={inputs.purchasePrice}
        onChange={(value) => onChange({ purchasePrice: parseFloat(value) })}
        prefix="$"
      />
      <FormInput
        label="Closing Costs"
        type="number"
        value={inputs.closingCostsAmount}
        onChange={(value) => onChange({ closingCostsAmount: parseFloat(value) })}
        prefix="$"
      />
      <FormInput
        label="Rehab Budget"
        type="number"
        value={inputs.rehabBudget}
        onChange={(value) => onChange({ rehabBudget: parseFloat(value) })}
        prefix="$"
      />
      <div className="grid grid-cols-2 gap-3">
        <FormInput
          label="Land Value %"
          type="number"
          value={inputs.landValuePercent}
          onChange={(value) => onChange({ landValuePercent: parseFloat(value) })}
          suffix="%"
        />
        <FormInput
          label="Building Value %"
          type="number"
          value={100 - inputs.landValuePercent}
          onChange={(value) => onChange({ landValuePercent: 100 - parseFloat(value) })}
          suffix="%"
        />
      </div>
    </div>
  )
}

function FinancingInputsContent({ inputs, onChange }: InputSectionProps) {
  const downPaymentAmount = inputs.purchasePrice * (inputs.downPaymentPercent / 100)
  const defaultLoanAmount = inputs.purchasePrice - downPaymentAmount

  return (
    <div className="space-y-4">
      <FormInput
        label="Down Payment %"
        type="number"
        value={inputs.downPaymentPercent}
        onChange={(value) => {
          const percent = parseFloat(value)
          onChange({
            downPaymentPercent: percent,
            downPaymentAmount: (inputs.purchasePrice * percent) / 100,
            loanAmount: inputs.purchasePrice - (inputs.purchasePrice * percent) / 100,
          })
        }}
        suffix="%"
      />
      <FormInput
        label="Down Payment Amount"
        type="number"
        value={inputs.downPaymentAmount}
        onChange={(value) => {
          const amount = parseFloat(value)
          onChange({
            downPaymentAmount: amount,
            downPaymentPercent: (amount / inputs.purchasePrice) * 100,
            loanAmount: inputs.purchasePrice - amount,
          })
        }}
        prefix="$"
      />
      <FormInput
        label="Loan Amount"
        type="number"
        value={inputs.loanAmount}
        onChange={(value) => onChange({ loanAmount: parseFloat(value) })}
        prefix="$"
      />
      <div className="grid grid-cols-2 gap-3">
        <FormInput
          label="Loan Term (years)"
          type="number"
          value={inputs.loanTermYears}
          onChange={(value) => onChange({ loanTermYears: parseInt(value) })}
        />
        <FormInput
          label="Interest Rate"
          type="number"
          value={inputs.interestRate}
          onChange={(value) => onChange({ interestRate: parseFloat(value) })}
          suffix="%"
        />
      </div>
      <FormInput
        label="Points/Fees %"
        type="number"
        value={inputs.loanPointsPercent}
        onChange={(value) => onChange({ loanPointsPercent: parseFloat(value) })}
        suffix="%"
      />
    </div>
  )
}

function IncomeInputsContent({ inputs, onChange }: InputSectionProps) {
  return (
    <div className="space-y-4">
      {inputs.propertyType === 'single_family' ? (
        <FormInput
          label="Monthly Rent"
          type="number"
          value={inputs.monthlyRent}
          onChange={(value) => onChange({ monthlyRent: parseFloat(value) })}
          prefix="$"
        />
      ) : (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Unit Rents (Monthly)
          </label>
          <div className="space-y-2">
            {(inputs.unitRents || []).map((rent, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Unit {i + 1}:</span>
                <FormInput
                  label=""
                  type="number"
                  value={rent}
                  onChange={(value) => {
                    const newRents = [...(inputs.unitRents || [])]
                    newRents[i] = parseFloat(value)
                    onChange({ unitRents: newRents })
                  }}
                  prefix="$"
                />
              </div>
            ))}
          </div>
        </div>
      )}
      <FormInput
        label="Other Monthly Income"
        type="number"
        value={inputs.otherMonthlyIncome}
        onChange={(value) => onChange({ otherMonthlyIncome: parseFloat(value) })}
        prefix="$"
      />
      <div className="grid grid-cols-2 gap-3">
        <FormInput
          label="Vacancy Rate %"
          type="number"
          value={inputs.vacancyRatePercent}
          onChange={(value) => onChange({ vacancyRatePercent: parseFloat(value) })}
          suffix="%"
        />
        <FormInput
          label="Rent Growth %/year"
          type="number"
          value={inputs.rentGrowthRatePercent}
          onChange={(value) => onChange({ rentGrowthRatePercent: parseFloat(value) })}
          suffix="%"
        />
      </div>
    </div>
  )
}

function ExpenseInputsContent({ inputs, onChange }: InputSectionProps) {
  return (
    <div className="space-y-4">
      <FormInput
        label="Annual Property Tax"
        type="number"
        value={inputs.annualPropertyTax}
        onChange={(value) => onChange({ annualPropertyTax: parseFloat(value) })}
        prefix="$"
      />
      <FormInput
        label="Annual Insurance"
        type="number"
        value={inputs.annualInsurance}
        onChange={(value) => onChange({ annualInsurance: parseFloat(value) })}
        prefix="$"
      />

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Maintenance Type</label>
        <div className="flex gap-3">
          <button
            onClick={() => onChange({ maintenanceType: 'percent' })}
            className={`flex-1 py-2 px-3 rounded text-sm font-medium transition-colors ${
              inputs.maintenanceType === 'percent'
                ? 'bg-blue-100 text-blue-700 border-2 border-blue-500'
                : 'bg-gray-100 text-gray-700 border-2 border-gray-200'
            }`}
          >
            % of Rent
          </button>
          <button
            onClick={() => onChange({ maintenanceType: 'fixed' })}
            className={`flex-1 py-2 px-3 rounded text-sm font-medium transition-colors ${
              inputs.maintenanceType === 'fixed'
                ? 'bg-blue-100 text-blue-700 border-2 border-blue-500'
                : 'bg-gray-100 text-gray-700 border-2 border-gray-200'
            }`}
          >
            Fixed Monthly
          </button>
        </div>
      </div>

      {inputs.maintenanceType === 'percent' ? (
        <FormInput
          label="Maintenance %"
          type="number"
          value={inputs.maintenancePercent}
          onChange={(value) => onChange({ maintenancePercent: parseFloat(value) })}
          suffix="%"
        />
      ) : (
        <FormInput
          label="Maintenance Monthly"
          type="number"
          value={inputs.maintenanceMonthly}
          onChange={(value) => onChange({ maintenanceMonthly: parseFloat(value) })}
          prefix="$"
        />
      )}

      <FormInput
        label="Repairs Reserve (Monthly)"
        type="number"
        value={inputs.repairsReserveMonthly}
        onChange={(value) => onChange({ repairsReserveMonthly: parseFloat(value) })}
        prefix="$"
      />
      <FormInput
        label="CapEx Reserve (Monthly)"
        type="number"
        value={inputs.capexReserveMonthly}
        onChange={(value) => onChange({ capexReserveMonthly: parseFloat(value) })}
        prefix="$"
      />
      <FormInput
        label="Property Management %"
        type="number"
        value={inputs.propertyManagementPercent}
        onChange={(value) => onChange({ propertyManagementPercent: parseFloat(value) })}
        suffix="%"
      />
      <FormInput
        label="Utilities (Monthly)"
        type="number"
        value={inputs.utilitiesMonthly}
        onChange={(value) => onChange({ utilitiesMonthly: parseFloat(value) })}
        prefix="$"
      />
      <FormInput
        label="HOA Fees (Monthly)"
        type="number"
        value={inputs.hoaFeesMonthly}
        onChange={(value) => onChange({ hoaFeesMonthly: parseFloat(value) })}
        prefix="$"
      />
      <FormInput
        label="Annual Admin/Legal/Accounting"
        type="number"
        value={inputs.annualAdminLegalAccounting}
        onChange={(value) => onChange({ annualAdminLegalAccounting: parseFloat(value) })}
        prefix="$"
      />
    </div>
  )
}

function AssumptionsInputsContent({ inputs, onChange }: InputSectionProps) {
  return (
    <div className="space-y-4">
      <FormInput
        label="Tax Rate %"
        type="number"
        value={inputs.marginalTaxRatePercent}
        onChange={(value) => onChange({ marginalTaxRatePercent: parseFloat(value) })}
        suffix="%"
      />
      <FormInput
        label="Depreciation Period (years)"
        type="number"
        value={inputs.depreciationPeriodYears}
        onChange={(value) => onChange({ depreciationPeriodYears: parseFloat(value) })}
      />
      <FormInput
        label="Property Appreciation %/year"
        type="number"
        value={inputs.propertyAppreciationPercent}
        onChange={(value) => onChange({ propertyAppreciationPercent: parseFloat(value) })}
        suffix="%"
      />
      <FormInput
        label="Expense Inflation %/year"
        type="number"
        value={inputs.expenseInflationPercent}
        onChange={(value) => onChange({ expenseInflationPercent: parseFloat(value) })}
        suffix="%"
      />
      <div className="grid grid-cols-2 gap-3">
        <FormInput
          label="Hold Period (years)"
          type="number"
          value={inputs.plannedHoldYears}
          onChange={(value) => {
            const years = parseInt(value)
            onChange({ plannedHoldYears: years, plannedSaleYear: Math.min(years, inputs.plannedSaleYear) })
          }}
        />
        <FormInput
          label="Sale Year"
          type="number"
          value={inputs.plannedSaleYear}
          onChange={(value) => onChange({ plannedSaleYear: Math.min(parseInt(value), inputs.plannedHoldYears) })}
        />
      </div>
      <FormInput
        label="Selling Costs %"
        type="number"
        value={inputs.sellingCostsPercent}
        onChange={(value) => onChange({ sellingCostsPercent: parseFloat(value) })}
        suffix="%"
      />
    </div>
  )
}

interface FormInputProps {
  label: string
  type: string
  value: any
  onChange: (value: string) => void
  prefix?: string
  suffix?: string
}

function FormInput({ label, type, value, onChange, prefix, suffix }: FormInputProps) {
  return (
    <div className="space-y-1">
      {label && <label className="block text-sm font-medium text-gray-700">{label}</label>}
      <div className="flex items-center gap-0 bg-white border border-gray-300 rounded-lg overflow-hidden">
        {prefix && <span className="px-3 text-gray-600 font-medium bg-gray-50">{prefix}</span>}
        <input
          type={type}
          value={value === undefined || value === null ? '' : value}
          onChange={(e) => onChange(e.target.value)}
          className="flex-1 px-3 py-2 border-0 focus:ring-2 focus:ring-blue-500 outline-none"
        />
        {suffix && <span className="px-3 text-gray-600 font-medium bg-gray-50">{suffix}</span>}
      </div>
    </div>
  )
}

// Placeholder components - will be created as separate files
function ResultsSection({ metrics, inputs, activeTab, onTabChange }: any) {
  return (
    <div className="space-y-6">
      <Heading size="h3">Investment Analysis Results</Heading>
      <p className="text-gray-600">Results section coming in Phase 5...</p>
    </div>
  )
}
