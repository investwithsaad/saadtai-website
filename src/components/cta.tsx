import { FadeIn, Section, Container, Heading, Text, Button } from "./ui"
import Link from "next/link"

interface CTAProps {
  title: string
  text: string
  buttonText: string
  href?: string
  useBG?: boolean
}

export const CTA = ({ title, text, buttonText, href = "/contact-us", useBG }: CTAProps) => {
  const isExternalLink = href?.startsWith('http')

  return (
    <Section background={useBG ? "background" : "white"}>
      <Container>
        <FadeIn className="text-center">
          <Heading size="h2">{title}</Heading>
          <Text className="mt-4 text-gray-600 max-w-2xl mx-auto mb-8">
            {text}
          </Text>
          {isExternalLink ? (
            <a href={href} target="_blank" rel="noopener noreferrer">
              <Button variant="secondary">
                {buttonText}
              </Button>
            </a>
          ) : (
            <Link href={href}>
              <Button variant="secondary">
                {buttonText}
              </Button>
            </Link>
          )}
        </FadeIn>
      </Container>
    </Section>
  )
}