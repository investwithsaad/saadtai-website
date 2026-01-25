import { ReactNode } from 'react'

interface CalloutProps {
  type?: 'info' | 'warning' | 'tip' | 'danger'
  title?: string
  children: ReactNode
}

const calloutStyles = {
  info: {
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    icon: '💡',
    textColor: 'text-blue-900',
  },
  warning: {
    bg: 'bg-yellow-50',
    border: 'border-yellow-200',
    icon: '⚠️',
    textColor: 'text-yellow-900',
  },
  tip: {
    bg: 'bg-green-50',
    border: 'border-green-200',
    icon: '✓',
    textColor: 'text-green-900',
  },
  danger: {
    bg: 'bg-red-50',
    border: 'border-red-200',
    icon: '❌',
    textColor: 'text-red-900',
  },
}

export function Callout({ type = 'info', title, children }: CalloutProps) {
  const styles = calloutStyles[type]

  return (
    <div className={`${styles.bg} ${styles.border} border-l-4 p-4 mb-6 rounded`}>
      <div className={`${styles.textColor}`}>
        {title && (
          <div className="flex items-center gap-2 font-semibold mb-2">
            <span>{styles.icon}</span>
            <span>{title}</span>
          </div>
        )}
        <div className="text-sm leading-relaxed">{children}</div>
      </div>
    </div>
  )
}
