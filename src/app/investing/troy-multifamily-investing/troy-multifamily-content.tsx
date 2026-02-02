'use client'

import { useState } from 'react'
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
import { SectionHeader } from '@/components/SectionHeader'
import { LeadFormModal } from '@/components/LeadFormModal'
import { CTA } from '@/components/cta'
import { EventBanner } from '@/components/EventBanner'
import { SchemaRenderer } from '@/components/SchemaRenderer'
import { Breadcrumb } from '@/components/breadcrumb'
import { BASE_URL } from '@/lib/metadata-factory'

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Saad Tai - Troy NY Multifamily Investing Advisor",
  "url": `${BASE_URL}/investing/troy-multifamily-investing`,
  "telephone": "+1-518-667-9351",
  "areaServed": {
    "@type": "City",
    "name": "Troy",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Troy",
      "addressRegion": "NY",
      "addressCountry": "USA"
    }
  },
  "knowsAbout": [
    "Multifamily Investing",
    "Troy Real Estate",
    "Cap Rate Analysis",
    "Investment Property Analysis",
    "Real Estate Investing NY"
  ]
}

const guideSchema = {
  "@context": "https://schema.org",
  "@type": "Guide",
  "name": "Troy NY Multifamily Investment Guide",
  "author": {
    "@type": "Person",
    "name": "Saad Tai",
    "url": `${BASE_URL}/about`
  }
}

export function TroyMultifamilyContent() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <SchemaRenderer schema={localBusinessSchema} />
      <SchemaRenderer schema={guideSchema} />
      
      <Breadcrumb items={[
        { label: 'Investing Guides', href: '/investing' },
        { label: 'Troy Multifamily Investing' }
      ]} />
      
      <EventBanner />

      {/* Hero Section */}
      <HeroFadeIn
        title="Troy NY Multifamily Investing Guide"
        subtitle="Historic riverfront city undergoing cultural renaissance. 6.1% gross rental yields, Walk Score 72, creative professional influx, and strong appreciation momentum. Complete market analysis and deal framework for Troy multifamily properties."
        ctaText="Schedule a Strategy Call"
        onCtaClick={() => setIsModalOpen(true)}
      />

      {/* Quick Stats */}
      <Section background="white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-8">
            {[
              { label: "Median Price", value: "$278K", sub: "Lowest in Capital Region" },
              { label: "Cap Rate", value: "7.8-8.5%", sub: "Excellent cash flow" },
              { label: "1-Yr Appreciation", value: "+5.2% YoY", sub: "Strong growth" },
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
              <Heading size="h2" className="mb-4">Why Invest in Troy?</Heading>
              <Text className="text-lg mb-4">
                Troy combines <strong>affordability</strong> ($278K median—lowest in Capital Region), <strong>walkability</strong> (Walk Score 72), and <strong>cultural momentum</strong> (arts scene, young professional influx). You get excellent 7.8-8.5% cap rates with appreciation upside from ongoing revitalization. Lowest price point in Capital Region with strong rental demand. Ideal for investors seeking strong cash flow with growth potential.
              </Text>
              <Text className="text-slate-600">
                Expected rental income on $278K property: $1,230/month. After expenses (~35%), net yield: ~5.0%. Plus 3.8% annual appreciation.
              </Text>
            </Card>
          </FadeIn>
        </Container>
      </Section>

      {/* Market Overview */}
      <Section background="white">
        <Container>
          <SectionHeader
            title="Market Overview"
            centered
            className="mb-16 max-w-3xl mx-auto"
          />

          <div className="space-y-6 max-w-3xl mx-auto">
            <Card>
              <Heading size="h3" className="mb-4">The Opportunity</Heading>
              <Text>
                Troy is experiencing a cultural and demographic shift. Younger professionals (ages 25-40) are moving to the historic riverfront city attracted by affordability, walkability, and a thriving arts scene. This influx is driving both rental demand and property appreciation. For investors, this means strong tenant quality, growing rental rates, and long-term value appreciation.
              </Text>
            </Card>

            <Card>
              <Heading size="h3" className="mb-4">Key Market Drivers</Heading>
              <ul className="space-y-2 text-slate-700">
                <li>• <strong>Arts Scene Growth:</strong> Galleries, coffee shops, cultural venues attracting younger demographic</li>
                <li>• <strong>Waterfront Revitalization:</strong> Historic riverfront development and public investment</li>
                <li>• <strong>Young Professional Influx:</strong> Ages 25-40 attracted to walkability and lower costs vs Saratoga</li>
                <li>• <strong>Walk Score 72:</strong> Very walkable downtown with daily amenities within walking distance</li>
                <li>• <strong>Affordability Premium:</strong> $275K median vs $285K Albany, $387K Niskayuna</li>
                <li>• <strong>Albany Proximity:</strong> 15-minute commute to Albany state capital jobs</li>
              </ul>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Market Data Comparison */}
      <Section background="background">
        <Container>
          <SectionHeader
            title="Troy vs. Capital Region Markets"
            centered
            className="mb-16 max-w-3xl mx-auto"
          />

          <FadeIn>
            <div className="overflow-x-auto max-w-5xl mx-auto">
              <table className="w-full text-sm">
                <thead className="bg-slate-200">
                  <tr className="text-left">
                    <th className="px-4 py-3 font-semibold">Metric</th>
                    <th className="px-4 py-3 font-semibold text-center">Troy</th>
                    <th className="px-4 py-3 font-semibold text-center">Albany</th>
                    <th className="px-4 py-3 font-semibold text-center">Schenectady</th>
                    <th className="px-4 py-3 font-semibold text-center">Niskayuna</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="px-4 py-3 font-semibold">Median Price</td>
                    <td className="px-4 py-3 text-center text-blue-600 font-semibold">$275K</td>
                    <td className="px-4 py-3 text-center">$285K</td>
                    <td className="px-4 py-3 text-center text-green-600">$279K</td>
                    <td className="px-4 py-3 text-center text-slate-500">$387K</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold">2BR Median Rent</td>
                    <td className="px-4 py-3 text-center text-blue-600 font-semibold">$1,450</td>
                    <td className="px-4 py-3 text-center">$1,550</td>
                    <td className="px-4 py-3 text-center">$1,583</td>
                    <td className="px-4 py-3 text-center">$1,918</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold">Gross Yield (Rent-to-Price)</td>
                    <td className="px-4 py-3 text-center text-blue-600 font-semibold">6.1%</td>
                    <td className="px-4 py-3 text-center">6.5%</td>
                    <td className="px-4 py-3 text-center text-green-600">6.7%</td>
                    <td className="px-4 py-3 text-center">6.0%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold">Annual Appreciation</td>
                    <td className="px-4 py-3 text-center text-blue-600 font-semibold">+5.2% YoY</td>
                    <td className="px-4 py-3 text-center">+5.4%</td>
                    <td className="px-4 py-3 text-center text-green-600">+9.8%</td>
                    <td className="px-4 py-3 text-center">+4.7%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold">Walk Score</td>
                    <td className="px-4 py-3 text-center text-blue-600 font-semibold">72</td>
                    <td className="px-4 py-3 text-center">65</td>
                    <td className="px-4 py-3 text-center">76</td>
                    <td className="px-4 py-3 text-center">45</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Text className="text-slate-600 text-sm mt-4 text-center max-w-5xl mx-auto">
              <strong>Analysis:</strong> Troy offers a "sweet spot"—lower price than Albany with better walkability than Schenectady, and stronger walk score than family-focused Niskayuna. Solid 6.1% gross yield with 5.2% appreciation. Strong for balanced portfolio approach.
            </Text>
          </FadeIn>
        </Container>
      </Section>

      {/* Neighborhood Breakdown */}
      <Section background="white">
        <Container>
          <SectionHeader
            title="Best Neighborhoods for Multifamily Investment"
            centered
            className="mb-16 max-w-3xl mx-auto"
          />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: "Downtown/River Street",
                desc: "Highest walkability, cultural hub, strongest tenant demand from young professionals. Galleries, restaurants, riverside parks. Best for appreciation and tenant quality.",
              },
              {
                name: "Federal Street",
                desc: "Historic charm with modern appeal. Walkable residential area with improving neighborhood appeal. Good balance of cash flow and appreciation. Growing family interest.",
              },
              {
                name: "Rensselaer Street",
                desc: "Established residential neighborhoods with solid tenant stability. Lower walk scores but more affordable entry prices. Better for cash flow focus.",
              },
              {
                name: "Waterfront/Emerging Areas",
                desc: "Ongoing revitalization near river corridor. Lower prices today with significant upside as revitalization completes. Higher risk/reward opportunity.",
              },
            ].map((area, i) => (
              <Card key={i}>
                <Heading size="h3" className="mb-3">{area.name}</Heading>
                <Text>{area.desc}</Text>
              </Card>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      {/* Real Property Example */}
      <Section background="background">
        <Container>
          <SectionHeader
            title="Real Property Example: Downtown 2-Unit"
            centered
            className="mb-16 max-w-3xl mx-auto"
          />

          <FadeIn>
            <Card className="max-w-4xl mx-auto">
              <Heading size="h3" className="mb-6">Property: Downtown/River Street, Troy</Heading>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Text className="text-sm text-slate-600">Location</Text>
                    <Text className="font-semibold">Downtown/River Street, Troy</Text>
                  </div>
                  <div>
                    <Text className="text-sm text-slate-600">Building Type</Text>
                    <Text className="font-semibold">2-Unit Triplex (3BR/1BA each)</Text>
                  </div>
                  <div>
                    <Text className="text-sm text-slate-600">Purchase Price</Text>
                    <Text className="font-semibold text-blue-600">$290,000</Text>
                  </div>
                  <div>
                    <Text className="text-sm text-slate-600">Year Built</Text>
                    <Text className="font-semibold">1890 (recently renovated)</Text>
                  </div>
                </div>

                <div className="border-t border-slate-300 pt-6">
                  <Heading size="h4" className="mb-4">Income Analysis</Heading>
                  <div className="space-y-3">
                    {[
                      { label: "Unit 1 Rent (3BR/1BA)", value: "$1,450/month" },
                      { label: "Unit 2 Rent (3BR/1BA)", value: "$1,450/month" },
                    ].map((item, i) => (
                      <div key={i} className="flex justify-between">
                        <Text className="text-slate-700">{item.label}</Text>
                        <Text className="font-semibold">{item.value}</Text>
                      </div>
                    ))}
                    <div className="border-t border-slate-300 pt-3 mt-3 flex justify-between">
                      <Text className="font-semibold">Gross Annual Income</Text>
                      <Text className="text-green-600 font-bold">$34,800</Text>
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-300 pt-6">
                  <Heading size="h4" className="mb-4">Annual Expenses</Heading>
                  <div className="space-y-3">
                    {[
                      { label: "Property Taxes (~$3.45 per $1K)", value: "$1,000" },
                      { label: "Insurance (landlord)", value: "$1,200" },
                      { label: "Utilities (owner-paid common)", value: "$600" },
                      { label: "Maintenance & Repairs (5%)", value: "$1,740" },
                      { label: "Vacancy Reserve (5%)", value: "$1,740" },
                    ].map((item, i) => (
                      <div key={i} className="flex justify-between">
                        <Text className="text-slate-700">{item.label}</Text>
                        <Text className="font-semibold">{item.value}</Text>
                      </div>
                    ))}
                    <div className="border-t border-slate-300 pt-3 mt-3 flex justify-between">
                      <Text className="font-semibold">Total Annual Expenses</Text>
                      <Text className="text-red-600 font-bold">$6,280</Text>
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-300 pt-6">
                  <Heading size="h4" className="mb-4">Return Analysis</Heading>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <Text className="font-semibold">Net Annual Income (Cash Flow)</Text>
                      <Text className="text-green-600 font-bold">$28,520</Text>
                    </div>
                    <div className="flex justify-between">
                      <Text className="font-semibold">Cash-on-Cash Return (20% down)</Text>
                      <Text className="text-green-600 font-bold">6.2%</Text>
                    </div>
                    <div className="flex justify-between">
                      <Text className="font-semibold">Expected Annual Appreciation (+5.2%)</Text>
                      <Text className="text-blue-600 font-bold">$15,080</Text>
                    </div>
                    <div className="border-t border-slate-300 pt-3 mt-3 flex justify-between bg-blue-50 p-3 rounded">
                      <Text className="font-semibold">Year 1 Total Return (Income + Appreciation)</Text>
                      <Text className="text-green-600 font-bold text-lg">$43,600</Text>
                    </div>
                  </div>
                </div>
              </div>

              <Text className="text-sm text-slate-600 mt-6">
                <strong>Note:</strong> This example uses market averages. Actual properties will vary based on condition, neighborhood, tenant quality, and local factors. Get a professional appraisal and inspection before purchase.
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
                q: "Why is Troy becoming an investment hotspot?",
                a: "Cultural renaissance driven by younger professionals (ages 25-40), arts scene growth, and waterfront revitalization. Median price $275K is 4-5% lower than Albany ($285K) with comparable rental potential. Appreciation +5.2% YoY as demographic shifts attract investment."
              },
              {
                q: "What rental yields can I expect in Troy?",
                a: "Median 2BR rent: $1,350-$1,550/month. Median home price: $275K. Gross rent-to-price ratio: 6.1% (strong for northeast). After expenses (taxes, insurance, maintenance ~35%), net yield: ~4.0%. Plus appreciation at +5.2% YoY."
              },
              {
                q: "Is Troy walkable? What is the Walk Score?",
                a: "Troy Walk Score: 72 (Very Walkable). Revitalized downtown is compact and pedestrian-friendly with shops, restaurants, galleries, and cultural venues within walking distance. Riverfront access and historic neighborhoods are particularly walkable."
              },
              {
                q: "What neighborhoods in Troy are best for rental investment?",
                a: "Downtown/River Street: Highest walkability, most cultural activity, strongest tenant demand from young professionals. Federal Street: Historic charm, walkable, improving appreciation. Rensselaer Street: Established residential, family-friendly, good tenant stability."
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

      {/* Investment Framework */}
      <Section background="background">
        <Container>
          <SectionHeader
            title="Troy Investment Framework"
            centered
            className="mb-16 max-w-3xl mx-auto"
          />

          <StaggerContainer className="space-y-4 max-w-4xl mx-auto">
            {[
              {
                step: 1,
                title: "Screen for Walk Score 65+",
                desc: "Focus on downtown neighborhoods where tenants are young professionals attracted to walkability. Lower walk scores = lower tenant quality."
              },
              {
                step: 2,
                title: "Target $250K-$300K Price Range",
                desc: "Median is $275K. Properties below $250K may have deferred maintenance; above $300K reduces your cap rate. Target properties with recent updates."
              },
              {
                step: 3,
                title: "Verify $1,350+ Rent Potential",
                desc: "2BR comps should rent for $1,350-$1,550. If comparable units rent below $1,200, market may be soft. Get 3 recent comparable rent listings before offer."
              },
              {
                step: 4,
                title: "Analyze Appreciation Trend",
                desc: "Troy at +5.2% YoY currently. Compare recent sales (last 90 days) to identify if specific neighborhoods appreciating faster. Downtown = stronger appreciation."
              },
              {
                step: 5,
                title: "Account for Taxes ($3.45 per $1K)",
                desc: "Property taxes are higher than Albany but lower than Schenectady. Factor ~$950/year on $275K property. Don't assume tax freezes."
              },
              {
                step: 6,
                title: "Plan for 5-Year Hold",
                desc: "Troy's value comes from appreciation as cultural revitalization completes. 1-year properties may have limited cash flow. Plan 5-year hold to capture full appreciation benefit."
              }
            ].map((item) => (
              <div key={item.step} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-slate-200">
                    <span className="font-semibold text-slate-900">{item.step}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <Heading size="h4" className="mb-2">{item.title}</Heading>
                  <Text className="text-slate-700">{item.desc}</Text>
                </div>
              </div>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      {/* CTA */}
      <CTA
        heading="Ready to Analyze Troy Properties?"
        description="I've analyzed 50+ Troy multifamily properties. Schedule a consultation to discuss your investment goals, run deal analysis, and find your next property."
        footerText="No obligation. Free 30-minute analysis of your target property."
        buttons={[
          {
            label: 'Schedule a Strategy Call →',
            isModal: true,
            trackingLocation: 'troy_cta',
            trackingLabel: 'Schedule Call'
          }
        ]}
      />

      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
