'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Mic, GraduationCap, TrendingUp } from 'lucide-react'
import { FadeIn, StaggerContainer, staggerItem } from '@/components/ui/motion'
import { mockWhatWeDo } from '@/lib/mock-data'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Calendar,
  Mic,
  GraduationCap,
  TrendingUp,
}

interface ProgramsPreviewProps {
  programs?: typeof mockWhatWeDo.programs
}

export function ProgramsPreview({ programs = mockWhatWeDo.programs }: ProgramsPreviewProps) {
  return (
    <section className="py-24 lg:py-32 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-block font-body text-xs uppercase tracking-[0.2em] text-primary mb-4">
              What We Do
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4">
              Our Programs & Initiatives
            </h2>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              Through innovative programs and a passionate global community, we&apos;re closing the financial literacy gap.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => {
            const Icon = program.icon ? iconMap[program.icon] : Calendar
            return (
              <motion.div
                key={index}
                variants={staggerItem}
                className="group"
              >
                <Link href={program.link || '/what-we-do'}>
                  <div className="h-full p-8 bg-card rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                      {Icon && <Icon className="w-6 h-6 text-primary" />}
                    </div>
                    <h3 className="font-serif text-xl font-medium text-foreground mb-3 group-hover:text-primary transition-colors">
                      {program.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                      {program.description}
                    </p>
                    <span className="inline-flex items-center gap-2 font-body text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn more
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </StaggerContainer>

        <FadeIn delay={0.4}>
          <div className="text-center mt-12">
            <Link
              href="/what-we-do"
              className="inline-flex items-center gap-2 px-6 py-3 font-body text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              View All Programs
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
