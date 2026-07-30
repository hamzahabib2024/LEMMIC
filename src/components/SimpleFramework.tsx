"use client";

import Link from "next/link";
import {
  ShieldCheck,
  Route,
  Store,
  TrendingUp,
  Building2,
  ArrowRight,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { cn } from "../lib/utils";

const simplifiedForces = [
  {
    letter: "E",
    title: "Evaluation",
    tagline: "Carrier verification, before anything else.",
    desc: "Certifying carriers on fleet documentation, licensing, insurance, and safety record prior to participation.",
    icon: <ShieldCheck size={24} />,
    isUnresolved: false,
  },
  {
    letter: "M",
    title: "Management",
    tagline: "The shipment lifecycle as an enforced standard.",
    desc: "Platform-enforced booking, milestones, digital proof-of-delivery, and dispute resolution.",
    icon: <Route size={24} />,
    isUnresolved: false,
  },
  {
    letter: "M",
    title: "Marketplace",
    tagline: "Verified demand meets certified carriers.",
    desc: "Confirmed shipment orders matched against pre-certified carriers in an open bidding environment.",
    icon: <Store size={24} />,
    isUnresolved: false,
  },
  {
    letter: "I",
    title: "Investment",
    tagline: "Capital timed to contracted volume.",
    desc: "Fleet and warehouse capital deployed against evaluated, pre-contracted volume — not speculative forecasts.",
    icon: <TrendingUp size={24} />,
    isUnresolved: false,
  },
  
];

export default function SimpleFramework() {
  return (
    <section id="framework" className="relative overflow-hidden py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="mb-4 text-center">
            <span className="text-xs font-semibold tracking-[0.25em] text-silver/50 uppercase">
              The Four Forces Overview
            </span>
          </div>
          <h2 className="mb-4 text-center font-[var(--font-poppins)] text-3xl font-bold text-white md:text-4xl">
            How LEMMIC is designed to work
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-silver/60">
            LEMMIC is built on four sequential forces designed to make Pakistani freight operations safer and transparent.
          </p>
        </ScrollReveal>

        {/* 5-Card Grid Overview */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {simplifiedForces.map((force, i) => (
            <ScrollReveal key={`${force.letter}-${force.title}`} delay={i * 80}>
              <div
                className={cn(
                  "group relative flex h-full flex-col justify-between rounded-xl border p-6 transition-all duration-300 backdrop-blur-sm",
                  force.isUnresolved
                    ? "border-dashed border-silver/20 bg-silver/[0.03]"
                    : "border-silver-dim/10 bg-ink-light/40 hover:border-primary/30 hover:bg-ink-light/70 hover:-translate-y-1"
                )}
              >
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <div
                      className={cn(
                        "flex h-10 w-10 items-center justify-center rounded-lg border font-[var(--font-poppins)] text-base font-bold",
                        force.isUnresolved
                          ? "border-dashed border-silver/30 bg-silver/10 text-silver/50"
                          : "border-primary/30 bg-primary/10 text-primary"
                      )}
                    >
                      {force.letter}
                    </div>
                    <div className={force.isUnresolved ? "text-silver/40" : "text-primary/70"}>
                      {force.icon}
                    </div>
                  </div>

                  <h3 className="mb-1 font-[var(--font-poppins)] text-lg font-semibold text-white">
                    {force.title}
                  </h3>
                  <p className="mb-3 text-xs font-medium text-primary/80">
                    {force.tagline}
                  </p>
                  <p className="text-xs leading-relaxed text-silver/60">
                    {force.desc}
                  </p>
                </div>

                {force.isUnresolved && (
                  <div className="mt-4 pt-3 border-t border-dashed border-silver/15">
                    <span className="text-[10px] uppercase tracking-wider text-silver/40 font-mono">
                      Status: Unresolved
                    </span>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA to Full Framework Page */}
        <ScrollReveal delay={300}>
          <div className="mt-12 text-center">
            <Link
              href="/framework"
              className="inline-flex items-center gap-2 rounded-xl border border-primary/40 bg-primary/10 px-6 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:bg-primary/20 hover:border-primary/60"
            >
              <span>Explore full framework details & sub-tabs</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
