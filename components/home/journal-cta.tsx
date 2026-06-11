'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { FadeIn } from '@/components/ui/motion'

export function JournalCTA() {
  return (
    <section className="py-16 lg:py-20 bg-accent/30 relative overflow-hidden">
      {/* Decorative */}
      <motion.div
        className="absolute top-1/2 -left-32 w-64 h-64 rounded-full bg-primary/10 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/2 -right-32 w-64 h-64 rounded-full bg-secondary/50 blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto">
            <div className="text-center md:text-left">
              <h3 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-2">
                Read Our Research Blog
              </h3>
              <p className="font-body text-muted-foreground">
                Explore insights, stories, and resources from The AGN Journal on Medium.
              </p>
            </div>
            <a
              href="https://medium.com/@aureaglobalnetwork"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-body font-medium rounded-full hover:bg-primary/90 transition-all hover:shadow-xl hover:shadow-primary/20 group whitespace-nowrap"
            >
              The AGN Journal
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
