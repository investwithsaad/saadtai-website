/**
 * REAL ESTATE SOLUTIONS/SERVICES
 *
 * Services offered: Home Selling, Home Buying, Home Valuation
 * Generates dynamic pages at /solutions/[solution-id]
 */

export interface Solution {
  id: string
  title: string
  description: string
  longDescription?: string
  features?: string[]
  ratesAndTerms?: {
    availability?: string
    timeline?: string
    requirement?: string
    support?: string
  }
  commonQuestions?: Array<{
    id: string
    q: string
    a: string
  }>
  bestFor?: string[]
  qualificationCriteria?: {
    minimumRevenue?: string
    minimumTimeInBusiness?: string
    minimumCreditScore?: string
    requirements?: string
  }
}

export const fundingSolutions: Solution[] = [
  {
    id: "home-selling",
    title: "Home Selling",
    description: "Sell your home faster with our proven 6-step marketing strategy and neighborhood expertise.",
    longDescription: "Selling a home involves more than just listing it. We handle the entire process: pricing strategy, professional marketing, buyer attraction, negotiation, and closing coordination. Our 6-step approach ensures your home gets maximum exposure and you receive top dollar.",
    features: [
      "Professional home photography and virtual tours",
      "Strategic pricing analysis (CMA)",
      "Marketing across 50+ online platforms",
      "Targeted buyer outreach and lead generation",
      "Negotiation strategy to maximize price",
      "Open houses and private showings",
      "Closing coordination and document management",
      "24/7 availability for questions"
    ],
    ratesAndTerms: {
      availability: "Homes in Albany to Schenectady area",
      timeline: "Average 30-90 days from listing to closing",
      requirement: "Title clarity and basic property info",
      support: "Direct access to Saad, 24/7 communication"
    },
    commonQuestions: [
      {
        id: "how-long-to-sell",
        q: "How long will it take to sell my home?",
        a: "Average timeline is 30-90 days depending on price, condition, and market. Homes priced correctly and in good condition typically sell in 30-45 days."
      },
      {
        id: "staging-and-repairs",
        q: "Do I need to make repairs or stage my home?",
        a: "Strategic staging helps buyers envision themselves in your home. Major repairs aren't always necessary—we price accordingly if needed. We provide a staging guide."
      },
      {
        id: "what-about-my-stuff",
        q: "What do I do with my furniture and personal items?",
        a: "Decluttering and depersonalizing is key. Remove family photos, excess furniture, and personal collections. This helps buyers imagine their own lives in the home."
      },
      {
        id: "listing-price-too-high",
        q: "What if my home doesn't sell at the listed price?",
        a: "We adjust pricing based on market feedback. Better to price right from the start and sell quickly than price high and sit on the market."
      }
    ],
    bestFor: [
      "Homeowners selling primary residences",
      "Rental property owners",
      "Downsizers and retirees",
      "Investors divesting properties",
      "Relocating professionals"
    ],
    qualificationCriteria: {
      minimumRevenue: "Any homeowner with equity",
      minimumTimeInBusiness: "Own property with clear title",
      minimumCreditScore: "No credit requirement",
      requirements: "Property details, title information, timeline"
    }
  },

  {
    id: "home-buying",
    title: "Home Buying",
    description: "Find your dream home with expert guidance through every step of the buying process.",
    longDescription: "Buying a home is a major financial decision. We guide you from pre-approval through closing, providing neighborhood expertise, market insights, negotiation strategy, and access to all available listings. Your needs and budget drive our search.",
    features: [
      "Pre-approval guidance and lender coordination",
      "Neighborhood analysis and market research",
      "Access to MLS and off-market listings",
      "Property showings and comparative analysis",
      "Offer strategy and negotiation representation",
      "Inspection coordination and contingency management",
      "Appraisal and title management",
      "Closing preparation and walkthrough",
      "24/7 availability for questions and concerns"
    ],
    ratesAndTerms: {
      availability: "Unlimited showings, no buyer's agent fees",
      timeline: "30-60 days average from offer to closing",
      requirement: "Pre-approval letter (1-3 day process)",
      support: "Direct access, constant communication, all your questions answered"
    },
    commonQuestions: [
      {
        id: "do-i-need-preapproval",
        q: "Do I need pre-approval before looking at homes?",
        a: "Yes. Pre-approval shows sellers you're serious, narrows your search to affordable homes, and strengthens your offer. The process takes 1-3 days."
      },
      {
        id: "how-much-can-i-afford",
        q: "How much home can I afford?",
        a: "Lenders typically approve mortgages up to 28-31% of gross monthly income for housing costs. We help you determine a comfortable budget considering taxes, insurance, and HOA."
      },
      {
        id: "multiple-offers",
        q: "What if multiple people make offers on the same home?",
        a: "We develop a competitive offer strategy: price, contingencies, closing timeline, and earnest money. We position your offer to win while protecting your interests."
      },
      {
        id: "inspection-issues",
        q: "What if the inspection finds problems?",
        a: "You have options: request repairs, ask for credit at closing, or renegotiate price. We negotiate on your behalf to protect your investment."
      }
    ],
    bestFor: [
      "First-time homebuyers",
      "Families buying in Albany-Schenectady area",
      "Relocating professionals",
      "Real estate investors",
      "Buyers upgrading or downsizing"
    ],
    qualificationCriteria: {
      minimumRevenue: "Stable employment income",
      minimumTimeInBusiness: "Typically 2+ years employment history",
      minimumCreditScore: "620+ (varies by lender, FHA available)",
      requirements: "Pre-approval, income verification, valid ID"
    }
  },

  {
    id: "home-valuation",
    title: "Home Valuation",
    description: "Get a FREE professional valuation of your home with zero obligation.",
    longDescription: "Curious what your home is worth? We provide a FREE Comparative Market Analysis (CMA) showing recent sales of similar homes in your neighborhood, current market conditions, and your home's estimated value. No obligation, no pressure.",
    features: [
      "Comparable sales analysis (CMA)",
      "Current market conditions assessment",
      "Neighborhood trend analysis",
      "Property-specific value factors",
      "Written valuation report",
      "No-obligation consultation",
      "Free with no strings attached"
    ],
    ratesAndTerms: {
      availability: "Free valuation for Albany to Schenectady area",
      timeline: "24-48 hours for report",
      requirement: "Basic property information",
      support: "Follow-up consultation included"
    },
    commonQuestions: [
      {
        id: "free-valuation-obligation",
        q: "Is the free valuation worth it? Any obligation?",
        a: "Absolutely—it's genuine market data. No obligation to list or do anything. Use it to understand your property's value."
      },
      {
        id: "valuation-vs-appraisal",
        q: "How is a valuation different from an appraisal?",
        a: "A valuation is my professional opinion of market value. An appraisal is an official estimate for lending purposes. Both are useful."
      },
      {
        id: "how-often-change",
        q: "How often should I get a new valuation?",
        a: "Market values shift. If you haven't checked in a year or two, getting a fresh valuation makes sense."
      }
    ],
    bestFor: [
      "Curious homeowners",
      "Refinancing considerations",
      "Estate planning",
      "Insurance coverage verification",
      "Divorce/separation settlements"
    ],
    qualificationCriteria: {
      minimumRevenue: "Any homeowner",
      minimumTimeInBusiness: "Own or are considering property",
      minimumCreditScore: "No credit check required",
      requirements: "Basic property information"
    }
  }
]

export default fundingSolutions
