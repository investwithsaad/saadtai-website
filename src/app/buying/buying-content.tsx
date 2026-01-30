'use client'

import { useState, useEffect } from 'react'
import {
  Section,
  Container,
  Button,
  Card,
  FadeIn,
  StaggerContainer,
  Heading,
  Text
} from '@/components/ui'
import { HeroSection } from '@/components/HeroSection'
import { COLORS } from '@/lib/colors'
import { multifamilyInvestorFAQs } from '@/data/faq-data'
import FAQAccordion from '@/components/FAQAccordion'
import { LeadFormModal } from '@/components/LeadFormModal'
import { EventBanner } from '@/components/EventBanner'
import { MortgageCalculator } from '@/components/MortgageCalculator'
import { AffordabilityCalculator } from '@/components/AffordabilityCalculator'
import { trackEvent, trackMetaPageView } from '@/lib/tracking'
import { useScrollTracking } from '@/hooks/useScrollTracking'

// Filter for buying-related FAQs
const buyingFAQs = multifamilyInvestorFAQs.filter(faq =>
  faq.id.includes('cap-rate') ||
  faq.id.includes('pencils') ||
  faq.id.includes('closing-costs') ||
  faq.id.includes('offmarket') ||
  faq.id.includes('multifamily-closing') ||
  faq.id.includes('financing-programs')
)

interface BuyingContentProps {
  hero?: {
    headline?: string
    description?: string
    ctaText?: string
  }
}

export function BuyingContent({ hero }: BuyingContentProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    trackMetaPageView('buying_page')
  }, [])
  const [activeCalculator, setActiveCalculator] = useState<'affordability' | 'mortgage'>('affordability')


  // Scroll tracking refs
  const heroRef = useScrollTracking({ sectionName: 'buyer_hero' })
  const problemRef = useScrollTracking({ sectionName: 'buyer_problem' })
  const proofRef = useScrollTracking({ sectionName: 'buyer_proof' })
  const processRef = useScrollTracking({ sectionName: 'buyer_process' })
  const toolsRef = useScrollTracking({ sectionName: 'buyer_tools' })
  const faqRef = useScrollTracking({ sectionName: 'buyer_faq' })

  return (
    <>
      <EventBanner />
      {/* Hero Section */}
      <HeroSection
        ref={heroRef}
        headline={hero?.headline || ''}
        description={hero?.description || ''}
        ctaText={hero?.ctaText || 'Talk through your next move'}
        backgroundImage="/home buyer.webp"
        onCtaClick={() => {
          trackEvent('cta_clicked', { location: 'buyer_hero', label: hero?.ctaText || 'Talk through your next move' })
          setIsModalOpen(true)
        }}
      />

      {/* The Problem Section */}
      <Section background='dark' className='!pt-0'>
        <Container>
          <div ref={problemRef} className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="text-center mb-12">
                <Heading size="h2" color='white' className='!mt-6'>
                  Finding the Right Property<br />Takes Time & Strategy
                </Heading>
                <Text size="lg" color='white'>
                  Sourcing, analyzing, financing, closing;<br />It's a lot to do alone.
                </Text>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card color="dark">
                <Text color='white' className="mb-6">
                  Most investors juggle:
                </Text>
                <ul className="space-y-3 text-white">
                  <li className="flex items-start gap-3">
                    <span className="text-brand-secondary font-bold">•</span>
                    <span>Sourcing properties that actually fit their criteria</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-secondary font-bold">•</span>
                    <span>Running numbers and due diligence on multiple deals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-secondary font-bold">•</span>
                    <span>Finding lenders who understand small multifamily</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-secondary font-bold">•</span>
                    <span>Managing inspections, appraisals, and closing logistics on every deal</span>
                  </li>
                </ul>
              </Card>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Credibility Stats Section */}
      <Section background='white'>
        <Container>
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <p className="text-5xl font-bold" style={{ color: COLORS.dark }}>13</p>
                <p className="text-slate-600 text-sm mt-2">Days on Market Average</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold text-green-700">97%</p>
                <p className="text-slate-600 text-sm mt-2">Sell at or Above Asking Price</p>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Real-World Expertise Section */}
      <Section background='background'>
        <Container>
          <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto items-center">
            <FadeIn>
              <div>
                <Heading size="h2" className="mb-6">
                  Build Your Portfolio<br />on Strategy, Not Guesswork.
                </Heading>
                <Text className="text-lg text-slate-600 mb-6">
                  Smart investors aren't waiting for the "right" market—they're making disciplined decisions with data, underwriting, and clear criteria.
                </Text>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  Want to know what separates investors who scale from those who get stuck? It's decision clarity. Join our Capital Region Investment Group to connect with other portfolio-focused investors, discuss real opportunities, and execute with confidence.
                </p>
                <Button
                  variant="default"
                  onClick={() => {
                    trackEvent('cta_clicked', { location: 'buyer_expertise', label: 'Talk through your next move' })
                    setIsModalOpen(true)
                  }}
                >
                  Talk through your next move →
                </Button>
              </div>
            </FadeIn>

            {/* <FadeIn delay={0.2}>
              <div className="w-full md:w-auto md:ml-auto" style={{ width: '267px' }}>
                <iframe
                    src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F665808239899279%2F&show_text=false&width=267&t=0"
                    width="267"
                    height="476"
                    style={{border: 'none', overflow: 'hidden'}}
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                />
              </div>
            </FadeIn> */}
          </div>
        </Container>
      </Section>

      {/* Proof Section */}
      <Section background='white'>
        <Container>
          <div ref={proofRef}>
            <FadeIn>
              <div className="max-w-3xl text-center mx-auto mb-16">
                <Heading size="h2">
                  Avoid the 3 Biggest Investor Mistakes
                </Heading>
                <Text className="text-lg text-slate-600">
                  Most investors stumble on the same three pitfalls. Here's how I help you avoid them and protect your capital.
                </Text>
              </div>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card
                className="!overflow-hidden !shadow-none !rounded-none !bg-white !p-0 hover:!translate-y-0"
                style={{ borderColor: COLORS.dark, borderWidth: '2px' }}
              >
                <div className="p-6">
                  <Heading size="h4" className="mb-3">Don't Overpay for Fantasy Rents</Heading>
                  <p className="text-slate-600 mb-4">
                    Off-market deals with verified rent rolls, not wishful thinking.
                  </p>
                  <p className="text-slate-600 text-sm">
                    <strong>Conservative underwriting</strong> so you know what actually pencils and don't overpay.
                  </p>
                </div>
              </Card>

              <Card
                className="!overflow-hidden !shadow-none !rounded-none !bg-white !p-0 hover:!translate-y-0"
                style={{ borderColor: COLORS.dark, borderWidth: '2px' }}
              >
                <div className="p-6">
                  <Heading size="h4" className="mb-3">Buy at the Right Price</Heading>
                  <p className="text-slate-600 mb-4">
                    Cap rate analysis and comparable pricing so you know what's fair and what's overvalued.
                  </p>
                  <p className="text-slate-600 text-sm">
                    <strong>Data-driven pricing</strong> based on verified comps and real underwriting, not market hype.
                  </p>
                </div>
              </Card>

              <Card
                className="!overflow-hidden !shadow-none !rounded-none !bg-white !p-0 hover:!translate-y-0"
                style={{ borderColor: COLORS.dark, borderWidth: '2px' }}
              >
                <div className="p-6">
                  <Heading size="h4" className="mb-3">Don't Misallocate Capital</Heading>
                  <p className="text-slate-600 mb-4">
                    Fast lender network and transaction coordination keeps you moving quick.
                  </p>
                  <p className="text-slate-600 text-sm">
                    <strong>1031 ready</strong> so you can redeploy capital on your timeline.
                  </p>
                </div>
              </Card>
            </StaggerContainer>
          </div>
        </Container>
      </Section>

      {/* Tools Section */}
      <Section background='background'>
        <Container>
          <div ref={toolsRef}>
            <FadeIn>
              <Card className="max-w-4xl mx-auto">
                {/* Calculator Tabs */}
                <div className="flex gap-0 mb-8 border-b border-gray-300">
                  <button
                    onClick={() => setActiveCalculator('affordability')}
                    className={`px-6 py-3 font-semibold border-b-2 transition-colors ${
                      activeCalculator === 'affordability'
                        ? 'border-gray-900 text-gray-900'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Affordability Calculator
                  </button>
                  <button
                    onClick={() => setActiveCalculator('mortgage')}
                    className={`px-6 py-3 font-semibold border-b-2 transition-colors ${
                      activeCalculator === 'mortgage'
                        ? 'border-gray-900 text-gray-900'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Mortgage Calculator
                  </button>
                </div>

                {/* Calculator Content */}
                {activeCalculator === 'affordability' && <AffordabilityCalculator />}
                {activeCalculator === 'mortgage' && <MortgageCalculator />}
              </Card>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* E-E-A-T Section */}
      <Section background='white'>
        <Container>
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <Heading size="h2" className="mb-4 text-center">
                About Saad Tai
              </Heading>
              <Text className="text-lg text-slate-600 mb-6 text-center">
                Multifamily investor and advisor serving Albany, Schenectady, Troy, and Jacksonville.
                Focused on underwriting accuracy, capital protection, and long-term portfolio strategy.
              </Text>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <ul className="space-y-2 text-slate-700">
                  <li><strong>NY License:</strong> #10401373295</li>
                  <li><strong>FL License:</strong> #SL3651394</li>
                  <li><strong>Focus:</strong> 2-10 unit acquisitions, pricing strategy, and exit planning</li>
                </ul>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section background='white'>
        <Container>
          <div ref={faqRef}>
            <FadeIn>
              <div className="text-center mb-16 max-w-3xl mx-auto">
                <Heading size="h2">
                  Buyer Questions Answered
                </Heading>
                <Text className="text-lg text-slate-600">
                  Get answers about the buying process, neighborhoods, pre-approval, down payments, and more.
                </Text>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="max-w-3xl mx-auto">
                <FAQAccordion items={buyingFAQs} />
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Lead Form Modal */}
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
