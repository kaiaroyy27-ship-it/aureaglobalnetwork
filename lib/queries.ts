import { client } from './sanity'

// Homepage
export async function getHomepage() {
  return client.fetch(`*[_type == "homepage"][0]{
    heroTitle,
    heroSubtitle,
    heroImage,
    heroCtaText,
    heroCtaLink,
    missionTitle,
    missionDescription,
    impactStats[]{
      number,
      label,
      description
    },
    featuredTestimonials[]->{
      _id,
      name,
      role,
      quote,
      image
    }
  }`)
}

// Founder
export async function getFounder() {
  return client.fetch(`*[_type == "founder"][0]{
    name,
    title,
    bio,
    image,
    quote,
    socialLinks
  }`)
}

// Ambassadors
export async function getAmbassadors() {
  return client.fetch(`*[_type == "ambassador"] | order(name asc){
    _id,
    name,
    country,
    bio,
    image,
    socialLinks
  }`)
}

// Events
export async function getEvents() {
  return client.fetch(`*[_type == "event"] | order(date desc){
    _id,
    title,
    slug,
    description,
    date,
    location,
    images,
    registrationLink
  }`)
}

export async function getEventBySlug(slug: string) {
  return client.fetch(`*[_type == "event" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    description,
    date,
    location,
    images,
    registrationLink,
    content
  }`, { slug })
}

// Interviews
export async function getInterviews() {
  return client.fetch(`*[_type == "interview"] | order(publishedAt desc){
    _id,
    intervieweeName,
    slug,
    role,
    description,
    image,
    soundcloudLink,
    highlightQuote,
    publishedAt
  }`)
}

// School Chapters
export async function getSchoolChapters() {
  return client.fetch(`*[_type == "schoolChapter"] | order(schoolName asc){
    _id,
    schoolName,
    slug,
    country,
    city,
    chapterLeadName,
    photos,
    description,
    achievements
  }`)
}

// Make It Make Cents Wednesday
export async function getMakeItMakeCentsPosts() {
  return client.fetch(`*[_type == "makeItMakeCents"] | order(publishDate desc){
    _id,
    title,
    slug,
    explanation,
    image,
    publishDate
  }`)
}

// Coming Soon Projects
export async function getComingSoonProjects() {
  return client.fetch(`*[_type == "comingSoon"]{
    _id,
    title,
    slug,
    description,
    image,
    launchDate,
    type
  }`)
}

// Join Us Options
export async function getJoinUsOptions() {
  return client.fetch(`*[_type == "joinOption"] | order(order asc){
    _id,
    title,
    description,
    icon,
    formLink,
    order
  }`)
}

// Social Links
export async function getSocialLinks() {
  return client.fetch(`*[_type == "socialLinks"][0]{
    instagram,
    linkedin,
    twitter,
    facebook,
    whatsapp,
    email
  }`)
}

// Site Settings
export async function getSiteSettings() {
  return client.fetch(`*[_type == "siteSettings"][0]{
    logo,
    siteName,
    tagline,
    footerText,
    mediumLink,
    contactEmail
  }`)
}

// About Page
export async function getAboutPage() {
  return client.fetch(`*[_type == "aboutPage"][0]{
    title,
    heroImage,
    content,
    mission,
    vision,
    values,
    teamMembers[]->{
      _id,
      name,
      role,
      bio,
      image
    }
  }`)
}

// Testimonials
export async function getTestimonials() {
  return client.fetch(`*[_type == "testimonial"]{
    _id,
    name,
    role,
    quote,
    image
  }`)
}

// What We Do Page
export async function getWhatWeDo() {
  return client.fetch(`*[_type == "whatWeDo"][0]{
    title,
    description,
    programs[]{
      title,
      description,
      icon,
      link
    }
  }`)
}

// FAQs
export async function getFaqs() {
  return client.fetch(`*[_type == "faq"] | order(order asc){
    _id,
    question,
    answer,
    order
  }`)
}
