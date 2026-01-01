export interface PartnerType {
  title: string
  image: string
  imageWidth: number
  imageHeight: number
  benefits: string[]
  description: string
}

export interface Commitment {
  title: string
  desc: string
}

export interface Testimonial {
  text: string
  author: string
}

// Partners section - currently empty, ready for future content
export const partnerTypes: PartnerType[] = []

export const commitments: Commitment[] = []

export const testimonials: Testimonial[] = []
