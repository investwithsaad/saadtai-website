// SEO Meta Tags Configuration
// REAL ESTATE - SAAD TAI REALTOR
// Albany & Schenectady Area - NY Real Estate Agent
export interface PageMeta {
  title: string
  description: string
  keywords: string
  ogImage?: string
  canonical?: string
  schema?: Record<string, any>
}

export const pageMetaData: Record<string, PageMeta> = {
  home: {
    title: "Invest with Saad | Multifamily Investment Advisor | Albany, Schenectady",
    description: "Clarity before you commit capital. I help multifamily investors think through buy, sell, and hold decisions while my team handles the execution. Off-market deals, investor analysis, portfolio strategy.",
    keywords: "multifamily investing, cap rates, off-market deals, investment property analysis, 1031 exchange, investor real estate advisor, Albany, Schenectady, small multifamily, portfolio strategy, cash flow analysis",
    canonical: "https://www.investwithsaad.com/"
  },
  buying: {
    title: "Buying Multifamily Properties | Off-Market Deals & Analysis | Invest with Saad",
    description: "Strategic guidance for buying multifamily properties. Investor-grade analysis, honest underwriting, cap rate expertise. Avoid costly mistakes. Capital Region focus.",
    keywords: "buy multifamily property, off-market deals, investment property analysis, cap rate analysis, multifamily investing strategies",
    canonical: "https://www.investwithsaad.com/buying"
  },
  selling: {
    title: "Selling Multifamily Properties | Strategic Exit Planning | Invest with Saad",
    description: "Strategic exit planning for multifamily investors. 1031 exchange coordination, portfolio optimization, maximize proceeds. Expert execution. Capital Region specialist.",
    keywords: "sell multifamily property, 1031 exchange, exit strategy, portfolio simplification, maximize property sale",
    canonical: "https://www.investwithsaad.com/selling"
  },
  listings: {
    title: "Multifamily Listings | Investment Properties | Invest with Saad",
    description: "Curated multifamily investment properties in the Capital Region. Expert analysis included. Access both opportunities and MLS listings. Investor-focused.",
    keywords: "multifamily listings, investment properties for sale, real estate listings Albany, multifamily properties",
    canonical: "https://www.investwithsaad.com/listings"
  },
  vipInvestorList: {
    title: "VIP Investor List | Get Off-Market Deals | Invest with Saad",
    description: "VIP Investor List for exclusive opportunities. Strategic deals with expert analysis. Investor network access. Capital Region focused.",
    keywords: "off-market deals, investment opportunities, multifamily deals, real estate investor network",
    canonical: "https://www.investwithsaad.com/vip-investor-list"
  },
  blog: {
    title: "Blog | Multifamily Investment Insights | Invest with Saad",
    description: "Data-driven insights on multifamily investing. Market analysis, strategy guides, cap rate expertise. For Capital Region investors building portfolios.",
    keywords: "multifamily investing blog, real estate investment strategies, market analysis, cap rate analysis",
    canonical: "https://www.investwithsaad.com/blog"
  },
  privacy: {
    title: "Privacy Policy | Invest with Saad",
    description: "Read Invest with Saad's privacy policy to understand how we protect your information.",
    keywords: "privacy policy, data protection",
    canonical: "https://www.investwithsaad.com/privacy-policy"
  },
  terms: {
    title: "Terms of Service | Invest with Saad",
    description: "Review Invest with Saad's terms of service.",
    keywords: "terms of service, legal",
    canonical: "https://www.investwithsaad.com/terms-of-service"
  }
}

// Schema.org Real Estate Agent Schema
export const generateServiceSchema = (title: string, description: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": title,
  "description": description,
  "provider": {
    "@type": "Organization",
    "name": "Saad Tai Realtor®",
    "url": "https://www.investwithsaad.com",
    "telephone": "+1-518-667-9351",
    "email": "saadtherealtor1@gmail.com"
  },
  "areaServed": ["Albany, NY", "Schenectady, NY"],
  "serviceType": "Real Estate Services"
})

// FAQPage Schema
export const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": []
}

// BreadcrumbList Schema
export const generateBreadcrumbs = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
})
