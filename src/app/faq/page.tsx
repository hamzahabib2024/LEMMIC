import type { Metadata } from "next";
import Navbar from "@/src/components/Navbar";
import FAQ from "@/src/components/FAQ";
import Footer from "@/src/components/Footer";
import ScrollReveal from "@/src/components/ScrollReveal";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "FAQ — LEMMIC Logistics",
  description:
    "Frequently asked questions about LEMMIC's planning status, framework, and involvement opportunities.",
};

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-ink text-silver flex flex-col justify-between">
      <Navbar />

      <main className="pt-24 pb-12 flex-1">
        {/* Page Banner Header */}
        <div className="relative border-b border-silver-dim/10 bg-ink-light/40 py-16">
          <div className="mx-auto max-w-7xl px-6">
            <ScrollReveal>
              <div className="mb-3 inline-flex items-center rounded-full border border-silver/30 bg-silver/10 px-3.5 py-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-silver">
                  Information &amp; Clarity
                </span>
              </div>
              <h1 className="font-[var(--font-poppins)] text-4xl font-bold text-white sm:text-5xl">
                Frequently Asked Questions
              </h1>
              <p className="mt-4 max-w-3xl text-lg text-silver/70">
                Clear answers regarding LEMMIC&apos;s stage, thesis, and sector relationship under AmanorX Holdings.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* FAQ Component */}
        <FAQ />

        {/* Contact Prompt Banner */}
        <section className="py-12 border-t border-silver-dim/10 bg-ink-light/20 text-center">
          <div className="mx-auto max-w-3xl px-6">
            <ScrollReveal>
              <h3 className="text-xl font-bold text-white mb-2">Have additional questions?</h3>
              <p className="text-sm text-silver/60 mb-6">
                Reach out through our contact form to get notified as LEMMIC progresses.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary/90"
              >
                <span>Go to Contact Page</span>
                <ArrowRight size={16} />
              </Link>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
