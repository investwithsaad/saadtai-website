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
  
  if (!parsed) {
    return <>{text}</>
  }

  return (
    <>
      {parsed.map((part, idx) => {
        if (typeof part === 'string') {
          return part
        }
        return (
          <Link
            key={idx}
            href={part.href}
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
            {part.text}
          </Link>
        )
      })}
      <style>{`:root { --bg-color: ${COLORS.background}; }`}</style>
    </>
  )
}
