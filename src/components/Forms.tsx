'use client'

import React, { useState } from 'react'
import { CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import {
  Section,
  Container,
  Heading,
  Text,
  Button,
  Card,
  FadeIn,
  FormInput,
} from '@/components/ui'
import { COLORS } from '@/lib/colors'

/**
 * LEAD FORM - Reusable form component
 * Single form for entire site: Name, Phone, Email (optional), Additional Comments (optional)
 * Captures all leads to Follow Up Boss
 */

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export interface LeadFormContentProps {
  state: FormState
  errorMsg: string
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  isSubmitting: boolean
  showPrivacyText?: boolean
  prefillComments?: string
}

function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center py-8">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
      >
        <div className="w-12 h-12 border-4 border-gray-200 border-t-[4px]"
          style={{ borderTopColor: COLORS.primary, borderRadius: '50%' }}
        />
      </motion.div>
    </div>
  )
}

export function LeadFormContent({
  state,
  errorMsg,
  onSubmit,
  isSubmitting,
  showPrivacyText = true,
  prefillComments,
}: LeadFormContentProps) {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <FormInput
        type="text"
        name="name"
        label="Full Name"
        placeholder="John Doe"
        required
        disabled={isSubmitting}
      />

      <FormInput
        type="tel"
        name="phone"
        label="Phone Number"
        placeholder="(555) 123-4567"
        required
        disabled={isSubmitting}
      />

      <FormInput
        type="email"
        name="email"
        label="Email Address (optional)"
        placeholder="john@example.com"
        disabled={isSubmitting}
      />

      <FormInput
        as="textarea"
        name="comments"
        label="Additional Comments (optional)"
        placeholder="Tell us more about your needs..."
        defaultValue={prefillComments}
        rows={5}
        disabled={isSubmitting}
      />

      {state === 'error' && (
        <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {errorMsg}
        </div>
      )}

      {state === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-3 bg-green-100 border border-green-400 text-green-700 rounded text-center"
        >
          ✓ Thanks for reaching out! We'll be in touch soon.
        </motion.div>
      )}

      <div className="flex justify-center pt-4">
        <motion.button
          type="submit"
          disabled={isSubmitting}
          className="relative w-12 h-12 rounded-lg"
          style={{ backgroundColor: COLORS.primary }}
          whileHover={!isSubmitting ? { scale: 1.05 } : {}}
          whileTap={!isSubmitting ? { scale: 0.95 } : {}}
        >
          {isSubmitting ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full" />
            </motion.div>
          ) : state === 'success' ? (
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <CheckCircle className="w-6 h-6 text-white" />
            </motion.div>
          ) : (
            <motion.div className="absolute inset-0 flex items-center justify-center text-white font-semibold text-lg">
              →
            </motion.div>
          )}
        </motion.button>
      </div>

      {showPrivacyText && !isSubmitting && (
        <Text size="sm" className="text-gray-600 text-center">
          We respect your privacy. Your information is secure.
        </Text>
      )}
    </form>
  )
}

interface UniversalLeadFormProps {
  title?: string
  subtitle?: string
  onSuccess?: () => void
}

export function UniversalLeadForm({
  title = "Let's Talk About Your Real Estate Needs",
  subtitle = "Fill in your details and we'll get back to you within 24 hours.",
  onSuccess,
}: UniversalLeadFormProps) {
  const [state, setState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setState('submitting')

    // Store form reference before any async operations
    const form = e.currentTarget

    try {
      const formData = new FormData(form)
      const submitData = {
        name: formData.get('name'),
        phone: formData.get('phone'),
        email: formData.get('email') || undefined,
        comments: formData.get('comments') || undefined,
        timestamp: new Date().toISOString(),
      }

      console.log('Form data being submitted:', submitData)

      const response = await fetch('/api/forms/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'lead_form',
          data: submitData,
        }),
      })

      if (!response.ok) throw new Error('Failed to submit form')

      setState('success')

      // Reset form safely
      try {
        form?.reset?.()
      } catch (resetErr) {
        console.error('Form reset error:', resetErr)
      }

      if (onSuccess) setTimeout(onSuccess, 2000)
    } catch (err) {
      console.error('Form submission error:', err)
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong')
      setState('error')
    }
  }

  return (
    <Section background="primary" className="overflow-visible">
      <Container className="flex flex-col items-center !max-w-2xl">
        {title && (
          <FadeIn className="text-center mb-12 w-full">
            <Heading size="h2" color="secondary">
              {title}
            </Heading>
            {subtitle && (
              <Text size="lg" color="white" className="mt-2">
                {subtitle}
              </Text>
            )}
          </FadeIn>
        )}

        <FadeIn delay={0.2} className="w-full">
          <Card className="md:p-12 bg-gray-100">
            <LeadFormContent
              state={state}
              errorMsg={errorMsg}
              onSubmit={handleSubmit}
              isSubmitting={state === 'submitting'}
            />
          </Card>
        </FadeIn>
      </Container>
    </Section>
  )
}