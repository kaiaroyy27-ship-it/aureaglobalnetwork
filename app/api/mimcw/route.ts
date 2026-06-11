import { client } from "@/lib/sanity.client";
import { MAKE_IT_MAKE_CENTS_QUERY } from "@/lib/sanity.queries";
import { mockMakeItMakeCentsPosts } from "@/lib/mock-data";

export async function GET() {
  try {
    if (!client) {
      return Response.json(mockMakeItMakeCentsPosts);
    }

    const articles = await client.fetch(MAKE_IT_MAKE_CENTS_QUERY);
    return Response.json(articles || mockMakeItMakeCentsPosts);
  } catch (error) {
    console.error("[API] Error fetching MIMCW articles:", error);
    return Response.json(mockMakeItMakeCentsPosts);
  }
}
