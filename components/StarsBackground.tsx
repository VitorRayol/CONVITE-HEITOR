'use client'

import { useEffect, useRef } from 'react'

export default function StarsBackground({ isHyperspace }: { isHyperspace: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    const container = containerRef.current
    if (!container) return

    const starsCount = window.innerWidth < 768 ? 60 : 130
    const fragment = document.createDocumentFragment()

    for (let i = 0; i < starsCount; i++) {
      const star = document.createElement('div')
      star.className = 'star'
      const size = Math.random() * 2.5 + 0.5
      star.style.width = `${size}px`
      star.style.height = `${size}px`
      star.style.top = `${Math.random() * 100}vh`
      star.style.left = `${Math.random() * 100}vw`
      star.style.animationDuration = `${Math.random() * 3 + 2}s`
      star.style.animationDelay = `${Math.random() * 5}s`
      fragment.appendChild(star)
    }

    container.appendChild(fragment)
  }, [])

  return (
    <div
      ref={containerRef}
      id="stars-container"
      className={isHyperspace ? 'hyperspace' : undefined}
    />
  )
}
