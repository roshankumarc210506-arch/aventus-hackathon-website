import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'AVENTUS 2026 — National Hackathon | DSCE Bangalore',
  description:
    'AVENTUS is the flagship national-level hackathon hosted by Dayananda Sagar College of Engineering, Bangalore. 36 hours of building, innovation, and code. Register now.',
  keywords: ['AVENTUS', 'hackathon', 'DSCE', 'Dayananda Sagar', 'Bangalore', 'coding', 'innovation'],
  generator: 'v0.app',
  openGraph: {
    title: 'AVENTUS 2026 — National Hackathon',
    description: '36 hours of building the future. Hosted by DSCE Bangalore.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0e1a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
