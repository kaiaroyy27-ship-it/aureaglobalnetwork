'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Users, ArrowLeft, ExternalLink, Clock } from 'lucide-react'
import { FadeIn } from '@/components/ui/motion'
import { Button } from '@/components/ui/button'

interface Event {
  _id: string
  title: string
  slug?: { current: string }
  description: string
  date: string
  endDate?: string
  location: string
  registrationLink?: string
  images?: string[]
  speakers?: string[]
  topics?: string[]
}

interface EventDetailContentProps {
  event: Event
}

export function EventDetailContent({ event }: EventDetailContentProps) {
  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <article className="min-h-screen bg-background pt-24">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary/50 via-background to-accent/20 py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <FadeIn>
            <Link 
              href="/events"
              className="inline-flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Events
            </Link>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <FadeIn delay={0.1}>
                <div className="flex flex-wrap gap-2 mb-6">
                  {event.topics?.map((topic) => (
                    <span 
                      key={topic}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6 text-balance">
                  {event.title}
                </h1>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="font-body">
                      {formatDate(event.date)}
                      {event.endDate && ` - ${formatDate(event.endDate)}`}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="font-body">{event.location}</span>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.4}>
                {event.registrationLink && (
                  <a
                    href={event.registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="rounded-full px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90">
                      Register Now
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </a>
                )}
              </FadeIn>
            </div>

            <FadeIn delay={0.3} className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10">
                {event.images?.[0] ? (
                  <Image
                    src={event.images[0]}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Calendar className="w-24 h-24 text-primary/30" />
                  </div>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <FadeIn>
                  <h2 className="font-serif text-2xl font-medium text-foreground mb-6">
                    About This Event
                  </h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="font-body text-muted-foreground leading-relaxed text-lg">
                      {event.description}
                    </p>
                  </div>
                </FadeIn>

                {event.speakers && event.speakers.length > 0 && (
                  <FadeIn delay={0.2} className="mt-12">
                    <h3 className="font-serif text-xl font-medium text-foreground mb-6">
                      Featured Speakers
                    </h3>
                    <div className="flex flex-wrap gap-4">
                      {event.speakers.map((speaker) => (
                        <div 
                          key={speaker}
                          className="flex items-center gap-3 px-4 py-3 bg-card rounded-xl border border-border/50"
                        >
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <Users className="w-5 h-5 text-primary" />
                          </div>
                          <span className="font-body font-medium text-foreground">{speaker}</span>
                        </div>
                      ))}
                    </div>
                  </FadeIn>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <FadeIn delay={0.3}>
                  <div className="sticky top-32 bg-card rounded-2xl p-6 border border-border/50">
                    <h3 className="font-serif text-lg font-medium text-foreground mb-4">
                      Event Details
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Calendar className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-body font-medium text-foreground text-sm">Date</p>
                          <p className="font-body text-muted-foreground text-sm">
                            {formatDate(event.date)}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-body font-medium text-foreground text-sm">Location</p>
                          <p className="font-body text-muted-foreground text-sm">{event.location}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-body font-medium text-foreground text-sm">Duration</p>
                          <p className="font-body text-muted-foreground text-sm">
                            {event.endDate ? 'Multi-day event' : 'One day to a week'}
                          </p>
                        </div>
                      </div>
                    </div>

                    {event.registrationLink && (
                      <a
                        href={event.registrationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block mt-6"
                      >
                        <Button className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                          Register Now
                        </Button>
                      </a>
                    )}
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  )
}
