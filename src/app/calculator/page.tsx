import type { Metadata } from 'next'
import { CalculatorPageContent } from './calculator-page-content'

export const metadata: Metadata = {
  title: 'Investment Calculator | Saad Tai',
  description: 'Calculate cap rate, cash-on-cash return, NOI, and multi-year projections for rental property investments. Free real estate calculator.',
  keywords: 'investment property calculator, cap rate calculator, cash flow calculator, real estate analysis tool',
  alternates: {
    canonical: 'https://www.investwithsaad.com/calculator',
  },
  openGraph: {
    title: 'Investment Calculator | Saad Tai',
    description: 'Analyze rental property deals with professional-grade calculations',
    url: 'https://www.investwithsaad.com/calculator',
    type: 'website',
    images: [
      {
        url: 'https://www.investwithsaad.com/main-bg.png',
        width: 1200,
        height: 630,
        alt: 'Investment Property Calculator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Investment Calculator | Saad Tai',
    description: 'Free real estate investment property calculator for cap rate and cash flow analysis.',
  },
}

export default function CalculatorPage() {
  return <CalculatorPageContent />
}
