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
    title: "Saad Tai Realtor® - Real Estate Agent Albany NY | Buy, Sell, Valuations",
    description: "Saad Tai is a trusted Realtor® in Albany & Schenectady, NY. Expert in home buying, selling, and free valuations. Straight talk, no fluff. Available 24/7.",
    keywords: "real estate agent Albany NY, homes for sale Albany, realtor Schenectady, buy sell home, real estate Upstate NY",
    canonical: "https://saadtherealtor.com/"
  },
  solutions: {
    title: "Real Estate Services | Home Selling, Buying, Valuations | Saad Tai",
    description: "Expert real estate services: home selling with 6-step marketing, buyer representation, and free home valuations. Albany & Schenectady area.",
    keywords: "home selling, home buying, home valuation, real estate services, realtor services",
    canonical: "https://saadtherealtor.com/solutions"
  },
  caseStudies: {
    title: "Client Testimonials & Success Stories | Saad Tai Realtor",
    description: "Real client testimonials from satisfied buyers and sellers. See why clients trust Saad Tai for their real estate needs.",
    keywords: "real estate testimonials, client reviews, home selling success, buyer testimonials",
    canonical: "https://saadtherealtor.com/case-studies"
  },
  partners: {
    title: "Partnerships & Affiliations | Saad Tai",
    description: "Strategic partnerships with lenders, inspectors, and title companies to serve you better.",
    keywords: "real estate partnerships, lenders, home inspectors",
    canonical: "https://saadtherealtor.com/partners"
  },
  aboutUs: {
    title: "About Saad Tai | Real Estate Agent License #10401373295 | Albany NY",
    description: "Meet Saad Tai, licensed Realtor® with 10+ years of real estate experience. Deep knowledge of Albany & Schenectady neighborhoods.",
    keywords: "about realtor, real estate agent biography, Saad Tai, licensed realtor Albany",
    canonical: "https://saadtherealtor.com/about-us"
  },
  contactUs: {
    title: "Contact Saad Tai Realtor | Phone, Email, or Schedule Consultation",
    description: "Ready to buy or sell? Contact Saad Tai for a free consultation. Available 24/7 by phone, email, or text.",
    keywords: "contact realtor, real estate agent contact, Saad Tai contact",
    canonical: "https://saadtherealtor.com/contact-us"
  },
  faq: {
    title: "Real Estate FAQ | Home Buying, Selling & Valuation Questions | Saad Tai",
    description: "Get answers to common real estate questions about home selling, buying, valuations, and the process.",
    keywords: "real estate FAQ, home buying questions, selling a home, home valuation",
    canonical: "https://saadtherealtor.com/faq"
  },
  privacy: {
    title: "Privacy Policy | Saad Tai Realtor",
    description: "Read Saad Tai's privacy policy to understand how we protect your information.",
    keywords: "privacy policy, data protection",
    canonical: "https://saadtherealtor.com/privacy-policy"
  },
  terms: {
    title: "Terms of Service | Saad Tai Realtor",
    description: "Review Saad Tai's terms of service.",
    keywords: "terms of service, legal",
    canonical: "https://saadtherealtor.com/terms-of-service"
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
    "url": "https://saadtherealtor.com",
    "telephone": "+1-518-348-9535",
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
