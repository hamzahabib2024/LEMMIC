import type { Metadata } from "next";
import Navbar from "@/src/components/Navbar";
import Roadmap from "@/src/components/Roadmap";
import Footer from "@/src/components/Footer";
import ScrollReveal from "@/src/components/ScrollReveal";
import { CheckCircle2, Clock, FileSearch } from "lucide-react";

export const metadata: Metadata = {
  title: "Roadmap — LEMMIC Logistics",
  description:
    "Explore the development direction and global precedents behind LEMMIC.",
};

const phases = [
  {
    phase: "Phase 1",
    title: "Thesis & Pipeline Research",
    status: "Active",
    desc: "Evaluating Pakistan road freight market metrics, ministry fragmentation, and precedent analysis.",
    icon: <FileSearch size={20} className="text-primary" />,
  },
  {
    phase: "Phase 2",
    title: "Carrier Evaluation Architecture",
    status: "Planning",
    desc: "Designing certification protocols for fleet fitness, insurance, and licensing requirements.",
    icon: <Clock size={20} className="text-silver/60" />,
  },
  {
    phase: "Phase 3",
    title: "Enforced Lifecycle Protocol",
    status: "Pipeline",
    desc: "Defining digital booking standards, GPS milestone tracking, and proof-of-delivery verification.",
    icon: <Clock size={20} className="text-silver/60" />,
  },
];

export default function RoadmapPage() {
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
                  Development Direction
                </span>
              </div>
              <h1 className="font-[var(--font-poppins)] text-4xl font-bold text-white sm:text-5xl">
                Roadmap &amp; Global Precedents
              </h1>
              <p className="mt-4 max-w-3xl text-lg text-silver/70">
                From external research and validated global precedents to AmanorX&apos;s planned logistics framework.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Core Roadmap Section */}
        <Roadmap />

        {/* Phase Breakdown Timeline */}
        <section className="py-16 bg-ink-light/10">
          <div className="mx-auto max-w-7xl px-6">
            <ScrollReveal>
              <h3 className="mb-8 font-[var(--font-poppins)] text-2xl font-bold text-white">
                Development Stages
              </h3>
              <div className="grid gap-6 md:grid-cols-3">
                {phases.map((p) => (
                  <div key={p.phase} className="rounded-xl border border-silver-dim/10 bg-ink p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-semibold uppercase text-primary">
                        {p.phase}
                      </span>
                      <span className="rounded-full border border-silver-dim/20 px-2.5 py-0.5 text-[10px] uppercase font-semibold text-silver/60">
                        {p.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 mb-2">
                      {p.icon}
                      <h4 className="text-base font-semibold text-white">{p.title}</h4>
                    </div>
                    <p className="text-xs leading-relaxed text-silver/60">
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
