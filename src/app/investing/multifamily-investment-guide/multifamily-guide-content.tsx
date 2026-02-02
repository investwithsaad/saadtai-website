'use client'

import { useState } from 'react'
import {
  Section,
  Container,
  Button,
  Card,
  FadeIn,
  StaggerContainer,
  Heading,
  Text
} from '@/components/ui'
import { HeroFadeIn } from '@/components/hero-fade-in'
import { COLORS } from '@/lib/colors'
import { LeadFormModal } from '@/components/LeadFormModal'
import { CTA } from '@/components/cta'
import { EventBanner } from '@/components/EventBanner'
import { trackEvent } from '@/lib/tracking'
import { useScrollTracking } from '@/hooks/useScrollTracking'
import { SectionHeader } from '@/components/SectionHeader'
import { SchemaRenderer } from '@/components/SchemaRenderer'
import { Breadcrumb } from '@/components/breadcrumb'
import { BASE_URL } from '@/lib/metadata-factory'

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Start Multifamily Investing",
  "description": "A complete 8-step guide to multifamily real estate investing, from education to deal analysis to property acquisition.",
  "image": `${BASE_URL}/saad.png`,
  "step": [
    { "@type": "HowToStep", "position": 1, "name": "Understand Core Metrics", "text": "Learn cap rate, cash flow, and appreciation—the three metrics that determine deal quality." },
    { "@type": "HowToStep", "position": 2, "name": "Identify Your Investment Goal", "text": "Decide if you want monthly cash flow, long-term appreciation, or both." },
    { "@type": "HowToStep", "position": 3, "name": "Research Target Markets", "text": "Focus on stable markets with strong fundamentals: job growth, affordable entry prices, healthy rental demand." },
    { "@type": "HowToStep", "position": 4, "name": "Build Your Investment Strategy", "text": "Define your target property type, financing approach, and exit timeline." },
    { "@type": "HowToStep", "position": 5, "name": "Evaluate Potential Deals", "text": "Run numbers on opportunities using cap rate, cash flow, and appreciation projections." },
    { "@type": "HowToStep", "position": 6, "name": "Secure Financing", "text": "Connect with portfolio lenders, conventional banks, or private capital sources." },
    { "@type": "HowToStep", "position": 7, "name": "Close and Manage", "text": "Navigate inspections, appraisals, due diligence, and closing logistics." },
    { "@type": "HowToStep", "position": 8, "name": "Scale Systematically", "text": "Build repeatable processes to find, analyze, and acquire additional properties." }
  ]
}

export function MultifamilyGuideContent() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const fundamentalsRef = useScrollTracking({ sectionName: 'multifamily_fundamentals' })
  const stepsByStepRef = useScrollTracking({ sectionName: 'multifamily_steps' })
  const marketsRef = useScrollTracking({ sectionName: 'multifamily_markets' })
  const ctaRef = useScrollTracking({ sectionName: 'multifamily_cta' })

  return (
    <>
      <SchemaRenderer schema={howToSchema} />
      
      <Breadcrumb items={[
        { label: 'Investing Guides', href: '/investing' },
        { label: 'Multifamily Investment Guide' }
      ]} />
      
      <EventBanner />

      {/* Hero Section */}
      <HeroFadeIn
        title="Multifamily Investing Guide 2026"
        subtitle="Complete framework for evaluating deals, understanding markets, and building your portfolio systematically. From first investment to portfolio scaling."
        ctaText="Schedule Strategy Call"
        onCtaClick={() => {
          trackEvent('cta_clicked', { location: 'multifamily_guide_hero', label: 'Schedule Strategy Call' })
          setIsModalOpen(true)
        }}
      />

      {/* Core Concepts Section */}
      <Section background='background'>
        <Container>
          <div ref={fundamentalsRef}>
            <SectionHeader
              title="The 3 Core Metrics"
              subtitle="Every multifamily deal comes down to these three numbers. Master them, and you'll never overpay again."
              centered
              className="max-w-3xl mx-auto mb-12"
            />

            <StaggerContainer className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <FadeIn>
                <Card className="p-6 h-full border-l-4" style={{ borderColor: COLORS.dark }}>
                  <Heading size="h3" className="mb-3">Cap Rate</Heading>
                  <Text className="text-sm text-gray-700 mb-4">
                    Net Operating Income ÷ Purchase Price. Shows your earning power relative to investment.
                  </Text>
                  <p className="text-xs text-gray-600">Example: $100K NOI ÷ $1.2M = 8.3% cap rate</p>
                </Card>
              </FadeIn>

              <FadeIn delay={0.1}>
                <Card className="p-6 h-full border-l-4" style={{ borderColor: COLORS.dark }}>
                  <Heading size="h3" className="mb-3">Cash Flow</Heading>
                  <Text className="text-sm text-gray-700 mb-4">
                    Monthly revenue minus expenses. The money in your pocket every month after all costs.
                  </Text>
                  <p className="text-xs text-gray-600">Example: $2,500/mo rent - $875 expenses = $1,625 cash flow</p>
                </Card>
              </FadeIn>

              <FadeIn delay={0.2}>
                <Card className="p-6 h-full border-l-4" style={{ borderColor: COLORS.dark }}>
                  <Heading size="h3" className="mb-3">Appreciation</Heading>
                  <Text className="text-sm text-gray-700 mb-4">
                    Annual property value increase from market growth. Long-term wealth builder.
                  </Text>
                  <p className="text-xs text-gray-600">Example: $1.2M property × 5% appreciation = $60K year 1</p>
                </Card>
              </FadeIn>
            </StaggerContainer>
          </div>
        </Container>
      </Section>

      {/* Step-by-Step Framework Section */}
      <Section background='white'>
        <Container>
          <div ref={stepsByStepRef}>
            <SectionHeader
              title="8-Step Investment Framework"
              subtitle="Follow this process to evaluate opportunities and build your portfolio systematically"
              centered
              className="max-w-3xl mx-auto mb-12"
            />

            <div className="max-w-3xl mx-auto space-y-6">
              {[
                { num: 1, title: "Understand Core Metrics", desc: "Learn cap rate, cash flow, and appreciation—the three metrics that determine deal quality." },
                { num: 2, title: "Identify Your Investment Goal", desc: "Decide if you want monthly cash flow, long-term appreciation, or both. Different markets serve different goals." },
                { num: 3, title: "Research Target Markets", desc: "Focus on stable markets: job growth, affordable entry prices, healthy rental demand, favorable taxes." },
                { num: 4, title: "Build Your Investment Strategy", desc: "Define target property type, financing approach, and exit timeline." },
                { num: 5, title: "Evaluate Potential Deals", desc: "Run numbers using cap rate, cash flow, and appreciation projections to identify winners." },
                { num: 6, title: "Secure Financing", desc: "Connect with portfolio lenders, conventional banks, or private capital sources for your investment." },
                { num: 7, title: "Close and Manage", desc: "Navigate inspections, appraisals, due diligence, and closing logistics. Begin property management." },
                { num: 8, title: "Scale Systematically", desc: "Build repeatable processes to find, analyze, and acquire additional properties in your target markets." }
              ].map((step) => (
                <FadeIn key={step.num}>
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600">
                        <span className="font-bold text-white">{step.num}</span>
                      </div>
                    </div>
                    <div>
                      <Heading size="h4" className="mb-2">{step.title}</Heading>
                      <Text className="text-gray-700">{step.desc}</Text>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Market Selection Section */}
      <Section background='background'>
        <Container>
          <div ref={marketsRef}>
            <SectionHeader
              title="Choosing Your Target Markets"
              subtitle="Not all markets are created equal. Find the right one for your investment goals."
              centered
              className="max-w-3xl mx-auto mb-12"
            />

            <div className="max-w-4xl mx-auto">
              <FadeIn>
                <Text className="text-lg text-gray-700 mb-8">
                  The best markets for small multifamily investing have:
                </Text>
              </FadeIn>

              <StaggerContainer className="space-y-4 mb-12">
                {[
                  "Stable or growing population and employment",
                  "Affordable entry prices ($200K-$400K for 2-4 units)",
                  "Strong rental demand from working professionals",
                  "Reasonable property taxes and maintenance costs",
                  "Local lenders comfortable with small multifamily loans"
                ].map((item, i) => (
                  <FadeIn key={i}>
                    <Card className="p-4 bg-white border-l-4" style={{ borderColor: '#15803d' }}>
                      <Text className="font-semibold text-gray-800">{item}</Text>
                    </Card>
                  </FadeIn>
                ))}
              </StaggerContainer>

              <div className="text-center">
                <Button
                  variant="default"
                  onClick={() => {
                    trackEvent('cta_clicked', { location: 'multifamily_guide_markets', label: 'View Markets' })
                    window.location.href = '/investing'
                  }}
                >
                  View Market Guides →
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <div ref={ctaRef}>
        <CTA
          heading="Ready to Get Started?"
          description="Schedule a consultation to discuss your investment goals and find the right strategy for your situation."
          buttons={[
            {
              label: 'Schedule a Strategy Call →',
              isModal: true,
              trackingLocation: 'multifamily_guide_cta',
              trackingLabel: 'Schedule Call'
            }
          ]}
        />
      </div>

      {/* Lead Form Modal for Hero CTA */}
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
