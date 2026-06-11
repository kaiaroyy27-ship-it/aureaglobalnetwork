'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin, Users, ArrowLeft, Award, Calendar, Globe, CheckCircle } from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/motion'

interface Chapter {
  _id: string
  name: string
  slug?: { current: string }
  country: string
  city: string
  chapterLeadName: string
  chapterLeadImage?: string
  description: string
  achievements?: string[]
  initiatives?: string[]
  memberCount?: number
  foundedYear?: number
  image?: string
  gallery?: string[]
  status: 'active' | 'coming-soon'
}

interface ChapterDetailContentProps {
  chapter: Chapter
}

export function ChapterDetailContent({ chapter }: ChapterDetailContentProps) {
  return (
    <article className="min-h-screen bg-background pt-24">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary/50 via-background to-accent/20 py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <FadeIn>
            <Link 
              href="/chapters"
              className="inline-flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Chapters
            </Link>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <FadeIn delay={0.1}>
                <div className="flex items-center gap-4 mb-6">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                    chapter.status === 'active' 
                      ? 'bg-sage/30 text-foreground' 
                      : 'bg-gold/30 text-foreground'
                  }`}>
                    {chapter.status === 'active' ? 'Active Chapter' : 'Coming Soon'}
                  </span>
                  <span className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    {chapter.city}, {chapter.country}
                  </span>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6 text-balance">
                  {chapter.name}
                </h1>
              </FadeIn>

              <FadeIn delay={0.3}>
                <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
                  {chapter.description}
                </p>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="flex flex-wrap gap-6">
                  {chapter.memberCount && (
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-primary" />
                      <span className="font-body font-medium text-foreground">
                        {chapter.memberCount} Members
                      </span>
                    </div>
                  )}
                  {chapter.foundedYear && (
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-primary" />
                      <span className="font-body font-medium text-foreground">
                        Founded {chapter.foundedYear}
                      </span>
                    </div>
                  )}
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.3} className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10">
                {chapter.image ? (
                  <Image
                    src={chapter.image}
                    alt={chapter.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Globe className="w-24 h-24 text-primary/30" />
                  </div>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Chapter Lead Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20 shrink-0">
                {chapter.chapterLeadImage ? (
                  <Image
                    src={chapter.chapterLeadImage}
                    alt={chapter.chapterLeadName}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <span className="font-serif text-3xl text-primary">
                      {chapter.chapterLeadName.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                )}
              </div>
              <div className="text-center md:text-left">
                <p className="font-body text-sm text-primary font-medium mb-2">Chapter Leader</p>
                <h2 className="font-serif text-2xl font-medium text-foreground mb-2">
                  {chapter.chapterLeadName}
                </h2>
                <p className="font-body text-muted-foreground">
                  Leading financial literacy initiatives at {chapter.name}
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Achievements & Initiatives */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Achievements */}
              {chapter.achievements && chapter.achievements.length > 0 && (
                <FadeIn>
                  <div className="bg-card rounded-2xl p-8 border border-border/50">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                        <Award className="w-5 h-5 text-gold" />
                      </div>
                      <h3 className="font-serif text-xl font-medium text-foreground">
                        Achievements
                      </h3>
                    </div>
                    <ul className="space-y-4">
                      {chapter.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="font-body text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              )}

              {/* Initiatives */}
              {chapter.initiatives && chapter.initiatives.length > 0 && (
                <FadeIn delay={0.2}>
                  <div className="bg-card rounded-2xl p-8 border border-border/50">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-sage/30 flex items-center justify-center">
                        <Globe className="w-5 h-5 text-foreground" />
                      </div>
                      <h3 className="font-serif text-xl font-medium text-foreground">
                        Key Initiatives
                      </h3>
                    </div>
                    <ul className="space-y-4">
                      {chapter.initiatives.map((initiative, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-sage shrink-0 mt-0.5" />
                          <span className="font-body text-muted-foreground">{initiative}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              )}
            </div>

            {/* Gallery */}
            {chapter.gallery && chapter.gallery.length > 0 && (
              <FadeIn delay={0.3} className="mt-12">
                <h3 className="font-serif text-xl font-medium text-foreground mb-6">
                  Chapter Gallery
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {chapter.gallery.map((image, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      className="aspect-square rounded-xl overflow-hidden bg-muted"
                    >
                      <Image
                        src={image}
                        alt={`${chapter.name} gallery image ${index + 1}`}
                        width={300}
                        height={300}
                        className="object-cover w-full h-full"
                      />
                    </motion.div>
                  ))}
                </div>
              </FadeIn>
            )}

            {/* Start Your Own Chapter CTA */}
            <FadeIn delay={0.4} className="mt-12">
              <div className="bg-gradient-to-br from-primary/10 via-background to-accent/20 rounded-2xl p-8 text-center border border-primary/20">
                <h3 className="font-serif text-xl font-medium text-foreground mb-4">
                  Inspired to Start Your Own Chapter?
                </h3>
                <p className="font-body text-muted-foreground mb-6">
                  Bring Aurea Global Network to your school or community.
                </p>
                <Link
                  href="/join-us#chapter"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-body font-medium hover:bg-primary/90 transition-colors"
                >
                  Apply to Start a Chapter
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </article>
  )
}
