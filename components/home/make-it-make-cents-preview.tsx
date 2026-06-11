'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp } from 'lucide-react'
import { FadeIn, StaggerContainer, staggerItem } from '@/components/ui/motion'
import { mockMakeItMakeCentsPosts } from '@/lib/mock-data'
import type { MakeItMakeCentsPost } from '@/lib/types'

interface MakeItMakeCentsPreviewProps {
  posts?: MakeItMakeCentsPost[]
}

export function MakeItMakeCentsPreview({ posts }: MakeItMakeCentsPreviewProps) {
  const displayPosts = posts || mockMakeItMakeCentsPosts.slice(0, 3)

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-accent/20 via-background to-secondary/20 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="font-body text-sm font-medium text-primary">
                Every Wednesday
              </span>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4">
              Make It Make Cents Wednesday
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="font-body text-muted-foreground">
              Breaking down complex financial concepts into simple, actionable knowledge for youth and women.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer className="grid md:grid-cols-3 gap-6 mb-12">
          {displayPosts.map((post, index) => (
            <motion.div
              key={post._id || index}
              variants={staggerItem}
              className="group"
            >
              <Link href={`/make-it-make-cents/${post.slug?.current || post._id}`}>
                <div className="h-full p-6 bg-card rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                  {/* Date */}
                  <span className="font-body text-xs text-muted-foreground">
                    {new Date(post.publishDate).toLocaleDateString('en-US', {
                      weekday: 'long',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </span>
                  
                  <h3 className="font-serif text-xl font-medium text-foreground mt-2 mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="font-body text-sm text-muted-foreground line-clamp-3">
                    {post.explanation}
                  </p>

                  <span className="inline-flex items-center gap-2 font-body text-sm font-medium text-primary mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    Read more
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.4}>
          <div className="text-center">
            <Link
              href="/make-it-make-cents"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body font-medium rounded-full hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20"
            >
              View All Posts
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
