'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FadeIn } from '@/components/ui/motion'

export function BecomeAmbassadorCTA() {
  return (
    <section className="py-24 lg:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-6">
              Become an Ambassador
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="font-body text-lg text-primary-foreground/80 mb-8">
              Join our global network of passionate leaders. Represent Aurea Global Network 
              in your community and help spread financial literacy to women and girls everywhere.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <Link
              href="/join-us#ambassador"
              className="inline-flex items-center gap-2 px-8 py-4 bg-background text-foreground font-body font-medium rounded-full hover:bg-background/90 transition-all hover:shadow-xl group"
            >
              Apply Now
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
