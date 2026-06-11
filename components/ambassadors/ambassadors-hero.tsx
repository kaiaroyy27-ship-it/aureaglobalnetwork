'use client'

import { motion } from 'framer-motion'
import { Globe } from 'lucide-react'
import { FadeIn } from '@/components/ui/motion'

export function AmbassadorsHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/20" />
      
      {/* Decorative Elements */}
      <motion.div
        className="absolute top-32 right-[10%] w-64 h-64 rounded-full bg-primary/5 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 left-[5%] w-80 h-80 rounded-full bg-accent/20 blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Globe className="w-4 h-4 text-primary" />
              <span className="font-body text-sm font-medium text-primary">
                Global Community
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] text-foreground mb-6">
              Our Ambassadors
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Meet the passionate leaders representing Aurea Global Network in their communities, 
              driving financial literacy and empowerment for women and girls worldwide.
            </p>
          </FadeIn>

          {/* Stats */}
          <FadeIn delay={0.3}>
            <div className="flex items-center justify-center gap-8 mt-12">
              <div className="text-center">
                <span className="font-serif text-3xl md:text-4xl font-medium text-primary">500+</span>
                <p className="font-body text-sm text-muted-foreground mt-1">Ambassadors</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <span className="font-serif text-3xl md:text-4xl font-medium text-primary">50+</span>
                <p className="font-body text-sm text-muted-foreground mt-1">Countries</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <span className="font-serif text-3xl md:text-4xl font-medium text-primary">6</span>
                <p className="font-body text-sm text-muted-foreground mt-1">Continents</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
