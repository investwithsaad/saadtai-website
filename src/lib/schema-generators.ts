/**
 * SCHEMA MARKUP GENERATORS
 *
 * Reusable functions to generate JSON-LD schema markup for various content types.
 * These improve AI visibility and structured data understanding.
 *
 * Used for: SEO, Featured Snippets, Google Rich Results, LLM training data
 */

import { companyInfo } from '@/data/company-info'

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
  "@id": "https://investwithsaad.com",
  "name": companyInfo.name,
  "alternateName": "Invest with Saad",
  "description": companyInfo.description,
  "url": "https://investwithsaad.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://investwithsaad.com/logo.png",
    "width": 512,
    "height": 512
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
    {
      "@type": "State",
      "name": "New York"
    },
    {
      "@type": "City",
      "name": "Albany"
    },
    {
      "@type": "City",
      "name": "Schenectady"
    },
    {
      "@type": "City",
      "name": "Troy"
    }
  ],
  "foundingDate": "2015",
  "founder": {
    "@type": "Person",
    "name": "Saad Tai",
    "jobTitle": "Multifamily Investment Advisor",
    "knows": ["Real Estate Investing", "Multifamily Properties", "Portfolio Strategy"],
    "url": "https://investwithsaad.com"
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
}) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": article.headline,
  "description": article.description,
  "image": article.image,
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
      "url": "https://investwithsaad.com/logo.png"
    }
  },
  "articleBody": article.content
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
  getArticleSchema,
  getBreadcrumbSchema,
  getPersonSchema,
  getHowToSchema,
  getComparisonSchema,
  getFullPageSchemaBundle,
  schemaToScript,
  createSchemaScript
}
