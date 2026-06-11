import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Aurea Global Network | Empowering Women & Youth Worldwide',
    template: '%s | Aurea Global Network',
  },
  description: 'Aurea Global Network (AGN) is a youth organization focused on financial literacy, economic empowerment, leadership, and education for women and girls worldwide.',
  keywords: ['financial literacy', 'women empowerment', 'youth organization', 'leadership', 'education', 'global network', 'women and girls'],
  authors: [{ name: 'Kaia Roy', url: 'https://aureaglobalnetwork.org' }],
  creator: 'Aurea Global Network',
  publisher: 'Aurea Global Network',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aureaglobalnetwork.org',
    siteName: 'Aurea Global Network',
    title: 'Aurea Global Network | Empowering Women & Youth Worldwide',
    description: 'Financial literacy, economic empowerment, leadership, and education for women and girls worldwide.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aurea Global Network',
    description: 'Empowering women and girls through financial literacy and leadership education.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f5f3ef' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1714' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} bg-background`}>
      <body className="antialiased min-h-screen">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
