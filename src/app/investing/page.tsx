import { ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'
import {
  Section,
  Container,
  Heading,
  Text,
  Card,
  StaggerContainer,
  Button,
  FadeIn
} from '@/components/ui'
import { HeroStatic } from '@/components/hero-static'
import { Breadcrumb } from '@/components/breadcrumb'
import { SchemaRenderer } from '@/components/SchemaRenderer'
import { EventBanner } from '@/components/EventBanner'
import { getInvestingGuides } from '@/lib/investing-guides-utils'
import Link from 'next/link'
import { createPageMetadata } from '@/lib/metadata-factory'
import { BASE_URL } from '@/lib/metadata-factory'

export function generateMetadata(): Metadata {
  return createPageMetadata({
    title: 'Investment Guides for Multifamily Real Estate Investors | Saad Tai',
    description: 'Investment guides covering multifamily basics, cap rates, and market-specific guides for Albany, Schenectady, Troy NY, Jacksonville FL, and Kissimmee FL.',
    path: '/investing',
    ogImage: '/saad.png',
  })
}

export default function InvestmentPage() {
  const guides = getInvestingGuides()
  const sortedGuides = [...guides].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  // Separate guides by type
  const coreGuides = sortedGuides.filter(g => ['multifamily-investment-guide', 'cap-rate-guide', 'best-multifamily-markets-2026'].includes(g.id))
  const locationGuides = sortedGuides.filter(g => ['albany-multifamily-investing', 'schenectady-multifamily-investing', 'troy-multifamily-investing', 'jacksonville-multifamily-investing', 'kissimmee-multifamily-investment-guide'].includes(g.id))
  const howToGuides = sortedGuides.filter(g => ['1031-exchange-multifamily-strategy', 'evaluate-multifamily-deals-capital-region', 'cap-rate-vs-cash-flow', 'first-time-homebuyer', 'negative-cash-flow-warning-signs'].includes(g.id))

  // Collection schema
  const guideCollectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Multifamily Investment Guides",
    "description": "Complete guides for multifamily real estate investing covering fundamentals, market analysis, cap rates, and location-specific investment opportunities.",
    "url": `${BASE_URL}/investing`,
    "mainEntity": sortedGuides.map(guide => ({
      "@type": "Guide",
      "name": guide.title,
      "description": guide.excerpt,
      "url": `${BASE_URL}/investing/${guide.id}`,
      "author": {
        "@type": "Person",
        "name": guide.author || 'Saad Tai'
      }
    }))
  }

  return (
    <>
      {/* Schema Markup */}
      <SchemaRenderer schemas={[guideCollectionSchema]} />

      {/* Breadcrumb - includes schema */}
      <Breadcrumb items={[{ label: 'Investing' }]} />

      <EventBanner />

      {/* Hero Section */}
      <HeroStatic
        title="Master Multifamily Investing"
        subtitle="Complete guides covering fundamentals, market analysis, cap rates, and location-specific opportunities in Capital Region NY, Jacksonville FL, and Kissimmee FL."
      />

      {/* Core Guides Section */}
      {coreGuides.length > 0 && (
        <Section background="white">
          <Container>
            <FadeIn>
              <div className="max-w-3xl mx-auto text-center mb-12">
                <Heading size="h2">Core Investment Framework</Heading>
                <Text size="lg" className="text-gray-700">
                  Start here to understand the fundamentals of multifamily investing.
                </Text>
              </div>
            </FadeIn>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {coreGuides.map((guide) => (
                <Link key={guide.id} href={`/investing/${guide.id}`}>
                  <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 cursor-pointer group">
                    <span className="inline-block mb-3 px-3 py-1 bg-gold-100 text-gold-700 text-xs font-semibold rounded-full">
                      Fundamentals
                    </span>
                    <Heading size="h4" className="mb-2 text-olive-900 group-hover:text-gold-500 transition-colors">
                      {guide.title}
                    </Heading>
                    <Text className="text-gray-700 mb-4 text-sm leading-relaxed">
                      {guide.excerpt}
                    </Text>
                    <Button variant="default" className="p-0 flex items-center gap-2 w-fit">
                      Read Guide <ArrowRight size={16} />
                    </Button>
                  </Card>
                </Link>
              ))}
            </StaggerContainer>
          </Container>
        </Section>
      )}

      {/* Location Guides Section */}
      {locationGuides.length > 0 && (
        <Section background="background">
          <Container>
            <FadeIn>
              <div className="max-w-3xl mx-auto text-center mb-12">
                <Heading size="h2">Market-Specific Guides</Heading>
                <Text size="lg" className="text-gray-700">
                  Deep dives into Albany, Schenectady, Troy, Jacksonville, and Kissimmee markets with specific data and investment frameworks.
                </Text>
              </div>
            </FadeIn>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {locationGuides.map((guide) => (
                <Link key={guide.id} href={`/investing/${guide.id}`}>
                  <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 cursor-pointer group">
                    <span className="inline-block mb-3 px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                      Market Guide
                    </span>
                    <Heading size="h4" className="mb-2 text-olive-900 group-hover:text-gold-500 transition-colors">
                      {guide.title}
                    </Heading>
                    <Text className="text-gray-700 mb-4 text-sm leading-relaxed">
                      {guide.excerpt}
                    </Text>
                    <Button variant="default" className="p-0 flex items-center gap-2 w-fit">
                      Explore Market <ArrowRight size={16} />
                    </Button>
                  </Card>
                </Link>
              ))}
            </StaggerContainer>
          </Container>
        </Section>
      )}

      {/* How-To Guides Section */}
      {howToGuides.length > 0 && (
        <Section background="white">
          <Container>
            <FadeIn>
              <div className="max-w-3xl mx-auto text-center mb-12">
                <Heading size="h2">Step-by-Step How-To Guides</Heading>
                <Text size="lg" className="text-gray-700">
                  Actionable playbooks for deal analysis, financing, tax strategies, and portfolio building.
                </Text>
              </div>
            </FadeIn>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {howToGuides.map((guide) => (
                <Link key={guide.id} href={`/investing/${guide.id}`}>
                  <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 cursor-pointer group">
                    <span className="inline-block mb-3 px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                      How-To
                    </span>
                    <Heading size="h4" className="mb-2 text-olive-900 group-hover:text-gold-500 transition-colors">
                      {guide.title}
                    </Heading>
                    <Text className="text-gray-700 mb-4 text-sm leading-relaxed">
                      {guide.excerpt}
                    </Text>
                    <Button variant="default" className="p-0 flex items-center gap-2 w-fit">
                      View Guide <ArrowRight size={16} />
                    </Button>
                  </Card>
                </Link>
              ))}
            </StaggerContainer>
          </Container>
        </Section>
      )}

      {/* FAQ Links Section */}
      <Section background="background">
        <Container>
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <Heading size="h2">Quick Reference FAQs</Heading>
              <Text size="lg" className="text-gray-700">
                Fast answers to common investor questions organized by topic. Browse all FAQs or explore specific areas below.
              </Text>
            </div>
          </FadeIn>
          <div className="text-center mb-12">
            <Link href="/faq">
              <Button variant="default" className="inline-flex items-center gap-2">
                View All FAQs <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link href="/faq#first-time-investor">
              <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <Heading size="h4" className="mb-2 text-olive-900 group-hover:text-gold-500 transition-colors">
                  First-Time Investor FAQs
                </Heading>
                <Text className="text-gray-700 mb-4 text-sm">
                  Essential concepts and first steps for new multifamily investors.
                </Text>
                <Button variant="default" className="p-0 flex items-center gap-2 w-fit">
                  View FAQs <ArrowRight size={16} />
                </Button>
              </Card>
            </Link>
            <Link href="/faq#financial-fundamentals">
              <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <Heading size="h4" className="mb-2 text-olive-900 group-hover:text-gold-500 transition-colors">
                  Financial Fundamentals FAQs
                </Heading>
                <Text className="text-gray-700 mb-4 text-sm">
                  Master cap rates, cash flow, and deal analysis metrics.
                </Text>
                <Button variant="default" className="p-0 flex items-center gap-2 w-fit">
                  View FAQs <ArrowRight size={16} />
                </Button>
              </Card>
            </Link>
            <Link href="/faq#capital-region-market">
              <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <Heading size="h4" className="mb-2 text-olive-900 group-hover:text-gold-500 transition-colors">
                  Capital Region Market FAQs
                </Heading>
                <Text className="text-gray-700 mb-4 text-sm">
                  Local market insights for Albany, Schenectady, and Troy.
                </Text>
                <Button variant="default" className="p-0 flex items-center gap-2 w-fit">
                  View FAQs <ArrowRight size={16} />
                </Button>
              </Card>
            </Link>
          </StaggerContainer>
        </Container>
      </Section>
    </>
  )
}
