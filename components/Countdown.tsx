'use client'

import { useEffect, useState } from 'react'
import { DATA_EVENTO } from '@/lib/config'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
  expired: boolean
}

function calcTimeLeft(): TimeLeft {
  const diff = DATA_EVENTO.getTime() - Date.now()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
    expired: false,
  }
}

function pad(n: number) {
  return String(n).padStart(2, '0')
}

const LABELS = ['Dias', 'Horas', 'Min', 'Seg']

export default function Countdown() {
  const [time, setTime] = useState<TimeLeft | null>(null)

  useEffect(() => {
    setTime(calcTimeLeft())
    const interval = setInterval(() => setTime(calcTimeLeft()), 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="glass-card" id="countdown-section">
      {time?.expired ? (
        <h2 className="countdown-title">🚀 A aventura começou! Esperamos você!</h2>
      ) : (
        <>
          <h2 className="countdown-title">⏱️ Tempo restante para o salto espacial:</h2>
          <div className="countdown-grid">
            {([time?.days, time?.hours, time?.minutes, time?.seconds] as (number | undefined)[]).map(
              (value, i) => (
                <div key={LABELS[i]} className="countdown-item">
                  <span className="countdown-number">{value !== undefined ? pad(value) : '--'}</span>
                  <span className="countdown-label">{LABELS[i]}</span>
                </div>
              ),
            )}
          </div>
        </>
      )}
    </section>
  )
}
