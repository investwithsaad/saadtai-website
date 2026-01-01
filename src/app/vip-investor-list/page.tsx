'use client'

import { Section, Container, Heading, Text, Button, FadeIn, Card, StaggerContainer, StaggerItem } from '@/components/ui'
import { CheckCircle } from 'lucide-react'
import { useState, useEffect } from 'react'
import { trackMetaPageView, trackEvent } from '@/lib/tracking'
import { LeadFormModal } from '@/components/LeadFormModal'
import { COLORS } from '@/lib/colors'

export default function VIPInvestorListPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    trackMetaPageView('vip_investor_list_page')
  }, [])

  return (
    <>
      {/* Hero Section */}
      <Section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <Container>
          <FadeIn className="max-w-3xl mx-auto text-center">
            <Heading size="h1" className="font-heading mb-4">
              VIP Investor Access
            </Heading>
            <Text size="lg" className="text-gray-700 mb-8">
              Curated 2-4 unit deals. Selective distribution. Fewer bidders.<br />Get in front of serious opportunities before the crowd.
            </Text>
            <div className="flex justify-center">
              <Button
                variant="default"
                onClick={() => {
                  trackEvent('cta_clicked', { location: 'vip_investor_list_hero', label: 'Request Access' })
                  setIsModalOpen(true)
                }}
                style={{ height: '48px' }}
              >
                Request Access →
              </Button>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* What You Receive Section */}
      <Section background="background">
        <Container>
          <FadeIn className="max-w-3xl mx-auto text-center mb-12">
            <Heading size="h2" className="font-heading mb-4">What You Receive</Heading>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <StaggerItem>
              <Card className="p-6 h-full" style={{ borderColor: COLORS.dark, borderWidth: '2px' }}>
                <div className="flex gap-3 mb-3">
                  <CheckCircle size={24} className="text-gray-900 flex-shrink-0" />
                  <Heading size="h4" className="font-heading">Early Access</Heading>
                </div>
                <Text className="text-gray-700">2-3 weeks before public listing</Text>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="p-6 h-full" style={{ borderColor: COLORS.dark, borderWidth: '2px' }}>
                <div className="flex gap-3 mb-3">
                  <CheckCircle size={24} className="text-gray-900 flex-shrink-0" />
                  <Heading size="h4" className="font-heading">Selective Distribution</Heading>
                </div>
                <Text className="text-gray-700">Limited to 50-75 serious investors</Text>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="p-6 h-full" style={{ borderColor: COLORS.dark, borderWidth: '2px' }}>
                <div className="flex gap-3 mb-3">
                  <CheckCircle size={24} className="text-gray-900 flex-shrink-0" />
                  <Heading size="h4" className="font-heading">Fewer Bidding Situations</Heading>
                </div>
                <Text className="text-gray-700">Less competition, better negotiating power</Text>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="p-6 h-full" style={{ borderColor: COLORS.dark, borderWidth: '2px' }}>
                <div className="flex gap-3 mb-3">
                  <CheckCircle size={24} className="text-gray-900 flex-shrink-0" />
                  <Heading size="h4" className="font-heading">Verified Numbers</Heading>
                </div>
                <Text className="text-gray-700">Conservative underwriting, real rent rolls</Text>
              </Card>
            </StaggerItem>
          </StaggerContainer>
          {/* CTA */}
          <div className="text-center">
            <div className="flex justify-center mt-8">
              <Button
                variant="default"
                onClick={() => {
                  trackEvent('cta_clicked', { location: 'vip_investor_list', label: 'Request Access' })
                  setIsModalOpen(true)
                }}
                style={{ height: '48px' }}
              >
                Request Access →
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Main Content Section */}
      <Section background="white">
        <Container>
          <FadeIn className="max-w-3xl mx-auto">
            {/* Why This Matters */}
            <div className="mb-16">
              <Heading size="h2" className="font-heading mb-4">Why This Gives You an Edge</Heading>
              <Text className="text-gray-700">
                While retail investors are competing with 50+ offers on listed properties, you're moving quietly on curated deals with 1-2 other serious buyers. This is where deals actually pencil.
              </Text>
            </div>

            {/* Who This Is For */}
            <div className="mb-16">
              <Heading size="h2" className="font-heading mb-4">Who This Is For</Heading>
              <Text className="text-gray-700">
                Capital-ready investors who understand cap rates, move fast on opportunities, and want to avoid auction-style bidding wars.
              </Text>
            </div>

            {/* Stats */}
            <div className="mb-16 pt-8 border-t border-gray-200 grid grid-cols-2 gap-8">
              <div>
                <p className="text-4xl font-bold" style={{ color: COLORS.dark }}>$4.1M</p>
                <p className="text-slate-600 text-sm mt-2">Volume Sold This Year</p>
              </div>
              <div>
                <p className="text-4xl font-bold" style={{ color: COLORS.dark }}>13</p>
                <p className="text-slate-600 text-sm mt-2">Days on Market Average</p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <div className="flex justify-center mt-8">
                <Button
                  variant="default"
                  onClick={() => {
                    trackEvent('cta_clicked', { location: 'vip_investor_list', label: 'Request Access' })
                    setIsModalOpen(true)
                  }}
                  style={{ height: '48px' }}
                >
                  Request Access →
                </Button>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Lead Form Modal */}
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} prefillComments="I want to be on the VIP list" />
    </>
  )
}
