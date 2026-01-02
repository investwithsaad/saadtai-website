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
    canonical: "https://investwithsaad.com/"
  },
  buying: {
    title: "Buying Multifamily Properties | Off-Market Deals & Analysis | Invest with Saad",
    description: "Find off-market multifamily deals. Real investor comps, honest underwriting, avoid overpaying. Strategic guidance for buying multifamily properties in the Capital Region.",
    keywords: "buy multifamily property, off-market deals, investment property analysis, cap rate analysis, multifamily investing strategies",
    canonical: "https://investwithsaad.com/buying"
  },
  selling: {
    title: "Selling Multifamily Properties | Strategic Exit Planning | Invest with Saad",
    description: "Sell your multifamily property strategically. 1031 exchange guidance, portfolio simplification, maximize proceeds. Expert exit planning for Capital Region investors.",
    keywords: "sell multifamily property, 1031 exchange, exit strategy, portfolio simplification, maximize property sale",
    canonical: "https://investwithsaad.com/selling"
  },
  listings: {
    title: "Multifamily Listings | Investment Properties | Invest with Saad",
    description: "Browse available multifamily investment properties in the Capital Region. Off-market opportunities and MLS listings for small multifamily investors.",
    keywords: "multifamily listings, investment properties for sale, real estate listings Albany, multifamily properties",
    canonical: "https://investwithsaad.com/listings"
  },
  vipInvestorList: {
    title: "VIP Investor List | Get Off-Market Deals | Invest with Saad",
    description: "Join the VIP Investor List to receive off-market multifamily deals before they hit the MLS. Direct access to investment opportunities in the Capital Region.",
    keywords: "off-market deals, investment opportunities, multifamily deals, real estate investor network",
    canonical: "https://investwithsaad.com/vip-investor-list"
  },
  blog: {
    title: "Blog | Multifamily Investment Insights | Invest with Saad",
    description: "Multifamily investment insights, market analysis, and strategies for Capital Region investors. Cap rates, cash flow, market analysis, and portfolio guidance.",
    keywords: "multifamily investing blog, real estate investment strategies, market analysis, cap rate analysis",
    canonical: "https://investwithsaad.com/blog"
  },
  privacy: {
    title: "Privacy Policy | Invest with Saad",
    description: "Read Invest with Saad's privacy policy to understand how we protect your information.",
    keywords: "privacy policy, data protection",
    canonical: "https://investwithsaad.com/privacy-policy"
  },
  terms: {
    title: "Terms of Service | Invest with Saad",
    description: "Review Invest with Saad's terms of service.",
    keywords: "terms of service, legal",
    canonical: "https://investwithsaad.com/terms-of-service"
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
    "url": "https://investwithsaad.com",
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
