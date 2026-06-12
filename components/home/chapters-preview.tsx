'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Globe, MapPin } from 'lucide-react'
import { FadeIn, StaggerContainer, staggerItem } from '@/components/ui/motion'
import { mockSchoolChapters } from '@/lib/mock-data'
import type { SchoolChapter } from '@/lib/types'

interface ChaptersPreviewProps {
  chapters?: SchoolChapter[]
}

export function ChaptersPreview({ chapters }: ChaptersPreviewProps) {
  const displayChapters = chapters || mockSchoolChapters.slice(0, 3)

  return (
    <section className="py-24 lg:py-32 bg-background relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content Side */}
          <div>
            <FadeIn>
              <span className="inline-block font-body text-xs uppercase tracking-[0.2em] text-primary mb-4">
                Global Network
              </span>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6">
                School Chapters Worldwide
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="font-body text-muted-foreground leading-relaxed mb-8">
                Our student-led chapters at schools worldwide are bringing financial 
                education to local communities, one chapter at a time.
              </p>
            </FadeIn>

            {/* Stats */}
            <FadeIn delay={0.3}>
              <div className="flex items-center gap-8 mb-8">
                <div>
                  <span className="font-serif text-3xl font-medium text-primary">5+</span>
                  <p className="font-body text-sm text-muted-foreground">Chapters</p>
                </div>
                <div className="w-px h-12 bg-border" />
                <div>
                  <span className="font-serif text-3xl font-medium text-primary">45+</span>
                  <p className="font-body text-sm text-muted-foreground">Countries</p>
                </div>
                <div className="w-px h-12 bg-border" />
                <div>
                  <span className="font-serif text-3xl font-medium text-primary">50+</span>
                  <p className="font-body text-sm text-muted-foreground">Members</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <Link
                href="/chapters"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-body font-medium rounded-full hover:bg-primary/90 transition-all"
              >
                Explore Chapters
                <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeIn>
          </div>

          {/* Chapters Grid */}
          <StaggerContainer className="grid gap-4">
            {displayChapters.map((chapter, index) => (
              <motion.div key={chapter._id || index} variants={staggerItem}>
                <Link href={`/chapters/${chapter.slug?.current || chapter._id}`}>
                  <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all group">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Globe className="w-6 h-6 text-primary" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-lg font-medium text-foreground truncate group-hover:text-primary transition-colors">
                        {chapter.schoolName}
                      </h3>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="w-3 h-3" />
                        <span className="font-body">
                          {chapter.city}, {chapter.country}
                        </span>
                      </div>
                    </div>
                    
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
