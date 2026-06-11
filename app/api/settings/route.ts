import { client } from "@/lib/sanity.client";
import { SITE_SETTINGS_QUERY } from "@/lib/sanity.queries";

const defaultSettings = {
  title: "Aurea Global Network",
  description: "Empowering the next generation of women leaders",
  missionStatement: "To inspire and empower young women globally through financial education, community, and opportunity.",
  visionStatement: "A world where every woman has the knowledge, confidence, and support to achieve financial independence.",
  valuesStatement: "We believe in accessibility, authenticity, and ambition.",
  founderName: "Aurea",
  founderBio: "Founder & visionary behind Aurea Global Network",
  socialLinks: {
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
  },
};

export async function GET() {
  try {
    if (!client) {
      return Response.json(defaultSettings);
    }

    const settings = await client.fetch(SITE_SETTINGS_QUERY);
    return Response.json(settings || defaultSettings);
  } catch (error) {
    console.error("[API] Error fetching site settings:", error);
    return Response.json(defaultSettings);
  }
}
