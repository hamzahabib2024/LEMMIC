"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { cn } from "../lib/utils";
import ScrollReveal from "./ScrollReveal";
import ForceDetail from "./ForceDetail";
import { forces } from "../lib/forcesData";

type ForceKey = "E" | "M1" | "M2" | "I" ;

// forces are imported from ../lib/forcesData

export default function Framework() {
  const [activeForce, setActiveForce] = useState<ForceKey>("E");

  const currentForce = forces.find((f) => f.key === activeForce)!;
  const activeIndex = forces.findIndex((f) => f.key === activeForce);

  const progressWidth = `${((activeIndex + 1) / forces.length) * 100}%`;

  return (
    <section id="framework" className="relative overflow-hidden py-24 md:py-32">
      {/* Background abstract render overlay */}
      <div className="absolute inset-0 z-0 opacity-15 mix-blend-screen pointer-events-none">
        <Image
          src="/forces-render.jpg"
          alt="Abstract 5 forces render"
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="mb-4 text-center">
            <span className="text-xs font-semibold tracking-[0.25em] text-silver/50 uppercase">
              The Four Forces Architecture
            </span>
          </div>
          <h2 className="mb-4 text-center font-[var(--font-poppins)] text-3xl font-bold text-white md:text-5xl text-glow">
            How LEMMIC is designed to work
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-silver/70 text-lg">
            LEMMIC is not planned as a single product. It&apos;s four forces meant to run in sequence, each making the next safer to operate.
          </p>
        </ScrollReveal>

        <div className="grid gap-8 lg:grid-cols-12">
          {/* Force Rail */}
          <ScrollReveal className="lg:col-span-4">
            <div className="relative">
              {/* Connection line */}
              <div className="absolute left-6 top-8 bottom-8 w-px bg-silver-dim/15 hidden lg:block" />

              <div className="space-y-3 sm:flex sm:gap-3 sm:overflow-x-auto sm:space-y-0">
                {forces.map((force, idx) => {
                  const isActive = force.key === activeForce;
                  const isPast = idx < activeIndex;

                  const slug = force.title.toLowerCase().split(" ")[0];

                  return (
                    <Link
                      key={force.key}
                      href={`/framework/${slug}`}
                      onClick={() => {
                        setActiveForce(force.key);
                      }}
                      className={cn(
                        "group relative flex w-full min-w-[220px] items-center gap-4 rounded-xl border p-4 text-left transition-all duration-300 backdrop-blur-md",
                        isActive
                          ? force.isUnresolved
                            ? "border-silver/30 bg-silver/10 force-glow-muted"
                            : "border-primary/40 bg-primary/10 force-glow"
                          : "border-silver-dim/10 bg-ink/40 hover:border-silver-dim/20 hover:bg-ink-light",
                        force.isUnresolved && !isActive && "border-dashed border-silver/20 opacity-60"
                      )}
                    >
                      {/* Step indicator */}
                      <div
                        className={cn(
                          "relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 font-[var(--font-poppins)] text-lg font-bold transition-all",
                          isActive
                            ? force.isUnresolved
                              ? "border-silver/40 text-silver/70 bg-silver/10"
                              : "border-primary bg-primary/20 text-primary shadow-[0_0_15px_rgba(0,143,93,0.3)]"
                            : isPast
                            ? "border-primary/40 text-primary/70"
                            : "border-silver-dim/20 text-silver/40"
                        )}
                      >
                        {force.letter}
                        {isPast && !isActive && (
                          <div className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary">
                            <CheckCircle2 size={10} className="text-white" />
                          </div>
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div
                          className={cn(
                            "font-[var(--font-poppins)] text-sm font-semibold transition-colors",
                            isActive
                              ? force.isUnresolved
                                ? "text-silver"
                                : "text-white"
                              : "text-silver/60"
                          )}
                        >
                          {force.title}
                        </div>
                        <div className="truncate text-xs text-silver/50">
                          {force.tagline}
                        </div>
                      </div>

                      <ChevronRight
                        size={16}
                        className={cn(
                          "shrink-0 transition-all",
                          isActive
                            ? force.isUnresolved
                              ? "text-silver/50 translate-x-0"
                              : "text-primary translate-x-0"
                            : "text-silver/20 -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                        )}
                      />
                    </Link>
                  );
                })}
              </div>

              {/* Sequence progress */}
              <div className="mt-6 hidden lg:block">
                <div className="mb-2 flex justify-between text-[10px] uppercase tracking-wider font-semibold text-silver/40">
                  <span>Force Sequence Progress</span>
                  <span>
                    {activeIndex + 1} of {forces.length}
                  </span>
                </div>
                <div className="h-2 rounded-full bg-silver-dim/10 overflow-hidden p-0.5 border border-silver-dim/10">
                  <div
                    className={cn(
                      "h-full rounded-full transition-all duration-500 ease-in-out",
                      currentForce.isUnresolved ? "bg-silver/40" : "bg-primary shadow-[0_0_10px_#008F5D]"
                    )}
                    style={{ width: progressWidth }}
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Detail Panel */}
          <ScrollReveal className="lg:col-span-8" delay={150}>
            <ForceDetail force={currentForce} />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}