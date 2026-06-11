"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Play, ArrowRight } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { mockInterviews } from "@/lib/mock-data";

interface Interview {
  _id: string;
  title: string;
  slug?: { current: string };
  thumbnail?: string;
  category?: string;
  publishedAt: string;
  interviewee: {
    name: string;
    role: string;
    image: string;
  };
  highlightQuote?: string;
}

export function InterviewsHero() {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-champagne/30 via-background to-blush/20">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-gold/10 rounded-full blur-3xl" 
        />
      </div>
      <div className="container mx-auto px-6 py-24 text-center relative z-10">
        <FadeIn>
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm tracking-wider uppercase mb-6 border border-primary/20">
            Conversations That Inspire
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-foreground mb-6 text-balance">
            Interviews & <span className="text-primary italic">Stories</span>
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Insightful conversations with trailblazing women in finance, leadership, and entrepreneurship
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

export function InterviewsGrid() {
  const [interviews, setInterviews] = useState<Interview[]>(mockInterviews);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchInterviews = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/interviews");
        if (response.ok) {
          const data = await response.json();
          setInterviews(data);
        } else {
          console.warn("Failed to fetch interviews, using fallback data");
          setInterviews(mockInterviews);
        }
      } catch (error) {
        console.error("Error fetching interviews:", error);
        setInterviews(mockInterviews);
      } finally {
        setIsLoading(false);
      }
    };

    fetchInterviews();
  }, []);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {interviews.map((interview) => (
            <StaggerItem key={interview._id}>
              <motion.article
                whileHover={{ y: -8 }}
                className="group bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5"
              >
                <Link href={`/interviews/${interview.slug?.current || interview._id}`}>
                  <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-blush/20 to-champagne/20">
                    <Image
                      src={interview.thumbnail || '/placeholder.svg'}
                      alt={interview.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div 
                        whileHover={{ scale: 1.1 }}
                        className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg"
                      >
                        <Play className="w-6 h-6 text-primary-foreground fill-primary-foreground ml-1" />
                      </motion.div>
                    </div>
                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-card/90 backdrop-blur-sm text-xs font-medium text-foreground rounded-full">
                        {interview.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(interview.publishedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
                    </div>
                    <h3 className="font-serif text-xl font-medium text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {interview.title}
                    </h3>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full overflow-hidden relative border-2 border-primary/20">
                        <Image
                          src={interview.interviewee.image || '/placeholder.svg'}
                          alt={interview.interviewee.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-body text-sm font-medium text-foreground">
                          {interview.interviewee.name}
                        </p>
                        <p className="font-body text-xs text-muted-foreground">
                          {interview.interviewee.role}
                        </p>
                      </div>
                    </div>
                    {interview.highlightQuote && (
                      <blockquote className="text-sm italic text-foreground/70 border-l-2 border-primary/30 pl-3 line-clamp-2">
                        &ldquo;{interview.highlightQuote}&rdquo;
                      </blockquote>
                    )}
                  </div>
                </Link>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.4} className="text-center mt-16">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            View All Interviews
            <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
