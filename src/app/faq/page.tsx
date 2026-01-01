import type { Metadata } from 'next'
import FAQClientCategorized from './faq-client-categorized'
import { Section, Container, Heading, Text, FadeIn } from '@/components/ui'
import { SchemaRenderer } from '@/components/SchemaRenderer'
import { Breadcrumb } from '@/components/breadcrumb'
import {
  topLevelFAQs,
  aboutRealtorFAQs,
  homeBuyingFAQs,
  neighborhoodComparisonFAQs,
  investmentFAQs,
  familyFAQs,
  urbanProfessionalFAQs
} from '@/data/faq-data'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Saad Tai Realtor',
  description: 'Answers to your questions about home buying, selling, neighborhoods, valuations, and the real estate process.',
  keywords: 'FAQ, frequently asked questions, home buying questions, selling a home, home valuation, neighborhood comparison',
  openGraph: {
    title: 'Frequently Asked Questions | Saad Tai Realtor',
    description: 'Get answers to common questions about home buying, selling, neighborhoods, valuations, and more from Saad Tai.',
    url: 'https://saadtherealtor.com/faq',
    siteName: 'Saad Tai Realtor',
    type: 'website',
    images: [
      {
        url: "https://saadtherealtor.com/logo.webp",
        width: 1024,
        height: 728,
        alt: "FAQ - Frequently Asked Questions",
      },
    ],
  },
}

// Organize FAQs by category
const categorizedFAQs = [
  {
    category: 'neighborhood-comparison',
    categoryName: 'Neighborhood Comparison',
    description: 'Albany vs Schenectady vs Niskayuna: taxes, schools, costs, and lifestyle',
    faqs: neighborhoodComparisonFAQs
  },
  {
    category: 'buying-process',
    categoryName: 'Buying Process',
    description: 'Pre-approval, down payments, closing costs, and how to find your home',
    faqs: homeBuyingFAQs
  },
  {
    category: 'investment-questions',
    categoryName: 'Investment & ROI',
    description: 'Rental yields, cash flow, appreciation, and investment analysis',
    faqs: investmentFAQs
  },
  {
    category: 'family-concerns',
    categoryName: 'Schools & Family',
    description: 'School districts, safety, family amenities, and total cost of ownership',
    faqs: familyFAQs
  },
  {
    category: 'urban-living',
    categoryName: 'Urban Professional',
    description: 'Walkability, commute times, dining, culture, and neighborhood character',
    faqs: urbanProfessionalFAQs
  },
  {
    category: 'home-selling',
    categoryName: 'Selling Your Home',
    description: 'Pricing strategy, marketing, timeline, and maximizing your home\'s value',
    faqs: aboutRealtorFAQs
  }
]

// Build schema for all FAQs
const allFAQs = [
  ...topLevelFAQs,
  ...aboutRealtorFAQs,
  ...homeBuyingFAQs,
  ...neighborhoodComparisonFAQs,
  ...investmentFAQs,
  ...familyFAQs,
  ...urbanProfessionalFAQs
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": allFAQs.map(faq => ({
    "@type": "Question",
    "name": faq.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.a
    }
  }))
}

export default function FAQ() {
  return (
    <>
      {/* Schema Markup */}
      <SchemaRenderer schema={faqSchema} />

      {/* Breadcrumb - includes schema */}
      <Breadcrumb items={[{ label: 'FAQ' }]} />

      {/* Topic Hubs Section - Above the fold */}
      <Section className="pt-32 pb-4 bg-gradient-to-b from-gray-50 to-white">
        <Container>
          <FadeIn className="text-center mb-12">
            <Heading size="h1" className="mb-4 text-olive-900">
              Frequently Asked Questions
            </Heading>
            <Text size="lg" className="text-gray-700 max-w-3xl mx-auto">
              Find answers to questions about neighborhoods, buying, selling, investment, schools, and more. Browse by category below.
            </Text>
          </FadeIn>
        </Container>
      </Section>

      <FAQClientCategorized categories={categorizedFAQs} />
    </>
  )
}
