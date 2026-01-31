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
import { LeadFormModal } from '@/components/LeadFormModal'
import { EventBanner } from '@/components/EventBanner'
import { trackEvent, trackMetaPageView } from '@/lib/tracking'
import { useScrollTracking } from '@/hooks/useScrollTracking'
import { CheckCircle, Award, Briefcase, MapPin, Target, TrendingUp } from 'lucide-react'
import { SchemaRenderer } from '@/components/SchemaRenderer'
import { getReviewSchema } from '@/lib/schema-generators'
import { testimonials } from '@/data/testimonials'
import { formatTextWithLineBreaks } from '@/lib/format-text'
import { TestimonialsSection } from '@/components/TestimonialsSection'
import { SectionHeader } from '@/components/SectionHeader'

interface AboutPageContentProps {
  hero?: any
}

export default function AboutPageContent({ hero }: AboutPageContentProps = {}) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Defaults from Sanity or fallback
  const heroHeadline = hero?.headline || 'Straight Talk. No Fluff.'
  const heroDescription = hero?.description || 'Licensed REALTOR® serving New York State and Florida. With deep expertise in New York\'s Capital Region (Albany-Schenectady) and Jacksonville, Florida. I\'m a portfolio-focused advisor—not just a transaction agent.'
  const heroCtaText = hero?.ctaText || 'Talk through your next move'

  // Generate Review schemas for testimonials (all 5-star reviews)
  const reviewSchemas = testimonials.map((testimonial) =>
    getReviewSchema({
      reviewRating: 5,
      reviewBody: testimonial.text,
      author: testimonial.author,
    })
  )

  useEffect(() => {
    trackMetaPageView('about_page')
  }, [])

  // Scroll tracking refs
  const heroRef = useScrollTracking({ sectionName: 'about_hero' })
  const philosophyRef = useScrollTracking({ sectionName: 'about_philosophy' })
  const valuesRef = useScrollTracking({ sectionName: 'about_values' })
  const credentialsRef = useScrollTracking({ sectionName: 'about_credentials' })

  const processValues = [
    {
      title: 'Process Creates Peace',
      description: 'Systems, clarity, and structure eliminate anxiety. When you know what comes next, you can focus on strategy instead of logistics.'
    },
    {
      title: 'Responsibility to Community',
      description: 'I treat every transaction with respect for all parties—tenants, neighbors, the market. Long-term relationships matter more than quick commissions.'
    },
    {
      title: 'Outcomes Over Flash',
      description: 'I focus on what actually works, not what looks impressive. Conservative analysis, honest numbers, real results. No fantasy projections.'
    },
    {
      title: 'Commitment to Long-term',
      description: 'Your success is built over years, not days. I only recommend moves that fit your long-term strategy, not my short-term incentives.'
    },
    {
      title: 'Execution with Discipline',
      description: 'Strategy means nothing without flawless execution. My team handles the details so nothing slips through the cracks.'
    },
    {
      title: 'Selective by Design',
      description: 'I turn down deals that don\'t fit your criteria. More opportunities aren\'t better—the right opportunities are. Quality over quantity.'
    },
    {
      title: 'Steady, Not Showy',
      description: 'No hype, no pressure tactics, no unnecessary drama. Quiet confidence and consistent follow-through build the best relationships.'
    }
  ]

  const credentials = [
    { icon: Award, text: 'Licensed Realtor® - New York & Florida' },
    { icon: Briefcase, text: 'NY Real Estate License #10401373295' },
    { icon: Briefcase, text: 'FL Real Estate License #SL3651394' },
    { icon: MapPin, text: 'Capital Region & Jacksonville Specialist' },
    { icon: Target, text: 'Specialist in Multifamily Portfolio Strategy' },
    { icon: TrendingUp, text: '95%+ Repeat & Referral Client Rate' },
    { icon: CheckCircle, text: 'Investor-Focused Approach' }
  ]

  return (
    <>
      {/* Render Review schemas */}
      {reviewSchemas.map((schema, i) => (
        <SchemaRenderer key={i} schema={schema} />
      ))}

      <EventBanner />

      {/* Hero Section */}
      <div ref={heroRef} className="relative h-auto flex items-center justify-center pt-12 pb-16 md:pt-16 md:pb-20 overflow-hidden">
        <Image
          src="/Home image.webp"
          alt="Saad Tai - Multifamily Investment Advisor"
          fill
          className="object-cover object-center"
          priority
          quality={70}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <Container className="relative z-10">
          <div className="fade-in-lcp">
            <div className="max-w-3xl mx-auto text-center pb-8 pt-16">
              <Heading size="h1" color='white' className="mb-6">
                {formatTextWithLineBreaks(heroHeadline)}
              </Heading>
              <Text size="lg" className="text-white/90 mb-12 leading-relaxed">
                {formatTextWithLineBreaks(heroDescription)}
              </Text>
              <Text color='white' className="text-white/80 mb-4 italic">Licensed Realtor® | NY #10401373295 | FL #SL3651394</Text>
            </div>
          </div>
        </Container>
      </div>

      {/* Philosophy Section */}
      <Section background="background">
        <Container>
          <div ref={philosophyRef}>
            <FadeIn>
              <div className="flex flex-col md:flex-row gap-12 md:gap-16">
                {/* Left Column - Image and Contact */}
                <div className="md:w-48 flex-shrink-0">
                  <div className="sticky top-20">
                    <Image
                      src="/saad.png"
                      alt="Saad Tai"
                      width={200}
                      height={240}
                      className="w-full rounded-lg mb-6 object-cover"
                    />
                    <Heading size="h3">SAAD TAI</Heading>
                    <p className="text-slate-600 mb-6">
                      REALTOR®<br />
                      NY LIC. #10401373295<br />
                      FL LIC. #SL3651394
                    </p>
                  </div>
                </div>

                {/* Right Column - Content */}
                <div className="flex-1">
                  <Heading size="h2">Straight Talk. No Fluff.</Heading>

                  <div className="space-y-6 text-slate-700 leading-relaxed mb-8 max-w-2xl">
                    <p>
                      <span className="font-semibold text-slate-900">Licensed REALTOR®</span> serving New York State and Florida, with deep expertise in the Capital Region and Jacksonville. I'm a portfolio-focused advisor—not just a transaction agent. I work with small multifamily investors who are buying, selling, or trading multiple properties.
                    </p>

                    <p>
                      My approach: <span className="font-semibold">Honest communication. Neighborhood expertise. Responsiveness.</span> I don't do everything myself—that's my secret. I leverage showing assistants, a paperwork specialist, and a transaction coordinator so I stay focused on what matters: finding you better deals, negotiating hard on your behalf, and building your investor network. I've managed execution across multiple transactions simultaneously—up to 20 residential units under contract concurrently.
                    </p>

                    <p>
                      Whether you're closing your first duplex or managing a portfolio across multiple markets, the principle is the same: I connect you with vetted property managers, contractors, attorneys, lenders, and other investors. You're not just buying or selling a property—you're plugging into an ecosystem that lets you operate and scale efficiently.
                    </p>

                    <div className="p-4 bg-slate-100 rounded-lg border-l-4" style={{ borderColor: COLORS.secondary }}>
                      <p className="text-slate-900 font-semibold text-sm mb-1">Direct Access</p>
                      <p className="text-slate-600 text-sm">
                        You can text or call me directly. I respond within 24 hours—usually within 2 hours.
                      </p>
                    </div>

                    <p className="font-semibold text-slate-900 mt-8">
                      If you're looking for an advisor who understands portfolio strategy, moves fast, and actually takes your calls...
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 mt-2">
                    <Button
                      variant="default"
                      image="/saad.png"
                      imageAlt="Saad Tai profile photo"
                      onClick={() => {
                        trackEvent('cta_clicked', { location: 'about_philosophy', label: 'Talk through your next move' })
                        setIsModalOpen(true)
                      }}
                    >
                      Talk through your next move →
                    </Button>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* STRAT Values Section */}
      <Section background='background' className='!py-16'>
        <Container>
          <div ref={valuesRef}>
            <FadeIn>
              <div className="max-w-3xl mx-auto text-center mb-16">
                <Heading size="h2" className="mb-6">
                  How I Work: The PROCESS
                </Heading>
                <Text className="text-lg text-slate-600">
                  Seven core principles that guide every transaction and relationship
                </Text>
              </div>
            </FadeIn>

            <StaggerContainer>
              <div className="space-y-6">
                {processValues.map((value, index) => (
                  <FadeIn key={index}>
                    <Card className="!overflow-hidden !shadow-none !rounded-none !bg-white !p-0 hover:!translate-y-0" style={{ borderColor: COLORS.dark, borderWidth: '2px' }}>
                      <div className="p-6 md:grid-cols-2 gap-8">
                        <div>
                          <h3 className="font-serif text-lg font-bold text-slate-900">
                            <strong className='text-3xl' style={{ color: COLORS.secondary }}>{value.title.charAt(0)}</strong>
                            {value.title.substring(1)}
                          </h3>
                        </div>
                        <div>
                          <p className="text-slate-600 text-sm leading-relaxed">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </FadeIn>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </Container>
      </Section>


      {/* Testimonials Section */}
      <Section background='background'>
        <Container>
          <div ref={credentialsRef}>
            <SectionHeader
              title="What My Clients Say"
              centered
              className="max-w-3xl mx-auto mb-16"
            />

            <FadeIn>
              <TestimonialsSection testimonials={testimonials} />
            </FadeIn>

            <FadeIn className="mt-16">
              <div className="flex justify-center">
                <Button
                  variant="default"
                  image="/saad.png"
                  imageAlt="Saad Tai profile photo"
                  onClick={() => {
                    trackEvent('cta_clicked', { location: 'about_testimonials', label: 'Talk through your next move' })
                    setIsModalOpen(true)
                  }}
                >
                  Talk through your next move →
                </Button>
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
