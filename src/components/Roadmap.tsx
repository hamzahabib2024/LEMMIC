import { Globe } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import Image from "next/image";

export default function Roadmap() {
  return (
    <section id="roadmap" className="relative overflow-hidden border-y border-silver-dim/10 py-24 md:py-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/roadmap.jpg"
          alt="Roadmap background"
          fill
          className="object-cover object-center opacity-100"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-ink/35" />

        {/* Soft gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/40 to-ink" />
      </div>
      <div className=" relative z-10 mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="mb-4">
            <span className="text-xs font-medium tracking-[0.2em] text-silver/50 uppercase">
              Where this is headed
            </span>
          </div>
          <h2 className="mb-12 font-[var(--font-poppins)] text-3xl font-semibold text-white md:text-4xl">
            From thesis to sector
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="rounded-2xl border border-silver-dim/10 bg-ink-light/50 p-8 md:p-10">
            <div className="mb-4 flex items-center gap-2">
              <Globe size={18} className="text-primary" />
              <span className="text-xs font-medium uppercase tracking-wider text-primary">
                Global precedent
              </span>
            </div>
            <blockquote className="mb-4 text-lg leading-relaxed text-silver/80 md:text-xl">
              India built exactly this kind of trust layer for road freight through
              platforms like BlackBuck — verified carriers, then a marketplace, then
              adjacent data and capital services.
            </blockquote>
            <p className="text-sm text-silver/40">
              This is external research, not an AmanorX claim — the closest model
              available to point to, not a promise about what LEMMIC will become.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}