import { Section, Container, Heading, Text } from '@/components/ui'
import type { FAQItem } from '@/data/ai-faqs'

interface FAQSectionServerProps {
  title?: string
  description?: string
  faqs: FAQItem[]
  background?: 'white' | 'background'
  maxDisplay?: number
  schemaName?: string
}

export function FAQSectionServer({
  title = 'Frequently Asked Questions',
  description,
  faqs,
  background = 'background',
  maxDisplay,
  schemaName,
}: FAQSectionServerProps) {
  const displayFaqs = maxDisplay ? faqs.slice(0, maxDisplay) : faqs

  const faqSchema: {
    "@context": string
    "@type": string
    mainEntity: Array<{
      "@type": string
      name: string
      acceptedAnswer: {
        "@type": string
        text: string
      }
    }>
    about?: {
      "@type": string
      name: string
    }
  } = {
    "@context": 'https://schema.org',
    "@type": 'FAQPage',
    mainEntity: displayFaqs.map((faq) => ({
      "@type": 'Question',
      name: faq.q,
      acceptedAnswer: {
        "@type": 'Answer',
        text: faq.a,
      },
    })),
  }

  if (schemaName) {
    faqSchema.about = {
      "@type": 'FinancialProduct',
      name: schemaName,
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <Section background={background}>
        <Container>
          <div className="max-w-3xl mx-auto mb-10 text-center">
            <Heading size="h2">{title}</Heading>
            {description && (
              <Text size="lg" className="text-gray-700">
                {description}
              </Text>
            )}
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {displayFaqs.map((faq, index) => (
              <div key={`faq-server-${index}`} className="border border-gray-200 rounded-xl p-6 bg-white">
                <Heading size="h3" className="text-olive-900 mb-2">
                  {faq.q}
                </Heading>
                <Text className="text-gray-700 leading-relaxed">{faq.a}</Text>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}
