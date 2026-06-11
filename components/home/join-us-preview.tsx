'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Heart, Globe, Users } from 'lucide-react'
import { FadeIn, StaggerContainer, staggerItem } from '@/components/ui/motion'
import { mockJoinOptions } from '@/lib/mock-data'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Heart,
  Globe,
  Users,
}

interface JoinUsPreviewProps {
  options?: typeof mockJoinOptions
}

export function JoinUsPreview({ options = mockJoinOptions }: JoinUsPreviewProps) {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-card to-background relative">
      <div className="container mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-block font-body text-xs uppercase tracking-[0.2em] text-primary mb-4">
              Get Involved
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4">
              Join Us Today
            </h2>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              Be part of a global movement empowering the next generation of women leaders.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {options.map((option, index) => {
            const Icon = option.icon ? iconMap[option.icon] : Heart
            return (
              <motion.div
                key={option._id || index}
                variants={staggerItem}
                className="group"
              >
                <Link href={`/join-us#${option.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  <motion.div
                    className="h-full p-8 bg-card rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 text-center"
                    whileHover={{ y: -5 }}
                  >
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                      {Icon && <Icon className="w-8 h-8 text-primary" />}
                    </div>
                    
                    <h3 className="font-serif text-xl font-medium text-foreground mb-3 group-hover:text-primary transition-colors">
                      {option.title}
                    </h3>
                    
                    <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
                      {option.description}
                    </p>

                    <span className="inline-flex items-center gap-2 font-body text-sm font-medium text-primary">
                      Apply Now
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </motion.div>
                </Link>
              </motion.div>
            )
          })}
        </StaggerContainer>

        <FadeIn delay={0.4}>
          <div className="text-center mt-12">
            <Link
              href="/join-us"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body font-medium rounded-full hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20"
            >
              Explore All Opportunities
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
