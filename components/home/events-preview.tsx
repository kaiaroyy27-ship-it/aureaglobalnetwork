'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar, MapPin } from 'lucide-react'
import { FadeIn, StaggerContainer, staggerItem } from '@/components/ui/motion'
import { mockEvents } from '@/lib/mock-data'
import type { Event } from '@/lib/types'

interface EventsPreviewProps {
  events?: Event[]
}

export function EventsPreview({ events }: EventsPreviewProps) {
  const displayEvents = events || mockEvents.slice(0, 3)

  return (
    <section className="py-24 lg:py-32 bg-card relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <FadeIn>
            <span className="inline-block font-body text-xs uppercase tracking-[0.2em] text-primary mb-2">
              Upcoming Events
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground">
              Events & Workshops
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link
              href="/events"
              className="inline-flex items-center gap-2 font-body text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              View All Events
              <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayEvents.map((event, index) => (
            <motion.div
              key={event._id || index}
              variants={staggerItem}
              className="group"
            >
              <Link href={`/events/${event.slug?.current || event._id}`}>
                <div className="h-full bg-background rounded-2xl border border-border/50 overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                  {/* Image Placeholder */}
                  <div className="aspect-[16/10] bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Calendar className="w-12 h-12 text-primary/30" />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs font-body text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(event.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {event.location}
                      </span>
                    </div>
                    
                    <h3 className="font-serif text-xl font-medium text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {event.title}
                    </h3>
                    
                    <p className="font-body text-sm text-muted-foreground line-clamp-2">
                      {event.description}
                    </p>

                    {event.registrationLink && (
                      <div className="mt-4 pt-4 border-t border-border/50">
                        <span className="inline-flex items-center gap-2 font-body text-sm font-medium text-primary">
                          Register Now
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
