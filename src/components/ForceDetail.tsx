"use client";

import React, { useState } from "react";
import { Globe } from "lucide-react";
import { cn } from "../lib/utils";
import type { ForceData } from "../lib/forcesData";

export default function ForceDetail({ force }: { force: ForceData }) {
  const [activeSubTab, setActiveSubTab] = useState("concept");

  return (
    <div
      className={cn(
        "rounded-2xl p-6 md:p-8 transition-all duration-300 ease-out backdrop-blur-sm",
        force.isUnresolved ? "bg-ink/60/80" : "bg-ink/60/80"
      )}
    >
      <div className="mb-6 flex items-start gap-4">
        <div
          className={cn(
            "flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border",
            force.isUnresolved ? "border-dashed border-silver/30 bg-silver/10 text-silver/50" : "border-primary/30 bg-primary/15 text-primary shadow-[0_0_20px_rgba(0,143,93,0.2)]"
          )}
        >
          {force.icon}
        </div>
        <div>
          <div className="flex items-center gap-3">
            <h3 className="font-[var(--font-poppins)] text-2xl font-bold text-white">
              {force.letter} — {force.title}
            </h3>
            {force.isUnresolved && (
              <span className="rounded-full border border-dashed border-silver/30 px-3 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-silver/60">
                Unresolved Card
              </span>
            )}
          </div>
          <p className={cn("mt-1 font-[var(--font-poppins)] text-sm font-medium", force.isUnresolved ? "text-silver/50" : "text-primary")}>
            {force.tagline}
          </p>
        </div>
      </div>

      <p className={cn("mb-8 leading-relaxed text-base", force.isUnresolved ? "text-silver/50" : "text-silver/80")}>{force.description}</p>

      <div className="space-y-8">
        {force.subTabs.map((tab) => (
          <section key={tab.id} className="rounded-3xl bg-ink/60/80 p-6 backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-3 text-sm font-semibold text-white">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                {tab.icon}
              </span>
              <span>{tab.label}</span>
            </div>
            <div className="space-y-4 text-silver/80">{tab.content}</div>
          </section>
        ))}
      </div>

      {!force.isUnresolved && (
        <div className="mt-8 rounded-3xl border border-primary/20 bg-primary/[0.05] p-6 text-silver/80">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Globe size={18} />
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-silver/60">AmanorX Sector Governance Discipline</div>
              <div className="mt-1 text-sm text-silver/70">This force follows the same evaluation-first model applied across all sixteen sectors.</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
