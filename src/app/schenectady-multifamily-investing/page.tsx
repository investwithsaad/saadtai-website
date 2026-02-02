import type { Metadata } from 'next'
import { SchemaRenderer } from '@/components/SchemaRenderer'
import { createPageMetadata } from '@/lib/metadata-factory'
import { BASE_URL } from '@/lib/metadata-factory'

export async function generateMetadata(): Promise<Metadata> {
  return createPageMetadata({
    title: 'Schenectady NY Multifamily Investing | Highest Growth in Capital Region',
    description: 'Invest in Schenectady: +9.8% appreciation, $279K median price, $1,471-$1,695 2BR rent. Downtown revitalization (Proctors Theatre, Rivers Casino). Complete market analysis and investment strategy.',
    path: '/schenectady-multifamily-investing',
    ogImage: '/saad.png',
  })
}

// LocalBusiness Schema for Schenectady
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Saad Tai - Schenectady NY Multifamily Investment Specialist",
  "url": `${BASE_URL}/schenectady-multifamily-investing`,
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

// Guide Schema
const guideSchema = {
  "@context": "https://schema.org",
  "@type": "Guide",
  "name": "Schenectady NY Multifamily Investment Guide",
  "author": {
    "@type": "Person",
    "name": "Saad Tai"
  }
}

export default function SchenectadyGuide() {
  return (
    <>
      <SchemaRenderer schema={localBusinessSchema} />
      <SchemaRenderer schema={guideSchema} />

      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
        {/* Hero */}
        <section className="px-6 py-24 md:px-12 md:py-32 max-w-5xl mx-auto">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              Schenectady NY Multifamily Investing Guide
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Highest cap rates in Capital Region (8.9%). Lowest entry prices ($215K). Perfect for cash flow investors. Tech hub growth, emerging market potential, and rapid rental expansion.
            </p>
            <div className="pt-4 border-t border-gray-700">
              <p className="text-gray-400 text-sm">
                <strong>By Saad Tai</strong> | Schenectady Market Specialist
              </p>
              <p className="text-gray-500 text-xs mt-1">
                NY License #10401373295 | FL License #SL3651394 | 50+ Schenectady properties analyzed
              </p>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="px-6 md:px-12 max-w-5xl mx-auto pb-12">
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { label: "Median Price", value: "$279K", sub: "Lowest in Capital Region" },
              { label: "Cap Rate", value: "8.2%", sub: "Strong returns" },
              { label: "5-Yr Appreciation", value: "+9.8% YoY", sub: "Highest growth rate" },
              { label: "2BR Median Rent", value: "$1,471-$1,695/mo", sub: "Strong rental income" },
            ].map((stat, i) => (
              <div key={i} className="bg-gray-800 p-6 rounded-lg text-center">
                <p className="text-gray-400 text-sm">{stat.label}</p>
                <p className="text-2xl font-bold text-green-300 mt-2">{stat.value}</p>
                <p className="text-xs text-gray-500 mt-1">{stat.sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Answer */}
        <section className="px-6 md:px-12 max-w-5xl mx-auto pb-12">
          <div className="bg-green-900 bg-opacity-30 border border-green-400 border-opacity-30 rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-4 text-green-300">Why Choose Schenectady?</h2>
            <p className="text-gray-100 leading-relaxed">
              Schenectady offers strong value with the highest appreciation in Capital Region (+9.8% YoY). Median prices ($279K) are competitive compared to national averages. Rents ($1,471-$1,695/month) are strong relative to price. Downtown revitalization (Proctors Theatre, Rivers Casino) is driving growth. Combined with emerging tech hub development and multi-generational renter demand, Schenectady is ideal for investors seeking growth with sustainable cash flow.
            </p>
          </div>
        </section>

        {/* Market Overview */}
        <section className="px-6 md:px-12 max-w-5xl mx-auto pb-16 border-t border-gray-700 pt-16">
          <h2 className="text-3xl font-bold mb-8">Schenectady Market Overview</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-green-300 mb-4">Market Drivers</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex gap-2">
                  <span className="text-green-400 font-bold">1.</span>
                  <span><strong>Downtown Revitalization:</strong> Proctors Theatre redevelopment, Rivers Casino (opened 2023), new restaurants/bars. Walk Score improving (76 overall).</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400 font-bold">2.</span>
                  <span><strong>Historic Stockade District:</strong> Character-filled neighborhood attracting investors and young professionals. Walkable, revitalized, strong renter demand.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400 font-bold">3.</span>
                  <span><strong>Strong Appreciation Momentum:</strong> +9.8% YoY appreciation (highest in Capital Region). Market fundamentals improving as revitalization takes hold.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400 font-bold">4.</span>
                  <span><strong>Competitive Pricing:</strong> $279K median price provides good value relative to rent generation ($1,471-$1,695/month). Strong rental demand from diverse tenant base.</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-green-300 mb-4">Investment Advantages</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex gap-2">
                  <span className="text-blue-400 font-bold">✓</span>
                  <span><strong>Lowest Entry Cost:</strong> $215K median = $43K down payment (20%)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-400 font-bold">✓</span>
                  <span><strong>8.9% Cap Rate:</strong> Highest in Capital Region, 1.7% above market</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-400 font-bold">✓</span>
                  <span><strong>Maximum Cash Flow:</strong> Rapid portfolio scaling with low down payments</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-400 font-bold">✓</span>
                  <span><strong>Growth Potential:</strong> Tech sector expansion could drive 5-7% appreciation</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-900 bg-opacity-20 border border-blue-500 border-opacity-20 p-6 rounded mb-8">
            <h4 className="text-lg font-semibold text-blue-300 mb-3">💡 The Schenectady Cash Flow Advantage</h4>
            <p className="text-gray-200 mb-3">
              A $250K duplex in Schenectady generates $22,250 NOI annually with $43K down payment. That's a 52% cash-on-cash return BEFORE appreciation.
            </p>
            <p className="text-gray-300 text-sm">
              Compare: Same price in most US markets yields only 35-40% cash-on-cash due to lower cap rates. Schenectady's combination of low prices + high cap rates is nearly impossible to find elsewhere.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-gray-300">
              <thead className="border-b border-gray-600">
                <tr className="text-left">
                  <th className="pb-4 font-semibold text-white">Metric</th>
                  <th className="pb-4 font-semibold text-white">Schenectady</th>
                  <th className="pb-4 font-semibold text-white">Albany</th>
                  <th className="pb-4 font-semibold text-white">Niskayuna</th>
                </tr>
              </thead>
              <tbody className="space-y-2">
                {[
                  { metric: "Median Price", schenectady: "$279K-$299K", albany: "$276K-$295K", niskayuna: "$387K" },
                  { metric: "5-Yr Appreciation", schenectady: "+9.8% YoY", albany: "+5.4% YoY", niskayuna: "+4.7% YoY" },
                  { metric: "Entry Down Payment (20%)", schenectady: "$56K-60K", albany: "$55K-59K", niskayuna: "$77K" },
                  { metric: "2BR Median Rent", schenectady: "$1,471-$1,695", albany: "$1,550", niskayuna: "$1,918" },
                  { metric: "Property Tax Rate", schenectady: "$13.37/$1K (city)", albany: "$2.73/$1K (county)", niskayuna: "$2.84/$1K (town)" },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-gray-800">
                    <td className="py-3">{row.metric}</td>
                    <td className="py-3 font-semibold text-green-400">{row.schenectady}</td>
                    <td className="py-3">{row.albany}</td>
                    <td className="py-3 text-gray-400">{row.niskayuna}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Real Example */}
        <section className="px-6 md:px-12 max-w-5xl mx-auto pb-16 border-t border-gray-700 pt-16">
          <h2 className="text-3xl font-bold mb-8">Real Example: Schenectady Duplex Acquisition</h2>

          <div className="bg-gray-800 p-8 rounded-lg">
            <h3 className="text-lg font-semibold text-green-300 mb-6">Property: Stockade District Duplex (2-unit building)</h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-white mb-4">Property Details</h4>
                <div className="font-mono text-sm text-gray-300 space-y-2 bg-black p-4 rounded">
                  <div>Location: Stockade District, Schenectady</div>
                  <div>Built: 2000</div>
                  <div>Units: 2 (2BR/1BA each)</div>
                  <div>Condition: Well-maintained</div>
                  <div className="border-t border-gray-600 mt-2 pt-2">
                    <div className="text-green-400 font-bold">Purchase Price: $225,000</div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-4">Annual Income & Expenses</h4>
                <div className="font-mono text-sm text-gray-300 space-y-1 bg-black p-4 rounded">
                  <div>Unit 1: $1,200/mo = $14,400/yr</div>
                  <div>Unit 2: $1,250/mo = $15,000/yr</div>
                  <div className="border-t border-gray-600 mt-2 pt-2">
                    <div>Gross Income: $29,400/yr</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-gray-600 pt-8">
              <h4 className="font-semibold text-white mb-4">Investment Analysis</h4>
              <div className="font-mono text-sm text-gray-300 bg-black p-4 rounded space-y-1">
                <div>Gross Income: $29,400</div>
                <div className="text-red-400">− Property Tax: $2,400 (est.)</div>
                <div className="text-red-400">− Insurance: $1,600</div>
                <div className="text-red-400">− Maintenance: $1,800</div>
                <div className="text-red-400">− Management: $2,940 (10%)</div>
                <div className="border-t border-gray-600 mt-2 pt-2">
                  <div>NOI: $20,660</div>
                </div>
                <div className="border-t border-gray-600 mt-2 pt-2">
                  <div className="text-green-400 font-bold">Cap Rate: 9.2%</div>
                  <div className="text-gray-500 text-xs mt-1">(Above 8.9% market avg due to below-market acquisition)</div>
                </div>
              </div>
            </div>

            <div className="mt-8 grid md:grid-cols-3 gap-4">
              <div className="bg-gray-700 p-4 rounded">
                <p className="text-gray-400 text-sm">Down Payment (20%)</p>
                <p className="text-2xl font-bold text-green-400">$45,000</p>
                <p className="text-xs text-gray-500 mt-1">20% of $225K</p>
              </div>
              <div className="bg-gray-700 p-4 rounded">
                <p className="text-gray-400 text-sm">Monthly Cash Flow*</p>
                <p className="text-2xl font-bold text-green-400">$1,220</p>
                <p className="text-xs text-gray-500 mt-1">*Assuming 3.75% mortgage, 20% down</p>
              </div>
              <div className="bg-gray-700 p-4 rounded">
                <p className="text-gray-400 text-sm">5-Year Appreciation</p>
                <p className="text-2xl font-bold text-green-400">+49%</p>
                <p className="text-xs text-gray-500 mt-1">At +9.8% annual growth</p>
              </div>
            </div>

            <div className="mt-8 p-4 bg-green-900 bg-opacity-20 border border-green-500 border-opacity-20 rounded">
              <p className="text-gray-200 text-sm">
                <strong>Key Insight:</strong> This $225K duplex requires only $45K down but generates $950/month cash flow. The $45K down payment is recovered in value and cash flow within 5-7 years. This is why Schenectady is perfect for building wealth quickly with limited capital.
              </p>
            </div>
          </div>
        </section>

        {/* Investment Strategies */}
        <section className="px-6 md:px-12 max-w-5xl mx-auto pb-16 border-t border-gray-700 pt-16">
          <h2 className="text-3xl font-bold mb-8">Schenectady Investment Strategies</h2>

          <div className="space-y-6">
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
              },
            ].map((item, i) => (
              <div key={i} className="bg-gray-800 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-green-300 mb-3">{item.strategy}</h4>
                <p className="text-gray-300 mb-2"><strong>How:</strong> {item.how}</p>
                <p className="text-gray-400 text-sm"><strong>Expected Result:</strong> {item.result}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 md:px-12 max-w-5xl mx-auto pb-16 border-t border-gray-700 pt-16">
          <h2 className="text-3xl font-bold mb-8">Schenectady FAQs</h2>

          <div className="space-y-6">
            {[
              {
                q: "Why are Schenectady property taxes so high?",
                a: "City of Schenectady: $13.37 per $1,000 assessed value (2025 budget). This is 4-5x higher than town rates. However, median homes are much cheaper ($279K vs $387K in Niskayuna), so actual tax bills are often similar. Example: $250K Schenectady home = $3,342/year. $387K Niskayuna home = $11,000+/year."
              },
              {
                q: "Is Schenectady worth it with high tax rates but lower prices?",
                a: "Yes, for investors. While Schenectady's tax rate is high per $1,000, the much lower home prices mean total tax bills are competitive. Plus: stronger rents ($1,471-$1,695 vs Albany $1,550), highest appreciation (+9.8%), revitalization momentum near Proctors/Rivers Casino, and strong cash flow potential. The math works."
              },
              {
                q: "What rental yields can I expect in Schenectady?",
                a: "Best rental market in Capital Region. Median rent: $1,471-$1,695/month. Median price: $279K. Gross rent-to-price ratio: 6.7%. After expenses (taxes, insurance, maintenance ~35%), net yield: ~4.3%. Plus appreciation at +9.8% YoY."
              },
              {
                q: "Best neighborhoods in Schenectady for rental investment?",
                a: "Stockade District: Historic charm, Walk Score 76, strong appreciation. Proctors Theatre area: Downtown revitalization, growing tenant base. Rivers Casino neighborhood: New investment (casino opened 2023), improving amenities. These areas have strong renter demand and appreciation potential."
              },
              {
                q: "How is the Schenectady market recovering?",
                a: "Strong recovery indicators: 2025 appreciation +9.8% YoY (highest in Capital Region), Proctors Theatre revitalization, Rivers Casino attraction (opened 2023), population stabilization. Downtown is cleaner, safer, with new restaurants and businesses. Market momentum improving significantly."
              },
            ].map((item, i) => (
              <div key={i} className="border-b border-gray-700 pb-6 last:border-0">
                <h3 className="text-lg font-semibold text-green-300 mb-3">{item.q}</h3>
                <p className="text-gray-300">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="px-6 md:px-12 max-w-5xl mx-auto py-16 text-center border-t border-gray-700">
          <h2 className="text-2xl font-bold mb-4">Build Your Schenectady Portfolio Today</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Low entry prices and maximum cash flow. Let's find off-market Schenectady duplexes and triplexes that match your investment timeline and return targets.
          </p>
          <a
            href="/#contact"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition mr-4 mb-4"
          >
            Get Schenectady Properties
          </a>
          <a
            href="/multifamily-investment-guide"
            className="inline-block bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold transition"
          >
            Back to Investment Guide
          </a>
        </section>
      </div>
    </>
  )
}
