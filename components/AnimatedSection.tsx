'use client'

import { ReactNode, useEffect, useRef, useState } from 'react'

interface Props {
  children: ReactNode
  className?: string
  style?: React.CSSProperties
}

export default function AnimatedSection({ children, className = '', style }: Props) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className={`glass-card ${visible ? 'visible-card' : 'init-animate'} ${className}`}
      style={style}
    >
      {children}
    </section>
  )
}
