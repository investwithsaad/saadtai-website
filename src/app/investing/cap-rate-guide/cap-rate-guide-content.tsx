'use client'

import { useState } from 'react'
import {
  Section,
  Container,
  Card,
  FadeIn,
  StaggerContainer,
  Heading,
  Text,
  Button
} from '@/components/ui'
import { HeroFadeIn } from '@/components/hero-fade-in'
import { SectionHeader } from '@/components/SectionHeader'
import { LeadFormModal } from '@/components/LeadFormModal'
import { EventBanner } from '@/components/EventBanner'
import { SchemaRenderer } from '@/components/SchemaRenderer'
import { Breadcrumb } from '@/components/breadcrumb'
import { BASE_URL } from '@/lib/metadata-factory'

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Calculate Cap Rate",
  "description": "Step-by-step guide to calculating capitalization rate for real estate investment properties.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Calculate Net Operating Income (NOI)",
      "text": "Gross annual rental income minus all operating expenses (excluding mortgage payments). NOI = Gross Income - Operating Expenses"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Determine Purchase Price",
      "text": "The total cost to acquire the property"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Divide NOI by Purchase Price",
      "text": "Cap Rate = NOI ÷ Purchase Price"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Compare to Market Benchmarks",
      "text": "Compare your calculated cap rate to market averages for that property type and location"
    }
  ],
  "author": {
    "@type": "Person",
    "name": "Saad Tai",
    "url": `${BASE_URL}/about`
  }
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a good cap rate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "8%+ is excellent, 7-8% is good, 6-7% is average, below 6% is overpriced in most markets. Capital Region offers 8.2-8.9%."
      }
    },
    {
      "@type": "Question",
      "name": "Why does cap rate matter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cap rate measures property earning power independent of financing. It helps you compare deals fairly across different prices and markets."
      }
    },
    {
      "@type": "Question",
      "name": "Is higher cap rate always better?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Usually yes, but context matters. A 10% cap rate on a declining property is worse than an 8% cap rate with strong appreciation potential."
      }
    }
  ]
}

export function CapRateGuideContent() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <SchemaRenderer schema={howToSchema} />
      <SchemaRenderer schema={faqSchema} />
      
      <Breadcrumb items={[
        { label: 'Investing Guides', href: '/investing' },
        { label: 'Cap Rate Guide' }
      ]} />
      
      <EventBanner />

      {/* Hero Section */}
      <HeroFadeIn
        title="The Complete Cap Rate Guide"
        subtitle="Cap rate is the single most important metric for comparing investment properties. Learn how to calculate it, interpret it, and use it to identify undervalued deals."
        ctaText="Get Cap Rate Analysis"
        onCtaClick={() => setIsModalOpen(true)}
      />

      {/* Quick Answer */}
      <Section background="white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <Card>
                <Heading size="h2" className="mb-4">What Is Cap Rate?</Heading>
                <Text className="text-lg mb-4">
                  <strong>Cap rate</strong> (capitalization rate) measures how much annual income a property generates relative to its purchase price, independent of how you finance it. It's your most powerful tool for comparing deals fairly across different markets and property types.
                </Text>
                <div className="bg-slate-100 p-4 rounded-lg font-mono text-sm mb-4">
                  <div className="text-slate-900 font-bold">Formula: Cap Rate = NOI ÷ Purchase Price</div>
                  <div className="mt-3 text-slate-700">
                    <div>Example: $40,000 NOI ÷ $500,000 Price = 8.0% Cap Rate</div>
                    <div className="text-xs mt-2 text-slate-600">(This property returns 8% annually before financing)</div>
                  </div>
                </div>
              </Card>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Why Cap Rate Matters */}
      <Section background="background">
        <Container>
          <SectionHeader
            title="Why Cap Rate Is Your Most Important Metric"
            centered
            className="mb-16 max-w-3xl mx-auto"
          />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card>
              <Heading size="h4" className="mb-4">Compares Apples to Apples</Heading>
              <Text>
                A $300K property with 8% cap rate generates the same $24,000 annually as a $600K property with 4% cap rate. Cap rate neutralizes price differences.
              </Text>
            </Card>

            <Card>
              <Heading size="h4" className="mb-4">Ignores Financing</Heading>
              <Text>
                Two identical properties might have different cash flows if financed differently. Cap rate shows the true earning power regardless of down payment or interest rates.
              </Text>
            </Card>

            <Card>
              <Heading size="h4" className="mb-4">Shows Market Value</Heading>
              <Text>
                If market cap rates are 8% but this property is priced for 6%, it's overpriced. If priced for 10%, it's undervalued or has risk factors.
              </Text>
            </Card>

            <Card>
              <Heading size="h4" className="mb-4">Predicts Returns</Heading>
              <Text>
                Higher cap rates typically predict higher annual returns (more income relative to price). Every 1% matters—an 8% property outperforms a 6% property by $20K/year on a $1M property.
              </Text>
            </Card>
          </StaggerContainer>
        </Container>
      </Section>

      {/* How to Calculate */}
      <Section background="white">
        <Container>
          <SectionHeader
            title="How to Calculate Cap Rate (Step-by-Step)"
            centered
            className="mb-16 max-w-3xl mx-auto"
          />

          <StaggerContainer className="space-y-6 max-w-4xl mx-auto">
            {[
              {
                step: 1,
                title: "Calculate Gross Annual Income",
                details: ["Unit 1 Rent: $1,200/month × 12 = $14,400", "Unit 2 Rent: $1,200/month × 12 = $14,400", "Unit 3 Rent: $1,300/month × 12 = $15,600"],
                total: "Gross Income: $44,400/year",
                tip: "Use 12-month averages, not projected rents. Be conservative with occupancy assumptions."
              },
              {
                step: 2,
                title: "Subtract Operating Expenses",
                details: ["Property Tax: $3,600", "Insurance: $1,800", "Maintenance/Repairs: $3,000", "Property Management: $4,440 (10% of income)", "Utilities (owner-paid): $1,200", "Vacancy Reserve (5%): $2,220"],
                total: "Total Expenses: $16,260/year",
                tip: "Use historical actuals from the seller. Don't estimate—get 3 years of P&Ls."
              },
              {
                step: 3,
                title: "Calculate NOI",
                details: ["Gross Income: $44,400", "Operating Expenses: -$16,260"],
                total: "NOI: $28,140/year",
                tip: "NOI excludes mortgage payments. This is income available to pay debt service or distribute as profit."
              },
              {
                step: 4,
                title: "Divide NOI by Purchase Price",
                details: ["NOI: $28,140", "Purchase Price: ÷ $350,000"],
                total: "Cap Rate: 8.04%",
                tip: "This property earns 8.04% annually on your investment, independent of how you finance it."
              }
            ].map((item, i) => (
              <Card key={i}>
                <div className="flex gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-slate-200">
                      <span className="font-semibold text-slate-900">{item.step}</span>
                    </div>
                  </div>
                  <Heading size="h3">{item.title}</Heading>
                </div>
                <div className="bg-slate-100 p-4 rounded-lg font-mono text-sm mb-4 space-y-1">
                  {item.details.map((detail, idx) => (
                    <div key={idx} className="text-slate-700">{detail}</div>
                  ))}
                  <div className="border-t border-slate-300 mt-2 pt-2">
                    <div className="text-slate-900 font-bold">{item.total}</div>
                  </div>
                </div>
                <Text className="text-sm text-slate-600">
                  <strong>Tip:</strong> {item.tip}
                </Text>
              </Card>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      {/* Cap Rate Benchmarks */}
      <Section background="background">
        <Container>
          <SectionHeader
            title="Cap Rate Benchmarks: What's Good?"
            centered
            className="mb-16 max-w-3xl mx-auto"
          />

          <FadeIn>
            <div className="overflow-x-auto mb-8 max-w-4xl mx-auto">
              <table className="w-full text-sm">
                <thead className="bg-slate-200">
                  <tr className="text-left">
                    <th className="px-4 py-3 font-semibold">Cap Rate Range</th>
                    <th className="px-4 py-3 font-semibold">Rating</th>
                    <th className="px-4 py-3 font-semibold">What It Means</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {[
                    { range: "9%+", rating: "Excellent", meaning: "Strong returns, possibly lower price/higher risk, or emerging market" },
                    { range: "8-9%", rating: "Very Good", meaning: "Competitive returns, typical for Capital Region investment properties" },
                    { range: "7-8%", rating: "Good", meaning: "Solid returns, often in appreciating markets or quality properties" },
                    { range: "6-7%", rating: "Average", meaning: "Market rate, standard in many US markets, limited margin for error" },
                    { range: "5-6%", rating: "Below Average", meaning: "Lower returns, often in premium markets, rely on appreciation" },
                    { range: "<5%", rating: "Overpriced", meaning: "Limited income returns, speculation-driven, higher risk" },
                  ].map((row, i) => (
                    <tr key={i}>
                      <td className="px-4 py-3 font-semibold">{row.range}</td>
                      <td className="px-4 py-3">{row.rating}</td>
                      <td className="px-4 py-3">{row.meaning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Card className="bg-green-50 border-2 border-green-200 max-w-4xl mx-auto">
              <Heading size="h3" className="mb-3">Capital Region Advantage</Heading>
              <Text>
                Capital Region properties typically offer 8.2-8.9% cap rates compared to national averages of 6-7%. This means a $300K property here returns $1,800-2,700/month MORE than the same price in most US markets. That's the power of location selection.
              </Text>
            </Card>
          </FadeIn>
        </Container>
      </Section>

      {/* FAQ */}
      <Section background="white">
        <Container>
          <SectionHeader
            title="Frequently Asked Questions"
            centered
            className="mb-16 max-w-3xl mx-auto"
          />

          <StaggerContainer className="space-y-6 max-w-3xl mx-auto">
            {[
              {
                q: "Can a high cap rate hide problems?",
                a: "Yes. If market cap rates are 8% but this property is 12%, there's probably a reason: bad tenants, deferred maintenance, declining neighborhood, or overestimated income. Always dig deeper."
              },
              {
                q: "Should I refinance if rates drop?",
                a: "Only if the new payment still maintains acceptable cash flow. Refinancing doesn't improve cap rate (that's fixed when you buy), but it can improve cash flow if rates drop."
              },
              {
                q: "Does cap rate change after you buy?",
                a: "The cap rate at purchase is fixed. But your actual return changes if the property value or NOI changes. This is why market analysis and tenant management matter post-purchase."
              },
              {
                q: "How does appreciation affect cap rate?",
                a: "Appreciation doesn't directly affect cap rate, but it affects total return. If you buy at 8% cap rate and property appreciates 4%/year, your total return is 12%/year (8% income + 4% appreciation)."
              }
            ].map((item, i) => (
              <Card key={i}>
                <Heading size="h4" className="mb-3">{item.q}</Heading>
                <Text>{item.a}</Text>
              </Card>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      {/* CTA */}
      <Section background="background">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <Heading size="h2" className="mb-4">Apply This to Real Deals</Heading>
              <Text className="text-lg text-slate-600 mb-8">
                Now that you understand cap rates, let's find properties that offer 8%+ returns in the Capital Region. Let's discuss your investment criteria and run analysis on real opportunities.
              </Text>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button
                  variant="default"
                  onClick={() => setIsModalOpen(true)}
                >
                  Get Cap Rate Analysis →
                </Button>
                <a href="/investing/multifamily-investment-guide">
                  <Button variant="secondary">
                    Read Multifamily Guide →
                  </Button>
                </a>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
