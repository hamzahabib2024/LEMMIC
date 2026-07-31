import type { Metadata } from "next";
import Navbar from "@/src/components/Navbar";
import Framework from "@/src/components/Framework";
import Footer from "@/src/components/Footer";
import ScrollReveal from "@/src/components/ScrollReveal";

export const metadata: Metadata = {
  title: "EMMIC Framework — LEMMIC Logistics",
  description:
    "Explore the five forces driving LEMMIC: Evaluation, Management, Marketplace, Investment, and Company.",
};

export default function FrameworkPage() {
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
                  Detailed Framework Architecture
                </span>
              </div>
              <h1 className="font-[var(--font-poppins)] text-4xl font-bold text-white sm:text-5xl">
                The Four Forces of LEMMIC
              </h1>
              <p className="mt-4 max-w-3xl text-lg text-silver/70">
                LEMMIC operates as five distinct forces designed to run in sequence, establishing verification, platform-enforced lifecycles, and contracted capital deployment.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Full Interactive Framework Component */}
        <Framework />
      </main>

      <Footer />
    </div>
  );
}
