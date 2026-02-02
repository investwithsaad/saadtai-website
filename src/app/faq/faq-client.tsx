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
} from '@/components/ui'

function FAQItem({ question, answer }: { question: string; answer: string }) {
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

interface FAQClientProps {
  faqs: Array<{ question: string; answer: string }>
}

export default function FAQClient({ faqs }: FAQClientProps) {
  return (
    <div className="bg-white font-sans text-gray-800">
      {/* FAQ Section */}
      <Section>
        <Container>
          <StaggerContainer className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </StaggerContainer>
        </Container>
      </Section>

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
            trackingLocation: 'faq_cta',
            trackingLabel: 'Schedule Call'
          }
        ]}
      />
    </div>
  )
}