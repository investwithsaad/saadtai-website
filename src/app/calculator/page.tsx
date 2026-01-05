import type { Metadata } from 'next'
import { CalculatorPageContent } from './calculator-page-content'

export const metadata: Metadata = {
  title: 'Investment Calculator | Invest with Saad',
  description: 'Calculate cap rate, cash-on-cash return, NOI, and multi-year projections for rental property investments. Free real estate calculator.',
  keywords: 'investment property calculator, cap rate calculator, cash flow calculator, real estate analysis tool',
  alternates: {
    canonical: 'https://investwithsaad.com/calculator',
  },
  openGraph: {
    title: 'Investment Calculator | Invest with Saad',
    description: 'Analyze rental property deals with professional-grade calculations',
    url: 'https://investwithsaad.com/calculator',
    type: 'website',
    images: [
      {
        url: 'https://investwithsaad.com/main-bg.png',
        width: 1200,
        height: 630,
        alt: 'Investment Property Calculator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Investment Calculator | Invest with Saad',
    description: 'Free real estate investment property calculator for cap rate and cash flow analysis.',
  },
}

export default function CalculatorPage() {
  return <CalculatorPageContent />
}
