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
import { trackEvent, trackMetaPageView } from '@/lib/tracking'
import { useScrollTracking } from '@/hooks/useScrollTracking'
import { CheckCircle, Award, Briefcase, MapPin, Target, TrendingUp, Brain, Zap, Users } from 'lucide-react'

export default function AboutPageContent() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    trackMetaPageView('about_page')
  }, [])

  // Scroll tracking refs
  const heroRef = useScrollTracking({ sectionName: 'about_hero' })
  const philosophyRef = useScrollTracking({ sectionName: 'about_philosophy' })
  const valuesRef = useScrollTracking({ sectionName: 'about_values' })
  const storyRef = useScrollTracking({ sectionName: 'about_story' })
  const credentialsRef = useScrollTracking({ sectionName: 'about_credentials' })
  const approachRef = useScrollTracking({ sectionName: 'about_approach' })

  const straValues = [
    {
      letter: 'S',
      title: 'Straight Talk',
      description: 'Honest answers, clear numbers, zero pressure. If something doesn\'t make sense, I\'ll tell you—and show you the smarter option.'
    },
    {
      letter: 'T',
      title: 'Territory Knowledge',
      description: 'I\'ve walked, shown, or knocked on just about every street from Albany to Schenectady. That boots-on-the-ground insight helps you price right and spot hidden value.'
    },
    {
      letter: 'R',
      title: 'Results Focused',
      description: 'Your goals become my mission. I handle every detail from inspections to negotiations, and I don\'t give up until you get the outcome you deserve.'
    },
    {
      letter: 'A',
      title: 'Always Available',
      description: 'Late-night questions? Weekend showings? I\'m here. Text, call, or email—you get fast responses because your move matters.'
    },
    {
      letter: 'T',
      title: 'Trust & Integrity',
      description: 'I treat your investment like it\'s my own money on the line. Your success is my success, and I won\'t quit no matter the circumstance.'
    }
  ]

  const credentials = [
    { icon: Award, text: 'Licensed Realtor® - New York' },
    { icon: Briefcase, text: 'NY Real Estate License #10401373295' },
    { icon: MapPin, text: 'Capital Region Specialist' },
    { icon: Target, text: 'Specialist in Multifamily Portfolio Strategy' },
    { icon: TrendingUp, text: '95%+ Repeat & Referral Client Rate' },
    { icon: CheckCircle, text: 'Investor-Focused Approach' }
  ]

  return (
    <>
      {/* Hero Section */}
      <div ref={heroRef} className="relative h-auto flex items-center justify-center pt-12 pb-16 md:pt-16 md:pb-20 overflow-hidden">
        <Image
          src="/Home image.webp"
          alt="Saad Tai - Multifamily Investment Advisor"
          fill
          className="object-cover object-center"
          priority
          quality={80}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <Container className="relative z-10">
          <div className="fade-in-lcp">
            <div className="max-w-3xl mx-auto text-center pb-8 pt-16">
              <Heading size="h1" color='white' className="mb-6">
                Hi, I'm Saad Tai
              </Heading>
              <Text size="lg" className="text-white/90 mb-12 leading-relaxed">
                Multifamily investment advisor. I help investors think through buy, sell, and hold decisions while my team handles the execution. Strategic guidance. Honest analysis. Direct access.
              </Text>
              <Text color='white' className="text-white/80 mb-4 italic">Licensed Realtor® | NY License #10401373295</Text>
            </div>
          </div>
        </Container>
      </div>

      {/* Philosophy Section */}
      <Section background='white' className='!pt-2'>
        <Container>
          <div ref={philosophyRef}>
            <FadeIn>
              <div className="max-w-3xl mx-auto mb-16">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <Image
                      src="/saad.png"
                      alt="Saad Tai"
                      width={400}
                      height={500}
                      className="rounded-lg shadow-lg w-full h-auto object-cover"
                    />
                  </div>
                  <div>
                    <Heading size="h2" className="mb-6">
                      Straight Talk, No Fluff
                    </Heading>
                    <Text className="text-lg text-slate-600 mb-6 leading-relaxed">
                      Real estate is my day job, night hobby, and weekend conversation starter. I've learned that most investors don't need another salesman pitching fantasy numbers—they need <span className="font-semibold">honest guidance, strategic clarity, and someone who treats their deal like it's their own money on the line.</span>
                    </Text>
                    <Text className="text-lg text-slate-600 mb-6 leading-relaxed">
                      That's why I built my business differently. I handle strategy and sourcing. My team handles the execution—showings, paperwork, logistics. That way, you get both: clear strategic guidance AND expert execution.
                    </Text>
                    <Text className="text-lg text-slate-600 leading-relaxed">
                      When I work with you—whether you're buying your first multifamily or managing a portfolio across multiple neighborhoods—you get direct access. I call you back within 24 hours. I tell you when a deal doesn't pencil. I don't give up when things get complicated.
                    </Text>
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
                  How I Work: The STRAT Approach
                </Heading>
                <Text className="text-lg text-slate-600">
                  Five core principles that guide every transaction and relationship
                </Text>
              </div>
            </FadeIn>

            <StaggerContainer>
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
                {straValues.map((value, index) => (
                  <FadeIn key={index}>
                    <Card className="h-full">
                      <div className="p-6 flex flex-col h-full">
                        <div className="text-4xl font-bold mb-4" style={{ color: COLORS.secondary }}>
                          {value.letter}
                        </div>
                        <h3 className="font-serif text-xl font-bold mb-3 text-slate-900">
                          {value.title}
                        </h3>
                        <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                          {value.description}
                        </p>
                      </div>
                    </Card>
                  </FadeIn>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </Container>
      </Section>

      {/* Background & Story Section */}
      <Section background='white'>
        <Container>
          <div ref={storyRef}>
            <FadeIn>
              <div className="max-w-3xl mx-auto">
                <Heading size="h2" className="mb-12">
                  How I Help Investors Win
                </Heading>

                <div className="space-y-8 text-slate-700 leading-relaxed">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">
                      Strategy + Execution
                    </h3>
                    <p>
                      Most investors are drowning in the details—showings, inspections, paperwork, negotiations. That's where I'm different. I handle the strategic side (analysis, sourcing, deal structure). My team handles the execution (logistics, paperwork, coordination). That way, you get <span className="font-semibold">clarity on whether to move AND expert execution if you do.</span>
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">
                      Investor-Grade Analysis
                    </h3>
                    <p>
                      I analyze properties the way you should: cap rates, cash flow, conservative assumptions, no fantasy projections. If something doesn't pencil, you'll hear it from me. I don't have an incentive to push bad deals—I only make money when you win.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">
                      Network & Resources
                    </h3>
                    <p>
                      You get access to my network: vetted lenders, property managers, contractors, attorneys. You're not just buying a property—you're plugging into a full ecosystem of professionals who understand investor-grade real estate.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">
                      Direct Access
                    </h3>
                    <p>
                      You can text or call me directly. I respond within 24 hours, usually faster. No middleman. No "I'll get back to you tomorrow." When your deal needs attention, you get it.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Credentials & Proof Section */}
      <Section background='background'>
        <Container>
          <div ref={credentialsRef}>
            <FadeIn>
              <div className="max-w-3xl mx-auto">
                <Heading size="h2" className="mb-12 text-center">
                  Credentials & Track Record
                </Heading>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  {credentials.map((cred, index) => {
                    const IconComponent = cred.icon
                    return (
                      <div key={index} style={{ opacity: 0, transform: 'translateY(20px)' }} className="fade-in flex gap-4">
                        <IconComponent size={24} className="flex-shrink-0" style={{ color: COLORS.secondary }} />
                        <p className="text-slate-700 font-semibold">{cred.text}</p>
                      </div>
                    )
                  })}
                </div>

                <div className="bg-white rounded-lg p-8 border-2" style={{ borderColor: COLORS.primary }}>
                  <h3 className="font-serif text-2xl font-bold text-slate-900 mb-6">
                    What Clients Say
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <p className="text-slate-700 italic mb-2">
                        "Saad is one of the most professional realtors I've worked with. He's hardworking, creative, and doesn't sit back waiting for deals—he actively sources them. That's rare to find. Highly recommend."
                      </p>
                      <p className="font-semibold text-slate-900">— Jeremy Davis, Real Estate Investor</p>
                    </div>
                    <div>
                      <p className="text-slate-700 italic mb-2">
                        "What makes Saad amazing is his ability to listen and make you feel like you're the most important person in the room. It's his follow-through that sets him apart. He heard every word and delivered."
                      </p>
                      <p className="font-semibold text-slate-900">— Michael Downton, Client</p>
                    </div>
                    <div>
                      <p className="text-slate-700 italic mb-2">
                        "As a first-time seller, I was nervous about the whole process. Saad explained everything, was incredibly patient, and responded instantly to any question I had. Great realtor and genuinely a great guy."
                      </p>
                      <p className="font-semibold text-slate-900">— Christine DeGennaro, First-Time Seller</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Approach & Philosophy Section */}
      <Section background='white'>
        <Container>
          <div ref={approachRef}>
            <FadeIn>
              <div className="max-w-3xl mx-auto">
                <Heading size="h2" className="mb-12">
                  How I Help Investors Win
                </Heading>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  <Card>
                    <div className="p-6">
                      <Brain size={32} className="mb-4" style={{ color: COLORS.secondary }} />
                      <h3 className="font-serif text-lg font-bold text-slate-900 mb-3">
                        Strategy First
                      </h3>
                      <p className="text-slate-600 text-sm">
                        Before we look at properties, I understand your goals, timeline, and investment criteria. Then we build a plan that works.
                      </p>
                    </div>
                  </Card>

                  <Card>
                    <div className="p-6">
                      <Zap size={32} className="mb-4" style={{ color: COLORS.secondary }} />
                      <h3 className="font-serif text-lg font-bold text-slate-900 mb-3">
                        Honest Analysis
                      </h3>
                      <p className="text-slate-600 text-sm">
                        I run conservative underwriting. If a deal doesn't actually pencil, you'll hear it from me—not a cheerleader telling you it's perfect.
                      </p>
                    </div>
                  </Card>

                  <Card>
                    <div className="p-6">
                      <Users size={32} className="mb-4" style={{ color: COLORS.secondary }} />
                      <h3 className="font-serif text-lg font-bold text-slate-900 mb-3">
                        Network Access
                      </h3>
                      <p className="text-slate-600 text-sm">
                        Vetted lenders, property managers, contractors, attorneys—you're not just buying a property, you're connecting to a full ecosystem.
                      </p>
                    </div>
                  </Card>
                </div>

                <div className="bg-slate-50 rounded-lg p-8 border-l-4" style={{ borderColor: COLORS.secondary }}>
                  <p className="text-slate-900 font-semibold mb-3 text-lg">
                    Ready to talk about your next move?
                  </p>
                  <p className="text-slate-700 mb-6">
                    Whether you're buying, selling, or planning your next strategic move, I'm here to give you honest guidance and execute with precision. Let's talk about what's possible for your portfolio.
                  </p>
                  <Button
                    variant="default"
                    image="/saad.png"
                    onClick={() => {
                      trackEvent('cta_clicked', { location: 'about_cta', label: 'Talk through your next move' })
                      setIsModalOpen(true)
                    }}
                  >
                    Talk through your next move →
                  </Button>
                </div>
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
