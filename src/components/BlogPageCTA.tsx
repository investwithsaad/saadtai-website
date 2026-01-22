'use client'

import { useState } from 'react'
import {
  Section,
  Container,
  Heading,
  Text,
  FadeIn,
  Button
} from '@/components/ui'
import { LeadFormModal } from '@/components/LeadFormModal'

export function BlogPageCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      {/* CTA Section */}
      <Section background="background">
        <Container>
          <FadeIn className="flex flex-col items-center text-center">
            <Heading size="h2">Ready to make your next real estate move?</Heading>
            <Text className="mt-4 text-gray-600 max-w-2xl mx-auto mb-8">
              Let's discuss your home buying, selling, or valuation needs with a personal consultation from Saad.
            </Text>
            <Button variant="secondary" onClick={() => setIsModalOpen(true)}>
              Schedule a Call
            </Button>
          </FadeIn>
        </Container>
      </Section>

      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}