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
import { HeroSection } from '@/components/HeroSection'
import { COLORS } from '@/lib/colors'
import { multifamilyInvestorFAQs } from '@/data/faq-data'
import FAQAccordion from '@/components/faq/FAQAccordion'
import { LeadFormModal } from '@/components/LeadFormModal'
import { EventBanner } from '@/components/EventBanner'
import { trackEvent, trackMetaPageView } from '@/lib/tracking'
import { useScrollTracking } from '@/hooks/useScrollTracking'
import { SELLING_PROCESS_STEPS } from './constants'
import { SectionHeader } from '@/components/SectionHeader'
import { StatsSection } from '@/components/StatsSection'

// Filter for selling-related FAQs
const sellingFAQs = multifamilyInvestorFAQs.filter(faq =>
  faq.id.includes('selling') ||
  faq.id.includes('1031') ||
  faq.id.includes('offmarket-sale') ||
  faq.id.includes('property-worth') ||
  faq.id.includes('unwinding') ||
  faq.id.includes('redeploy')
)

interface SellerPageContentProps {
  hero?: {
    headline?: string
    description?: string
    ctaText?: string
  }
}

export default function SellerPageContent({ hero }: SellerPageContentProps) {
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
      <EventBanner />
      {/* Hero Section */}
      <HeroSection
        ref={heroRef}
        headline={hero?.headline || ''}
        description={hero?.description || ''}
        ctaText={hero?.ctaText || 'Maximize Your Sale Price'}
        backgroundImage="/home seller.webp"
        onCtaClick={() => {
          trackEvent('cta_clicked', { location: 'seller_hero', label: hero?.ctaText || 'Maximize Your Sale Price' })
          setIsModalOpen(true)
        }}
      />

      {/* Valuation Section */}
      <Section background='white' className='!pt-2'>
        <Container>
          <div ref={valuationRef}>
            <SectionHeader 
              title="What's Your Property Worth?"
              subtitle="Get a free, accurate property valuation from a trusted local expert."
              centered
              className="max-w-3xl mx-auto mb-16"
            />

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
            <SectionHeader 
              title="Selling Takes Strategy & Execution"
              subtitle="Whether you're burned out and want a clean exit,\nrecycling capital into a better deal, or scaling your portfolio\nYou need more than a real estate agent\nYou need a strategist."
              titleColor="white"
              subtitleColor="white"
              centered
              className="mb-12"
            />

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
                    trackEvent('cta_clicked', { location: 'seller_expertise', label: 'Plan Your Exit' })
                    setIsModalOpen(true)
                  }}
                >
                  Plan Your Exit →
                </Button>
              </div>
            </FadeIn>

            {/* <FadeIn delay={0.2}>
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
            </FadeIn> */}
          </div>
        </Container>
      </Section>

      {/* Proof Section */}
      <Section background='white'>
        <Container>
          <div ref={proofRef}>
            <SectionHeader 
              title="Fast Sales, Strong Prices"
              subtitle="When I list investor-grade multifamily, it moves—typically above asking, within days."
              centered
              className="max-w-3xl mx-auto mb-16"
            />

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
                <div className="relative w-full h-80 bg-slate-200 overflow-hidden">
                  <Image
                    src="/429 1st St.webp"
                    alt="429 1st St property"
                    fill
                    className="object-cover"
                    quality={75}
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
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
                <div className="relative w-full h-80 bg-slate-200 overflow-hidden">
                  <Image
                    src="/12 Tyler St.webp"
                    alt="12 Tyler St property"
                    fill
                    className="object-cover"
                    quality={75}
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 42vw"
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
                <div className="relative w-full h-80 bg-slate-200 overflow-hidden">
                  <Image
                    src="/553 Morris St.webp"
                    alt="553 Morris Ave property"
                    fill
                    className="object-cover"
                    quality={75}
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-3" style={{ color: COLORS.dark }}>553 Morris Ave (2-Family)</h3>
                  <p className="text-slate-600">
                    <span className="font-semibold text-green-700">Above ask</span>, <span className="font-semibold">2 days</span>
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
                trackEvent('cta_clicked', { location: 'seller_cta', label: 'Get Your Exit Strategy' })
                setIsModalOpen(true)
              }}
            >
              Get Your Exit Strategy →
            </Button>
          </div>
        </Container>
      </Section>

      {/* Process Section */}
      <Section background='background'>
        <Container>
          <div ref={processRef}>
            <SectionHeader 
              title="Our Proven Approach"
              subtitle="A proven 6-step process designed to attract serious buyers and close faster. Each step is built to get your property in front of qualified investors and maximize your sale price."
              centered
              className="max-w-3xl mx-auto mb-12"
            />

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

      {/* E-E-A-T Section */}
      <Section background='white'>
        <Container>
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <Heading size="h2" className="mb-4 text-center">
                About Saad Tai
              </Heading>
              <Text className="text-lg text-slate-600 mb-6 text-center">
                Multifamily investor and advisor specializing in strategic exits, pricing, and buyer alignment.
                Serving Albany, Schenectady, Troy, and Kissimmee with a data‑first approach.
              </Text>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <ul className="space-y-2 text-slate-700">
                  <li><strong>NY License:</strong> #10401373295</li>
                  <li><strong>FL License:</strong> #SL3651394</li>
                  <li><strong>Results:</strong> 97% at or above asking price (last 12 months)</li>
                  <li><strong>Focus:</strong> Tenant-occupied assets, investor buyers, and clean exits</li>
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
