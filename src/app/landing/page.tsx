'use client'

import { useEffect } from 'react'
import {
  Section,
  Container,
  FadeIn,
  Heading,
  Text,
  Card
} from '@/components/ui'
import { COLORS } from '@/lib/colors'
import { QualifiedInvestorForm } from '@/components/QualifiedInvestorForm'
import { trackMetaPageView } from '@/lib/tracking'
import { useScrollTracking } from '@/hooks/useScrollTracking'

export default function LandingPage() {
  useEffect(() => {
    trackMetaPageView('landing_page')
  }, [])

  // Scroll tracking refs
  const heroRef = useScrollTracking({ sectionName: 'landing_hero' })
  const formRef = useScrollTracking({ sectionName: 'landing_form' })

  return (
    <>
      {/* Hero + Form Section - Single unified section */}
      <Section background="white" className="!border-0">
        <Container>
          <div className="max-w-2xl mx-auto space-y-8">
            {/* Headline + Info */}
            <div ref={heroRef}>
              <FadeIn>
                <Heading size="h2" className="!text-3xl md:!text-4xl leading-tight mb-6">
                  Make Better Multifamily Decisions Without Managing the Chaos
                </Heading>
                <Text size="lg" className="text-slate-700">
                  I manage the complexity of buying and selling multifamily properties, so you avoid costly missteps and make decisions with better information.
                </Text>
              </FadeIn>
            </div>

            {/* Form */}
            <div ref={formRef}>
              <FadeIn delay={0.2}>
                <Card
                  className="!overflow-hidden !shadow-none !rounded-none !p-0 hover:!translate-y-0"
                  style={{ borderColor: COLORS.dark, borderWidth: '2px' }}
                >
                  <div className="p-8 md:p-10">
                    <QualifiedInvestorForm />
                  </div>
                </Card>
              </FadeIn>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
