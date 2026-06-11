import Link from 'next/link'
import { Instagram, Linkedin, Twitter, Facebook, Mail, ArrowUpRight } from 'lucide-react'
import { mockSocialLinks, mockSiteSettings } from '@/lib/mock-data'

const footerLinks = {
  organization: [
    { name: 'About Us', href: '/about' },
    { name: 'What We Do', href: '/what-we-do' },
    { name: 'Our Team', href: '/about#team' },
    { name: 'Contact', href: '/contact' },
  ],
  programs: [
    { name: 'Events & Workshops', href: '/events' },
    { name: 'Interviews', href: '/interviews' },
    { name: 'School Chapters', href: '/chapters' },
    { name: 'Make It Make Cents', href: '/make-it-make-cents' },
  ],
  getInvolved: [
    { name: 'Become a Volunteer', href: 'https://docs.google.com/forms/d/e/1FAIpQLSc_eEKRIIGtBk8x98zZCcWPlk9s18ptYyeqhCyIbgHMTCsVOg/viewform?usp=dialog' },
    { name: 'Become an Ambassador', href: 'https://docs.google.com/forms/d/e/1FAIpQLSew5-YP4VZSAoJ-TC_M-x0OItBL8WQWQflSxG9U19wnYFp_0w/viewform?usp=dialog' },
    { name: 'Start a Chapter', href: 'https://docs.google.com/forms/d/e/1FAIpQLScBeFpUPCXgwq_zeqxvsZ5GS7J7Ts93SeTnYzm_FcS0MfnSIQ/viewform?usp=dialog' },
    { name: 'Ambassadors', href: '/ambassadors' },
  ],
  resources: [
    { name: 'The AGN Journal', href: 'https://medium.com/@aureaglobalnetwork', external: true },
    { name: 'The First Step', href: '/the-first-step' },
    { name: 'Walli for Women', href: '/walli-for-women' },
  ],
}

const socialIcons = {
  instagram: Instagram,
  linkedin: Linkedin,
  twitter: Twitter,
  facebook: Facebook,
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-background/10 flex items-center justify-center border border-background/20">
                  <span className="font-serif text-2xl font-semibold text-background">A</span>
                </div>
                <div>
                  <span className="font-serif text-xl font-medium text-background">
                    Aurea Global Network
                  </span>
                </div>
              </div>
            </Link>
            <p className="font-body text-background/70 text-sm leading-relaxed max-w-sm">
              Empowering the next generation of women leaders through financial literacy, 
              economic education, and a supportive global community.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2">
              {Object.entries(socialIcons).map(([key, Icon]) => {
                const href = mockSocialLinks[key as keyof typeof mockSocialLinks]
                if (!href || key === 'email' || key === 'whatsapp') return null
                return (
                  <a
                    key={key}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors group"
                    aria-label={key}
                  >
                    <Icon className="w-4 h-4 text-background/70 group-hover:text-background transition-colors" />
                  </a>
                )
              })}
              <a
                href={`mailto:${mockSocialLinks.email}`}
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors group"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 text-background/70 group-hover:text-background transition-colors" />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-serif text-sm font-semibold text-background mb-4 uppercase tracking-wider">
                Organization
              </h4>
              <ul className="space-y-3">
                {footerLinks.organization.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="font-body text-sm text-background/60 hover:text-background transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-sm font-semibold text-background mb-4 uppercase tracking-wider">
                Programs
              </h4>
              <ul className="space-y-3">
                {footerLinks.programs.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="font-body text-sm text-background/60 hover:text-background transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-sm font-semibold text-background mb-4 uppercase tracking-wider">
                Get Involved
              </h4>
              <ul className="space-y-3">
                {footerLinks.getInvolved.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="font-body text-sm text-background/60 hover:text-background transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-sm font-semibold text-background mb-4 uppercase tracking-wider">
                Resources
              </h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    {'external' in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-body text-sm text-background/60 hover:text-background transition-colors inline-flex items-center gap-1"
                      >
                        {link.name}
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="font-body text-sm text-background/60 hover:text-background transition-colors"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 pt-12 border-t border-background/10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-md">
              <h4 className="font-serif text-lg font-medium text-background mb-2">
                Stay Connected
              </h4>
              <p className="font-body text-sm text-background/60">
                Join us to receive updates on our programs, events, and financial literacy resources.
              </p>
            </div>
            <form className="flex gap-3 max-w-md w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-background/10 border border-background/20 rounded-full text-sm font-body text-background placeholder:text-background/40 focus:outline-none focus:border-background/40 transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-background text-foreground text-sm font-body font-medium rounded-full hover:bg-background/90 transition-colors whitespace-nowrap"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

    </footer>
  )
}
