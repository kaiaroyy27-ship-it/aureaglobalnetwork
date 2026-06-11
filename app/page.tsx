import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { HeroSection } from '@/components/home/hero-section'
import { MissionSection } from '@/components/home/mission-section'
import { ImpactStatsSection } from '@/components/home/impact-stats-section'
import { FounderSpotlight } from '@/components/home/founder-spotlight'
import { ProgramsPreview } from '@/components/home/programs-preview'
import { TestimonialsSection } from '@/components/home/testimonials-section'
import { EventsPreview } from '@/components/home/events-preview'
import { MakeItMakeCentsPreview } from '@/components/home/make-it-make-cents-preview'
import { ChaptersPreview } from '@/components/home/chapters-preview'
import { ComingSoonPreview } from '@/components/home/coming-soon-preview'
import { JoinUsPreview } from '@/components/home/join-us-preview'
import { JournalCTA } from '@/components/home/journal-cta'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <MissionSection />
      <ImpactStatsSection />
      <FounderSpotlight />
      <ProgramsPreview />
      <TestimonialsSection />
      <EventsPreview />
      <MakeItMakeCentsPreview />
      <ChaptersPreview />
      <ComingSoonPreview />
      <JoinUsPreview />
      <JournalCTA />
      <Footer />
    </main>
  )
}
