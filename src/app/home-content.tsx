'use client'

import { TrendingUp, Users, Target, Facebook, Instagram, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
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
import { LeadFormModal } from '@/components/LeadFormModal'
import { EventBanner } from '@/components/EventBanner'
import { trackEvent } from '@/lib/tracking'
import { useScrollTracking } from '@/hooks/useScrollTracking'
import { SchemaRenderer } from '@/components/SchemaRenderer'
import { getReviewSchema } from '@/lib/schema-generators'
import { testimonials } from '@/data/testimonials'
import { formatTextWithLineBreaks } from '@/lib/format-text'
const TestimonialsSection = dynamic(
  () => import('@/components/TestimonialsSection').then((mod) => mod.TestimonialsSection),
  { ssr: false, loading: () => <div className="h-48" /> }
)

const StatsSection = dynamic(
  () => import('@/components/StatsSection').then((mod) => mod.StatsSection),
  { ssr: false, loading: () => <div className="h-48" /> }
)
import { SectionHeader } from '@/components/SectionHeader'
import { FAQSectionWithSchema } from '@/components/faq/FAQSection'
import { homeFaqs } from '@/data/ai-faqs'
import { neighborhoods } from '@/data/neighborhoods'

interface HomeContentProps {
  hero?: {
    headline?: string
    description?: string
    ctaText?: string
  }
}

export function HomeContent({ hero }: HomeContentProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [prefillComments, setPrefillComments] = useState<string | undefined>(undefined)

  // Scroll tracking refs
  const heroRef = useScrollTracking({ sectionName: 'hero' })
  const problemRef = useScrollTracking({ sectionName: 'problem' })
  const whatIDoRef = useScrollTracking({ sectionName: 'what_i_do_differently' })
  const proofRef = useScrollTracking({ sectionName: 'proof_results' })
  const testimonialsRef = useScrollTracking({ sectionName: 'testimonials' })
  const whoIWorkWithRef = useScrollTracking({ sectionName: 'who_i_work_with' })
  const howIWorkRef = useScrollTracking({ sectionName: 'how_i_work' })
  const whatYouGetRef = useScrollTracking({ sectionName: 'what_you_get' })
  const aboutMeRef = useScrollTracking({ sectionName: 'about_me' })

  // Generate Review schemas for testimonials (all 5-star reviews)
  const reviewSchemas = testimonials.map((testimonial) =>
    getReviewSchema({
      reviewRating: 5,
      reviewBody: testimonial.text,
      author: testimonial.author,
    })
  )

  return (
    <>
      {/* Render Review schemas */}
      {reviewSchemas.map((schema, i) => (
        <SchemaRenderer key={i} schema={schema} />
      ))}

      <EventBanner />

      {/* Hero Section */}
      <HeroSection
        ref={heroRef}
        headline={hero?.headline || ''}
        description={hero?.description || ''}
        ctaText={hero?.ctaText || 'Talk through your next move'}
        onCtaClick={() => {
          trackEvent('cta_clicked', { location: 'hero', label: hero?.ctaText || 'Talk through your next move' })
          setIsModalOpen(true)
        }}
        testimonial={{
          text: "If you're looking for a reliable and hardworking agent who truly cares about his clients, I highly recommend Saad Tai!",
          author: "Nicholas Totaram",
          tag: "Buyer & Investor"
        }}
      />

      {/* Authority Intro — entity declaration for search engines and LLMs */}
      <section className="bg-white py-8">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-slate-600 text-base leading-relaxed">
            <strong className="text-slate-900">Saad Tai</strong> is a licensed multifamily investment advisor serving <strong className="text-slate-900">Albany, Schenectady, and Troy</strong> in New York&apos;s Capital Region and <strong className="text-slate-900">Kissimmee, Florida</strong>. Specializing in 2–4 unit properties, Saad helps investors make confident buy, sell, and hold decisions through rigorous underwriting, off-market deal sourcing, and strategic exit planning.
          </p>
        </div>
      </section>

      {/* The Problem Section */}
      <Section background='dark' className='!pt-0'>
        <Container>
          <div ref={problemRef} className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="mb-12">
                <Heading size="h2" color='white' className='!mt-6'>
                  Investors Face Confusion at Critical Moments
                </Heading>
                <Text size="lg" color='white'>
                  <strong style={{ color: COLORS.secondary }}>Buyers</strong> have spreadsheets, contractor estimates, and comps—data everywhere but no confidence in the true picture. Is this deal actually solid, or are you missing something critical?<br /><br />
                  <strong style={{ color: COLORS.secondary }}>Sellers</strong> have offers coming in. Intuition says one thing. Market intel says another. You're making a six-figure decision with incomplete information.<br /><br />
                  <strong style={{ color: COLORS.secondary }}>If you're holding,</strong> the keep-or-sell decision haunts you. More analysis doesn't help. You need someone you trust to cut through the noise and tell you what matters.
                </Text>
              </div>
            </FadeIn>
          </div>
          <div ref={whatIDoRef}>
            <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">

              {/* Selling Section */}
              <FadeIn delay={0.2}>
                <Card variant="flat" className="bg-white h-full flex flex-col" style={{ borderColor: COLORS.dark, borderWidth: '2px' }}>
                  <div className="w-full h-64 bg-slate-200 overflow-hidden">
                    <Image
                      src="/house4.webp"
                      alt="Sell Your Home"
                      width={600}
                      height={400}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="w-full h-full object-cover"
                      quality={75}
                      loading="lazy"
                    />
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <Heading size="h3" className="!mb-4">If you're selling</Heading>
                    <p className="text-slate-600 mb-6 flex-grow">
                      Our system handles professional photography, tenant coordination, buyer qualification, and negotiation.<br />You maximize proceeds without the chaos.
                    </p>
                    <Link href="/selling" className="inline-block">
                      <Button variant="default" className="w-full">
                        Explore Selling <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              </FadeIn>

              {/* Buying Section */}
              <FadeIn>
                <Card variant="flat" className="bg-white h-full flex flex-col" style={{ borderColor: COLORS.dark, borderWidth: '2px' }}>
                  <div className="w-full h-64 bg-slate-200 overflow-hidden">
                    <Image
                      src="/house3.webp"
                      alt="Find Your Home"
                      width={600}
                      height={400}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="w-full h-full object-cover"
                      quality={75}
                      loading="lazy"
                    />
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <Heading size="h3" className="!mb-4">If you're buying</Heading>
                    <p className="text-slate-600 mb-6 flex-grow">
                      Our system finds off-market deals, runs rigorous underwriting, and coordinates due diligence.<br />You avoid overpaying and close with confidence.
                    </p>
                    <Link href="/buying" className="inline-block">
                      <Button variant="default" className="w-full">
                        Explore Buying <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              </FadeIn>
            </div>
          </div>
        </Container>
      </Section>

      {/* Testimonials Section */}
      <Section background='background'>
        <Container>
          <div ref={testimonialsRef}>
            <TestimonialsSection testimonials={testimonials} />
          </div>
        </Container>
      </Section>

      {/* The Real Cost of Getting It Wrong - Deep Pain Dive */}
      <Section background='dark'>
        <Container>
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <SectionHeader 
                title="What Happens When You Get It Wrong"
                subtitle="The cost isn't just money. It's opportunity lost, years wasted, and growth arrested."
                titleColor="white"
                subtitleColor="white"
                centered
                className="mb-12"
                withFadeIn={false}
              />

              <div className="space-y-8">
                {/* Buyer Trap */}
                <div className="p-8 rounded-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', border: `1px solid ${COLORS.secondary}` }}>
                  <div className="flex gap-4 items-start mb-6">
                    <div className="text-3xl font-bold flex-shrink-0" style={{ color: COLORS.secondary }}>1</div>
                    <div>
                      <Heading size="h3" color='white' className='mb-2'>The Buyer's Trap: Overpaying for Confidence</Heading>
                      <Text color='white' className='mb-4'>
                        You see a deal, run some numbers, and your gut says go. You bid. You win. Three months later, a similar property sells for $50K less. Or your actual rent comes in 8% below your underwriting. Now you're locked into poor returns for the next 10 years.
                      </Text>
                      <Text color='white' className='text-sm' style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                        <strong className='font-semibold'>The real cost:</strong> $50K on a single deal. $500K+ across a portfolio over a decade. And worse—that capital should have been deployed elsewhere.
                      </Text>
                    </div>
                  </div>
                </div>

                {/* Seller Trap */}
                <div className="p-8 rounded-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', border: `1px solid ${COLORS.secondary}` }}>
                  <div className="flex gap-4 items-start mb-6">
                    <div className="text-3xl font-bold flex-shrink-0" style={{ color: COLORS.secondary }}>2</div>
                    <div>
                      <Heading size="h3" color='white' className='mb-2'>The Seller's Paralysis: Timing Agony</Heading>
                      <Text color='white' className='mb-4'>
                        Market's softening. Or is it? You hold. Rates drop, demand surges, and your neighbor's identical building goes for $150K more. Or you wait too long, the window closes, and you end up selling at the worst time. You made a six-figure decision based on gut feeling and half-read market reports.
                      </Text>
                      <Text color='white' className='text-sm' style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                        <strong className='font-semibold'>The real cost:</strong> Leaving $100K-200K on the table, or worse—holding dead capital for 2-3 extra years that could have been redeployed.
                      </Text>
                    </div>
                  </div>
                </div>

                {/* Hold Trap */}
                <div className="p-8 rounded-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', border: `1px solid ${COLORS.secondary}` }}>
                  <div className="flex gap-4 items-start mb-6">
                    <div className="text-3xl font-bold flex-shrink-0" style={{ color: COLORS.secondary }}>3</div>
                    <div>
                      <Heading size="h3" color='white' className='mb-2'>The Hold Trap: Stuck Between Stories</Heading>
                      <Text color='white' className='mb-4'>
                        You're keeping a property. Is it still worth keeping? The original thesis was strong, but markets shift. Tenants change. Tax policy shifts. You're asking yourself the same questions every six months and never moving. Meanwhile, better opportunities pass by.
                      </Text>
                      <Text color='white' className='text-sm' style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                        <strong className='font-semibold'>The real cost:</strong> Three years of lost optionality. Capital that could have been earning 15% ROI sitting at 4%. Peace of mind traded for persistent doubt.
                      </Text>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 rounded-lg text-center" style={{ backgroundColor: COLORS.secondary, color: COLORS.dark }}>
                <p className="text-lg font-semibold mb-2">
                  These aren't hypothetical costs. These happen to good investors all the time.
                </p>
                <p className="text-sm mb-6">
                  The problem isn't that you're bad at this. It's that you're operating alone, without the data, market context, and honest feedback you need to make confident moves.
                </p>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* What Changes With Clarity - Transformation Narrative */}
      <Section background='white'>
        <Container>
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <SectionHeader 
                title="What Changes When You Have [Clarity]"
                subtitle="These aren't small shifts. They're foundational changes to how you make decisions."
                centered
                className="mb-12"
                withFadeIn={false}
              />

              <div className="space-y-6">
                {/* Buyers Benefit */}
                <div className="border-l-4 pl-6 py-4" style={{ borderColor: COLORS.secondary }}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl font-bold" style={{ color: COLORS.secondary }}>✓</span>
                    <Heading size="h3" className='mb-0'>Buyers stop overpaying</Heading>
                  </div>
                  <Text className='text-slate-700 mb-3'>
                    You see real comps, real rent potential, real exit scenarios. You bid with confidence because you know your numbers are solid. You close on deals that actually pencil.
                  </Text>
                  <p className="text-sm text-slate-600 italic">
                    Average: <strong>Buyers save $30-80K per deal through honest underwriting and strategic positioning.</strong>
                  </p>
                </div>

                {/* Sellers Benefit */}
                <div className="border-l-4 pl-6 py-4" style={{ borderColor: COLORS.secondary }}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl font-bold" style={{ color: COLORS.secondary }}>✓</span>
                    <Heading size="h3" className='mb-0'>Sellers exit with confidence, not regret</Heading>
                  </div>
                  <Text className='text-slate-700 mb-3'>
                    You know the market. You know your timing. You know what price is realistic and when to push for more. You sell fast, at the right price, without second-guessing yourself for the next five years.
                  </Text>
                  <p className="text-sm text-slate-600 italic">
                    Average: <strong>Sellers achieve 97% at/above asking price, closed in 13 days, with complete confidence in their exit.</strong>
                  </p>
                </div>

                {/* Holders Benefit */}
                <div className="border-l-4 pl-6 py-4" style={{ borderColor: COLORS.secondary }}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl font-bold" style={{ color: COLORS.secondary }}>✓</span>
                    <Heading size="h3" className='mb-0'>Holders make peace with their decision</Heading>
                  </div>
                  <Text className='text-slate-700 mb-3'>
                    You have a clear thesis for why you're holding. You know the economics. You know your exit window. When doubt creeps in, you have data, not just feelings. You sleep better.
                  </Text>
                  <p className="text-sm text-slate-600 italic">
                    Result: <strong>You operate from strategy, not anxiety. You have space to grow.</strong>
                  </p>
                </div>
              </div>

              <div className="mt-12 text-center">
                <Button
                  variant="default"
                  image="/saad.png"
                  imageAlt="Saad Tai profile photo"
                  className='mx-auto'
                  onClick={() => {
                    trackEvent('cta_clicked', { location: 'what_changes_clarity', label: 'Experience this shift yourself' })
                    setIsModalOpen(true)
                  }}
                >
                  Experience the shift yourself →
                </Button>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Proof Section */}
      <Section background='dark'>
        <Container>
          <div ref={proofRef}>
            <SectionHeader 
              title="[Clarity] That Gets Results"
              subtitle="My system moves investor-grade multifamily fast,\ntypically above asking and within days."
              titleColor="white"
              subtitleColor="white"
              centered
              className="max-w-3xl mx-auto mb-12"
            />

            <StatsSection 
              stats={[
                { value: '13', label: 'Average days to sale\nfor listings', color: COLORS.secondary },
                { value: '97%', label: 'At or above asking price\n(last 12 months)', color: 'white' },
                { value: '300+', label: 'Deals analyzed\nin past 5 years', color: COLORS.secondary }
              ]}
              className="mb-12"
            />

            <FadeIn className="mb-12">
              <div
                className="max-w-5xl mx-auto p-8 rounded overflow-hidden"
                style={{
                  backgroundColor: COLORS.secondary,
                  border: `1px solid ${COLORS.secondary}`
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold mb-3" style={{ color: COLORS.dark }}>Major Sale: The John Hooper House</h3>
                    <p className="mb-2" style={{ color: COLORS.dark }}>
                      153 2nd Ave, Troy
                    </p>
                    <p style={{ color: COLORS.dark }}>
                      A documented Underground Railroad stop, once owned by Harriet Tubman's cousin, featured in HBO's <em>The Gilded Age</em>. Successfully closed on one of Troy's most significant historical properties.
                    </p>
                  </div>
                  <div className="w-full max-w-sm rounded overflow-hidden flex items-center justify-center mx-auto md:ml-auto md:mr-0" style={{ backgroundColor: COLORS.background, aspectRatio: '0.6' }}>
                    <Image
                      src="/153 2nd St.webp"
                      alt="153 2nd Ave - John Hooper House"
                      width={416}
                      height={250}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 400px"
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
        </Container>
      </Section>

      {/* Your Next Move - Journey-Based CTAs */}
      <Section background="white">
        <Container>
          <div ref={whatYouGetRef}>
            <FadeIn>
              <div className="max-w-4xl mx-auto text-center mb-16">
                <Heading size="h2">
                  Which Journey Are You On?
                </Heading>
                <Text size="lg" className="text-slate-600 mt-4">
                  {formatTextWithLineBreaks("Your path forward depends on where you are right now. Pick your journey and let's get to [Clarity] together.")}
                </Text>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
                {/* Buying Journey */}
                <FadeIn>
                  <Card variant="flat" className="bg-white h-full flex flex-col" style={{ borderColor: COLORS.dark, borderWidth: '2px' }}>
                    <div className="p-8 flex flex-col h-full">
                      <div className="mb-6">
                        <Heading size="h3" className="mb-2">You're Buying</Heading>
                        <p className="text-sm text-slate-600">Looking for your next deal—whether it's a 2-plex or a 12-unit. You want honest underwriting and confidence in your numbers.</p>
                      </div>
                      <div className="flex-grow mb-6">
                        <p className="text-slate-700 mb-4 font-semibold">You'll get:</p>
                        <ul className="space-y-2 text-sm text-slate-600">
                          <li className="flex gap-2">
                            <span style={{ color: COLORS.secondary }}>→</span>
                            <span>Off-market deals with verified rent rolls</span>
                          </li>
                          <li className="flex gap-2">
                            <span style={{ color: COLORS.secondary }}>→</span>
                            <span>Conservative underwriting & cap rate analysis</span>
                          </li>
                          <li className="flex gap-2">
                            <span style={{ color: COLORS.secondary }}>→</span>
                            <span>Fast lender network & 1031 coordination</span>
                          </li>
                        </ul>
                      </div>
                      <Button
                        variant="default"
                        onClick={() => {
                          trackEvent('cta_clicked', { location: 'buying_journey', label: "I'm buying" })
                          setPrefillComments("I want to talk about buying")
                          setIsModalOpen(true)
                        }}
                        className="w-full"
                      >
                        {formatTextWithLineBreaks('Get [Clarity] on Buying')}
                      </Button>
                    </div>
                  </Card>
                </FadeIn>

                {/* Selling Journey */}
                <FadeIn delay={0.1}>
                  <Card variant="flat" className="h-full flex flex-col" style={{ borderColor: COLORS.dark, borderWidth: '2px', backgroundColor: COLORS.secondary }}>
                    <div className="p-8 flex flex-col h-full">
                      <div className="mb-6">
                        <Heading size="h3" className="mb-2" style={{ color: COLORS.dark }}>You're Selling</Heading>
                        <p className="text-sm" style={{ color: COLORS.dark }}>Ready to exit one or more properties. You want maximum price, fast close, and zero buyer drama.</p>
                      </div>
                      <div className="flex-grow mb-6">
                        <p className="mb-4 font-semibold" style={{ color: COLORS.dark }}>You'll get:</p>
                        <ul className="space-y-2 text-sm" style={{ color: COLORS.dark }}>
                          <li className="flex gap-2">
                            <span style={{ color: COLORS.dark }}>→</span>
                            <span>Tenant coordination & property showings</span>
                          </li>
                          <li className="flex gap-2">
                            <span style={{ color: COLORS.dark }}>→</span>
                            <span>Direct outreach to qualified investor buyers</span>
                          </li>
                          <li className="flex gap-2">
                            <span style={{ color: COLORS.dark }}>→</span>
                            <span>Professional marketing & negotiation</span>
                          </li>
                        </ul>
                      </div>
                      <Button
                        variant="default"
                        onClick={() => {
                          trackEvent('cta_clicked', { location: 'selling_journey', label: "I'm selling" })
                          setPrefillComments("I want to talk about selling")
                          setIsModalOpen(true)
                        }}
                        className="w-full"
                      >
                        {formatTextWithLineBreaks('Get [Clarity] on Selling')}
                      </Button>
                    </div>
                  </Card>
                </FadeIn>

                {/* Holding Journey */}
                <FadeIn delay={0.2}>
                  <Card variant="flat" className="bg-white h-full flex flex-col" style={{ borderColor: COLORS.dark, borderWidth: '2px' }}>
                    <div className="p-8 flex flex-col h-full">
                      <div className="mb-6">
                        <Heading size="h3" className="mb-2">You're Holding</Heading>
                        <p className="text-sm text-slate-600">You have properties under your belt. Unsure if you should keep holding or exit. You need a decision framework.</p>
                      </div>
                      <div className="flex-grow mb-6">
                        <p className="text-slate-700 mb-4 font-semibold">You'll get:</p>
                        <ul className="space-y-2 text-sm text-slate-600">
                          <li className="flex gap-2">
                            <span style={{ color: COLORS.secondary }}>→</span>
                            <span>Keep-vs-sell analysis</span>
                          </li>
                          <li className="flex gap-2">
                            <span style={{ color: COLORS.secondary }}>→</span>
                            <span>Portfolio optimization strategy</span>
                          </li>
                          <li className="flex gap-2">
                            <span style={{ color: COLORS.secondary }}>→</span>
                            <span>Ongoing quarterly check-ins</span>
                          </li>
                        </ul>
                      </div>
                      <Button
                        variant="default"
                        onClick={() => {
                          trackEvent('cta_clicked', { location: 'holding_journey', label: "I'm holding" })
                          setPrefillComments("I want to talk about holding")
                          setIsModalOpen(true)
                        }}
                        className="w-full"
                      >
                        {formatTextWithLineBreaks('Get [Clarity] on Holding')}
                      </Button>
                    </div>
                  </Card>
                </FadeIn>
              </div>

              <div className="max-w-3xl mx-auto p-8 rounded-lg" style={{ backgroundColor: COLORS.background }}>
                <p className="text-slate-900 font-semibold text-center mb-4">
                  Regardless of your journey, the first step is always the same.
                </p>
                <div className="space-y-3 text-slate-700 mb-6">
                  <div className="flex gap-3">
                    <span className="font-bold" style={{ color: COLORS.secondary }}>1.</span>
                    <span>{formatTextWithLineBreaks('We talk about where you are and what\'s keeping you from moving with [Clarity]')}</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-bold" style={{ color: COLORS.secondary }}>2.</span>
                    <span>I give you honest feedback—whether now is the right time and what the smartest move looks like</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-bold" style={{ color: COLORS.secondary }}>3.</span>
                    <span>If it makes sense, we execute. My team handles the details. You make the decisions.</span>
                  </div>
                </div>
                <p className="text-sm text-slate-600 text-center">
                  <strong>No surprises. No pressure. No pitch.</strong> Just strategy that actually works.
                </p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Footer About Section */}
      <Section background="background">
        <Container>
          <div ref={aboutMeRef}>
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
                    sizes="(max-width: 768px) 100vw, 200px"
                    className="w-full rounded-lg mb-6 object-cover"
                  />
                  <Heading size="h3">SAAD TAI</Heading>
                  <p className="text-slate-600 mb-6">
                    REALTOR®<br />
                    NY LIC. #10401373295<br />
                    FL LIC. #SL3651394
                  </p>
                  <div className="flex gap-4">
                    <a href="https://www.facebook.com/profile.php?id=61577367974508" target="_blank" rel="noopener noreferrer" aria-label="Visit us on Facebook" className="text-slate-400 hover:text-slate-700 transition-colors">
                      <Facebook className="w-6 h-6" />
                    </a>
                    <a href="https://www.instagram.com/saadtherealtor/" target="_blank" rel="noopener noreferrer" aria-label="Visit us on Instagram" className="text-slate-400 hover:text-slate-700 transition-colors">
                      <Instagram className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column - Content */}
              <div className="flex-1">
                <Heading size="h2">Straight Talk. No Fluff.</Heading>

                <div className="space-y-6 text-slate-700 leading-relaxed mb-8 max-w-2xl">
                  <p>
                    <span className="font-semibold text-slate-900">Licensed REALTOR®</span> serving New York State and Florida, with deep expertise in the Capital Region and Kissimmee. I'm a portfolio-focused advisor—not just a transaction agent. I work with small multifamily investors who are buying, selling, or trading multiple properties.
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
                      You can text or call me directly. I respond within 2 hours—usually within 30 minutes.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-2">
                  <Link href="/about">
                    <Button imageAlt="Saad Tai profile photo">
                      Learn more about Saad →
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Resource Hub */}
      <Section background="white">
        <Container>
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <Heading size="h2">Multifamily Investing Resources</Heading>
              <Text size="lg" className="text-gray-700">
                Use the guides, blog, and calculator to make clear decisions faster.
              </Text>
            </div>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/investing">
              <Card className="p-6 h-full hover:shadow-lg transition-all duration-300">
                <Heading size="h3" className="mb-2">Investing & How-To Guides</Heading>
                <Text className="text-gray-700 mb-4">
                  Multifamily fundamentals, cap rates, market analysis, and step-by-step playbooks.
                </Text>
                <Button variant="default" className="p-0">Browse Guides →</Button>
              </Card>
            </Link>
            <Link href="/blog">
              <Card className="p-6 h-full hover:shadow-lg transition-all duration-300">
                <Heading size="h3" className="mb-2">Investor Blog</Heading>
                <Text className="text-gray-700 mb-4">
                  Frameworks and market insights to improve your underwriting.
                </Text>
                <Button variant="default" className="p-0">Read Articles →</Button>
              </Card>
            </Link>
            <Link href="/calculator">
              <Card className="p-6 h-full hover:shadow-lg transition-all duration-300">
                <Heading size="h3" className="mb-2">Investment Calculator</Heading>
                <Text className="text-gray-700 mb-4">
                  Evaluate cap rate, cash flow, and projections in minutes.
                </Text>
                <Button variant="default" className="p-0">Run the Calculator →</Button>
              </Card>
            </Link>
          </StaggerContainer>
        </Container>
      </Section>

      {/* Market Snapshot Table — data tables get 4.1x more AI citations */}
      <Section background="white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Heading size="h2" className="text-center">Capital Region Market Snapshot — 2026</Heading>
            <Text size="lg" className="text-gray-700 text-center mb-8">
              Key metrics for multifamily investors across Albany, Schenectady, and Troy.
            </Text>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b-2 border-slate-300">
                    <th className="text-left py-3 px-4 font-semibold text-slate-900">Market</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-900">Median Price</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-900">Est. Cap Rate</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-900">Rent (2BR)</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-900">1-Yr Appreciation</th>
                  </tr>
                </thead>
                <tbody>
                  {(() => {
                    const capRates: Record<string, string> = {
                      albany: '7.2–7.8%',
                      schenectady: '7.5–8.2%',
                      troy: '7.8–8.5%',
                    }
                    return ['albany', 'schenectady', 'troy'].map((id) => {
                      const n = neighborhoods.find((nb) => nb.id === id)
                      if (!n) return null
                      return (
                        <tr key={id} className="border-b border-slate-200 hover:bg-slate-50">
                          <td className="py-3 px-4 font-medium text-slate-900">{n.name}</td>
                          <td className="py-3 px-4 text-slate-700">{n.marketData.medianHomePrice}</td>
                          <td className="py-3 px-4 text-slate-700">{capRates[id]}</td>
                          <td className="py-3 px-4 text-slate-700">{n.marketData.medianRent2BR}</td>
                          <td className="py-3 px-4 text-slate-700">{n.marketData.appreciation1Year}</td>
                        </tr>
                      )
                    })
                  })()}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500 mt-4 text-center">
              Source: Capital Region MLS data and neighborhood analysis. Cap rates estimated from 2–4 unit multifamily sales.{' '}
              <Link href="/investing/albany-multifamily-investing" className="underline hover:text-slate-700">Full Albany guide</Link>
              {' · '}
              <Link href="/investing/schenectady-multifamily-investing" className="underline hover:text-slate-700">Full Schenectady guide</Link>
              {' · '}
              <Link href="/investing/troy-multifamily-investing" className="underline hover:text-slate-700">Full Troy guide</Link>
            </p>
          </div>
        </Container>
      </Section>

      {/* Home FAQ */}
      <FAQSectionWithSchema
        title="Multifamily Investment FAQ"
        description="Answers to common questions from multifamily investors in Albany, Schenectady, Troy, and Kissimmee."
        faqs={homeFaqs}
        background="background"
        maxDisplay={8}
        schemaName="Multifamily Investment Advisory"
      />

      {/* Lead Form Modal */}
      <LeadFormModal 
        isOpen={isModalOpen} 
        onClose={() => {
          setIsModalOpen(false)
          setPrefillComments(undefined)
        }} 
        prefillComments={prefillComments}
      />
    </>
  )
}
