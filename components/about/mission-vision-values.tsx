'use client'

import { motion } from 'framer-motion'
import { Target, Eye, Heart } from 'lucide-react'
import { FadeIn, StaggerContainer, staggerItem } from '@/components/ui/motion'
import { mockAboutPage } from '@/lib/mock-data'

const sections = [
  {
    icon: Target,
    title: 'Our Mission',
    content: mockAboutPage.mission,
    color: 'primary',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    content: mockAboutPage.vision,
    color: 'primary',
  },
]

export function MissionVisionValues() {
  return (
    <section className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Mission & Vision */}
        <StaggerContainer className="grid md:grid-cols-2 gap-8 mb-20">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="p-8 lg:p-10 bg-background rounded-2xl border border-border/50"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <section.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-medium text-foreground mb-4">
                {section.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {section.content}
              </p>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* Values */}
        <FadeIn>
          <div className="text-center mb-12">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Heart className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-4">
              Our Values
            </h3>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              These core values guide everything we do as an organization.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {mockAboutPage.values.map((value, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="p-6 bg-background rounded-xl border border-border/50 text-center hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all"
            >
              <span className="font-body text-sm font-medium text-foreground">
                {value}
              </span>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
