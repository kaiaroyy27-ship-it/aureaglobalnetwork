'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, Smartphone } from 'lucide-react'
import { FadeIn } from '@/components/ui/motion'

export function ComingSoonPreview() {
  return (
    <section className="py-24 lg:py-32 bg-foreground text-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '60px 60px',
        }} />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-block font-body text-xs uppercase tracking-[0.2em] text-background/60 mb-4">
              Coming Soon
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium">
              Exciting Projects on the Horizon
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* The First Step - Ebook */}
          <FadeIn delay={0.2}>
            <Link href="/the-first-step" className="group block h-full">
              <motion.div
                className="h-full p-8 lg:p-10 rounded-3xl bg-background/5 border border-background/10 hover:border-background/20 hover:bg-background/10 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 rounded-2xl bg-background/10 flex items-center justify-center mb-6">
                  <BookOpen className="w-8 h-8 text-background" />
                </div>
                
                <span className="inline-block px-3 py-1 rounded-full bg-background/10 text-xs font-body font-medium text-background/70 mb-4">
                  July 2026
                </span>
                
                <h3 className="font-serif text-2xl md:text-3xl font-medium mb-4 group-hover:text-accent transition-colors">
                  The First Step
                </h3>
                
                <p className="font-body text-background/60 leading-relaxed mb-6">
                  A new initiative designed to make financial empowerment more accessible, approachable, and impactful for young women globally.
                </p>

                <span className="inline-flex items-center gap-2 font-body text-sm font-medium text-accent group-hover:gap-3 transition-all">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </span>
              </motion.div>
            </Link>
          </FadeIn>

          {/* Walli for Women - App */}
          <FadeIn delay={0.3}>
            <Link href="/walli-for-women" className="group block h-full">
              <motion.div
                className="h-full p-8 lg:p-10 rounded-3xl bg-background/5 border border-background/10 hover:border-background/20 hover:bg-background/10 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 rounded-2xl bg-background/10 flex items-center justify-center mb-6">
                  <Smartphone className="w-8 h-8 text-background" />
                </div>
                
                <span className="inline-block px-3 py-1 rounded-full bg-background/10 text-xs font-body font-medium text-background/70 mb-4">
                  July 2026
                </span>
                
                <h3 className="font-serif text-2xl md:text-3xl font-medium mb-4 group-hover:text-accent transition-colors">
                  Walli for Women
                </h3>
                
                <p className="font-body text-background/60 leading-relaxed mb-6">
                  A new platform focused on redefining how women and youth engage with financial growth, community, and opportunity in the modern world.
                </p>

                <span className="inline-flex items-center gap-2 font-body text-sm font-medium text-accent group-hover:gap-3 transition-all">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </span>
              </motion.div>
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
