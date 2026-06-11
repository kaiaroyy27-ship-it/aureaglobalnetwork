'use client'

import { motion } from 'framer-motion'
import { FadeIn, StaggerContainer, staggerItem } from '@/components/ui/motion'

const timeline = [
  {
    year: '2022',
    title: 'The Beginning',
    description: 'Aurea Global Network was founded with a vision to empower young women through financial literacy.',
  },
  {
    year: '2023',
    title: 'Global Expansion',
    description: 'Launched our first international chapters and Ambassador program, reaching 25+ countries.',
  },
  {
    year: '2024',
    title: 'Growing Impact',
    description: 'Established 100+ school chapters worldwide and launched Make It Make Cents Wednesday.',
  },
  {
    year: 'Future',
    title: 'What\'s Next',
    description: 'Launching The First Step ebook and Walli for Women app to reach even more young women globally.',
  },
]

export function TimelineSection() {
  return (
    <section className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-block font-body text-xs uppercase tracking-[0.2em] text-primary mb-4">
              Our Journey
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground">
              Building a Movement
            </h2>
          </div>
        </FadeIn>

        <div className="max-w-4xl mx-auto">
          <StaggerContainer className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className={`relative flex items-start gap-8 mb-12 last:mb-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Year Marker */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10" />

                {/* Content */}
                <div className={`ml-20 md:ml-0 md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'
                }`}>
                  <span className="inline-block font-body text-sm font-semibold text-primary mb-2">
                    {item.year}
                  </span>
                  <h3 className="font-serif text-xl font-medium text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
