'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Section, Container, Heading, Text, Button, FadeIn, Card, StaggerContainer, StaggerItem } from '@/components/ui'
import { LeadFormModal } from '@/components/LeadFormModal'
import { EventBanner } from '@/components/EventBanner'
import { HeroFadeIn } from '@/components/hero-fade-in'

interface ListingImage {
  asset?: {
    url?: string
  }
}

interface Listing {
  id: string
  address: string
  city: string
  state: string
  zip: string
  bedrooms?: number
  bathrooms?: number
  squareFeet?: number
  propertyType: string
  features: string[]
  description: string
  status: string
  image?: ListingImage
}

interface ListingsContentProps {
  listings: Listing[]
  hero?: any
}

export function ListingsContent({ listings, hero }: ListingsContentProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedAddress, setSelectedAddress] = useState<string>('')

  // Defaults from Sanity or fallback
  const heroHeadline = hero?.headline || 'Available Listings'
  const heroDescription = hero?.description || 'Browse curated multifamily investment properties across the Capital Region.'

  const handleInquiry = (address: string) => {
    setSelectedAddress(address)
    setIsModalOpen(true)
  }

  return (
    <>
      <EventBanner />
      {/* Hero Section */}
      <HeroFadeIn
        title={heroHeadline}
        subtitle={heroDescription}
      />

      {/* Listings Grid */}
      <Section background="white">
        <Container>
          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {listings.map((listing) => (
                <StaggerItem key={listing.id}>
                  <Card className="flex flex-col h-full overflow-hidden">
                    {listing.image?.asset?.url && (
                      <div className="relative w-full h-48 bg-gray-200 mb-4">
                        <Image
                          src={listing.image.asset.url}
                          alt={listing.address}
                          fill
                          className="object-cover"
                          quality={75}
                        />
                      </div>
                    )}
                    <div className="px-4 pt-4 pb-0">
                      <div className="mb-4 flex items-start justify-between gap-4">
                      <div>
                        <Heading size="h3" className="font-heading mb-2">
                          {listing.address}
                        </Heading>
                        <Text className="text-gray-600 mb-4">
                          {listing.city}, {listing.state} {listing.zip}
                        </Text>
                      </div>
                      <div className="flex-shrink-0">
                        <span className={`inline-block px-3 py-1 rounded text-xs font-semibold whitespace-nowrap ${
                          listing.status === 'under-contract' ? 'bg-yellow-100 text-yellow-800' :
                          listing.status === 'sold' ? 'bg-gray-100 text-gray-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {listing.status === 'under-contract' ? 'Pending' :
                           listing.status === 'sold' ? 'Sold' :
                           'Active'}
                        </span>
                      </div>
                    </div>

                    <div className="mb-4 pb-4 border-b border-gray-200">
                      <div className="flex flex-wrap gap-4 text-sm">
                        {listing.bedrooms && (
                          <div>
                            <Text className="text-gray-600">Bedrooms</Text>
                            <Text className="font-semibold">{listing.bedrooms}</Text>
                          </div>
                        )}
                        {listing.bathrooms && (
                          <div>
                            <Text className="text-gray-600">Bathrooms</Text>
                            <Text className="font-semibold">{listing.bathrooms}</Text>
                          </div>
                        )}
                        {listing.squareFeet && (
                          <div>
                            <Text className="text-gray-600">Sq Ft</Text>
                            <Text className="font-semibold">{listing.squareFeet.toLocaleString()}</Text>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="mb-4">
                      <Text className="text-sm text-gray-600 mb-2">
                        <span className="font-semibold">{listing.propertyType}</span>
                      </Text>
                      <Text className="text-gray-700 text-sm mb-3">
                        {listing.description}
                      </Text>
                      {listing.features.length > 0 && (
                        <ul className="text-sm text-gray-600 space-y-1">
                          {listing.features.map((feature) => (
                            <li key={feature} className="flex items-start">
                              <span className="mr-2">•</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    <div className="mt-auto pt-4">
                      <Button
                        variant="default"
                        className="w-full"
                        onClick={() => handleInquiry(`${listing.address}, ${listing.city}, ${listing.state} ${listing.zip}`)}
                      >
                        Inquire About This Property
                      </Button>
                    </div>
                    </div>
                  </Card>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>

          <div className="mt-16 text-center flex flex-col items-center">
            <Heading size="h2" className="font-heading mb-4">
              Can't Find What You're Looking For?
            </Heading>
            <Text className="text-gray-700 mb-8">
              Let us help you find the perfect home. Our team can assist with properties not listed here.
            </Text>
            <Button
              variant="default"
              onClick={() => {
                setSelectedAddress('')
                setIsModalOpen(true)
              }}
            >
              Get in Touch
            </Button>
          </div>
        </Container>
      </Section>

      {/* Inquiry Modal */}
      <LeadFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        prefillComments={`I want to know more about ${selectedAddress}`}
      />
    </>
  )
}
