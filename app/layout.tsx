import type { Metadata } from 'next'
import { Montserrat, Space_Grotesk } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-montserrat',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Heitor - Episódio I: O Primeiro Ano',
  description: 'Convite de aniversário temático Star Wars Baby do Heitor',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.variable} ${spaceGrotesk.variable}`}>{children}</body>
    </html>
  )
}
