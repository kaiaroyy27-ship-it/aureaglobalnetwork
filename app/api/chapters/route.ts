import { client } from "@/lib/sanity.client";
import { CHAPTERS_QUERY } from "@/lib/sanity.queries";
import { mockChapters } from "@/lib/mock-data";

export async function GET() {
  try {
    if (!client) {
      return Response.json(mockChapters);
    }

    const chapters = await client.fetch(CHAPTERS_QUERY);
    return Response.json(chapters || mockChapters);
  } catch (error) {
    console.error("[API] Error fetching chapters:", error);
    return Response.json(mockChapters);
  }
}
