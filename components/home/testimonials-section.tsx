'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { FadeIn } from '@/components/ui/motion'
import type { Testimonial } from '@/lib/types'

interface TestimonialsProps {
  testimonials?: Testimonial[]
}

const defaultTestimonials: Testimonial[] = [
  {
    _id: "1",
    name: "Sarah Chen",
    role: "Student",
    quote: "AGN transformed my understanding of personal finance and gave me the confidence to pursue my entrepreneurial dreams.",
  },
  {
    _id: "2",
    name: "Amira Hassan",
    role: "Volunteer",
    quote: "Being part of this community has connected me with inspiring women from around the world who share my passion for economic equality.",
  },
  {
    _id: "3",
    name: "Elena Rodriguez",
    role: "Attendee",
    quote: "The financial literacy workshops have been life-changing for students in my community.",
  },
]

export function TestimonialsSection({ testimonials = defaultTestimonials }: TestimonialsProps) {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-primary/5 blur-3xl" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-block font-body text-xs uppercase tracking-[0.2em] text-primary mb-4">
              Testimonials
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
              Voices From Our Community
            </h2>
          </div>
        </FadeIn>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Quote Icon */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2">
              <Quote className="w-16 h-16 text-primary/10" />
            </div>

            {/* Testimonial Content */}
            <div className="min-h-[300px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-relaxed mb-8 text-balance">
                    &ldquo;{testimonials[current].quote}&rdquo;
                  </blockquote>
                  
                  {/* Author */}
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <span className="font-serif text-xl text-primary">
                        {testimonials[current].name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h4 className="font-serif text-lg font-medium text-foreground">
                      {testimonials[current].name}
                    </h4>
                    <p className="font-body text-sm text-muted-foreground">
                      {testimonials[current].role}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="p-3 rounded-full border border-border hover:border-primary/50 hover:bg-primary/5 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              
              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === current
                        ? 'w-8 bg-primary'
                        : 'bg-border hover:bg-primary/50'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={next}
                className="p-3 rounded-full border border-border hover:border-primary/50 hover:bg-primary/5 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
