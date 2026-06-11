import { groq } from "next-sanity";

export const INTERVIEWS_QUERY = groq`
  *[_type == "interview"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    intervieweeName,
    role,
    description,
    excerpt,
    highlightQuote,
    publishedAt,
    category,
    thumbnail,
    soundcloudEmbed,
    fullContent,
    "interviewee": {
      name: intervieweeName,
      role,
      "image": thumbnail
    }
  }
`;

export const INTERVIEW_BY_SLUG_QUERY = groq`
  *[_type == "interview" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    intervieweeName,
    role,
    description,
    excerpt,
    highlightQuote,
    publishedAt,
    category,
    thumbnail,
    soundcloudEmbed,
    fullContent,
    "interviewee": {
      name: intervieweeName,
      role,
      "image": thumbnail
    }
  }
`;

export const EVENTS_QUERY = groq`
  *[_type == "event"] | order(eventDate desc) {
    _id,
    title,
    "slug": slug.current,
    description,
    excerpt,
    eventDate,
    location,
    eventType,
    thumbnail,
    fullContent
  }
`;

export const EVENT_BY_SLUG_QUERY = groq`
  *[_type == "event" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    description,
    excerpt,
    eventDate,
    location,
    eventType,
    thumbnail,
    fullContent
  }
`;

export const CHAPTERS_QUERY = groq`
  *[_type == "chapter"] | order(_createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    city,
    country,
    description,
    leaders,
    memberCount,
    thumbnail,
    fullContent
  }
`;

export const CHAPTER_BY_SLUG_QUERY = groq`
  *[_type == "chapter" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    city,
    country,
    description,
    leaders,
    memberCount,
    thumbnail,
    fullContent
  }
`;

export const AMBASSADORS_QUERY = groq`
  *[_type == "ambassador"] | order(_createdAt desc) {
    _id,
    name,
    title,
    bio,
    image,
    location,
    social
  }
`;

export const MAKE_IT_MAKE_CENTS_QUERY = groq`
  *[_type == "mimcwArticle"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    description,
    excerpt,
    publishedAt,
    category,
    thumbnail,
    content
  }
`;

export const MAKE_IT_MAKE_CENTS_BY_SLUG_QUERY = groq`
  *[_type == "mimcwArticle" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    description,
    excerpt,
    publishedAt,
    category,
    thumbnail,
    content
  }
`;

export const SITE_SETTINGS_QUERY = groq`
  *[_type == "siteSettings"][0] {
    title,
    description,
    missionStatement,
    visionStatement,
    valuesStatement,
    founderName,
    founderImage,
    founderBio,
    socialLinks
  }
`;
