import type { Metadata } from 'next'
import FAQClientCategorized from './faq-client-categorized'
import { Section, Container, Heading, Text, FadeIn } from '@/components/ui'
import { SchemaRenderer } from '@/components/SchemaRenderer'
import { Breadcrumb } from '@/components/breadcrumb'
import { faqCategories, multifamilyInvestorFAQs } from '@/data/faq-data'
import { createPageMetadata } from '@/lib/metadata-factory'

export const metadata: Metadata = createPageMetadata({
  title: 'Investor FAQs | Saad Tai',
  description: 'Answers to your multifamily investing questions about cap rates, deal analysis, portfolio strategy, and finding off-market deals.',
  path: '/faq',
  keywords: 'multifamily investing FAQ, cap rates, investment property questions, portfolio strategy, real estate investor questions, 1031 exchange',
  ogImage: '/House1.webp',
})

// Organize FAQs by category
const categorizedFAQs = [
  {
    category: 'buying-multifamily',
    categoryName: 'Buying Multifamily',
    description: 'Evaluating deals, underwriting, financing, and closing on 2-4 unit properties',
    faqs: multifamilyInvestorFAQs.filter(faq => faq.id.includes('realistic-cap-rate') || faq.id.includes('multifamily-deal-pencils') || faq.id.includes('closing-costs-multifamily') || faq.id.includes('offmarket-vs-mls') || faq.id.includes('single-family-to-multifamily') || faq.id.includes('multifamily-closing-timeline') || faq.id.includes('financing-programs-2-4-unit'))
  },
  {
    category: 'selling-multifamily',
    categoryName: 'Selling & Exit Strategy',
    description: 'Timing exits, 1031 exchanges, portfolio simplification, and maximizing proceeds',
    faqs: multifamilyInvestorFAQs.filter(faq => faq.id.includes('selling-4unit') || faq.id.includes('selling-with-difficult') || faq.id.includes('1031-exchange') || faq.id.includes('offmarket-sale') || faq.id.includes('property-worth-cap') || faq.id.includes('unwinding-portfolio') || faq.id.includes('selling-two-properties'))
  },
  {
    category: 'investor-strategy',
    categoryName: 'Investor Strategy',
    description: 'Portfolio scaling, market timing, specialist guidance, and wealth building',
    faqs: multifamilyInvestorFAQs.filter(faq => faq.id.includes('investor-specialist') || faq.id.includes('advisor-understands') || faq.id.includes('scaling-portfolio') || faq.id.includes('buying-selling-frequency') || faq.id.includes('scaling-investor-timing') || faq.id.includes('accidental-owner') || faq.id.includes('capital-recycler') || faq.id.includes('multifamily-underwriting') || faq.id.includes('portfolio-simplification'))
  },
  {
    category: 'investor-network',
    categoryName: 'Investor Network & Off-Market',
    description: 'Deal sourcing, off-market opportunities, and investor community access',
    faqs: multifamilyInvestorFAQs.filter(faq => faq.id.includes('investor-group') || faq.id.includes('deals-per-month') || faq.id.includes('missing-mls') || faq.id.includes('finding-off-market') || faq.id.includes('tenant-quality') || faq.id.includes('property-manager'))
  },
  {
    category: 'calculator-tools',
    categoryName: 'Analysis & Tools',
    description: 'Using the investment calculator, comparing properties, and financial metrics',
    faqs: multifamilyInvestorFAQs.filter(faq => faq.id.includes('property-offer') || faq.id.includes('dscr-requirements') || faq.id.includes('cashoncash-return') || faq.id.includes('comparing-properties') || faq.id.includes('multifamily-financing-small'))
  }
]

// Build schema for all FAQs
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": multifamilyInvestorFAQs.map(faq => ({
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
              Multifamily Investor FAQs
            </Heading>
            <Text size="lg" className="text-gray-700 max-w-3xl mx-auto">
              Get answers to your most important questions about buying, selling, analyzing, and scaling your multifamily portfolio in the Capital Region. Browse by category below.
            </Text>
          </FadeIn>
        </Container>
      </Section>

      <FAQClientCategorized categories={categorizedFAQs} />
    </>
  )
}
