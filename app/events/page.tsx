import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { EventsHero } from '@/components/events/events-hero'
import { EventsGrid } from '@/components/events/events-grid'

export const metadata: Metadata = {
  title: 'Events & Workshops',
  description: 'Join our workshops, summits, and events focused on financial literacy and economic empowerment for young women.',
}

export default function EventsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <EventsHero />
      <EventsGrid />
      <Footer />
    </main>
  )
}
