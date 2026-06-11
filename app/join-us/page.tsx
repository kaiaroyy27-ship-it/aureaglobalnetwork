import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { JoinUsHero } from '@/components/join-us/join-us-hero'
import { JoinOptionsSection } from '@/components/join-us/join-options-section'

export const metadata: Metadata = {
  title: 'Join Us Today',
  description: 'Join Aurea Global Network as a volunteer, ambassador, or chapter leader. Be part of a global movement empowering women through financial literacy.',
}

export default function JoinUsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <JoinUsHero />
      <JoinOptionsSection />
      <Footer />
    </main>
  )
}
