import { client } from "@/lib/sanity.client";
import { INTERVIEWS_QUERY } from "@/lib/sanity.queries";
import { mockInterviews } from "@/lib/mock-data";

export async function GET() {
  try {
    if (!client) {
      console.warn("[API] Sanity not configured, returning mock data");
      return Response.json(mockInterviews);
    }

    const interviews = await client.fetch(INTERVIEWS_QUERY);
    return Response.json(interviews || mockInterviews);
  } catch (error) {
    console.error("[API] Error fetching interviews:", error);
    return Response.json(mockInterviews);
  }
}
