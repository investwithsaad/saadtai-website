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
import { CTA } from '@/components/CTA'
import { EventBanner } from '@/components/EventBanner'
import { SchemaRenderer } from '@/components/SchemaRenderer'
import { Breadcrumb } from '@/components/breadcrumb'
import { BASE_URL } from '@/lib/metadata-factory'

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Saad Tai - Albany NY Multifamily Investing Advisor",
  "url": `${BASE_URL}/investment/albany-multifamily-investing`,
  "telephone": "+1-518-667-9351",
  "areaServed": {
    "@type": "City",
    "name": "Albany",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Albany",
      "addressRegion": "NY",
      "addressCountry": "USA"
    }
  },
  "knowsAbout": [
    "Multifamily Investing",
    "Albany Real Estate",
    "Cap Rate Analysis",
    "Investment Property Analysis",
    "Real Estate Investing NY"
  ]
}

const guideSchema = {
  "@context": "https://schema.org",
  "@type": "Guide",
  "name": "Albany NY Multifamily Investment Guide",
  "author": {
    "@type": "Person",
    "name": "Saad Tai",
    "url": `${BASE_URL}/about`
  }
}

export function AlbanyMultifamilyContent() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <SchemaRenderer schema={localBusinessSchema} />
      <SchemaRenderer schema={guideSchema} />
      
      <Breadcrumb items={[
        { label: 'Investment Guides', href: '/investment' },
        { label: 'Albany Multifamily Investing' }
      ]} />
      
      <EventBanner />

      {/* Hero Section */}
      <HeroFadeIn
        title="Albany NY Multifamily Investing Guide"
        subtitle="Invest in New York's capital city. 8.2% cap rates, strong government employment, walkable neighborhoods, and steady appreciation. Complete market analysis and deal framework for Albany multifamily properties."
        ctaText="Get Albany Market Analysis"
        onCtaClick={() => setIsModalOpen(true)}
      />

      {/* Quick Stats */}
      <Section background="white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-8">
            {[
              { label: "Median Price", value: "$310K", sub: "Capital Region average" },
              { label: "Cap Rate", value: "7.2-7.8%", sub: "Stable returns" },
              { label: "1-Yr Appreciation", value: "+4.0% YoY", sub: "Steady growth" },
              { label: "2BR Median Rent", value: "$1,230/mo", sub: "Strong demand" },
            ].map((stat, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <Card className="text-center">
                  <Text className="text-slate-600 text-sm">{stat.label}</Text>
                  <Heading size="h3" className="mt-2">{stat.value}</Heading>
                  <Text className="text-xs text-slate-500 mt-1">{stat.sub}</Text>
                </Card>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* Quick Answer */}
      <Section background="background">
        <Container>
          <FadeIn>
            <Card className="max-w-3xl mx-auto bg-blue-50 border-2 border-blue-200">
              <Heading size="h2" className="mb-4">Why Albany for Multifamily Investing?</Heading>
              <Text className="text-lg">
                Albany offers the best combination in the Capital Region: solid entry prices ($310K median), reliable cap rates (7.2-7.8%), steady appreciation (+4.0% annually), and the most stable employment base due to state government jobs. A $310K triplex generates strong annual NOI with reliable tenant demand from state government workers and SUNY Albany professionals.
              </Text>
            </Card>
          </FadeIn>
        </Container>
      </Section>

      {/* Market Overview */}
      <Section background="white">
        <Container>
          <SectionHeader
            title="Albany Market Overview"
            centered
            className="mb-16 max-w-3xl mx-auto"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-5xl mx-auto">
            <Card>
              <Heading size="h3" className="mb-4">What Drives Albany's Rental Market</Heading>
              <ul className="space-y-3">
                <li className="flex gap-2">
                  <span className="text-slate-400 font-bold">1.</span>
                  <div>
                    <strong>State Capital Jobs:</strong> NY State government employs 40,000+ in Albany. Stable, pension-backed employment attracts long-term renters.
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-slate-400 font-bold">2.</span>
                  <div>
                    <strong>Urban Professionals:</strong> Albany's walkable downtown (Walk Score 95) attracts young professionals seeking city life with affordability.
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-slate-400 font-bold">3.</span>
                  <div>
                    <strong>SUNY Albany:</strong> State University system brings student renters and young families year-round.
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-slate-400 font-bold">4.</span>
                  <div>
                    <strong>Healthcare Hub:</strong> Albany Medical Center and related facilities provide 15,000+ healthcare jobs.
                  </div>
                </li>
              </ul>
            </Card>

            <Card>
              <Heading size="h3" className="mb-4">Investment Advantages</Heading>
              <ul className="space-y-3">
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <div>
                    <strong>Lowest Entry Cost:</strong> $285K median price = $57K down payment for 20%
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <div>
                    <strong>8.2% Cap Rates:</strong> Higher returns than national average (6-7%)
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <div>
                    <strong>Tenant Quality:</strong> Government and healthcare workers = stable, long-term tenants
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <div>
                    <strong>Growth Trajectory:</strong> 5.4% annual appreciation (2x national average)
                  </div>
                </li>
              </ul>
            </Card>
          </div>

          <FadeIn>
            <div className="overflow-x-auto max-w-5xl mx-auto">
              <table className="w-full text-sm">
                <thead className="bg-slate-200">
                  <tr className="text-left">
                    <th className="px-4 py-3 font-semibold">Metric</th>
                    <th className="px-4 py-3 font-semibold">Albany</th>
                    <th className="px-4 py-3 font-semibold">Schenectady</th>
                    <th className="px-4 py-3 font-semibold">US Average</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {[
                    { metric: "Median Price", albany: "$285K", schenectady: "$215K", us: "$400K+" },
                    { metric: "Cap Rate", albany: "8.2%", schenectady: "8.9%", us: "6-7%" },
                    { metric: "5-Yr Appreciation", albany: "+5.4%", schenectady: "+3.8%", us: "+2-3%" },
                    { metric: "2BR Median Rent", albany: "$1,550", schenectady: "$1,100", us: "$1,600+" },
                  ].map((row, i) => (
                    <tr key={i}>
                      <td className="px-4 py-3 font-semibold">{row.metric}</td>
                      <td className="px-4 py-3">{row.albany}</td>
                      <td className="px-4 py-3">{row.schenectady}</td>
                      <td className="px-4 py-3 text-slate-500">{row.us}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Best Neighborhoods */}
      <Section background="background">
        <Container>
          <SectionHeader
            title="Best Albany Neighborhoods for Multifamily Investing"
            centered
            className="mb-16 max-w-3xl mx-auto"
          />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: "Center Square",
                walkScore: 95,
                desc: "Most walkable Albany neighborhood. Arts district, restaurants, entertainment. Strong young professional demand.",
                investmentNotes: "High rents ($1,700+/2BR), excellent tenant quality, premium pricing"
              },
              {
                name: "Downtown Albany",
                walkScore: 93,
                desc: "State government jobs nearby. Urban lifestyle, cultural events, business district.",
                investmentNotes: "Strong government worker demand, stable occupancy, $1,550-1,800 rents"
              },
              {
                name: "South End/TU Area",
                walkScore: 70,
                desc: "Affordable residential, close to Albany Medical Center and SUNY. Growing investment focus.",
                investmentNotes: "Healthcare worker demand, emerging market, below-market prices, upside potential"
              },
              {
                name: "West Hill",
                walkScore: 65,
                desc: "Residential neighborhood, family-friendly, good schools, quiet streets.",
                investmentNotes: "Family renters, stable occupancy, conservative pricing, lower turnover"
              },
            ].map((neighborhood, i) => (
              <Card key={i}>
                <Heading size="h3" className="mb-2">{neighborhood.name}</Heading>
                <Text className="text-sm text-slate-600 mb-3">Walk Score: {neighborhood.walkScore}</Text>
                <Text className="mb-4">{neighborhood.desc}</Text>
                <Text className="text-sm text-slate-600">
                  <strong>For Investors:</strong> {neighborhood.investmentNotes}
                </Text>
              </Card>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      {/* Real Example */}
      <Section background="white">
        <Container>
          <SectionHeader
            title="Real Example: Albany Triplex Investment"
            centered
            className="mb-16 max-w-3xl mx-auto"
          />

          <FadeIn>
            <Card className="max-w-4xl mx-auto">
              <Heading size="h3" className="mb-6">Property: Center Square Triplex (3-unit building)</Heading>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <Heading size="h4" className="mb-4">Property Details</Heading>
                  <div className="bg-slate-100 p-4 rounded-lg font-mono text-sm space-y-2">
                    <div>Location: Center Square, Albany</div>
                    <div>Built: 1920 (recently updated)</div>
                    <div>Units: 3 (2BR/1BA each)</div>
                    <div>Condition: Good</div>
                    <div className="border-t border-slate-300 mt-2 pt-2">
                      <div className="text-slate-900 font-bold">Purchase Price: $320,000</div>
                    </div>
                  </div>
                </div>

                <div>
                  <Heading size="h4" className="mb-4">Annual Income & Expenses</Heading>
                  <div className="bg-slate-100 p-4 rounded-lg font-mono text-sm space-y-1">
                    <div>Unit 1: $1,600/mo = $19,200/yr</div>
                    <div>Unit 2: $1,600/mo = $19,200/yr</div>
                    <div>Unit 3: $1,700/mo = $20,400/yr</div>
                    <div className="border-t border-slate-300 mt-2 pt-2">
                      <div>Gross Income: $58,800/yr</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-300 pt-8">
                <Heading size="h4" className="mb-4">Investment Analysis</Heading>
                <div className="bg-slate-100 p-4 rounded-lg font-mono text-sm space-y-1 mb-4">
                  <div>Gross Income: $58,800</div>
                  <div className="text-red-600">− Property Tax: $3,200 (est.)</div>
                  <div className="text-red-600">− Insurance: $2,400</div>
                  <div className="text-red-600">− Maintenance: $3,500</div>
                  <div className="text-red-600">− Management: $5,880 (10%)</div>
                  <div className="border-t border-slate-300 mt-2 pt-2">
                    <div>NOI: $39,820</div>
                  </div>
                  <div className="border-t border-slate-300 mt-2 pt-2">
                    <div className="text-green-600 font-bold">Cap Rate: 12.4%</div>
                    <div className="text-xs text-slate-600 mt-1">(Premium to 8.2% market avg due to below-market acquisition)</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <Card className="bg-slate-50">
                    <Text className="text-slate-600 text-sm">Down Payment (20%)</Text>
                    <Heading size="h4" className="text-green-600">$64,000</Heading>
                  </Card>
                  <Card className="bg-slate-50">
                    <Text className="text-slate-600 text-sm">Monthly Cash Flow*</Text>
                    <Heading size="h4" className="text-green-600">$2,200</Heading>
                    <Text className="text-xs text-slate-500 mt-1">*Assuming 3.75% mortgage</Text>
                  </Card>
                  <Card className="bg-slate-50">
                    <Text className="text-slate-600 text-sm">Annual Total Return</Text>
                    <Heading size="h4" className="text-green-600">17.4%</Heading>
                    <Text className="text-xs text-slate-500 mt-1">Cash flow + appreciation</Text>
                  </Card>
                </div>
              </div>
            </Card>
          </FadeIn>
        </Container>
      </Section>

      {/* Investment Framework */}
      <Section background="background">
        <Container>
          <SectionHeader
            title="Albany Investment Framework"
            centered
            className="mb-16 max-w-3xl mx-auto"
          />

          <StaggerContainer className="space-y-6 max-w-4xl mx-auto">
            {[
              {
                goal: "Maximize Monthly Cash Flow",
                strategy: "Look for: Fully-rented properties, below-market acquisition, lower prices (West Hill, South End)",
                example: "Target $250K-$300K properties with 8%+ cap rates"
              },
              {
                goal: "Build Long-Term Wealth",
                strategy: "Look for: Appreciating neighborhoods (Center Square, Downtown), good bones, tenant demand",
                example: "Target $300K-$350K properties in walkable areas with growth potential"
              },
              {
                goal: "Balanced Growth + Income",
                strategy: "Look for: Center Square or TU Area locations, 7-8 year hold timeline, steady appreciation",
                example: "Target $300K triplex with 8%+ cap rate in growing neighborhood"
              }
            ].map((item, i) => (
              <Card key={i}>
                <Heading size="h4" className="mb-3">{item.goal}</Heading>
                <Text className="mb-2"><strong>Strategy:</strong> {item.strategy}</Text>
                <Text className="text-sm text-slate-600"><strong>Example:</strong> {item.example}</Text>
              </Card>
            ))}
          </StaggerContainer>
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
                q: "What are property taxes in Albany vs Schenectady?",
                a: "Albany: $2.73 per $1,000 assessed value (County rate). Schenectady (City): $13.37 per $1,000. Total tax bills vary significantly based on school district."
              },
              {
                q: "What makes Albany walkable?",
                a: "Albany has a Walk Score of 65 overall. Center Square neighborhood: 95 (Walker's Paradise). Downtown: 93. These neighborhoods have good public transit, bike lanes, and walkable retail/dining."
              },
              {
                q: "What rental yields can I expect in Albany?",
                a: "Median 2BR rent: $1,550/month. Median home price: $285K average. Gross rent-to-price ratio: 6.5% (good for northeast standard). Accounting for taxes, insurance, maintenance (expenses ~35%), net yield: ~4.2%."
              },
              {
                q: "Commute time from Albany to Schenectady?",
                a: "Albany to Schenectady downtown: 20-25 minutes via I-87 during off-peak hours. Rush hour: 35-45 minutes."
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
      <CTA
        heading="Ready to Invest in Albany?"
        description="Get a market analysis for Albany, discover off-market properties, and find deals that match your investment goals."
        background="background"
        buttons={[
          {
            label: 'Get Albany Market Analysis →',
            isModal: true,
            trackingLocation: 'albany_cta',
            trackingLabel: 'Get Market Analysis'
          },
          {
            label: 'Review Investment Basics →',
            href: '/investment/multifamily-investment-guide',
            variant: 'secondary'
          }
        ]}
      />

      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
