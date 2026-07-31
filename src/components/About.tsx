import ScrollReveal from "./ScrollReveal";

const principles = [
  {
    title: "Evidence before scale.",
    explanation:
      "The model runs evaluation and governance ahead of marketplace volume — trust gets earned before growth gets chased.",
  },
  {
    title: "Direction, not overreach.",
    explanation:
      "This stage is about setting out where AmanorX believes Pakistani logistics infrastructure is going — not about claiming a business that doesn't exist yet.",
  },
  {
    title: "Built for how freight actually moves here.",
    explanation:
      "Pakistan's freight sector is road-heavy, fragmented across ministries, and still largely undocumented. The thesis starts from that reality, not an imported template.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="mb-4">
            <span className="text-xs font-medium tracking-[0.2em] text-silver/50 uppercase">
              About
            </span>
          </div>
          <h2 className="mb-6 font-[var(--font-poppins)] text-3xl font-semibold text-white md:text-4xl">
            AmanorX&apos;s planned logistics arm
          </h2>
          <p className="mb-16 max-w-3xl text-lg leading-relaxed text-silver/60">
            LEMMIC is the name for what AmanorX is exploring in Pakistan&apos;s logistics
            sector — not yet an operating company, but a direction the group is
            actively researching and designing toward, following the same
            evaluation-first model used across AmanorX&apos;s other sectors.
          </p>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-3">
          {principles.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 120}>
              <div className="group h-full rounded-xl border border-silver-dim/10 bg-ink-light/30 p-6 transition-all hover:border-primary/20 hover:bg-ink-light/50">
                <div className="mb-4 h-1 w-12 rounded-full bg-primary/40 transition-all group-hover:w-16 group-hover:bg-primary" />
                <h3 className="mb-3 font-[var(--font-poppins)] text-lg font-semibold text-white">
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed text-silver/60">
                  {p.explanation}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}