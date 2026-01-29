/**
 * Converts newline characters in text to spans with <br /> elements
 * Also handles [highlighted text] formatting for emphasis
 * This allows text with \n characters to display as multiple lines
 * Pattern: Proven and working on buying, selling, and home pages
 */
export function formatTextWithLineBreaks(text: string): React.ReactNode {
  const lines = text.split('\n')
  
  return lines.map((line, i) => {
    // Handle [text] highlighting
    const parts = line.split(/(\[[^\]]+\])/g)
    
    return (
      <span key={i}>
        {parts.map((part, idx) => {
          if (part.startsWith('[') && part.endsWith(']')) {
            // Remove brackets and wrap in styled span
            const highlighted = part.slice(1, -1)
            return (
              <span 
                key={idx}
                style={{ 
                  display: 'inline-block',
                  backgroundColor: '#f4b86e',
                  color: '#000',
                  padding: '2px 8px',
                  borderRadius: '4px'
                }}
              >
                {highlighted}
              </span>
            )
          }
          return part
        })}
        {i < lines.length - 1 && <br />}
      </span>
    )
  })
}
