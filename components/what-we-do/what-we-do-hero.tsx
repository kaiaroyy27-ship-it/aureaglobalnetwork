'use client'

import { motion } from 'framer-motion'
import { FadeIn } from '@/components/ui/motion'

export function WhatWeDoHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-background to-secondary/20" />
      
      {/* Decorative Elements */}
      <motion.div
        className="absolute top-40 right-[15%] w-72 h-72 rounded-full bg-primary/5 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <FadeIn>
            <span className="inline-block font-body text-xs uppercase tracking-[0.2em] text-primary mb-4">
              Our Programs
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] text-foreground mb-6">
              What We Do
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
              Through innovative programs and a passionate global community, we&apos;re closing the 
              financial literacy gap and creating pathways to economic empowerment for young 
              women everywhere.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
