import { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ContactHero, ContactForm, ContactInfo } from "@/components/contact/contact-content";

export const metadata: Metadata = {
  title: "Contact Us | Aurea Global Network",
  description: "Get in touch with Aurea Global Network. We'd love to hear from you about partnerships, collaborations, or questions.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactHero />
        <div className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16">
              <ContactForm />
              <ContactInfo />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
