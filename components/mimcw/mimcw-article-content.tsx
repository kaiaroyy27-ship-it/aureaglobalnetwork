'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, ArrowLeft, ArrowRight, BookOpen, Share2, DollarSign } from 'lucide-react'
import { FadeIn } from '@/components/ui/motion'
import { mockMakeItMakeCentsPosts } from '@/lib/mock-data'

interface Article {
  _id: string
  title: string
  slug?: { current: string }
  explanation: string
  longContent?: string
  publishDate: string
  image?: string
  category?: string
}

interface MIMCWArticleContentProps {
  article: Article
}

export function MIMCWArticleContent({ article }: MIMCWArticleContentProps) {
  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  // Find related articles (same category or just other articles)
  const relatedArticles = mockMakeItMakeCentsPosts
    .filter(a => a._id !== article._id)
    .slice(0, 3)

  return (
    <article className="min-h-screen bg-background pt-24">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gold/20 via-champagne/30 to-background py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <FadeIn>
            <Link 
              href="/make-it-make-cents"
              className="inline-flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Make It Make Cents
            </Link>
          </FadeIn>

          <div className="max-w-4xl mx-auto">
            <FadeIn delay={0.1}>
              <div className="flex items-center gap-4 mb-6">
                {article.category && (
                  <span className="px-3 py-1 bg-gold/20 text-foreground text-xs font-medium rounded-full">
                    {article.category}
                  </span>
                )}
                <span className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  {formatDate(article.publishDate)}
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-8 text-balance">
                {article.title}
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <p className="font-body font-medium text-foreground">Make It Make Cents Wednesday</p>
                  <p className="font-body text-sm text-muted-foreground">Weekly Financial Literacy Series</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Quick Explanation */}
      <section className="py-12 bg-card border-y border-border/50">
        <div className="container mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="font-serif text-lg font-medium text-foreground mb-2">
                    The Quick Explanation
                  </h2>
                  <p className="font-body text-lg text-muted-foreground leading-relaxed">
                    {article.explanation}
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Article Content */}
              <div className="lg:col-span-2">
                {article.image && (
                  <FadeIn className="mb-8">
                    <div className="aspect-video rounded-2xl overflow-hidden bg-muted">
                      <Image
                        src={article.image}
                        alt={article.title}
                        width={800}
                        height={450}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </FadeIn>
                )}

                <FadeIn delay={0.1}>
                  <h2 className="font-serif text-2xl font-medium text-foreground mb-6">
                    Let&apos;s Break It Down
                  </h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="font-body text-muted-foreground leading-relaxed text-lg whitespace-pre-line">
                      {article.longContent || article.explanation}
                    </p>
                  </div>
                </FadeIn>

                {/* Share Section */}
                <FadeIn delay={0.2} className="mt-12 pt-8 border-t border-border/50">
                  <div className="flex items-center justify-between">
                    <p className="font-body text-muted-foreground">Share this article:</p>
                    <div className="flex items-center gap-3">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                      >
                        <Share2 className="w-4 h-4 text-primary" />
                      </motion.button>
                    </div>
                  </div>
                </FadeIn>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <FadeIn delay={0.3}>
                  <div className="sticky top-32">
                    <div className="bg-card rounded-2xl p-6 border border-border/50 mb-6">
                      <h3 className="font-serif text-lg font-medium text-foreground mb-4">
                        About This Series
                      </h3>
                      <p className="font-body text-sm text-muted-foreground mb-4">
                        Every Wednesday, we break down complex financial concepts into simple, 
                        actionable knowledge for young women everywhere.
                      </p>
                      <Link
                        href="/make-it-make-cents"
                        className="font-body text-sm text-primary font-medium hover:underline"
                      >
                        View all articles →
                      </Link>
                    </div>

                    {/* Related Articles */}
                    {relatedArticles.length > 0 && (
                      <div className="bg-card rounded-2xl p-6 border border-border/50">
                        <h3 className="font-serif text-lg font-medium text-foreground mb-4">
                          More to Learn
                        </h3>
                        <div className="space-y-4">
                          {relatedArticles.map((related) => (
                            <Link
                              key={related._id}
                              href={`/make-it-make-cents/${related.slug?.current || related._id}`}
                              className="block group"
                            >
                              <h4 className="font-body font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                                {related.title}
                              </h4>
                              <p className="font-body text-xs text-muted-foreground mt-1">
                                {formatDate(related.publishDate)}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-br from-gold/20 via-champagne/30 to-background">
        <div className="container mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-4">
                Never Miss a Money Lesson
              </h2>
              <p className="font-body text-muted-foreground mb-8">
                Subscribe to get Make It Make Cents Wednesday delivered straight to your inbox.
              </p>
              <Link
                href="https://medium.com/@aureaglobalnetwork"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full font-body font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Follow on Medium
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </article>
  )
}
