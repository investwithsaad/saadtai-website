import Link from 'next/link'
import { ReactNode } from 'react'

interface InternalLinkProps {
  href: string
  title?: string
  children?: ReactNode
}

export function InternalLink({ href, title, children }: InternalLinkProps) {
  // Handle both internal and external links
  const isExternal = href?.startsWith('http')

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:underline inline-flex items-center gap-1"
        title={title}
      >
        {children || title}
        <span className="text-xs">↗</span>
      </a>
    )
  }

  return (
    <Link
      href={href}
      className="text-primary hover:underline"
      title={title}
    >
      {children || title}
    </Link>
  )
}
