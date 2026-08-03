import Accordion from "./ui/accordion";
import ScrollReveal from "./ScrollReveal";
import Image from "next/image";

const faqItems = [
  {
    question: "Is LEMMIC live yet?",
    answer: (
      <>
        No. LEMMIC is in the planning stage — one of several sectors in
        AmanorX&apos;s sixteen-sector architecture that hasn&apos;t launched yet. This
        page will update as that changes.
      </>
    ),
  },
  {
    question: "What will LEMMIC actually do?",
    answer: (
      <>
        The direction under consideration is a freight marketplace built on
        carrier certification and an enforced shipment lifecycle — see the{" "}
        <a href="#framework" className="text-primary underline underline-offset-2">
          Framework section
        </a>{" "}
        above. None of it is operating yet.
      </>
    ),
  },
  {
    question: "What is AmanorX?",
    answer: (
      <>
        AmanorX Holdings is a Pakistani multi-sector holding company building
        toward sixteen sector-specific companies under a shared
        evaluation-management-marketplace-investment model.{" "}
        <a
          href="https://amanorx-nine.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline underline-offset-2"
        >
          See the full group story →
        </a>
      </>
    ),
  },
  {
    question: "How can I get involved?",
    answer: (
      <>
        Leave your email below and tell us whether you&apos;re a shipper, a carrier,
        or an investor or partner — we&apos;ll reach out as this develops.
      </>
    ),
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="relative overflow-hidden py-24 md:py-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/faq2.jpg"
          alt="FAQ background"
          fill
          className="object-cover object-center opacity-80"
        />
    
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-ink/45" />
      
        {/* Soft gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/40 to-ink" />
      </div>
      <div className="relative z-10 mx-auto max-w-3xl px-6">
        <ScrollReveal>
          <div className="mb-4 text-center">
            <span className="text-xs font-medium tracking-[0.2em] text-silver/50 uppercase">
              Questions
            </span>
          </div>
          <h2 className="mb-12 text-center font-[var(--font-poppins)] text-3xl font-semibold text-white md:text-4xl">
            Frequently asked
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <Accordion items={faqItems} />
        </ScrollReveal>
      </div>
    </section>
  );
}