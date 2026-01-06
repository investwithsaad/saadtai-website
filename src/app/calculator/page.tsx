import type { Metadata } from 'next'
import { CalculatorPageContent } from './calculator-page-content'
import { createPageMetadata } from '@/lib/metadata-factory'

export const metadata: Metadata = createPageMetadata({
  title: 'Investment Calculator | Saad Tai',
  description: 'Calculate cap rate, cash-on-cash return, NOI, and multi-year projections for rental property investments. Free real estate calculator.',
  path: '/calculator',
  keywords: 'investment property calculator, cap rate calculator, cash flow calculator, real estate analysis tool',
  ogImage: '/House1.webp',
})

export default function CalculatorPage() {
  return <CalculatorPageContent />
}
