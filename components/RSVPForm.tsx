'use client'

import { FormEvent, useState } from 'react'
import { CONFIG_WHATSAPP_NUMERO } from '@/lib/config'
import AnimatedSection from '@/components/AnimatedSection'

export default function RSVPForm() {
  const [name, setName] = useState('')
  const [adults, setAdults] = useState(1)
  const [kids, setKids] = useState(0)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const msg = `Olá! Confirmo presença no aniversário do Heitor.\n\n👤 *Nome:* ${name}\n👨‍👩‍👦 *Adultos:* ${adults}\n👶 *Crianças:* ${kids}`
    window.open(
      `https://api.whatsapp.com/send?phone=${CONFIG_WHATSAPP_NUMERO}&text=${encodeURIComponent(msg)}`,
      '_blank',
    )
  }

  return (
    <AnimatedSection>
      <h2 className="section-title" style={{ color: 'var(--primary-baby)' }}>
        Enviar Relatório de Presença
      </h2>
      <p className="section-desc">
        Confirme sua presença para calcularmos o estoque de coaxium da tripulação.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="guest-name">Nome do Convidado / Família</label>
          <input
            type="text"
            id="guest-name"
            className="form-control"
            placeholder="Ex: João Silva e Família"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-row-grid">
          <div className="form-group">
            <label htmlFor="adults-count">Quantidade de Adultos</label>
            <input
              type="number"
              id="adults-count"
              className="form-control"
              min={1}
              value={adults}
              onChange={(e) => setAdults(Number(e.target.value))}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="kids-count">Quantidade de Crianças</label>
            <input
              type="number"
              id="kids-count"
              className="form-control"
              min={0}
              value={kids}
              onChange={(e) => setKids(Number(e.target.value))}
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="btn-galaxy"
          style={{
            width: '100%',
            background: 'linear-gradient(135deg, #4CC9F0, #A7C957)',
            color: '#030712',
            marginTop: '15px',
          }}
        >
          ✅ Confirmar Presença via WhatsApp
        </button>
      </form>
    </AnimatedSection>
  )
}
