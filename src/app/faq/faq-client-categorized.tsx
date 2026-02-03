'use client'

import { useState, useEffect } from 'react'
import { CTA } from '@/components/cta'
import {
  Section,
  Container,
  Heading,
  Text,
  StaggerContainer,
} from '@/components/ui'
import { InlineFAQ } from '@/components/faq/FAQSection'
import { useScrollTracking } from '@/hooks/useScrollTracking'

interface FAQItem {
  id: string
  q: string
  a: string
}

interface FAQCategory {
  category: string
  categoryName: string
  description: string
  faqs: FAQItem[]
}

interface FAQClientCategorizedProps {
  categories: FAQCategory[]
}

export default function FAQClientCategorized({ categories }: FAQClientCategorizedProps) {
  const [activeCategory, setActiveCategory] = useState(categories[0]?.category || '')
  const faqContentRef = useScrollTracking({ sectionName: 'faq_content' })

  // Handle URL hash to set active category on mount and when hash changes
  useEffect(() => {
    const handleHashChange = () => {
      if (typeof window !== 'undefined') {
        const hash = window.location.hash.slice(1) // Remove the # symbol
        if (hash && categories.some(cat => cat.category === hash)) {
          setActiveCategory(hash)
        }
      }
    }

    // Check hash on initial load
    handleHashChange()

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [categories])

  const activeCategoryData = categories.find(cat => cat.category === activeCategory)

  return (
    <div className="bg-white font-sans text-gray-800">
      {/* Category Tabs */}
      <Section className="border-b border-gray-200 bg-gray-50 py-3">
        <Container>
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category.category}
                onClick={() => setActiveCategory(category.category)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all whitespace-nowrap ${
                  activeCategory === category.category
                    ? 'bg-amber-300 text-gray-900 font-bold'
                    : 'text-gray-600 hover:text-olive-900'
                }`}
              >
                {category.categoryName}
              </button>
            ))}
          </div>
        </Container>
      </Section>

      {/* Active Category Content */}
      {activeCategoryData && (
        <Section className="pt-4" id={activeCategory} ref={faqContentRef}>
          <Container>
            <div className="mb-12">
              <Heading size="h2" className="mb-3 text-olive-900">
                {activeCategoryData.categoryName}
              </Heading>
              <Text size="lg" className="text-gray-600">
                {activeCategoryData.description}
              </Text>
            </div>

            <StaggerContainer className="max-w-3xl mx-auto mb-12">
              <InlineFAQ faqs={activeCategoryData.faqs} />
            </StaggerContainer>
          </Container>
        </Section>
      )}

      {/* Contact Section */}
      <CTA
        heading="Ready to talk to Saad?"
        description="Book a personal consultation to discuss your real estate needs, whether buying, selling, or valuating."
        background="background"
        buttons={[
          {
            label: 'Schedule a Call',
            isModal: true,
            variant: 'secondary',
            trackingLocation: 'faq_categorized_cta',
            trackingLabel: 'Schedule Call'
          }
        ]}
      />
    </div>
  )
}
