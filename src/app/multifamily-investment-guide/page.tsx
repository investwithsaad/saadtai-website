import type { Metadata } from 'next'
import { SchemaRenderer } from '@/components/SchemaRenderer'
import { createPageMetadata } from '@/lib/metadata-factory'
import { BASE_URL } from '@/lib/metadata-factory'

export async function generateMetadata(): Promise<Metadata> {
  return createPageMetadata({
    title: 'Multifamily Investing Guide 2026 | Start Investing in Apartments',
    description: 'Complete guide to multifamily investing. Learn how to evaluate deals, calculate cap rates, analyze cash flow, and find profitable properties in Capital Region and Florida.',
    path: '/multifamily-investment-guide',
    ogImage: '/saad.png',
  })
}

// HowTo Schema for the guide
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Start Multifamily Investing",
  "description": "A complete 8-step guide to multifamily real estate investing, from education to deal analysis to property acquisition.",
  "image": `${BASE_URL}/saad.png`,
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Understand Core Metrics",
      "text": "Learn cap rate, cash flow, and appreciation—the three metrics that determine deal quality. Cap rate shows earning power relative to price. Cash flow shows money in your pocket monthly. Appreciation builds long-term wealth."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Identify Your Investment Goal",
      "text": "Decide if you want monthly cash flow, long-term appreciation, or both. Different markets and property types serve different goals."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Research Target Markets",
      "text": "Focus on stable markets with strong fundamentals: job growth, affordable entry prices, healthy rental demand, and favorable tax environments."
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Build Your Investment Strategy",
      "text": "Define your target property type (2-5 units, 6-10 units, etc.), financing approach (cash, conventional, portfolio loans), and exit timeline."
    },
    {
      "@type": "HowToStep",
      "position": 5,
      "name": "Evaluate Potential Deals",
      "text": "Use the multifamily deal evaluation framework: analyze NOI, calculate cap rate, project cash flow, and assess risk factors."
    },
    {
      "@type": "HowToStep",
      "position": 6,
      "name": "Perform Due Diligence",
      "text": "Inspect the property, verify rental income, analyze expense history, review tenant leases, and confirm market rents."
    },
    {
      "@type": "HowToStep",
      "position": 7,
      "name": "Secure Financing",
      "text": "Work with lenders to structure favorable terms. Options include conventional loans, portfolio loans, FHA financing, and private capital."
    },
    {
      "@type": "HowToStep",
      "position": 8,
      "name": "Close and Manage",
      "text": "Complete the transaction, establish property management systems, and execute your business plan for consistent returns."
    }
  ],
  "author": {
    "@type": "Person",
    "name": "Saad Tai",
    "url": `${BASE_URL}/about`,
    "jobTitle": "Multifamily Investment Advisor",
    "license": {
      "@type": "License",
      "licenseNumber": "10401373295"
    }
  }
}

// Learning Resource Schema
const learningResourceSchema = {
  "@context": "https://schema.org",
  "@type": "LearningResource",
  "name": "Multifamily Investing Guide 2026",
  "description": "Complete beginner's guide to multifamily real estate investing with actionable frameworks, deal analysis methods, and market insights.",
  "url": `${BASE_URL}/multifamily-investment-guide`,
  "author": {
    "@type": "Person",
    "name": "Saad Tai",
    "url": `${BASE_URL}/about`,
  },
  "educationalLevel": "Beginner to Intermediate",
  "inLanguage": "en-US",
  "learningResourceType": "Guide",
  "keywords": "multifamily investing, real estate investing, cap rates, cash flow, property analysis, small investor guide"
}

export default function MultifamilyGuide() {
  return (
    <>
      <SchemaRenderer schema={howToSchema} />
      <SchemaRenderer schema={learningResourceSchema} />

      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative px-6 py-24 md:px-12 md:py-32 max-w-5xl mx-auto">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              The Complete Guide to Multifamily Investing
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              Learn how to evaluate deals, analyze market fundamentals, and build a profitable multifamily portfolio. Whether you're buying your first 2-unit duplex or scaling to larger properties, this guide covers everything you need to know.
            </p>
            <div className="pt-4 border-t border-gray-700">
              <p className="text-gray-400 text-sm">
                <strong>By Saad Tai</strong> | Multifamily Investment Advisor
              </p>
              <p className="text-gray-500 text-xs mt-1">
                NY License #10401373295 | FL License #SL3651394
              </p>
            </div>
          </div>
        </section>

        {/* Quick Answer Box */}
        <section className="px-6 md:px-12 max-w-5xl mx-auto pb-12">
          <div className="bg-blue-900 bg-opacity-30 border border-blue-400 border-opacity-30 rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-300">Quick Answer: What Is Multifamily Investing?</h2>
            <p className="text-gray-100 leading-relaxed">
              Multifamily investing means buying properties with 2+ rental units (duplexes, triplexes, 4-plexes, apartment buildings) to generate monthly cash flow and long-term wealth. It's the fastest path to scale your real estate portfolio because you're collecting multiple rents from one property. Investors use three metrics to evaluate deals: <strong>cap rate</strong> (earning power), <strong>cash flow</strong> (monthly money), and <strong>appreciation</strong> (long-term equity growth).
            </p>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="px-6 md:px-12 max-w-5xl mx-auto pb-16">
          <h2 className="text-2xl font-semibold mb-8">In This Guide</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "1. Three Essential Metrics", link: "#metrics" },
              { title: "2. Market Selection Framework", link: "#markets" },
              { title: "3. Deal Evaluation Process", link: "#evaluation" },
              { title: "4. Cash Flow Analysis", link: "#cashflow" },
              { title: "5. Capital Region vs Other Markets", link: "#markets-compare" },
              { title: "6. Financing Strategies", link: "#financing" },
              { title: "7. Due Diligence Checklist", link: "#duediligence" },
              { title: "8. Your First Deal Walkthrough", link: "#firstdeal" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                className="p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition text-gray-100 hover:text-white"
              >
                {item.title}
              </a>
            ))}
          </div>
        </section>

        {/* Section 1: Metrics */}
        <section id="metrics" className="px-6 md:px-12 max-w-5xl mx-auto pb-16 border-t border-gray-700 pt-16">
          <h2 className="text-3xl font-bold mb-8">1. Three Essential Metrics Every Investor Must Know</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-blue-300 mb-4">Cap Rate (Capitalization Rate)</h3>
              <div className="bg-gray-800 p-6 rounded-lg mb-4">
                <p className="font-mono text-gray-200 mb-2">Formula: Net Operating Income ÷ Purchase Price = Cap Rate</p>
                <p className="text-gray-300">
                  <strong>What it means:</strong> Cap rate shows a property's earning power independent of how you finance it. A 8.5% cap rate property generates $8,500 annually per $100,000 invested (before financing costs).
                </p>
              </div>
              <div className="bg-blue-900 bg-opacity-20 p-4 rounded border border-blue-500 border-opacity-20">
                <p className="text-gray-100"><strong>Example:</strong> A property with $40,000 NOI on a $500,000 purchase = 8.0% cap rate</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-300 mb-4">Cash Flow</h3>
              <div className="bg-gray-800 p-6 rounded-lg mb-4">
                <p className="font-mono text-gray-200 mb-2">Formula: Gross Income − Operating Expenses − Mortgage = Monthly Cash Flow</p>
                <p className="text-gray-300">
                  <strong>What it means:</strong> Cash flow is the actual money in your pocket each month after all expenses AND the mortgage payment. This is your personal income from the property.
                </p>
              </div>
              <div className="bg-blue-900 bg-opacity-20 p-4 rounded border border-blue-500 border-opacity-20">
                <p className="text-gray-100"><strong>Example:</strong> $5,000 rent − $1,500 expenses − $2,000 mortgage = $1,500/month cash flow</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-300 mb-4">Appreciation</h3>
              <div className="bg-gray-800 p-6 rounded-lg mb-4">
                <p className="font-mono text-gray-200 mb-2">Formula: (Future Value − Purchase Price) ÷ Purchase Price = Appreciation Rate</p>
                <p className="text-gray-300">
                  <strong>What it means:</strong> Appreciation is the property value increase over time. It builds equity without you doing anything—the market does the work for you.
                </p>
              </div>
              <div className="bg-blue-900 bg-opacity-20 p-4 rounded border border-blue-500 border-opacity-20">
                <p className="text-gray-100"><strong>Example:</strong> Buy for $300,000 in 2024, worth $318,000 in 2026 = 6% appreciation</p>
              </div>
            </div>

            <div className="bg-green-900 bg-opacity-20 p-6 rounded border border-green-500 border-opacity-20">
              <h4 className="font-semibold text-green-300 mb-2">💡 Pro Tip</h4>
              <p className="text-gray-200">
                All three metrics matter. Cap rate shows deal quality. Cash flow shows monthly returns. Appreciation builds long-term wealth. The best deals excel in all three.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Market Selection */}
        <section id="markets" className="px-6 md:px-12 max-w-5xl mx-auto pb-16 border-t border-gray-700 pt-16">
          <h2 className="text-3xl font-bold mb-8">2. How to Select the Right Market</h2>

          <p className="text-gray-300 mb-8 text-lg leading-relaxed">
            Market selection is the most important decision you'll make. A mediocre deal in a great market beats a great deal in a mediocre market. Look for these fundamentals:
          </p>

          <div className="space-y-6">
            {[
              {
                title: "Job Growth & Economic Stability",
                desc: "Markets with growing employers attract renters. Stable jobs mean stable rental income. Target 2-3% annual job growth minimum."
              },
              {
                title: "Affordable Entry Prices",
                desc: "Lower median prices = lower down payment requirements. Capital Region ($250K-$300K) requires $50K-$75K down vs. national median ($400K+) needing $80K-$100K."
              },
              {
                title: "Strong Rental Demand",
                desc: "Healthy markets have 5%+ vacancy rates, stable or rising rents, and consistent tenant demand. Avoid declining rental markets."
              },
              {
                title: "Cap Rate Benchmarks",
                desc: "Higher cap rates mean better returns. Capital Region offers 8.2-8.9% vs. national average of 6-7%. Every 1% matters—an 8% property outperforms a 6% property by $20K annually on a $1M property."
              },
              {
                title: "Favorable Tax Environment",
                desc: "Property taxes, income taxes, and capital gains taxes vary significantly. Lower tax states (FL: 0.71% property tax) vs. higher tax areas (Schenectady: 13.37% city rate)."
              },
            ].map((item, i) => (
              <div key={i} className="bg-gray-800 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-300 mb-2">{item.title}</h4>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Deal Evaluation */}
        <section id="evaluation" className="px-6 md:px-12 max-w-5xl mx-auto pb-16 border-t border-gray-700 pt-16">
          <h2 className="text-3xl font-bold mb-8">3. The Multifamily Deal Evaluation Framework</h2>

          <p className="text-gray-300 mb-8">
            Use this step-by-step process to evaluate ANY multifamily deal:
          </p>

          <div className="space-y-6">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-blue-300 mb-4">Step 1: Verify Income Numbers</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex gap-2"><span className="text-blue-400">•</span> Get 12-24 months of actual rent rolls</li>
                <li className="flex gap-2"><span className="text-blue-400">•</span> Confirm rents match market rates via Zillow/Apartments.com</li>
                <li className="flex gap-2"><span className="text-blue-400">•</span> Check lease terms (how long until rent increase needed?)</li>
                <li className="flex gap-2"><span className="text-blue-400">•</span> Verify occupancy—be skeptical of 100% claims</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-blue-300 mb-4">Step 2: Analyze Expenses</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex gap-2"><span className="text-blue-400">•</span> Review 3 years of tax returns and P&Ls</li>
                <li className="flex gap-2"><span className="text-blue-400">•</span> Understand property tax obligations by jurisdiction</li>
                <li className="flex gap-2"><span className="text-blue-400">•</span> Factor in maintenance reserves (5-10% of gross income)</li>
                <li className="flex gap-2"><span className="text-blue-400">•</span> Confirm utilities, insurance, and management costs</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-blue-300 mb-4">Step 3: Calculate NOI & Cap Rate</h4>
              <div className="font-mono bg-black p-4 rounded mt-3 text-gray-300 text-sm">
                <div>Gross Income: $60,000</div>
                <div>− Operating Expenses: $18,000</div>
                <div className="border-t border-gray-700 mt-2 pt-2">= NOI: $42,000</div>
                <div className="mt-2">÷ Purchase Price: $500,000</div>
                <div className="border-t border-gray-700 mt-2 pt-2">= Cap Rate: 8.4%</div>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-blue-300 mb-4">Step 4: Calculate Cash Flow</h4>
              <div className="font-mono bg-black p-4 rounded mt-3 text-gray-300 text-sm">
                <div>Monthly Gross Income: $5,000</div>
                <div>− Monthly Operating Expenses: $1,500</div>
                <div>− Monthly Mortgage Payment: $2,300</div>
                <div className="border-t border-gray-700 mt-2 pt-2">= Monthly Cash Flow: $1,200</div>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-blue-300 mb-4">Step 5: Risk Assessment</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex gap-2"><span className="text-blue-400">•</span> Physical condition (foundation, roof, systems)</li>
                <li className="flex gap-2"><span className="text-blue-400">•</span> Tenant quality & lease terms</li>
                <li className="flex gap-2"><span className="text-blue-400">•</span> Market dynamics (growing, stable, declining?)</li>
                <li className="flex gap-2"><span className="text-blue-400">•</span> Financing risk (are rates sustainable?)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4: Capital Region Focus */}
        <section id="markets-compare" className="px-6 md:px-12 max-w-5xl mx-auto pb-16 border-t border-gray-700 pt-16">
          <h2 className="text-3xl font-bold mb-8">4. Capital Region vs National Markets: Why It Works</h2>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm text-gray-300">
              <thead className="border-b border-gray-600">
                <tr className="text-left">
                  <th className="pb-4 font-semibold text-white">Metric</th>
                  <th className="pb-4 font-semibold text-white">Capital Region</th>
                  <th className="pb-4 font-semibold text-white">US Average</th>
                  <th className="pb-4 font-semibold text-blue-300">Capital Region Edge</th>
                </tr>
              </thead>
              <tbody className="space-y-2">
                {[
                  { metric: "Median Property Price", capital: "$285K", us: "$400K+", edge: "29% lower entry cost" },
                  { metric: "Cap Rates", capital: "8.2-8.9%", us: "6-7%", edge: "1.5-2.9% higher returns" },
                  { metric: "Annual Appreciation", capital: "4-5%", us: "2-3%", edge: "2x faster equity growth" },
                  { metric: "Rent Growth", capital: "4-5% YoY", us: "1-2% YoY", edge: "Strong tenant demand" },
                  { metric: "Property Tax (Albany)", capital: "$2.73/$1K", us: "$4-5/$1K avg", edge: "Lower annual costs" },
                  { metric: "Entry Down Payment (20%)", capital: "$57K", us: "$80K+", edge: "Lower capital required" },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-gray-800">
                    <td className="py-3">{row.metric}</td>
                    <td className="py-3 font-semibold">{row.capital}</td>
                    <td className="py-3 text-gray-400">{row.us}</td>
                    <td className="py-3 text-green-400 font-semibold">{row.edge}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <a href="/albany-multifamily-investing" className="bg-gray-800 hover:bg-gray-750 p-6 rounded-lg transition">
              <h4 className="text-lg font-semibold text-blue-300 mb-3">Albany</h4>
              <p className="text-sm text-gray-300 mb-4">State capital energy. Urban walkability. Government jobs. $1,550/mo 2BR rent. 8.2% cap rate.</p>
              <p className="text-xs text-blue-400 font-semibold">Best for: Balanced growth + cash flow →</p>
            </a>
            <a href="/schenectady-multifamily-investing" className="bg-gray-800 hover:bg-gray-750 p-6 rounded-lg transition">
              <h4 className="text-lg font-semibold text-blue-300 mb-3">Schenectady</h4>
              <p className="text-sm text-gray-300 mb-4">Highest cap rates (8.9%). Lowest prices ($279K). Revitalization momentum. $1,471-$1,695/mo 2BR rent.</p>
              <p className="text-xs text-blue-400 font-semibold">Best for: Maximum cash flow →</p>
            </a>
            <a href="/troy-multifamily-investing" className="bg-gray-800 hover:bg-gray-750 p-6 rounded-lg transition">
              <h4 className="text-lg font-semibold text-blue-300 mb-3">Troy</h4>
              <p className="text-sm text-gray-300 mb-4">Arts & culture scene. Walk Score 72. Affordable ($275K). $1,350-$1,550/mo 2BR rent.</p>
              <p className="text-xs text-blue-400 font-semibold">Best for: Walkable urban investing →</p>
            </a>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 md:px-12 max-w-5xl mx-auto py-16 border-t border-gray-700 mt-16">
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Find Your First Multifamily Deal?</h2>
            <p className="text-gray-200 mb-6">
              Get a personalized analysis of your target market and discover off-market opportunities in Capital Region and Florida.
            </p>
            <a
              href="/#contact"
              className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Schedule a Strategy Call
            </a>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-6 md:px-12 max-w-5xl mx-auto py-16 border-t border-gray-700">
          <h2 className="text-3xl font-bold mb-12">Frequently Asked Questions</h2>

          <div className="space-y-6">
            {[
              {
                q: "How much money do I need to start?",
                a: "With 20% down on a $250K property, you need $50K. Many investors start with conventional financing or FHA loans that require 3.5% down ($8,750). The question isn't how much you have, but what returns you need to achieve your goals."
              },
              {
                q: "Should I focus on cash flow or appreciation?",
                a: "Both. Cash flow covers your risk today (you get paid monthly). Appreciation builds long-term wealth. The best portfolios generate both. Start with markets offering 8%+ cap rates (strong cash flow), then watch appreciation accelerate over 5-10 years."
              },
              {
                q: "What's a good cap rate to target?",
                a: "8%+ is excellent in today's market. 7-8% is good. Below 6% is overpriced unless you have a specific value-add strategy. Capital Region's 8.2-8.9% cap rates are significantly better than national averages of 6-7%."
              },
              {
                q: "How do I find off-market deals?",
                a: "Build relationships with brokers, estate attorneys, and property managers. Create a 'Dear Seller' letter program. Network with other investors. Partner with wholesalers. Most deals aren't on MLS—they're traded among investors who've done the relationship work."
              },
              {
                q: "What financing options exist?",
                a: "Conventional loans (20-25% down), FHA loans (3.5% down), portfolio loans (better terms for investors), private money, and partnerships. Each has different requirements, rates, and terms. The best option depends on your property, credit, and timeline."
              },
            ].map((item, i) => (
              <div key={i} className="border-b border-gray-700 pb-6 last:border-0">
                <h3 className="text-lg font-semibold text-blue-300 mb-3">{item.q}</h3>
                <p className="text-gray-300">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Market-Specific Resources */}
        <section className="px-6 md:px-12 max-w-5xl mx-auto py-16 border-t border-gray-700">
          <h2 className="text-3xl font-bold mb-4">Dive Deeper: Market-Specific Guides</h2>
          <p className="text-gray-300 mb-8">
            Apply these fundamentals to specific Capital Region markets. Each guide includes market data, neighborhood analysis, property examples, and investment frameworks.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <a href="/albany-multifamily-investing" className="bg-gray-800 hover:bg-gray-750 p-6 rounded-lg transition border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-blue-300 mb-3">Albany NY Market Guide</h3>
              <p className="text-gray-300 mb-4">Complete analysis of Albany's multifamily market: 8.2% cap rates, $1,550 median rent, walkable downtown. Best for balanced growth and steady appreciation.</p>
              <ul className="text-sm text-gray-400 space-y-1 mb-4">
                <li>✓ Neighborhood-by-neighborhood breakdown</li>
                <li>✓ Real property investment example</li>
                <li>✓ State government job opportunities</li>
                <li>✓ FAQ with market-specific answers</li>
              </ul>
              <p className="text-xs text-blue-400 font-semibold">Read Albany Guide →</p>
            </a>

            <a href="/schenectady-multifamily-investing" className="bg-gray-800 hover:bg-gray-750 p-6 rounded-lg transition border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-blue-300 mb-3">Schenectady NY Market Guide</h3>
              <p className="text-gray-300 mb-4">Best cash flow market in the Capital Region: 8.9% cap rates, $279K median price, $1,583 median rent, +9.8% appreciation. Strong revitalization momentum.</p>
              <ul className="text-sm text-gray-400 space-y-1 mb-4">
                <li>✓ Stockade district & downtown analysis</li>
                <li>✓ Revitalization drivers (Proctors, Rivers Casino)</li>
                <li>✓ Rental investment framework</li>
                <li>✓ Property tax breakdown vs Albany & Niskayuna</li>
              </ul>
              <p className="text-xs text-blue-400 font-semibold">Read Schenectady Guide →</p>
            </a>

            <a href="/troy-multifamily-investing" className="bg-gray-800 hover:bg-gray-750 p-6 rounded-lg transition border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-blue-300 mb-3">Troy NY Market Guide</h3>
              <p className="text-gray-300 mb-4">Emerging arts & culture hub: 6.1% gross yield, $275K median price, Walk Score 72. Perfect for walkable urban investing with growth potential.</p>
              <ul className="text-sm text-gray-400 space-y-1 mb-4">
                <li>✓ Downtown revitalization opportunity</li>
                <li>✓ Young professional demographics</li>
                <li>✓ Arts scene & cultural momentum</li>
                <li>✓ Waterfront investment potential</li>
              </ul>
              <p className="text-xs text-blue-400 font-semibold">Read Troy Guide →</p>
            </a>

            <a href="/cap-rate-guide" className="bg-gray-800 hover:bg-gray-750 p-6 rounded-lg transition border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-blue-300 mb-3">Cap Rate Mastery Guide</h3>
              <p className="text-gray-300 mb-4">Deep dive on the #1 metric for real estate investing. Learn how to calculate, interpret, and use cap rates to evaluate deals accurately.</p>
              <ul className="text-sm text-gray-400 space-y-1 mb-4">
                <li>✓ Step-by-step cap rate calculation</li>
                <li>✓ Capital Region benchmarks</li>
                <li>✓ Common mistakes & pitfalls</li>
                <li>✓ Market-specific comparisons</li>
              </ul>
              <p className="text-xs text-blue-400 font-semibold">Read Cap Rate Guide →</p>
            </a>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="px-6 md:px-12 max-w-5xl mx-auto py-16 text-center border-t border-gray-700">
          <h2 className="text-2xl font-bold mb-4">Your Next Step</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            You have the framework. Now apply it to real deals. Use the calculator to analyze properties, then let's discuss your investment goals.
          </p>
          <a
            href="/calculator"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition mr-4 mb-4"
          >
            Use Investment Calculator
          </a>
          <a
            href="/#contact"
            className="inline-block bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold transition"
          >
            Schedule Strategy Call
          </a>
        </section>
      </div>
    </>
  )
}
