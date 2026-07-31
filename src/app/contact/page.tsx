import type { Metadata } from "next";
import Navbar from "@/src/components/Navbar";
import Contact from "@/src/components/Contact";
import Footer from "@/src/components/Footer";
import ScrollReveal from "@/src/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Contact — LEMMIC Logistics",
  description:
    "Register your interest as a shipper, carrier, or investor in LEMMIC's development pipeline.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-ink text-silver flex flex-col justify-between">
      <Navbar />

      <main className="pt-24 pb-12 flex-1">
        {/* Page Banner Header */}
        <div className="relative border-b border-silver-dim/10 bg-ink-light/40 py-16">
          <div className="mx-auto max-w-7xl px-6">
            <ScrollReveal>
              <div className="mb-3 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  Lead Capture &amp; Inquiries
                </span>
              </div>
              <h1 className="font-[var(--font-poppins)] text-4xl font-bold text-white sm:text-5xl">
                Get Notified &amp; Connect
              </h1>
              <p className="mt-4 max-w-3xl text-lg text-silver/70">
                LEMMIC is currently in development. Leave your email to receive updates as carrier evaluation and marketplace tools progress.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Contact Form Component */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
