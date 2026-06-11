import { client } from "./sanity.client";
import { mockInterviews, mockEvents, mockChapters, mockAmbassadors } from "./mock-data";

/**
 * Safely fetch data from Sanity with fallback to mock data
 * This ensures the app works even if Sanity is unavailable
 */
export async function fetchFromSanity<T>(
  query: string,
  params?: Record<string, unknown>,
  fallbackData?: T
): Promise<T> {
  try {
    if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
      console.warn("[Sanity] Project ID not configured, using fallback data");
      return fallbackData as T;
    }

    const data = await client.fetch<T>(query, params);
    return data;
  } catch (error) {
    console.error("[Sanity] Fetch error:", error);
    if (fallbackData) {
      console.warn("[Sanity] Using fallback data");
      return fallbackData;
    }
    throw error;
  }
}
