'use client'

import { motion } from 'framer-motion'
import { Heart, Globe, Users, ArrowRight, CheckCircle } from 'lucide-react'
import { FadeIn, StaggerContainer, staggerItem } from '@/components/ui/motion'
import { mockJoinOptions } from '@/lib/mock-data'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Heart,
  Globe,
  Users,
}

const benefits = {
  volunteer: [
    'Flexible time commitment',
    'Skill development opportunities',
    'Global networking',
    'Make a meaningful impact',
  ],
  ambassador: [
    'Leadership training',
    'Exclusive resources',
    'Global recognition',
    'Direct community impact',
  ],
  chapter: [
    'Full training & support',
    'Event planning resources',
    'Mentorship from HQ',
    'Build your network',
  ],
}

export function JoinOptionsSection() {
  return (
    <section className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-6 lg:px-8">
        <StaggerContainer className="space-y-12">
          {mockJoinOptions.map((option, index) => {
            const Icon = option.icon ? iconMap[option.icon] : Heart
            const benefitKey = option.title.toLowerCase().includes('volunteer') 
              ? 'volunteer' 
              : option.title.toLowerCase().includes('ambassador')
              ? 'ambassador'
              : 'chapter'
            const optionBenefits = benefits[benefitKey]
            const slug = option.title.toLowerCase().replace(/\s+/g, '-')

            return (
              <motion.div
                key={option._id || index}
                id={slug}
                variants={staggerItem}
                className="scroll-mt-32"
              >
                <div className={`grid lg:grid-cols-2 gap-8 items-center p-8 lg:p-12 rounded-3xl bg-background border border-border/50 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}>
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                      {Icon && <Icon className="w-8 h-8 text-primary" />}
                    </div>

                    <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-4">
                      {option.title}
                    </h2>

                    <p className="font-body text-muted-foreground leading-relaxed mb-6">
                      {option.description}
                    </p>

                    {/* Benefits */}
                    <ul className="space-y-3 mb-8">
                      {optionBenefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                          <span className="font-body text-sm text-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href={option.formLink || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body font-medium rounded-full hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20 group"
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>

                  {/* Visual */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center">
                        {Icon && <Icon className="w-16 h-16 text-primary/50" />}
                      </div>
                    </div>
                    {/* Decorative */}
                    <motion.div
                      className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/30 rounded-full blur-2xl"
                      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                      transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                    />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </StaggerContainer>

        {/* General Contact */}
        <FadeIn delay={0.5}>
          <div className="mt-16 text-center">
            <p className="font-body text-muted-foreground mb-4">
              Have questions about getting involved?
            </p>
            <a
              href="mailto:aureaglobalnetwork@gmail.com"
              className="font-body text-primary font-medium hover:text-primary/80 transition-colors"
            >
              Contact us at aureaglobalnetwork@gmail.com
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
