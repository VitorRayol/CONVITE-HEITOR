'use client'

import { useRef } from 'react'
import AnimatedSection from '@/components/AnimatedSection'

const CHARACTERS = [
  { src: '/images/GROGU.jfif', alt: 'Baby Grogu', tag: 'Baby Grogu 💚', id: 'grogu' },
  { src: '/images/DARTH.jfif', alt: 'Baby Vader', tag: 'Little Vader', id: 'darth' },
  { src: '/images/LUKE.jfif', alt: 'Baby Luke', tag: 'Luke Baby', id: 'luke' },
  { src: '/images/LEIA.jfif', alt: 'Princesa Leia', tag: 'Baby Leia', id: 'leia' },
  { src: '/images/CHEWE.jfif', alt: 'Chewbacca Baby', tag: 'Chewie Baby', id: 'chewe' },
  { src: '/images/OUTROS.jfif', alt: 'Estrelas', tag: 'E muito mais...', id: 'outros' },
]

interface Props {
  onEasterEgg: () => void
}

export default function Gallery({ onEasterEgg }: Props) {
  const groguClicks = useRef(0)

  const handleGroguClick = () => {
    groguClicks.current++
    if (groguClicks.current === 3) {
      onEasterEgg()
      groguClicks.current = 0
    }
  }

  return (
    <AnimatedSection>
      <h2 className="section-title">✨ A Tripulação Baby</h2>
      <p className="section-desc">
        Clique nos membros da tripulação para inspecioná-los (Dica: o Baby Grogu esconde um
        segredo!).
      </p>

      <div className="gallery-grid">
        {CHARACTERS.map((char) => (
          <div
            key={char.id}
            className="gallery-item"
            onClick={char.id === 'grogu' ? handleGroguClick : undefined}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={char.src} alt={char.alt} />
            <div className="gallery-tag">{char.tag}</div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  )
}
