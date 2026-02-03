'use client'

import { ArrowRight, Bookmark } from 'lucide-react'
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
import Link from 'next/link'
import { COLORS } from '@/lib/colors'

interface Guide {
  id: string
  title: string
  category: string
  excerpt: string
}

interface HowToGuidesSectionProps {
  guidesByCategory: Array<{
    category: string
    guides: Guide[]
  }>
}

export function HowToGuidesSection({ guidesByCategory }: HowToGuidesSectionProps) {
  return (
    <>
      {guidesByCategory.map((section) => (
        <div key={section.category}>
          <Section background={section.category === 'Buying' ? 'white' : 'background'}>
            <Container>
              <FadeIn>
                <div className="mb-12">
                  <Heading size="h2" className="mb-2">
                    {section.category}
                  </Heading>
                  <div className="h-1 w-20" style={{ backgroundColor: COLORS.secondary }}></div>
                </div>
              </FadeIn>

              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {section.guides.map((guide) => (
                  <Link key={guide.id} href={`/investing/${guide.id}`}>
                    <Card className="p-8 h-full flex flex-col hover:shadow-lg transition-all duration-300 cursor-pointer group">
                      <div className="flex items-center gap-2 mb-4">
                        <Bookmark size={16} style={{ color: COLORS.secondary }} />
                        <span className="text-sm font-semibold text-olive-900">
                          {guide.category}
                        </span>
                      </div>

                      <Heading size="h3" className="mb-3 text-olive-900 group-hover:text-gold-500 transition-colors">
                        {guide.title}
                      </Heading>

                      <Text className="text-gray-700 mb-6 flex-1 leading-relaxed">
                        {guide.excerpt}
                      </Text>

                      <Button variant="default" className="p-0 flex items-center gap-2 w-fit">
                        Start Guide <ArrowRight size={16} />
                      </Button>
                    </Card>
                  </Link>
                ))}
              </StaggerContainer>
            </Container>
          </Section>
        </div>
      ))}
    </>
  )
}
