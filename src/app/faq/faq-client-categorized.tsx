'use client'

import { useState } from 'react'
import {
  ChevronDown
} from 'lucide-react'
import { CTA } from '@/components/cta'
import {
  Section,
  Container,
  Heading,
  Text,
  StaggerContainer,
  Button
} from '@/components/ui'
import { CALENDLY_CONFIG, buildCalendlyUrl } from '@/config/calendly'

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

function FAQItemAccordion({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden hover:border-gold-500 transition-colors">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
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

interface FAQClientCategorizedProps {
  categories: FAQCategory[]
}

export default function FAQClientCategorized({ categories }: FAQClientCategorizedProps) {
  const [activeCategory, setActiveCategory] = useState(categories[0]?.category || '')

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
        <Section className="pt-4">
          <Container>
            <div className="mb-12">
              <Heading size="h2" className="mb-3 text-olive-900">
                {activeCategoryData.categoryName}
              </Heading>
              <Text size="lg" className="text-gray-600">
                {activeCategoryData.description}
              </Text>
            </div>

            <StaggerContainer className="max-w-3xl mx-auto space-y-4 mb-12">
              {activeCategoryData.faqs.map((faq, index) => (
                <FAQItemAccordion key={faq.id || index} question={faq.q} answer={faq.a} />
              ))}
            </StaggerContainer>
          </Container>
        </Section>
      )}

      {/* Contact Section */}
      <CTA
        title="Ready to talk to Saad?"
        text="Book a personal consultation to discuss your real estate needs, whether buying, selling, or valuating."
        buttonText="Schedule a Call"
        href={buildCalendlyUrl(CALENDLY_CONFIG.discovery)}
        useBG
      />
    </div>
  )
}
