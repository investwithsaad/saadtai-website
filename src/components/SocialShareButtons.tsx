'use client'

import { Check, Facebook, Link, Linkedin, Mail } from 'lucide-react'
import { ReactNode, useState } from 'react'
import { COLORS } from '@/lib/colors'

const XIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 300 271" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <path d="m236 0h46l-101 115 118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123-113-148h94.9l65.5 86.6zm-16.1 244h25.5l-165-218h-27.4z"/>
  </svg>
)

interface SocialShareButtonsProps {
  title: string
  excerpt: string
  url: string
}

export function SocialShareButtons({ title, excerpt, url }: SocialShareButtonsProps) {
  const [copied, setCopied] = useState(false)

  const shareLinks = {
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(excerpt)}&source=Saad%20Tai%20Realtor`,
    facebook: `https://facebook.com/sharer.php?u=${encodeURIComponent(url)}`,
    x: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(`${title} - Read more on Saad Tai Real Estate blog`)}`,
    email: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`Check out this article: ${title}\n\n${excerpt}\n\nRead full article: ${url}`)}`
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const openShareWindow = (shareUrl: string) => {
    if (shareUrl.startsWith('mailto:')) {
      window.location.href = shareUrl
    } else {
      window.open(shareUrl, 'share', 'width=600,height=400')
    }
  }

  const ShareButton = ({ icon, title: buttonTitle, shareUrl }: { icon: ReactNode; title: string; shareUrl: string }) => (
    <button
      onClick={() => openShareWindow(shareUrl)}
      title={buttonTitle}
      className="p-2 rounded transition-colors"
      style={{ color: COLORS.primary }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = COLORS.background)}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
      aria-label={buttonTitle}
    >
      {icon}
    </button>
  )

  return (
    <div className="max-w-3xl mx-auto mt-12 pt-8 border-t border-gray-200">
      <div className="flex items-center gap-4 py-6">
        <span className="text-sm">Share</span>
        <div className="flex items-center gap-3">
          <ShareButton icon={<Linkedin size={20} />} title="Share on LinkedIn" shareUrl={shareLinks.linkedin} />
          <ShareButton icon={<Facebook size={20} />} title="Share on Facebook" shareUrl={shareLinks.facebook} />
          <ShareButton icon={<XIcon size={20} />} title="Share on X" shareUrl={shareLinks.x} />
          <ShareButton icon={<Mail size={20} />} title="Share via Email" shareUrl={shareLinks.email} />
          <button
            onClick={handleCopyLink}
            title={copied ? 'Copied!' : 'Copy link to clipboard'}
            className="p-2 rounded transition-colors"
            style={{ color: COLORS.primary }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = COLORS.background)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            aria-label="Copy link to clipboard"
          >
            {copied ? <Check size={20} /> : <Link size={20} />}
          </button>
        </div>
      </div>
    </div>
  )
}
