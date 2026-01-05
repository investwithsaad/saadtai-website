'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { InvestmentCalculator } from '@/components/InvestmentCalculator'
import { CalculatorLandingPage } from '@/components/CalculatorLandingPage'
import { Container, Section, Heading, Text } from '@/components/ui'

export function CalculatorPageContent() {
  const [hasAccess, setHasAccess] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Check if user has already accessed the calculator
    setMounted(true)
    setHasAccess(localStorage.getItem('calculator_access_granted') === 'true')
  }, [])

  // Prevent hydration mismatch by waiting for mount
  if (!mounted) return null

  return (
    <AnimatePresence mode="wait">
      {!hasAccess ? (
        <motion.div
          key="landing"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <CalculatorLandingPage onSuccess={() => setHasAccess(true)} />
        </motion.div>
      ) : (
        <motion.div
          key="calculator"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          {/* Hero Section */}
          <Section background="white" className="py-12 md:py-16">
            <Container>
              <div className="max-w-4xl mx-auto text-center mb-12">
                <Heading size="h1" className="mb-4">
                  Investment Property Calculator
                </Heading>
                <Text size="lg" className="text-gray-700">
                  Analyze real estate deals with professional-grade calculations. Evaluate cap rates,
                  cash flow, tax benefits, and multi-year projections to make informed investment decisions.
                </Text>
              </div>
            </Container>
          </Section>

          {/* Calculator Section */}
          <InvestmentCalculator />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Support Components

interface FeatureCardProps {
  title: string
  description: string
}

function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
      <Heading size="h4" className="mb-3">
        {title}
      </Heading>
      <Text className="text-gray-600">
        {description}
      </Text>
    </div>
  )
}

interface FAQItemProps {
  question: string
  answer: string
}

function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <div className="border-l-4 border-blue-600 pl-6 py-2">
      <Heading size="h4" className="mb-2 text-gray-900">
        {question}
      </Heading>
      <Text className="text-gray-700">
        {answer}
      </Text>
    </div>
  )
}
