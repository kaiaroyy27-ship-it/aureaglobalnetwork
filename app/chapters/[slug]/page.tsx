import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { ChapterDetailContent } from '@/components/chapters/chapter-detail-content'
import { mockChapters } from '@/lib/mock-data'
import { client } from '@/lib/sanity.client'
import { CHAPTER_BY_SLUG_QUERY } from '@/lib/sanity.queries'

interface ChapterPageProps {
  params: Promise<{ slug: string }>
}

async function getChapter(slug: string) {
  try {
    if (client) {
      const chapter = await client.fetch(CHAPTER_BY_SLUG_QUERY, { slug })
      if (chapter) return chapter
    }
  } catch (error) {
    console.error("[Chapters Page] Error fetching from Sanity:", error)
  }
  
  return mockChapters.find(c => c.slug?.current === slug || c._id === slug)
}

export async function generateMetadata({ params }: ChapterPageProps): Promise<Metadata> {
  const { slug } = await params
  const chapter = await getChapter(slug)
  
  if (!chapter) {
    return {
      title: 'Chapter Not Found',
    }
  }

  return {
    title: `${chapter.title || chapter.name} Chapter`,
    description: chapter.description,
  }
}

export default async function ChapterPage({ params }: ChapterPageProps) {
  const { slug } = await params
  const chapter = await getChapter(slug)

  if (!chapter) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <ChapterDetailContent chapter={chapter} />
      <Footer />
    </main>
  )
}
