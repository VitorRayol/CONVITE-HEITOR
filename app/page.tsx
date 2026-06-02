'use client'

import { useCallback, useRef, useState } from 'react'
import StarsBackground from '@/components/StarsBackground'
import IntroScreen from '@/components/IntroScreen'
import Countdown from '@/components/Countdown'
import AnimatedSection from '@/components/AnimatedSection'
import RSVPForm from '@/components/RSVPForm'
import Gallery from '@/components/Gallery'
import GiftSuggestions from '@/components/GiftSuggestions'
import { CONFIG_MAPS_URL } from '@/lib/config'

export default function Home() {
  const [introVisible, setIntroVisible] = useState(true)
  const [isHyperspace, setIsHyperspace] = useState(false)
  const [showMusicBtn, setShowMusicBtn] = useState(false)
  const [isMusicPlaying, setIsMusicPlaying] = useState(false)
  const [easterEggActive, setEasterEggActive] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const handleEnter = useCallback(() => {
    setIsHyperspace(true)

    const audio = audioRef.current
    if (audio) {
      audio.volume = 0.4
      audio.play().catch(() => {})
      setIsMusicPlaying(true)
    }
    setShowMusicBtn(true)

    setTimeout(() => {
      setIntroVisible(false)
      setIsHyperspace(false)
      setTimeout(() => {
        document.getElementById('countdown-section')?.scrollIntoView({ behavior: 'smooth' })
      }, 200)
    }, 1100)
  }, [])

  const toggleMusic = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return
    if (audio.paused) {
      audio.play()
      setIsMusicPlaying(true)
    } else {
      audio.pause()
      setIsMusicPlaying(false)
    }
  }, [])

  const handleEasterEgg = useCallback(() => {
    setEasterEggActive(true)
    setTimeout(() => setEasterEggActive(false), 4000)
  }, [])

  const openMaps = useCallback(() => window.open(CONFIG_MAPS_URL, '_blank'), [])

  const openCalendar = useCallback(() => {
    const titulo = encodeURIComponent('Aniversário do Heitor - Episódio I')
    const detalhes = encodeURIComponent('Festa temática Star Wars Baby do Primeiro Ano do Heitor!')
    const local = encodeURIComponent('Espaço Mundo Mágico')
    const dataString = '20260802T130000/20260802T180000'
    window.open(
      `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${titulo}&dates=${dataString}&details=${detalhes}&location=${local}`,
      '_blank',
    )
  }, [])

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/audio/ambient-music.mp3" type="audio/mpeg" />
      </audio>

      <StarsBackground isHyperspace={isHyperspace} />

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        id="easter-egg-grogu"
        src="/images/grogu-easter-egg.png"
        alt="Grogu Easter Egg"
        className={easterEggActive ? 'grogu-fly-animation' : ''}
      />

      {showMusicBtn && (
        <button
          id="music-floating-btn"
          aria-label="Controlar Trilha Sonora"
          onClick={toggleMusic}
        >
          {isMusicPlaying ? '🎵' : '🔇'}
        </button>
      )}

      <IntroScreen visible={introVisible} onEnter={handleEnter} />

      <div className="container">
        <header className="main-header">
          <p className="crawl-subtitle">A Força é Forte Nele</p>
          <p className="crawl-episode">Episódio I</p>
          <h1>Heitor</h1>
          <div className="baby-badge">O Primeiro Ano</div>
        </header>

        <Countdown />

        <AnimatedSection>
          <h2 className="section-title" style={{ color: 'var(--primary)' }}>
            📍 Coordenadas da Missão
          </h2>
          <p className="section-desc">
            Prepare seu caça estelar e siga as coordenadas do hiperespaço.
          </p>

          <div className="info-row">
            <div className="info-icon">📅</div>
            <div className="info-text">
              <h3>Data Espacial</h3>
              <p>02 de Agosto</p>
            </div>
          </div>
          <div className="info-row">
            <div className="info-icon">⏰</div>
            <div className="info-text">
              <h3>Horário de Início</h3>
              <p>13:00 Horas</p>
            </div>
          </div>
          <div className="info-row" style={{ borderBottom: 'none', marginBottom: '30px' }}>
            <div className="info-icon">🏰</div>
            <div className="info-text">
              <h3>Base Estelar</h3>
              <p>Espaço Mundo Mágico</p>
            </div>
          </div>

          <div className="action-buttons-group">
            <button className="btn-galaxy" onClick={openMaps}>
              🚀 Traçar Rota no Mapa
            </button>
            <button
              className="btn-galaxy"
              onClick={openCalendar}
              style={{
                background: 'transparent',
                border: '2px solid var(--primary-baby)',
                boxShadow: 'none',
              }}
            >
              📅 Agendar Missão no Calendário
            </button>
          </div>
        </AnimatedSection>

        <RSVPForm />

        <Gallery onEasterEgg={handleEasterEgg} />

        <GiftSuggestions />

        <footer>
          <p>
            Que a Força esteja com você! ✨ Aniversário do Heitor <span>•</span> 2026
          </p>
        </footer>
      </div>
    </>
  )
}
