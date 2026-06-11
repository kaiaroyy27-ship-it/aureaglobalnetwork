"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Instagram, Linkedin, Send, CheckCircle } from "lucide-react";
import { FadeIn } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function ContactHero() {
  return (
    <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blush/30 via-background to-champagne/20">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
      <div className="container mx-auto px-6 py-24 text-center relative z-10">
        <FadeIn>
          <span className="inline-block px-4 py-2 rounded-full bg-gold/10 text-gold font-medium text-sm tracking-wider uppercase mb-6">
            Let&apos;s Connect
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-foreground mb-6 text-balance">
            Get in <span className="text-gold italic">Touch</span>
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Have a question, partnership idea, or just want to say hello? We&apos;d love to hear from you.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <FadeIn>
        <div className="bg-gradient-to-br from-sage/20 to-champagne/20 rounded-3xl p-12 text-center border border-gold/20">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="w-20 h-20 rounded-full bg-sage/30 flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle className="w-10 h-10 text-sage" />
          </motion.div>
          <h3 className="font-serif text-2xl text-foreground mb-4">Message Sent!</h3>
          <p className="text-muted-foreground">
            Thank you for reaching out. We&apos;ll get back to you within 24-48 hours.
          </p>
        </div>
      </FadeIn>
    );
  }

  return (
    <FadeIn>
      <div className="bg-card rounded-3xl p-8 md:p-12 border border-border/50">
        <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-2">Send us a message</h2>
        <p className="text-muted-foreground mb-8">Fill out the form below and we&apos;ll respond as soon as possible.</p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                First Name
              </label>
              <Input
                id="firstName"
                name="firstName"
                required
                placeholder="Your first name"
                className="bg-background border-border/50 focus:border-gold"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                Last Name
              </label>
              <Input
                id="lastName"
                name="lastName"
                required
                placeholder="Your last name"
                className="bg-background border-border/50 focus:border-gold"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Email Address
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="bg-background border-border/50 focus:border-gold"
            />
          </div>
          
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
              Subject
            </label>
            <select
              id="subject"
              name="subject"
              required
              className="w-full h-10 px-4 rounded-md bg-background border border-border/50 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 text-foreground"
            >
              <option value="">Select a topic</option>
              <option value="partnership">Partnership Inquiry</option>
              <option value="chapter">Start a Chapter</option>
              <option value="ambassador">Become an Ambassador</option>
              <option value="media">Media & Press</option>
              <option value="general">General Question</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Tell us more about your inquiry..."
              className="w-full px-4 py-3 rounded-md bg-background border border-border/50 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 text-foreground resize-none"
            />
          </div>
          
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-foreground text-background hover:bg-gold hover:text-foreground transition-all duration-300 h-12 rounded-full font-medium"
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full"
                />
                Sending...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                Send Message
                <Send className="w-4 h-4" />
              </span>
            )}
          </Button>
        </form>
      </div>
    </FadeIn>
  );
}

export function ContactInfo() {
  return (
    <FadeIn delay={0.2}>
      <div className="space-y-8">
        <div>
          <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">Other Ways to Reach Us</h2>
          <p className="text-muted-foreground mb-8">
            Prefer a different method? Connect with us through any of these channels.
          </p>
        </div>

        <div className="space-y-6">
          <motion.a
            href="mailto:hello@aureaglobal.org"
            whileHover={{ x: 8 }}
            className="flex items-start gap-4 p-6 bg-card rounded-2xl border border-border/50 hover:border-gold/30 transition-all group"
          >
            <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
              <Mail className="w-5 h-5 text-gold" />
            </div>
            <div>
              <h3 className="font-medium text-foreground mb-1">Email Us</h3>
              <p className="text-muted-foreground text-sm">aureaglobalnetwork@gmail.com</p>
              <p className="text-muted-foreground/70 text-xs mt-1">We respond within 24-48 hours</p>
            </div>
          </motion.a>

          <motion.div
            whileHover={{ x: 8 }}
            className="flex items-start gap-4 p-6 bg-card rounded-2xl border border-border/50"
          >
            <div className="w-12 h-12 rounded-full bg-blush/30 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-foreground" />
            </div>
            <div>
              <h3 className="font-medium text-foreground mb-1">Location</h3>
              <p className="text-muted-foreground text-sm">Global Organization</p>
              <p className="text-muted-foreground/70 text-xs mt-1">With reach worldwide</p>
            </div>
          </motion.div>
        </div>

        <div className="pt-8 border-t border-border/50">
          <h3 className="font-medium text-foreground mb-4">Follow Our Journey</h3>
          <div className="flex gap-4">
            <motion.a
              href="https://instagram.com/aureaglobalnetwork"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full bg-gradient-to-br from-blush to-gold/50 flex items-center justify-center text-foreground hover:shadow-lg transition-shadow"
            >
              <Instagram className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/company/aureaglobalnetwork"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center text-background hover:shadow-lg transition-shadow"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
