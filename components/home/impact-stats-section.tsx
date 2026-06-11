'use client'

import { motion } from 'framer-motion'
import { FadeIn, StaggerContainer, staggerItem } from '@/components/ui/motion'
import type { ImpactStat } from '@/lib/types'

interface ImpactStatsSectionProps {
  stats?: ImpactStat[]
}

const defaultStats: ImpactStat[] = [
  { number: "50+", label: "Countries Reached", description: "Our global network spans across continents" },
  { number: "1500+", label: "Young Women and Youth Empowered", description: "Through workshops and programs" },
  { number: "100+", label: "Volunteers", description: "Establishing financial literacy worldwide" },
  { number: "15+", label: "Ambassadors", description: "Leading change in their communities" },
]

export function ImpactStatsSection({ stats = defaultStats }: ImpactStatsSectionProps) {
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
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-block font-body text-xs uppercase tracking-[0.2em] text-primary-foreground/70 mb-4">
              Our Impact
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium">
              Creating Change Worldwide
            </h2>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="text-center"
            >
              <div className="relative inline-block">
                <span className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium">
                  {stat.number}
                </span>
              </div>
              <h3 className="font-body text-sm md:text-base font-medium mt-4 mb-2">
                {stat.label}
              </h3>
              {stat.description && (
                <p className="font-body text-xs md:text-sm text-primary-foreground/60">
                  {stat.description}
                </p>
              )}
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
