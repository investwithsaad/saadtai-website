'use client'

import {
  ChevronRight
} from 'lucide-react'
import Image from 'next/image'
import {
  Section,
  Container,
  Heading,
  Text,
  Button,
  Card,
  FadeIn,
  StaggerContainer
} from '@/components/ui'
import { FeatureList } from '@/components/FeatureList'
import { LAYOUT } from '@/lib/layout'
import { HeroFadeIn } from '@/components/hero-fade-in'
import { CTA } from '@/components/cta'
import { fundingSolutions } from '@/data/solutions'
import { CALENDLY_CONFIG, buildCalendlyUrl } from '@/config/calendly'
import Link from 'next/link'
import { getTitleAsString } from '@/lib/solution-helpers'

export function SolutionsClient() {
  return (
    <>
      {/* Hero Section */}
      <HeroFadeIn
        title={<>Real Estate Solutions<br />for Every Goal</>}
        subtitle={<>Expert guidance on home selling, buying, and valuation. <br />Serving Albany & Schenectady with 10+ years of experience.</>}
      />

      {/* Solutions Overview with CTA */}
      <Section background="white" className="py-16">
        <Container>
          <FadeIn>
            <Heading size="h2" className='text-center'>
              Our Real Estate Solutions
            </Heading>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {fundingSolutions.map((solution, index) => (
                <Link
                  key={solution.id}
                  href={`/solutions/${solution.id}`}
                  className="group cursor-pointer block h-full"
                >
                  <Card color='background' className="p-8 h-full hover:shadow-lg transition-all duration-300">
                    <Heading size="h3" color='primary' className="mb-3 group-hover:text-gold-500 transition-colors">
                      {solution.title}
                    </Heading>
                    {/* Description */}
                    <Text color='dark' className="text-sm leading-relaxed">
                      {solution.description}
                    </Text>
                  </Card>
                </Link>
              ))}
            </StaggerContainer>
          </FadeIn>
        </Container>
      </Section>

      {/* Why Choose Saad Tai Section */}
      <Section background="background">
        <Container>
          <FadeIn className="text-center mb-12">
            <Heading size="h2">
              Why Choose <span className="text-gold-500">Saad Tai?</span>
            </Heading>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="p-8 h-full">
              <Heading size="h4" className="mb-4 text-olive-900">
                Tailored Solutions
              </Heading>
              <Text className="text-gray-700">
                Every business is unique. Our funding options are customized to your specific needs.
              </Text>
            </Card>

            <Card className="p-8 h-full">
              <Heading size="h4" className="mb-4 text-olive-900">
                Expert Guidance
              </Heading>
              <Text className="text-gray-700">
                Our team has years of experience in structuring financing that drives growth.
              </Text>
            </Card>

            <Card className="p-8 h-full">
              <Heading size="h4" className="mb-4 text-olive-900">
                Flexible Terms
              </Heading>
              <Text className="text-gray-700">
                We offer flexible terms that adapt as your business evolves.
              </Text>
            </Card>
          </StaggerContainer>

          <FadeIn className="text-center">
            <Text size="lg" className="mb-6 text-gray-700">
              Ready to find the perfect home or get a valuation? Saad is ready to guide you through every step.
            </Text>
            <a href={buildCalendlyUrl(CALENDLY_CONFIG.discovery)} target="_blank" rel="noopener noreferrer">
              <Button variant="secondary">Schedule a Call</Button>
            </a>
          </FadeIn>
        </Container>
      </Section>

      {/* Detailed Solutions Section */}
      <Section background="white" className="py-20">
        <Container>
          <StaggerContainer className="space-y-24">
            {fundingSolutions.map((solution, index) => (
              <div key={solution.id} id={solution.id} style={{ scrollMarginTop: LAYOUT.scrollMarginTop }} className={`flex flex-col lg:flex-row gap-12 w-full lg:items-stretch ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Text Content */}
                <div className={`lg:flex-[0.6] ${index % 2 === 1 ? 'lg:[direction:ltr]' : ''}`}>
                  <Heading size="h2" className="mb-6 text-olive-900">
                    <span className="text-olive-900">{solution.title}</span>
                  </Heading>
                  <Text className="text-gray-700 mb-6 leading-relaxed text-lg">
                    {solution.longDescription || solution.description}
                  </Text>

                  {solution.features && solution.features.length > 0 && (
                    <div className="mb-8">
                      <FeatureList features={solution.features} />
                    </div>
                  )}

                  {/* Learn More Link to Detail Page */}
                  <Link href={`/solutions/${solution.id}`}>
                    <Button variant="default">
                      Learn More <ChevronRight size={18} />
                    </Button>
                  </Link>
                </div>

                {/* Image Content - Disabled for real estate */}
                {/* TODO: Add hero images for real estate services */}
              </div>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      {/* Final CTA */}
      <CTA
        title="Ready to Take the Next Step?"
        text="Schedule a consultation with Saad to discuss your real estate goals—whether buying, selling, or valuation—and find the perfect solution for your needs."
        buttonText="Schedule a Call"
        href={buildCalendlyUrl(CALENDLY_CONFIG.discovery)}
        useBG
      />
    </>
  )
}
