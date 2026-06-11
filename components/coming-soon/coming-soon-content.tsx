"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Bell, CheckCircle, ArrowRight } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { mockComingSoon } from "@/lib/mock-data";

export function ComingSoonContent() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate subscription
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubscribed(true);
    setEmail("");
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-champagne via-background to-blush/20 py-24">
      <div className="container mx-auto px-6">
        {/* Hero */}
        <div className="text-center mb-20">
          <FadeIn>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 text-gold font-medium text-sm tracking-wider uppercase mb-6">
              <Sparkles className="w-4 h-4" />
              Exciting Things Ahead
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-foreground mb-6 text-balance">
              Coming <span className="text-gold italic">Soon</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty mb-12">
              We&apos;re working on new initiatives to expand our impact. Here&apos;s a sneak peek at what&apos;s in the pipeline.
            </p>
          </FadeIn>

          {/* Newsletter Signup */}
          <FadeIn delay={0.3}>
            {isSubscribed ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-3 px-6 py-4 bg-sage/20 rounded-full border border-sage/30"
              >
                <CheckCircle className="w-5 h-5 text-sage" />
                <span className="text-foreground font-medium">You&apos;re on the list! We&apos;ll keep you updated.</span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 h-12 rounded-full bg-background border-border/50 focus:border-gold px-6"
                />
                <Button
                  type="submit"
                  className="h-12 px-8 rounded-full bg-foreground text-background hover:bg-gold hover:text-foreground transition-all duration-300"
                >
                  <Bell className="w-4 h-4 mr-2" />
                  Notify Me
                </Button>
              </form>
            )}
          </FadeIn>
        </div>

        {/* Coming Soon Items */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockComingSoon.map((item, index) => (
            <StaggerItem key={item._id}>
              <motion.div
                whileHover={{ y: -8 }}
                className="group relative bg-card rounded-3xl p-8 border border-border/50 hover:border-gold/30 transition-all duration-500 hover:shadow-xl hover:shadow-gold/5 overflow-hidden"
              >
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  {/* Status Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      item.status === "in-development" 
                        ? "bg-gold/20 text-gold" 
                        : item.status === "coming-q1-2025"
                        ? "bg-sage/20 text-sage"
                        : "bg-blush/30 text-foreground"
                    }`}>
                      {item.status === "in-development" 
                        ? "In Development" 
                        : item.status === "coming-q1-2025"
                        ? "Q1 2025"
                        : "Planning Phase"}
                    </span>
                    <motion.div
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.2, rotate: 15 }}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-champagne to-gold/30 flex items-center justify-center"
                    >
                      <Sparkles className="w-5 h-5 text-gold" />
                    </motion.div>
                  </div>

                  <h3 className="font-serif text-2xl font-medium text-foreground mb-3 group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 line-clamp-3">
                    {item.description}
                  </p>

                  {/* Features Preview */}
                  {item.features && item.features.length > 0 && (
                    <div className="space-y-2 mb-6">
                      {item.features.slice(0, 3).map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center text-gold text-sm font-medium group-hover:gap-3 gap-2 transition-all">
                    <span>Learn more when it launches</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom CTA */}
        <FadeIn delay={0.5} className="text-center mt-20">
          <div className="bg-gradient-to-r from-foreground via-foreground to-foreground rounded-3xl p-12 text-background">
            <h2 className="font-serif text-2xl md:text-4xl mb-4">
              Have an Idea for Us?
            </h2>
            <p className="text-background/70 max-w-xl mx-auto mb-8">
              We&apos;re always looking for new ways to empower young women. Share your ideas with us.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-foreground rounded-full font-medium hover:bg-champagne transition-all duration-300"
            >
              Share Your Ideas
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
