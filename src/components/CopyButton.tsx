import { useState } from 'react'

type CopyButtonProps = {
  text: string
  label?: string
}

export function CopyButton({ text, label = '复制模板' }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1600)
    } catch {
      setCopied(false)
    }
  }

  return (
    <button
      type="button"
      className={`copy-btn${copied ? ' copied' : ''}`}
      onClick={handleCopy}
    >
      {copied ? '已复制' : label}
    </button>
  )
}
