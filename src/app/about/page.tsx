import type { Metadata } from 'next'
import { SchemaRenderer } from '@/components/SchemaRenderer'
import AboutPageContent from './about-page-content'
import { createPageMetadata } from '@/lib/metadata-factory'
import { BASE_URL } from '@/lib/metadata-factory'
import { getPage } from '@/lib/sanity.queries'

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage('about')

  return createPageMetadata({
    title: page?.title || 'Saad Tai | Multifamily Investment Advisor',
    description: page?.description || 'Saad Tai is a licensed real estate advisor specializing in multifamily investing, cap rate analysis, portfolio strategy, and investor-grade transaction management. Serving Capital Region, NY and Kissimmee, FL.',
    path: '/about',
    ogImage: page?.ogImage?.asset?.url || '/saad tai 2.png',
  })
}

// Person Schema for Saad Tai
const saadTaiPersonSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Saad Tai",
  "url": `${BASE_URL}/about`,
  "image": `${BASE_URL}/saad.png`,
  "jobTitle": "Multifamily Investment Advisor",
  "description": "Licensed Real Estate Advisor specializing in multifamily investing, cap rate analysis, portfolio strategy, and exit planning. Serving Capital Region, NY and Kissimmee, FL investors.",
  "telephone": "+1-518-667-9351",
  "email": "saadtherealtor1@gmail.com",
  "sameAs": [
    "https://www.linkedin.com/in/saad-tai",
    "https://www.facebook.com/profile.php?id=61577367974508",
    "https://www.instagram.com/saadtherealtor/"
  ],
  "workLocation": [
    {
      "@type": "Place",
      "name": "Capital Region",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Albany",
        "addressRegion": "NY",
        "addressCountry": "USA"
      }
    },
    {
      "@type": "Place",
      "name": "Kissimmee",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kissimmee",
        "addressRegion": "FL",
        "addressCountry": "USA"
      }
    }
  ],
  "knowsAbout": [
    "Multifamily Investing",
    "Cap Rate Analysis",
    "Cash Flow Analysis",
    "1031 Exchange Strategy",
    "Investment Property Analysis",
    "Portfolio Strategy",
    "Real Estate Market Analysis",
    "Off-Market Deal Sourcing",
    "Exit Planning"
  ],
  "affiliation": {
    "@type": "Organization",
    "name": "Invest with Saad",
    "url": `${BASE_URL}`
  },
  "license": [
    {
      "@type": "License",
      "name": "New York Real Estate License",
      "licenseNumber": "10401373295",
      "validIn": {
        "@type": "State",
        "name": "New York"
      }
    },
    {
      "@type": "License",
      "name": "Florida Real Estate License",
      "licenseNumber": "SL3651394",
      "validIn": {
        "@type": "State",
        "name": "Florida"
      }
    }
  ],
  "credential": {
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "Realtor®"
  }
}

export default async function AboutPage() {
  const page = await getPage('about')

  return (
    <>
      {/* Render Person schema */}
      <SchemaRenderer schema={saadTaiPersonSchema} />
      <AboutPageContent hero={page?.hero} />
    </>
  )
}
