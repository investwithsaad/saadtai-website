'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { X, Send, MessageCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { COLORS as BRAND_COLORS } from '@/lib/colors'
import { trackChatbotSessionStart, trackChatbotMessage, trackChatbotScheduleCall } from '@/lib/tracking'
import { Button } from '@/components/ui'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
  actionButtons?: Array<{ label: string; action: string }>
}

interface ChatbotProps {
  userRole?: string
}

export function Chatbot({ userRole }: ChatbotProps = {}) {
  const [isOpen, setIsOpen] = useState(false)
  const [aiContext, setAiContext] = useState('')
  const [storedUserRole, setStoredUserRole] = useState<string | undefined>(userRole)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hey! Are you building a multifamily portfolio or looking to make a move with existing units?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showChat, setShowChat] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)


  // Enable VirtualKeyboard API for Chrome to handle keyboard overlays
  useEffect(() => {
    if ('virtualKeyboard' in navigator) {
      (navigator as any).virtualKeyboard.overlaysContent = true
    }
  }, [])

  // Track chatbot session start
  useEffect(() => {
    if (isOpen) {
      trackChatbotSessionStart()
    }
  }, [isOpen])

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView()
    }
  }, [messages, isOpen, isLoading])

  // Show chat button when user scrolls below the fold
  useEffect(() => {
    const handleScroll = () => {
      // Show chat when user has scrolled more than 500px down
      setShowChat(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSendMessage = useCallback(async () => {
    if (!inputValue.trim()) return

    // Track message sent with preview
    trackChatbotMessage(undefined, inputValue)

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue('')
    setIsLoading(true)

    try {
      // Get AI response with conversation history and user role
      const reply = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: inputValue,
          conversationHistory: messages,
          userRole: storedUserRole,
        }),
      }).then(res => res.json()).then(data => data.reply)

      // Parse JSON response (guaranteed to be JSON via API response_format)
      const parsed = JSON.parse(reply)
      const displayText = parsed.message
      const showForm = parsed.showForm === true
      const context = parsed.context || ''

      if (showForm) {
        setAiContext(context)
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: displayText,
        sender: 'bot',
        timestamp: new Date(),
        actionButtons: showForm ? [
          { label: "Schedule a Call", action: 'open_form_modal' }
        ] : undefined
      }
      setMessages((prev) => [...prev, botMessage])
    } catch (error) {
      console.error('Error getting AI response:', error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Sorry, I'm having trouble responding right now. Please try again in a moment.",
        sender: 'bot',
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }, [inputValue, messages])

  const handleActionButtonClick = useCallback((action: string) => {
    if (action === 'open_form_modal') {
      // Track the schedule call action
      trackChatbotScheduleCall()

      // Store the investor context for the modal to use
      if (aiContext) {
        localStorage.setItem('chatbot_investor_context', aiContext)
      }

      // Emit custom event to parent to open form modal with context
      const event = new CustomEvent('openChatFormModal', {
        detail: { context: aiContext || 'Interested in exploring investment opportunities' }
      })
      window.dispatchEvent(event)

      // Close the chatbot
      setIsOpen(false)
    }
  }, [aiContext])

  const handleOpenChat = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {!isOpen && showChat ? (
          <motion.button
            key="button"
            onClick={handleOpenChat}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              bottom: 16,
              left: '50%',
              translate: '-50% 0',
              zIndex: 50,
              padding: '16px 24px',
              backgroundColor: BRAND_COLORS.secondary,
              border: `2px solid ${BRAND_COLORS.dark}`,
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            }}
            className="flex items-center justify-center gap-3 hover:opacity-95 relative"
            aria-label="Open chat"
          >
            <MessageCircle size={24} style={{ color: BRAND_COLORS.dark }} />
            <span className="font-bold text-gray-900 text-base whitespace-nowrap">
              Have any questions?
            </span>
            {/* Red notification badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-2 -right-2 bg-red-500 rounded-none w-4 h-4 flex items-center justify-center text-white text-xs font-bold border border-red-600"
              style={{ borderWidth: '1px' }}
            >
              1
            </motion.div>
          </motion.button>
        ) : isOpen ? (
          <motion.div
            key="chat"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{
              position: 'fixed',
              width: typeof window !== 'undefined' && window.innerWidth < 640 ? '100vw' : '500px',
              height: typeof window !== 'undefined' && window.innerWidth < 640 ? '100dvh' : '600px',
              ...(typeof window !== 'undefined' && window.innerWidth < 640
                ? { inset: 0 }
                : { bottom: 16, left: '50%', translate: '-50% 0' }),
              zIndex: 50,
              border: `2px solid ${BRAND_COLORS.dark}`,
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
              backgroundColor: 'white',
            }}
            className="flex flex-col"
            role="dialog"
            aria-label="Saad Tai Real Estate Chat Assistant"
          >
            {/* Header - Blocky style */}
            <div
              style={{
                backgroundColor: BRAND_COLORS.dark,
                borderBottom: `2px solid ${BRAND_COLORS.dark}`,
              }}
              className="text-white px-6 py-4 flex items-center justify-between flex-shrink-0"
            >
              <div>
                <h3 className="font-bold text-base">Saad Tai Assistant</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:opacity-80 p-1 transition-opacity"
                aria-label="Close chat"
              >
                <X size={20} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0 bg-white" role="log" aria-label="Chat messages">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex flex-col ${message.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    style={{
                      backgroundColor: message.sender === 'user' ? BRAND_COLORS.secondary : '#f3f4f6',
                      color: message.sender === 'user' ? BRAND_COLORS.dark : '#1f2937',
                      border: `2px solid ${message.sender === 'user' ? BRAND_COLORS.dark : '#e5e7eb'}`,
                      borderRadius: '0px',
                    }}
                    className={`max-w-[85%] sm:max-w-[70%] px-6 py-4`}
                  >
                    <p className="text-base font-medium leading-relaxed">{message.text}</p>
                  </div>
                  {/* Action Buttons */}
                  {message.actionButtons && message.actionButtons.length > 0 && (
                    <div className="flex gap-2 mt-3">
                      {message.actionButtons.map((btn, idx) => (
                        <Button
                          key={idx}
                          onClick={() => handleActionButtonClick(btn.action)}
                          variant="secondary"
                          className="hover:-translate-y-0.5 text-xs"
                        >
                          {btn.label}
                        </Button>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}

              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div style={{ backgroundColor: '#f3f4f6', border: `2px solid #e5e7eb`, borderRadius: '0px' }} className="text-gray-800 px-6 py-4 flex gap-3">
                    {[0, 1, 2].map((index) => (
                      <motion.div
                        key={index}
                        style={{
                          width: '12px',
                          height: '12px',
                        }}
                        animate={{
                          scale: [1, 1.4, 1],
                          rotateZ: [0, 180, 360],
                          backgroundColor: [
                            [BRAND_COLORS.secondary, BRAND_COLORS.dark, BRAND_COLORS.primary],
                            [BRAND_COLORS.dark, BRAND_COLORS.primary, BRAND_COLORS.secondary],
                            [BRAND_COLORS.primary, BRAND_COLORS.secondary, BRAND_COLORS.dark],
                          ][index],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.2,
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area - Blocky style */}
            <div style={{ borderTop: `2px solid ${BRAND_COLORS.dark}`, backgroundColor: BRAND_COLORS.secondary }} className="p-4 flex-shrink-0">
              <div className="relative">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault()
                      handleSendMessage()
                    }
                  }}
                  placeholder="Ask a question..."
                  style={{
                    borderColor: BRAND_COLORS.dark,
                    borderWidth: '2px',
                    borderRadius: '0px',
                  } as React.CSSProperties}
                  className="w-full px-6 py-4 pr-14 focus:outline-none text-base bg-white font-medium placeholder-gray-400"
                  disabled={isLoading}
                  aria-label="Chat message input"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={isLoading || !inputValue.trim()}
                  style={{
                    color: BRAND_COLORS.dark,
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 transition-opacity hover:opacity-70 disabled:opacity-30"
                  aria-label="Send message"
                >
                  <Send size={20} />
                </button>
              </div>
              {/* AI Disclaimer */}
              <div className="mt-2">
                <p className="text-xs text-gray-700 text-center font-medium">
                  <span className="font-bold">AI can make mistakes.</span> Speak with our team for important decisions.
                </p>
              </div>
            </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
    </>
  )
}
