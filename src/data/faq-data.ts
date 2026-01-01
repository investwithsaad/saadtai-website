/**
 * INVEST WITH SAAD - MULTIFAMILY INVESTOR FAQ DATA
 *
 * Frequently asked questions for small multifamily investors
 * 25 High-intent questions covering buying, selling, strategy, and portfolio management
 * Last Updated: 2025-12-31
 */

import { FAQ, FAQCategory } from '@/types/faq'

// ============================================================================
// FAQ CATEGORIES - INVESTOR FOCUSED
// ============================================================================

export const faqCategories: FAQCategory[] = [
  {
    id: 'buying-multifamily',
    name: 'Buying Multifamily',
    description: 'Evaluating deals, underwriting, financing, and closing on 2-4 unit properties.'
  },
  {
    id: 'selling-multifamily',
    name: 'Selling & Exit Strategy',
    description: 'Timing exits, 1031 exchanges, portfolio simplification, and maximizing proceeds.'
  },
  {
    id: 'investor-strategy',
    name: 'Investor Strategy',
    description: 'Portfolio scaling, market timing, specialist guidance, and wealth building.'
  },
  {
    id: 'investor-network',
    name: 'Investor Network',
    description: 'Deal sourcing, off-market opportunities, and investor community access.'
  },
  {
    id: 'calculator-tools',
    name: 'Analysis & Tools',
    description: 'Using the investment calculator, comparing properties, and financial metrics.'
  }
]

// ============================================================================
// MULTIFAMILY INVESTOR & PORTFOLIO STRATEGY FAQs
// ============================================================================

export const multifamilyInvestorFAQs: FAQ[] = [
  // BUYING QUESTIONS
  {
    id: 'realistic-cap-rate-capital-region',
    q: 'What\'s a realistic cap rate for a 2-unit vs 3-4 unit property in the Capital Region right now?',
    a: 'In today\'s market, most small multifamily properties trade in a mid- to high-single-digit cap rate range, depending on location, condition, and upside. 2-unit properties in stronger neighborhoods often trade closer to 6–7%; 3–4 unit properties may trade slightly higher, especially when there\'s operational upside. Cap rates meaningfully above market usually rely on aggressive rent assumptions or understated expenses—that\'s a red flag.'
  },
  {
    id: 'multifamily-deal-pencils-underwriting',
    q: 'How do I know if a multifamily deal actually pencils, or if I\'m missing something in the underwriting?',
    a: 'A deal pencils when it still works under conservative assumptions, not best-case scenarios. That means realistic expenses (taxes, insurance, maintenance, vacancy), room for unexpected repairs or rent softness, and cash flow that still makes sense after reserves. If the deal only works on paper or requires perfect execution, it\'s a warning sign.'
  },
  {
    id: 'closing-costs-multifamily-property',
    q: 'What should I expect to pay for inspections, appraisals, and title work on a 3-unit property?',
    a: 'Typical Capital Region ranges: Inspections $700–$1,200+, Appraisal $600–$900, Attorney/title/recording $2,000–$3,500. Most buyers should budget $3,500–$5,500 in upfront costs before closing.'
  },
  {
    id: 'offmarket-vs-mls-multifamily',
    q: 'Should I be looking for off-market deals, or are MLS properties equally solid in this market?',
    a: 'Public listings maximize exposure and pricing. Off-market sales trade some price for simplicity, speed, and privacy. The right approach depends on your priorities. Generally, off-market deals often offer better pricing and reduced competition, but MLS properties are equally solid depending on your criteria.'
  },
  {
    id: 'single-family-to-multifamily-transition',
    q: 'I\'m buying my first multifamily after single-family flips. What\'s different about how I should evaluate it?',
    a: 'Multifamily evaluation emphasizes tenant stability, rent roll quality, and operational metrics rather than exit strategies. Focus on normalized income, realistic expenses, and the quality of existing tenants. Strong tenants provide stability; operational risk is more important than appreciation upside.'
  },
  {
    id: 'multifamily-closing-timeline',
    q: 'How long should closing actually take from offer to keys in this market?',
    a: 'Conventional financing: 35–50 days. Cash or local portfolio lenders: 14–30 days. Tenant issues, inspections, or municipal items can extend timelines and should be planned for. Work backward from your desired close date and build in buffer.'
  },
  {
    id: 'financing-programs-2-4-unit',
    q: 'What financing programs actually work for 2-4 unit properties, and which lenders aren\'t just tire-kickers?',
    a: 'Most buyers rely on conventional agency loans and local lenders that regularly finance small multifamily. Conventional agency loans for 2–4 unit investment properties typically cap around 75% LTV. Local banks and credit unions can offer flexibility when the property and borrower profile are strong. Straightforward deal structures tend to move faster and close more reliably. The biggest risk isn\'t leverage—it\'s choosing a lender who can\'t execute.'
  },
  // SELLING QUESTIONS
  {
    id: 'selling-4unit-burned-out',
    q: 'How quickly can you get my property on the market, and what do you need from me?',
    a: 'I can typically bring a multifamily property to market within 3–4 days. For tenant-occupied properties, I\'ll need current leases, rent roll, tenant information, and most recent property tax bill. You\'ll also notify tenants professionally that the property will be listed. After that, I handle everything—pricing, positioning, marketing, buyer coordination, and execution—so the process stays smooth and controlled.'
  },
  {
    id: 'selling-with-difficult-tenant',
    q: 'I want to sell, but I have a difficult tenant situation. Can I still get market value?',
    a: 'Yes—but expectations matter. Clean, cooperative buildings attract the strongest pricing. Tenant issues typically narrow the buyer pool and impact value. The right strategy minimizes disruption while protecting your outcome. Transparent communication about tenant situations actually protects value more than hiding problems.'
  },
  {
    id: '1031-exchange-vs-reinvestment',
    q: 'Should I do a 1031 exchange, or just take my proceeds and reinvest?',
    a: 'A 1031 can make sense if you plan to stay invested, already know what you want to buy next, and are comfortable with strict timelines. In some cases, flexibility and optionality are more valuable than tax deferral. Evaluate your personal situation and goals before deciding.'
  },
  {
    id: 'offmarket-sale-premium',
    q: 'If I\'m selling off-market vs. listing publicly, how much does that realistically affect price?',
    a: 'Generally, public listings maximize exposure and pricing. Off-market sales trade some price for simplicity, speed, and privacy. The right approach depends on your priorities—do you want maximum exposure and top dollar, or do you value privacy and certainty of close?'
  },
  {
    id: 'property-worth-cap-rate',
    q: 'What\'s my property actually worth—and how do I know the number isn\'t inflated?',
    a: 'Real value comes from actual income (not projections), normalized expenses, and comparable closed sales (not asking prices). We analyze your property against recent sales, market rents, and realistic operating expenses. If the numbers only work on paper, the value isn\'t real.'
  },
  {
    id: 'unwinding-portfolio-strategy',
    q: 'I want to unwind multiple properties over the next few years. What\'s the smart way to do that?',
    a: 'Most owners benefit from selling weaker performers first, timing stronger assets strategically, and using proceeds to simplify or upgrade their portfolio. This is portfolio planning, not just selling real estate. We think through the sequence and tax implications across multiple transactions.'
  },
  {
    id: 'selling-two-properties-redeploy',
    q: 'I\'m planning to sell two properties at once to move into larger multifamily. What should I know?',
    a: 'Key considerations: coordinating timelines, ensuring clean documentation, and preparing for deeper lender review on the acquisition side. Preparation directly affects deal size and leverage you\'ll be approved for. We handle the coordination so both sales support your purchase strategy.'
  },
  // MAIN PAGE QUESTIONS
  {
    id: 'investor-specialist-vs-traditional-agent',
    q: 'What\'s the difference between working with a traditional agent vs. someone who specializes in multifamily investor deals?',
    a: 'Traditional agents focus on retail buyers. Multifamily specialists focus on numbers, risk, and long-term outcomes. That difference compounds over time. Specialists ask detailed questions about income and expenses, stress-test assumptions, and aren\'t afraid to say no to bad deals.'
  },
  {
    id: 'advisor-understands-investor-math',
    q: 'How do I know if my advisor actually understands investor math?',
    a: 'They should ask detailed questions about income and expenses, stress-test assumptions, and be willing to say no to bad deals. If every deal sounds great, something\'s wrong. Real advisors prioritize your long-term portfolio health over transaction volume.'
  },
  {
    id: 'scaling-portfolio-3-5-properties',
    q: 'What does "scaling a portfolio" actually look like for someone with a few multifamily properties?',
    a: 'Scaling usually means fewer headaches (not just more doors), better locations and cleaner assets, and improved financing flexibility. Growth without control isn\'t progress. It\'s about strategic consolidation and quality, not just quantity.'
  },
  {
    id: 'buying-selling-frequency-wealth-building',
    q: 'How often should I be buying or selling to build real long-term wealth?',
    a: 'Most disciplined investors buy selectively, sell strategically, and avoid constant churn. Consistency beats speed. Higher transaction frequency usually signals reactive decision-making rather than strategic planning.'
  },
  // VIP INVESTOR LIST QUESTIONS
  {
    id: 'investor-group-membership-benefits',
    q: 'What does it take to join an active investor group that actually shares real opportunities?',
    a: 'Real groups expect ability to execute, clear criteria, and active participation. If it feels passive, it usually is. Active groups require commitment—members who can close when they say they will and contribute to the network.'
  },
  {
    id: 'deals-per-month-sourcing',
    q: 'How many real deals can a serious investor source in this market each month?',
    a: 'Realistically: 1–3 strong opportunities per month, with 1 accepted deal every 1–2 months. Higher volume usually means lower quality. Focus on deal quality over quantity—most chasing volume end up with weaker positions.'
  },
  {
    id: 'missing-mls-only-strategy',
    q: 'What am I missing if I\'m only looking at publicly listed properties?',
    a: 'You miss less competitive situations, direct owner conversations, and properties that never hit the public market. Public listings build discipline. Experience expands options. Both channels matter, but off-market access gives you an edge.'
  },
  // CALCULATOR PAGE QUESTIONS
  {
    id: 'property-offer-decision-calculator',
    q: 'I found a property at $X with $Y in rent—should I make an offer or walk away?',
    a: 'If conservative assumptions don\'t leave room for error, it\'s a pass or a lower offer. Run the numbers with realistic vacancy (7%+), actual market rents, and normalized expenses. If it only works with perfect execution, walk away or adjust your offer.'
  },
  {
    id: 'dscr-requirements-3unit',
    q: 'What debt service coverage ratio do lenders actually require for a 3-unit property right now?',
    a: 'Most lenders require 1.2-1.25x DSCR for investor-occupied 2-4 unit properties in the current lending environment. This means your net operating income needs to be 20-25% higher than your mortgage payment to qualify.'
  },
  {
    id: 'cashoncash-return-2unit',
    q: 'What cash-on-cash return should I realistically expect from a 2-unit?',
    a: 'Turnkey properties: 5–8%. Value-add opportunities: higher with proper execution. Returns follow discipline. Don\'t chase yield without understanding risk—conservative underwriting protects your downside.'
  },
  {
    id: 'comparing-properties-same-cap-rate',
    q: 'How do I compare two properties with the same cap rate?',
    a: 'Look beyond the cap rate: tenant stability, expense predictability, capital needs, and exit flexibility. Same cap doesn\'t mean same risk. Two 6% cap rate properties can have vastly different risk profiles based on tenant quality and deferred maintenance.'
  },
  // ORIGINAL QUESTIONS
  {
    id: 'scaling-investor-timing-exit',
    q: 'How do I know when to exit a property and reinvest proceeds?',
    a: 'Key signals include slowing appreciation, compressed cap rates, and market timing that favors buyers over sellers.'
  },
  {
    id: 'accidental-owner-burnout',
    q: 'I\'ve inherited or accumulated properties and I\'m exhausted. How do I exit respectfully?',
    a: 'We understand. Here\'s our approach: (1) Analyze your real financial situation—sometimes continuing makes sense, sometimes a clean exit does. (2) If exiting, we structure fair tenant transitions with 60-90 days notice (not harsh evictions). (3) We position properties to investor buyers who value clean handoffs. (4) We handle all tenant communications professionally. Many burned-out owners report feeling relieved and actually getting MORE for respectful exits because buyers know there\'s no drama.'
  },
  {
    id: 'capital-recycler-1031-timing',
    q: 'How do I coordinate a 1031 exchange when selling one property and buying another?',
    a: 'Timing is critical. Basic timeline: (1) Identify replacement property (must close within 45 days of closing on the sale). (2) Close on your sale. (3) 1031 QI (qualified intermediary) holds proceeds. (4) You have 180 days to identify replacement and close. Common gotcha: waiting too long to find a replacement. We source properties BEFORE you close your sale, giving you options ready to go. We coordinate the timing so your 1031 exchange happens seamlessly.'
  },
  {
    id: 'multifamily-underwriting-conservative',
    q: 'How do you underwrite multifamily deals? Are the numbers realistic?',
    a: 'We use conservative underwriting: (1) We verify actual rent rolls—not projected rents. (2) We research market rents independently in the neighborhood. (3) We assume 7% vacancy (not 2-3% like optimistic investors). (4) We factor in real maintenance budgets (1% of property value annually). Result: If our analysis says it pencils, it WILL pencil. You\'ll see deals that disappointed other investors because their projections were fantasies. Conservative = reliable.'
  },
  {
    id: 'portfolio-simplification-strategy',
    q: 'I own 6-8 properties across different neighborhoods. How do I simplify without leaving money on the table?',
    a: 'Portfolio simplification strategy: (1) Identify your strongest performers (best cap rate, lowest management hassle). (2) Identify your weakest (lowest rent, highest maintenance, problem tenants). (3) Exit the weak 2-3, consolidate into 3-4 stronger assets in better markets. (4) Reduces property count by 50%, management burden by 70%, doesn\'t impact income. Example: 8 units averaging 4.2% cap rate → 5 units averaging 5.1% cap rate, same income, half the work.'
  },
  {
    id: 'finding-off-market-multifamily-deals',
    q: 'How do you find off-market multifamily deals before they hit the MLS?',
    a: 'Our system: (1) Direct outreach to owner-occupants considering exit (mail campaigns, personal calls). (2) Relationships with other investors, wholesalers, estate attorneys. (3) Tax delinquent research and probate tracking. (4) Neighborhood relationships—we know when buildings change hands before listing. Off-market deals give you first-look advantage and usually better prices. Most of our deals go under contract 2-3 weeks before MLS listing, if they ever list.'
  },
  {
    id: 'tenant-quality-investment-decision',
    q: 'Does the quality of existing tenants affect the investment decision?',
    a: 'Absolutely. Strong tenants = stable cash flow + easy management. Poor tenants = chaos + vacancy risk. Our analysis includes tenant quality review: How long have they been there? Payment history? Are they maintained or problem cases? Strong tenants are worth money—clean, stable tenants reduce your cap rate discount by 0.5-1%. Conversely, problem tenants require immediate replacement strategy and tenant acquisition cost. We factor this into underwriting and negotiations.'
  },
  {
    id: 'property-manager-investor-relationship',
    q: 'How important is the property manager to my investment returns?',
    a: 'Critical. Best property manager can add 0.5-1% to your net returns through better rent collection, lower vacancy, reduced maintenance costs. Poor manager tanks returns through missed rents, high turnover, emergency repairs. We vet managers thoroughly and recommend only vetted professionals with track records. Many scaling investors benefit from upgrading their property manager—it\'s high-leverage improvement. We\'ll assess your current manager or recommend better ones.'
  },
  {
    id: 'multifamily-financing-small-buildings',
    q: 'What financing options are available for 2-4 unit multifamily in the Capital Region?',
    a: 'Good news: Small multifamily financing is easier than you think. (1) Conventional: 20% down, 6.5-7.5% rates, 30-year amort. (2) FHA: 15% down, slightly higher rates, investor-friendly. (3) Fannie Mae/Freddie Mac: down to 15% for investor-occupied. (4) Portfolio lenders: some local banks offer in-house financing, more flexible terms. We have relationships with 8+ lenders who specialize in 2-4 unit buildings and can shop rates for best terms.'
  }
]

export default {
  faqCategories,
  multifamilyInvestorFAQs
}
