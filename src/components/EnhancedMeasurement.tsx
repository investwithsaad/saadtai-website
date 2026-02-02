'use client'

import { useEffect } from 'react'
import { trackEvent } from '@/lib/tracking'

/**
 * EnhancedMeasurement
 * Automatically tracks:
 * - file_download: PDF, XLSX, DOCX, ZIP downloads
 * - outbound_click: Clicks to external domains
 * - email_click: mailto: links
 * - phone_click: tel: links
 */
export function EnhancedMeasurement() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a')
      if (!target || !target.href) return

      const href = target.href.toLowerCase()
      const text = target.textContent?.trim() || target.title || 'unknown'

      // Track file downloads
      const fileExtensions = ['.pdf', '.xlsx', '.xls', '.docx', '.doc', '.zip', '.csv', '.ppt', '.pptx']
      const isFileDownload = fileExtensions.some((ext) => href.includes(ext))

      if (isFileDownload) {
        const filename = href.split('/').pop() || 'download'
        const extension = filename.split('.').pop() || 'unknown'

        trackEvent('file_download', {
          filename,
          file_extension: extension,
          link_text: text,
          link_url: href,
        })
        return
      }

      // Track email clicks
      if (href.startsWith('mailto:')) {
        const email = href.replace('mailto:', '').split('?')[0]

        trackEvent('email_click', {
          email,
          link_text: text,
        })
        return
      }

      // Track phone clicks
      if (href.startsWith('tel:')) {
        const phone = href.replace('tel:', '')

        trackEvent('phone_click', {
          phone_number: phone,
          link_text: text,
        })
        return
      }

      // Track outbound clicks (external domain)
      try {
        const currentHostname = window.location.hostname
        const linkHostname = new URL(href).hostname

        if (linkHostname !== currentHostname && !href.startsWith('javascript:') && !href.startsWith('#')) {
          trackEvent('outbound_click', {
            link_domain: linkHostname,
            link_text: text,
            link_url: href,
          })
        }
      } catch (error) {
        // Invalid URL - skip tracking
      }
    }

    // Add click listener with capture phase for reliability
    document.addEventListener('click', handleClick, true)

    return () => {
      document.removeEventListener('click', handleClick, true)
    }
  }, [])

  return null
}
