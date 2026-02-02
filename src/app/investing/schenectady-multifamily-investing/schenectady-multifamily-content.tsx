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

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Saad Tai - Schenectady NY Multifamily Investment Specialist",
  "url": `${BASE_URL}/investing/schenectady-multifamily-investing`,
  "telephone": "+1-518-667-9351",
  "areaServed": {
    "@type": "City",
    "name": "Schenectady",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Schenectady",
      "addressRegion": "NY",
      "addressCountry": "USA"
    }
  }
}

const guideSchema = {
  "@context": "https://schema.org",
  "@type": "Guide",
  "name": "Schenectady NY Multifamily Investment Guide",
  "author": {
    "@type": "Person",
    "name": "Saad Tai"
  }
}

export function SchenectadyMultifamilyContent() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <SchemaRenderer schema={localBusinessSchema} />
      <SchemaRenderer schema={guideSchema} />
      
      <Breadcrumb items={[
        { label: 'Investing Guides', href: '/investing' },
        { label: 'Schenectady Multifamily Investing' }
      ]} />
      
      <EventBanner />

      {/* Hero Section */}
      <HeroFadeIn
        title="Schenectady NY Multifamily Investing Guide"
        subtitle="Highest cap rates in Capital Region (8.9%). Lowest entry prices ($215K). Perfect for cash flow investors. Tech hub growth, emerging market potential, and rapid rental expansion."
        ctaText="Get Schenectady Properties"
        onCtaClick={() => setIsModalOpen(true)}
      />

      {/* Quick Stats */}
      <Section background="white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-8">
            {[
              { label: "Median Price", value: "$310K", sub: "Capital Region average" },
              { label: "Cap Rate", value: "7.5-8.2%", sub: "Highest cash flow" },
              { label: "5-Yr Appreciation", value: "+9.8% YoY", sub: "Strongest growth" },
              { label: "2BR Median Rent", value: "$1,230/mo", sub: "Strong rental income" },
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
            <Card className="max-w-3xl mx-auto bg-green-50 border-2 border-green-200">
              <Heading size="h2" className="mb-4">Why Choose Schenectady?</Heading>
              <Text className="text-lg">
                Schenectady offers strong cash flow value with the highest cap rates in the Capital Region (7.5-8.2%). Median prices ($310K) provide good entry points for multifamily. Rents ($1,230/month) combined with these prices create excellent cash flow opportunities. Downtown revitalization (Proctors Theatre, Rivers Casino) is driving growth. Combined with rental demand growth and the fastest time-to-close (15 days), Schenectady is ideal for income-focused investors seeking steady cash flow.
              </Text>
            </Card>
          </FadeIn>
        </Container>
      </Section>

      {/* Market Overview */}
      <Section background="white">
        <Container>
          <SectionHeader
            title="Schenectady Market Overview"
            centered
            className="mb-16 max-w-3xl mx-auto"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-5xl mx-auto">
            <Card>
              <Heading size="h3" className="mb-4">Market Drivers</Heading>
              <ul className="space-y-3">
                <li className="flex gap-2">
                  <span className="text-slate-400 font-bold">1.</span>
                  <div>
                    <strong>Downtown Revitalization:</strong> Proctors Theatre redevelopment, Rivers Casino (opened 2023), new restaurants/bars. Walk Score improving (76 overall).
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-slate-400 font-bold">2.</span>
                  <div>
                    <strong>Historic Stockade District:</strong> Character-filled neighborhood attracting investors and young professionals. Walkable, revitalized, strong renter demand.
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-slate-400 font-bold">3.</span>
                  <div>
                    <strong>Cash Flow Leadership:</strong> 7.5-8.2% cap rates (highest in Capital Region). Market fundamentals improving as revitalization takes hold and attracts long-term renters.
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-slate-400 font-bold">4.</span>
                  <div>
                    <strong>Competitive Pricing:</strong> $310K median price with $1,230/month rent provides strong cash flow. Fastest sales (15 days to pending). Strong rental demand from diverse tenant base.
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
                    <strong>Lowest Entry Cost:</strong> $215K median = $43K down payment (20%)
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <div>
                    <strong>8.9% Cap Rate:</strong> Highest in Capital Region, 1.7% above market
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <div>
                    <strong>Maximum Cash Flow:</strong> Rapid portfolio scaling with low down payments
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <div>
                    <strong>Growth Potential:</strong> Tech sector expansion could drive 5-7% appreciation
                  </div>
                </li>
              </ul>
            </Card>
          </div>

          <FadeIn>
            <Card className="bg-blue-50 border-2 border-blue-200 mb-8 max-w-5xl mx-auto">
              <Heading size="h3" className="mb-3">The Schenectady Cash Flow Advantage</Heading>
              <Text className="mb-3">
                A $250K duplex in Schenectady generates $22,250 NOI annually with $43K down payment. That's a 52% cash-on-cash return BEFORE appreciation.
              </Text>
              <Text className="text-sm text-slate-600">
                Compare: Same price in most US markets yields only 35-40% cash-on-cash due to lower cap rates. Schenectady's combination of low prices + high cap rates is nearly impossible to find elsewhere.
              </Text>
            </Card>
          </FadeIn>

          <FadeIn>
            <div className="overflow-x-auto max-w-5xl mx-auto">
              <table className="w-full text-sm">
                <thead className="bg-slate-200">
                  <tr className="text-left">
                    <th className="px-4 py-3 font-semibold">Metric</th>
                    <th className="px-4 py-3 font-semibold">Schenectady</th>
                    <th className="px-4 py-3 font-semibold">Albany</th>
                    <th className="px-4 py-3 font-semibold">Niskayuna</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {[
                    { metric: "Median Price", schenectady: "$279K-$299K", albany: "$276K-$295K", niskayuna: "$387K" },
                    { metric: "5-Yr Appreciation", schenectady: "+9.8% YoY", albany: "+5.4% YoY", niskayuna: "+4.7% YoY" },
                    { metric: "Entry Down Payment (20%)", schenectady: "$56K-60K", albany: "$55K-59K", niskayuna: "$77K" },
                    { metric: "2BR Median Rent", schenectady: "$1,471-$1,695", albany: "$1,550", niskayuna: "$1,918" },
                  ].map((row, i) => (
                    <tr key={i}>
                      <td className="px-4 py-3 font-semibold">{row.metric}</td>
                      <td className="px-4 py-3 text-green-600 font-semibold">{row.schenectady}</td>
                      <td className="px-4 py-3">{row.albany}</td>
                      <td className="px-4 py-3 text-slate-500">{row.niskayuna}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Real Example */}
      <Section background="background">
        <Container>
          <SectionHeader
            title="Real Example: Schenectady Duplex Acquisition"
            centered
            className="mb-16 max-w-3xl mx-auto"
          />

          <FadeIn>
            <Card className="max-w-4xl mx-auto">
              <Heading size="h3" className="mb-6">Property: Stockade District Duplex (2-unit building)</Heading>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <Heading size="h4" className="mb-4">Property Details</Heading>
                  <div className="bg-slate-100 p-4 rounded-lg font-mono text-sm space-y-2">
                    <div>Location: Stockade District, Schenectady</div>
                    <div>Built: 2000</div>
                    <div>Units: 2 (2BR/1BA each)</div>
                    <div>Condition: Well-maintained</div>
                    <div className="border-t border-slate-300 mt-2 pt-2">
                      <div className="text-green-600 font-bold">Purchase Price: $225,000</div>
                    </div>
                  </div>
                </div>

                <div>
                  <Heading size="h4" className="mb-4">Annual Income & Expenses</Heading>
                  <div className="bg-slate-100 p-4 rounded-lg font-mono text-sm space-y-1">
                    <div>Unit 1: $1,200/mo = $14,400/yr</div>
                    <div>Unit 2: $1,250/mo = $15,000/yr</div>
                    <div className="border-t border-slate-300 mt-2 pt-2">
                      <div>Gross Income: $29,400/yr</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-300 pt-8">
                <Heading size="h4" className="mb-4">Investment Analysis</Heading>
                <div className="bg-slate-100 p-4 rounded-lg font-mono text-sm space-y-1 mb-4">
                  <div>Gross Income: $29,400</div>
                  <div className="text-red-600">− Property Tax: $2,400 (est.)</div>
                  <div className="text-red-600">− Insurance: $1,600</div>
                  <div className="text-red-600">− Maintenance: $1,800</div>
                  <div className="text-red-600">− Management: $2,940 (10%)</div>
                  <div className="border-t border-slate-300 mt-2 pt-2">
                    <div>NOI: $20,660</div>
                  </div>
                  <div className="border-t border-slate-300 mt-2 pt-2">
                    <div className="text-green-600 font-bold">Cap Rate: 9.2%</div>
                    <div className="text-xs text-slate-600 mt-1">(Above 8.9% market avg due to below-market acquisition)</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <Card className="bg-slate-50">
                    <Text className="text-slate-600 text-sm">Down Payment (20%)</Text>
                    <Heading size="h4" className="text-green-600">$45,000</Heading>
                    <Text className="text-xs text-slate-500 mt-1">20% of $225K</Text>
                  </Card>
                  <Card className="bg-slate-50">
                    <Text className="text-slate-600 text-sm">Monthly Cash Flow*</Text>
                    <Heading size="h4" className="text-green-600">$1,220</Heading>
                    <Text className="text-xs text-slate-500 mt-1">*Assuming 3.75% mortgage</Text>
                  </Card>
                  <Card className="bg-slate-50">
                    <Text className="text-slate-600 text-sm">5-Year Appreciation</Text>
                    <Heading size="h4" className="text-green-600">+49%</Heading>
                    <Text className="text-xs text-slate-500 mt-1">At +9.8% annual growth</Text>
                  </Card>
                </div>

                <Card className="bg-green-50 border-2 border-green-200 mt-6">
                  <Text className="text-sm">
                    <strong>Key Insight:</strong> This $225K duplex requires only $45K down but generates $950/month cash flow. The $45K down payment is recovered in value and cash flow within 5-7 years. This is why Schenectady is perfect for building wealth quickly with limited capital.
                  </Text>
                </Card>
              </div>
            </Card>
          </FadeIn>
        </Container>
      </Section>

      {/* Investment Strategies */}
      <Section background="white">
        <Container>
          <SectionHeader
            title="Schenectady Investment Strategies"
            centered
            className="mb-16 max-w-3xl mx-auto"
          />

          <StaggerContainer className="space-y-6 max-w-4xl mx-auto">
            {[
              {
                strategy: "Cash Flow Maximization",
                how: "Buy duplex/triplex with current rents below market. Implement modest 3-5% annual rent increases. Target 8%+ cap rates.",
                result: "$1,000+/month cash flow per property"
              },
              {
                strategy: "Rapid Portfolio Scaling",
                how: "Low down payments ($40K-50K per property) enable buying 3-4 properties with capital another investor uses for 1.",
                result: "4 Schenectady properties vs 1 in other markets on same $180K capital"
              },
              {
                strategy: "Value-Add & Rent Growth",
                how: "Buy at-market, improve property condition, raise rents 5-7% annually. Current Schenectady rents are growing 4-5% market-wide.",
                result: "Cap rate growth from 8% purchase → 9-10% within 3 years"
              },
              {
                strategy: "Long-Term Hold & Appreciation",
                how: "Tech sector growth could accelerate Schenectady appreciation from 3.8% to 5-7%. Hold 10+ years for tax benefits.",
                result: "$225K property → $450K+ value over 10 years with steady cash flow"
              }
            ].map((item, i) => (
              <Card key={i}>
                <Heading size="h4" className="mb-3">{item.strategy}</Heading>
                <Text className="mb-2"><strong>How:</strong> {item.how}</Text>
                <Text className="text-sm text-slate-600"><strong>Expected Result:</strong> {item.result}</Text>
              </Card>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      {/* FAQ */}
      <Section background="background">
        <Container>
          <SectionHeader
            title="Schenectady FAQs"
            centered
            className="mb-16 max-w-3xl mx-auto"
          />

          <StaggerContainer className="space-y-6 max-w-3xl mx-auto">
            {[
              {
                q: "Why are Schenectady property taxes so high?",
                a: "City of Schenectady: $13.37 per $1,000 assessed value (2025 budget). This is 4-5x higher than town rates. However, median homes are much cheaper ($279K vs $387K in Niskayuna), so actual tax bills are often similar."
              },
              {
                q: "Is Schenectady worth it with high tax rates but lower prices?",
                a: "Yes, for investors. While Schenectady's tax rate is high per $1,000, the much lower home prices mean total tax bills are competitive. Plus: stronger rents, highest appreciation, revitalization momentum, and strong cash flow potential."
              },
              {
                q: "What rental yields can I expect in Schenectady?",
                a: "Best rental market in Capital Region. Median rent: $1,471-$1,695/month. Median price: $279K. Gross rent-to-price ratio: 6.7%. After expenses (taxes, insurance, maintenance ~35%), net yield: ~4.3%. Plus appreciation at +9.8% YoY."
              },
              {
                q: "Best neighborhoods in Schenectady for rental investment?",
                a: "Stockade District: Historic charm, Walk Score 76, strong appreciation. Proctors Theatre area: Downtown revitalization, growing tenant base. Rivers Casino neighborhood: New investment (casino opened 2023), improving amenities."
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
      <Section background="white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <Heading size="h2" className="mb-4">Build Your Schenectady Portfolio Today</Heading>
              <Text className="text-lg text-slate-600 mb-8">
                Low entry prices and maximum cash flow. Let's find off-market Schenectady duplexes and triplexes that match your investment timeline and return targets.
              </Text>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button
                  variant="default"
                  onClick={() => setIsModalOpen(true)}
                >
                  Get Schenectady Properties →
                </Button>
                <a href="/investing/multifamily-investment-guide">
                  <Button variant="secondary">
                    Back to Investment Guide →
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
