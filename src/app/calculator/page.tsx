import type { Metadata } from 'next'
import { InvestmentCalculator } from '@/components/InvestmentCalculator'
import { Container, Section, Heading, Text } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Investment Calculator | Invest with Saad',
  description: 'Calculate cap rate, cash-on-cash return, NOI, and multi-year projections for rental property investments. Free real estate calculator.',
  keywords: 'investment property calculator, cap rate calculator, cash flow calculator, real estate analysis tool',
  alternates: {
    canonical: 'https://investwithsaad.com/calculator',
  },
  openGraph: {
    title: 'Investment Calculator | Invest with Saad',
    description: 'Analyze rental property deals with professional-grade calculations',
    url: 'https://investwithsaad.com/calculator',
    type: 'website',
    images: [
      {
        url: 'https://investwithsaad.com/main-bg.png',
        width: 1200,
        height: 630,
        alt: 'Investment Property Calculator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Investment Calculator | Invest with Saad',
    description: 'Free real estate investment property calculator for cap rate and cash flow analysis.',
  },
}

export default function CalculatorPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="white" className="py-12 md:py-16">
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-12">
            <Heading size="h1" className="mb-4">
              Investment Property Calculator
            </Heading>
            <Text size="lg" className="text-gray-700">
              Analyze real estate deals with professional-grade calculations. Evaluate cap rates,
              cash flow, tax benefits, and multi-year projections to make informed investment decisions.
            </Text>
          </div>
        </Container>
      </Section>

      {/* Calculator Section */}
      <Section background="background">
        <Container>
          <div className="max-w-6xl mx-auto">
            <InvestmentCalculator />
          </div>
        </Container>
      </Section>

      {/* Features Section */}
      <Section background="white" className="py-12 md:py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Heading size="h2" className="text-center mb-12">
              What You Can Analyze
            </Heading>

            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard
                title="Investment Returns"
                description="Calculate cap rate, cash-on-cash return, ROI, and equity multiple to assess investment quality"
              />
              <FeatureCard
                title="Cash Flow Analysis"
                description="Break down income, expenses, and debt service to understand monthly and annual cash flow"
              />
              <FeatureCard
                title="Tax Benefits"
                description="Factor in depreciation deductions and tax savings to calculate true after-tax returns"
              />
              <FeatureCard
                title="Multi-Year Projections"
                description="See how your investment grows over time with rent appreciation and principal paydown"
              />
              <FeatureCard
                title="Exit Strategy"
                description="Analyze sale proceeds, capital gains, and total profit on your investment timeline"
              />
              <FeatureCard
                title="Single Family & Multifamily"
                description="Support for 1-unit rentals and multifamily properties with dynamic unit configurations"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section background="background">
        <Container>
          <div className="max-w-3xl mx-auto">
            <Heading size="h2" className="text-center mb-12">
              Frequently Asked Questions
            </Heading>

            <div className="space-y-6">
              <FAQItem
                question="What is Cap Rate and why is it important?"
                answer="Cap Rate (Capitalization Rate) is the annual return on your property investment, calculated as Net Operating Income divided by Purchase Price. It helps you compare different investment opportunities and determine if a property meets your return targets."
              />
              <FAQItem
                question="What's the difference between Cap Rate and Cash-on-Cash return?"
                answer="Cap Rate uses NOI and purchase price, while Cash-on-Cash Return uses actual cash flow and your total cash invested (down payment + costs). Cash-on-Cash Return accounts for financing, making it more relevant for leveraged investments."
              />
              <FAQItem
                question="How does depreciation work?"
                answer="Residential properties can depreciate over 27.5 years for tax purposes. This creates a non-cash deduction that reduces your taxable income, creating tax savings even if you have positive cash flow. You must recapture this at sale."
              />
              <FAQItem
                question="Can I save my calculations?"
                answer="Enter your contact information to unlock detailed analysis and receive a copy via email. Your calculations are saved in the browser for future visits."
              />
              <FAQItem
                question="Is this calculator accurate?"
                answer="This calculator provides estimates based on standard real estate investment formulas. For actual investment decisions, consult with a CPA, tax advisor, and real estate professional about your specific situation."
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="white" className="py-12 md:py-16">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <Heading size="h2" className="mb-4">
              Ready to Analyze Your Next Deal?
            </Heading>
            <Text size="lg" className="text-gray-700 mb-8">
              Use our calculator to evaluate rental property investments and connect with an expert
              for personalized guidance on your specific property.
            </Text>
            <a
              href="#calculator"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Start Your Analysis
            </a>
          </div>
        </Container>
      </Section>
    </>
  )
}

// Support Components

interface FeatureCardProps {
  title: string
  description: string
}

function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
      <Heading size="h4" className="mb-3">
        {title}
      </Heading>
      <Text className="text-gray-600">
        {description}
      </Text>
    </div>
  )
}

interface FAQItemProps {
  question: string
  answer: string
}

function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <div className="border-l-4 border-blue-600 pl-6 py-2">
      <Heading size="h4" className="mb-2 text-gray-900">
        {question}
      </Heading>
      <Text className="text-gray-700">
        {answer}
      </Text>
    </div>
  )
}
