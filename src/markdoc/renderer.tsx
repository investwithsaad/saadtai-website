import React, { ReactNode } from 'react'
import { Callout } from '@/components/markdoc/Callout'
import { RelatedPosts } from '@/components/markdoc/RelatedPosts'
import { InternalLink } from '@/components/markdoc/InternalLink'

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

      // Default HTML rendering for standard tags
      const htmlElements: Record<string, any> = {
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
        h5: 'h5',
        h6: 'h6',
        p: 'p',
        a: 'a',
        strong: 'strong',
        em: 'em',
        code: 'code',
        pre: 'pre',
        blockquote: 'blockquote',
        ul: 'ul',
        ol: 'ol',
        li: 'li',
        table: 'table',
        thead: 'thead',
        tbody: 'tbody',
        tr: 'tr',
        td: 'td',
        th: 'th',
        img: 'img',
        br: 'br',
        hr: 'hr',
      }

      const Tag = htmlElements[name]
      if (Tag) {
        if (name === 'img') {
          return <Tag key={keyCounter++} {...attributes} />
        }
        return (
          <Tag key={keyCounter++} {...attributes}>
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
