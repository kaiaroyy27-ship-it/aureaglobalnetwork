'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Quote, Linkedin, Twitter, Instagram } from 'lucide-react'
import { FadeIn } from '@/components/ui/motion'
import { mockFounder } from '@/lib/mock-data'

export function FounderSection() {
  return (
    <section id="founder" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-block font-body text-xs uppercase tracking-[0.2em] text-primary mb-4">
              Leadership
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground">
              Meet Our Founder
            </h2>
          </div>
        </FadeIn>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Image */}
            <FadeIn className="lg:col-span-2">
              <div className="relative">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-muted relative">
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
                  className="absolute -top-6 -left-6 w-20 h-20 bg-accent/30 rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </div>
            </FadeIn>

            {/* Content */}
            <div className="lg:col-span-3">
              <FadeIn delay={0.1}>
                <h3 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-2">
                  {mockFounder.name}
                </h3>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="font-body text-lg text-primary font-medium mb-6">
                  {mockFounder.title}
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <p className="font-body text-muted-foreground leading-relaxed mb-8">
                  {mockFounder.bio}
                </p>
              </FadeIn>

              {/* Quote */}
              <FadeIn delay={0.4}>
                <div className="relative pl-6 border-l-2 border-primary/30 mb-8">
                  <Quote className="absolute -left-3 -top-2 w-6 h-6 text-primary/30" />
                  <blockquote className="font-serif text-xl italic text-foreground/80 leading-relaxed">
                    &ldquo;{mockFounder.quote}&rdquo;
                  </blockquote>
                </div>
              </FadeIn>

              {/* Social Links */}
              <FadeIn delay={0.5}>
                <div className="flex items-center gap-4">
                  {mockFounder.socialLinks?.linkedin && (
                    <a
                      href={mockFounder.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4 text-primary" />
                    </a>
                  )}

                  {mockFounder.socialLinks?.twitter && (
                    <a
                      href={mockFounder.socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter className="w-4 h-4 text-primary" />
                    </a>
                  )}

                  {mockFounder.socialLinks?.instagram && (
                    <a
                      href={mockFounder.socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-4 h-4 text-primary" />
                    </a>
                  )}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}