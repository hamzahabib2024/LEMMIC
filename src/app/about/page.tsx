import type { Metadata } from "next";
import Navbar from "@/src/components/Navbar";
import About from "@/src/components/About";
import Footer from "@/src/components/Footer";
import ScrollReveal from "@/src/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About LEMMIC — AmanorX Logistics Sector",
  description:
    "Learn about LEMMIC — AmanorX's planned logistics arm operating under the evaluation-first model.",
};

export default function AboutPage() {
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
                  Group Sector Strategy
                </span>
              </div>
              <h1 className="font-[var(--font-poppins)] text-4xl font-bold text-white sm:text-5xl">
                About LEMMIC
              </h1>
              <p className="mt-4 max-w-3xl text-lg text-silver/70">
                AmanorX&apos;s planned logistics sector company — positioned to bring evidence-based evaluation, governance, and structured marketplace access to Pakistan&apos;s freight landscape.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* About Component */}
        <About />

        {/* Group Context Highlights */}
        <section className="py-16 border-t border-silver-dim/10 bg-ink-light/20">
          <div className="mx-auto max-w-7xl px-6">
            <ScrollReveal>
              <h3 className="mb-6 font-[var(--font-poppins)] text-2xl font-bold text-white">
                Part of AmanorX&apos;s Sixteen-Sector Architecture
              </h3>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border border-silver-dim/10 bg-ink p-6">
                  <h4 className="mb-2 text-base font-semibold text-primary">AmanorX Group Model</h4>
                  <p className="text-sm leading-relaxed text-silver/60">
                    AmanorX Holdings is a Pakistani multi-sector holding company building toward sixteen sector-specific companies under a shared Evaluation, Management, Marketplace, Investment, and Company framework.
                  </p>
                </div>
                <div className="rounded-xl border border-silver-dim/10 bg-ink p-6">
                  <h4 className="mb-2 text-base font-semibold text-primary">Pre-Launch Discipline</h4>
                  <p className="text-sm leading-relaxed text-silver/60">
                    LEMMIC is actively researched and designed toward the real logistics conditions of Pakistan — road-heavy, multi-agency oversight, and high fragmentation.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
