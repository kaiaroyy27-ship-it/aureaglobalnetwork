"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Users, ArrowRight, Globe } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { mockChapters } from "@/lib/mock-data";

export function ChaptersHero() {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-sage/30 via-background to-champagne/20">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
      <div className="container mx-auto px-6 py-24 text-center relative z-10">
        <FadeIn>
          <span className="inline-block px-4 py-2 rounded-full bg-gold/10 text-gold font-medium text-sm tracking-wider uppercase mb-6">
            A Global Movement
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-foreground mb-6 text-balance">
            Our <span className="text-gold italic">Chapters</span>
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Connect with Aurea communities around the world. Each chapter brings our mission to life locally.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

export function ChaptersMap() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Where We Are
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From universities to communities, Aurea chapters are making an impact worldwide
          </p>
        </FadeIn>

        {/* World Map Placeholder */}
        <FadeIn delay={0.2} className="relative aspect-[2/1] bg-gradient-to-br from-champagne/30 to-sage/20 rounded-3xl overflow-hidden mb-16 border border-border/50">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <Globe className="w-24 h-24 text-gold/50 mx-auto mb-4" />
              <p className="text-muted-foreground font-medium">Interactive Map Coming Soon</p>
              <p className="text-sm text-muted-foreground/70">Explore our global network of chapters</p>
            </div>
          </div>
          {/* Decorative dots representing locations */}
          <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-gold animate-pulse" />
          <div className="absolute top-1/3 left-1/2 w-3 h-3 rounded-full bg-gold animate-pulse delay-100" />
          <div className="absolute top-1/2 left-1/3 w-3 h-3 rounded-full bg-gold animate-pulse delay-200" />
          <div className="absolute bottom-1/3 right-1/4 w-3 h-3 rounded-full bg-gold animate-pulse delay-300" />
          <div className="absolute top-1/4 right-1/3 w-3 h-3 rounded-full bg-gold animate-pulse delay-400" />
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockChapters.map((chapter) => (
            <StaggerItem key={chapter._id}>
              <motion.article
                whileHover={{ y: -8 }}
                className="group bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-gold/30 transition-all duration-500 hover:shadow-xl hover:shadow-gold/5"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={chapter.image || "/placeholder.svg"}
                    alt={chapter.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      chapter.status === "active" 
                        ? "bg-sage text-foreground" 
                        : "bg-gold/80 text-foreground"
                    }`}>
                      {chapter.status === "active" ? "Active Chapter" : "Coming Soon"}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-medium text-foreground mb-2 group-hover:text-gold transition-colors">
                    {chapter.name}
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                    <MapPin className="w-4 h-4" />
                    <span>{chapter.location}</span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {chapter.description}
                  </p>
                  {chapter.memberCount && (
                    <div className="flex items-center gap-2 text-gold">
                      <Users className="w-4 h-4" />
                      <span className="text-sm font-medium">{chapter.memberCount} Members</span>
                    </div>
                  )}
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.4} className="text-center mt-16">
          <div className="bg-gradient-to-r from-champagne/50 via-gold/20 to-blush/50 rounded-3xl p-12 border border-gold/20">
            <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
              Start a Chapter in Your Community
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Bring Aurea&apos;s mission to your university or community. We provide resources, mentorship, and support to help you lead.
            </p>
            <Link
              href="/join-us"
              className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full font-medium hover:bg-gold hover:text-foreground transition-all duration-300"
            >
              Apply to Start a Chapter
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
