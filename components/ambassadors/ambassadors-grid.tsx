'use client'

import { motion } from 'framer-motion'
import { MapPin, Instagram, Linkedin } from 'lucide-react'
import { StaggerContainer, staggerItem } from '@/components/ui/motion'
import { mockAmbassadors } from '@/lib/mock-data'

export function AmbassadorsGrid() {
  return (
    <section className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-6 lg:px-8">
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {mockAmbassadors.map((ambassador, index) => (
            <motion.div
              key={ambassador._id || index}
              variants={staggerItem}
              className="group"
            >
              <div className="text-center">
                {/* Avatar */}
                <div className="relative mx-auto mb-4">
                  <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-full bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 flex items-center justify-center mx-auto overflow-hidden border-2 border-background shadow-lg group-hover:border-primary/30 transition-colors">
                    <span className="font-serif text-2xl text-primary">
                      {ambassador.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <h3 className="font-serif text-base font-medium text-foreground mb-1 group-hover:text-primary transition-colors">
                  {ambassador.name}
                </h3>
                
                <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground mb-2">
                  <MapPin className="w-3 h-3" />
                  <span className="font-body">{ambassador.country}</span>
                </div>

                <p className="font-body text-xs text-muted-foreground line-clamp-2 mb-3">
                  {ambassador.bio}
                </p>

                {/* Social Links */}
                {ambassador.socialLinks && (
                  <div className="flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {ambassador.socialLinks.instagram && (
                      <a
                        href={ambassador.socialLinks.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                        aria-label="Instagram"
                      >
                        <Instagram className="w-3 h-3 text-primary" />
                      </a>
                    )}
                    {ambassador.socialLinks.linkedin && (
                      <a
                        href={ambassador.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="w-3 h-3 text-primary" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
