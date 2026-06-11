"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { DollarSign, TrendingUp, PiggyBank, Target, BookOpen, Users, Calendar, ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function MIMCWHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-gold/20 via-champagne to-sage/20">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-gold/20 blur-3xl" />
      <div className="absolute bottom-20 left-20 w-40 h-40 rounded-full bg-sage/30 blur-3xl" />
      
      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <FadeIn>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 text-gold font-medium text-sm tracking-wider uppercase mb-6">
                <DollarSign className="w-4 h-4" />
                Weekly Financial Education Series
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6 text-balance">
                Make It Make <span className="text-gold italic">Cents</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty">
                A weekly financial literacy series that breaks down personal finance into simple, actionable lessons. Through bite-sized content released every Wednesday, it empowers young women to build financial confidence and develop lifelong money-management skills.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#register"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full font-medium hover:bg-gold hover:text-foreground transition-all duration-300"
                >
                  I love this!
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#curriculum"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-foreground border-2 border-foreground rounded-full font-medium hover:bg-foreground hover:text-background transition-all duration-300"
                >
                  View Covered Contents
                </a>
              </div>
            </FadeIn>
          </div>
          
          <FadeIn delay={0.4} className="relative">
            <div className="relative aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/30 to-sage/30 rounded-3xl transform rotate-6" />
              <div className="absolute inset-0 bg-gradient-to-tr from-champagne to-blush/50 rounded-3xl transform -rotate-3" />
              <div className="relative bg-card rounded-3xl p-8 border border-gold/20 shadow-2xl">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold to-champagne flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-10 h-10 text-foreground" />
                  </div>
                  <h3 className="font-serif text-2xl text-foreground">Financial Freedom</h3>
                  <p className="text-muted-foreground text-sm">Starts with knowledge</p>
                </div>
                <div className="space-y-4">
                  {["Budgeting Basics", "Investing 101", "Credit Building", "Wealth Mindset"].map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="flex items-center gap-3 p-3 bg-background/50 rounded-xl"
                    >
                      <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-gold" />
                      </div>
                      <span className="text-foreground font-medium">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export function MIMCWContent() {
  const modules = [
    {
      icon: PiggyBank,
      title: "Budgeting & Saving",
      description: "Master the fundamentals of budgeting, emergency funds, and smart saving strategies.",
      topics: ["50/30/20 Rule", "Emergency Funds", "Saving Automation", "Expense Tracking"]
    },
    {
      icon: TrendingUp,
      title: "Investing Fundamentals",
      description: "Learn about stocks, bonds, ETFs, and how to build a diversified portfolio.",
      topics: ["Stock Market Basics", "Index Funds & ETFs", "Retirement Accounts", "Risk Management"]
    },
    {
      icon: Target,
      title: "Credit & Debt Management",
      description: "Understand credit scores, managing debt, and building strong credit history.",
      topics: ["Credit Score Factors", "Good vs Bad Debt", "Debt Payoff Strategies", "Credit Card Wisdom"]
    },
    {
      icon: BookOpen,
      title: "Wealth Mindset",
      description: "Develop the psychology of wealth and overcome limiting beliefs about money.",
      topics: ["Money Psychology", "Goal Setting", "Negotiation Skills", "Generational Wealth"]
    }
  ];

  return (
    <section id="curriculum" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-gold/10 text-gold font-medium text-sm tracking-wider uppercase mb-6">
            What we cover
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-4">
            Weekly Content
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our four-module program covers everything you need to take control of your financial future.
          </p>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 gap-8 mb-20">
          {modules.map((module, index) => (
            <StaggerItem key={module.title}>
              <motion.div
                whileHover={{ y: -8 }}
                className="group bg-card rounded-3xl p-8 border border-border/50 hover:border-gold/30 transition-all duration-500 hover:shadow-xl hover:shadow-gold/5"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold/20 to-champagne/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <module.icon className="w-8 h-8 text-gold" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl font-medium text-foreground mb-2 group-hover:text-gold transition-colors">
                      {module.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {module.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {module.topics.map((topic) => (
                        <span
                          key={topic}
                          className="px-3 py-1 bg-background rounded-full text-xs text-muted-foreground border border-border/50"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Stats */}
        <FadeIn>
          <div className="bg-gradient-to-r from-foreground via-foreground to-foreground rounded-3xl p-12 text-background">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { value: "34,000", label: "Reach" },
                { value: "95%", label: "Would Recommend" },
                { value: "45+", label: "Countries" },
                { value: "100%", label: "Useful" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="font-serif text-4xl md:text-5xl text-gold mb-2">{stat.value}</div>
                  <div className="text-background/70 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export function MIMCWRegister() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitted(true);
  };

  return (
    <section id="register" className="py-24 bg-gradient-to-br from-champagne/30 via-background to-sage/20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 text-gold font-medium text-sm tracking-wider uppercase mb-6">
              <Calendar className="w-4 h-4" />
              New projects coming soon
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">
              Liked this?
            </h2>
            <p className="text-muted-foreground mb-8">
              Join our team of global leaders, and help us help youth and women all across the world.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                "Certificates",
                "Part of global team",
                "Resources and kits included",
                "Help ACTUALLY make a difference",
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-sage/30 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-sage" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            {isSubmitted ? (
              <div className="bg-card rounded-3xl p-12 text-center border border-gold/20">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="w-20 h-20 rounded-full bg-sage/30 flex items-center justify-center mx-auto mb-6"
                >
                  <Sparkles className="w-10 h-10 text-sage" />
                </motion.div>
                <h3 className="font-serif text-2xl text-foreground mb-4">You&apos;re Registered!</h3>
                <p className="text-muted-foreground">
                  Check your email for confirmation and next steps. We can&apos;t wait to see you in the workshop!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card rounded-3xl p-8 md:p-12 border border-border/50">
                <h3 className="font-serif text-2xl text-foreground mb-2">Join Today for Free</h3>
                <p className="text-muted-foreground mb-8">Happy to have you (potentially) on the AGN Team!</p>
                
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                      <Input required placeholder="Your first name" className="bg-background" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                      <Input required placeholder="Your last name" className="bg-background" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                    <Input type="email" required placeholder="you@example.com" className="bg-background" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">School/Organization</label>
                    <Input placeholder="Your university or organization" className="bg-background" />
                  </div>
                  <Button
                    type="submit"
                    className="w-full h-12 rounded-full bg-foreground text-background hover:bg-gold hover:text-foreground transition-all"
                  >
                    Join Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
