'use client'

import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react'
import { FadeIn } from '@/components/ui/motion'

export function EventsHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-background to-secondary/20" />
      
      <motion.div
        className="absolute top-32 right-[10%] w-64 h-64 rounded-full bg-primary/5 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="font-body text-sm font-medium text-primary">
                Learn & Connect
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] text-foreground mb-6">
              Events & Workshops
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
              From global summits to local workshops, we bring financial education to life 
              through interactive learning experiences covering personal finance, investing, 
              entrepreneurship, and career development.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
