'use client'

import { FadeIn } from '@/components/ui/motion'

interface MissionSectionProps {
  title?: string
  description?: string
}

export function MissionSection({
  title = "Our Mission",
  description = "To equip women and youth with the financial knowledge, leadership skills, and global network they need to thrive in today's economy and become tomorrow's changemakers.",
}: MissionSectionProps) {
  return (
    <section className="py-24 lg:py-32 bg-card relative overflow-hidden">
      {/* Decorative line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <span className="inline-block font-body text-xs uppercase tracking-[0.2em] text-primary mb-6">
              {title}
            </span>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.2] text-foreground text-balance">
              {description}
            </h2>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="mt-12 flex justify-center">
              <div className="w-16 h-px bg-primary/30" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
