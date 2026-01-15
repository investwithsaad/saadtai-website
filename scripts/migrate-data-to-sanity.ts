/**
 * Data Migration Script for Sanity CMS
 *
 * Migrates all existing TypeScript data to Sanity CMS
 *
 * Usage:
 *   npm run migrate:sanity
 *
 * This script:
 * 1. Reads from src/data/*.ts files
 * 2. Transforms to Sanity document format
 * 3. Uploads to Sanity via client API
 */

// Load environment variables from .env.local
import * as dotenv from 'dotenv'
import * as path from 'path'

dotenv.config({
  path: path.resolve(process.cwd(), '.env.local'),
})

import { createClient } from 'next-sanity'

// Initialize Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2021-06-07',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN!,
})

interface MigrationStats {
  created: number
  failed: number
  errors: Array<{ type: string; id: string; error: string }>
}

const stats: MigrationStats = {
  created: 0,
  failed: 0,
  errors: [],
}

/**
 * Create a document in Sanity
 */
async function createDocument(doc: any): Promise<boolean> {
  try {
    await client.create(doc)
    stats.created++
    console.log(`✓ Created ${doc._type}: ${doc.title || doc.name || doc.question || 'unnamed'}`)
    return true
  } catch (error: any) {
    stats.failed++
    const errorMsg = error?.message || String(error)
    stats.errors.push({
      type: doc._type,
      id: doc.title || doc.name || doc.question || 'unknown',
      error: errorMsg,
    })
    console.error(`✗ Failed to create ${doc._type}:`, errorMsg)
    return false
  }
}

/**
 * Migrate Site Settings
 */
async function migrateSiteSettings() {
  console.log('\n📋 Migrating Site Settings...')

  const siteSettings = {
    _type: 'siteSettings',
    siteName: 'Invest with Saad',
    tagline: 'Multifamily Investment Advisor & Portfolio Strategy Guide',
    description:
      'Invest with Saad specializes in strategic guidance for small multifamily investors in the Capital Region. We help investors scale smarter, sell faster, and plan better exits through disciplined analysis, off-market deal sourcing, and responsive transaction management.',
    contact: {
      phone: '+1 518-667-9351',
      email: 'saadtherealtor1@gmail.com',
      address: 'Albany to Schenectady Area, Albany, NY 12207',
    },
  }

  await createDocument(siteSettings)
}

/**
 * Migrate Blog Posts
 */
async function migrateBlogPosts() {
  console.log('\n📝 Migrating Blog Posts...')

  const blogPosts = [
    {
      _type: 'blogPost',
      title: 'Albany vs. Schenectady: Which Market Delivers Better ROI in 2025?',
      slug: { _type: 'slug', current: 'albany-vs-schenectady-roi-2025' },
      subtitle: 'Capital Region Investment Analysis',
      excerpt:
        'Compare Albany and Schenectady real estate markets: home prices, rental dynamics, appreciation rates, and cash flow potential. Discover which market fits your investment strategy.',
      author: 'Saad Tai',
      publishedAt: '2025-12-20T00:00:00Z',
      category: 'Investment',
      content: [
        {
          blockType: 'p',
          text: 'If you\'re eyeing investment properties in New York\'s Capital Region, you\'ve probably faced this dilemma: Albany or Schenectady? Albany is the state capital, known for stability and long-term growth, while Schenectady has been making waves as a cash flow hotspot. Both offer strong opportunities—but the numbers tell slightly different stories.',
        },
        {
          blockType: 'h2',
          text: 'Home Prices in 2025',
        },
        {
          blockType: 'p',
          text: 'Albany median home price: ~$295,000\nSchenectady median home price: ~$250,000\n\nAlbany\'s higher price point reflects its role as a hub for government, healthcare, and education jobs. Schenectady, on the other hand, gives investors a lower barrier to entry while still riding strong demand for rentals.',
        },
        {
          blockType: 'h2',
          text: 'Rental Market Dynamics',
        },
        {
          blockType: 'p',
          text: 'Albany median rent (2BR): ~$1,650/month\nSchenectady median rent (2BR): ~$1,500/month\n\nWhile Albany rents run a bit higher, Schenectady\'s rent-to-price ratio often beats out the capital. Take this quick scenario: An investor buys a duplex in Schenectady for $230,000. Both units combined could bring in ~$2,800/month. The same type of property in Albany might cost closer to $280,000, pulling in ~$3,200/month. Bottom line? Schenectady stretches each investment dollar further.',
        },
        {
          blockType: 'h2',
          text: 'Appreciation vs. Cash Flow',
        },
        {
          blockType: 'p',
          text: 'Albany appreciation: +6% year-over-year (2024–2025)\nSchenectady GRMs: 13–14 (stronger short-term cash flow)\n\nAlbany shines for long-term equity growth, while Schenectady delivers quicker ROI through cash flow.',
        },
        {
          blockType: 'h2',
          text: 'The Investor Takeaway',
        },
        {
          blockType: 'p',
          text: 'If your strategy leans toward long-term stability, Albany is the safer bet. If you want higher income upfront, Schenectady is your play. Savvy investors often balance both—Schenectady for monthly income, Albany for steady appreciation.',
        },
      ],
      metaDescription:
        'Compare Albany and Schenectady real estate markets: home prices, rental dynamics, appreciation rates, and cash flow potential. Discover which market fits your investment strategy.',
    },
    {
      _type: 'blogPost',
      title: '5-Year Home Price Appreciation in the Capital Region: What Investors Should Know',
      slug: { _type: 'slug', current: '5-year-appreciation-capital-region' },
      subtitle: 'Long-Term Wealth Building Through Real Estate',
      excerpt:
        'Discover how Albany and Schenectady have outperformed regional markets over the past 5 years. Learn why steady appreciation + rental income is the winning strategy for 2025.',
      author: 'Saad Tai',
      publishedAt: '2025-12-18T00:00:00Z',
      category: 'Investment',
      content: [
        {
          blockType: 'p',
          text: 'When you look beyond short-term cash flow, appreciation is what really builds wealth in real estate. And over the past five years, both Albany and Schenectady have quietly outperformed many other Upstate markets.',
        },
        {
          blockType: 'h2',
          text: '5-Year Appreciation (2020–2025)',
        },
        {
          blockType: 'p',
          text: 'Albany: +28%\nSchenectady: +32%\n\nWhile these numbers aren\'t as flashy as some coastal metros, they\'re far more sustainable. For context, markets like NYC saw steep dips during corrections, but Albany and Schenectady kept moving steadily upward—proof of their market stability.',
        },
        {
          blockType: 'h2',
          text: 'Why Investors Should Care',
        },
        {
          blockType: 'p',
          text: 'Steady Growth → Predictable appreciation lowers risk and supports long-term exit strategies.\n\nEquity Building → A $250,000 Schenectady property in 2020 is now worth about $330,000. That\'s nearly $80,000 in equity growth—and that\'s before factoring in rental income.\n\nMarket Confidence → Growth here isn\'t just inflation. It\'s tied to job creation, affordability, and strong rental demand, giving investors confidence in their portfolios.',
        },
        {
          blockType: 'h3',
          text: 'Case Study',
        },
        {
          blockType: 'p',
          text: 'An investor who bought a triplex in Albany for $300,000 in 2020 would see it valued around $384,000 today, while also collecting steady monthly rent over those five years. That\'s the power of combining equity growth + cash flow.',
        },
        {
          blockType: 'h2',
          text: 'The Investor Takeaway',
        },
        {
          blockType: 'p',
          text: 'For buy-and-hold investors, appreciation is the silent wealth-builder. Both Albany and Schenectady show you don\'t need risky, explosive markets to build long-term value. Instead, you get steady equity gains + reliable rental income—a winning combination for 2025 and beyond.',
        },
      ],
      metaDescription:
        'Discover how Albany and Schenectady have outperformed regional markets over the past 5 years. Learn why steady appreciation + rental income is the winning strategy for 2025.',
    },
  ]

  for (const post of blogPosts) {
    await createDocument(post)
  }
}

/**
 * Migrate Property Listings
 */
async function migrateListings() {
  console.log('\n🏠 Migrating Property Listings...')

  const listings = [
    {
      _type: 'listing',
      address: '12 Tyler Street',
      city: 'Troy',
      state: 'NY',
      zip: '12180',
      slug: { _type: 'slug', current: '12-tyler-street-troy' },
      propertyType: '2-unit property',
      bedrooms: 7,
      bathrooms: 3,
      squareFeet: 3333,
      features: ['Remodeled kitchen', 'Functional layout', 'Oversized rooms'],
      description: 'Turn-key and ideal for student or multi-tenant housing near RPI, Sage, and downtown',
      status: 'sold',
    },
    {
      _type: 'listing',
      address: '429 1st Street',
      city: 'Troy',
      state: 'NY',
      zip: '12180',
      slug: { _type: 'slug', current: '429-1st-street-troy' },
      propertyType: '2-unit property',
      bedrooms: 7,
      bathrooms: 2,
      squareFeet: 3576,
      features: ['Remodeled kitchen', 'Oversized layouts'],
      description: 'Ideal for student or multi-tenant housing near RPI, Sage, and downtown',
      status: 'sold',
    },
    {
      _type: 'listing',
      address: '8 Wilkins Avenue',
      city: 'Albany',
      state: 'NY',
      zip: '12206',
      slug: { _type: 'slug', current: '8-wilkins-avenue-albany' },
      propertyType: '2-unit property',
      features: ['Washer/dryer hookups', 'Private driveway', 'Dry basement storage'],
      description: 'Well-maintained with reliable tenants and strong income potential',
      status: 'sold',
    },
    {
      _type: 'listing',
      address: '1123 Ardsley Road',
      city: 'Schenectady',
      state: 'NY',
      zip: '12308',
      slug: { _type: 'slug', current: '1123-ardsley-road-schenectady' },
      propertyType: 'Single family',
      bedrooms: 3,
      bathrooms: 1,
      squareFeet: 1973,
      features: ['Updated kitchen', 'Spacious backyard', 'Modern finishes'],
      description: 'Beautifully remodeled in highly walkable neighborhood',
      status: 'sold',
    },
    {
      _type: 'listing',
      address: '10 Wilkins Avenue',
      city: 'Albany',
      state: 'NY',
      zip: '12206',
      slug: { _type: 'slug', current: '10-wilkins-avenue-albany' },
      propertyType: '2-unit property',
      bedrooms: 6,
      bathrooms: 2,
      squareFeet: 2294,
      features: ['Updated roof', 'Central air', 'Currently leased below market'],
      description: 'Fully remodeled with built-in equity and investment opportunity',
      status: 'under-contract',
    },
    {
      _type: 'listing',
      address: '740 Eastern Avenue',
      city: 'Schenectady',
      state: 'NY',
      zip: '12308',
      slug: { _type: 'slug', current: '740-eastern-avenue-schenectady' },
      propertyType: 'Duplex',
      features: ['Separate utilities', 'Garage'],
      description: 'Fully renovated with strong rental potential—turn-key',
      status: 'sold',
    },
  ]

  for (const listing of listings) {
    await createDocument(listing)
  }
}

/**
 * Migrate Testimonials
 */
async function migrateTestimonials() {
  console.log('\n⭐ Migrating Testimonials...')

  const testimonials = [
    {
      _type: 'testimonial',
      quote:
        "What makes Saad such an amazing person is his ability to listen and make you feel like you're the most important person in the room. It's not what he says, but more about his follow through that lets you know he heard every word. If you are working with him you have made a wonderful choice.",
      author: 'Michael Downton',
      role: 'Client',
      rating: 5,
      displayOnHomepage: true,
    },
    {
      _type: 'testimonial',
      quote:
        'I had an excellent experience working with Saad Tai as my real estate agent. From start to finish, he was professional, knowledgeable, and always available to answer my questions. He made the entire buying/selling process smooth and stress-free with his expertise and dedication. If you\'re looking for a reliable and hardworking agent who truly cares about his clients, I highly recommend Saad Tai!',
      author: 'Nicholas Totaram',
      role: 'Buyer & Investor',
      rating: 5,
      displayOnHomepage: true,
    },
    {
      _type: 'testimonial',
      quote:
        "I've worked with Saad for almost 2 years now. He's one of the most professionally realtors out there. He's also very hard working and creative. Most realtors sit back and wait for deals to come or wait for their listings to sell. In my experience, Saad hasn't been that way. He's a hunter. And to me, that's hard to find. Highly recommend using Saad as your realtor.",
      author: 'Jeremy Davis',
      role: 'Real Estate Investor',
      rating: 5,
      displayOnHomepage: true,
    },
    {
      _type: 'testimonial',
      quote: 'Saad is a fantastic agent to work with! Always has a positive attitude and one of the hardest working agents I know. If I\'m investing in New York, I\'m calling Saad!',
      author: 'Emilio Fonseca',
      role: 'Investor/Developer',
      rating: 5,
      displayOnHomepage: true,
    },
    {
      _type: 'testimonial',
      quote:
        'As a first time home seller, I was pretty clueless and nervous about the whole process! Saad explained everything and was very patient and always quick to respond to any of my questions (and I had ALOT of questions!)... Great realtor and a great guy!!!',
      author: 'Christine DeGennaro',
      role: 'First-Time Seller',
      rating: 5,
      displayOnHomepage: true,
    },
    {
      _type: 'testimonial',
      quote:
        'Saad is the best real estate agent that I ever had. He is very pleasant, very responsive, very reliable, very knowledgeable, and makes things so much easier and will not give up no matter what the circumstance is. The best feature I liked about him is that he makes you feel very comfortable and makes things so much easy. I was able to txt and call him at anytime and he is always fast at responding. God bless you Saad. I am looking forward to do more and more business with him.',
      author: 'Musa Naji',
      role: 'Homeowner',
      rating: 5,
      displayOnHomepage: true,
    },
  ]

  for (const testimonial of testimonials) {
    await createDocument(testimonial)
  }
}

/**
 * Migrate FAQ Data - All 25 FAQs mapped to pages
 */
async function migrateFAQs() {
  console.log('\n❓ Migrating FAQs...')

  // Map FAQ IDs to pages based on source data organization
  const pageMap: Record<string, string> = {
    // Buying Page
    'realistic-cap-rate-capital-region': 'buying',
    'multifamily-deal-pencils-underwriting': 'buying',
    'closing-costs-multifamily-property': 'buying',
    'offmarket-vs-mls-multifamily': 'buying',
    'single-family-to-multifamily-transition': 'buying',
    'multifamily-closing-timeline': 'buying',
    'financing-programs-2-4-unit': 'buying',
    'tenant-quality-investment-decision': 'buying',
    'multifamily-financing-small-buildings': 'buying',
    // Selling Page
    'selling-4unit-burned-out': 'selling',
    'selling-with-difficult-tenant': 'selling',
    '1031-exchange-vs-reinvestment': 'selling',
    'offmarket-sale-premium': 'selling',
    'property-worth-cap-rate': 'selling',
    'unwinding-portfolio-strategy': 'selling',
    'selling-two-properties-redeploy': 'selling',
    'accidental-owner-burnout': 'selling',
    'capital-recycler-1031-timing': 'selling',
    'portfolio-simplification-strategy': 'selling',
    // Landing/Main Page
    'investor-specialist-vs-traditional-agent': 'landing',
    'advisor-understands-investor-math': 'landing',
    // VIP Investor List Page
    'investor-group-membership-benefits': 'vip-investor-list',
    'deals-per-month-sourcing': 'vip-investor-list',
    'missing-mls-only-strategy': 'vip-investor-list',
    'finding-off-market-multifamily-deals': 'vip-investor-list',
    // Calculator Page
    'property-offer-decision-calculator': 'calculator',
    'dscr-requirements-3unit': 'calculator',
    'cashoncash-return-2unit': 'calculator',
    'comparing-properties-same-cap-rate': 'calculator',
    // FAQ Page (general questions)
    'scaling-portfolio-3-5-properties': 'faq',
    'buying-selling-frequency-wealth-building': 'faq',
    'scaling-investor-timing-exit': 'faq',
    'multifamily-underwriting-conservative': 'faq',
    'property-manager-investor-relationship': 'faq',
  }

  const faqs = [
    // Buying Multifamily
    {
      _type: 'faq',
      question: "What's a realistic cap rate for a 2-unit vs 3-4 unit property in the Capital Region right now?",
      answer: 'In today\'s market, most small multifamily properties trade in a mid- to high-single-digit cap rate range, depending on location, condition, and upside. 2-unit properties in stronger neighborhoods often trade closer to 6–7%; 3–4 unit properties may trade slightly higher, especially when there\'s operational upside. Cap rates meaningfully above market usually rely on aggressive rent assumptions or understated expenses—that\'s a red flag.',
      page: 'buying',
      order: 1,
    },
    {
      _type: 'faq',
      question: 'How do I know if a multifamily deal actually pencils, or if I\'m missing something in the underwriting?',
      answer: 'A deal pencils when it still works under conservative assumptions, not best-case scenarios. That means realistic expenses (taxes, insurance, maintenance, vacancy), room for unexpected repairs or rent softness, and cash flow that still makes sense after reserves. If the deal only works on paper or requires perfect execution, it\'s a warning sign.',
      page: 'buying',
      order: 2,
    },
    {
      _type: 'faq',
      question: 'What should I expect to pay for inspections, appraisals, and title work on a 3-unit property?',
      answer: 'Typical Capital Region ranges: Inspections $700–$1,200+, Appraisal $600–$900, Attorney/title/recording $2,000–$3,500. Most buyers should budget $3,500–$5,500 in upfront costs before closing.',
      page: 'buying',
      order: 3,
    },
    {
      _type: 'faq',
      question: 'Should I be looking for off-market deals, or are MLS properties equally solid in this market?',
      answer: 'Public listings maximize exposure and pricing. Off-market sales trade some price for simplicity, speed, and privacy. The right approach depends on your priorities. Generally, off-market deals often offer better pricing and reduced competition, but MLS properties are equally solid depending on your criteria.',
      page: 'buying',
      order: 4,
    },
    {
      _type: 'faq',
      question: 'I\'m buying my first multifamily after single-family flips. What\'s different about how I should evaluate it?',
      answer: 'Multifamily evaluation emphasizes tenant stability, rent roll quality, and operational metrics rather than exit strategies. Focus on normalized income, realistic expenses, and the quality of existing tenants. Strong tenants provide stability; operational risk is more important than appreciation upside.',
      page: 'buying',
      order: 5,
    },
    {
      _type: 'faq',
      question: 'How long should closing actually take from offer to keys in this market?',
      answer: 'Conventional financing: 35–50 days. Cash or local portfolio lenders: 14–30 days. Tenant issues, inspections, or municipal items can extend timelines and should be planned for. Work backward from your desired close date and build in buffer.',
      page: 'buying',
      order: 6,
    },
    {
      _type: 'faq',
      question: 'What financing programs actually work for 2-4 unit properties, and which lenders aren\'t just tire-kickers?',
      answer: 'Most buyers rely on conventional agency loans and local lenders that regularly finance small multifamily. Conventional agency loans for 2–4 unit investment properties typically cap around 75% LTV. Local banks and credit unions can offer flexibility when the property and borrower profile are strong. Straightforward deal structures tend to move faster and close more reliably. The biggest risk isn\'t leverage—it\'s choosing a lender who can\'t execute.',
      page: 'buying',
      order: 7,
    },
    {
      _type: 'faq',
      question: 'Does the quality of existing tenants affect the investment decision?',
      answer: 'Absolutely. Strong tenants = stable cash flow + easy management. Poor tenants = chaos + vacancy risk. Our analysis includes tenant quality review: How long have they been there? Payment history? Are they maintained or problem cases? Strong tenants are worth money—clean, stable tenants reduce your cap rate discount by 0.5-1%. Conversely, problem tenants require immediate replacement strategy and tenant acquisition cost. We factor this into underwriting and negotiations.',
      page: 'buying',
      order: 8,
    },
    {
      _type: 'faq',
      question: 'What financing options are available for 2-4 unit multifamily in the Capital Region?',
      answer: 'Good news: Small multifamily financing is easier than you think. (1) Conventional: 20% down, 6.5-7.5% rates, 30-year amort. (2) FHA: 15% down, slightly higher rates, investor-friendly. (3) Fannie Mae/Freddie Mac: down to 15% for investor-occupied. (4) Portfolio lenders: some local banks offer in-house financing, more flexible terms. We have relationships with 8+ lenders who specialize in 2-4 unit buildings and can shop rates for best terms.',
      page: 'buying',
      order: 9,
    },
    // Selling & Exit Strategy
    {
      _type: 'faq',
      question: 'How quickly can you get my property on the market, and what do you need from me?',
      answer: 'I can typically bring a multifamily property to market within 3–4 days. For tenant-occupied properties, I\'ll need current leases, rent roll, tenant information, and most recent property tax bill. You\'ll also notify tenants professionally that the property will be listed. After that, I handle everything—pricing, positioning, marketing, buyer coordination, and execution—so the process stays smooth and controlled.',
      page: 'selling',
      order: 1,
    },
    {
      _type: 'faq',
      question: 'I want to sell, but I have a difficult tenant situation. Can I still get market value?',
      answer: 'Yes—but expectations matter. Clean, cooperative buildings attract the strongest pricing. Tenant issues typically narrow the buyer pool and impact value. The right strategy minimizes disruption while protecting your outcome. Transparent communication about tenant situations actually protects value more than hiding problems.',
      page: 'selling',
      order: 2,
    },
    {
      _type: 'faq',
      question: 'Should I do a 1031 exchange, or just take my proceeds and reinvest?',
      answer: 'A 1031 can make sense if you plan to stay invested, already know what you want to buy next, and are comfortable with strict timelines. In some cases, flexibility and optionality are more valuable than tax deferral. Evaluate your personal situation and goals before deciding.',
      page: 'selling',
      order: 3,
    },
    {
      _type: 'faq',
      question: 'If I\'m selling off-market vs. listing publicly, how much does that realistically affect price?',
      answer: 'Generally, public listings maximize exposure and pricing. Off-market sales trade some price for simplicity, speed, and privacy. The right approach depends on your priorities—do you want maximum exposure and top dollar, or do you value privacy and certainty of close?',
      page: 'selling',
      order: 4,
    },
    {
      _type: 'faq',
      question: 'What\'s my property actually worth—and how do I know the number isn\'t inflated?',
      answer: 'Real value comes from actual income (not projections), normalized expenses, and comparable closed sales (not asking prices). We analyze your property against recent sales, market rents, and realistic operating expenses. If the numbers only work on paper, the value isn\'t real.',
      page: 'selling',
      order: 5,
    },
    {
      _type: 'faq',
      question: 'I want to unwind multiple properties over the next few years. What\'s the smart way to do that?',
      answer: 'Most owners benefit from selling weaker performers first, timing stronger assets strategically, and using proceeds to simplify or upgrade their portfolio. This is portfolio planning, not just selling real estate. We think through the sequence and tax implications across multiple transactions.',
      page: 'selling',
      order: 6,
    },
    {
      _type: 'faq',
      question: 'I\'m planning to sell two properties at once to move into larger multifamily. What should I know?',
      answer: 'Key considerations: coordinating timelines, ensuring clean documentation, and preparing for deeper lender review on the acquisition side. Preparation directly affects deal size and leverage you\'ll be approved for. We handle the coordination so both sales support your purchase strategy.',
      page: 'selling',
      order: 7,
    },
    {
      _type: 'faq',
      question: 'I\'ve inherited or accumulated properties and I\'m exhausted. How do I exit respectfully?',
      answer: 'We understand. Here\'s our approach: (1) Analyze your real financial situation—sometimes continuing makes sense, sometimes a clean exit does. (2) If exiting, we structure fair tenant transitions with 60-90 days notice (not harsh evictions). (3) We position properties to investor buyers who value clean handoffs. (4) We handle all tenant communications professionally. Many burned-out owners report feeling relieved and actually getting MORE for respectful exits because buyers know there\'s no drama.',
      page: 'selling',
      order: 8,
    },
    {
      _type: 'faq',
      question: 'How do I coordinate a 1031 exchange when selling one property and buying another?',
      answer: 'Timing is critical. Basic timeline: (1) Identify replacement property (must close within 45 days of closing on the sale). (2) Close on your sale. (3) 1031 QI (qualified intermediary) holds proceeds. (4) You have 180 days to identify replacement and close. Common gotcha: waiting too long to find a replacement. We source properties BEFORE you close your sale, giving you options ready to go. We coordinate the timing so your 1031 exchange happens seamlessly.',
      page: 'selling',
      order: 9,
    },
    {
      _type: 'faq',
      question: 'I own 6-8 properties across different neighborhoods. How do I simplify without leaving money on the table?',
      answer: 'Portfolio simplification strategy: (1) Identify your strongest performers (best cap rate, lowest management hassle). (2) Identify your weakest (lowest rent, highest maintenance, problem tenants). (3) Exit the weak 2-3, consolidate into 3-4 stronger assets in better markets. (4) Reduces property count by 50%, management burden by 70%, doesn\'t impact income. Example: 8 units averaging 4.2% cap rate → 5 units averaging 5.1% cap rate, same income, half the work.',
      page: 'selling',
      order: 10,
    },
    // Investor Strategy
    {
      _type: 'faq',
      question: 'What\'s the difference between working with a traditional agent vs. someone who specializes in multifamily investor deals?',
      answer: 'Traditional agents focus on retail buyers. Multifamily specialists focus on numbers, risk, and long-term outcomes. That difference compounds over time. Specialists ask detailed questions about income and expenses, stress-test assumptions, and aren\'t afraid to say no to bad deals.',
      page: 'faq',
      order: 1,
    },
    {
      _type: 'faq',
      question: 'How do I know if my advisor actually understands investor math?',
      answer: 'They should ask detailed questions about income and expenses, stress-test assumptions, and be willing to say no to bad deals. If every deal sounds great, something\'s wrong. Real advisors prioritize your long-term portfolio health over transaction volume.',
      page: 'faq',
      order: 2,
    },
    {
      _type: 'faq',
      question: 'What does "scaling a portfolio" actually look like for someone with a few multifamily properties?',
      answer: 'Scaling usually means fewer headaches (not just more doors), better locations and cleaner assets, and improved financing flexibility. Growth without control isn\'t progress. It\'s about strategic consolidation and quality, not just quantity.',
      page: 'faq',
      order: 3,
    },
    {
      _type: 'faq',
      question: 'How often should I be buying or selling to build real long-term wealth?',
      answer: 'Most disciplined investors buy selectively, sell strategically, and avoid constant churn. Consistency beats speed. Higher transaction frequency usually signals reactive decision-making rather than strategic planning.',
      page: 'faq',
      order: 4,
    },
    {
      _type: 'faq',
      question: 'How do I know when to exit a property and reinvest proceeds?',
      answer: 'Key signals include slowing appreciation, compressed cap rates, and market timing that favors buyers over sellers.',
      page: 'faq',
      order: 5,
    },
    {
      _type: 'faq',
      question: 'How do you underwrite multifamily deals? Are the numbers realistic?',
      answer: 'We use conservative underwriting: (1) We verify actual rent rolls—not projected rents. (2) We research market rents independently in the neighborhood. (3) We assume 7% vacancy (not 2-3% like optimistic investors). (4) We factor in real maintenance budgets (1% of property value annually). Result: If our analysis says it pencils, it WILL pencil. You\'ll see deals that disappointed other investors because their projections were fantasies. Conservative = reliable.',
      page: 'faq',
      order: 6,
    },
    {
      _type: 'faq',
      question: 'How important is the property manager to my investment returns?',
      answer: 'Critical. Best property manager can add 0.5-1% to your net returns through better rent collection, lower vacancy, reduced maintenance costs. Poor manager tanks returns through missed rents, high turnover, emergency repairs. We vet managers thoroughly and recommend only vetted professionals with track records. Many scaling investors benefit from upgrading their property manager—it\'s high-leverage improvement. We\'ll assess your current manager or recommend better ones.',
      page: 'faq',
      order: 7,
    },
    // Investor Network
    {
      _type: 'faq',
      question: 'What does it take to join an active investor group that actually shares real opportunities?',
      answer: 'Real groups expect ability to execute, clear criteria, and active participation. If it feels passive, it usually is. Active groups require commitment—members who can close when they say they will and contribute to the network.',
      page: 'vip-investor-list',
      order: 1,
    },
    {
      _type: 'faq',
      question: 'How many real deals can a serious investor source in this market each month?',
      answer: 'Realistically: 1–3 strong opportunities per month, with 1 accepted deal every 1–2 months. Higher volume usually means lower quality. Focus on deal quality over quantity—most chasing volume end up with weaker positions.',
      page: 'vip-investor-list',
      order: 2,
    },
    {
      _type: 'faq',
      question: 'What am I missing if I\'m only looking at publicly listed properties?',
      answer: 'You miss less competitive situations, direct owner conversations, and properties that never hit the public market. Public listings build discipline. Experience expands options. Both channels matter, but off-market access gives you an edge.',
      page: 'vip-investor-list',
      order: 3,
    },
    {
      _type: 'faq',
      question: 'How do you find off-market multifamily deals before they hit the MLS?',
      answer: 'Our system: (1) Direct outreach to owner-occupants considering exit (mail campaigns, personal calls). (2) Relationships with other investors, wholesalers, estate attorneys. (3) Tax delinquent research and probate tracking. (4) Neighborhood relationships—we know when buildings change hands before listing. Off-market deals give you first-look advantage and usually better prices. Most of our deals go under contract 2-3 weeks before MLS listing, if they ever list.',
      page: 'vip-investor-list',
      order: 4,
    },
    // Analysis & Tools
    {
      _type: 'faq',
      question: 'I found a property at $X with $Y in rent—should I make an offer or walk away?',
      answer: 'If conservative assumptions don\'t leave room for error, it\'s a pass or a lower offer. Run the numbers with realistic vacancy (7%+), actual market rents, and normalized expenses. If it only works with perfect execution, walk away or adjust your offer.',
      page: 'calculator',
      order: 1,
    },
    {
      _type: 'faq',
      question: 'What debt service coverage ratio do lenders actually require for a 3-unit property right now?',
      answer: 'Most lenders require 1.2-1.25x DSCR for investor-occupied 2-4 unit properties in the current lending environment. This means your net operating income needs to be 20-25% higher than your mortgage payment to qualify.',
      page: 'calculator',
      order: 2,
    },
    {
      _type: 'faq',
      question: 'What cash-on-cash return should I realistically expect from a 2-unit?',
      answer: 'Turnkey properties: 5–8%. Value-add opportunities: higher with proper execution. Returns follow discipline. Don\'t chase yield without understanding risk—conservative underwriting protects your downside.',
      page: 'calculator',
      order: 3,
    },
    {
      _type: 'faq',
      question: 'How do I compare two properties with the same cap rate?',
      answer: 'Look beyond the cap rate: tenant stability, expense predictability, capital needs, and exit flexibility. Same cap doesn\'t mean same risk. Two 6% cap rate properties can have vastly different risk profiles based on tenant quality and deferred maintenance.',
      page: 'calculator',
      order: 4,
    },
  ]

  for (const faq of faqs) {
    await createDocument(faq)
  }
}

/**
 * Migrate Neighborhoods
 */
async function migrateNeighborhoods() {
  console.log('\n🏘️  Migrating Neighborhoods...')

  const neighborhoods = [
    {
      _type: 'neighborhood',
      name: 'Albany',
      slug: { _type: 'slug', current: 'albany' },
      tagline: 'State Capital Energy, Urban Lifestyle',
      shortDescription:
        "New York's capital city offers urban energy, walkable neighborhoods, and vibrant cultural amenities. Perfect for professionals seeking city living with access to state government jobs and cultural institutions.",
      marketData: {
        medianHomePrice: '$276,000 - $295,000',
        propertyTaxRate: '$2.73 per $1,000 assessed value (county)',
        schoolDistrictRating: 'B (Niche.com, 2025)',
        walkScore: 65,
        appreciation1Year: '+5.4%',
        medianRent2BR: '$1,550/month',
      },
      buyerPersonas: {
        urbanProfessional:
          'Albany\'s walkable downtown neighborhoods (Center Square Walk Score 95, Downtown 93) attract professionals who value urban energy, proximity to state jobs, and dining/cultural scenes. Commute to downtown is immediate.',
        qualityOfLifeFamily:
          'Albany offers diverse neighborhoods with good schools (B rating), lower property taxes than surrounding areas, and community amenities. Best for families seeking urban/suburban balance.',
        valueInvestor:
          'Lower median prices ($276K) compared to Niskayuna create entry points for investors. Solid rental market at $1,550/month for 2BR. Growing appreciation (+5.4% YoY) as state capital attracts workforce.',
      },
      highIntentQuestions: [
        {
          category: 'taxes',
          question: 'What are property taxes in Albany vs Schenectady vs Niskayuna?',
          answer:
            'Albany: $2.73 per $1,000 assessed value (County rate). Schenectady (City): $13.37 per $1,000. Niskayuna (Town): $2.84 per $1,000. Total property tax bills vary significantly based on school district. Note: Schenectady\'s higher city rate is offset by lower median home prices.',
        },
        {
          category: 'schools',
          question: 'What are the best school districts in Albany?',
          answer:
            'Albany City School District: B rating on Niche.com with 8,329 students. Albany High School: B+ grade. Math proficiency 27%, reading 30%. For higher-rated schools, consider suburbs like Niskayuna (A rating) or Bethlehem Central.',
        },
        {
          category: 'lifestyle',
          question: 'What makes Albany walkable?',
          answer:
            'Albany has a Walk Score of 65 overall. Center Square neighborhood: 95 (Walker\'s Paradise). Downtown: 93. Central Avenue: 95. These neighborhoods have good public transit (CDTA buses), bike lanes, and walkable retail/dining. Most errands can be accomplished on foot.',
        },
      ],
      features: [
        'Vibrant downtown with restaurants and cultural venues',
        'State government job hub',
        'Diverse neighborhood options',
        'Good public transit (CDTA)',
        'Growing young professional community',
        'Lower median prices than Niskayuna',
      ],
      lifestyle:
        'Urban professional seeking walkable neighborhoods, cultural amenities, state government careers, and city energy. Easy downtown living without suburban commute.',
      demographics:
        'Diverse population with growing millennial and young professional presence. Artist communities in neighborhoods like Hudson Square.',
    },
    {
      _type: 'neighborhood',
      name: 'Schenectady',
      slug: { _type: 'slug', current: 'schenectady' },
      tagline: 'Affordable Entry Point, Strong Rental Market',
      shortDescription:
        'Historic Stockade district meets revitalization momentum. Lower entry prices ($279K median) with strong cash flow potential make Schenectady ideal for investors seeking monthly income and upside as downtown redevelopment attracts new residents.',
      marketData: {
        medianHomePrice: '$279,000 - $299,000',
        propertyTaxRate: '$13.37 per $1,000 assessed value (city)',
        schoolDistrictRating: 'B- (Niche.com, 2025)',
        walkScore: 76,
        appreciation1Year: '+9.8%',
        medianRent2BR: '$1,471 - $1,695/month',
      },
      buyerPersonas: {
        valueInvestor:
          'Schenectady offers the best cash flow potential: lowest median price ($279K), strong rents ($1,471-$1,695/month), and solid appreciation (+9.8% YoY). Rental yield: 6.7% gross, 4.3% net. Revitalization near Proctors Theatre and Rivers Casino adds upside.',
        urbanProfessional:
          'Historic Stockade district (Walk Score 76) offers character, lower costs, and walkability. Growing downtown has nightlife and dining. GE campus employees benefit from short commute. Revitalization momentum creates vibrant neighborhood feel.',
        qualityOfLifeFamily:
          'Lower home prices mean more house for the money. Schools rated B-. Downtown revitalization bringing new families and community investment. Parks and Mohawk Riverfront Trail access. Consider if willing to accept lower school ratings for affordability.',
      },
      highIntentQuestions: [
        {
          category: 'taxes',
          question: 'Why are Schenectady property taxes so high?',
          answer:
            'City of Schenectady: $13.37 per $1,000 assessed value (2025 budget, up from $12.98). This is 4-5x higher than town rates. However, median homes are much cheaper ($279K vs $387K in Niskayuna), so actual tax bills are often similar. Example: $250K Schenectady home = $3,342/year. $387K Niskayuna home = $11,000+/year.',
        },
        {
          category: 'investment',
          question: 'What rental yields can I expect in Schenectady?',
          answer:
            'Best cash flow of the three neighborhoods. Median rent: $1,471-$1,695/month. Median price: $279K. Gross rent-to-price ratio: 6.7%. After expenses (taxes, insurance, maintenance ~35%), net yield: ~4.3%. Plus appreciation at +9.8% YoY. This is the sweet spot for income-focused investors.',
        },
      ],
      features: [
        'Lowest median home prices ($279K)',
        'Strong rental market ($1,471-$1,695/month)',
        'Historic Stockade district charm',
        'Proctors Theatre revitalization',
        'Rivers Casino (opened 2023)',
        'GE campus nearby',
        'Mohawk River Trail access',
        'Highest appreciation rate (+9.8%)',
      ],
      lifestyle:
        'Value investor seeking cash flow and appreciation. Historic neighborhoods with revitalization momentum. Growing walkability and dining scene. Lower cost of living than Albany and Niskayuna.',
      demographics:
        'Mix of longtime residents, young professionals attracted by revitalization, GE employees, investors. Increasing diversity and millennial interest.',
    },
    {
      _type: 'neighborhood',
      name: 'Niskayuna',
      slug: { _type: 'slug', current: 'niskayuna' },
      tagline: 'Top Schools, Family-Friendly Suburbs',
      shortDescription:
        'Highest-rated school district (A grade, Niche.com 2025) in the Capital Region. Median home $387K reflects premium for education. Perfect for families prioritizing schools, safety, and established suburban community.',
      marketData: {
        medianHomePrice: '$387,000',
        propertyTaxRate: '$2.84 per $1,000 assessed value (town)',
        schoolDistrictRating: 'A (Niche.com, 2025) - #3 in Albany Area',
        walkScore: 45,
        appreciation1Year: '+4.7%',
        medianRent2BR: '$1,918/month',
      },
      buyerPersonas: {
        qualityOfLifeFamily:
          'Niskayuna Central School District (A rating, Niche.com, ranked #3 in Albany Area) is the primary draw. 95% college acceptance, strong test scores. Safe, established suburban community with parks, trails, and family amenities. Worth the premium price for families prioritizing education.',
        valueInvestor:
          'Higher price point ($387K) and lower rent-to-price ratio (6%) means less cash flow than Schenectady. However: strong school district means stable property values, appreciation (+4.7%), and professional tenant base. Better for long-term appreciation strategy than monthly cash flow.',
        urbanProfessional:
          'Niskayuna appeals to professionals who value suburban quality of life over walkability. Commute to Albany/Schenectady: 20-30 minutes. Good schools matter even without kids (resale value). Lower walk score (45) but excellent community amenities.',
      },
      highIntentQuestions: [
        {
          category: 'schools',
          question: 'What makes Niskayuna schools worth the higher prices?',
          answer:
            'Niskayuna Central SD: A rating (2025), #3 Best School Districts in Albany Area (Niche). Test scores: 66% proficient in math, 65% in reading. Niskayuna High School: A grade, ranked #1 in Schenectady County, 95% college acceptance. College Prep focused. Advanced Placement courses available. Strong STEM programs.',
        },
        {
          category: 'lifestyle',
          question: 'Is Niskayuna safe for families?',
          answer:
            'Niskayuna is one of the safest communities in the Capital Region. Lower crime rates than Albany and Schenectady. Established suburban character with neighborhood watch, community policing, and low violent crime. Parks, trails, and family activities throughout town. Great schools attract stable, family-oriented residents.',
        },
      ],
      features: [
        'Top-rated school district (A grade)',
        '95% college acceptance rate',
        'Safe, established suburban community',
        'New homes and modern amenities',
        'Mohawk River Trail access',
        'Parks and family activities',
        'Proximity to I-87 for easy commute',
        'Strong community investment',
      ],
      lifestyle:
        'Quality-of-life family prioritizing top schools, safety, and suburban amenities. Professional community with strong emphasis on education. Values stability and community investment.',
      demographics:
        'Families with school-age children, established professionals, empty nesters attracted by quality schools. Higher median income than Albany and Schenectady. Strong community engagement.',
    },
  ]

  for (const neighborhood of neighborhoods) {
    await createDocument(neighborhood)
  }
}

/**
 * Migrate Pages with Hero Sections
 */
async function migratePages() {
  console.log('\n📄 Migrating Pages...')

  const pages = [
    {
      _type: 'page',
      title: 'Home',
      slug: { _type: 'slug', current: 'home' },
      description: 'Home page for Invest with Saad',
      hero: {
        headline: 'Clarity before you commit capital.',
        description:
          'I help multifamily investors think through buy, sell, and hold decisions — while my team handles the execution that usually eats up your time.',
        ctaText: 'Talk through your next move →',
      },
    },
    {
      _type: 'page',
      title: 'Buying',
      slug: { _type: 'slug', current: 'buying' },
      description: 'Buying page for multifamily investors',
      hero: {
        headline: 'Tired of Deals That Don\'t Quite Pencil?',
        description:
          'I help investors evaluate opportunities with an emphasis on pricing, capital allocation, and decision clarity — so they avoid overpaying or committing to deals that misalign with their portfolio strategy.',
        ctaText: 'Talk through your next move →',
      },
    },
    {
      _type: 'page',
      title: 'Selling',
      slug: { _type: 'slug', current: 'selling' },
      description: 'Selling page for multifamily property owners',
      hero: {
        headline: 'Exit on Your Timeline.',
        description:
          'I help owners evaluate whether to hold, reposition, or sell — and when selling makes sense, target the right buyers to maximize net outcome, not just headline price.',
        ctaText: 'Talk through your next move →',
      },
    },
    {
      _type: 'page',
      title: 'About',
      slug: { _type: 'slug', current: 'about' },
      description: 'About Saad Tai - Multifamily Investment Advisor specializing in buy/sell strategies in upstate New York.',
      ogImage: '/saad tai 2.png',
    },
  ]

  for (const page of pages) {
    await createDocument(page)
  }
}

/**
 * Main migration runner
 */
async function runMigration() {
  console.log('🚀 Starting Data Migration to Sanity CMS...\n')

  try {
    // Check credentials
    if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
      throw new Error('NEXT_PUBLIC_SANITY_PROJECT_ID environment variable not set')
    }
    if (!process.env.SANITY_API_TOKEN) {
      throw new Error('SANITY_API_TOKEN environment variable not set')
    }

    console.log(`📌 Project: ${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}`)
    console.log(`📌 Dataset: ${process.env.NEXT_PUBLIC_SANITY_DATASET}\n`)

    // Run all migrations
    await migrateSiteSettings()
    await migrateBlogPosts()
    await migrateListings()
    await migrateTestimonials()
    await migrateFAQs()
    await migrateNeighborhoods()
    await migratePages()

    // Print summary
    console.log('\n' + '='.repeat(60))
    console.log('✅ MIGRATION COMPLETE')
    console.log('='.repeat(60))
    console.log(`✓ Documents created: ${stats.created}`)
    console.log(`✗ Documents failed: ${stats.failed}`)

    if (stats.errors.length > 0) {
      console.log('\n⚠️  Errors encountered:')
      stats.errors.forEach((error) => {
        console.log(`  • ${error.type} (${error.id}): ${error.error}`)
      })
    }

    console.log('\n📊 Data is now in Sanity Studio!')
    console.log('🔗 Visit: http://localhost:3333 to review and edit content')
    console.log('✨ You can now start transitioning your app to use Sanity queries\n')

    process.exit(stats.failed > 0 ? 1 : 0)
  } catch (error) {
    console.error('\n❌ MIGRATION FAILED')
    console.error(error)
    process.exit(1)
  }
}

// Run it
runMigration()
