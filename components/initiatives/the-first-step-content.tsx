'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Sparkles, 
  ArrowRight, 
  Heart,
  Star,
  Globe,
  Lightbulb,
  Users
} from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/motion'
import { Button } from '@/components/ui/button'

const values = [
  {
    title: 'Accessibility',
    description: 'Making financial education approachable for everyone, regardless of background.',
    icon: Globe,
  },
  {
    title: 'Empowerment',
    description: 'Building confidence through understanding and knowledge.',
    icon: Lightbulb,
  },
  {
    title: 'Community',
    description: 'Creating meaningful connections among ambitious young women.',
    icon: Users,
  },
  {
    title: 'Impact',
    description: 'Driving real change in how women approach financial independence.',
    icon: Heart,
  },
]

export function TheFirstStepContent() {
  return (
    <div className="min-h-screen bg-background pt-24">
      {/* Hero Section - Cinematic and Elegant */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center justify-center">
        {/* Animated gradient background */}
        <div className="absolute inset-0">
          <motion.div 
            animate={{ 
              background: [
                'linear-gradient(135deg, oklch(0.82 0.05 30) 0%, oklch(0.97 0.008 30) 50%, oklch(0.88 0.03 75) 100%)',
                'linear-gradient(135deg, oklch(0.88 0.03 75) 0%, oklch(0.97 0.008 30) 50%, oklch(0.82 0.05 30) 100%)',
                'linear-gradient(135deg, oklch(0.82 0.05 30) 0%, oklch(0.97 0.008 30) 50%, oklch(0.88 0.03 75) 100%)',
              ]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0"
          />
        </div>

        {/* Soft glowing elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div 
            animate={{ 
              opacity: [0.3, 0.5, 0.3],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" 
          />
          <motion.div 
            animate={{ 
              opacity: [0.2, 0.4, 0.2],
              scale: [1.1, 1, 1.1],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold/10 rounded-full blur-3xl" 
          />
          <motion.div 
            animate={{ 
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose/5 rounded-full blur-3xl" 
          />
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Launching Soon Badge */}
            <FadeIn>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-card/80 backdrop-blur-sm rounded-full border border-primary/20 shadow-lg shadow-primary/5 mb-10"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles className="w-4 h-4 text-primary" />
                </motion.div>
                <span className="font-body text-sm font-medium text-foreground tracking-wide">Launching Soon</span>
              </motion.div>
            </FadeIn>

            {/* Main Title - Oversized elegant typography */}
            <FadeIn delay={0.2}>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-foreground mb-8 tracking-tight"
              >
                The First Step
              </motion.h1>
            </FadeIn>

            {/* Elegant divider */}
            <FadeIn delay={0.4}>
              <div className="flex items-center justify-center gap-4 mb-10">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: 60 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="h-px bg-gradient-to-r from-transparent to-primary/40" 
                />
                <Star className="w-4 h-4 text-gold" />
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: 60 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="h-px bg-gradient-to-l from-transparent to-primary/40" 
                />
              </div>
            </FadeIn>

            {/* Description */}
            <FadeIn delay={0.5}>
              <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6 text-pretty">
                A new initiative by Aurea Global Network designed to make financial empowerment more accessible, approachable, and impactful for young women globally.
              </p>
            </FadeIn>

            <FadeIn delay={0.6}>
              <p className="font-body text-base text-muted-foreground/80 leading-relaxed max-w-xl mx-auto mb-12 text-pretty">
                Rooted in the belief that confidence begins with understanding, The First Step is being created to inspire meaningful conversations around independence, ambition, and opportunity.
              </p>
            </FadeIn>

            {/* Quote - Editorial style */}
            <FadeIn delay={0.7}>
              <div className="relative mb-12">
                <motion.blockquote 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                  className="font-serif text-xl md:text-2xl text-foreground/90 italic max-w-lg mx-auto"
                >
                  &ldquo;Every journey toward empowerment begins with a first step.&rdquo;
                </motion.blockquote>
              </div>
            </FadeIn>

            {/* CTA Buttons */}
            <FadeIn delay={0.8}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/join-us">
                  <Button 
                    size="lg" 
                    className="rounded-full px-10 py-6 bg-foreground text-background hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/10"
                  >
                    Join the Movement
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="rounded-full px-10 py-6 border-2 border-primary/30 hover:border-primary hover:bg-primary/5 transition-all duration-300"
                  >
                    Get Notified
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center pt-2">
            <motion.div 
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-primary"
            />
          </div>
        </motion.div>
      </section>

      {/* Values Section - Glassmorphism cards */}
      <section className="py-28 bg-gradient-to-b from-background via-blush/10 to-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <FadeIn>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-6">
                What We Stand For
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto">
                The principles guiding our mission to empower the next generation
              </p>
            </FadeIn>
          </div>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <StaggerItem key={value.title}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-card/60 backdrop-blur-sm rounded-3xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 h-full"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-rose/10 flex items-center justify-center mb-6 group-hover:from-primary/20 group-hover:to-rose/20 transition-all duration-300">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-medium text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Coming Soon Section - Premium feel */}
      <section className="py-28 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-champagne/20 via-background to-blush/20" />
        
        <div className="container mx-auto px-6 lg:px-8 relative">
          <FadeIn>
            <div className="max-w-3xl mx-auto">
              {/* Premium card */}
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-card/80 backdrop-blur-md rounded-[2rem] p-12 md:p-16 border border-border/50 shadow-2xl shadow-primary/5 text-center"
              >
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary/20 via-rose/10 to-gold/20 flex items-center justify-center mx-auto mb-8"
                >
                  <Heart className="w-10 h-10 text-primary" />
                </motion.div>

                <h3 className="font-serif text-2xl md:text-3xl font-light text-foreground mb-6">
                  Something Meaningful Is Coming
                </h3>

                <p className="font-body text-muted-foreground leading-relaxed mb-10 max-w-lg mx-auto">
                  We&apos;re crafting an experience that will transform how young women approach financial independence. Be the first to know when we launch.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/join-us">
                    <Button 
                      size="lg" 
                      className="rounded-full px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all"
                    >
                      Stay Updated
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-gradient-to-t from-blush/20 to-background">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="font-serif text-xl md:text-2xl text-foreground/80 italic">
              &ldquo;The future belongs to those who take the first step.&rdquo;
            </p>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
