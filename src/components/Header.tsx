'use client'

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { ChevronDown } from "lucide-react"
import { useState, useEffect } from "react"
import { Container, Button } from "./ui"
import { motion } from "framer-motion"
import { trackNavClick } from "@/lib/tracking"
import { COLORS } from "@/lib/colors"
import { headerNavConfig, getExpandMenuKey, type SimpleNavItem, type DropdownNavItem, type NavItem } from "@/lib/header-nav"
import { DropdownMenuItems, MobileMenuSection, HamburgerIcon } from "./header-components"

// Type guards for discriminated union
const isSimpleNavItem = (item: NavItem): item is SimpleNavItem => item.type === 'link'
const isDropdownNavItem = (item: NavItem): item is DropdownNavItem => item.type === 'dropdown'

const getIsActive = (item: DropdownNavItem, pathname: string): boolean => {
  return item.basePath === '/solutions'
    ? pathname.startsWith('/solutions')
    : pathname === item.basePath
}

interface NavItemProps {
  href: string
  label: string
  isActive?: boolean
  onAnchorClick?: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void
}

function NavItem({ href, label, isActive, onAnchorClick }: NavItemProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    trackNavClick(label, href)
    onAnchorClick?.(e, href)
  }

  return (
    <Link
      href={href}
      onClick={handleClick}
      className="text-white font-heading text-base tracking-wide uppercase transition-colors duration-200 nav-link"
      style={{ color: isActive ? COLORS.secondary : COLORS.white, '--tw-text-opacity': '1' } as any}
      onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.secondary)}
      onMouseLeave={(e) => (e.currentTarget.style.color = isActive ? COLORS.secondary : COLORS.white)}
    >
      {label}
    </Link>
  )
}

interface NavDropdownProps {
  label: string
  items: Array<{ name: string; id: string }>
  basePath: string
  onAnchorClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void
  type?: 'pages' | 'anchors'
  isActive?: boolean
}

function NavDropdown({ label, items, basePath, onAnchorClick, type = 'pages', isActive }: NavDropdownProps) {
  return (
    <div className="group relative flex items-center">
      <Link
        href={basePath}
        onClick={() => trackNavClick(label, basePath)}
        className="font-heading text-base tracking-wide uppercase transition-colors duration-200 flex items-center gap-1.5 nav-link"
        style={{ color: isActive ? COLORS.secondary : COLORS.white }}
        onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.secondary)}
        onMouseLeave={(e) => (e.currentTarget.style.color = isActive ? COLORS.secondary : COLORS.white)}
      >
        {label} <ChevronDown size={16} />
      </Link>

      {/* Dropdown Menu */}
      <div className="absolute top-full left-1/2 -translate-x-1/2 w-96 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden mt-6" style={{ backgroundColor: COLORS.dark }}>
        <div className="py-2 flex flex-col">
          <DropdownMenuItems items={items} basePath={basePath} label={label} type={type} onAnchorClick={onAnchorClick} />
        </div>
      </div>
    </div>
  )
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    // Initialize scroll state immediately to prevent layout shift
    setIsScrolled(window.scrollY > 10)

    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 10)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Only handle same-page anchor links
    if (!href.startsWith('#')) {
      const currentPath = href.split('#')[0]
      if (currentPath !== pathname && currentPath !== '') {
        return // Let normal navigation happen (don't prevent default)
      }
    }

    const anchorId = href.includes('#') ? href.split('#')[1] : null
    if (!anchorId) return

    e.preventDefault()

    // Close mobile menu if open
    setIsMenuOpen(false)
    setExpandedMenu(null)

    // Find the element and scroll to it with a small delay for DOM updates
    setTimeout(() => {
      const element = document.getElementById(anchorId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 50)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-lg" style={{ backgroundColor: COLORS.dark }} suppressHydrationWarning>
      <Container>
        {/* Header Layout - Logo and Nav row */}
        <div className="relative flex items-center justify-between gap-8 py-5">
          {/* Logo - Left */}
          <Link href="/" className="flex items-center gap-2 transition-transform duration-300 flex-shrink-0 hover:opacity-80 nav-link">
            <Image
              src="/logo.png"
              alt="Invest with Saad - Multifamily Real Estate Investment Advisor"
              className="w-auto h-10 rounded-full"
              width={60}
              height={60}
              priority
            />
          </Link>

          {/* Center Nav - Hidden on small screens, flex-1 to center it */}
          <nav className="hidden lg:flex items-center space-x-12 flex-1 justify-center">
            {headerNavConfig.items.map((item) => {
              if (isSimpleNavItem(item)) {
                return (
                  <NavItem
                    key={item.label}
                    href={item.href}
                    label={item.label}
                    isActive={pathname === item.href}
                    onAnchorClick={handleAnchorClick}
                  />
                )
              }

              if (isDropdownNavItem(item)) {
                return (
                  <NavDropdown
                    key={item.label}
                    label={item.label}
                    basePath={item.basePath}
                    items={item.items}
                    isActive={getIsActive(item, pathname)}
                    onAnchorClick={handleAnchorClick}
                    type={item.itemType || 'pages'}
                  />
                )
              }
            })}
          </nav>

          {/* Right side: Intro Call Button and Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Intro Call Button */}
            <Button asChild variant="secondary">
              <a
                href="https://calendly.com/stai2795/meeting-w-saad?month=2026-02"
                onClick={() => trackNavClick('Intro Call', 'https://calendly.com/stai2795/meeting-w-saad?month=2026-02')}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm font-heading uppercase tracking-wide nav-link"
              >
                Intro Call
              </a>
            </Button>

            {/* Mobile Menu Button - Animated */}
            <div className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <HamburgerIcon isOpen={isMenuOpen} />
            </div>
          </div>
        </div>

        {/* Mobile Menu - Inside header */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden border-t"
            style={{ borderColor: COLORS.primary }}
          >
            {/* Navigation Links */}
            <div className="space-y-0 px-4 py-4" style={{ backgroundColor: COLORS.dark }}>
              {headerNavConfig.items.map((item) => {
                const closeMenu = () => {
                  setIsMenuOpen(false)
                  setExpandedMenu(null)
                }

                if (isSimpleNavItem(item)) {
                  const isActiveMobile = pathname === item.href
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => {
                        trackNavClick(item.label, item.href)
                        closeMenu()
                      }}
                      className="block text-base font-heading uppercase py-3 border-b text-white transition-colors nav-link"
                      style={{ borderColor: COLORS.primary, color: isActiveMobile ? COLORS.secondary : COLORS.white }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.secondary)}
                      onMouseLeave={(e) => (e.currentTarget.style.color = isActiveMobile ? COLORS.secondary : COLORS.white)}
                    >
                      {item.label}
                    </Link>
                  )
                }

                if (isDropdownNavItem(item)) {
                  const expandKey = getExpandMenuKey(item.label)

                  return (
                    <MobileMenuSection
                      key={item.label}
                      label={item.label}
                      basePath={item.basePath}
                      items={item.items}
                      type={item.itemType || 'pages'}
                      isExpanded={expandedMenu === expandKey}
                      onToggle={() => setExpandedMenu(expandedMenu === expandKey ? null : expandKey)}
                      onClose={closeMenu}
                      onAnchorClick={handleAnchorClick}
                    />
                  )
                }
              })}
            </div>
        </motion.div>
        )}
      </Container>
    </header>
  )
}
