'use client'

import { motion } from 'framer-motion'
import { FadeIn } from '@/components/ui/motion'

export function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-background to-accent/20" />
      
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
        <div className="max-w-4xl">
          <FadeIn>
            <span className="inline-block font-body text-xs uppercase tracking-[0.2em] text-primary mb-4">
              About Us
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] text-foreground mb-6">
              Empowering Women and Youth to Lead with Financial Confidence
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
              Aurea Global Network is a youth-led international organization dedicated to closing 
              the financial literacy gap and creating pathways to economic empowerment for women 
              and youth worldwide.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
