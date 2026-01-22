'use client'

import { useState } from 'react'
import {
  ChevronDown
} from 'lucide-react'
import { LeadFormModal } from '@/components/LeadFormModal'
import {
  Section,
  Container,
  Heading,
  Text,
  StaggerContainer,
  Button,
  FadeIn
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
  const [isModalOpen, setIsModalOpen] = useState(false)

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
      <Section background="background">
        <Container>
          <FadeIn className="flex flex-col items-center text-center">
            <Heading size="h2">Ready to talk to Saad?</Heading>
            <Text className="mt-4 text-gray-600 max-w-2xl mx-auto mb-8">
              Book a personal consultation to discuss your real estate needs, whether buying, selling, or valuating.
            </Text>
            <Button variant="secondary" onClick={() => setIsModalOpen(true)}>
              Schedule a Call
            </Button>
          </FadeIn>
        </Container>
      </Section>

      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}