import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { TheFirstStepContent } from '@/components/initiatives/the-first-step-content'

export const metadata: Metadata = {
  title: 'The First Step | Financial Literacy for Beginners',
  description: 'The First Step is a workshop series designed to introduce young women to the fundamentals of financial literacy and personal finance management.',
}

export default function TheFirstStepPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <TheFirstStepContent />
      <Footer />
    </main>
  )
}
