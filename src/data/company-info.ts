/**
 * SAAD TAI - MULTIFAMILY INVESTMENT ADVISOR
 *
 * Master information hub for the investment advisory business
 * Focus: Multifamily property investing & portfolio strategy
 * Location: Albany/Schenectady, NY area (Capital Region)
 * License: #10401373295
 */

// ============================================================================
// COMPANY BASICS
// ============================================================================

export const companyInfo = {
  name: "Invest with Saad",
  tagline: "Multifamily Investment Advisor & Portfolio Strategy Guide",

  description: "Invest with Saad specializes in strategic guidance for small multifamily investors in the Capital Region. We help investors scale smarter, sell faster, and plan better exits through disciplined analysis, off-market deal sourcing, and responsive transaction management. With 10+ years of boots-on-the-ground market knowledge, we help you avoid costly mistakes and maximize your portfolio returns.",

  contact: {
    phone: "+1 518-348-9535",
    email: "saadtherealtor1@gmail.com",
    address: {
      street: "Albany to Schenectady Area",
      city: "Albany",
      state: "NY",
      zip: "12207",
      country: "USA"
    }
  },

  // License and credentials
  license: {
    number: "10401373295",
    title: "Realtor®"
  },

  // Company metrics
  metrics: {
    areaServed: "Albany to Schenectady, NY",
    yearInBusiness: "Active",
    repeatClientRate: "95%+",
    clientSatisfaction: "Highly recommended by clients"
  }
}

// ============================================================================
// FOUNDER/AGENT INFORMATION
// ============================================================================

export const founder = {
  name: "Saad Tai",
  title: "Multifamily Investment Advisor & Real Estate Specialist",
  background: "Real estate investment specialist with 10+ years of experience helping small multifamily investors in the Capital Region. Deep market knowledge of Albany, Schenectady, and surrounding areas. Specializes in deal analysis, portfolio strategy, and investor-grade transaction management.",
  motivation: "Real estate investing is my day job, night hobby, and weekend conversation starter. I treat every client's investment like it's my own money on the line—because I only recommend deals that actually work.",
  personalStory: `I've walked, analyzed, and closed properties across every neighborhood from Albany to Schenectady. That boots-on-the-ground insight helps investors identify opportunities, avoid overpaying, and time their exits strategically.`,

  credentials: {
    certifications: ["Realtor®"],
    licenses: ["NY Real Estate License #10401373295"],
    memberships: ["Real Estate Board"]
  },

  linkedinUrl: "https://www.linkedin.com/in/saad-tai",
  facebookUrl: "https://www.facebook.com/profile.php?id=61577367974508",
  instagramUrl: "https://www.instagram.com/saadtherealtor/"
}

// ============================================================================
// CORE VALUES - SAAD'S APPROACH
// ============================================================================

export const coreValues = [
  {
    acronym: "S",
    value: "Straight Talk",
    description: "Honest answers, clear numbers, and zero pressure. If something doesn't make sense, I'll tell you—and show you the smarter option."
  },
  {
    acronym: "T",
    value: "Territory Knowledge",
    description: "I've walked, shown, or knocked on just about every street from Albany to Schenectady. That boots-on-the-ground insight helps you price right and spot hidden value."
  },
  {
    acronym: "R",
    value: "Results Focused",
    description: "Most clients want top dollar fast—that's where I shine. Your goals become my mission, and I handle every detail from inspections to negotiations."
  },
  {
    acronym: "A",
    value: "Always Available",
    description: "Late-night questions? Weekend showings? I'm here. Text, call, or email—you get fast responses because your move matters."
  },
  {
    acronym: "T",
    value: "Trust & Integrity",
    description: "I treat your move like it's my own money on the line. Your success is my success, and I won't give up no matter the circumstance."
  }
]

export const philosophy = {
  headline: "Straight Talk, No Fluff",
  description: "Real estate is my day job, night hobby, and weekend conversation starter. I bring genuine expertise and authentic care to every transaction.",
  approach: "I focus on what matters: getting you the best outcome with clarity, honesty, and unwavering commitment to your goals."
}

// ============================================================================
// REAL ESTATE PROCESS
// ============================================================================

// Removed: Serve Funding process data
export const businessProcess = [
  {
    step: 1,
    name: "Understand Your Situation",
    description: "We listen to your goals and explore what you really need from this transaction.",
    details: [
      "Consultation about your timeline and goals",
      "Honest assessment of your property or search",
      "Clear explanation of the current market",
      "Zero pressure, just real talk"
    ]
  },
  {
    step: 2,
    name: "Create Your Strategy",
    description: "Based on your goals and the market, we build a plan designed to get you the best outcome.",
    details: [
      "Competitive market analysis",
      "Pricing or search strategy tailored to you",
      "Marketing or buyer attraction plan",
      "Timeline and next steps clearly defined",
      "My proven 6-step approach explained"
    ]
  },
  {
    step: 3,
    name: "Get to SOLD (or FOUND)",
    description: "I handle inspections, negotiations, and all the details so you get the best deal and smooth closing.",
    details: [
      "Active showings or property search",
      "Negotiation on your behalf",
      "Inspection and appraisal guidance",
      "Late-night support through closing",
      "Every step handled with your interests first"
    ]
  }
]

// ============================================================================
// COMPETITIVE POSITIONING
// ============================================================================

export const competitivePositioning = {
  tagline: "Scale Smarter. Exit Cleaner. Maximize Your Earnings.",

  differentiators: [
    {
      label: "Investor-Grade Analysis",
      description: "Conservative underwriting, cap rate focus, and investor-grade property analysis. I don't recommend deals based on fantasy numbers—only deals that actually pencil and fit your criteria."
    },
    {
      label: "Off-Market Sourcing",
      description: "Access to off-market deals and an investor network (lenders, property managers, contractors, attorneys). You get opportunities before they hit the MLS."
    },
    {
      label: "Portfolio Strategy & Exits",
      description: "Help with timing, 1031 exchange coordination, and strategic exit planning. My focus is on growing your portfolio, not just closing transactions."
    },
    {
      label: "Responsive & Direct",
      description: "I call you back within 24 hours. Straight talk about what works and what doesn't. I make money when deals close—so I only recommend moves that work for you."
    }
  ],

  competitiveComparisons: {
    vs_other_agents: {
      your_advantage_1: "Investor specialist vs. generalist agents who don't understand multifamily",
      your_advantage_2: "Off-market deal access vs. competing on MLS listings",
      your_advantage_3: "Portfolio strategy focus vs. transaction-focused approach",
      your_advantage_4: "Network of investor resources vs. limited service offerings"
    }
  }
}

// ============================================================================
// CLIENT TYPES & IDEAL CUSTOMERS
// ============================================================================

export const qualificationCriteria = {
  general: {
    primary_profile: "Small multifamily investors (2-10+ units) looking to buy, sell, or optimize their portfolio",
    investor_personas: [
      "The Scaling Investor - Own 5-10+ units, actively buying and selling",
      "The Accidental Owner - Inherited or accumulated 2-6 units, looking for a better strategy",
      "The Capital Recycler - Selling properties and looking to redeploy capital strategically"
    ],
    ideal_geography: "Capital Region, NY (Albany, Schenectady, Troy, and surrounding areas)"
  },

  serviceTypes: {
    offMarketSourcing: {
      description: "Access to off-market deals before they hit the MLS",
      ideal_for: ["Investors looking for below-market opportunities"]
    },
    investorAnalysis: {
      description: "Investor-grade property analysis with cap rates, cash flow, and true returns",
      ideal_for: ["Serious investors who want honest numbers, not fantasy projections"]
    },
    portfolioStrategy: {
      description: "Strategic planning for buying, selling, and portfolio optimization",
      ideal_for: ["Investors looking to scale or time their exits strategically"]
    },
    exitPlanning: {
      description: "1031 exchange coordination and exit strategy planning",
      ideal_for: ["Investors ready to sell and redeploy capital"]
    }
  },

  disqualifiers: [
    "Investors looking for quick flips without long-term strategy",
    "Deal hunters who won't take time to analyze properly",
    "Clients expecting unrealistic returns or market-beating guarantees"
  ]
}

// ============================================================================
// KEY MESSAGES
// ============================================================================

export const messagingTemplates = {
  investorValue: {
    headline: "Scale Smarter. Exit Cleaner. Maximize Your Earnings.",
    message: "Strategic guidance for multifamily investors. Buy better deals with investor-grade analysis, access off-market opportunities, and plan exits that maximize your portfolio returns."
  },

  portfolioStrategy: {
    headline: "Grow Your Portfolio With Discipline",
    message: "I help you identify opportunities that fit your criteria, analyze them honestly, and execute strategically. Off-market deals, investor networks, and responsive transaction management—that's how we scale."
  },

  straightTalkMessage: {
    headline: "Straight Talk. Only Deals That Pencil.",
    message: "I don't recommend deals based on fantasy rents. Conservative analysis, honest numbers, and investor-grade underwriting. I make money when deals close—so I only recommend moves that work for you."
  },

  responsivePartnerMessage: {
    headline: "Your Responsive Investment Partner",
    message: "I call you back within 24 hours. Direct communication. Strategic guidance. I treat your portfolio like it's my own—because your success is how I succeed."
  }
}

// ============================================================================
// VERIFICATION CHECKLIST - ENSURE ALL DATA IS ACCURATE BEFORE LAUNCH
// ============================================================================

export const verificationChecklist = {
  companyBasics: [
    "Company name and spelling verified",
    "Phone number tested and working",
    "Email address active and monitored",
    "Address confirmed and current",
    "Founding date accurate",
    "Team size/employee count current"
  ],

  founderInfo: [
    "Founder name and correct spelling",
    "Title/role accurate",
    "Background story verified",
    "Education/credentials confirmed",
    "LinkedIn URL correct and profile complete",
    "Personal story with founder approval"
  ],

  coreContent: [
    "Company description is clear and compelling",
    "Core values resonate with target audience",
    "Company philosophy is unique and defensible",
    "Process steps are accurate and follow real workflow"
  ],

  competitivePositioning: [
    "Differentiators are genuine and defensible",
    "Competitive comparisons are fair and accurate",
    "Tagline is memorable and authentic",
    "Customer testimonials/proof points obtained"
  ],

  qualifications: [
    "Ideal customer profile clearly defined",
    "Minimum requirements realistic",
    "Disqualifiers well-documented",
    "Product requirements up-to-date"
  ],

  messaging: [
    "Key messaging aligns with strategy",
    "Value propositions are clear",
    "Tone and voice consistent throughout",
    "All claims are substantiated"
  ]
}

export default {
  companyInfo,
  founder,
  coreValues,
  philosophy,
  businessProcess,
  competitivePositioning,
  qualificationCriteria,
  messagingTemplates,
  verificationChecklist
}
