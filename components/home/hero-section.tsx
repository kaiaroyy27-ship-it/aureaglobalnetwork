'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { FadeIn, TextReveal } from '@/components/ui/motion'

interface HeroSectionProps {
  title?: string
  subtitle?: string
  ctaText?: string
  ctaLink?: string
}

export function HeroSection({
  title = "Empowering women and youth globally through financial education and economic empowerment.",
  subtitle = "Aurea Global Network is a youth-led organization dedicated to financial literacy, economic empowerment, and leadership education for women and girls worldwide.",
  ctaText = "Join Our Movement",
  ctaLink = "/join-us",
}: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/30 to-accent/20" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-[10%] w-72 h-72 rounded-full bg-primary/5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 left-[5%] w-96 h-96 rounded-full bg-accent/20 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-primary/5"
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-8 relative z-10 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="font-body text-sm font-medium text-primary">
                Financial Literacy for All
              </span>
            </div>
          </FadeIn>

          {/* Title */}
          <motion.h1
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] tracking-tight text-foreground mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <TextReveal delay={0.3}>{title}</TextReveal>
          </motion.h1>

          {/* Subtitle */}
          <FadeIn delay={0.5}>
            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12">
              {subtitle}
            </p>
          </FadeIn>

          {/* CTA Buttons */}
          <FadeIn delay={0.7}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={ctaLink}
                className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body font-medium rounded-full hover:bg-primary/90 transition-all hover:shadow-xl hover:shadow-primary/20"
              >
                {ctaText}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-foreground font-body font-medium rounded-full border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
              >
                Learn More
              </Link>
            </div>
          </FadeIn>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <motion.div
              className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div className="w-1 h-2 rounded-full bg-muted-foreground/50" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
