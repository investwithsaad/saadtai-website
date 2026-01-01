'use client'

import { CheckCircle, TrendingUp, Users, Target, Home as HomeIcon, MapPin, Facebook, Instagram, ArrowRight } from 'lucide-react'
import { useState } from 'react'
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
import { COLORS } from '@/lib/colors'
import { LeadFormModal } from '@/components/LeadFormModal'
import { trackEvent } from '@/lib/tracking'
import { useScrollTracking } from '@/hooks/useScrollTracking'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

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

  const testimonials = [
    {
      text: "What makes Saad such an amazing person is his ability to listen and make you feel like you're the most important person in the room. It's not what he says, but more about his follow through that lets you know he heard every word. If you are working with him you have made a wonderful choice.",
      author: "Michael Downton",
      tag: "Client"
    },
    {
      text: "I had an excellent experience working with Saad Tai as my real estate agent. From start to finish, he was professional, knowledgeable, and always available to answer my questions. He made the entire buying/selling process smooth and stress-free with his expertise and dedication. If you're looking for a reliable and hardworking agent who truly cares about his clients, I highly recommend Saad Tai!",
      author: "Nicholas Totaram",
      tag: "Buyer & Investor"
    },
    {
      text: "I've worked with Saad for almost 2 years now. He's one of the most professionally realtors out there. He's also very hard working and creative. Most realtors sit back and wait for deals to come or wait for their listings to sell. In my experience, Saad hasn't been that way. He's a hunter. And to me, that's hard to find. Highly recommend using Saad as your realtor.",
      author: "Jeremy Davis",
      tag: "Real Estate Investor"
    },
    {
      text: "Saad is a fantastic agent to work with! Always has a positive attitude and one of the hardest working agents I know. If I'm investing in New York, I'm calling Saad!",
      author: "Emilio Fonseca",
      tag: "Investor/Developer"
    },
    {
      text: "As a first time home seller, I was pretty clueless and nervous about the whole process! Saad explained everything and was very patient and always quick to respond to any of my questions (and I had ALOT of questions!)... Great realtor and a great guy!!!",
      author: "Christine DeGennaro",
      tag: "First-Time Seller"
    },
    {
      text: "Saad is the best real estate agent that I ever had. He is very pleasant, very responsive, very reliable, very knowledgeable, and makes things so much easier and will not give up no matter what the circumstance is. The best feature I liked about him is that he makes you feel very comfortable and makes things so much easy. I was able to txt and call him at anytime and he is always fast at responding. God bless you Saad. I am looking forward to do more and more business with him.",
      author: "Musa Naji",
      tag: "Homeowner"
    }
  ]
  return (
    <>
      {/* Hero Section */}
      <div ref={heroRef} className="relative h-auto flex items-center justify-center pt-12 pb-16 md:pt-16 md:pb-20 overflow-hidden">
        <Image
          src="/Home image.webp"
          alt="Home Background"
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
              <Heading size="h1" color='white'>
                Scale Smarter. Exit Cleaner. <br />
                Maximize <i>Your</i> Earnings.
              </Heading>
              <Text size="lg" className="text-white/90 mb-12 leading-relaxed">
                Helping multifamily investors make better buying, selling, and exit decisions<br />through timing, strategy, and disciplined execution.
              </Text>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button
                  variant="default"
                  image="/saad.png"
                  onClick={() => {
                    trackEvent('cta_clicked', { location: 'hero', label: 'Schedule an Investor Strategy Call' })
                    setIsModalOpen(true)
                  }}
                >
                  Schedule an Investor Strategy Call →
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* The Problem Section */}
      <Section background='dark' className='!pt-0'>
        <Container>
          <div ref={problemRef} className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="text-center mb-12">
                <Heading size="h2" color='white' className='!mt-6'>
                  Are you Buying or Selling?
                </Heading>
                <Text size="lg" color='white'>
                  Most investors are leaving money on the table because they're doing this alone.<br />I help you make the move with confidence—and maximize the outcome.
                </Text>
              </div>
            </FadeIn>
          </div>
          <div ref={whatIDoRef}>
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Buying Section */}
              <FadeIn>
                <Card className="!overflow-hidden !shadow-none !rounded-none !bg-white !p-0 hover:!translate-y-0 h-full flex flex-col" style={{ borderColor: COLORS.dark, borderWidth: '2px' }}>
                  <div className="w-full h-64 bg-slate-200 overflow-hidden">
                    <Image
                      src="/house3.webp"
                      alt="Find Your Home"
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                      quality={75}
                      loading="lazy"
                    />
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <Heading size="h3" className="!mb-4">Buying Your Next Asset</Heading>
                    <p className="text-slate-600 mb-6 flex-grow">
                      Off-market deals, real investor comps, and honest underwriting. I help you avoid overpaying and find the deals that actually pencil.
                    </p>
                    <Link href="/buying" className="inline-block">
                      <Button variant="default" className="w-full">
                        Explore Buying <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              </FadeIn>

              {/* Selling Section */}
              <FadeIn delay={0.2}>
                <Card className="!overflow-hidden !shadow-none !rounded-none !bg-white !p-0 hover:!translate-y-0 h-full flex flex-col" style={{ borderColor: COLORS.dark, borderWidth: '2px' }}>
                  <div className="w-full h-64 bg-slate-200 overflow-hidden">
                    <Image
                      src="/house4.webp"
                      alt="Sell Your Home"
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                      quality={75}
                      loading="lazy"
                    />
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <Heading size="h3" className="!mb-4">Selling Your Investment</Heading>
                    <p className="text-slate-600 mb-6 flex-grow">
                      Right time, right buyer, right price. I connect you with serious investors and help you maximize proceeds from your portfolio.
                    </p>
                    <Link href="/selling" className="inline-block">
                      <Button variant="default" className="w-full">
                        Explore Selling <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              </FadeIn>
            </div>
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

            <FadeIn className="mt-16">
              <div className="flex justify-center">
                <Button
                  variant="default"
                  image="/saad.png"
                  onClick={() => {
                    trackEvent('cta_clicked', { location: 'proof_results', label: 'Let\'s Talk' })
                    setIsModalOpen(true)
                  }}
                >
                  Let's Talk →
                </Button>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Testimonials Section */}
      <Section background='background'>
        <Container>
          <div ref={testimonialsRef}>
            <FadeIn>
              <div className="max-w-3xl mx-auto text-center mb-16">
                <Heading size="h2">
                  What My Clients Say
                </Heading>
                <Text className="text-lg text-slate-600">
                  From investors who've achieved their goals
                </Text>
              </div>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, i) => (
                <Card key={i} className="!overflow-hidden !shadow-none !rounded-none !bg-white !p-0 hover:!translate-y-0" style={{ borderColor: COLORS.dark, borderWidth: '2px' }}>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-start gap-1">
                        {[...Array(5)].map((_, idx) => (
                          <span key={idx} className="text-yellow-400 text-lg">★</span>
                        ))}
                      </div>
                      {testimonial.tag && (
                        <span className="text-xs font-bold px-2 py-1 rounded" style={{ backgroundColor: COLORS.secondary, color: 'white' }}>
                          {testimonial.tag}
                        </span>
                      )}
                    </div>
                    <p className="text-slate-700 mb-4 italic">
                      "{testimonial.text}"
                    </p>
                    <p className="font-semibold text-slate-900">
                      — {testimonial.author}
                    </p>
                  </div>
                </Card>
              ))}
            </StaggerContainer>

            <FadeIn className="mt-16">
              <div className="max-w-3xl mx-auto">
                <div className="p-6 rounded-lg mb-8" style={{ backgroundColor: COLORS.background }}>
                  <p className="text-slate-700">
                    <span className="font-semibold text-slate-900">These aren't cherry-picked reviews.</span> These are real investors—scaling, selling, buying, and exiting. Some are first-timers, some manage portfolios. All have the same feedback: responsiveness, strategy, and actual follow-through.
                  </p>
                </div>

                <div className="flex justify-center">
                  <Button
                    variant="default"
                    image="/saad.png"
                    onClick={() => {
                      trackEvent('cta_clicked', { location: 'testimonials', label: 'Let\'s Talk' })
                      setIsModalOpen(true)
                    }}
                  >
                    Let's Talk →
                  </Button>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Who I Work With */}
      <Section background="white">
        <Container>
          <div ref={whoIWorkWithRef}>
            <FadeIn>
              <div className="max-w-3xl text-center mx-auto mb-16">
                <Heading size="h2">
                  Three Types of Investors. One Goal: Smart Moves.
                </Heading>
              </div>
            </FadeIn>

            <StaggerContainer className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <FadeIn>
                <Card className="!overflow-hidden !shadow-none !rounded-none !bg-white !p-0 hover:!translate-y-0 h-full" style={{ borderColor: COLORS.dark, borderWidth: '2px' }}>
                  <div className="p-6 flex flex-col h-full">
                    <Heading size="h3" className="mb-2">The Scaling Investor</Heading>
                    <p className="text-slate-600 text-sm font-semibold mb-4" style={{ color: COLORS.secondary }}>Own 5-10+ units, actively buying/selling</p>
                    <p className="text-slate-700 mb-6 flex-grow">
                      You're growing your portfolio but the admin is drowning you. You need someone who understands cap rates, timing, and 1031 exchanges—not retail real estate nonsense.
                    </p>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li className="flex gap-2">
                        <span className="text-brand-secondary">→</span>
                        <span>Coordinate multiple sales and acquisitions</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-brand-secondary">→</span>
                        <span>Time exits for maximum returns</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-brand-secondary">→</span>
                        <span>Find deals that pencil</span>
                      </li>
                    </ul>
                  </div>
                </Card>
              </FadeIn>

              <FadeIn delay={0.1}>
                <Card className="!overflow-hidden !shadow-none !rounded-none !bg-white !p-0 hover:!translate-y-0 h-full" style={{ borderColor: COLORS.dark, borderWidth: '2px' }}>
                  <div className="p-6 flex flex-col h-full">
                    <Heading size="h3" className="mb-2">The Accidental Owner</Heading>
                    <p className="text-slate-600 text-sm font-semibold mb-4" style={{ color: COLORS.secondary }}>Inherited/accumulated 2-6 units, tired</p>
                    <p className="text-slate-700 mb-6 flex-grow">
                      You're burned out. Whether you inherited these properties or they just piled up over time, you want out—but you also care about doing right by the families living there.
                    </p>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li className="flex gap-2">
                        <span className="text-brand-secondary">→</span>
                        <span>Unwind with respect and clarity</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-brand-secondary">→</span>
                        <span>Maximize proceeds on your terms</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-brand-secondary">→</span>
                        <span>Fair tenant transitions</span>
                      </li>
                    </ul>
                  </div>
                </Card>
              </FadeIn>

              <FadeIn delay={0.2}>
                <Card className="!overflow-hidden !shadow-none !rounded-none !bg-white !p-0 hover:!translate-y-0 h-full" style={{ borderColor: COLORS.dark, borderWidth: '2px' }}>
                  <div className="p-6 flex flex-col h-full">
                    <Heading size="h3" className="mb-2">The Capital Recycler</Heading>
                    <p className="text-slate-600 text-sm font-semibold mb-4" style={{ color: COLORS.secondary }}>Selling multiple properties, redeploying</p>
                    <p className="text-slate-700 mb-6 flex-grow">
                      You're moving capital strategically. Maybe exiting one market, upgrading into larger buildings, or repositioning your entire portfolio. You need precision timing.
                    </p>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li className="flex gap-2">
                        <span className="text-brand-secondary">→</span>
                        <span>1031 exchange coordination</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-brand-secondary">→</span>
                        <span>Multi-property portfolio strategy</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-brand-secondary">→</span>
                        <span>Market timing and buyer alignment</span>
                      </li>
                    </ul>
                  </div>
                </Card>
              </FadeIn>
            </StaggerContainer>

            <FadeIn className="mt-12">
              <div className="flex justify-center">
                <Button
                  variant="secondary"
                  onClick={() => {
                    trackEvent('cta_clicked', { location: 'investor_type', label: 'Let\'s Talk' })
                    setIsModalOpen(true)
                  }}
                >
                  Let's Talk →
                </Button>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Strategic Advantages */}
      <Section background="background">
        <Container>
          <div ref={howIWorkRef}>
            <FadeIn>
              <div className="max-w-3xl text-center mx-auto mb-16">
              <Heading size="h2">
                Your Strategic Advantage: Time, Intelligence, Network
              </Heading>
              <Text size="lg" className="text-slate-600 mt-4">
                I leverage a team so deals don't stall, deadlines aren't missed, and investors can move capital without disruption.
              </Text>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="mb-16">
            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
              <Card className="!overflow-hidden !shadow-none !rounded-none !bg-white !p-0 hover:!translate-y-0" style={{ borderColor: COLORS.dark, borderWidth: '2px' }}>
                <div className="p-6">
                  <TrendingUp className="w-8 h-8 text-brand-secondary mb-4" />
                  <Heading size="h4" className="mb-3">More Deals, Less Admin</Heading>
                  <p className="text-slate-600">
                    My team handles showings, paperwork, and closing logistics—so I'm free to source deals and negotiate on your behalf.
                  </p>
                </div>
              </Card>
              <Card className="!overflow-hidden !shadow-none !rounded-none !bg-white !p-0 hover:!translate-y-0" style={{ borderColor: COLORS.dark, borderWidth: '2px' }}>
                <div className="p-6">
                  <Target className="w-8 h-8 text-brand-secondary mb-4" />
                  <Heading size="h4" className="mb-3">Early Access & Real Comps</Heading>
                  <p className="text-slate-600">
                    Off-market deal flow before it hits the MLS, with verified rent rolls and honest underwriting so you avoid overpaying.
                  </p>
                </div>
              </Card>
              <Card className="!overflow-hidden !shadow-none !rounded-none !bg-white !p-0 hover:!translate-y-0" style={{ borderColor: COLORS.dark, borderWidth: '2px' }}>
                <div className="p-6">
                  <Users className="w-8 h-8 text-brand-secondary mb-4" />
                  <Heading size="h4" className="mb-3">Investor Network & Resources</Heading>
                  <p className="text-slate-600">
                    Connected to vetted lenders, property managers, contractors, attorneys—you're not just buying a property, you're building an ecosystem.
                  </p>
                </div>
              </Card>
            </div>
          </FadeIn>

          <FadeIn className="mt-12">
            <div className="flex flex-col items-center">
              <p className="text-slate-600 mb-6">
                Sounds like the kind of partnership you're looking for?
              </p>
              <Button
                variant="secondary"
                onClick={() => {
                  trackEvent('cta_clicked', { location: 'strategic_advantage', label: 'Let\'s Talk' })
                  setIsModalOpen(true)
                }}
              >
                Let's Talk →
              </Button>
            </div>
          </FadeIn>
          </div>
        </Container>
      </Section>

      {/* What You Get */}
      <Section background="white">
        <Container>
          <div ref={whatYouGetRef}>
            <FadeIn>
              <div className="max-w-3xl mx-auto">
              <Heading size="h2">
                Here's Exactly What Happens Next
              </Heading>
              <Text size="lg" className="text-slate-600 mb-12">
                No surprises. No pressure. Just straight steps to clarity on your move.
              </Text>

              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full text-black font-bold flex-shrink-0" style={{ backgroundColor: COLORS.secondary }}>
                      1
                    </div>
                    <Button
                      variant="default"
                      onClick={() => {
                        trackEvent('cta_clicked', { location: 'what_you_get', label: 'Fill out the quick form' })
                        setIsModalOpen(true)
                      }}
                    >
                      Fill out the form
                    </Button>
                  </div>
                </div>

                <div>
                  <div className="flex items-start gap-4 mb-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full text-black font-bold flex-shrink-0" style={{ backgroundColor: COLORS.secondary }}>
                      2
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">I call you within 24 hours</h3>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-start gap-4 mb-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full text-black font-bold flex-shrink-0" style={{ backgroundColor: COLORS.secondary }}>
                      3
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">I give you my honest assessment</h3>
                      <p className="text-slate-600 mt-2">In that call, you'll get clarity on:</p>
                    </div>
                  </div>
                  <ul className="ml-12 space-y-2 text-slate-600">
                    <li className="flex gap-2">
                      <span className="text-brand-secondary font-bold">→</span>
                      <span>Whether NOW is the right time for your move (or if you should wait)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-brand-secondary font-bold">→</span>
                      <span>What comparable properties actually closed for (not wishful thinking)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-brand-secondary font-bold">→</span>
                      <span>Exactly what your next steps are if you decide to move</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full text-black font-bold flex-shrink-0" style={{ backgroundColor: COLORS.secondary }}>
                      4
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">If you're ready, I'll take care of the rest</h3>
                      <p className="text-slate-600 mt-2">
                        Showings, inspections, negotiations, closing logistics. My team manages the details so you focus on the strategy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 rounded-lg" style={{ backgroundColor: COLORS.background }}>
                <p className="text-slate-900 font-semibold text-lg mb-2">
                  The Bottom Line
                </p>
                <p className="text-slate-700 mb-3">
                  This call exists to answer ONE question: <strong>Does it make sense for you to move right now, and if so, what's the best way to do it?</strong>
                </p>
                <p className="text-slate-600 text-sm">
                  I make money when deals close. That means I only recommend moves that actually work for you. No pressure. No pitch. Just strategy.
                </p>
              </div>

              <div className="mt-12 flex justify-center">
                <Button
                  variant="default"
                  image="/saad.png"
                  onClick={() => {
                    trackEvent('cta_clicked', { location: 'what_you_get', label: 'Let\'s Get Started' })
                    setIsModalOpen(true)
                  }}
                >
                  Let's Get Started →
                </Button>
              </div>
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
                    className="w-full rounded-lg mb-6 object-cover"
                  />
                  <Heading size="h3">SAAD TAI</Heading>
                  <p className="text-slate-600 mb-6">
                    REALTOR®<br />
                    LIC. #10401373295
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
                    <span className="font-semibold text-slate-900">Licensed REALTOR®</span> serving the Capital region. I'm a portfolio-focused advisor—not just a transaction agent. I work with small multifamily investors who are buying, selling, or trading multiple properties.
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
                    onClick={() => {
                      trackEvent('cta_clicked', { location: 'about_me', label: 'Let\'s Connect' })
                      setIsModalOpen(true)
                    }}
                  >
                    Let's Connect →
                  </Button>
                </div>
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
