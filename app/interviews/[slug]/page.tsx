import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { InterviewDetailContent } from '@/components/interviews/interview-detail-content'
import { mockInterviews } from '@/lib/mock-data'
import { client } from '@/lib/sanity.client'
import { INTERVIEW_BY_SLUG_QUERY } from '@/lib/sanity.queries'

interface InterviewPageProps {
  params: Promise<{ slug: string }>
}

async function getInterview(slug: string) {
  try {
    if (client) {
      const interview = await client.fetch(INTERVIEW_BY_SLUG_QUERY, { slug })
      if (interview) return interview
    }
  } catch (error) {
    console.error("[Interview Page] Error fetching from Sanity:", error)
  }
  
  // Fallback to mock data
  return mockInterviews.find(i => i.slug?.current === slug || i._id === slug)
}

export async function generateMetadata({ params }: InterviewPageProps): Promise<Metadata> {
  const { slug } = await params
  const interview = await getInterview(slug)
  
  if (!interview) {
    return {
      title: 'Interview Not Found',
    }
  }

  return {
    title: `${interview.title} | Interviews`,
    description: interview.excerpt || interview.description,
  }
}

export default async function InterviewPage({ params }: InterviewPageProps) {
  const { slug } = await params
  const interview = await getInterview(slug)

  if (!interview) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <InterviewDetailContent interview={interview} />
      <Footer />
    </main>
  )
}
