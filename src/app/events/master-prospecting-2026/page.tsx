'use client'

import Image from 'next/image'
import { useState } from 'react'
import {
  Section,
  Container,
  FadeIn,
  Heading,
  Text,
  Card
} from '@/components/ui'
import { COLORS } from '@/lib/colors'
import { LeadFormModal } from '@/components/LeadFormModal'

export default function MasterProspectingEvent() {
  const [showForm, setShowForm] = useState(false)

  return (
    <>
      {/* Hero Section - Eventbrite Style */}
      <Section background="white" className="!border-0 !pt-8">
        <Container>
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
                {/* Left: Title & Info */}
                <div className="space-y-6">
                  <div>
                    <Heading size="h1">
                      Master Prospecting in <span className="text-teal-500">2026</span>
                    </Heading>
                    <Heading size="h2">
                      Door Knocking, Investor Relationships, and Social Media
                    </Heading>
                  </div>

                  {/* Quick Facts */}
                  <div className="space-y-4 border-l-4" style={{ borderColor: COLORS.primary }}>
                    <div className="pl-4">
                      <Text size="sm" className="text-slate-600 uppercase tracking-wide">Date</Text>
                      <Text className="font-semibold text-lg">Friday, January 30, 2026</Text>
                    </div>
                    <div className="pl-4">
                      <Text size="sm" className="text-slate-600 uppercase tracking-wide">Time</Text>
                      <Text className="font-semibold text-lg">12:30 PM</Text>
                    </div>
                    <div className="pl-4">
                      <Text size="sm" className="text-slate-600 uppercase tracking-wide">Location</Text>
                      <Text className="font-semibold">Albany Public Library - Pine Hills</Text>
                      <Text size="sm" className="text-slate-600">517 Western Ave, Albany, NY 12208</Text>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => setShowForm(true)}
                    className="w-full py-4 px-6 rounded-lg font-semibold text-white transition-all transform hover:scale-105 active:scale-98"
                    style={{ backgroundColor: COLORS.primary }}
                  >
                    Sign Me Up
                  </button>

                  <p className="text-center text-sm text-slate-600">
                    <strong>Free to attend</strong> • Limited to 35 realtors
                  </p>
                </div>

                {/* Right: Event Image */}
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/saadxduaneevent.jpeg"
                    alt="Master Prospecting 2026 Event"
                    width={400}
                    height={500}
                    priority
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Registration Modal */}
      <LeadFormModal
        isOpen={showForm}
        onClose={() => setShowForm(false)}
        prefillComments="I'm interested in the Master Prospecting in 2026 training on Jan 30th"
      />

      {/* Instructors Section */}
      <Section background="white" className="!border-0 !pt-8">
        <Container>
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <Card className="!shadow-md mb-12">
                <div className="p-8 md:p-10">
                  <Heading size="h3" className="mb-6">Your Instructors</Heading>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Duane */}
                    <div className="text-center">
                      <div className="mb-4 rounded overflow-hidden bg-slate-100 h-80">
                        <Image
                          src="/Duane Richins.jpg"
                          alt="Duane Richins"
                          width={300}
                          height={400}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                      <Heading size="h4" className="mb-2">Duane Richins</Heading>
                      <Text className="text-slate-600">Sold 89 homes his first year as a realtor</Text>
                    </div>

                    {/* Saad */}
                    <div className="text-center">
                      <div className="mb-4 rounded overflow-hidden bg-slate-100 h-80">
                        <Image
                          src="/saad.png"
                          alt="Saad Tai"
                          width={300}
                          height={400}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                      <Heading size="h4" className="mb-2">Saad Tai</Heading>
                      <Text className="text-slate-600">20 UC at the same time in 2025 working with investors</Text>
                    </div>
                  </div>
                </div>
              </Card>
            </FadeIn>

            {/* What You'll Learn */}
            <FadeIn delay={0.3}>
              <Card className="!shadow-md">
                <div className="p-8 md:p-10">
                  <Heading size="h3" className="mb-6">What You'll Learn</Heading>

                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-teal-500 font-bold mr-4 flex-shrink-0">✓</span>
                      <Text>Door knocking strategies that actually work</Text>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-500 font-bold mr-4 flex-shrink-0">✓</span>
                      <Text>Building genuine investor relationships</Text>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-500 font-bold mr-4 flex-shrink-0">✓</span>
                      <Text>Leveraging social media for real estate success</Text>
                    </li>
                  </ul>

                  <div className="mt-8 p-4 bg-teal-50 rounded-lg border border-teal-200">
                    <Text className="text-sm text-teal-900">
                      This 90-minute sales training will help you <strong>double your production in 2026</strong>
                    </Text>
                  </div>
                </div>
              </Card>
            </FadeIn>
          </div>
        </Container>
      </Section>
    </>
  )
}
