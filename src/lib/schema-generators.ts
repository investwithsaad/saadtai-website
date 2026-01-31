/**
 * SCHEMA MARKUP GENERATORS
 *
 * Reusable functions to generate JSON-LD schema markup for various content types.
 * These improve AI visibility and structured data understanding.
 *
 * Used for: SEO, Featured Snippets, Google Rich Results, LLM training data
 */

import { companyInfo } from '@/data/company-info'
import { BASE_URL } from '@/lib/metadata-factory'

// ============================================================================
// ORGANIZATION SCHEMA (Global - Add to Layout)
// ============================================================================

export const getOrganizationSchema = (config?: {
  aggregateRating?: {
    ratingValue: number
    reviewCount: number
  }
}) => ({
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness", "FinancialService"],
  "@id": `${BASE_URL}/`,
  "name": companyInfo.name,
  "alternateName": "Invest with Saad",
  "description": "I help multifamily investors think through buy, sell, and hold decisions while my team handles the execution. Off-market deals, rigorous analysis, portfolio strategy.",
  "url": `${BASE_URL}/`,
  "logo": {
    "@type": "ImageObject",
    "url": `${BASE_URL}/logo.png`,
    "width": 603,
    "height": 607
  },
  "telephone": companyInfo.contact.phone,
  "email": companyInfo.contact.email,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": companyInfo.contact.address.street,
    "addressLocality": companyInfo.contact.address.city,
    "addressRegion": companyInfo.contact.address.state,
    "postalCode": companyInfo.contact.address.zip,
    "addressCountry": companyInfo.contact.address.country
  },
  "areaServed": [
    "New York",
    "Albany",
    "Schenectady",
    "Troy",
    "Florida",
    "Jacksonville",
    "Duval County"
  ],
  "foundingDate": "2015",
  "founder": {
    "@type": "Person",
    "name": "Saad Tai",
    "jobTitle": "Multifamily Investment Advisor",
    "knows": ["Real Estate Investing", "Multifamily Properties", "Portfolio Strategy"],
    "url": `${BASE_URL}/`,
    "license": [
      {
        "@type": "License",
        "name": "New York Real Estate License",
        "licenseNumber": "10401373295",
        "validIn": { "@type": "State", "name": "New York" }
      },
      {
        "@type": "License",
        "name": "Florida Real Estate License",
        "licenseNumber": "SL3651394",
        "validIn": { "@type": "State", "name": "Florida" }
      }
    ]
  },
  "knowsAbout": [
    "Multifamily Investing",
    "Small Multifamily Properties",
    "Cap Rate Analysis",
    "Cash Flow Analysis",
    "1031 Exchange Strategy",
    "Investment Property Analysis",
    "Portfolio Strategy",
    "Real Estate Market Analysis",
    "Off-Market Deal Sourcing",
    "Investment Property Valuation"
  ],
  "sameAs": [
    "https://www.facebook.com/saadtherealtor",
    "https://www.instagram.com/saadtherealtor"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Multifamily Investment Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Buying Guidance & Deal Analysis",
        "description": "Think through acquisition decisions with rigorous underwriting. Find off-market deals and close with confidence.",
        "url": `${BASE_URL}/buying`
      },
      {
        "@type": "Offer",
        "name": "Strategic Selling & Exit Planning",
        "description": "Plan your exit with clarity. Maximize proceeds and sell at or above asking price with professional execution.",
        "url": `${BASE_URL}/selling`
      },
      {
        "@type": "Offer",
        "name": "Investment Education & Resources",
        "description": "Learn multifamily fundamentals: cap rate analysis, deal evaluation, market strategy, and more.",
        "url": `${BASE_URL}/blog`
      }
    ]
  },
  ...(config?.aggregateRating && {
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": config.aggregateRating.ratingValue,
      "reviewCount": config.aggregateRating.reviewCount
    }
  })
})

// ============================================================================
// ARTICLE/BLOG POST SCHEMA
// ============================================================================

export const getArticleSchema = (article: {
  headline: string
  description: string
  image?: string
  datePublished: string
  dateModified?: string
  author?: {
    name: string
    url?: string
  }
  content: string
  keywords?: string[]
}) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": article.headline,
  "description": article.description,
  ...(article.image && { "image": article.image }),
  "datePublished": article.datePublished,
  "dateModified": article.dateModified || article.datePublished,
  "author": {
    "@type": "Person",
    "name": article.author?.name || "Invest with Saad",
    ...(article.author?.url && { "url": article.author.url })
  },
  "publisher": {
    "@type": "Organization",
    "name": "Invest with Saad",
    "logo": {
      "@type": "ImageObject",
      "url": `${BASE_URL}/logo.png`,
      "width": 603,
      "height": 607
    }
  },
  "articleBody": article.content,
  ...(article.keywords && article.keywords.length > 0 && { "keywords": article.keywords.join(", ") })
})

// ============================================================================
// BREADCRUMB SCHEMA (Navigation Context)
// ============================================================================

export const getBreadcrumbSchema = (items: Array<{
  name: string
  url: string
}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
})

// ============================================================================
// PERSON SCHEMA (Founder/Team)
// ============================================================================

export const getPersonSchema = (person: {
  name: string
  jobTitle: string
  description: string
  linkedinUrl?: string
  image?: string
  education?: {
    school: string
    degree: string
  }
}) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "name": person.name,
  "jobTitle": person.jobTitle,
  "description": person.description,
  "image": person.image,
  ...(person.linkedinUrl && { "sameAs": person.linkedinUrl }),
  ...(person.education && {
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": person.education.school,
      "educationalCredentialAwarded": person.education.degree
    }
  })
})

// ============================================================================
// HOW-TO SCHEMA (Process Steps)
// ============================================================================

export const getHowToSchema = (howTo: {
  name: string
  description: string
  image?: string
  steps: Array<{
    name: string
    description: string
    image?: string
  }>
}) => ({
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": howTo.name,
  "description": howTo.description,
  ...(howTo.image && { "image": howTo.image }),
  "step": howTo.steps.map((step, index) => ({
    "@type": "HowToStep",
    "position": index + 1,
    "name": step.name,
    "text": step.description,
    ...(step.image && { "image": step.image })
  }))
})

// ============================================================================
// REVIEW SCHEMA (For testimonials/reviews)
// ============================================================================

export const getReviewSchema = (review: {
  reviewRating: number
  reviewBody: string
  author: string
  datePublished?: string
}) => ({
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "Organization",
    "name": "Invest with Saad"
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": review.reviewRating,
    "bestRating": 5,
    "worstRating": 1
  },
  "reviewBody": review.reviewBody,
  "author": {
    "@type": "Person",
    "name": review.author
  },
  ...(review.datePublished && { "datePublished": review.datePublished })
})

// ============================================================================
// WEBSITE SCHEMA (For sitelinks and search actions)
// ============================================================================

export const getWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  "url": `${BASE_URL}/`,
  "name": "Invest with Saad - Multifamily Investment Advisor",
  "description": "Strategic multifamily investment guidance in Albany, NY and Jacksonville, FL",
  "potentialAction": [
    {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${BASE_URL}/blog?search={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  ]
})

// ============================================================================
// COMPARISON SCHEMA (For comparison tables)
// ============================================================================

export const getComparisonSchema = (comparison: {
  title: string
  description: string
  items: Array<{
    name: string
    pros: string[]
    cons: string[]
  }>
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": comparison.title,
  "description": comparison.description,
  "articleBody": `Comparison of: ${comparison.items.map(i => i.name).join(", ")}`
})

// ============================================================================
// HELPER: Create Full Page Schema Bundle
// ============================================================================

export const getFullPageSchemaBundle = (config: {
  organizationData: any
  pageSchemas: any[]
  breadcrumbs?: any
}) => [
  config.organizationData,
  ...(config.breadcrumbs ? [config.breadcrumbs] : []),
  ...config.pageSchemas
]

// ============================================================================
// IMPLEMENTATION HELPERS
// ============================================================================

/**
 * Convert schema object to JSON string for script tag
 * Use in: <script dangerouslySetInnerHTML={{__html: schemaToScript(schema)}} />
 */
export const schemaToScript = (schema: any): string => {
  return JSON.stringify(schema, null, 2)
}

/**
 * Create script tag component data
 */
export const createSchemaScript = (schema: any) => ({
  type: "application/ld+json",
  dangerouslySetInnerHTML: {
    __html: schemaToScript(schema)
  }
})

export default {
  getOrganizationSchema,
  getWebsiteSchema,
  getArticleSchema,
  getBreadcrumbSchema,
  getPersonSchema,
  getHowToSchema,
  getComparisonSchema,
  getFullPageSchemaBundle,
  schemaToScript,
  createSchemaScript
}
