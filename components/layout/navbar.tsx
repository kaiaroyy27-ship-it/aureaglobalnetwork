'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  {
    name: 'What We Do',
    href: '/what-we-do',
    children: [
      { name: 'Events & Workshops', href: '/events' },
      { name: 'Interviews', href: '/interviews' },
      { name: 'School Chapters', href: '/chapters' },
      { name: 'Make It Make Cents Wednesday', href: '/make-it-make-cents' },
    ],
  },
  { name: 'Ambassadors', href: '/ambassadors' },
  { name: 'Join Us Today', href: '/join-us' },
  { name: 'Contact', href: '/contact' },
]

const secondaryNavItems = [
  { name: 'The First Step', href: '/the-first-step' },
  { name: 'Walli for Women', href: '/walli-for-women' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-background/98 backdrop-blur-lg shadow-sm border-b border-border/50'
          : 'bg-background/90 backdrop-blur-md lg:bg-transparent lg:backdrop-blur-none'
      )}
    >
      <nav className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden border border-primary/20 group-hover:border-primary/40 transition-colors">
              <span className="font-serif text-xl font-semibold text-primary">A</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-serif text-lg font-medium tracking-tight text-foreground">
                Aurea Global
              </span>
              <span className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-body">
                Network
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    'px-4 py-2 text-sm font-body font-medium text-foreground/80 hover:text-primary transition-colors rounded-lg hover:bg-primary/5 flex items-center gap-1'
                  )}
                >
                  {item.name}
                  {item.children && (
                    <ChevronDown className="w-3 h-3 transition-transform duration-200" />
                  )}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {item.children && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-card rounded-xl shadow-xl border border-border/50 overflow-hidden"
                    >
                      <div className="py-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-3 text-sm font-body text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            {secondaryNavItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-xs font-body font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="https://medium.com/@aureaglobalnetwork"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-primary text-primary-foreground text-sm font-body font-medium rounded-full hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20"
            >
              The AGN Journal
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-background/98 backdrop-blur-lg border-t border-border/50"
            >
              <div className="py-6 space-y-1">
                {navItems.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => !item.children && setIsOpen(false)}
                      className="block px-4 py-3 text-base font-body font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                    >
                      {item.name}
                    </Link>
                    {item.children && (
                      <div className="pl-6 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-2 text-sm font-body text-muted-foreground hover:text-primary transition-colors"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 border-t border-border/50 space-y-1">
                  {secondaryNavItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 text-base font-body font-medium text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="pt-4 px-4">
                  <Link
                    href="https://medium.com/@aureaglobalnetwork"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full px-5 py-3 bg-primary text-primary-foreground text-center text-sm font-body font-medium rounded-full hover:bg-primary/90 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Read The AGN Journal
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
