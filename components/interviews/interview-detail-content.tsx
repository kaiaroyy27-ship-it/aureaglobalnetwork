'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, ArrowLeft, Quote, Play, Headphones, Clock, Share2, Bookmark, ChevronRight } from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/motion'
import { Button } from '@/components/ui/button'
import { mockInterviews } from '@/lib/mock-data'

interface Interview {
  _id: string
  title: string
  interviewee: {
    name: string
    role: string
    image: string
  }
  slug?: { current: string }
  excerpt?: string
  description: string
  highlightQuote: string
  publishedAt: string
  category: string
  soundcloudEmbed?: string
  thumbnail: string
  fullContent?: string
}

interface InterviewDetailContentProps {
  interview: Interview
}

export function InterviewDetailContent({ interview }: InterviewDetailContentProps) {
  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  // Get related interviews (excluding current one)
  const relatedInterviews = mockInterviews
    .filter(i => i._id !== interview._id)
    .slice(0, 2)

  return (
    <article className="min-h-screen bg-background pt-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blush/30 via-background to-champagne/20 py-16 lg:py-24">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative">
          <FadeIn>
            <Link 
              href="/interviews"
              className="inline-flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-primary transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Interviews
            </Link>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <FadeIn delay={0.1}>
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <span className="px-4 py-1.5 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20">
                    {interview.category}
                  </span>
                  <span className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {formatDate(interview.publishedAt)}
                  </span>
                  <span className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    15 min read
                  </span>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6 text-balance leading-tight">
                  {interview.title}
                </h1>
              </FadeIn>

              <FadeIn delay={0.25}>
                <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
                  {interview.excerpt || interview.description}
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden border-3 border-primary/20 shadow-lg">
                    <Image
                      src={interview.interviewee.image || '/placeholder.svg'}
                      alt={interview.interviewee.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-serif text-xl font-medium text-foreground">
                      {interview.interviewee.name}
                    </p>
                    <p className="font-body text-muted-foreground">
                      {interview.interviewee.role}
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.35}>
                <div className="flex items-center gap-3">
                  <Button variant="outline" size="sm" className="rounded-full gap-2">
                    <Share2 className="w-4 h-4" />
                    Share
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full gap-2">
                    <Bookmark className="w-4 h-4" />
                    Save
                  </Button>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.3} className="relative">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 relative group cursor-pointer shadow-2xl shadow-primary/10"
              >
                <Image
                  src={interview.thumbnail || '/placeholder.svg'}
                  alt={interview.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-foreground/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-lg"
                  >
                    <Play className="w-8 h-8 text-primary-foreground fill-primary-foreground ml-1" />
                  </motion.div>
                </div>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-gradient-to-r from-blush/20 via-card to-champagne/20">
        <div className="container mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center relative">
              <Quote className="w-16 h-16 text-primary/20 mx-auto mb-8" />
              <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground italic leading-relaxed mb-8">
                &ldquo;{interview.highlightQuote}&rdquo;
              </blockquote>
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-0.5 bg-primary/30" />
                <cite className="font-body text-muted-foreground not-italic font-medium">
                  {interview.interviewee.name}
                </cite>
                <div className="w-12 h-0.5 bg-primary/30" />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div className="mb-12">
                <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-6">
                  About This Interview
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="font-body text-muted-foreground leading-relaxed text-lg">
                    {interview.description}
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Key Insights */}
            <FadeIn delay={0.1}>
              <div className="bg-gradient-to-br from-blush/20 via-card to-champagne/10 rounded-3xl p-8 md:p-12 mb-12 border border-border/50">
                <h3 className="font-serif text-xl font-medium text-foreground mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                  </span>
                  Key Insights from This Interview
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <ChevronRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="font-body text-muted-foreground">The importance of financial literacy in creating lasting economic empowerment for women globally</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <ChevronRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="font-body text-muted-foreground">How early financial education can transform career trajectories and personal confidence</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <ChevronRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="font-body text-muted-foreground">Practical strategies for young women to build wealth and economic independence</span>
                  </li>
                </ul>
              </div>
            </FadeIn>

            {/* Audio Player */}
            {interview.soundcloudEmbed && (
              <FadeIn delay={0.2} className="mb-12">
                <div className="bg-card rounded-3xl p-8 border border-border/50 shadow-sm">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-rose/20 flex items-center justify-center">
                      <Headphones className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-medium text-foreground">
                        Listen to the Full Interview
                      </h3>
                      <p className="font-body text-sm text-muted-foreground">
                        Available on SoundCloud • Approximately 45 minutes
                      </p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-muted/50 to-blush/10 rounded-2xl p-8 flex items-center justify-center">
                    <a 
                      href={interview.soundcloudEmbed}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-body font-medium hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20"
                    >
                      <Play className="w-5 h-5 fill-current" />
                      Play on SoundCloud
                    </a>
                  </div>
                </div>
              </FadeIn>
            )}

            {/* Related Interviews */}
            {relatedInterviews.length > 0 && (
              <FadeIn delay={0.3}>
                <div className="pt-12 border-t border-border/50">
                  <h3 className="font-serif text-2xl font-medium text-foreground mb-8">
                    More Conversations You&apos;ll Love
                  </h3>
                  <StaggerContainer className="grid md:grid-cols-2 gap-6">
                    {relatedInterviews.map((related) => (
                      <StaggerItem key={related._id}>
                        <Link href={`/interviews/${related.slug?.current || related._id}`}>
                          <motion.div
                            whileHover={{ y: -4 }}
                            className="group bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                          >
                            <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-blush/20 to-champagne/20">
                              <Image
                                src={related.thumbnail || '/placeholder.svg'}
                                alt={related.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                            </div>
                            <div className="p-6">
                              <span className="text-xs font-medium text-primary mb-2 block">
                                {related.category}
                              </span>
                              <h4 className="font-serif text-lg font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
                                {related.title}
                              </h4>
                              <p className="font-body text-sm text-muted-foreground">
                                with {related.interviewee.name}
                              </p>
                            </div>
                          </motion.div>
                        </Link>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </div>
              </FadeIn>
            )}

            {/* CTA */}
            <FadeIn delay={0.4} className="mt-16">
              <div className="bg-gradient-to-br from-blush/30 via-card to-champagne/30 rounded-3xl p-8 md:p-12 text-center border border-border/50">
                <h3 className="font-serif text-2xl font-medium text-foreground mb-4">
                  Explore More Conversations
                </h3>
                <p className="font-body text-muted-foreground mb-8 max-w-lg mx-auto">
                  Discover more inspiring interviews with trailblazing women leaders in finance, entrepreneurship, and beyond.
                </p>
                <Link href="/interviews">
                  <Button size="lg" className="rounded-full px-8 py-6 bg-foreground text-background hover:bg-primary hover:text-primary-foreground transition-all">
                    View All Interviews
                    <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </article>
  )
}
