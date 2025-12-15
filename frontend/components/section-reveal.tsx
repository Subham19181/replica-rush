"use client"

import * as React from "react"

type SectionRevealProps = {
  children: React.ReactNode
  className?: string
}

export function SectionReveal({ children, className }: SectionRevealProps) {
  const ref = React.useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.15,
      }
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div
      ref={ref}
      className={`section-reveal ${isVisible ? "section-reveal--visible" : ""} ${className ?? ""}`.trim()}
    >
      {children}
    </div>
  )
}
