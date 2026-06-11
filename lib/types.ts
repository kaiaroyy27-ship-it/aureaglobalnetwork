import type { PortableTextBlock } from '@portabletext/types'

export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  alt?: string
}

export interface Homepage {
  heroTitle: string
  heroSubtitle: string
  heroImage: SanityImage
  heroCtaText: string
  heroCtaLink: string
  missionTitle: string
  missionDescription: string
  impactStats: ImpactStat[]
  featuredTestimonials: Testimonial[]
}

export interface ImpactStat {
  number: string
  label: string
  description?: string
}

export interface Founder {
  name: string
  title: string
  bio: PortableTextBlock[]
  image: SanityImage
  quote: string
  socialLinks?: SocialLinks
}

export interface Ambassador {
  _id: string
  name: string
  country: string
  bio: string
  image: SanityImage
  socialLinks?: SocialLinks
}

export interface Event {
  _id: string
  title: string
  slug: { current: string }
  description: string
  date: string
  location: string
  images: SanityImage[]
  registrationLink?: string
  content?: PortableTextBlock[]
}

export interface Interview {
  _id: string
  intervieweeName: string
  slug: { current: string }
  role: string
  description: string
  image: SanityImage
  soundcloudLink?: string
  highlightQuote?: string
  publishedAt: string
}

export interface SchoolChapter {
  _id: string
  schoolName: string
  slug: { current: string }
  country: string
  city: string
  chapterLeadName: string
  photos: SanityImage[]
  description: string
  achievements?: string[]
}

export interface MakeItMakeCentsPost {
  _id: string
  title: string
  slug: { current: string }
  explanation: string
  image: SanityImage
  publishDate: string
}

export interface ComingSoonProject {
  _id: string
  title: string
  slug: { current: string }
  description: string
  image?: SanityImage
  launchDate?: string
  type: 'ebook' | 'app' | 'other'
}

export interface JoinOption {
  _id: string
  title: string
  description: string
  icon?: string
  formLink?: string
  order: number
}

export interface SocialLinks {
  instagram?: string
  linkedin?: string
  twitter?: string
  facebook?: string
  whatsapp?: string
  email?: string
}

export interface SiteSettings {
  logo: SanityImage
  siteName: string
  tagline: string
  footerText: string
  mediumLink: string
  contactEmail: string
}

export interface AboutPage {
  title: string
  heroImage: SanityImage
  content: PortableTextBlock[]
  mission: string
  vision: string
  values: string[]
  teamMembers: TeamMember[]
}

export interface TeamMember {
  _id: string
  name: string
  role: string
  bio: string
  image: SanityImage
}

export interface Testimonial {
  _id: string
  name: string
  role: string
  quote: string
  image?: SanityImage
}

export interface WhatWeDo {
  title: string
  description: string
  programs: Program[]
}

export interface Program {
  title: string
  description: string
  icon?: string
  link?: string
}

export interface FAQ {
  _id: string
  question: string
  answer: PortableTextBlock[]
  order: number
}
