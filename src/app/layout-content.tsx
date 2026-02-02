'use client'

import { usePathname } from "next/navigation"
import dynamic from "next/dynamic"
import { useState, useEffect } from "react"
import { Header } from "@/components/Header"
import { Footer } from "@/components/footer/Footer"
import { LeadFormModal } from "@/components/LeadFormModal"
import { ScrollToTop } from "@/components/ScrollToTop"
import { MetaParamBuilderInit } from "@/components/MetaParamBuilderInit"
import { PageViewTracker } from "@/components/PageViewTracker"
import { EnhancedMeasurement } from "@/components/EnhancedMeasurement"

const Chatbot = dynamic(() => import("@/components/Chatbot").then(mod => ({ default: mod.Chatbot })), {
  loading: () => null,
})

interface LayoutContentProps {
  children: React.ReactNode
  recentPosts: Array<{ id: string; title: string }>
  allGuides: Array<{ id: string; title: string }>
}

export function LayoutContent({
  children,
  recentPosts,
  allGuides,
}: LayoutContentProps) {
  const pathname = usePathname()
  const isLandingPage = pathname === '/landing'
  const [isFormModalOpen, setIsFormModalOpen] = useState(false)
  const [chatbotContext, setChatbotContext] = useState('')

  // Listen for chatbot form modal event
  useEffect(() => {
    const handleOpenChatFormModal = (event: Event) => {
      const customEvent = event as CustomEvent
      setChatbotContext(customEvent.detail?.context || '')
      setIsFormModalOpen(true)
    }

    window.addEventListener('openChatFormModal', handleOpenChatFormModal)
    return () => window.removeEventListener('openChatFormModal', handleOpenChatFormModal)
  }, [])

  return (
    <>
      <MetaParamBuilderInit />
      <PageViewTracker />
      <EnhancedMeasurement />
      {!isLandingPage && <ScrollToTop />}
      {!isLandingPage && <Header />}
      <main className={`flex-grow ${!isLandingPage ? 'pt-20' : ''}`}>
        {children}
      </main>
      {!isLandingPage && <Footer recentPosts={recentPosts} allGuides={allGuides} />}
      {!isLandingPage && <Chatbot />}
      <LeadFormModal
        isOpen={isFormModalOpen}
        onClose={() => setIsFormModalOpen(false)}
        prefillComments={chatbotContext}
      />
    </>
  )
}
