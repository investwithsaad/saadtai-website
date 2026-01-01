'use client'

import { useState } from 'react'
import { trackFormSubmission } from '@/lib/tracking'

export interface FormSubmitData {
  firstname?: string
  lastname?: string
  name?: string
  email?: string
  phone?: string
  company?: string
  capital_for?: string
  contact_us_details?: string
  partnership_for__commercial_banking__advisory_?: string
  // Deal inquiry expanded fields
  user_role?: string
  business_industry?: string
  time_in_business?: string
  annual_revenue?: string
  financing_needs?: string[]
  funding_amount?: string
  owner_credit_score?: string
  company_state?: string
  calendly_url?: string
}

export function useFormSubmit(
  formType: string,
  webhookUrl?: string,
  calendlyUrl?: string,
  onAfterSubmit?: (data: FormSubmitData) => void
) {
  const [success, setSuccess] = useState(false)
  const [formData, setFormData] = useState<FormSubmitData>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Stop the event from propagating to HubSpot's global listeners
    if (e.nativeEvent) {
      (e.nativeEvent as Event).stopImmediatePropagation?.()
    }

    const form = e.currentTarget
    setIsSubmitting(true)

    // Capture form data
    const rawFormData = new FormData(form)
    const data: Record<string, any> = {}
    const financingNeeds: string[] = []
    const honeypot = rawFormData.get('company_phone') as string

    // Check honeypot - if filled, it's likely a bot
    if (honeypot) {
      form?.reset?.()
      setIsSubmitting(false)
      // Silently fail - no success state
      return
    }

    rawFormData.forEach((value, key) => {
      // Handle multi-select checkboxes (financing_needs) and skip honeypot
      if (key === 'financing_needs') {
        financingNeeds.push(value as string)
      } else if (key !== 'company_phone') {
        data[key] = value as string
      }
    })

    const submittedFormData: FormSubmitData = {
      firstname: data.firstname || '',
      lastname: data.lastname || '',
      name: data.name || '',
      email: data.email || '',
      phone: data.phone || '',
      company: data.company || '',
      capital_for: data.capital_for || '',
      contact_us_details: data.contact_us_details || '',
      partnership_for__commercial_banking__advisory_: data.partnership_for__commercial_banking__advisory_ || '',
      // Deal inquiry expanded fields
      user_role: data.user_role || '',
      business_industry: data.business_industry || '',
      time_in_business: data.time_in_business || '',
      annual_revenue: data.annual_revenue || '',
      financing_needs: financingNeeds,
      funding_amount: data.funding_amount || '',
      owner_credit_score: data.owner_credit_score || '',
      company_state: data.company_state || '',
      calendly_url: data.calendly_url || '',
    }

    setFormData(submittedFormData)

    // Track form submission with user data for Meta conversion tracking
    const firstName = submittedFormData.firstname || submittedFormData.name?.split(' ')[0] || ''
    const lastName = submittedFormData.lastname || submittedFormData.name?.split(' ').slice(1).join(' ') || ''
    trackFormSubmission(formType, {
      email: submittedFormData.email,
      phone: submittedFormData.phone,
      firstName,
      lastName,
    })

    // Small delay to ensure tracking completes, then proceed
    setTimeout(() => {
      if (onAfterSubmit) {
        onAfterSubmit(submittedFormData)
      }

      if (calendlyUrl) {
        // Open Calendly in new tab for intro/partner forms
        window.open(calendlyUrl, '_blank')
      } else {
        // Show success page for other forms
        setSuccess(true)
      }
      form?.reset?.()
      setIsSubmitting(false)
    }, 300)
  }

  return { success, handleSubmit, formData, isSubmitting }
}
