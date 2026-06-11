'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, MapPin, ArrowRight, ExternalLink } from 'lucide-react'
import { StaggerContainer, staggerItem } from '@/components/ui/motion'
import { mockEvents } from '@/lib/mock-data'

export function EventsGrid() {
  return (
    <section className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-6 lg:px-8">
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockEvents.map((event, index) => (
            <motion.div
              key={event._id || index}
              variants={staggerItem}
              className="group"
            >
              <div className="h-full bg-background rounded-2xl border border-border/50 overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                {/* Image */}
                <div className="aspect-[16/10] bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Calendar className="w-16 h-16 text-primary/30" />
                  </div>
                  
                  {/* Date Badge */}
                  <div className="absolute top-4 left-4 px-3 py-2 bg-background/90 backdrop-blur-sm rounded-lg">
                    <span className="font-serif text-2xl font-semibold text-primary block leading-none">
                      {new Date(event.date).getDate()}
                    </span>
                    <span className="font-body text-xs text-muted-foreground uppercase">
                      {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs font-body text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {event.location}
                    </span>
                  </div>
                  
                  <h3 className="font-serif text-xl font-medium text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {event.title}
                  </h3>
                  
                  <p className="font-body text-sm text-muted-foreground line-clamp-3 mb-6">
                    {event.description}
                  </p>

                  <div className="flex items-center gap-4">
                    <Link
                      href={`/events/${event.slug?.current || event._id}`}
                      className="inline-flex items-center gap-2 font-body text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                    
                    {event.registrationLink && (
                      <a
                        href={event.registrationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        Register
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
