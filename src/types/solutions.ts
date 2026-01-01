/**
 * Shared Solution Types
 * Updated for Real Estate Services
 */

import { ReactNode } from 'react'

export interface FundingSolution {
  id: string
  title: string | ReactNode
  description: string
  longDescription?: string

  // Features and benefits
  features?: string[]

  // Rates and terms
  ratesAndTerms?: {
    availability?: string
    timeline?: string
    requirement?: string
    support?: string
  }

  // FAQ
  commonQuestions?: Array<{
    id: string
    q: string
    a: string
  }>

  // Use cases
  bestFor?: string[]

  // Qualification
  qualificationCriteria?: {
    minimumRevenue?: string
    minimumTimeInBusiness?: string
    minimumCreditScore?: string
    requirements?: string
  }
}
