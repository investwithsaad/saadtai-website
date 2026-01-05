import type { Metadata } from 'next'
import { SchemaRenderer } from '@/components/SchemaRenderer'
import AboutPageContent from './about-page-content'

export const metadata: Metadata = {
  title: 'Saad Tai | Multifamily Investment Advisor',
  description: 'Saad Tai is a licensed real estate advisor specializing in multifamily investing, cap rate analysis, portfolio strategy, and investor-grade transaction management for Capital Region investors.',
  keywords: 'Saad Tai, multifamily investment advisor, real estate advisor Albany, Schenectady, capital region, investment properties, cap rates, portfolio strategy',
  alternates: {
    canonical: 'https://www.investwithsaad.com/about',
  },
  openGraph: {
    title: 'Saad Tai | Multifamily Investment Advisor',
    description: 'Licensed advisor specializing in multifamily investing, cap rate analysis, and strategic portfolio management in the Capital Region.',
    url: 'https://www.investwithsaad.com/about',
    type: 'profile',
    images: [
      {
        url: 'https://www.investwithsaad.com/saad.png',
        width: 400,
        height: 500,
        alt: 'Saad Tai - Multifamily Investment Advisor',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saad Tai | Multifamily Investment Advisor',
    description: 'Straight talk about multifamily investing. 10+ years Capital Region expertise. Licensed Realtor.',
    images: ['https://www.investwithsaad.com/saad.png'],
  },
}

// Person Schema for Saad Tai
const saadTaiPersonSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Saad Tai",
  "url": "https://www.investwithsaad.com/about",
  "image": "https://www.investwithsaad.com/saad.png",
  "jobTitle": "Multifamily Investment Advisor",
  "description": "Licensed Real Estate Advisor specializing in multifamily investing, cap rate analysis, portfolio strategy, and exit planning for Capital Region investors.",
  "telephone": "+1-518-667-9351",
  "email": "saadtherealtor1@gmail.com",
  "sameAs": [
    "https://www.linkedin.com/in/saad-tai",
    "https://www.facebook.com/profile.php?id=61577367974508",
    "https://www.instagram.com/saadtherealtor/"
  ],
  "workLocation": {
    "@type": "Place",
    "name": "Capital Region",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Albany",
      "addressRegion": "NY",
      "addressCountry": "USA"
    }
  },
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
    "url": "https://www.investwithsaad.com"
  },
  "license": {
    "@type": "License",
    "name": "New York Real Estate License",
    "licenseNumber": "10401373295",
    "validIn": {
      "@type": "State",
      "name": "New York"
    }
  },
  "credential": {
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "Realtor®"
  }
}

export default function AboutPage() {
  return (
    <>
      {/* Render Person schema */}
      <SchemaRenderer schema={saadTaiPersonSchema} />
      <AboutPageContent />
    </>
  )
}
