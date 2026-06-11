'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Wallet, 
  Sparkles, 
  ArrowRight, 
  Zap,
  Globe,
  TrendingUp,
  Users,
  Shield,
  Heart,
  Star,
  ChevronRight
} from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/motion'
import { Button } from '@/components/ui/button'

const features = [
  {
    title: 'Financial Growth',
    description: 'Tools designed to help young women build wealth with confidence.',
    icon: TrendingUp,
  },
  {
    title: 'Global Community',
    description: 'Connect with ambitious women worldwide who share your goals.',
    icon: Globe,
  },
  {
    title: 'Accessible Innovation',
    description: 'Modern technology making financial empowerment effortless.',
    icon: Zap,
  },
  {
    title: 'Secure & Private',
    description: 'Your data and financial journey, protected and respected.',
    icon: Shield,
  },
]

export function WalliForWomenContent() {
  return (
    <div className="min-h-screen bg-background pt-24">
      {/* Hero Section - Futuristic Startup Aesthetic */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center justify-center">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blush/30 via-background to-champagne/20">
          {/* Glowing orbs */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" 
          />
          <motion.div 
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-rose/10 rounded-full blur-3xl" 
          />
          <motion.div 
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gold/5 rounded-full blur-3xl" 
          />
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              {/* Development Badge */}
              <FadeIn>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-card/80 backdrop-blur-sm rounded-full border border-primary/20 shadow-lg shadow-primary/5 mb-8"
                >
                  <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-2 h-2 rounded-full bg-primary"
                  />
                  <span className="font-body text-sm font-medium text-foreground">Currently in Development</span>
                </motion.div>
              </FadeIn>

              {/* Main Title */}
              <FadeIn delay={0.1}>
                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-foreground mb-6 tracking-tight">
                  Walli for Women
                </h1>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0">
                  Aurea Global Network is developing a new platform focused on redefining how young women engage with financial growth, community, and opportunity in the modern world.
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <p className="font-body text-base text-muted-foreground/80 leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0">
                  Built with accessibility, innovation, and global connection in mind, this upcoming project aims to create a more empowering and informed future for the next generation.
                </p>
              </FadeIn>

              {/* CTA */}
              <FadeIn delay={0.4}>
                <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
                  <Link href="/join-us">
                    <Button 
                      size="lg" 
                      className="rounded-full px-10 py-6 bg-foreground text-background hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/10"
                    >
                      Get Early Access
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                  <Link href="/the-first-step">
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="rounded-full px-10 py-6 border-2 border-primary/30 hover:border-primary hover:bg-primary/5"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </FadeIn>
            </div>

            {/* Floating UI Mockup */}
            <FadeIn delay={0.3} className="relative hidden lg:block">
              <div className="relative">
                {/* Main card - Glassmorphism UI */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="relative bg-card/60 backdrop-blur-xl rounded-[2rem] p-8 border border-border/50 shadow-2xl shadow-primary/10"
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-rose/20 flex items-center justify-center">
                        <Wallet className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-serif text-lg font-medium text-foreground">Walli</p>
                        <p className="font-body text-xs text-muted-foreground">For Women</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                          className="w-2 h-2 rounded-full bg-primary"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Stats preview */}
                  <div className="bg-gradient-to-br from-blush/30 to-champagne/20 rounded-2xl p-6 mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-body text-sm text-muted-foreground">Financial Freedom Score</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">Growing</span>
                    </div>
                    <div className="flex items-end gap-4">
                      <span className="font-serif text-4xl font-medium text-foreground">847</span>
                      <div className="flex items-center gap-1 text-sage mb-1">
                        <TrendingUp className="w-4 h-4" />
                        <span className="font-body text-sm">+12.5%</span>
                      </div>
                    </div>
                    {/* Progress bar */}
                    <div className="mt-4 h-2 bg-border/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '75%' }}
                        transition={{ duration: 1.5, delay: 1 }}
                        className="h-full bg-gradient-to-r from-primary to-rose rounded-full"
                      />
                    </div>
                  </div>

                  {/* Quick actions */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { icon: TrendingUp, label: 'Invest' },
                      { icon: Users, label: 'Community' },
                      { icon: Heart, label: 'Goals' },
                    ].map((action) => (
                      <div key={action.label} className="bg-card/80 rounded-xl p-4 text-center border border-border/30 hover:border-primary/30 transition-colors cursor-pointer group">
                        <action.icon className="w-5 h-5 mx-auto mb-2 text-primary group-hover:scale-110 transition-transform" />
                        <span className="font-body text-xs text-muted-foreground">{action.label}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Floating elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -right-6 bg-card/80 backdrop-blur-sm rounded-2xl p-4 border border-border/50 shadow-lg"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-body text-sm text-foreground">Smart Insights</span>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -left-4 bg-card/80 backdrop-blur-sm rounded-2xl p-4 border border-border/50 shadow-lg"
                >
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-gold fill-gold" />
                    <span className="font-body text-sm text-foreground">Premium Features</span>
                  </div>
                </motion.div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Features Section - Layered cards */}
      <section className="py-28 bg-gradient-to-b from-background via-blush/5 to-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <FadeIn>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-6">
                The Future of Financial Empowerment
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
                A platform designed with purpose, built for the modern woman
              </p>
            </FadeIn>
          </div>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <StaggerItem key={feature.title}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="group relative bg-card/60 backdrop-blur-sm rounded-3xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 h-full overflow-hidden"
                >
                  {/* Subtle glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-rose/0 group-hover:from-primary/5 group-hover:to-rose/5 transition-all duration-500 rounded-3xl" />
                  
                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-rose/10 flex items-center justify-center mb-6 group-hover:from-primary/20 group-hover:to-rose/20 transition-all duration-300">
                      <feature.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-serif text-xl font-medium text-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="font-body text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Vision Section - Premium feel */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-champagne/20 via-background to-blush/20" />
        
        <div className="container mx-auto px-6 lg:px-8 relative">
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-card/80 backdrop-blur-md rounded-[2.5rem] p-12 md:p-16 border border-border/50 shadow-2xl shadow-primary/5"
              >
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-primary/20 via-rose/10 to-gold/20 flex items-center justify-center mb-8">
                      <Globe className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl font-light text-foreground mb-6">
                      Redefining What&apos;s Possible
                    </h3>
                    <p className="font-body text-muted-foreground leading-relaxed mb-6">
                      The future of financial empowerment is evolving. We&apos;re building something that goes beyond traditional finance—a movement that connects, educates, and empowers.
                    </p>
                    <ul className="space-y-3">
                      {['Personalized learning paths', 'Community-driven growth', 'Real-world application'].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-muted-foreground">
                          <ChevronRight className="w-4 h-4 text-primary" />
                          <span className="font-body text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="relative">
                    <div className="aspect-square rounded-3xl bg-gradient-to-br from-blush/30 via-champagne/20 to-rose/20 flex items-center justify-center">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="w-32 h-32 rounded-full border-2 border-dashed border-primary/20 flex items-center justify-center"
                      >
                        <div className="w-20 h-20 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center shadow-lg">
                          <Wallet className="w-10 h-10 text-primary" />
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-t from-blush/20 to-background">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="font-serif text-xl md:text-2xl text-foreground/80 italic mb-10">
              &ldquo;The future of financial empowerment is evolving.&rdquo;
            </p>
            <Link href="/join-us">
              <Button 
                size="lg" 
                className="rounded-full px-12 py-6 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all"
              >
                Be Part of the Future
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
