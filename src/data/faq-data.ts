/**
 * SAAD TAI - REAL ESTATE FAQ DATA
 *
 * Frequently asked questions about home buying, selling, and valuation
 * Optimized for real estate search queries
 * Last Updated: 2025-01-15
 */

import { FAQ, FAQCategory } from '@/types/faq'

// ============================================================================
// FAQ CATEGORIES
// ============================================================================

export const faqCategories: FAQCategory[] = [
  {
    id: 'neighborhood-comparison',
    name: 'Neighborhood Comparison',
    description: 'Albany vs Schenectady vs Niskayuna: property taxes, schools, costs, and lifestyle comparisons for Capital Region buyers.'
  },
  {
    id: 'buying-process',
    name: 'Buying Process',
    description: 'Everything about home buying, pre-approval, finding your home, and closing.'
  },
  {
    id: 'investment-questions',
    name: 'Investment & ROI',
    description: 'Real estate investment returns, rental yields, cash flow, and appreciation potential.'
  },
  {
    id: 'family-concerns',
    name: 'Schools & Family',
    description: 'School districts, safety, family amenities, and total cost of ownership.'
  },
  {
    id: 'urban-living',
    name: 'Urban Professional',
    description: 'Walkability, commute times, dining, culture, and neighborhood character.'
  },
  {
    id: 'home-selling',
    name: 'Selling Your Home',
    description: 'Learn about our home selling process, marketing strategy, and how to maximize your home\'s value.'
  },
  {
    id: 'home-valuation',
    name: 'Home Valuation',
    description: 'Understand your home\'s value, market trends, and when to get a professional appraisal.'
  }
]

// ============================================================================
// TOP-LEVEL FAQ FOR HOMEPAGE - REAL ESTATE OPTIMIZED
// ============================================================================

export const topLevelFAQs: FAQ[] = [
  {
    id: 'top-how-much-home-worth',
    q: "How much is my home worth?",
    a: "Value depends on location, condition, and recent neighborhood sales. We provide FREE Comparative Market Analysis (CMA) showing comparable homes. We schedule a consultation to evaluate your property and provide precise valuation."
  },
  {
    id: 'top-how-long-to-sell',
    q: "How long does it take to sell a home?",
    a: "In the Albany-Schenectady market, homes typically sell in 30-90 days depending on price, condition, and market conditions. Our 6-step marketing strategy includes professional photography, online listings, open houses, and direct buyer outreach—designed to sell faster and at better prices than homes listed alone."
  },
  {
    id: 'top-selling-steps',
    q: "What's your process for selling a home?",
    a: "We follow a proven 6-step approach: (1) Understand your situation and timeline, (2) Prepare your home with strategic staging, (3) Professional photography and marketing, (4) List and attract qualified buyers, (5) Negotiate offers to maximize your profit, (6) Coordinate closing and hand you the keys. We're available 24/7 to answer questions."
  },
  {
    id: 'top-buying-process',
    q: "What should I know before buying a home?",
    a: "Get pre-approved for financing FIRST—it shows sellers you're serious and narrows your search. Understand your budget, neighborhood preferences, and long-term goals. Our team guides you through each step: neighborhood research, property showings, offer strategy, inspections, and closing. We handle the details so you focus on finding your dream home."
  },
  {
    id: 'top-home-valuation-free',
    q: "Is a home valuation really free?",
    a: "Yes. We provide FREE professional home valuations with zero obligation. You'll receive a detailed Comparative Market Analysis (CMA) showing your home's estimated value, recent sales data, and neighborhood trends. Whether you're considering selling, refinancing, or just curious—there's no cost and no pressure to list."
  },
  {
    id: 'top-straight-talk-no-fluff',
    q: "What does 'Straight Talk, No Fluff' mean?",
    a: "We tell you the truth about your home's market value, realistic selling timelines, and what needs to happen to sell or buy successfully. No exaggerated promises. No hidden fees. Just honest, direct communication about the real estate market in Albany and Schenectady. You deserve a realtor who listens, explains options clearly, and respects your time."
  }
]

// ============================================================================
// HOME SELLING & GENERAL FAQs
// ============================================================================

export const aboutRealtorFAQs: FAQ[] = [
  {
    id: 'what-is-saad-tai-realtor',
    q: 'Who is Saad Tai?',
    a: 'I\'m a licensed Realtor® (License #10401373295) serving the Albany-Schenectady area with 10+ years of real estate experience. I specialize in helping homeowners sell faster and buyers find their perfect home. My approach: Straight Talk, No Fluff—honest communication, neighborhood expertise, and 24/7 availability. When you work with me, your success is my success.'
  },
  {
    id: 'why-choose-saad',
    q: 'Why should I choose Saad Tai as my realtor?',
    a: 'Three reasons: (1) Deep Territory Knowledge—I know Albany-Schenectady neighborhoods intimately, from school districts to property values to market trends. (2) Straight Talk, No Fluff—no exaggerated promises, just honest assessment and direct communication. (3) Always Available—24/7 response to texts, calls, and questions. Your success is my priority, and I prove it through consistent results and client testimonials.'
  },
  {
    id: 'six-step-marketing-strategy',
    q: 'What is your 6-step marketing strategy?',
    a: 'Our proven approach: (1) Professional photography and virtual tour of your home, (2) Strategic online marketing across 50+ sites, (3) Targeted buyer outreach via email and direct contact, (4) Open houses and private showings, (5) Negotiation strategy to maximize your sale price, (6) Closing coordination and final walkthrough. Each step is designed to attract serious buyers and close faster.'
  },
  {
    id: 'home-selling-timeline',
    q: 'What\'s the typical timeline from listing to closing?',
    a: 'Average timeline: 30-90 days from listing to closing, depending on price, condition, and market conditions. Homes priced correctly and in good condition typically sell in 30-45 days. Homes needing repairs or priced above market may take longer. We\'ll give you an honest timeline assessment during your initial consultation.'
  },
  {
    id: 'prepare-home-for-sale',
    q: 'How do I prepare my home for sale?',
    a: 'Key steps: (1) Declutter and depersonalize—buyers need to imagine themselves in your home. (2) Deep clean inside and out. (3) Minor repairs (caulk, paint, fix doors)—don\'t need major renovations. (4) Curb appeal matters—landscape, entrance, first impression. (5) Stage key rooms (living room, kitchen, master bedroom). We provide a detailed staging guide and can recommend contractors.'
  },
  {
    id: 'pricing-strategy',
    q: 'How do you determine the listing price?',
    a: 'We conduct a Comparative Market Analysis (CMA) analyzing recent sales of similar homes in your neighborhood. Factors include: square footage, condition, lot size, age, location, and current market demand. We price aggressively to sell—too high and you\'re stuck; too low and you leave money on the table. Our goal: right price, quick sale, maximum profit.'
  },
  {
    id: 'real-estate-commission',
    q: 'How much does your service cost?',
    a: 'Real estate commissions are negotiable. Standard market is 5-6% (split between buyer and seller agents), but we discuss pricing based on your situation. For sellers, our commission typically ranges 4.5-5.5%. For buyers, there\'s no cost—the seller\'s agent commission covers both sides. We\'re transparent about all fees upfront.'
  },
  {
    id: 'what-if-home-has-issues',
    q: 'What if my home needs major repairs?',
    a: 'You have options: (1) Price lower to account for repairs and sell as-is, (2) Make repairs before listing to get top dollar, (3) Offer a credit at closing for the buyer to handle repairs. We\'ll analyze each option\'s financial impact and recommend the best strategy for your situation.'
  },
  {
    id: 'rental-property-sell',
    q: 'Can you help me sell a rental property?',
    a: 'Absolutely. Selling rental properties has different tax and financial considerations than primary residences. We coordinate with tax professionals to minimize capital gains taxes and structure the sale optimally. We also handle the transition from tenant occupancy to sale, managing all logistics and timelines.'
  }
]

// ============================================================================
// HOME BUYING FAQs
// ============================================================================

export const homeBuyingFAQs: FAQ[] = [
  {
    id: 'getting-preapproved',
    q: 'Do I need to be pre-approved before house hunting?',
    a: 'Yes, absolutely. Pre-approval shows sellers you\'re a serious buyer with secured financing. It narrows your search to homes you can actually afford and strengthens your offer when competing with other buyers. The process takes 1-3 days and requires proof of income, employment, and credit check. No cost or obligation.'
  },
  {
    id: 'first-time-homebuyer-programs',
    q: 'What first-time homebuyer programs are available in New York?',
    a: 'NY offers several programs: SONYMA loans (below-market rates, 20-year terms), FHA loans (3.5% down payment, flexible credit), NYS Housing Trust Fund (down payment/closing cost assistance), and local County programs. Eligibility varies by income, first-time status, and location. We can connect you with lenders who specialize in first-time buyer programs and maximize your available assistance.'
  },
  {
    id: 'down-payment-requirements',
    q: 'How much down payment do I need to buy a home in the Capital Region?',
    a: 'Conventional loans: 10-20% down. FHA loans: 3.5-10% down. VA loans: 0% down (if eligible). SONYMA loans: 5-10% down. For a $300K home in Schenectady/Albany: down payment ranges from $10,500 (FHA 3.5%) to $60,000 (conventional 20%). We recommend speaking with lenders about programs matching your down payment capacity.'
  },
  {
    id: 'closing-costs-capital-region',
    q: 'What are typical closing costs in Albany, Schenectady, and Niskayuna?',
    a: 'Closing costs typically range 2-5% of home price: appraisal ($400-600), title insurance ($500-800), attorney fees ($800-1,500), inspection ($300-500), taxes/insurance prorations, lender fees. For a $300K home: expect $6,000-$15,000. Some programs offer closing cost assistance. We provide detailed closing cost estimates before you make an offer.'
  }
]

// ============================================================================
// NEIGHBORHOOD COMPARISON FAQs - HIGHEST INTENT
// ============================================================================

export const neighborhoodComparisonFAQs: FAQ[] = [
  {
    id: 'property-taxes-comparison',
    q: 'What are property taxes in Albany vs Schenectady vs Niskayuna?',
    a: 'Albany: $2.73 per $1,000 assessed value (County rate). Schenectady (City): $13.37 per $1,000. Niskayuna (Town): $2.84 per $1,000. Total property tax bills vary significantly based on school district. Example: $300K home—Albany ~$820/year (county + district), Schenectady ~$4,010/year, Niskayuna ~$850/year + school district. Note: Schenectady\'s higher city rate is offset by much lower median home prices.'
  },
  {
    id: 'school-district-comparison',
    q: 'Which neighborhood has the best schools: Albany, Schenectady, or Niskayuna?',
    a: 'Niskayuna Central SD: A rating (Niche.com, 2025), #3 in Albany area, 95% college acceptance. Albany City SD: B rating, strong community schools. Schenectady City SD: B- rating. For top schools, Niskayuna is the clear choice—it\'s why median homes are $387K vs $279K in Schenectady. If schools are priority, Niskayuna\'s premium is justified.'
  },
  {
    id: 'total-cost-ownership',
    q: 'What is the total monthly cost of owning a home in each neighborhood?',
    a: 'Niskayuna ($387K home): Mortgage $2,440 + Tax $92 + Insurance $125 + Utilities $140 + Maintenance $200 = ~$2,997/month. Albany ($285K): ~$2,287/month. Schenectady ($279K): ~$2,410/month (higher taxes, lower price). Niskayuna costs $500-700/month more for top schools. Over 30 years, that\'s $180K-252K premium for Niskayuna\'s education advantage.'
  },
  {
    id: 'walkability-comparison',
    q: 'Compare walkability: Albany vs Schenectady vs Niskayuna?',
    a: 'Albany: 65 overall Walk Score. Center Square & Downtown: 95 (Walker\'s Paradise). Schenectady: 76 in historic Stockade district. Niskayuna: ~45 (suburban). Albany and Schenectady best for walkable neighborhoods and public transit. Niskayuna better for car-dependent suburban lifestyle with good roads and parking.'
  },
  {
    id: 'home-price-appreciation',
    q: 'Which neighborhood has better appreciation: Albany or Schenectady?',
    a: 'Schenectady: +9.8% YoY appreciation (2025). Albany: +5.4% YoY. Niskayuna: +4.7% YoY. Schenectady\'s revitalization (Proctors Theatre, Rivers Casino) is driving strong appreciation. Albany steady growth as state capital attracts workforce. Niskayuna stable (established market). For appreciation focus: Schenectady > Albany > Niskayuna.'
  },
  {
    id: 'is-schenectady-worth-it',
    q: 'Is Schenectady worth it with high tax rates but lower prices?',
    a: 'Yes, for investors. While Schenectady\'s tax rate ($13.37/$1,000) is high, actual annual tax bills on $279K homes (~$3,700) are comparable or lower than Niskayuna ($387K home, $11,000+). Plus: stronger rents ($1,471-$1,695), higher appreciation (+9.8%), revitalization momentum, and strong cash flow potential. The numbers work in Schenectady\'s favor for investors.'
  }
]

// ============================================================================
// INVESTMENT & ROI FAQs
// ============================================================================

export const investmentFAQs: FAQ[] = [
  {
    id: 'rental-yields-schenectady-albany',
    q: 'What are rental yields in Schenectady vs Albany?',
    a: 'Schenectady: Best yields. Median rent $1,471-$1,695/month, median price $279K. Gross rent-to-price ratio: 6.7% (6.3% on lower end). Net yield after expenses: ~4.3%. Albany: Median rent $1,550/month, median price $285K. Gross ratio: 6.5%. Net yield: ~4.2%. Schenectady edges out Albany with slightly better cash flow despite higher tax rates.'
  },
  {
    id: 'cash-flow-vs-appreciation',
    q: 'Cash flow vs appreciation: which Capital Region market is better?',
    a: 'Schenectady: Best cash flow NOW. $279K entry price, $1,471-$1,695 rent = strong monthly income. Also has highest appreciation (+9.8% YoY). Niskayuna: Lower cash flow (6% gross yield), better appreciation (stable market, established schools, $387K entry). Strategy: Schenectady for income-focused portfolio, Niskayuna for long-term appreciation. Or own both for balance.'
  },
  {
    id: 'best-investment-neighborhoods',
    q: 'Best neighborhoods in Schenectady for rental investment?',
    a: 'Stockade District: Historic charm, Walk Score 76, strong appreciation, desirable tenant base. Proctors Theatre area: Downtown revitalization momentum, new restaurants/businesses, growing demand. Rivers Casino neighborhood: New investment catalyst (opened 2023), improving amenities, strong appreciation potential. These areas show strongest renter demand and price appreciation.'
  },
  {
    id: 'roi-investment-properties',
    q: 'What ROI can I expect on Capital Region investment properties?',
    a: 'Conservative estimate: 5-8% annually combining cash flow (4-4.5% net yield) + appreciation (1-3.5% YoY depending on neighborhood). Schenectady combines best cash flow + highest appreciation for 7-8% combined return. Niskayuna more conservative (4-5%). Factors: down payment percentage, financing rate, property condition. We can provide detailed ROI analysis for specific properties.'
  },
  {
    id: 'multi-family-investments',
    q: 'Can I find multi-family investment properties in Schenectady under $200K?',
    a: 'Yes, especially 2-family and 3-family homes in Schenectady. $150K-$200K range exists for properties needing some work. Rental income: 2-family often generates $2,000-$2,500/month (owner occupies one unit, rents other). Strong cash flow potential even with modest down payments. We track off-market deals and can connect you with investors seeking these opportunities.'
  },
  {
    id: 'days-on-market',
    q: 'What are typical days on market for investment properties in Capital Region?',
    a: 'Investment properties: 45-120 days depending on price and condition. Well-priced, good condition properties: 30-60 days. Below-market deals: sell within weeks as investors compete. Market timing matters. Schenectady investment properties selling faster (+9.8% appreciation attracts buyers). We monitor market velocity and advise on optimal timing for both purchases and sales.'
  }
]

// ============================================================================
// FAMILY & LIFESTYLE FAQs
// ============================================================================

export const familyFAQs: FAQ[] = [
  {
    id: 'niskayuna-schools-ranking',
    q: 'How do Niskayuna schools compare to Albany and Schenectady?',
    a: 'Niskayuna wins decisively: A rating (Niche.com, 2025), #3 best school districts in Albany area, 95% college acceptance, 66% math proficiency, 65% reading proficiency. Albany: B rating, 27% math, 30% reading. Schenectady: B-, 18% math, 22% reading. Niskayuna High School: #1 in Schenectady County with strong AP/college prep. Clear choice for education-focused families.'
  },
  {
    id: 'safest-neighborhoods-families',
    q: 'Which neighborhood is safest for families?',
    a: 'Niskayuna: Safest overall. Lower crime rates, established suburban community, family-oriented demographics, active police presence. Albany: Safe downtown areas (Center Square, Downtown), but city-level crime higher. Schenectady: Revitalization improving safety, but historic crime reputation remains. For families prioritizing safety, Niskayuna is clear choice. Albany downtown neighborhoods also very safe.'
  },
  {
    id: 'niskayuna-total-monthly-cost',
    q: 'What\'s the total monthly cost in Niskayuna (mortgage + taxes + insurance)?',
    a: 'Example $387K home: Mortgage $2,440 (20% down, 7%), Property Tax $92 (school district), Insurance $125, Utilities $140, Maintenance $200/month estimate. Total: ~$2,997/month. Compare: Albany $2,287/month ($285K), Schenectady $2,410/month ($279K). Niskayuna premium: $500-700/month for A-rated schools, safe community, established schools infrastructure.'
  },
  {
    id: 'family-friendly-neighborhoods',
    q: 'What are the best family-friendly neighborhoods in Capital Region?',
    a: 'Niskayuna: Top choice—A schools, safe, parks, Mohawk River Trail, community investment. Albany (Pine Hills, Center Square): Growing families, walkable, community activities, good schools for Albany SD. Schenectady downtown: Revitalization attracting young families, lower prices, improving parks/amenities. Our team can show you family-focused neighborhoods and schools in each area.'
  },
  {
    id: 'school-district-boundaries',
    q: 'How do I find school district boundaries and which area belongs to which district?',
    a: 'Each neighborhood file on our site shows school district info. Or: visit district websites (Niskayuna CSD, Albany City SD, Schenectady City SD) for boundary maps. Key: District residency determines which schools your children attend, so verify boundaries before buying. We can clarify which schools serve specific addresses and help you evaluate district quality before purchasing.'
  }
]

// ============================================================================
// URBAN PROFESSIONAL FAQs
// ============================================================================

export const urbanProfessionalFAQs: FAQ[] = [
  {
    id: 'commute-schenectady-albany',
    q: 'What\'s the commute time from Schenectady to Albany downtown?',
    a: 'Off-peak: 20-25 minutes via I-87. Rush hour: 35-45 minutes. To GE campus: 10-15 minutes (advantage for GE employees). To hospitals/state offices: 25-35 minutes. Many Schenectady residents work locally at GE or downtown Schenectady jobs, shortening commutes. Good location for dual-income households with jobs in both cities.'
  },
  {
    id: 'walkability-albany',
    q: 'What are the most walkable neighborhoods in Albany?',
    a: 'Center Square: Walk Score 95 (Walker\'s Paradise)—galleries, restaurants, brownstones, tight-knit community. Downtown: Walk Score 93—state offices, cultural venues, shops, transit. Central Avenue: Walk Score 95. These neighborhoods have sidewalks, public transit (CDTA), bike lanes, and vibrant street life. Most daily errands accomplished on foot. Best for urban professionals.'
  },
  {
    id: 'living-carfree-albany',
    q: 'Can I live car-free in Albany?',
    a: 'Yes, in Center Square and Downtown neighborhoods. Walk Score 95+ means walking/biking for most needs. CDTA bus system connects to surrounding areas. Bike lanes expanding. However: outside these core neighborhoods, cars become necessary. Having a car for weekend trips/emergencies is still useful. Downtown Albany is genuinely car-optional, rare for Capital Region.'
  },
  {
    id: 'niskayuna-commute',
    q: 'What\'s the commute from Niskayuna to Albany downtown?',
    a: 'Off-peak: 20-25 minutes via I-87. Rush hour: 30-40 minutes. To GE campus: 20-30 minutes. Suburban location with easy highway access makes commuting straightforward. Good for professionals with Albany jobs seeking suburban quality of life. Trade-off: less walkability (45 Walk Score) but better schools and safety.'
  }
]

// ============================================================================
// MULTIFAMILY INVESTOR & PORTFOLIO STRATEGY FAQs
// ============================================================================

export const multifamilyInvestorFAQs: FAQ[] = [
  {
    id: 'scaling-investor-timing-exit',
    q: 'How do I know when to exit a property and reinvest proceeds?',
    a: 'Key signals: (1) Appreciation has slowed or peaked in your market. (2) Cap rates are compressed (under 4%)—hard to find better returns. (3) You\'ve built equity and want to redeploy. (4) Market timing shows buyer appetite is high. We analyze your portfolio, run scenarios on hold vs. sell decisions, and help you time exits to maximize cumulative returns. Most scaling investors benefit from exiting every 7-10 years.'
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
  topLevelFAQs,
  aboutRealtorFAQs,
  homeBuyingFAQs,
  neighborhoodComparisonFAQs,
  investmentFAQs,
  familyFAQs,
  urbanProfessionalFAQs,
  multifamilyInvestorFAQs
}
