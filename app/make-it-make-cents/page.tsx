import { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { MIMCWHero, MIMCWContent, MIMCWRegister } from "@/components/mimcw/mimcw-content";

export const metadata: Metadata = {
  title: "Make It Make Cents | Aurea Global Network",
  description: "a weekly financial literacy series that breaks down personal finance into simple, actionable lessons. Through bite-sized content released every Wednesday, it empowers youth and women to build financial confidence and develop lifelong money-management skills.",
};

export default function MIMCWPage() {
  return (
    <>
      <Navbar />
      <main>
        <MIMCWHero />
        <MIMCWContent />
        <MIMCWRegister />
      </main>
      <Footer />
    </>
  );
}
