import { ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { Section, Container, Heading, Text, Button } from "@/components/ui"
import { COLORS } from "@/lib/colors"
import { LAYOUT } from "@/lib/layout"
import { formatTextWithLineBreaks } from "@/lib/format-text"

interface HeroStaticProps {
  title: ReactNode
  subtitle?: ReactNode
  compact?: boolean
  ctaText?: string
  ctaHref?: string
  backgroundImage?: string
}

export function HeroStatic({ title, subtitle, compact, ctaText, ctaHref, backgroundImage }: HeroStaticProps) {
  const formattedTitle = typeof title === "string" ? formatTextWithLineBreaks(title) : title
  const formattedSubtitle = typeof subtitle === "string" ? formatTextWithLineBreaks(subtitle) : subtitle

  return (
    <Section
      className={`relative pt-20 pb-0 md:py-0 overflow-hidden ${compact ? "!pb-0" : ""}`}
      style={{ backgroundColor: COLORS.primary, scrollMarginTop: LAYOUT.scrollMarginTop }}
    >
      {backgroundImage && (
        <Image
          src={backgroundImage}
          alt=""
          fill
          sizes="100vw"
          className="absolute inset-0 object-cover object-center"
          quality={75}
          priority
          fetchPriority="high"
          aria-hidden="true"
        />
      )}
      {backgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
      )}
      <Container className={backgroundImage ? "relative z-10" : ""}>
        <div
          className={`flex flex-col items-center justify-center ${
            compact ? "min-h-[200px] py-12" : "min-h-[400px] py-20"
          } text-center`}
        >
          <div className="max-w-5xl fade-in-lcp">
            <Heading size="h1" color="background" className="mb-10">
              {formattedTitle}
            </Heading>
            {formattedSubtitle && (
              <Text size="2xl" className="text-white/90 mb-8">
                {formattedSubtitle}
              </Text>
            )}
            {ctaText && ctaHref && (
              <div className="flex justify-center">
                <Link href={ctaHref}>
                  <Button variant="default">{ctaText} →</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </Container>
    </Section>
  )
}
