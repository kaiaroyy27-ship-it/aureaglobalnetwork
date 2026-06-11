'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Mic, GraduationCap, TrendingUp, BookOpen, Smartphone } from 'lucide-react'
import { FadeIn, StaggerContainer, staggerItem } from '@/components/ui/motion'

const programs = [
  {
    icon: Calendar,
    title: 'Events & Workshops',
    description: 'Interactive learning experiences covering personal finance, investing, entrepreneurship, and career development. From global summits to local workshops, we bring financial education to life.',
    link: '/events',
    color: 'from-primary/10 to-primary/5',
  },
  {
    icon: Mic,
    title: 'Interviews',
    description: 'Inspiring conversations with women leaders in finance, business, and economics. Hear from trailblazers who are shaping the future of the global economy.',
    link: '/interviews',
    color: 'from-accent/20 to-accent/5',
  },
  {
    icon: GraduationCap,
    title: 'School Chapters',
    description: 'Student-led chapters at schools and universities worldwide, bringing financial education to local communities. Join or start a chapter at your institution.',
    link: '/chapters',
    color: 'from-secondary/30 to-secondary/10',
  },
  {
    icon: TrendingUp,
    title: 'Make It Make Cents Wednesday',
    description: 'Our weekly financial literacy series breaking down complex economic concepts into simple, actionable knowledge. New posts every Wednesday!',
    link: '/make-it-make-cents',
    color: 'from-primary/10 to-accent/10',
  },
  {
    icon: BookOpen,
    title: 'The First Step',
    description: 'Our upcoming comprehensive ebook — your guide to financial independence for young women. From budgeting basics to building wealth.',
    link: '/the-first-step',
    badge: 'Coming Soon',
    color: 'from-accent/20 to-primary/5',
  },
  {
    icon: Smartphone,
    title: 'Walli for Women',
    description: 'A revolutionary app designed to help young women track, save, and grow their finances with personalized insights and community support.',
    link: '/walli-for-women',
    badge: 'Coming Soon',
    color: 'from-secondary/20 to-accent/10',
  },
]

export function ProgramsGrid() {
  return (
    <section className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-6 lg:px-8">
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="group"
            >
              <Link href={program.link}>
                <motion.div
                  className={`h-full p-8 rounded-2xl bg-gradient-to-br ${program.color} border border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300`}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-background/80 flex items-center justify-center group-hover:bg-background transition-colors">
                      <program.icon className="w-7 h-7 text-primary" />
                    </div>
                    {program.badge && (
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-xs font-body font-medium text-primary">
                        {program.badge}
                      </span>
                    )}
                  </div>
                  
                  <h3 className="font-serif text-xl font-medium text-foreground mb-3 group-hover:text-primary transition-colors">
                    {program.title}
                  </h3>
                  
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
                    {program.description}
                  </p>

                  <span className="inline-flex items-center gap-2 font-body text-sm font-medium text-primary">
                    Explore
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
