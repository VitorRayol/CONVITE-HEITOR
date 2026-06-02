'use client'

import { useEffect, useRef, useState } from 'react'

interface Props {
  visible: boolean
  onEnter: () => void
}

export default function IntroScreen({ visible, onEnter }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoMuted, setVideoMuted] = useState(true)
  const [sliding, setSliding] = useState(false)

  useEffect(() => {
    if (!visible) {
      setSliding(true)
      videoRef.current?.pause()
    }
  }, [visible])

  const toggleVideoSound = () => {
    const video = videoRef.current
    if (!video) return
    video.muted = !video.muted
    setVideoMuted(video.muted)
  }

  return (
    <div id="intro-screen" className={sliding ? 'slide-up' : ''}>
      <button
        className="audio-control"
        onClick={toggleVideoSound}
        aria-label={videoMuted ? 'Ativar som do vídeo' : 'Silenciar vídeo'}
      >
        {videoMuted ? '🔇' : '🔊'}
      </button>

      <div className="video-container">
        <video ref={videoRef} autoPlay loop muted playsInline>
          <source src="/video/video_convite.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay" />
      </div>

      <div className="intro-content">
        <p className="intro-baby-title">Uma aventura está prestes a começar</p>
        <h2 className="intro-baby-subtitle">A Galáxia do Heitor espera por você!</h2>
        <button className="btn-galaxy" onClick={onEnter}>
          🛸 Entrar na Galáxia
        </button>
      </div>
    </div>
  )
}
