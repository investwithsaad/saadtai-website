'use client'

import { useEffect } from 'react'
import {
  Section,
  Container,
  Card,
  FadeIn,
  StaggerContainer,
  Heading,
  Text
} from '@/components/ui'
import { HeroFadeIn } from '@/components/hero-fade-in'
import { COLORS } from '@/lib/colors'
import { CTA } from '@/components/cta'
import { EventBanner } from '@/components/EventBanner'
import { trackEvent, trackMetaPageView } from '@/lib/tracking'
import { useScrollTracking } from '@/hooks/useScrollTracking'
import { SectionHeader } from '@/components/SectionHeader'
import { SchemaRenderer } from '@/components/SchemaRenderer'
import { Breadcrumb } from '@/components/breadcrumb'
import { BASE_URL } from '@/lib/metadata-factory'

interface InvestmentContentProps {
  hero?: {
    headline?: string
    description?: string
    ctaText?: string
  }
}

// Guide collection schema for SEO
const guideCollectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Multifamily Investment Guides",
  "description": "Complete guides for multifamily real estate investing covering fundamentals, market analysis, cap rates, and location-specific investment opportunities.",
  "url": `${BASE_URL}/investment`,
  "author": {
    "@type": "Person",
    "name": "Saad Tai",
    "url": `${BASE_URL}/about`
  },
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Multifamily Investment Guide",
        "url": `${BASE_URL}/investment/multifamily-investment-guide`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Cap Rate Guide",
        "url": `${BASE_URL}/investment/cap-rate-guide`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Albany NY Multifamily Investing",
        "url": `${BASE_URL}/investment/albany-multifamily-investing`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Schenectady NY Multifamily Investing",
        "url": `${BASE_URL}/investment/schenectady-multifamily-investing`
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Troy NY Multifamily Investing",
        "url": `${BASE_URL}/investment/troy-multifamily-investing`
      }
    ]
  }
}

export function InvestmentContent({ hero }: InvestmentContentProps) {
  useEffect(() => {
    trackMetaPageView('investment_guides_page')
  }, [])

  // Scroll tracking refs
  const heroRef = useScrollTracking({ sectionName: 'investment_hero' })
  const guidesRef = useScrollTracking({ sectionName: 'investment_guides' })
  const marketsRef = useScrollTracking({ sectionName: 'investment_markets' })
  const comparisonRef = useScrollTracking({ sectionName: 'investment_comparison' })
  const ctaRef = useScrollTracking({ sectionName: 'investment_cta' })

  return (
    <>
      <SchemaRenderer schema={guideCollectionSchema} />
      
      <Breadcrumb items={[
        { label: 'Investment Guides' }
      ]} />
      
      <EventBanner />

      {/* Hero Section */}
      <HeroFadeIn
        title={hero?.headline || 'Investment Guides for Multifamily Investors'}
        subtitle={hero?.description || 'Master the fundamentals of multifamily investing, analyze deals with precision, understand capital markets, and find opportunities in high-performing markets.'}
        ctaText={hero?.ctaText || 'Start Learning'}
        onCtaClick={() => {
          trackEvent('cta_clicked', { location: 'investment_hero', label: hero?.ctaText || 'Start Learning' })
        }}
      />

      {/* Foundational Guides Section */}
      <Section background='dark' className='!pt-0'>
        <Container>
          <div ref={guidesRef}>
            <SectionHeader
              title="Start Here: Foundational Guides"
              subtitle="Master the core concepts before diving into market-specific analysis"
              titleColor="white"
              subtitleColor="white"
              centered
              className="mb-12"
            />

            <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Multifamily Investment Guide */}
              <FadeIn>
                <a href="/investment/multifamily-investment-guide" className="block h-full">
                  <Card color="dark" className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="mb-4 p-3 bg-blue-600 bg-opacity-20 rounded-lg inline-block">
                      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <Heading size="h3" color="white" className="mb-3">Multifamily Investment Guide</Heading>
                    <Text color="white" className="text-sm mb-6">
                      Complete beginner's guide to multifamily investing. Learn the 3 essential metrics (cap rate, cash flow, appreciation), how to evaluate deals, and build your investment strategy.
                    </Text>
                    <p className="text-blue-400 font-semibold text-sm">Read Guide →</p>
                  </Card>
                </a>
              </FadeIn>

              {/* Cap Rate Guide */}
              <FadeIn delay={0.1}>
                <a href="/investment/cap-rate-guide" className="block h-full">
                  <Card color="dark" className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="mb-4 p-3 bg-green-600 bg-opacity-20 rounded-lg inline-block">
                      <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <Heading size="h3" color="white" className="mb-3">Cap Rate Mastery Guide</Heading>
                    <Text color="white" className="text-sm mb-6">
                      Deep dive on the #1 metric for real estate investing. Learn how to calculate cap rates, interpret them correctly, compare markets, and avoid common mistakes.
                    </Text>
                    <p className="text-green-400 font-semibold text-sm">Read Guide →</p>
                  </Card>
                </a>
              </FadeIn>
            </StaggerContainer>
          </div>
        </Container>
      </Section>

      {/* Market-Specific Guides Section */}
      <Section background='white'>
        <Container>
          <div ref={marketsRef}>
            <SectionHeader
              title="Market-Specific Investment Guides"
              subtitle="Apply the fundamentals to specific markets. Each guide includes market data, neighborhood analysis, and investment frameworks."
              centered
              className="max-w-3xl mx-auto mb-16"
            />

            <StaggerContainer className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* Albany Guide */}
              <FadeIn>
                <a href="/investment/albany-multifamily-investing" className="block h-full">
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer border-l-4" style={{ borderColor: COLORS.dark }}>
                    <div className="flex justify-between items-start mb-4">
                      <Heading size="h4">Albany NY</Heading>
                      <span className="text-2xl font-bold text-blue-600">7.2-7.8%</span>
                    </div>
                    <p className="text-xs text-slate-600 mb-4 font-semibold">Cap Rate Range</p>
                    <Text className="text-sm text-slate-600 mb-4">
                      State capital with stable government employment, urban walkability, and strong rental demand. Reliable income and steady appreciation.
                    </Text>
                    <div className="space-y-2 text-xs text-slate-600">
                      <div>📍 Median Price: <strong>$310K</strong></div>
                      <div>📈 Appreciation: <strong>+4.0% YoY</strong></div>
                      <div>🏘️ 2BR Rent: <strong>$1,230/mo</strong></div>
                    </div>
                  </Card>
                </a>
              </FadeIn>

              {/* Schenectady Guide */}
              <FadeIn delay={0.1}>
                <a href="/investment/schenectady-multifamily-investing" className="block h-full">
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer border-l-4" style={{ borderColor: '#15803d' }}>
                    <div className="flex justify-between items-start mb-4">
                      <Heading size="h4">Schenectady NY</Heading>
                      <span className="text-2xl font-bold" style={{ color: '#15803d' }}>7.5-8.2%</span>
                    </div>
                    <p className="text-xs text-slate-600 mb-4 font-semibold">Cap Rate Range (Highest)</p>
                    <Text className="text-sm text-slate-600 mb-4">
                      Highest cash flow in the region. Downtown revitalization (Proctors Theatre, Rivers Casino), strong rental demand, excellent entry prices. Best for income investors.
                    </Text>
                    <div className="space-y-2 text-xs text-slate-600">
                      <div>📍 Median Price: <strong>$310K</strong></div>
                      <div>📈 Appreciation: <strong>+3.8% YoY</strong></div>
                      <div>🏘️ 2BR Rent: <strong>$1,230/mo</strong></div>
                    </div>
                  </Card>
                </a>
              </FadeIn>

              {/* Troy Guide */}
              <FadeIn delay={0.2}>
                <a href="/investment/troy-multifamily-investing" className="block h-full">
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer border-l-4" style={{ borderColor: '#a855f7' }}>
                    <div className="flex justify-between items-start mb-4">
                      <Heading size="h4">Troy NY</Heading>
                      <span className="text-2xl font-bold text-purple-600">7.8-8.5%</span>
                    </div>
                    <p className="text-xs text-slate-600 mb-4 font-semibold">Cap Rate Range</p>
                    <Text className="text-sm text-slate-600 mb-4">
                      Emerging cultural hub with arts scene, young professionals, walkable downtown. Lowest prices in Capital Region with strong cash flow potential.
                    </Text>
                    <div className="space-y-2 text-xs text-slate-600">
                      <div>📍 Median Price: <strong>$278K</strong></div>
                      <div>📈 Appreciation: <strong>+3.8% YoY</strong></div>
                      <div>🏘️ 2BR Rent: <strong>$1,230/mo</strong></div>
                    </div>
                  </Card>
                </a>
              </FadeIn>
            </StaggerContainer>
          </div>
        </Container>
      </Section>

      {/* Quick Comparison Section */}
      <Section background='background'>
        <Container>
          <div ref={comparisonRef}>
            <SectionHeader
              title="Quick Market Comparison"
              subtitle="Compare cap rates, returns, and market characteristics at a glance"
              centered
              className="max-w-3xl mx-auto mb-12"
            />

            <div className="overflow-x-auto max-w-4xl mx-auto">
              <table className="w-full text-sm">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="p-4 text-left font-semibold">Market</th>
                    <th className="p-4 text-center font-semibold">Median Price</th>
                    <th className="p-4 text-center font-semibold">Cap Rate</th>
                    <th className="p-4 text-center font-semibold">2BR Rent</th>
                    <th className="p-4 text-center font-semibold">Appreciation</th>
                    <th className="p-4 text-left font-semibold">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-semibold">Albany</td>
                    <td className="p-4 text-center">$310K</td>
                    <td className="p-4 text-center">7.2-7.8%</td>
                    <td className="p-4 text-center">$1,230</td>
                    <td className="p-4 text-center">+4.0%</td>
                    <td className="p-4 text-blue-600 font-semibold text-sm">Stable income</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-semibold">Schenectady</td>
                    <td className="p-4 text-center font-semibold" style={{ color: '#15803d' }}>$310K</td>
                    <td className="p-4 text-center font-semibold" style={{ color: '#15803d' }}>7.5-8.2%</td>
                    <td className="p-4 text-center">$1,230</td>
                    <td className="p-4 text-center font-semibold" style={{ color: '#15803d' }}>+3.8%</td>
                    <td className="p-4 font-semibold text-sm" style={{ color: '#15803d' }}>Maximum cash flow</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-semibold">Troy</td>
                    <td className="p-4 text-center">$278K</td>
                    <td className="p-4 text-center">7.8-8.5%</td>
                    <td className="p-4 text-center">$1,230</td>
                    <td className="p-4 text-center">+3.8%</td>
                    <td className="p-4 text-purple-600 font-semibold text-sm">Walkable + income</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <div ref={ctaRef}>
        <CTA
          heading="Ready to Start Investing?"
          description="Schedule a strategy call to discuss your investment goals and find the right market for your portfolio."
          buttons={[
            {
              label: 'Schedule a Strategy Call →',
              isModal: true,
              trackingLocation: 'investment_cta',
              trackingLabel: 'Schedule Strategy Call'
            }
          ]}
        />
      </div>
    </>
  )
}
