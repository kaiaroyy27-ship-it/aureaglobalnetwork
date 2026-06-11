import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { WhatWeDoHero } from '@/components/what-we-do/what-we-do-hero'
import { ProgramsGrid } from '@/components/what-we-do/programs-grid'

export const metadata: Metadata = {
  title: 'What We Do',
  description: 'Discover our programs: Events & Workshops, Interviews, School Chapters, and Make It Make Cents Wednesday.',
}

export default function WhatWeDoPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <WhatWeDoHero />
      <ProgramsGrid />
      <Footer />
    </main>
  )
}
