import { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ChaptersHero, ChaptersMap } from "@/components/chapters/chapters-content";

export const metadata: Metadata = {
  title: "Chapters | Aurea Global Network",
  description: "Connect with Aurea communities around the world. Each chapter brings our mission to life locally.",
};

export default function ChaptersPage() {
  return (
    <>
      <Navbar />
      <main>
        <ChaptersHero />
        <ChaptersMap />
      </main>
      <Footer />
    </>
  );
}
