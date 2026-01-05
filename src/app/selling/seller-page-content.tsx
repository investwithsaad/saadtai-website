'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
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
import { COLORS } from '@/lib/colors'
import { multifamilyInvestorFAQs } from '@/data/faq-data'
import FAQAccordion from '@/components/FAQAccordion'
import { LeadFormModal } from '@/components/LeadFormModal'
import { trackEvent, trackMetaPageView } from '@/lib/tracking'
import { useScrollTracking } from '@/hooks/useScrollTracking'
import { SELLING_PROCESS_STEPS } from './constants'

// Filter for selling-related FAQs
const sellingFAQs = multifamilyInvestorFAQs.filter(faq =>
  faq.id.includes('selling') ||
  faq.id.includes('1031') ||
  faq.id.includes('offmarket-sale') ||
  faq.id.includes('property-worth') ||
  faq.id.includes('unwinding') ||
  faq.id.includes('redeploy')
)

export default function SellerPageContent() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    trackMetaPageView('selling_page')
  }, [])

  // Scroll tracking refs
  const heroRef = useScrollTracking({ sectionName: 'seller_hero' })
  const valuationRef = useScrollTracking({ sectionName: 'seller_valuation' })
  const problemRef = useScrollTracking({ sectionName: 'seller_problem' })
  const proofRef = useScrollTracking({ sectionName: 'seller_proof' })
  const processRef = useScrollTracking({ sectionName: 'seller_process' })
  const faqRef = useScrollTracking({ sectionName: 'seller_faq' })

  return (
    <>
      {/* Hero Section */}
      <div ref={heroRef} className="relative h-auto flex items-center justify-center pt-12 pb-16 md:pt-16 md:pb-20 overflow-hidden">
        <Image
          src="/home seller.webp"
          alt="Home Seller Background"
          fill
          className="object-cover object-center"
          priority
          quality={75}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <Container className="relative z-10">
          <div className="fade-in-lcp">
            <div className="max-w-3xl mx-auto text-center pb-8 pt-16">
              <Heading size="h1" color='white'>
                Exit on <i>Your</i> Timeline.
              </Heading>
              <Text size="lg" className="text-white/90 mb-12 leading-relaxed">
                I help owners evaluate whether to hold, reposition, or sell — and when selling makes sense, target the right buyers to maximize net outcome, not just headline price.
              </Text>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button
                  variant="default"
                  image="/saad.png"
                  imageAlt="Saad Tai profile photo"
                  onClick={() => {
                    trackEvent('cta_clicked', { location: 'seller_hero', label: 'Talk through your next move' })
                    setIsModalOpen(true)
                  }}
                >
                  Talk through your next move →
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Valuation Section */}
      <Section background='white' className='!pt-2'>
        <Container>
          <div ref={valuationRef}>
            <FadeIn>
              <div className="max-w-3xl mx-auto text-center mb-16">
                <Heading size="h2">
                  What's Your Property Worth?
                </Heading>
                <Text className="text-lg text-slate-600 mb-8">
                  Get a free, accurate property valuation from a trusted local expert.
                </Text>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="max-w-3xl mx-auto text-center">
                <a href="https://consumer.hifello.com/lp/690e2a145baba5eb9c5c8b5f" target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary" className="inline-block">
                    Get Your Valuation →
                  </Button>
                </a>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* The Problem Section */}
      <Section background='dark'>
        <Container>
          <div ref={problemRef} className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="text-center mb-12">
                <Heading size="h2" color='white' className='!mt-6'>
                  Selling Takes Strategy & Execution
                </Heading>
                <Text size="lg" color='white'>
                  Whether you're burned out and want a clean exit,<br />recycling capital into a better deal, or scaling your portfolio<br />You need more than a real estate agent<br />You need a strategist.
                </Text>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card color="dark">
                <Text color='white' className="mb-6">
                  What I Handle:
                </Text>
                <ul className="space-y-3 text-white">
                  <li className="flex items-start gap-3">
                    <span className="text-brand-secondary font-bold">•</span>
                    <span>Tenant coordination and property showings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-secondary font-bold">•</span>
                    <span>Professional marketing and presentation to attract serious investors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-secondary font-bold">•</span>
                    <span>Direct outreach to qualified investor buyers before listing publicly</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-secondary font-bold">•</span>
                    <span>Negotiation, inspections, appraisals, title work, and closing logistics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-secondary font-bold">•</span>
                    <span>Help with 1031 exchanges or finding your next acquisition if relevant</span>
                  </li>
                </ul>
              </Card>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Credibility Stats Section */}
      <Section background='background'>
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
      <Section background='white'>
        <Container>
          <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto items-center">
            <FadeIn>
              <div>
                <Heading size="h2" className="mb-6">
                  Limited Showings.<br />Minimal Access.<br />Tenant Push Back.<br />Still Sold.
                </Heading>
                <Text className="text-lg text-slate-600 mb-6">
                  Investors don't need perfect conditions—they need a clear path, clean numbers, and a strategy built for real-world obstacles. If you're sitting on a property that feels tough to show or tough to manage, reach out.
                </Text>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  Message me I'll walk you through the exact game plan that gets investor buyers to move, even when everything else says the deal should stall.
                </p>
                <Button
                  variant="default"
                  onClick={() => {
                    trackEvent('cta_clicked', { location: 'seller_expertise', label: 'Talk through your next move' })
                    setIsModalOpen(true)
                  }}
                >
                  Talk through your next move →
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="w-full md:w-auto md:ml-auto" style={{ width: '267px' }}>
                <iframe
                    src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1165003828549043%2F&show_text=false&width=267&t=0"
                    width="267"
                    height="476"
                    style={{border: 'none', overflow: 'hidden'}}
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                />
              </div>
            </FadeIn>
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
                  Fast Sales, Strong Prices
                </Heading>
                <Text className="text-lg text-slate-600">
                  When I list investor-grade multifamily, it moves—typically above asking, within days.
                </Text>
              </div>
            </FadeIn>

            <FadeIn className="mb-12">
              <div
                className="max-w-5xl mx-auto p-8 rounded overflow-hidden"
                style={{
                  backgroundColor: COLORS.dark,
                  border: `1px solid ${COLORS.dark}`
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold mb-3" style={{ color: COLORS.white }}>Major Sale: The John Hooper House</h3>
                    <p className="mb-2" style={{ color: COLORS.white }}>
                      153 2nd Ave, Troy
                    </p>
                    <p style={{ color: COLORS.white }}>
                      A documented Underground Railroad stop, once owned by Harriet Tubman's cousin, featured in HBO's <em>The Gilded Age</em>. Successfully closed on one of Troy's most significant historical properties.
                    </p>
                  </div>
                  <div className="w-full max-w-sm rounded overflow-hidden flex items-center justify-center mx-auto md:ml-auto md:mr-0" style={{ backgroundColor: COLORS.background, aspectRatio: '0.6' }}>
                    <Image
                      src="/153 2nd St.webp"
                      alt="153 2nd Ave - John Hooper House"
                      width={416}
                      height={250}
                      className="w-full h-full object-cover"
                      quality={75}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 max-w-6xl mx-auto mb-12">
              <Card
                className="!overflow-hidden !shadow-none !rounded-none !bg-white !p-0 hover:!translate-y-0 lg:col-span-4"
                style={{ borderColor: COLORS.dark, borderWidth: '2px' }}
              >
                <div className="w-full h-80 bg-slate-200 overflow-hidden">
                  <Image
                    src="/429 1st St.webp"
                    alt="429 1st St property"
                    width={960}
                    height={320}
                    className="w-full h-full object-cover"
                    quality={75}
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-3" style={{ color: COLORS.dark }}>429 1st St (2-Family)</h3>
                  <p className="text-slate-600">
                    <span className="font-semibold text-green-700">Above ask</span>, <span className="font-semibold">3 days</span>
                  </p>
                </div>
              </Card>
              <Card
                className="!overflow-hidden !shadow-none !rounded-none !bg-white !p-0 hover:!translate-y-0 lg:col-span-5"
                style={{ borderColor: COLORS.dark }}
              >
                <div className="w-full h-80 bg-slate-200 overflow-hidden">
                  <Image
                    src="/12 Tyler St.webp"
                    alt="12 Tyler St property"
                    width={1022}
                    height={320}
                    className="w-full h-full object-cover"
                    quality={75}
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-3" style={{ color: COLORS.dark }}>12 Tyler St (3-Family)</h3>
                  <p className="text-slate-600">
                    <span className="font-semibold text-green-700">Above ask</span>, <span className="font-semibold">3 days</span>
                  </p>
                </div>
              </Card>
              <Card
                className="!overflow-hidden !shadow-none !rounded-none !bg-white !p-0 hover:!translate-y-0 lg:col-span-3"
                style={{ borderColor: COLORS.dark }}
              >
                <div className="w-full h-80 bg-slate-200 overflow-hidden">
                  <Image
                    src="/553 Morris St.webp"
                    alt="553 Morris Ave property"
                    width={992}
                    height={320}
                    className="w-full h-full object-cover"
                    quality={75}
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-3" style={{ color: COLORS.dark }}>553 Morris Ave (2-Family)</h3>
                  <p className="text-slate-600">
                    <span className="font-semibold text-green-600">Above ask</span>, <span className="font-semibold">2 days</span>
                  </p>
                </div>
              </Card>
            </StaggerContainer>
          </div>
          <div className="flex justify-center mt-8">
            <Button
              variant="default"
              image="/saad.png"
              imageAlt="Saad Tai profile photo"
              onClick={() => {
                trackEvent('cta_clicked', { location: 'seller_cta', label: 'Talk through your next move' })
                setIsModalOpen(true)
              }}
            >
              Talk through your next move →
            </Button>
          </div>
        </Container>
      </Section>

      {/* Process Section */}
      <Section background='background'>
        <Container>
          <div ref={processRef}>
            <FadeIn>
              <div className="max-w-3xl mx-auto text-center mb-12">
                <Heading size="h2">
                  Our Proven Approach
                </Heading>
                <Text className="text-lg text-slate-600 mb-4">
                  A proven 6-step process designed to attract serious buyers and close faster. Each step is built to get your property in front of qualified investors and maximize your sale price.
                </Text>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="max-w-3xl mx-auto space-y-6">
                {SELLING_PROCESS_STEPS.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-6">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full text-white font-bold flex-shrink-0" style={{ backgroundColor: COLORS.secondary }}>
                      {step.num}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-1">{step.title}</h3>
                      <p className="text-slate-600">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section background='white'>
        <Container>
          <div ref={faqRef}>
            <FadeIn>
              <div className="text-center mb-16 max-w-3xl mx-auto">
                <Heading size="h2">
                  Seller Questions Answered
                </Heading>
                <Text className="text-lg text-slate-600">
                  Get answers about the selling process, pricing strategy, marketing, timeline, and more.
                </Text>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="max-w-3xl mx-auto">
                <FAQAccordion items={sellingFAQs} />
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
