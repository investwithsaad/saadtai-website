import type { Metadata } from 'next'
import { SchemaRenderer } from '@/components/SchemaRenderer'
import { createPageMetadata } from '@/lib/metadata-factory'
import { BASE_URL } from '@/lib/metadata-factory'

export async function generateMetadata(): Promise<Metadata> {
  return createPageMetadata({
    title: 'Troy NY Multifamily Investing Guide | Analyze Troy Rental Properties',
    description: 'Invest in Troy NY multifamily properties: 6.1% gross yield, $1,350-$1,550 2BR rent, 72 Walk Score. Market analysis for arts-focused revitalization and cultural growth.',
    path: '/troy-multifamily-investing',
    ogImage: '/saad.png',
  })
}

// LocalBusiness Schema for Troy
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Saad Tai - Troy NY Multifamily Investing Advisor",
  "url": `${BASE_URL}/troy-multifamily-investing`,
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

// Guide Schema
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

export default function TroyGuide() {
  return (
    <>
      <SchemaRenderer schema={localBusinessSchema} />
      <SchemaRenderer schema={guideSchema} />

      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
        {/* Hero */}
        <section className="px-6 py-24 md:px-12 md:py-32 max-w-5xl mx-auto">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              Troy NY Multifamily Investing Guide
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Historic riverfront city undergoing cultural renaissance. 6.1% gross rental yields, Walk Score 72, creative professional influx, and strong appreciation momentum. Complete market analysis and deal framework for Troy multifamily properties.
            </p>
            <div className="pt-4 border-t border-gray-700">
              <p className="text-gray-400 text-sm">
                <strong>By Saad Tai</strong> | Troy Multifamily Investment Specialist
              </p>
              <p className="text-gray-500 text-xs mt-1">
                NY License #10401373295 | FL License #SL3651394 | 50+ Troy properties analyzed
              </p>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="px-6 md:px-12 max-w-5xl mx-auto pb-12">
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { label: "Median Price", value: "$275K", sub: "Strong entry point" },
              { label: "Cap Rate", value: "6.1%", sub: "Good cash flow" },
              { label: "5-Yr Appreciation", value: "+5.2% YoY", sub: "Steady growth" },
              { label: "2BR Median Rent", value: "$1,450/mo", sub: "Rising demand" },
            ].map((stat, i) => (
              <div key={i} className="bg-gray-800 p-6 rounded-lg text-center">
                <p className="text-gray-400 text-sm">{stat.label}</p>
                <p className="text-2xl font-bold text-blue-300 mt-2">{stat.value}</p>
                <p className="text-xs text-gray-500 mt-1">{stat.sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Answer */}
        <section className="px-6 md:px-12 max-w-5xl mx-auto pb-12">
          <div className="bg-blue-900 bg-opacity-30 border border-blue-400 border-opacity-30 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Why Invest in Troy?</h2>
            <p className="text-gray-200 mb-4">
              Troy combines <strong>affordability</strong> ($275K median), <strong>walkability</strong> (Walk Score 72), and <strong>cultural momentum</strong> (arts scene, young professional influx). You get solid 6.1% gross yields with appreciation upside from ongoing revitalization. Lower price than Albany with stronger walkability than Schenectady. Ideal for investors seeking balance of income and growth in an emerging market.
            </p>
            <p className="text-gray-300 text-sm">
              Expected rental income on $275K property: $1,350-$1,550/month. After expenses (~35%), net yield: ~4.0%. Plus 5.2% annual appreciation.
            </p>
          </div>
        </section>

        {/* Market Overview */}
        <section className="px-6 md:px-12 max-w-5xl mx-auto pb-12">
          <h2 className="text-3xl font-bold mb-6">Market Overview</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold mb-2">The Opportunity</h3>
              <p className="text-gray-300">
                Troy is experiencing a cultural and demographic shift. Younger professionals (ages 25-40) are moving to the historic riverfront city attracted by affordability, walkability, and a thriving arts scene. This influx is driving both rental demand and property appreciation. For investors, this means strong tenant quality, growing rental rates, and long-term value appreciation.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold mb-2">Key Market Drivers</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• <strong>Arts Scene Growth:</strong> Galleries, coffee shops, cultural venues attracting younger demographic</li>
                <li>• <strong>Waterfront Revitalization:</strong> Historic riverfront development and public investment</li>
                <li>• <strong>Young Professional Influx:</strong> Ages 25-40 attracted to walkability and lower costs vs Saratoga</li>
                <li>• <strong>Walk Score 72:</strong> Very walkable downtown with daily amenities within walking distance</li>
                <li>• <strong>Affordability Premium:</strong> $275K median vs $285K Albany, $387K Niskayuna</li>
                <li>• <strong>Albany Proximity:</strong> 15-minute commute to Albany state capital jobs</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Market Data Comparison */}
        <section className="px-6 md:px-12 max-w-5xl mx-auto pb-12">
          <h2 className="text-3xl font-bold mb-6">Troy vs. Capital Region Markets</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-gray-800 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-700">
                  <th className="p-4 text-left">Metric</th>
                  <th className="p-4 text-center">Troy</th>
                  <th className="p-4 text-center">Albany</th>
                  <th className="p-4 text-center">Schenectady</th>
                  <th className="p-4 text-center">Niskayuna</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <tr>
                  <td className="p-4">Median Price</td>
                  <td className="p-4 text-center font-semibold text-blue-300">$275K</td>
                  <td className="p-4 text-center">$285K</td>
                  <td className="p-4 text-center text-green-400">$279K</td>
                  <td className="p-4 text-center">$387K</td>
                </tr>
                <tr className="bg-gray-750">
                  <td className="p-4">2BR Median Rent</td>
                  <td className="p-4 text-center font-semibold text-blue-300">$1,450</td>
                  <td className="p-4 text-center">$1,550</td>
                  <td className="p-4 text-center">$1,583</td>
                  <td className="p-4 text-center">$1,918</td>
                </tr>
                <tr>
                  <td className="p-4">Gross Yield (Rent-to-Price)</td>
                  <td className="p-4 text-center font-semibold text-blue-300">6.1%</td>
                  <td className="p-4 text-center">6.5%</td>
                  <td className="p-4 text-center text-green-400">6.7%</td>
                  <td className="p-4 text-center">6.0%</td>
                </tr>
                <tr className="bg-gray-750">
                  <td className="p-4">Net Yield (35% expenses)</td>
                  <td className="p-4 text-center font-semibold text-blue-300">~4.0%</td>
                  <td className="p-4 text-center">~4.2%</td>
                  <td className="p-4 text-center text-green-400">~4.3%</td>
                  <td className="p-4 text-center">~3.9%</td>
                </tr>
                <tr>
                  <td className="p-4">Annual Appreciation</td>
                  <td className="p-4 text-center font-semibold text-blue-300">+5.2% YoY</td>
                  <td className="p-4 text-center">+5.4%</td>
                  <td className="p-4 text-center text-green-400">+9.8%</td>
                  <td className="p-4 text-center">+4.7%</td>
                </tr>
                <tr className="bg-gray-750">
                  <td className="p-4">Walk Score</td>
                  <td className="p-4 text-center font-semibold text-blue-300">72</td>
                  <td className="p-4 text-center">65</td>
                  <td className="p-4 text-center">76</td>
                  <td className="p-4 text-center">45</td>
                </tr>
                <tr>
                  <td className="p-4">Property Tax (per $1K)</td>
                  <td className="p-4 text-center font-semibold text-blue-300">$3.45</td>
                  <td className="p-4 text-center text-green-400">$2.73</td>
                  <td className="p-4 text-center">$13.37</td>
                  <td className="p-4 text-center">$2.84</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-400 text-sm mt-4">
            <strong>Analysis:</strong> Troy offers a "sweet spot"—lower price than Albany with better walkability than Schenectady, and stronger walk score than family-focused Niskayuna. Solid 6.1% gross yield with 5.2% appreciation. Strong for balanced portfolio approach.
          </p>
        </section>

        {/* Neighborhood Breakdown */}
        <section className="px-6 md:px-12 max-w-5xl mx-auto pb-12">
          <h2 className="text-3xl font-bold mb-6">Best Neighborhoods for Multifamily Investment</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: "Downtown/River Street",
                desc: "Highest walkability, cultural hub, strongest tenant demand from young professionals. Galleries, restaurants, riverside parks. Best for appreciation and tenant quality.",
                strength: "walkability"
              },
              {
                name: "Federal Street",
                desc: "Historic charm with modern appeal. Walkable residential area with improving neighborhood appeal. Good balance of cash flow and appreciation. Growing family interest.",
                strength: "balance"
              },
              {
                name: "Rensselaer Street",
                desc: "Established residential neighborhoods with solid tenant stability. Lower walk scores but more affordable entry prices. Better for cash flow focus.",
                strength: "cashflow"
              },
              {
                name: "Waterfront/Emerging Areas",
                desc: "Ongoing revitalization near river corridor. Lower prices today with significant upside as revitalization completes. Higher risk/reward opportunity.",
                strength: "growth"
              },
            ].map((area, i) => (
              <div key={i} className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">{area.name}</h3>
                <p className="text-gray-300 text-sm mb-3">{area.desc}</p>
                <p className="text-xs bg-gray-700 inline-block px-3 py-1 rounded text-blue-300">
                  Focus: {area.strength}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Real Property Example */}
        <section className="px-6 md:px-12 max-w-5xl mx-auto pb-12">
          <h2 className="text-3xl font-bold mb-6">Real Property Example: Downtown 2-Unit Triplex</h2>
          <div className="bg-gray-800 p-8 rounded-lg space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Property Details</h3>
              <div className="grid md:grid-cols-2 gap-4 text-gray-300">
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="font-semibold">Downtown/River Street, Troy</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Building Type</p>
                  <p className="font-semibold">2-Unit Triplex (3BR/1BA each)</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Purchase Price</p>
                  <p className="font-semibold text-blue-300">$290,000</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Year Built</p>
                  <p className="font-semibold">1890 (recently renovated)</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Income Analysis</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex justify-between">
                  <span>Unit 1 Rent (3BR/1BA)</span>
                  <span className="font-semibold">$1,450/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Unit 2 Rent (3BR/1BA)</span>
                  <span className="font-semibold">$1,450/month</span>
                </div>
                <div className="border-t border-gray-700 pt-3 mt-3 flex justify-between text-lg">
                  <span className="font-semibold">Gross Annual Income</span>
                  <span className="text-green-400 font-bold">$34,800</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Annual Expenses</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex justify-between">
                  <span>Property Taxes (~$3.45 per $1K)</span>
                  <span className="font-semibold">$1,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Insurance (landlord)</span>
                  <span className="font-semibold">$1,200</span>
                </div>
                <div className="flex justify-between">
                  <span>Utilities (owner-paid common)</span>
                  <span className="font-semibold">$600</span>
                </div>
                <div className="flex justify-between">
                  <span>Maintenance & Repairs (5%)</span>
                  <span className="font-semibold">$1,740</span>
                </div>
                <div className="flex justify-between">
                  <span>Vacancy Reserve (5%)</span>
                  <span className="font-semibold">$1,740</span>
                </div>
                <div className="border-t border-gray-700 pt-3 mt-3 flex justify-between text-lg">
                  <span className="font-semibold">Total Annual Expenses</span>
                  <span className="text-red-400 font-bold">$6,280</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Return Analysis</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex justify-between">
                  <span>Net Annual Income (Cash Flow)</span>
                  <span className="text-green-400 font-bold">$28,520</span>
                </div>
                <div className="flex justify-between">
                  <span>Cash-on-Cash Return (20% down)</span>
                  <span className="text-green-400 font-bold">6.2%</span>
                </div>
                <div className="flex justify-between">
                  <span>Expected Annual Appreciation (+5.2%)</span>
                  <span className="text-blue-300 font-bold">$15,080</span>
                </div>
                <div className="border-t border-gray-700 pt-3 mt-3 flex justify-between text-lg bg-gray-900 p-3 rounded">
                  <span className="font-semibold">Year 1 Total Return (Income + Appreciation)</span>
                  <span className="text-green-400 font-bold text-xl">$43,600</span>
                </div>
              </div>
            </div>

            <p className="text-gray-400 text-sm">
              <strong>Note:</strong> This example uses market averages. Actual properties will vary based on condition, neighborhood, tenant quality, and local factors. Get a professional appraisal and inspection before purchase.
            </p>
          </div>
        </section>

        {/* FAQ / High-Intent Questions */}
        <section className="px-6 md:px-12 max-w-5xl mx-auto pb-12">
          <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "Why is Troy becoming an investment hotspot?",
                a: "Cultural renaissance driven by younger professionals (ages 25-40), arts scene growth, and waterfront revitalization. Median price $275K is 4-5% lower than Albany ($285K) with comparable rental potential. Appreciation +5.2% YoY as demographic shifts attract investment. Combination of affordability, walkability, and cultural momentum creates strong investor interest."
              },
              {
                q: "What rental yields can I expect in Troy?",
                a: "Median 2BR rent: $1,350-$1,550/month. Median home price: $275K. Gross rent-to-price ratio: 6.1% (strong for northeast). After expenses (taxes, insurance, maintenance ~35%), net yield: ~4.0%. Plus appreciation at +5.2% YoY. Good for investors seeking balance of cash flow and growth."
              },
              {
                q: "Is Troy walkable? What is the Walk Score?",
                a: "Troy Walk Score: 72 (Very Walkable). Revitalized downtown is compact and pedestrian-friendly with shops, restaurants, galleries, and cultural venues within walking distance. Riverfront access and historic neighborhoods like Rensselaer Street and Federal Street are particularly walkable. Good public transit (CDTA buses). Most daily errands can be accomplished on foot."
              },
              {
                q: "What are Troy property taxes compared to Schenectady and Albany?",
                a: "Troy: $3.45 per $1,000 assessed value. Albany: $2.73 per $1,000. Schenectady: $13.37 per $1,000. While Troy is higher than Albany, it's significantly lower than Schenectady. For example: $275K Troy home = ~$950/year. $285K Albany home = ~$777/year. Troy tax premium is ~$200/year but offset by cultural amenities and growth momentum."
              },
              {
                q: "What neighborhoods in Troy are best for rental investment?",
                a: "Downtown/River Street: Highest walkability, most cultural activity, strongest tenant demand from young professionals. Federal Street: Historic charm, walkable, improving appreciation. Rensselaer Street: Established residential, family-friendly, good tenant stability. Waterfront areas: Emerging, revitalization ongoing, upside potential. Focus on walkable neighborhoods with cultural amenities."
              },
              {
                q: "Commute from Troy to Albany vs Schenectady?",
                a: "Troy to Albany downtown: 15-20 minutes via I-87 off-peak, 25-35 minutes rush hour. Troy to Schenectady: 20-25 minutes via I-87/I-890. Troy to GE campus: 25-35 minutes. Proximity to Albany jobs is strong advantage. Many younger professionals choose Troy for affordability while commuting to Albany state capital jobs."
              },
            ].map((item, i) => (
              <div key={i} className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-lg font-semibold mb-3 text-white">{item.q}</h3>
                <p className="text-gray-300">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Investment Framework */}
        <section className="px-6 md:px-12 max-w-5xl mx-auto pb-12">
          <h2 className="text-3xl font-bold mb-6">Troy Investment Framework</h2>
          <div className="space-y-4">
            {[
              {
                step: 1,
                title: "Screen for Walk Score 65+",
                desc: "Focus on downtown neighborhoods (River Street, Federal Street, Rensselaer Street) where tenants are young professionals attracted to walkability. Lower walk scores = lower tenant quality."
              },
              {
                step: 2,
                title: "Target $250K-$300K Price Range",
                desc: "Median is $275K. Properties below $250K may have deferred maintenance; above $300K reduces your cap rate. Target properties with recent updates to minimize surprise repairs."
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
                desc: "Property taxes are higher than Albany but lower than Schenectady. Factor ~$950/year on $275K property. Don't assume tax freezes; verify with city assessor."
              },
              {
                step: 6,
                title: "Plan for 5-Year Hold",
                desc: "Troy's value comes from appreciation as cultural revitalization completes. 1-year properties may have limited cash flow. Plan 5-year hold to capture full appreciation benefit and pay down principal."
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600">
                    <span className="font-semibold text-white">{item.step}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-gray-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Ready to Get Started */}
        <section className="px-6 md:px-12 max-w-5xl mx-auto pb-24">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Analyze Troy Properties?</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              I've analyzed 50+ Troy multifamily properties. Schedule a consultation to discuss your investment goals, run deal analysis, and find your next property.
            </p>
            <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition">
              Schedule Consultation
            </button>
            <p className="text-blue-200 text-sm mt-4">
              No obligation. Free 30-minute analysis of your target property.
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
