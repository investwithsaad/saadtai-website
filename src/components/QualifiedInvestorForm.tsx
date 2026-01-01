'use client'

import React, { useState } from 'react'
import { CheckCircle, AlertCircle, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { FormInput } from '@/components/ui'
import { COLORS } from '@/lib/colors'
import { trackFormSubmission } from '@/lib/tracking'

type FormState = 'idle' | 'submitting' | 'success' | 'error' | 'disqualified'
type FormStep = 'units-selling' | 'timeline' | 'condition' | 'name' | 'phone' | 'email'

export interface QualifiedInvestorFormProps {
  onSuccess?: () => void
}

const steps: FormStep[] = ['units-selling', 'timeline', 'condition', 'name', 'phone', 'email']

export function QualifiedInvestorForm({ onSuccess }: QualifiedInvestorFormProps) {
  const [state, setState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    unitsSelling: '',
    timeline: '',
    condition: '',
  })

  const currentStep = steps[currentStepIndex]
  const progress = ((currentStepIndex + 1) / steps.length) * 100

  const handleNext = () => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1)
      setErrorMsg('')
    }
  }

  const handleBack = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1)
      setErrorMsg('')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>, isAutoAdvance: boolean) => {
    handleChange(e)
    if (isAutoAdvance) {
      setTimeout(handleNext, 100)
    }
  }

  const handleSubmit = async () => {
    setState('submitting')

    try {
      const response = await fetch('/api/forms/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'qualified_investor_form',
          data: {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            unitsSelling: formData.unitsSelling,
            timeline: formData.timeline,
            condition: formData.condition,
            timestamp: new Date().toISOString(),
            isQualified: true,
          },
        }),
      })

      if (!response.ok) throw new Error('Failed to submit form')

      setState('success')

      // Track form submission with user data for Meta conversion tracking
      const nameParts = formData.name.split(' ')
      trackFormSubmission('qualified_investor_form', {
        email: formData.email,
        phone: formData.phone,
        firstName: nameParts[0],
        lastName: nameParts.slice(1).join(' '),
      })

      if (onSuccess) setTimeout(onSuccess, 2000)
    } catch (err) {
      console.error('Form submission error:', err)
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong')
      setState('error')
    }
  }

  if (state === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-8 text-center bg-green-50 rounded-lg border-2 border-green-200"
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-4"
        >
          <CheckCircle className="w-16 h-16 mx-auto text-green-600" />
        </motion.div>
        <h3 className="text-2xl font-bold text-green-900 mb-2">Thanks for reaching out!</h3>
        <p className="text-green-700">We'll call you within 30 minutes to discuss your next move.</p>
      </motion.div>
    )
  }

  if (state === 'disqualified') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-8 text-center bg-blue-50 rounded-lg border-2 border-blue-200"
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-4"
        >
          <AlertCircle className="w-16 h-16 mx-auto text-blue-600" />
        </motion.div>
        <h3 className="text-2xl font-bold text-blue-900 mb-3">Thanks for your interest!</h3>
        <p className="text-blue-700 mb-6">
          Our services are designed for investors with multifamily deal experience. Right now, we focus on helping experienced investors scale faster.
        </p>
        <p className="text-blue-700">
          When you're ready to acquire your first multifamily property, we'd love to help. Feel free to reach out to us directly.
        </p>
      </motion.div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Form Steps */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="min-h-24"
        >
          {/* Units Selling */}
          {currentStep === 'units-selling' && (
            <div className="space-y-4">
              <div>
                <label className="text-sm font-semibold text-slate-900 block mb-3">
                  How many properties are you looking to sell?
                </label>
                <div className="space-y-2">
                  {['1-2', '3-4', '5+'].map((option) => (
                    <label key={option} className="flex items-center gap-3 p-3 border-2 rounded-lg cursor-pointer transition-all" style={{ borderColor: formData.unitsSelling === option ? COLORS.primary : '#e5e7eb' }}>
                      <input
                        type="radio"
                        name="unitsSelling"
                        value={option}
                        checked={formData.unitsSelling === option}
                        onChange={(e) => handleRadioChange(e, true)}
                        className="w-4 h-4"
                      />
                      <span className="text-slate-700">{option} properties</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Timeline */}
          {currentStep === 'timeline' && (
            <div className="space-y-4">
              <div>
                <label className="text-sm font-semibold text-slate-900 block mb-3">
                  How soon are you looking to sell?
                </label>
                <div className="space-y-2">
                  {['0-3 months', '3-6 months', '6-12 months', '1+ years'].map((option) => (
                    <label key={option} className="flex items-center gap-3 p-3 border-2 rounded-lg cursor-pointer transition-all" style={{ borderColor: formData.timeline === option ? COLORS.primary : '#e5e7eb' }}>
                      <input
                        type="radio"
                        name="timeline"
                        value={option}
                        checked={formData.timeline === option}
                        onChange={(e) => handleRadioChange(e, true)}
                        className="w-4 h-4"
                      />
                      <span className="text-slate-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Condition */}
          {currentStep === 'condition' && (
            <div className="space-y-4">
              <div>
                <label className="text-sm font-semibold text-slate-900 block mb-3">
                  What is the condition of the property?
                </label>
                <div className="space-y-2">
                  {['Excellent', 'Good', 'Fair', 'Needs Work'].map((option) => (
                    <label key={option} className="flex items-center gap-3 p-3 border-2 rounded-lg cursor-pointer transition-all" style={{ borderColor: formData.condition === option ? COLORS.primary : '#e5e7eb' }}>
                      <input
                        type="radio"
                        name="condition"
                        value={option}
                        checked={formData.condition === option}
                        onChange={(e) => handleRadioChange(e, true)}
                        className="w-4 h-4"
                      />
                      <span className="text-slate-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Name */}
          {currentStep === 'name' && (
            <div className="space-y-4">
              <label className="text-sm font-semibold text-slate-900 block">
                What's your name?
              </label>
              <FormInput
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                disabled={state === 'submitting'}
              />
            </div>
          )}

          {/* Phone */}
          {currentStep === 'phone' && (
            <div className="space-y-4">
              <label className="text-sm font-semibold text-slate-900 block">
                Best phone number to reach you?
              </label>
              <FormInput
                type="tel"
                name="phone"
                placeholder="(555) 123-4567"
                value={formData.phone}
                onChange={handleChange}
                disabled={state === 'submitting'}
              />
            </div>
          )}

          {/* Email */}
          {currentStep === 'email' && (
            <div className="space-y-4">
              <label className="text-sm font-semibold text-slate-900 block">
                Email address?
              </label>
              <FormInput
                type="email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                disabled={state === 'submitting'}
              />
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {state === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-red-100 border border-red-400 text-red-700 rounded"
        >
          {errorMsg}
        </motion.div>
      )}

      {/* Navigation Buttons - Only show for non-radio steps */}
      {(currentStep !== 'units-selling' && currentStep !== 'timeline' && currentStep !== 'condition') && (
        <div className="flex gap-3">
          {currentStepIndex > 0 && (
            <motion.button
              type="button"
              onClick={handleBack}
              disabled={state === 'submitting'}
              className="px-6 py-3 rounded-xl font-semibold text-slate-700 border-2 border-slate-300 transition-all"
              whileHover={{ backgroundColor: '#f3f4f6' }}
              whileTap={{ scale: 0.98 }}
            >
              Back
            </motion.button>
          )}

          <motion.button
            type="button"
            onClick={currentStepIndex === steps.length - 1 ? handleSubmit : handleNext}
            disabled={
              state === 'submitting' ||
              (currentStep === 'name' && !formData.name) ||
              (currentStep === 'phone' && !formData.phone) ||
              (currentStep === 'email' && !formData.email)
            }
            className="flex-1 py-3 px-6 rounded-xl font-semibold text-white transition-all flex items-center justify-center gap-2"
            style={{ backgroundColor: COLORS.primary }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {state === 'submitting' ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                />
                Submitting...
              </>
            ) : currentStepIndex === steps.length - 1 ? (
              <>
                Submit <CheckCircle className="w-4 h-4" />
              </>
            ) : (
              <>
                Next <ChevronRight className="w-4 h-4" />
              </>
            )}
          </motion.button>
        </div>
      )}
    </div>
  )
}
