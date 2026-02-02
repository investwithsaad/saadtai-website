import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/metadata-factory'
import { CapRateGuideContent } from '@/app/investing/cap-rate-guide/cap-rate-guide-content'

export async function generateMetadata(): Promise<Metadata> {
  return createPageMetadata({
    title: 'Cap Rate Guide: Calculate, Compare & Analyze Real Estate Returns',
    description: 'Complete cap rate explanation with formulas, benchmarks, and how to use it to evaluate multifamily investments. Includes real examples and market comparisons.',
    path: '/investing/cap-rate-guide',
    ogImage: '/saad.png',
  })
}

export default function CapRateGuide() {
  return <CapRateGuideContent />
}