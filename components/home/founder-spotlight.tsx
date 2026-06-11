'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Quote } from 'lucide-react'
import { FadeIn } from '@/components/ui/motion'
import { mockFounder } from '@/lib/mock-data'

interface FounderSpotlightProps {
  founder?: typeof mockFounder
}

export function FounderSpotlight({ founder = mockFounder }: FounderSpotlightProps) {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <FadeIn direction="right">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-muted relative">
                <Image
                  src="/images/founder-photo.png"
                  alt="Kaia Roy"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Decorative Frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/20 rounded-2xl -z-10" />

              <motion.div
                className="absolute -top-6 -left-6 w-24 h-24 bg-accent/30 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </div>
          </FadeIn>

          {/* Content Side */}
          <div className="lg:pl-8">
            <FadeIn>
              <span className="inline-block font-body text-xs uppercase tracking-[0.2em] text-primary mb-4">
                Founder Spotlight
              </span>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-tight text-foreground mb-2">
                {founder.name}
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="font-body text-lg text-primary font-medium mb-6">
                {founder.title}
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="font-body text-muted-foreground leading-relaxed mb-8">
                {typeof founder.bio === 'string'
                  ? founder.bio
                  : 'Kaia Roy is a visionary young leader dedicated to closing the financial literacy gap for women and youth globally.'}
              </p>
            </FadeIn>

            {/* Quote */}
            <FadeIn delay={0.4}>
              <div className="relative pl-6 border-l-2 border-primary/30">
                <Quote className="absolute -left-3 -top-2 w-6 h-6 text-primary/30" />
                <blockquote className="font-serif text-xl md:text-2xl italic text-foreground/80 leading-relaxed">
                  &ldquo;{founder.quote}&rdquo;
                </blockquote>
              </div>
            </FadeIn>

            {/* Social Links */}
            {founder.socialLinks && (
              <FadeIn delay={0.5}>
                <div className="flex items-center gap-4 mt-8">
                  {founder.socialLinks.linkedin && (
                    <a
                      href={founder.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      LinkedIn
                    </a>
                  )}

                  {founder.socialLinks.twitter && (
                    <a
                      href={founder.socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      Twitter
                    </a>
                  )}

                  {founder.socialLinks.instagram && (
                    <a
                      href={founder.socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      Instagram
                    </a>
                  )}
                </div>
              </FadeIn>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}