/**
 * SAAD TAI - REAL ESTATE AGENT
 *
 * Master information hub for the real estate business
 * Location: Albany/Schenectady, NY area
 * License: #10401373295
 */

// ============================================================================
// COMPANY BASICS
// ============================================================================

export const companyInfo = {
  name: "Saad Tai",
  tagline: "Real Estate Agent & Licensed Realtor",

  description: "Saad Tai is a licensed real estate agent serving the Albany to Schenectady area with expertise in buying, selling, and valuing properties. With boots-on-the-ground neighborhood knowledge and a commitment to straight talk with zero pressure, Saad helps clients navigate every step of their real estate journey.",

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
  title: "Realtor® & Real Estate Agent",
  background: "Licensed real estate agent with deep neighborhood knowledge of Albany to Schenectady area. Specializes in strategic home selling, buyer representation, and property valuation.",
  motivation: "Real estate is my day job, night hobby, and weekend conversation starter. I treat every client's move like it's my own money on the line.",
  personalStory: `I've walked, shown, or knocked on just about every street from Albany to Schenectady. That boots-on-the-ground insight helps you price right, spot hidden value, and avoid surprises.`,

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
  tagline: "Straight Talk, Territory Knowledge, Results",

  differentiators: [
    {
      label: "Honest & Direct",
      description: "No fluff, no pressure. You get honest answers about pricing, market conditions, and your options. If something doesn't make sense, I'll tell you."
    },
    {
      label: "Deep Local Knowledge",
      description: "I've walked every street from Albany to Schenectady. That boots-on-the-ground insight means I spot hidden value and avoid surprises."
    },
    {
      label: "Always Available",
      description: "Late-night questions? Weekend showings? I'm responsive and present. Text, call, email—you get fast responses when it matters."
    }
  ],

  competitiveComparisons: {
    vs_other_agents: {
      your_advantage_1: "Personalized attention vs. treating you as just another transaction",
      your_advantage_2: "Deep neighborhood knowledge vs. surface-level listings",
      your_advantage_3: "24/7 responsiveness vs. office hours mentality"
    }
  }
}

// ============================================================================
// CLIENT TYPES & IDEAL CUSTOMERS
// ============================================================================

export const qualificationCriteria = {
  general: {
    seller_profile: "Homeowners looking to sell quickly, strategically, or on their terms",
    buyer_profile: "First-time buyers, investors, and families searching for their next home",
    investor_profile: "Real estate investors looking for acquisition, flip, or rental opportunities",
    ideal_geography: "Albany to Schenectady area (Capital Region, NY)"
  },

  serviceTypes: {
    selling: {
      description: "Home selling with strategic marketing and expert negotiation",
      ideal_for: ["Busy professionals", "Rental property owners", "Downsizers", "Quick sales"]
    },
    buying: {
      description: "Home buying with expert guidance and market knowledge",
      ideal_for: ["First-time homebuyers", "Investors", "Relocating families"]
    },
    investment: {
      description: "Investment property guidance and acquisition strategy",
      ideal_for: ["Real estate investors", "Portfolio builders", "Fix-and-flip opportunities"]
    }
  },

  disqualifiers: []
}

// ============================================================================
// KEY MESSAGES
// ============================================================================

export const messagingTemplates = {
  sellingValue: {
    headline: "Ready to Sell? Let's Get You Top Dollar.",
    message: "With my proven 6-step marketing strategy and deep knowledge of every neighborhood, I'll attract serious buyers and negotiate the best price for you."
  },

  buyingValue: {
    headline: "Find Your Dream Home With Expert Guidance",
    message: "I've walked every street from Albany to Schenectady. Let me use that knowledge to help you find the right property at the right price."
  },

  trustMessage: {
    headline: "Straight Talk, No Pressure",
    message: "Honest answers. Clear numbers. I treat your move like it's my own money on the line—because your success is my success."
  },

  availabilityMessage: {
    headline: "Always Here for You",
    message: "Text, call, or email—anytime. Late-night questions? Weekend showings? I'm responsive and present when you need me."
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
