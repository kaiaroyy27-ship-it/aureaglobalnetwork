import { client } from "@/lib/sanity.client";
import { AMBASSADORS_QUERY } from "@/lib/sanity.queries";
import { mockAmbassadors } from "@/lib/mock-data";

export async function GET() {
  try {
    if (!client) {
      return Response.json(mockAmbassadors);
    }

    const ambassadors = await client.fetch(AMBASSADORS_QUERY);
    return Response.json(ambassadors || mockAmbassadors);
  } catch (error) {
    console.error("[API] Error fetching ambassadors:", error);
    return Response.json(mockAmbassadors);
  }
}
