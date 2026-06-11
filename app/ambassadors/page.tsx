import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { AmbassadorsHero } from '@/components/ambassadors/ambassadors-hero'
import { AmbassadorsGrid } from '@/components/ambassadors/ambassadors-grid'
import { BecomeAmbassadorCTA } from '@/components/ambassadors/become-ambassador-cta'

export const metadata: Metadata = {
  title: 'Ambassadors',
  description: 'Meet our global network of ambassadors representing Aurea Global Network in their communities worldwide.',
}

export default function AmbassadorsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <AmbassadorsHero />
      <AmbassadorsGrid />
      <BecomeAmbassadorCTA />
      <Footer />
    </main>
  )
}
