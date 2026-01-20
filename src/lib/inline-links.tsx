import Link from 'next/link'
import { COLORS } from '@/lib/colors'

// Parse wiki-style links: [[text](url)]
export const parseInlineLinks = (text: string) => {
  const linkRegex = /\[\[([^\]]+)\]\(([^)]+)\)/g
  const parts: (string | { type: 'link'; text: string; href: string })[] = []
  let lastIndex = 0

  let match
  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index))
    }
    parts.push({
      type: 'link',
      text: match[1],
      href: match[2],
    })
    lastIndex = match.index + match[0].length
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex))
  }

  return parts.length > 0 && parts.some(p => typeof p !== 'string') ? parts : null
}

export const RenderInlineLinks = ({ text }: { text: string }) => {
  const parsed = parseInlineLinks(text)

  const renderContent = (content: string | { type: 'link'; text: string; href: string }, idx: number) => {
    if (typeof content === 'string') {
      // Handle newlines in plain text
      return content.split('\n').map((line, lineIdx) => (
        <span key={`${idx}-${lineIdx}`}>
          {line}
          {lineIdx < content.split('\n').length - 1 && <br />}
        </span>
      ))
    }
    return (
      <Link
        key={idx}
        href={content.href}
        style={{
          color: COLORS.primary,
          paddingLeft: '0.25rem',
          paddingRight: '0.25rem',
          marginLeft: '-0.25rem',
          marginRight: '-0.25rem',
          borderRadius: '0.25rem',
          transition: 'background-color 150ms ease-in-out',
        }}
        className="hover:bg-[color:var(--bg-color)]"
      >
        {content.text}
      </Link>
    )
  }

  if (!parsed) {
    // Handle newlines in text when no links are found
    return <>
      {text.split('\n').map((line, idx) => (
        <span key={idx}>
          {line}
          {idx < text.split('\n').length - 1 && <br />}
        </span>
      ))}
    </>
  }

  return (
    <>
      {parsed.map((part, idx) => renderContent(part, idx))}
      <style>{`:root { --bg-color: ${COLORS.background}; }`}</style>
    </>
  )
}
