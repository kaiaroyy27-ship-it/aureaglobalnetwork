import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { AboutHero } from '@/components/about/about-hero'
import { MissionVisionValues } from '@/components/about/mission-vision-values'
import { FounderSection } from '@/components/about/founder-section'
import { TimelineSection } from '@/components/about/timeline-section'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Aurea Global Network, our mission to empower women and youth through financial literacy, and meet our founder Kaia Roy.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <AboutHero />
      <MissionVisionValues />
      <FounderSection />
      <TimelineSection />
      <Footer />
    </main>
  )
}
