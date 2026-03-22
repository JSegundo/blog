"use client"

import { useEffect, useRef } from "react"

type Props = {
  children: React.ReactNode
  className?: string
}

export default function ScrollReveal({ children, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    if (prefersReduced) {
      el.classList.remove("reveal-hidden")
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove("reveal-hidden")
          el.classList.add("reveal-visible")
          observer.unobserve(el)
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`reveal-hidden ${className}`}>
      {children}
    </div>
  )
}
