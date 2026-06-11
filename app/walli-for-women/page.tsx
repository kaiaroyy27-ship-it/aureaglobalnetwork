import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { WalliForWomenContent } from '@/components/initiatives/walli-for-women-content'

export const metadata: Metadata = {
  title: 'Walli for Women | Financial Tools & Resources',
  description: 'Walli for Women empowers young women with practical financial tools, budgeting resources, and money management skills for real-world success.',
}

export default function WalliForWomenPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <WalliForWomenContent />
      <Footer />
    </main>
  )
}
