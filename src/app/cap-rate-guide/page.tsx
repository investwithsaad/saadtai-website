import type { Metadata } from 'next'
import { SchemaRenderer } from '@/components/SchemaRenderer'
import { createPageMetadata } from '@/lib/metadata-factory'
import { BASE_URL } from '@/lib/metadata-factory'

export async function generateMetadata(): Promise<Metadata> {
  return createPageMetadata({
    title: 'Cap Rate Guide: Calculate, Compare & Analyze Real Estate Returns',
    description: 'Complete cap rate explanation with formulas, benchmarks, and how to use it to evaluate multifamily investments. Includes real examples and market comparisons.',
    path: '/cap-rate-guide',
    ogImage: '/saad.png',
  })
}

// HowTo Schema for cap rate calculation
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

// FAQPage Schema
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

export default function CapRateGuide() {
  return (
    <>
      <SchemaRenderer schema={howToSchema} />
      <SchemaRenderer schema={faqSchema} />

      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
        {/* Hero */}
        <section className="relative px-6 py-24 md:px-12 md:py-32 max-w-5xl mx-auto">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              The Complete Cap Rate Guide
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Cap rate is the single most important metric for comparing investment properties. Learn how to calculate it, interpret it, and use it to identify undervalued deals.
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

        {/* Quick Answer */}
        <section className="px-6 md:px-12 max-w-5xl mx-auto pb-12">
          <div className="bg-blue-900 bg-opacity-30 border border-blue-400 border-opacity-30 rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-300">What Is Cap Rate?</h2>
            <p className="text-gray-100 leading-relaxed mb-4">
              <strong>Cap rate</strong> (capitalization rate) measures how much annual income a property generates relative to its purchase price, independent of how you finance it. It's your most powerful tool for comparing deals fairly across different markets and property types.
            </p>
            <div className="font-mono bg-black p-4 rounded text-gray-300">
              <div className="text-green-400 font-bold">Formula: Cap Rate = NOI ÷ Purchase Price</div>
              <div className="mt-3 text-gray-400">
                <div>Example: $40,000 NOI ÷ $500,000 Price = 8.0% Cap Rate</div>
                <div className="text-xs mt-2 text-gray-500">(This property returns 8% annually before financing)</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Cap Rate Matters */}
        <section className="px-6 md:px-12 max-w-5xl mx-auto pb-16 border-t border-gray-700 pt-16">
          <h2 className="text-3xl font-bold mb-8">Why Cap Rate Is Your Most Important Metric</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-300 mb-4">✓ Compares Apples to Apples</h3>
              <p className="text-gray-300">
                A $300K property with 8% cap rate generates the same $24,000 annually as a $600K property with 4% cap rate. Cap rate neutralizes price differences.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-300 mb-4">✓ Ignores Financing</h3>
              <p className="text-gray-300">
                Two identical properties might have different cash flows if financed differently. Cap rate shows the true earning power regardless of down payment or interest rates.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-300 mb-4">✓ Shows Market Value</h3>
              <p className="text-gray-300">
                If market cap rates are 8% but this property is priced for 6%, it's overpriced. If priced for 10%, it's undervalued or has risk factors.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-300 mb-4">✓ Predicts Returns</h3>
              <p className="text-gray-300">
                Higher cap rates typically predict higher annual returns (more income relative to price). Every 1% matters—an 8% property outperforms a 6% property by $20K/year on a $1M property.
              </p>
            </div>
          </div>
        </section>

        {/* How to Calculate */}
        <section className="px-6 md:px-12 max-w-5xl mx-auto pb-16 border-t border-gray-700 pt-16">
          <h2 className="text-3xl font-bold mb-8">How to Calculate Cap Rate (Step-by-Step)</h2>

          <div className="space-y-8">
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-300 mb-6">Step 1: Calculate Gross Annual Income</h3>
              <div className="font-mono bg-black p-4 rounded mb-4 text-gray-300">
                <div>Unit 1 Rent: $1,200/month × 12 = $14,400</div>
                <div>Unit 2 Rent: $1,200/month × 12 = $14,400</div>
                <div>Unit 3 Rent: $1,300/month × 12 = $15,600</div>
                <div className="border-t border-gray-600 mt-3 pt-3">
                  <div className="text-green-400 font-bold">Gross Income: $44,400/year</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                💡 Tip: Use 12-month averages, not projected rents. Be conservative with occupancy assumptions.
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-300 mb-6">Step 2: Subtract Operating Expenses</h3>
              <div className="font-mono bg-black p-4 rounded mb-4 text-gray-300">
                <div>Property Tax: $3,600</div>
                <div>Insurance: $1,800</div>
                <div>Maintenance/Repairs: $3,000</div>
                <div>Property Management: $4,440 (10% of income)</div>
                <div>Utilities (owner-paid): $1,200</div>
                <div>Vacancy Reserve (5%): $2,220</div>
                <div className="border-t border-gray-600 mt-3 pt-3">
                  <div className="text-red-400 font-bold">Total Expenses: $16,260/year</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                💡 Tip: Use historical actuals from the seller. Don't estimate—get 3 years of P&Ls.
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-300 mb-6">Step 3: Calculate NOI</h3>
              <div className="font-mono bg-black p-4 rounded mb-4 text-gray-300">
                <div>Gross Income: $44,400</div>
                <div className="text-red-400">− Operating Expenses: $16,260</div>
                <div className="border-t border-gray-600 mt-3 pt-3">
                  <div className="text-green-400 font-bold">= NOI: $28,140/year</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                💡 Important: NOI excludes mortgage payments. This is income available to pay debt service or distribute as profit.
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-300 mb-6">Step 4: Divide NOI by Purchase Price</h3>
              <div className="font-mono bg-black p-4 rounded mb-4 text-gray-300">
                <div>NOI: $28,140</div>
                <div className="text-blue-400">÷ Purchase Price: $350,000</div>
                <div className="border-t border-gray-600 mt-3 pt-3">
                  <div className="text-green-400 font-bold">= Cap Rate: 8.04%</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                This property earns 8.04% annually on your investment, independent of how you finance it.
              </p>
            </div>
          </div>
        </section>

        {/* Cap Rate Benchmarks */}
        <section className="px-6 md:px-12 max-w-5xl mx-auto pb-16 border-t border-gray-700 pt-16">
          <h2 className="text-3xl font-bold mb-8">Cap Rate Benchmarks: What's Good?</h2>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm text-gray-300">
              <thead className="border-b border-gray-600">
                <tr className="text-left">
                  <th className="pb-4 font-semibold text-white">Cap Rate Range</th>
                  <th className="pb-4 font-semibold text-white">Rating</th>
                  <th className="pb-4 font-semibold text-white">What It Means</th>
                </tr>
              </thead>
              <tbody className="space-y-2">
                {[
                  { range: "9%+", rating: "Excellent", meaning: "Strong returns, possibly lower price/higher risk, or emerging market" },
                  { range: "8-9%", rating: "Very Good", meaning: "Competitive returns, typical for Capital Region investment properties" },
                  { range: "7-8%", rating: "Good", meaning: "Solid returns, often in appreciating markets or quality properties" },
                  { range: "6-7%", rating: "Average", meaning: "Market rate, standard in many US markets, limited margin for error" },
                  { range: "5-6%", rating: "Below Average", meaning: "Lower returns, often in premium markets, rely on appreciation" },
                  { range: "<5%", rating: "Overpriced", meaning: "Limited income returns, speculation-driven, higher risk" },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-gray-800">
                    <td className="py-3 font-semibold text-white">{row.range}</td>
                    <td className="py-3">{row.rating}</td>
                    <td className="py-3">{row.meaning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-green-900 bg-opacity-20 border border-green-500 border-opacity-20 p-6 rounded">
            <h3 className="text-lg font-semibold text-green-300 mb-3">Capital Region Advantage</h3>
            <p className="text-gray-200">
              Capital Region properties typically offer 8.2-8.9% cap rates compared to national averages of 6-7%. This means a $300K property here returns $1,800-2,700/month MORE than the same price in most US markets. That's the power of location selection.
            </p>
          </div>
        </section>

        {/* Cap Rate vs Cash Flow */}
        <section className="px-6 md:px-12 max-w-5xl mx-auto pb-16 border-t border-gray-700 pt-16">
          <h2 className="text-3xl font-bold mb-8">Cap Rate vs Cash Flow: Understanding the Difference</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-300 mb-4">Cap Rate</h3>
              <div className="font-mono text-gray-300 text-sm mb-4 bg-black p-3 rounded">
                NOI ÷ Price
              </div>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>✓ Independent of financing</li>
                <li>✓ Shows true earning power</li>
                <li>✓ Compares deals fairly</li>
                <li>✓ Same for all buyers</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-300 mb-4">Cash Flow</h3>
              <div className="font-mono text-gray-300 text-sm mb-4 bg-black p-3 rounded">
                (Income - Expenses - Mortgage)
              </div>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>✓ Depends on financing</li>
                <li>✓ Money in your pocket</li>
                <li>✓ Varies by person/deal</li>
                <li>✓ Critical for operations</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-300 mb-4">Example: Same Property, Different Cash Flow</h3>
            <div className="space-y-4 text-gray-300">
              <div>
                <p className="font-semibold text-white mb-2">Property: $300K triplex with 9% cap rate ($27,000 NOI)</p>
                <div className="font-mono text-sm bg-black p-3 rounded">
                  <div className="text-green-400">Buyer A: 25% down ($75K)</div>
                  <div>Mortgage: $14,000/year</div>
                  <div className="text-yellow-400">Cash Flow: $13,000/year ($1,083/mo)</div>
                </div>
              </div>
              <div>
                <div className="font-mono text-sm bg-black p-3 rounded">
                  <div className="text-green-400">Buyer B: 50% down ($150K)</div>
                  <div>Mortgage: $7,000/year</div>
                  <div className="text-yellow-400">Cash Flow: $20,000/year ($1,667/mo)</div>
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Same property, same cap rate (9%), but different cash flows based on financing. This is why you need BOTH metrics.
            </p>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="px-6 md:px-12 max-w-5xl mx-auto pb-16 border-t border-gray-700 pt-16">
          <h2 className="text-3xl font-bold mb-8">5 Cap Rate Mistakes Investors Make</h2>

          <div className="space-y-6">
            {[
              {
                mistake: "Including the mortgage in NOI",
                problem: "This gives you cash flow, not cap rate. Cap rate excludes debt service.",
                fix: "Only subtract operating expenses (taxes, insurance, maintenance, management). Don't subtract mortgage."
              },
              {
                mistake: "Using projected rents instead of actual",
                problem: "Brokers often project 5% rent growth. Reality is often 2-3%. Your cap rate becomes fantasy.",
                fix: "Use 12-month actual rent rolls from the seller. Be conservative."
              },
              {
                mistake: "Comparing cap rates across different markets",
                problem: "8% cap rate in a declining market is different from 8% in an appreciating market.",
                fix: "Compare within market. Understand WHY cap rates differ—risk, growth, location."
              },
              {
                mistake: "Ignoring expense growth",
                problem: "Property taxes, insurance, and maintenance inflate 3-5% annually. Your 8% cap rate becomes 6% in 5 years.",
                fix: "Model expense growth. Use conservative assumptions. Leave room for surprises."
              },
              {
                mistake: "Chasing the highest cap rate without context",
                problem: "A 12% cap rate might mean higher risk (bad tenants, declining area, deferred maintenance).",
                fix: "Higher cap rate is good, but understand WHY it's high. Verify the property condition and market fundamentals."
              },
            ].map((item, i) => (
              <div key={i} className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-red-400 mb-3">❌ {item.mistake}</h3>
                <p className="text-gray-300 mb-2"><strong>Problem:</strong> {item.problem}</p>
                <p className="text-gray-400"><strong>Fix:</strong> {item.fix}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 md:px-12 max-w-5xl mx-auto pb-16 border-t border-gray-700 pt-16">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>

          <div className="space-y-6">
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
              },
              {
                q: "What's the relationship between cap rate and valuation?",
                a: "Cap rate is the inverse of price. Lower cap rates mean higher prices relative to income. If market cap rates are 8%, a property generating $40K NOI should sell for ~$500K (8% cap rate). If it's priced at $600K, it's only offering a 6.7% cap rate."
              },
            ].map((item, i) => (
              <div key={i} className="border-b border-gray-700 pb-6 last:border-0">
                <h3 className="text-lg font-semibold text-blue-300 mb-3">{item.q}</h3>
                <p className="text-gray-300">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Market Cap Rate Benchmarks */}
        <section className="px-6 md:px-12 max-w-5xl mx-auto py-16 border-t border-gray-700">
          <h2 className="text-3xl font-bold mb-6">Capital Region Cap Rate Benchmarks</h2>
          <p className="text-gray-300 mb-8">
            Use these market benchmarks to evaluate deals. If a property's cap rate is significantly above or below the market average, dig deeper to understand why.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gray-800 p-8 rounded-lg border-l-4 border-blue-500">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-blue-300">8.2%</h3>
                  <p className="text-gray-400">Average Cap Rate</p>
                </div>
                <a href="/albany-multifamily-investing" className="text-blue-400 hover:text-blue-300 text-sm font-semibold">Albany →</a>
              </div>
              <p className="text-sm text-gray-300 mb-4">Strong market with stable government employment. Lower entry prices ($285K median) support solid cap rates. Good for balanced investors.</p>
              <ul className="text-xs text-gray-400 space-y-1">
                <li>✓ Median price: $285K</li>
                <li>✓ 2BR rent: $1,550/month</li>
                <li>✓ Appreciation: +5.4% YoY</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg border-l-4 border-green-500">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-green-300">8.9%</h3>
                  <p className="text-gray-400">Average Cap Rate</p>
                </div>
                <a href="/schenectady-multifamily-investing" className="text-blue-400 hover:text-blue-300 text-sm font-semibold">Schenectady →</a>
              </div>
              <p className="text-sm text-gray-300 mb-4">Highest cap rates in the region. Lowest entry prices ($279K median) create superior cash flow opportunities. Revitalization adds growth upside.</p>
              <ul className="text-xs text-gray-400 space-y-1">
                <li>✓ Median price: $279K</li>
                <li>✓ 2BR rent: $1,471-$1,695/month</li>
                <li>✓ Appreciation: +9.8% YoY (highest)</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg border-l-4 border-blue-500">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-blue-300">6.1%</h3>
                  <p className="text-gray-400">Average Cap Rate</p>
                </div>
                <a href="/troy-multifamily-investing" className="text-blue-400 hover:text-blue-300 text-sm font-semibold">Troy →</a>
              </div>
              <p className="text-sm text-gray-300 mb-4">Emerging market with cultural momentum. Lower cap rates reflect growing demand from young professionals. Better for appreciation-focused investors.</p>
              <ul className="text-xs text-gray-400 space-y-1">
                <li>✓ Median price: $275K</li>
                <li>✓ 2BR rent: $1,350-$1,550/month</li>
                <li>✓ Appreciation: +5.2% YoY</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg border-l-4 border-purple-500">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-purple-300">6.0%</h3>
                  <p className="text-gray-400">Average Cap Rate</p>
                </div>
                <span className="text-gray-400 text-sm font-semibold">Niskayuna</span>
              </div>
              <p className="text-sm text-gray-300 mb-4">Highest-demand market with top-rated schools (A grade). Premium prices ($387K median) reflect school district value. Best for families, worst for cash flow.</p>
              <ul className="text-xs text-gray-400 space-y-1">
                <li>✓ Median price: $387K</li>
                <li>✓ 2BR rent: $1,918/month</li>
                <li>✓ Appreciation: +4.7% YoY</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-900 bg-opacity-30 border border-blue-400 border-opacity-30 rounded-lg p-6 mb-12">
            <h3 className="text-lg font-semibold text-blue-300 mb-3">How to Use These Benchmarks</h3>
            <p className="text-gray-300">
              If a property is offering a cap rate significantly above its market benchmark (e.g., 12% in Schenectady's 8.9% market), investigate why. Higher cap rate might mean: undervalued opportunity, property needs work, bad tenants, or declining neighborhood. Always verify the assumptions before committing capital.
            </p>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="px-6 md:px-12 max-w-5xl mx-auto py-16 text-center border-t border-gray-700">
          <h2 className="text-2xl font-bold mb-4">Apply This to Real Deals</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Now that you understand cap rates, let's find properties that offer 8%+ returns in the Capital Region. Explore market-specific guides to find your best opportunities.
          </p>
          <a
            href="/multifamily-investment-guide"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition mr-4 mb-4"
          >
            Read Multifamily Guide
          </a>
          <a
            href="/#contact"
            className="inline-block bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold transition"
          >
            Analyze a Deal
          </a>
        </section>
      </div>
    </>
  )
}
