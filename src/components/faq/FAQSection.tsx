'use client'

import { ReactNode } from 'react'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Section, Container, Heading, Text, StaggerContainer } from '@/components/ui'

interface FAQItem {
  q: string
  a: string
}

interface FAQSectionProps {
  title?: string
  description?: string | ReactNode
  faqs: FAQItem[]
  background?: 'white' | 'background'
  maxDisplay?: number // Limit how many FAQs to show
  columns?: 1 | 2 // Single or two-column layout
}

function FAQAccordionItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden hover:border-gold-500 transition-colors">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
        aria-expanded={isOpen}
      >
        <Heading size="h4" className="text-left text-olive-900">
          {question}
        </Heading>
        <ChevronDown
          size={24}
          className={`text-gold-500 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="border-t border-gray-200 bg-gray-50 p-6">
          <Text className="text-gray-700">{answer}</Text>
        </div>
      )}
    </div>
  )
}

export function FAQSection({
  title = "Frequently Asked Questions",
  description,
  faqs,
  background = 'background',
  maxDisplay,
  columns = 1
}: FAQSectionProps) {
  // Limit FAQs if maxDisplay is set
  const displayFaqs = maxDisplay ? faqs.slice(0, maxDisplay) : faqs

  return (
    <Section background={background}>
      <Container>
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <Heading size="h2">
            {title}
          </Heading>
          {description && (
            <Text size="lg" className="text-gray-700">
              {description}
            </Text>
          )}
        </div>

        {/* FAQ Items */}
        <StaggerContainer
          className={`max-w-${columns === 2 ? '5xl' : '3xl'} mx-auto ${
            columns === 2 ? 'grid grid-cols-1 md:grid-cols-2 gap-6' : 'space-y-4'
          }`}
        >
          {displayFaqs.map((faq, index) => (
            <FAQAccordionItem key={`faq-${index}`} question={faq.q} answer={faq.a} />
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  )
}

// Specialized version for inline FAQ (smaller, no section wrapper)
export function InlineFAQ({ faqs, maxDisplay }: { faqs: FAQItem[]; maxDisplay?: number }) {
  const displayFaqs = maxDisplay ? faqs.slice(0, maxDisplay) : faqs

  return (
    <div className="space-y-4">
      {displayFaqs.map((faq, index) => (
        <FAQAccordionItem key={`inline-faq-${index}`} question={faq.q} answer={faq.a} />
      ))}
    </div>
  )
}

// Version with schema markup for SEO/AIEO
export function FAQSectionWithSchema({
  title = "Frequently Asked Questions",
  description,
  faqs,
  background = 'background',
  maxDisplay,
  schemaName
}: FAQSectionProps & { schemaName?: string }) {
  const displayFaqs = maxDisplay ? faqs.slice(0, maxDisplay) : faqs

  // Generate schema markup
  const faqSchema: {
    "@context": string
    "@type": string
    mainEntity: Array<{
      "@type": string
      name: string
      acceptedAnswer: {
        "@type": string
        text: string
      }
    }>
    about?: {
      "@type": string
      name: string
    }
  } = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": displayFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  }

  if (schemaName) {
    faqSchema.about = {
      "@type": "FinancialProduct",
      "name": schemaName
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <FAQSection
        title={title}
        description={description}
        faqs={displayFaqs}
        background={background}
      />
    </>
  )
}
