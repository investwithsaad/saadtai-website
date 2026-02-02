import type { Metadata } from 'next'
import { SchemaRenderer } from '@/components/SchemaRenderer'
import { createPageMetadata } from '@/lib/metadata-factory'
import { BASE_URL } from '@/lib/metadata-factory'

export async function generateMetadata(): Promise<Metadata> {
  return createPageMetadata({
    title: 'Albany NY Multifamily Investing Guide | Analyze Albany Rental Properties',
    description: 'Invest in Albany multifamily properties: 8.2% cap rates, $1,550 2BR rent, +5.4% appreciation. Market analysis, property examples, and investment framework for Albany NY.',
    path: '/albany-multifamily-investing',
    ogImage: '/saad.png',
  })
}

// LocalBusiness Schema for Albany
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Saad Tai - Albany NY Multifamily Investing Advisor",
  "url": `${BASE_URL}/albany-multifamily-investing`,
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

// Guide Schema
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

export default function AlbanyGuide() {
  return (
    <>
      <SchemaRenderer schema={localBusinessSchema} />
      <SchemaRenderer schema={guideSchema} />

      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
        {/* Hero */}
        <section className="px-6 py-24 md:px-12 md:py-32 max-w-5xl mx-auto">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              Albany NY Multifamily Investing Guide
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Invest in New York's capital city. 8.2% cap rates, strong government employment, walkable neighborhoods, and steady appreciation. Complete market analysis and deal framework for Albany multifamily properties.
            </p>
            <div className="pt-4 border-t border-gray-700">
              <p className="text-gray-400 text-sm">
                <strong>By Saad Tai</strong> | Albany Multifamily Investment Specialist
              </p>
              <p className="text-gray-500 text-xs mt-1">
                NY License #10401373295 | FL License #SL3651394 | 50+ Albany properties analyzed
              </p>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="px-6 md:px-12 max-w-5xl mx-auto pb-12">
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { label: "Median Price", value: "$285K", sub: "Lowest in Capital Region" },
              { label: "Cap Rate", value: "8.2%", sub: "Strong returns" },
              { label: "5-Yr Appreciation", value: "+5.4% YoY", sub: "Steady growth" },
              { label: "2BR Median Rent", value: "$1,550/mo", sub: "Growing demand" },
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
            <h2 className="text-2xl font-semibold mb-4 text-blue-300">Why Albany for Multifamily Investing?</h2>
            <p className="text-gray-100 leading-relaxed">
              Albany offers the best combination in the Capital Region: lowest entry prices ($285K median), strong cap rates (8.2%), steady appreciation (+5.4% annually), and the most stable employment base due to state government jobs. A $300K triplex generates $24,000+ annual NOI with strong tenant demand from urban professionals and state workers.
            </p>
          </div>
        </section>

        {/* Market Overview */}
        <section className="px-6 md:px-12 max-w-5xl mx-auto pb-16 border-t border-gray-700 pt-16">
          <h2 className="text-3xl font-bold mb-8">Albany Market Overview</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-300 mb-4">What Drives Albany's Rental Market</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex gap-2">
                  <span className="text-blue-400 font-bold">1.</span>
                  <span><strong>State Capital Jobs:</strong> NY State government employs 40,000+ in Albany. Stable, pension-backed employment attracts long-term renters.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-400 font-bold">2.</span>
                  <span><strong>Urban Professionals:</strong> Albany's walkable downtown (Walk Score 95) attracts young professionals seeking city life with affordability.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-400 font-bold">3.</span>
                  <span><strong>SUNY Albany:</strong> State University system brings student renters and young families year-round.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-400 font-bold">4.</span>
                  <span><strong>Healthcare Hub:</strong> Albany Medical Center and related facilities provide 15,000+ healthcare jobs.</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-300 mb-4">Investment Advantages</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex gap-2">
                  <span className="text-green-400 font-bold">✓</span>
                  <span><strong>Lowest Entry Cost:</strong> $285K median price = $57K down payment for 20%</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400 font-bold">✓</span>
                  <span><strong>8.2% Cap Rates:</strong> Higher returns than national average (6-7%)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400 font-bold">✓</span>
                  <span><strong>Tenant Quality:</strong> Government and healthcare workers = stable, long-term tenants</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400 font-bold">✓</span>
                  <span><strong>Growth Trajectory:</strong> 5.4% annual appreciation (2x national average)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-gray-300">
              <thead className="border-b border-gray-600">
                <tr className="text-left">
                  <th className="pb-4 font-semibold text-white">Metric</th>
                  <th className="pb-4 font-semibold text-white">Albany</th>
                  <th className="pb-4 font-semibold text-white">Schenectady</th>
                  <th className="pb-4 font-semibold text-white">US Average</th>
                </tr>
              </thead>
              <tbody className="space-y-2">
                {[
                  { metric: "Median Price", albany: "$285K", schenectady: "$215K", us: "$400K+" },
                  { metric: "Cap Rate", albany: "8.2%", schenectady: "8.9%", us: "6-7%" },
                  { metric: "5-Yr Appreciation", albany: "+5.4%", schenectady: "+3.8%", us: "+2-3%" },
                  { metric: "2BR Median Rent", albany: "$1,550", schenectady: "$1,100", us: "$1,600+" },
                  { metric: "Property Tax Rate", albany: "$2.73/$1K", schenectady: "$13.37/$1K city", us: "$4-5/$1K" },
                  { metric: "Job Growth", albany: "Stable", schenectady: "Growing", us: "Mixed" },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-gray-800">
                    <td className="py-3">{row.metric}</td>
                    <td className="py-3 font-semibold text-white">{row.albany}</td>
                    <td className="py-3">{row.schenectady}</td>
                    <td className="py-3 text-gray-400">{row.us}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Top Neighborhoods */}
        <section className="px-6 md:px-12 max-w-5xl mx-auto pb-16 border-t border-gray-700 pt-16">
          <h2 className="text-3xl font-bold mb-8">Best Albany Neighborhoods for Multifamily Investing</h2>

          <div className="grid md:grid-cols-2 gap-6">
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
              <div key={i} className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-300 mb-2">{neighborhood.name}</h3>
                <p className="text-sm text-gray-400 mb-3">Walk Score: {neighborhood.walkScore}</p>
                <p className="text-gray-300 mb-4">{neighborhood.desc}</p>
                <p className="text-sm text-gray-400"><strong>For Investors:</strong> {neighborhood.investmentNotes}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Real Example */}
        <section className="px-6 md:px-12 max-w-5xl mx-auto pb-16 border-t border-gray-700 pt-16">
          <h2 className="text-3xl font-bold mb-8">Real Example: Albany Triplex Investment</h2>

          <div className="bg-gray-800 p-8 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-300 mb-6">Property: Center Square Triplex (3-unit building)</h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-white mb-4">Property Details</h4>
                <div className="font-mono text-sm text-gray-300 space-y-2 bg-black p-4 rounded">
                  <div>Location: Center Square, Albany</div>
                  <div>Built: 1920 (recently updated)</div>
                  <div>Units: 3 (2BR/1BA each)</div>
                  <div>Condition: Good</div>
                  <div className="border-t border-gray-600 mt-2 pt-2">
                    <div className="text-green-400 font-bold">Purchase Price: $320,000</div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-4">Annual Income & Expenses</h4>
                <div className="font-mono text-sm text-gray-300 space-y-1 bg-black p-4 rounded">
                  <div>Unit 1: $1,600/mo = $19,200/yr</div>
                  <div>Unit 2: $1,600/mo = $19,200/yr</div>
                  <div>Unit 3: $1,700/mo = $20,400/yr</div>
                  <div className="border-t border-gray-600 mt-2 pt-2">
                    <div>Gross Income: $58,800/yr</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-gray-600 pt-8">
              <h4 className="font-semibold text-white mb-4">Investment Analysis</h4>
              <div className="font-mono text-sm text-gray-300 bg-black p-4 rounded space-y-1">
                <div>Gross Income: $58,800</div>
                <div className="text-red-400">− Property Tax: $3,200 (est.)</div>
                <div className="text-red-400">− Insurance: $2,400</div>
                <div className="text-red-400">− Maintenance: $3,500</div>
                <div className="text-red-400">− Management: $5,880 (10%)</div>
                <div className="border-t border-gray-600 mt-2 pt-2">
                  <div>NOI: $39,820</div>
                </div>
                <div className="border-t border-gray-600 mt-2 pt-2">
                  <div className="text-green-400 font-bold">Cap Rate: 12.4%</div>
                  <div className="text-gray-500 text-xs mt-1">(Premium to 8.2% market avg due to below-market acquisition)</div>
                </div>
              </div>
            </div>

            <div className="mt-8 grid md:grid-cols-3 gap-4">
              <div className="bg-gray-700 p-4 rounded">
                <p className="text-gray-400 text-sm">Down Payment (20%)</p>
                <p className="text-2xl font-bold text-green-400">$64,000</p>
              </div>
              <div className="bg-gray-700 p-4 rounded">
                <p className="text-gray-400 text-sm">Monthly Cash Flow*</p>
                <p className="text-2xl font-bold text-green-400">$2,200</p>
                <p className="text-xs text-gray-500 mt-1">*Assuming 3.75% mortgage</p>
              </div>
              <div className="bg-gray-700 p-4 rounded">
                <p className="text-gray-400 text-sm">Annual Total Return</p>
                <p className="text-2xl font-bold text-green-400">17.4%</p>
                <p className="text-xs text-gray-500 mt-1">Cash flow + appreciation</p>
              </div>
            </div>
          </div>
        </section>

        {/* Investment Framework */}
        <section className="px-6 md:px-12 max-w-5xl mx-auto pb-16 border-t border-gray-700 pt-16">
          <h2 className="text-3xl font-bold mb-8">Albany Investment Framework</h2>

          <div className="space-y-6">
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
              },
              {
                goal: "Value-Add Opportunity",
                strategy: "Look for: Below-market prices, rent-below-market units, cosmetic improvements needed",
                example: "Acquire at 6% cap rate, improve to 8-9% through rent increases and expense management"
              },
            ].map((item, i) => (
              <div key={i} className="bg-gray-800 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-300 mb-3">{item.goal}</h4>
                <p className="text-gray-300 mb-2"><strong>Strategy:</strong> {item.strategy}</p>
                <p className="text-gray-400 text-sm"><strong>Example:</strong> {item.example}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ / High-Intent Questions */}
        <section className="px-6 md:px-12 max-w-5xl mx-auto pb-16 border-t border-gray-700 pt-16">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>

          <div className="space-y-6">
            {[
              {
                q: "What are property taxes in Albany vs Schenectady vs Niskayuna?",
                a: "Albany: $2.73 per $1,000 assessed value (County rate). Schenectady (City): $13.37 per $1,000. Niskayuna (Town): $2.84 per $1,000. Total property tax bills vary significantly based on school district. Note: Schenectady's higher city rate is offset by lower median home prices."
              },
              {
                q: "What are the best school districts in Albany?",
                a: "Albany City School District: B rating on Niche.com with 8,329 students. Albany High School: B+ grade. Math proficiency 27%, reading 30%. For higher-rated schools, consider suburbs like Niskayuna (A rating) or Bethlehem Central."
              },
              {
                q: "What makes Albany walkable?",
                a: "Albany has a Walk Score of 65 overall. Center Square neighborhood: 95 (Walker's Paradise). Downtown: 93. Central Avenue: 95. These neighborhoods have good public transit (CDTA buses), bike lanes, and walkable retail/dining. Most errands can be accomplished on foot."
              },
              {
                q: "Commute time from Albany to Schenectady?",
                a: "Albany to Schenectady downtown: 20-25 minutes via I-87 during off-peak hours. Rush hour: 35-45 minutes. Albany to GE campus in Schenectady: 30-40 minutes depending on traffic and exact location."
              },
              {
                q: "Total monthly cost of owning a home in Albany?",
                a: "Example for $295K home: Mortgage $1,850 (20% down, 7% rate), Property Tax $67/month ($2.73 rate + school district), Insurance $100/month, Utilities ~$120/month, Maintenance $150/month. Total ~$2,287/month. Actual costs vary by exact neighborhood and school district."
              },
              {
                q: "What rental yields can I expect in Albany?",
                a: "Median 2BR rent: $1,550/month. Median home price: $285K average. Gross rent-to-price ratio: 6.5% (good for northeast standard). Accounting for taxes, insurance, maintenance (expenses ~35%), net yield: ~4.2%. Good for appreciation-focused strategy."
              },
            ].map((item, i) => (
              <div key={i} className="border-l-4 border-blue-500 pl-6 pb-6">
                <h3 className="text-lg font-semibold text-blue-300 mb-3">{item.q}</h3>
                <p className="text-gray-300">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 md:px-12 max-w-5xl mx-auto py-16 text-center border-t border-gray-700">
          <h2 className="text-2xl font-bold mb-4">Ready to Invest in Albany?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a market analysis for Albany, discover off-market properties, and find deals that match your investment goals.
          </p>
          <a
            href="/#contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition mr-4 mb-4"
          >
            Get Albany Market Analysis
          </a>
          <a
            href="/multifamily-investment-guide"
            className="inline-block bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold transition"
          >
            Review Investment Basics
          </a>
        </section>
      </div>
    </>
  )
}
