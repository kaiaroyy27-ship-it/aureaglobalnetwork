import { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { InterviewsHero, InterviewsGrid } from "@/components/interviews/interviews-content";

export const metadata: Metadata = {
  title: "Interviews | Aurea Global Network",
  description: "Insightful conversations with trailblazing women in finance, leadership, and entrepreneurship.",
};

export default function InterviewsPage() {
  return (
    <>
      <Navbar />
      <main>
        <InterviewsHero />
        <InterviewsGrid />
      </main>
      <Footer />
    </>
  );
}
