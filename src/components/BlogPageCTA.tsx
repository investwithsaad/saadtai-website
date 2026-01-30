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
import Link from 'next/link'
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
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="secondary" onClick={() => setIsModalOpen(true)}>
                Schedule a Call
              </Button>
              <Link href="/calculator" className="inline-flex">
                <Button variant="default">
                  Use the Investment Calculator
                </Button>
              </Link>
            </div>
          </FadeIn>
        </Container>
      </Section>

      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}