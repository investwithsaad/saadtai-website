/**
 * Converts newline characters in text to spans with <br /> elements
 * This allows text with \n characters to display as multiple lines
 * Pattern: Proven and working on buying, selling, and home pages
 */
export function formatTextWithLineBreaks(text: string): React.ReactNode {
  return text.split('\n').map((line, i) => (
    <span key={i}>
      {line}
      {i < text.split('\n').length - 1 && <br />}
    </span>
  ))
}
