'use client'

import { useState, useEffect } from 'react'
import { useFormSubmit, FormSubmitData } from './useFormSubmit'
import { trackEvent } from '@/lib/tracking'
import { CALENDLY_CONFIG } from '@/config/calendly'

interface DealInquiryFormState {
  userRole: string
  businessIndustry: string
  timeInBusiness: string
  annualRevenue: string
  financingNeeds: string[]
  fundingAmount: string
  ownerCreditScore: string
  contactUsDetails: string
  name: string
  email: string
  phone: string
  company: string
  companyState: string
}

const initialFormState: DealInquiryFormState = {
  userRole: '',
  businessIndustry: '',
  timeInBusiness: '',
  annualRevenue: '',
  financingNeeds: [],
  fundingAmount: '',
  ownerCreditScore: '',
  contactUsDetails: '',
  name: '',
  email: '',
  phone: '',
  company: '',
  companyState: '',
}

export function useDealInquiryForm(onSubmitSuccess?: (formData: FormSubmitData) => void) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [formData, setFormData] = useState<DealInquiryFormState>(initialFormState)

  // Track form initialization
  useEffect(() => {
    trackEvent('deal_inquiry_form_started')
  }, [])

  // Get Calendly URL for inquiry routing
  const getTriagedCalendlyUrl = (): string => {
    // Route all deal inquiries to Saad's discovery call
    return CALENDLY_CONFIG.discovery
  }

  const { success, handleSubmit: baseHandleSubmit, formData: submitFormData } = useFormSubmit(
    'deal_inquiry',
    'https://aiascend.app.n8n.cloud/webhook/sf-inquiry',
    '',
    (data) => {
      // Store form data for the chat interface and call callback
      if (onSubmitSuccess) {
        onSubmitSuccess(data)
      }
    }
  )

  const getFieldValue = (fieldId: keyof DealInquiryFormState) => {
    return formData[fieldId] ?? ''
  }

  const setFieldValue = (fieldId: keyof DealInquiryFormState, value: any) => {
    setFormData(prev => ({
      ...prev,
      [fieldId]: value,
    }))
  }

  const handleAnswer = (value: any) => {
    // const currentQ = questions[currentQuestion]
    // setFieldValue(currentQ.id, value)
    setSelectedAnswer(value)

    // Track question answered
    // trackEvent('deal_inquiry_question_answered', {
    //   question_number: currentQuestion + 1,
    //   question_id: currentQ.id,
    //   answer_type: currentQ.type,
    // })

    // if (currentQ?.autoAdvance) {
    //   // Delay advancement to show highlight effect
    //   setTimeout(() => {
    //     moveToNextQuestion()
    //     setSelectedAnswer(null)
    //   }, 600)
    // }
  }

  const moveToNextQuestion = () => {
    // if (currentQuestion < questions.length - 1) {
    //   const nextQuestion = currentQuestion + 1
    //   setCurrentQuestion(nextQuestion)

    //   // Track progress
    //   trackEvent('deal_inquiry_question_advanced', {
    //     from_question: currentQuestion + 1,
    //     to_question: nextQuestion + 1,
    //     progress_percentage: Math.round(((nextQuestion + 1) / questions.length) * 100),
    //   })
    // }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Stop the event from propagating to HubSpot's global listeners
    if (e.nativeEvent) {
      (e.nativeEvent as Event).stopImmediatePropagation?.()
    }

    // Get Calendly URL for routing
    const triagedCalendlyUrl = getTriagedCalendlyUrl()

    // Track form submission
    trackEvent('deal_inquiry_form_submitted', {
      funding_amount: formData.fundingAmount,
      annual_revenue: formData.annualRevenue,
      time_in_business: formData.timeInBusiness,
      user_role: formData.userRole,
      business_industry: formData.businessIndustry,
    })

    // Add triaged calendly URL as hidden input so it goes to webhook
    const form = e.currentTarget
    const calendlyInput = document.createElement('input')
    calendlyInput.type = 'hidden'
    calendlyInput.name = 'calendly_url'
    calendlyInput.value = triagedCalendlyUrl
    form.appendChild(calendlyInput)

    // Build form data object for submission
    const formElement = new FormData(form)

    // Manually set all hidden inputs
    const hiddenInputs = form.querySelectorAll('input[type="hidden"]')
    hiddenInputs.forEach(input => {
      const name = (input as HTMLInputElement).name
      const value = (input as HTMLInputElement).value
      if (!formElement.has(name)) {
        formElement.set(name, value)
      }
    })

    await baseHandleSubmit(e)

    // Clean up the added input
    form.removeChild(calendlyInput)
  }

  return {
    currentQuestion,
    selectedAnswer,
    ...formData,
    success,
    getFieldValue,
    setFieldValue,
    handleAnswer,
    moveToNextQuestion,
    handleSubmit,
  }
}
