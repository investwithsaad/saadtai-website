'use client'

import { Card, StaggerContainer } from '@/components/ui'
import { COLORS } from '@/lib/colors'

interface Testimonial {
  text: string
  author: string
  tag?: string
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {testimonials.map((testimonial, i) => (
        <Card 
          key={i} 
          variant="flat"
          className="bg-white"
          style={{ borderColor: COLORS.dark, borderWidth: '2px' }}
        >
          <div className="p-6">
            <p className="text-slate-700 mb-4 italic">
              "{testimonial.text}"
            </p>
            <p className="font-semibold text-slate-900">
              — {testimonial.author}{testimonial.tag && `, ${testimonial.tag}`}
            </p>
          </div>
        </Card>
      ))}
    </StaggerContainer>
  )
}
