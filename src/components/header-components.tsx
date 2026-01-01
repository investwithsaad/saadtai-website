'use client'

import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { motion } from "framer-motion"
import { COLORS } from "@/lib/colors"
import { trackNavClick } from "@/lib/tracking"
import type { DropdownItem } from "@/lib/header-nav"

interface NavItemRendererProps {
  item: DropdownItem
  href: string
  label: string
  type?: 'pages' | 'anchors'
  className: string
  hoverColor?: string
  onAnchorClick?: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void
  onClose?: () => void
}

/**
 * Renders a navigation item as either an anchor link or Next.js Link
 * Consolidates the logic for handling both item types
 */
function NavItemRenderer({
  item,
  href,
  label,
  type = 'pages',
  className,
  hoverColor,
  onAnchorClick,
  onClose
}: NavItemRendererProps) {
  const isAnchorBased = type === 'anchors'
  const isExternalUrl = href.startsWith('http://') || href.startsWith('https://')
  const trackingLabel = `${label} - ${item.name}`

  const handleClick = () => {
    trackNavClick(trackingLabel, href)
    onClose?.()
  }

  const handleHoverEnter = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.backgroundColor = COLORS.dark
  }

  const handleHoverLeave = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.backgroundColor = 'transparent'
  }

  if (isAnchorBased || isExternalUrl) {
    return (
      <a
        key={item.id}
        href={href}
        onClick={(e) => {
          handleClick()
          onAnchorClick?.(e, href)
        }}
        className={className}
        onMouseEnter={handleHoverEnter}
        onMouseLeave={handleHoverLeave}
        style={{ borderColor: COLORS.primary }}
        target={isExternalUrl ? '_blank' : undefined}
        rel={isExternalUrl ? 'noopener noreferrer' : undefined}
      >
        {item.name}
      </a>
    )
  }

  return (
    <Link
      key={item.id}
      href={href}
      onClick={handleClick}
      className={className}
      onMouseEnter={handleHoverEnter}
      onMouseLeave={handleHoverLeave}
      style={{ borderColor: COLORS.primary }}
    >
      {item.name}
    </Link>
  )
}

interface DropdownMenuItemsProps {
  items: DropdownItem[]
  basePath: string
  label: string
  type?: 'pages' | 'anchors'
  onAnchorClick?: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void
}

const dropdownItemClasses = "block px-6 py-3.5 text-white transition-colors text-base font-medium border-b border-white/10 last:border-0 cursor-pointer"

export function DropdownMenuItems({ items, basePath, label, type = 'pages', onAnchorClick }: DropdownMenuItemsProps) {
  const isAnchorBased = type === 'anchors'

  return (
    <>
      {items.map((item) => {
        // If item.id is an external URL, use it as-is
        // If item.id starts with '/', treat it as an absolute path
        const isExternal = item.id.startsWith('http://') || item.id.startsWith('https://')
        const href = isExternal
          ? item.id
          : isAnchorBased
            ? `${basePath}#${item.id}`
            : item.id.startsWith('/')
              ? item.id
              : `${basePath}/${item.id}`

        return (
          <NavItemRenderer
            key={item.id}
            item={item}
            href={href}
            label={label}
            type={type}
            className={dropdownItemClasses}
            hoverColor={COLORS.secondary}
            onAnchorClick={onAnchorClick}
          />
        )
      })}
    </>
  )
}

interface MobileMenuSectionProps {
  label: string
  basePath: string
  items: DropdownItem[]
  type?: 'pages' | 'anchors'
  isExpanded: boolean
  onToggle: () => void
  onClose?: () => void
  onAnchorClick?: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void
}

const mobileMenuItemClasses = "block text-base font-heading uppercase py-3 border-b text-white pl-6 transition-colors"

export function MobileMenuSection({ label, basePath, items, type = 'pages', isExpanded, onToggle, onClose, onAnchorClick }: MobileMenuSectionProps) {
  const handleLinkClick = () => {
    trackNavClick(label, basePath)
    onClose?.()
  }

  return (
    <div className="border-b" style={{ borderColor: COLORS.primary }}>
      <div className="w-full flex items-center justify-between text-base font-heading uppercase py-3 text-white">
        <Link
          href={basePath}
          onClick={handleLinkClick}
          className="flex-1 text-white transition-colors"
          style={{ color: COLORS.white }}
          onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.secondary)}
          onMouseLeave={(e) => (e.currentTarget.style.color = COLORS.white)}
        >
          {label}
        </Link>
        <button
          onClick={onToggle}
          className="px-3 py-1 -my-1 flex items-center"
          aria-label={`Toggle ${label} menu`}
        >
          <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
            <ChevronDown size={20} />
          </motion.div>
        </button>
      </div>
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="space-y-0">
            {items.map((item) => {
              const isExternal = item.id.startsWith('http://') || item.id.startsWith('https://')
              const href = isExternal
                ? item.id
                : type === 'anchors'
                  ? `${basePath}#${item.id}`
                  : item.id.startsWith('/')
                    ? item.id
                    : `${basePath}/${item.id}`

              return (
                <NavItemRenderer
                  key={item.id}
                  item={item}
                  href={href}
                  label={label}
                  type={type}
                  className={mobileMenuItemClasses}
                  onClose={onClose}
                  onAnchorClick={onAnchorClick}
                />
              )
            })}
          </div>
        </motion.div>
      )}
    </div>
  )
}

interface HamburgerIconProps {
  isOpen: boolean
}

export function HamburgerIcon({ isOpen }: HamburgerIconProps) {
  return (
    <button className="text-white w-6 h-6 flex flex-col justify-center gap-1.5 relative" aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}>
      <span
        className={`block w-6 h-0.5 bg-white origin-center transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
      />
      <span
        className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}
      />
      <span
        className={`block w-6 h-0.5 bg-white origin-center transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
      />
    </button>
  )
}
