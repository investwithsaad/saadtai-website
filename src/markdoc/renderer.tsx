import React, { ReactNode } from 'react'
import dynamic from 'next/dynamic'
import { Callout } from '@/components/markdoc/Callout'
import { InternalLink } from '@/components/markdoc/InternalLink'

// Lazy load RelatedPosts to improve performance
const RelatedPosts = dynamic(() => import('@/components/markdoc/RelatedPosts').then(mod => ({ default: mod.RelatedPosts })), {
  loading: () => null,
  ssr: true
})

const componentMap: Record<string, any> = {
  callout: Callout,
  relatedPosts: RelatedPosts,
  link: InternalLink,
}

let keyCounter = 0

export function renderMarkdoc(content: any): ReactNode {
  if (content === null || content === undefined) {
    return null
  }

  if (typeof content === 'string') {
    return content
  }

  if (Array.isArray(content)) {
    return content.map((item) => (
      <React.Fragment key={keyCounter++}>{renderMarkdoc(item)}</React.Fragment>
    ))
  }

  if (typeof content === 'object') {
    const { name, attributes = {}, children } = content

    // Handle custom tags
    if (name && typeof name === 'string') {
      const Component = componentMap[name]
      if (Component) {
        return (
          <Component key={keyCounter++} {...attributes}>
            {renderMarkdoc(children)}
          </Component>
        )
      }

      // Heading styles
      const headingClasses = {
        h1: 'text-4xl font-bold text-gray-900 mt-8 mb-4',
        h2: 'text-2xl font-bold text-gray-900 mt-8 mb-4',
        h3: 'text-xl font-bold text-gray-900 mt-6 mb-3',
        h4: 'text-lg font-semibold text-gray-900 mt-4 mb-2',
        h5: 'text-base font-semibold text-gray-900 mt-4 mb-2',
        h6: 'text-sm font-semibold text-gray-900 mt-4 mb-2',
      }

      // Render headings with proper styling
      if (name in headingClasses) {
        const Tag = name as keyof typeof headingClasses
        return (
          <Tag key={keyCounter++} className={headingClasses[Tag]}>
            {renderMarkdoc(children)}
          </Tag>
        )
      }

      // Other element styles
      const elementConfig: Record<string, { tag: string; className?: string }> = {
        p: { tag: 'p', className: 'text-gray-700 mb-4 leading-relaxed' },
        a: { tag: 'a', className: 'text-blue-600 hover:text-blue-800 underline' },
        strong: { tag: 'strong', className: 'font-semibold text-gray-900' },
        em: { tag: 'em', className: 'italic text-gray-700' },
        code: { tag: 'code', className: 'bg-gray-100 text-gray-900 px-2 py-1 rounded text-sm font-mono' },
        pre: { tag: 'pre', className: 'bg-gray-800 text-gray-100 p-4 rounded overflow-x-auto mb-4' },
        blockquote: { tag: 'blockquote', className: 'border-l-4 border-gray-300 pl-4 py-2 text-gray-600 italic mb-4' },
        ul: { tag: 'ul', className: 'list-disc list-inside text-gray-700 space-y-2 mb-4 ml-2' },
        ol: { tag: 'ol', className: 'list-decimal list-inside text-gray-700 space-y-2 mb-4 ml-2' },
        li: { tag: 'li', className: 'text-gray-700' },
        hr: { tag: 'hr', className: 'border-t border-gray-300 my-6' },
        table: { tag: 'table', className: 'w-full border-collapse mb-4' },
        thead: { tag: 'thead', className: 'bg-gray-100' },
        tbody: { tag: 'tbody', className: '' },
        tr: { tag: 'tr', className: 'border-b border-gray-300' },
        td: { tag: 'td', className: 'px-4 py-2 text-gray-700' },
        th: { tag: 'th', className: 'px-4 py-2 text-left font-semibold text-gray-900' },
        img: { tag: 'img', className: 'max-w-full h-auto rounded mb-4' },
        br: { tag: 'br', className: '' },
      }

      const config = elementConfig[name]
      if (config) {
        const Tag = config.tag as any
        if (name === 'img' || name === 'br') {
          return <Tag key={keyCounter++} className={config.className} {...attributes} />
        }
        // Wrap tables in a scrollable container for mobile responsiveness
        if (name === 'table') {
          return (
            <div key={keyCounter++} className='overflow-x-auto mb-4'>
              <Tag className={config.className} {...attributes}>
                {renderMarkdoc(children)}
              </Tag>
            </div>
          )
        }
        return (
          <Tag key={keyCounter++} className={config.className} {...attributes}>
            {renderMarkdoc(children)}
          </Tag>
        )
      }
    }

    // Fallback for unknown objects - try to render children
    if (children) {
      return renderMarkdoc(children)
    }
  }

  return content
}
