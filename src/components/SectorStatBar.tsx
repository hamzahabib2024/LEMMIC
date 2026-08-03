import ScrollReveal from "./ScrollReveal";
import Image from "next/image";

const stats = [
  {
    figure: "94%",
    label: "of Pakistan's freight moves by road",
    source: "FPCCI Policy Brief, Oct 2025",
  },
  {
    figure: "6%",
    label: "moves by rail — and falling",
    source: "FPCCI Policy Brief, Oct 2025",
  },
  {
    figure: "5+",
    label: "federal ministries share oversight, with no single unified authority",
    source: "PIDE research",
  },
  {
    figure: "$10M",
    label: "Pakistan's largest seed round at the time went to a freight marketplace in 2021",
    source: "BridgeLinx funding reports",
    note: "Shows validated demand for this category, not a claim about LEMMIC.",
  },
];

export default function SectorStatBar() {
  return (
    <section className="relative overflow-hidden border-y border-silver-dim/10 bg-ink-light py-16 md:py-20">

      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/hero2.jpg"
          alt="Pakistan logistics background"
          fill
          priority
          className="object-cover object-center opacity-45"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-ink-light/60" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink-light/20 to-ink-light" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="mb-10 text-center">
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-silver/50">
              Sector Context
            </span>

            <h2 className="mt-2 font-[var(--font-poppins)] text-2xl font-semibold text-white">
              Pakistan&apos;s logistics landscape
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.figure} delay={i * 100}>
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-white/10 hover:shadow-2xl">
                <div className="mb-3 font-[var(--font-poppins)] text-4xl font-bold text-primary">
                  {stat.figure}
                </div>

                <p className="mb-4 text-sm leading-relaxed text-silver/80">
                  {stat.label}
                </p>

                <div className="border-t border-silver-dim/10 pt-3">
                  <p className="text-xs text-silver/40">
                    Source: {stat.source}
                  </p>

                  {stat.note && (
                    <p className="mt-1 text-xs italic text-silver/30">
                      {stat.note}
                    </p>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}