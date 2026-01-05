'use client'

import React, { useState } from 'react'
import { CheckCircle, AlertCircle, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Container, Section, Heading, Text, FormInput } from '@/components/ui'
import { COLORS } from '@/lib/colors'
import { trackFormSubmission } from '@/lib/tracking'

interface CalculatorLandingPageProps {
  onSuccess: () => void
}

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export function CalculatorLandingPage({ onSuccess }: CalculatorLandingPageProps) {
  const [state, setState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [formData, setFormData] = useState({ email: '', firstName: '' })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setState('submitting')
    setErrorMsg('')

    try {
      // Validate email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email)) {
        throw new Error('Please enter a valid email address')
      }

      if (!formData.firstName.trim()) {
        throw new Error('Please enter your first name')
      }

      const response = await fetch('/api/forms/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'calculator_access',
          data: {
            name: formData.firstName,
            email: formData.email,
            timestamp: new Date().toISOString(),
          },
        }),
      })

      if (!response.ok) throw new Error('Failed to submit')

      // Track form submission for Meta Pixel
      trackFormSubmission('calculator_access', {
        email: formData.email,
        firstName: formData.firstName,
      })

      setState('success')

      // Store access grant and transition to calculator
      localStorage.setItem('calculator_access_granted', 'true')

      // Brief delay for success animation, then transition
      setTimeout(() => {
        onSuccess()
      }, 1500)
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong')
      setState('error')
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <Section background="white" className="py-12 md:py-20">
      <Container>
        <div className="max-w-3xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-16"
          >
            {/* Hero Section */}
            <motion.div variants={itemVariants} className="text-center space-y-4">
              <Heading size="h1" className="text-4xl md:text-5xl leading-tight">
                Know Exactly What Your Next Deal Is Worth
              </Heading>
              <Text size="lg" className="text-gray-700 text-xl">
                Stop second-guessing deals and start investing with confidence
              </Text>
            </motion.div>

            {/* Pain Points Section */}
            <motion.div variants={itemVariants} className="space-y-6">
              <Heading size="h2" className="text-center text-2xl mb-8">
                Does This Sound Familiar?
              </Heading>
              <div className="space-y-4">
                {[
                  'You see a 3-unit listed and wonder: is this actually a good deal?',
                  "You're analyzing spreadsheets at midnight, still unsure if the numbers work",
                  "You're worried about overpaying or missing the right opportunity",
                ].map((pain, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="flex gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"
                  >
                    <div className="flex-shrink-0">
                      <div
                        className="flex items-center justify-center h-6 w-6 rounded-full text-white text-sm font-bold"
                        style={{ backgroundColor: COLORS.secondary }}
                      >
                        ✓
                      </div>
                    </div>
                    <Text className="text-gray-700">{pain}</Text>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Benefits Section */}
            <motion.div variants={itemVariants} className="space-y-6">
              <Heading size="h2" className="text-center text-2xl mb-8">
                This Calculator Changes That
              </Heading>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Cap Rate in Seconds',
                    desc: 'Know your return instantly instead of wrestling with formulas',
                  },
                  {
                    title: '5-Year Projections',
                    desc: 'See how rent appreciation and equity growth transform your investment',
                  },
                  {
                    title: 'Cash Flow Clarity',
                    desc: 'Understand monthly and annual cash flow including all expenses',
                  },
                  {
                    title: 'Confidence in Decisions',
                    desc: 'Get buy/pass recommendations based on real numbers, not gut feeling',
                  },
                ].map((benefit, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="p-6 rounded-lg border border-gray-200 bg-white hover:shadow-lg transition-shadow"
                  >
                    <div className="flex gap-3 mb-3">
                      <div
                        className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white"
                        style={{ backgroundColor: COLORS.secondary }}
                      >
                        ✓
                      </div>
                      <Heading size="h4" className="font-semibold">
                        {benefit.title}
                      </Heading>
                    </div>
                    <Text className="text-gray-600 text-sm">{benefit.desc}</Text>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              variants={itemVariants}
              className="text-center p-6 bg-gray-50 rounded-lg border border-gray-200"
            >
              <Text className="text-gray-700 text-sm md:text-base">
                <span className="font-semibold text-gray-900">200+ Capital Region investors</span> use this
                calculator to analyze deals with confidence
              </Text>
            </motion.div>

            {/* Email Form */}
            {state === 'success' ? (
              <motion.div
                variants={itemVariants}
                className="text-center py-12"
              >
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
                  className="mb-6"
                >
                  <CheckCircle
                    className="w-16 h-16 mx-auto"
                    color={COLORS.secondary}
                    strokeWidth={1.5}
                  />
                </motion.div>
                <Heading size="h3" className="mb-3">
                  You're All Set!
                </Heading>
                <Text className="text-gray-600 mb-6">
                  Loading your calculator...
                </Text>
              </motion.div>
            ) : (
              <motion.div variants={itemVariants} className="space-y-6">
                <div className="text-center">
                  <Text className="text-gray-700 font-semibold mb-6">
                    Get instant access to your calculator
                  </Text>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <FormInput
                    type="text"
                    name="firstName"
                    label="First Name"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    disabled={state === 'submitting'}
                  />

                  <FormInput
                    type="email"
                    name="email"
                    label="Email Address"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={state === 'submitting'}
                  />

                  {state === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg"
                    >
                      <AlertCircle className="w-5 h-5 text-red-600" />
                      <Text className="text-red-700 text-sm">{errorMsg}</Text>
                    </motion.div>
                  )}

                  <button
                    type="submit"
                    disabled={state === 'submitting'}
                    className="w-full py-3 px-6 rounded-lg font-semibold text-white transition-all flex items-center justify-center gap-2 group"
                    style={{ backgroundColor: COLORS.primary }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.opacity = '0.9'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = '1'
                    }}
                  >
                    {state === 'submitting' ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        >
                          <div
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          />
                        </motion.div>
                        Getting your access...
                      </>
                    ) : (
                      <>
                        Get Free Access
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>

                  <Text className="text-center text-gray-600 text-xs">
                    No credit card • Takes 5 seconds • Instant access
                  </Text>
                </form>
              </motion.div>
            )}
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
