import { client } from "@/lib/sanity.client";
import { EVENTS_QUERY } from "@/lib/sanity.queries";
import { mockEvents } from "@/lib/mock-data";

export async function GET() {
  try {
    if (!client) {
      return Response.json(mockEvents);
    }

    const events = await client.fetch(EVENTS_QUERY);
    return Response.json(events || mockEvents);
  } catch (error) {
    console.error("[API] Error fetching events:", error);
    return Response.json(mockEvents);
  }
}
