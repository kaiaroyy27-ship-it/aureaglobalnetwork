import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { EventDetailContent } from '@/components/events/event-detail-content'
import { mockEvents } from '@/lib/mock-data'
import { client } from '@/lib/sanity.client'
import { EVENT_BY_SLUG_QUERY } from '@/lib/sanity.queries'

interface EventPageProps {
  params: Promise<{ slug: string }>
}

async function getEvent(slug: string) {
  try {
    if (client) {
      const event = await client.fetch(EVENT_BY_SLUG_QUERY, { slug })
      if (event) return event
    }
  } catch (error) {
    console.error("[Events Page] Error fetching from Sanity:", error)
  }
  
  return mockEvents.find(e => e.slug?.current === slug || e._id === slug)
}

export async function generateMetadata({ params }: EventPageProps): Promise<Metadata> {
  const { slug } = await params
  const event = await getEvent(slug)
  
  if (!event) {
    return {
      title: 'Event Not Found',
    }
  }

  return {
    title: event.title,
    description: event.description,
  }
}

export default async function EventPage({ params }: EventPageProps) {
  const { slug } = await params
  const event = await getEvent(slug)

  if (!event) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <EventDetailContent event={event} />
      <Footer />
    </main>
  )
}
