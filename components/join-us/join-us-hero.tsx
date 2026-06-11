'use client'

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { FadeIn } from '@/components/ui/motion'

export function JoinUsHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-background to-accent/30" />
      
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
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="font-body text-sm font-medium text-primary">
                Be Part of the Movement
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] text-foreground mb-6">
              Join Us Today
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              There are many ways to get involved with Aurea Global Network. Choose the path 
              that best fits your skills and availability, and help us empower the next 
              generation of women leaders.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
