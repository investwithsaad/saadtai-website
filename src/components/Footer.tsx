"use client"

import Link from "next/link"
import Image from "next/image"
import { Container, Text, Button, Heading } from "./ui"
import { ChevronUp } from "lucide-react"
import { useState } from "react"
import { COLORS } from "@/lib/colors"
import { LeadFormModal } from "./LeadFormModal"
import { trackEvent } from "@/lib/tracking"

export function Footer() {
  const [isHoveringBadge, setIsHoveringBadge] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="text-white font-sans" style={{ backgroundColor: COLORS.primary }} suppressHydrationWarning>
      <Container>
        {/* Main Footer Content */}
        <div className="pt-16">
          {/* License Badge */}
          <div className="flex justify-center py-8 mb-12">
            <div
              className="relative p-4"
              onMouseEnter={() => setIsHoveringBadge(true)}
              onMouseLeave={() => setIsHoveringBadge(false)}
            >
              <Image
                src="/saadlicenced image.png"
                alt="Saad Licenced Badge"
                width={750}
                height={550}
                className="h-auto cursor-pointer transition-all"
                style={isHoveringBadge ? { filter: 'blur(2px)' } : {}}
              />

              {isHoveringBadge && (
                <div className="absolute inset-0 flex items-center justify-center gap-6 p-4 rounded animate-fadeIn">
                  <Button
                    variant="secondary"
                    onClick={() => {
                      trackEvent('cta_clicked', { location: 'footer_badge', label: 'Contact Us' })
                      setIsModalOpen(true)
                    }}
                  >
                    Contact
                  </Button>
                  <a href="mailto:saadtherealtor1@gmail.com">
                    <Button variant="secondary">
                      Email
                    </Button>
                  </a>
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Logo and Social Icons */}
            <div className="flex flex-col items-start gap-6">
              <Image
                src="/real.png"
                alt="Real Estate Logo"
                width={120}
                height={60}
                className="h-auto"
              />
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61577367974508"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit us on Facebook"
                  className="transition-colors"
                  style={{ color: COLORS.white }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.secondary)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = COLORS.white)}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/saadtherealtor/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit us on Instagram"
                  className="transition-colors"
                  style={{ color: COLORS.white }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.secondary)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = COLORS.white)}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.914 4.914 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* CONTACT */}
            <div>
              <Heading size="h4" color="white" className="mb-6">CONTACT</Heading>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773c.423 1.157 1.03 2.268 1.87 3.109.84.84 1.952 1.447 3.109 1.87l.773-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                  <a
                    href="tel:+15186679351"
                    className="transition-colors"
                    style={{ color: COLORS.white }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.secondary)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = COLORS.white)}
                  >
                    (518) 667-9351
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  <a
                    href="mailto:saadtherealtor1@gmail.com"
                    className="transition-colors"
                    style={{ color: COLORS.white }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.secondary)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = COLORS.white)}
                  >
                    saadtherealtor1@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* LINKS */}
            <div>
              <Heading size="h4" color="white" className="mb-6">LINKS</Heading>
              <div className="space-y-3">
                <Link
                  href="/"
                  className="block transition-colors"
                  style={{ color: COLORS.white }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.secondary)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = COLORS.white)}
                >
                  Home
                </Link>
                <Link
                  href="/buying"
                  className="block transition-colors"
                  style={{ color: COLORS.white }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.secondary)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = COLORS.white)}
                >
                  For Buyers
                </Link>
                <Link
                  href="/selling"
                  className="block transition-colors"
                  style={{ color: COLORS.white }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.secondary)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = COLORS.white)}
                >
                  For Sellers
                </Link>
              </div>
            </div>

            {/* MORE INFO */}
            <div>
              <Heading size="h4" color="white" className="mb-6">MORE INFO</Heading>
              <div className="space-y-3">
                <Link
                  href="/calculator"
                  className="block transition-colors"
                  style={{ color: COLORS.white }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.secondary)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = COLORS.white)}
                >
                  Calculator
                </Link>
                <Link
                  href="/faq"
                  className="block transition-colors"
                  style={{ color: COLORS.white }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.secondary)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = COLORS.white)}
                >
                  FAQ
                </Link>
                <Link
                  href="/privacy-policy"
                  className="block transition-colors"
                  style={{ color: COLORS.white }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.secondary)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = COLORS.white)}
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-6">
            {/* Left: Copyright */}
            <div className="flex-1">
              <Text size="sm" color="white">
                Copyright © 2026 Saad Tai | <Link href="/privacy-policy" className="transition-colors" style={{ color: COLORS.white }} onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.secondary)} onMouseLeave={(e) => (e.currentTarget.style.color = COLORS.white)}>Privacy Policy</Link>
              </Text>
            </div>

            {/* Center: Logo */}
            <div className="flex justify-center flex-1">
              <Image
                src="/footersmallimg.png"
                alt="Footer Logo"
                width={40}
                height={40}
                className="h-auto"
              />
            </div>

            {/* Right: Scroll to Top */}
            <div className="flex-1 flex justify-end">
              <button
                onClick={scrollToTop}
                aria-label="Scroll to top"
                className="w-8 h-8 rounded-full border flex items-center justify-center transition-all"
                style={{ borderColor: COLORS.white, color: COLORS.white }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = COLORS.secondary
                  e.currentTarget.style.color = COLORS.secondary
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = COLORS.white
                  e.currentTarget.style.color = COLORS.white
                }}
              >
                <ChevronUp size={16} />
              </button>
            </div>
          </div>
        </div>
      </Container>

      {/* Lead Form Modal */}
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </footer>
  )
}
