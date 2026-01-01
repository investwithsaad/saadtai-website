'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import { COLORS } from "@/lib/colors"
import { LAYOUT } from "@/lib/layout"
import { Section, Container, Heading, Text } from "./ui"

interface BlogHeroFadeInProps {
  title: string
  subtitle?: string
  date?: string
  author?: string
  authorTitle?: string
  authorPhoto?: string
  category?: string
  backgroundImage?: string
}

export const BlogHeroFadeIn = ({ title, subtitle, date, author, authorTitle, authorPhoto, category = "Business/Professional Trends", backgroundImage }: BlogHeroFadeInProps) => (
  <Section className="py-12 md:py-16 overflow-hidden relative" style={{ scrollMarginTop: LAYOUT.scrollMarginTop }}>
    {/* Background with overlay */}
    <div 
      className="absolute inset-0"
      style={{
        backgroundImage: backgroundImage ? `url('${backgroundImage}')` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: !backgroundImage ? COLORS.dark : undefined,
      }}
    />
    <div 
      className="absolute inset-0"
      style={{
        backgroundColor: backgroundImage ? `${COLORS.dark}cc` : undefined, // 80% opacity overlay
      }}
    />

    <Container className="relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-3xl mx-auto"
      >
        {category && (
          <Text size="sm" className="text-white/70 mb-4">
            {category}
          </Text>
        )}
        <Heading size="h1" color="white" className="mb-6">
          {title}
        </Heading>
        {subtitle && (
          <Text size="lg" className="text-white mb-8">
            {subtitle}
          </Text>
        )}

        {/* Dividing Line */}
        <div className="mb-6 pb-6 border-b border-white/20" />

        {/* Author Byline with Photo and Date */}
        {author && (
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              {authorPhoto && (
                <div className="relative flex-shrink-0">
                  <Image
                    src={authorPhoto}
                    alt={authorTitle ? `${author}, ${authorTitle}` : author}
                    width={56}
                    height={56}
                    className="rounded-full object-cover"
                  />
                </div>
              )}
              <div>
                <Text size="sm" className="font-semibold text-white">
                  {author}
                </Text>
                {authorTitle && (
                  <Text size="sm" className="text-white">
                    {authorTitle}
                  </Text>
                )}
              </div>
            </div>
            {date && (
              <Text size="sm" style={{ color: COLORS.background}}>
                {date}
              </Text>
            )}
          </div>
        )}
      </motion.div>
    </Container>
  </Section>
)