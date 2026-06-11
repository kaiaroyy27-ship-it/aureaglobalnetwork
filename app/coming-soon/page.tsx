import { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ComingSoonContent } from "@/components/coming-soon/coming-soon-content";

export const metadata: Metadata = {
  title: "Coming Soon | Aurea Global Network",
  description: "Exciting new initiatives from Aurea Global Network. Stay tuned for what's next.",
};

export default function ComingSoonPage() {
  return (
    <>
      <Navbar />
      <main>
        <ComingSoonContent />
      </main>
      <Footer />
    </>
  );
}
