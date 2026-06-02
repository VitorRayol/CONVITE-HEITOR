'use client'

import { useState } from 'react'
import { CONFIG_CHAVE_PIX } from '@/lib/config'
import AnimatedSection from '@/components/AnimatedSection'

export default function GiftSuggestions() {
  const [pixCopied, setPixCopied] = useState(false)

  const copyPix = async () => {
    try {
      await navigator.clipboard.writeText(CONFIG_CHAVE_PIX)
      setPixCopied(true)
      setTimeout(() => setPixCopied(false), 2500)
    } catch {
      const el = document.createElement('textarea')
      el.value = CONFIG_CHAVE_PIX
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
      setPixCopied(true)
      setTimeout(() => setPixCopied(false), 2500)
    }
  }

  return (
    <AnimatedSection>
      <h2 className="section-title" style={{ color: 'var(--grogu-green)' }}>
        🎁 Sugestões de Mimos
      </h2>
      <p className="section-desc">
        &quot;Seu carinho já é o maior presente, mas caso deseje presentear o Heitor, seguem algumas
        sugestões:&quot;
      </p>

      <div className="gifts-container">
        <div className="gift-box">
          <span className="gift-icon">👕</span>
          <h4>Vestuário</h4>
          <p>Sugestão de tamanho: 1 a 2 anos.</p>
        </div>
        <div className="gift-box">
          <span className="gift-icon">🧸</span>
          <h4>Brinquedos</h4>
          <p>Brinquedos educativos ou pelúcias adequados para a idade.</p>
        </div>
      </div>

      <div className="pix-container">
        <h4 style={{ marginBottom: '8px', fontSize: '1.1rem', color: '#fff' }}>
          💸 Prefere facilitar com um Pix de Presente?
        </h4>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '15px' }}>
          Caso queira enviar uma contribuição direto para o cofrinho estelar do Heitor, use o botão
          abaixo para copiar a chave.
        </p>
        <button
          className="btn-galaxy"
          onClick={copyPix}
          style={
            pixCopied
              ? { padding: '12px 24px', fontSize: '0.95rem', background: '#A7C957', color: '#030712' }
              : {
                  padding: '12px 24px',
                  fontSize: '0.95rem',
                  background: '#1e293b',
                  border: '1px solid var(--primary-baby)',
                }
          }
        >
          {pixCopied ? '✓ Chave Copiada!' : '📋 Copiar Chave Pix'}
        </button>
      </div>
    </AnimatedSection>
  )
}
