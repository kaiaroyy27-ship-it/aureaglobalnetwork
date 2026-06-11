import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { MIMCWArticleContent } from '@/components/mimcw/mimcw-article-content'
import { mockMakeItMakeCentsPosts } from '@/lib/mock-data'
import { client } from '@/lib/sanity.client'
import { MAKE_IT_MAKE_CENTS_BY_SLUG_QUERY } from '@/lib/sanity.queries'

interface ArticlePageProps {
  params: Promise<{ slug: string }>
}

async function getArticle(slug: string) {
  try {
    if (client) {
      const article = await client.fetch(MAKE_IT_MAKE_CENTS_BY_SLUG_QUERY, { slug })
      if (article) return article
    }
  } catch (error) {
    console.error("[MIMCW Page] Error fetching from Sanity:", error)
  }
  
  return mockMakeItMakeCentsPosts.find(a => a.slug?.current === slug || a._id === slug)
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params
  const article = await getArticle(slug)
  
  if (!article) {
    return {
      title: 'Article Not Found',
    }
  }

  return {
    title: `${article.title} | Make It Make Cents`,
    description: article.explanation || article.description,
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params
  const article = await getArticle(slug)

  if (!article) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <MIMCWArticleContent article={article} />
      <Footer />
    </main>
  )
}
