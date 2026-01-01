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
    a: 'Cap rates vary by property type and condition, but expect ranges that reflect current market conditions in Albany/Schenectady area.'
  },
  {
    id: 'multifamily-deal-pencils-underwriting',
    q: 'How do I know if a multifamily deal actually pencils, or if I\'m missing something in the underwriting?',
    a: 'Thorough underwriting requires verifying rent rolls, researching market comps, and stress-testing assumptions against conservative benchmarks.'
  },
  {
    id: 'closing-costs-multifamily-property',
    q: 'What should I expect to pay for inspections, appraisals, and title work on a 3-unit property?',
    a: 'Closing costs typically range from 2-5% of purchase price and include inspections, appraisals, title insurance, and lender fees.'
  },
  {
    id: 'offmarket-vs-mls-multifamily',
    q: 'Should I be looking for off-market deals, or are MLS properties equally solid in this market?',
    a: 'Off-market deals often offer better pricing and reduced competition, but both channels have solid properties depending on your criteria.'
  },
  {
    id: 'single-family-to-multifamily-transition',
    q: 'I\'m buying my first multifamily after single-family flips. What\'s different about how I should evaluate it?',
    a: 'Multifamily evaluation emphasizes tenant stability, rent roll quality, and operational metrics rather than exit strategies.'
  },
  {
    id: 'multifamily-closing-timeline',
    q: 'How long should closing actually take from offer to keys in this market?',
    a: 'Standard closings take 30-60 days depending on financing, inspections, and appraisal timelines in the Capital Region market.'
  },
  {
    id: 'financing-programs-2-4-unit',
    q: 'What financing programs actually work for 2-4 unit properties, and which lenders aren\'t just tire-kickers?',
    a: 'Conventional, FHA, and portfolio lenders all offer programs for 2-4 unit properties; relationships matter for reliable execution.'
  },
  // SELLING QUESTIONS
  {
    id: 'selling-4unit-burned-out',
    q: 'I\'ve owned this 4-unit for 10 years and I\'m burned out. What\'s the realistic timeline and process to sell?',
    a: 'Selling typically takes 60-120 days with proper marketing and positioning, including tenant transition planning and negotiations.'
  },
  {
    id: 'selling-with-difficult-tenant',
    q: 'I want to sell, but I have a difficult tenant situation. Can I still get market value?',
    a: 'Problem tenants impact value but don\'t prevent sales; transparent communication and transition planning protect your proceeds.'
  },
  {
    id: '1031-exchange-vs-reinvestment',
    q: 'Should I do a 1031 exchange, or just take my proceeds and reinvest? What\'s the play here?',
    a: 'A 1031 exchange defers taxes but requires strict timelines; direct reinvestment offers flexibility but triggers tax liability.'
  },
  {
    id: 'offmarket-sale-premium',
    q: 'If I\'m selling off-market vs. listing, how much more can I realistically get?',
    a: 'Off-market sales typically attract serious investor buyers willing to close faster, often capturing similar or better values than MLS.'
  },
  {
    id: 'property-worth-cap-rate',
    q: 'What\'s my property actually worth — cap rate-wise — and how do I know the number isn\'t BS?',
    a: 'Market value depends on comparable sales, current cap rates, and operational metrics; independent analysis confirms accuracy.'
  },
  {
    id: 'unwinding-portfolio-strategy',
    q: 'I want to unwind my portfolio (5 properties) over 2-3 years. What\'s the strategy to maximize proceeds?',
    a: 'Strategic sequencing based on market timing, tax optimization, and reinvestment goals can maximize total returns across multiple sales.'
  },
  {
    id: 'selling-two-properties-redeploy',
    q: 'I\'m planning to sell 2 properties at once to redeploy into larger multifamily. What should I know?',
    a: 'Coordinating multiple sales requires synchronized closings and 1031 exchange timing to efficiently redeploy capital.'
  },
  // MAIN PAGE QUESTIONS
  {
    id: 'investor-specialist-vs-traditional-agent',
    q: 'What\'s the difference between working with a traditional agent vs. someone who specializes in multifamily investor deals?',
    a: 'Investor specialists understand underwriting, financing, and portfolio strategy; traditional agents focus on transaction volume.'
  },
  {
    id: 'advisor-understands-investor-math',
    q: 'How do I know if my real estate advisor actually understands investor math, or if they\'re just trying to close deals?',
    a: 'True investor advisors analyze cap rates, cash flow, and conservative scenarios rather than pushing for quick transactions.'
  },
  {
    id: 'scaling-portfolio-3-5-properties',
    q: 'What does "scaling a portfolio" actually look like for someone with 3-5 properties in the Capital Region?',
    a: 'Scaling involves strategic acquisitions, portfolio optimization, and leveraging equity to compound growth over time.'
  },
  {
    id: 'buying-selling-frequency-wealth-building',
    q: 'How often should I be buying/selling to actually build wealth as a multifamily investor?',
    a: 'Strategic timing based on market conditions and personal goals typically means 1-3 transactions annually for active portfolios.'
  },
  // VIP INVESTOR LIST QUESTIONS
  {
    id: 'investor-group-membership-benefits',
    q: 'What does it take to join an active investor group that actually finds deals and shares intelligence?',
    a: 'Active groups require serious investors with capital, a commitment to deal flow, and willingness to collaborate on acquisitions.'
  },
  {
    id: 'deals-per-month-sourcing',
    q: 'How many deals per month can a serious investor realistically source in the Albany/Saratoga area?',
    a: 'Serious investors with strong networks and deal criteria can source 3-8 qualified deals monthly in the Capital Region market.'
  },
  {
    id: 'missing-mls-only-strategy',
    q: 'What am I missing if I\'m only looking at MLS listings?',
    a: 'MLS-only investors miss off-market opportunities, wholesaler deals, and properties available before public listing.'
  },
  // CALCULATOR PAGE QUESTIONS
  {
    id: 'property-offer-decision-calculator',
    q: 'I found a property at $X price with $Y rent roll — should I make an offer, or is this a pass?',
    a: 'Use your calculator with conservative assumptions about vacancy, expenses, and cap rate targets to inform offer decisions.'
  },
  {
    id: 'dscr-requirements-3unit',
    q: 'What debt service coverage ratio do lenders actually require for a 3-unit property right now?',
    a: 'Most lenders require 1.2-1.25x DSCR for investor-occupied 2-4 unit properties in the current lending environment.'
  },
  {
    id: 'cashoncash-return-2unit',
    q: 'How much cash-on-cash return should I expect from a 2-unit in this market?',
    a: 'Capital Region 2-units typically produce 6-12% cash-on-cash returns depending on down payment and financing.'
  },
  {
    id: 'comparing-properties-same-cap-rate',
    q: 'How do I compare two properties with the same cap rate to figure out which is actually the better investment?',
    a: 'Compare tenant quality, market growth, maintenance needs, and management requirements beyond just cap rate numbers.'
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
