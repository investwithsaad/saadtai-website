'use client'

import { Heading, Text, FadeIn } from '@/components/ui'
import { formatTextWithLineBreaks } from '@/lib/format-text'

interface SectionHeaderProps {
  title: string
  subtitle?: string
  titleSize?: 'h1' | 'h2' | 'h3' | 'h4'
  subtitleSize?: 'default' | 'sm' | 'lg' | 'xl' | '2xl'
  centered?: boolean
  titleColor?: 'primary' | 'white' | 'secondary'
  subtitleColor?: 'white' | 'primary' | 'secondary'
  className?: string
  withFadeIn?: boolean
}

export function SectionHeader({ 
  title, 
  subtitle, 
  titleSize = 'h2',
  subtitleSize = 'lg',
  centered = false,
  titleColor,
  subtitleColor,
  className = '',
  withFadeIn = true
}: SectionHeaderProps) {
  const content = (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      <Heading size={titleSize} color={titleColor} className={subtitle ? 'mb-4' : ''}>
        {formatTextWithLineBreaks(title)}
      </Heading>
      {subtitle && (
        <Text size={subtitleSize} color={subtitleColor}>
          {formatTextWithLineBreaks(subtitle)}
        </Text>
      )}
    </div>
  )

  if (withFadeIn) {
    return <FadeIn>{content}</FadeIn>
  }

  return content
}
