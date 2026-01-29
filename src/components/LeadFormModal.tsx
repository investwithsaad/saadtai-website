'use client'

import React, { useState, useEffect } from 'react'
import { X, CheckCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { LeadFormContent } from './Forms'
import { COLORS } from '@/lib/colors'
import { trackFormSubmission } from '@/lib/tracking'

interface LeadFormModalProps {
  isOpen: boolean
  onClose: () => void
  prefillComments?: string
}

type ModalState = 'idle' | 'submitting' | 'error' | 'success'

export function LeadFormModal({ isOpen, onClose, prefillComments }: LeadFormModalProps) {
  const [state, setState] = useState<ModalState>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    document.documentElement.style.overflow = isOpen ? 'hidden' : ''

    // Reset form state when modal closes
    if (!isOpen) {
      setState('idle')
      setErrorMsg('')
    }
  }, [isOpen])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setState('submitting')

    try {
      const formData = new FormData(e.currentTarget)
      const response = await fetch('/api/forms/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'lead_form',
          data: {
            name: formData.get('name'),
            phone: formData.get('phone'),
            email: formData.get('email') || undefined,
            comments: formData.get('comments') || undefined,
            timestamp: new Date().toISOString(),
          },
        }),
      })

      if (!response.ok) throw new Error('Failed to submit')

      setState('success')
      e.currentTarget?.reset?.()

      // Track form submission with user data for Meta conversion tracking
      const name = formData.get('name')?.toString() || ''
      const nameParts = name.split(' ')
      trackFormSubmission('lead_form', {
        email: formData.get('email')?.toString(),
        phone: formData.get('phone')?.toString(),
        firstName: nameParts[0],
        lastName: nameParts.slice(1).join(' '),
      })
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong')
      setState('error')
    }
  }

  const ZI = 'z-[9999999999]'

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            animate={{ opacity: 1, backdropFilter: 'blur(32px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            onClick={onClose}
            className={`fixed bg-white/60 inset-0 ${ZI}`}
          />

          <div className={`fixed inset-0 ${ZI} flex items-center justify-center p-4`}>
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
              className="w-full max-w-md"
            >
              {state !== 'success' && (
                <div className="flex justify-center mb-4">
                  <button
                    onClick={onClose}
                    className="p-2 hover:opacity-75 transition-opacity"
                  >
                    <X className="w-6 h-6 text-slate-900" />
                  </button>
                </div>
              )}

              <div className="p-8">
                {state === 'success' ? (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
                    className="text-center"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      className="mb-4"
                    >
                      <CheckCircle
                        className="w-16 h-16 mx-auto"
                        style={{ color: COLORS.primary }}
                        strokeWidth={1.5}
                      />
                    </motion.div>
                    <p className="text-slate-900 font-semibold text-lg">Thanks for reaching out!</p>
                    <p className="text-slate-600 mt-2">We'll be in touch soon.</p>
                  </motion.div>
                ) : (
                  <>
                    <h2 className="text-4xl font-bold text-slate-900 mb-6 text-center">Let's talk</h2>
                    <p className="text-slate-600 text-center mb-8 text-sm">
                      30-minute conversation. You'll get actionable insights, and clarity if my system is a fit for you.
                    </p>
                    <div className="space-y-4">
                      <LeadFormContent
                        state={state}
                        errorMsg={errorMsg}
                        onSubmit={handleSubmit}
                        isSubmitting={state === 'submitting'}
                        showPrivacyText={false}
                        prefillComments={prefillComments}
                      />
                    </div>
                  </>
                )}
              </div>

              {state === 'success' && (
                <div className="flex justify-center mt-4">
                  <button
                    onClick={onClose}
                    className="p-2 hover:opacity-75 transition-opacity"
                  >
                    <X className="w-6 h-6 text-slate-900" />
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}