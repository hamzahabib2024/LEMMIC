"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ShieldCheck,
  Route,
  Store,
  TrendingUp,
  Building2,
  ChevronRight,
  FileCheck,
  Clock,
  Handshake,
  BarChart3,
  AlertCircle,
  CheckCircle2,
  XCircle,
  FileText,
  Truck,
  DollarSign,
  Users,
  Globe,
  Lock,
  Eye,
  ListChecks,
  MessageSquareWarning,
  Gavel,
  Search,
  Award,
} from "lucide-react";
import { cn } from "../lib/utils";
import ScrollReveal from "./ScrollReveal";

type ForceKey = "E" | "M1" | "M2" | "I" ;

interface SubTab {
  id: string;
  label: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

interface ForceData {
  key: ForceKey;
  letter: string;
  title: string;
  tagline: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  bgGlow: string;
  subTabs: SubTab[];
  isUnresolved?: boolean;
}

const forces: ForceData[] = [
  {
    key: "E",
    letter: "E",
    title: "Evaluation",
    tagline: "Carrier verification, before anything else.",
    description:
      "The model calls for certifying carriers on fleet documentation, licensing, insurance, and safety record before they can participate — the same evaluation-first discipline AmanorX applies across every sector.",
    icon: <ShieldCheck size={28} />,
    color: "text-primary",
    bgGlow: "bg-primary/5",
    subTabs: [
      {
        id: "concept",
        label: "The concept",
        icon: <Eye size={16} />,
        content: (
          <div className="space-y-4">
            <p className="text-silver/80 leading-relaxed">
              Before any shipment moves, the carrier must prove they are who they claim to be. Evaluation is not a background check — it is a front-door gate.
            </p>
            <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
              <h4 className="mb-2 text-sm font-medium text-primary">Core principle</h4>
              <p className="text-sm text-silver/70">
                Trust is not assumed. It is earned through documentation, verified against primary sources, and renewed on a schedule.
              </p>
            </div>
          </div>
        ),
      },
      {
        id: "details",
        label: "Verification layers",
        icon: <FileCheck size={16} />,
        content: (
          <div className="space-y-3">
            {[
              { icon: <FileText size={18} />, label: "Fleet documentation", desc: "Registration, fitness certificates, route permits" },
              { icon: <Award size={18} />, label: "Licensing", desc: "NTC/NHMP licenses, driver credentials" },
              { icon: <ShieldCheck size={18} />, label: "Insurance", desc: "Third-party liability, cargo coverage verification" },
              { icon: <BarChart3 size={18} />, label: "Safety record", desc: "Accident history, violation logs, maintenance logs" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3 rounded-lg border border-silver-dim/10 p-3 bg-ink/40">
                <div className="mt-0.5 text-primary">{item.icon}</div>
                <div>
                  <div className="text-sm font-medium text-white">{item.label}</div>
                  <div className="text-xs text-silver/50">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        ),
      },
      {
        id: "standard",
        label: "The standard",
        icon: <Gavel size={16} />,
        content: (
          <div className="space-y-4">
            <p className="text-silver/80 leading-relaxed">
              AmanorX applies this same evaluation-first discipline across all sixteen sectors. The standard does not change because the industry changes.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Document audit", status: "required" },
                { label: "Physical inspection", status: "required" },
                { label: "Reference checks", status: "required" },
                { label: "Re-verification cycle", status: "annual" },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-2 rounded-md bg-ink p-2.5">
                  <CheckCircle2 size={14} className="text-primary" />
                  <span className="text-xs text-silver/70">{s.label}</span>
                  <span className="ml-auto text-[10px] uppercase tracking-wider text-primary/70">{s.status}</span>
                </div>
              ))}
            </div>
          </div>
        ),
      },
    ],
  },
  {
    key: "M1",
    letter: "M",
    title: "Management",
    tagline: "The shipment lifecycle as an enforced standard.",
    description:
      "Booking, milestones, proof-of-delivery, and dispute resolution — designed to be platform-enforced rather than left to phone calls and memory, which is how most road freight in Pakistan is coordinated today.",
    icon: <Route size={28} />,
    color: "text-primary",
    bgGlow: "bg-primary/5",
    subTabs: [
      {
        id: "concept",
        label: "The concept",
        icon: <Eye size={16} />,
        content: (
          <div className="space-y-4">
            <p className="text-silver/80 leading-relaxed">
              Management turns the shipment from a phone call into a tracked, enforceable protocol. Every stage has an owner, a timestamp, and a resolution path.
            </p>
            <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
              <h4 className="mb-2 text-sm font-medium text-primary">Why this matters</h4>
              <p className="text-sm text-silver/70">
                Most Pakistani road freight is coordinated by phone and memory. When something goes wrong, there is no record. Management fixes that.
              </p>
            </div>
          </div>
        ),
      },
      {
        id: "details",
        label: "Lifecycle stages",
        icon: <ListChecks size={16} />,
        content: (
          <div className="relative space-y-0">
            {[
              { icon: <FileText size={18} />, label: "Booking", desc: "Digital order with route, load, date, terms locked in" },
              { icon: <Clock size={18} />, label: "Milestones", desc: "GPS-tracked checkpoints with automated alerts" },
              { icon: <CheckCircle2 size={18} />, label: "Proof-of-delivery", desc: "Digital POD with photo, signature, timestamp" },
              { icon: <MessageSquareWarning size={18} />, label: "Dispute resolution", desc: "Platform-mediated, evidence-based resolution" },
            ].map((item, idx, arr) => (
              <div key={item.label} className="relative flex gap-4 pb-6 last:pb-0">
                {idx < arr.length - 1 && (
                  <div className="absolute left-[17px] top-8 bottom-0 w-px bg-primary/20" />
                )}
                <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  {item.icon}
                </div>
                <div>
                  <div className="text-sm font-medium text-white">{item.label}</div>
                  <div className="text-xs text-silver/50">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        ),
      },
      {
        id: "standard",
        label: "Enforcement",
        icon: <Lock size={16} />,
        content: (
          <div className="space-y-4">
            <p className="text-silver/80 leading-relaxed">
              Platform-enforced means the system does not just record — it intervenes. Late milestones trigger alerts. Missing PODs block payment. Disputes have a deadline.
            </p>
            <div className="grid gap-2">
              {[
                { rule: "Auto-escalation at 2 hours past milestone", type: "alert" },
                { rule: "Payment hold until POD confirmed", type: "block" },
                { rule: "Dispute window closes at 72 hours", type: "deadline" },
              ].map((r) => (
                <div key={r.rule} className="flex items-center gap-3 rounded-md bg-ink p-3">
                  {r.type === "alert" && <AlertCircle size={14} className="text-amber-400" />}
                  {r.type === "block" && <XCircle size={14} className="text-red-400" />}
                  {r.type === "deadline" && <Clock size={14} className="text-primary" />}
                  <span className="text-xs text-silver/70">{r.rule}</span>
                </div>
              ))}
            </div>
          </div>
        ),
      },
    ],
  },
  {
    key: "M2",
    letter: "M",
    title: "Marketplace",
    tagline: "Verified demand meets certified carriers.",
    description:
      "Confirmed shipment orders — route, load, date, terms — from verified shippers, matched against certified carriers who bid. The closest global parallel is India's freight-exchange model (platforms like BlackBuck), with LEMMIC's intended addition being the certification and enforced-lifecycle layers on top.",
    icon: <Store size={28} />,
    color: "text-primary",
    bgGlow: "bg-primary/5",
    subTabs: [
      {
        id: "concept",
        label: "The concept",
        icon: <Eye size={16} />,
        content: (
          <div className="space-y-4">
            <p className="text-silver/80 leading-relaxed">
              A Marketplace where both sides have already been verified. Shippers post confirmed orders. Carriers bid with certified credentials. The match is based on fit, not just price.
            </p>
            <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
              <h4 className="mb-2 text-sm font-medium text-primary">Global parallel</h4>
              <p className="text-sm text-silver/70">
                India&apos;s freight-exchange platforms (BlackBuck model) proved the demand. LEMMIC adds the certification and enforced-lifecycle layers on top.
              </p>
            </div>
          </div>
        ),
      },
      {
        id: "details",
        label: "Match mechanics",
        icon: <Handshake size={16} />,
        content: (
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
                <div className="mb-2 text-primary"><Truck size={20} /></div>
                <div className="text-sm font-medium text-white">Shipper side</div>
                <ul className="mt-2 space-y-1 text-xs text-silver/60">
                  <li>• Verified business entity</li>
                  <li>• Confirmed order: route, load, date</li>
                  <li>• Payment terms locked</li>
                </ul>
              </div>
              <div className="rounded-lg border border-silver-dim/10 bg-ink p-4">
                <div className="mb-2 text-primary"><Users size={20} /></div>
                <div className="text-sm font-medium text-white">Carrier side</div>
                <ul className="mt-2 space-y-1 text-xs text-silver/60">
                  <li>• Certified fleet &amp; drivers</li>
                  <li>• Bid on matched lanes</li>
                  <li>• Rating from past performance</li>
                </ul>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 py-2">
              <div className="h-px flex-1 bg-primary/20" />
              <span className="text-xs text-primary font-semibold uppercase tracking-wider">Match engine</span>
              <div className="h-px flex-1 bg-primary/20" />
            </div>
            <div className="rounded-md bg-ink p-3 text-center text-xs text-silver/50 font-mono">
              Route fit × Load fit × Price × Carrier rating = Best match
            </div>
          </div>
        ),
      },
      {
        id: "standard",
        label: "Quality gates",
        icon: <Lock size={16} />,
        content: (
          <div className="space-y-3">
            {[
              { gate: "Both parties must be verified before posting or bidding", icon: <ShieldCheck size={16} /> },
              { gate: "Orders must include route, load, date, and terms", icon: <FileText size={16} /> },
              { gate: "Bids are binding once accepted", icon: <Gavel size={16} /> },
              { gate: "Performance ratings affect future match priority", icon: <BarChart3 size={16} /> },
            ].map((g) => (
              <div key={g.gate} className="flex items-center gap-3 rounded-md border border-silver-dim/10 p-3 bg-ink/40">
                <div className="text-primary">{g.icon}</div>
                <span className="text-xs text-silver/70">{g.gate}</span>
              </div>
            ))}
          </div>
        ),
      },
    ],
  },
  {
    key: "I",
    letter: "I",
    title: "Investment",
    tagline: "Capital timed to contracted volume, not speculation.",
    description:
      "Fleet and warehouse capital deployed against volume that's already been evaluated and contracted for — not against a forecast.",
    icon: <TrendingUp size={28} />,
    color: "text-primary",
    bgGlow: "bg-primary/5",
    subTabs: [
      {
        id: "concept",
        label: "The concept",
        icon: <Eye size={16} />,
        content: (
          <div className="space-y-4">
            <p className="text-silver/80 leading-relaxed">
              Investment follows proof, not promise. Capital is deployed only after volume has been evaluated and contracted — de-risking the deployment by anchoring it to real demand.
            </p>
            <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
              <h4 className="mb-2 text-sm font-medium text-primary">The discipline</h4>
              <p className="text-sm text-silver/70">
                No fleet expansion on forecast. No warehouse build on speculation. Capital moves after the contract is signed, not before.
              </p>
            </div>
          </div>
        ),
      },
      {
        id: "details",
        label: "Capital types",
        icon: <DollarSign size={16} />,
        content: (
          <div className="space-y-3">
            {[
              { type: "Fleet capital", target: "Vehicles for contracted lanes", trigger: "12-month volume commitment" },
              { type: "Warehouse capital", target: "Hubs at dense origin/destination pairs", trigger: "Shipper cluster density proven" },
              { type: "Working capital", target: "Carrier payment float, fuel advances", trigger: "Platform transaction history" },
            ].map((c) => (
              <div key={c.type} className="rounded-lg border border-silver-dim/10 bg-ink p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-white">{c.type}</span>
                  <span className="text-[10px] uppercase tracking-wider text-primary/70 font-semibold">Asset-backed</span>
                </div>
                <div className="text-xs text-silver/50 mb-1">Target: {c.target}</div>
                <div className="text-xs text-silver/40">Trigger: {c.trigger}</div>
              </div>
            ))}
          </div>
        ),
      },
      {
        id: "standard",
        label: "Risk framework",
        icon: <Lock size={16} />,
        content: (
          <div className="space-y-4">
            <p className="text-silver/80 leading-relaxed">
              Every investment is tied to a contracted volume. If the volume does not materialize, the capital deployment is paused or reversed.
            </p>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="rounded-md bg-ink p-3 border border-primary/20">
                <div className="text-lg font-bold text-primary">1</div>
                <div className="text-[10px] text-silver/60 mt-1 font-medium">Evaluate demand</div>
              </div>
              <div className="rounded-md bg-ink p-3 border border-primary/20">
                <div className="text-lg font-bold text-primary">2</div>
                <div className="text-[10px] text-silver/60 mt-1 font-medium">Contract volume</div>
              </div>
              <div className="rounded-md bg-ink p-3 border border-primary/20">
                <div className="text-lg font-bold text-primary">3</div>
                <div className="text-[10px] text-silver/60 mt-1 font-medium">Deploy capital</div>
              </div>
            </div>
          </div>
        ),
      },
    ],
  },

];

export default function Framework() {
  const [activeForce, setActiveForce] = useState<ForceKey>("E");
  const [activeSubTab, setActiveSubTab] = useState("concept");

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

              <div className="space-y-3">
                {forces.map((force, idx) => {
                  const isActive = force.key === activeForce;
                  const isPast = idx < activeIndex;

                  return (
                    <button
                      key={force.key}
                      onClick={() => {
                        setActiveForce(force.key);
                        setActiveSubTab("concept");
                      }}
                      className={cn(
                        "group relative flex w-full items-center gap-4 rounded-xl border p-4 text-left transition-all duration-300 backdrop-blur-md",
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
                    </button>
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
            <div
              key={activeForce}
              className={cn(
                "rounded-2xl border p-6 md:p-8 transition-all duration-300 ease-out glass-card",
                currentForce.isUnresolved
                  ? "border-dashed border-silver/30 bg-silver/[0.03]"
                  : "border-silver-dim/20 glass-card-glow"
              )}
            >
              {/* Header */}
              <div className="mb-6 flex items-start gap-4">
                <div
                  className={cn(
                    "flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border",
                    currentForce.isUnresolved
                      ? "border-dashed border-silver/30 bg-silver/10 text-silver/50"
                      : "border-primary/30 bg-primary/15 text-primary shadow-[0_0_20px_rgba(0,143,93,0.2)]"
                  )}
                >
                  {currentForce.icon}
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="font-[var(--font-poppins)] text-2xl font-bold text-white">
                      {currentForce.letter} — {currentForce.title}
                    </h3>
                    {currentForce.isUnresolved && (
                      <span className="rounded-full border border-dashed border-silver/30 px-3 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-silver/60">
                        Unresolved Card
                      </span>
                    )}
                  </div>
                  <p
                    className={cn(
                      "mt-1 font-[var(--font-poppins)] text-sm font-medium",
                      currentForce.isUnresolved ? "text-silver/50" : "text-primary"
                    )}
                  >
                    {currentForce.tagline}
                  </p>
                </div>
              </div>

              <p
                className={cn(
                  "mb-8 leading-relaxed text-base",
                  currentForce.isUnresolved ? "text-silver/50" : "text-silver/80"
                )}
              >
                {currentForce.description}
              </p>

              {/* Sub-tabs */}
              <div className="mb-6 flex gap-1 rounded-xl bg-ink/80 p-1 border border-silver-dim/10">
                {currentForce.subTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveSubTab(tab.id)}
                    className={cn(
                      "flex flex-1 items-center justify-center gap-2 rounded-lg px-3 py-2.5 text-xs font-semibold transition-all",
                      activeSubTab === tab.id
                        ? currentForce.isUnresolved
                          ? "bg-silver/20 text-silver"
                          : "bg-primary/20 text-primary border border-primary/30 shadow-[0_0_10px_rgba(0,143,93,0.15)]"
                        : "text-silver/40 hover:text-silver/70"
                    )}
                  >
                    {tab.icon}
                    <span className="hidden sm:inline">{tab.label}</span>
                  </button>
                ))}
              </div>

              {/* Sub-tab content */}
              <div key={`${activeForce}-${activeSubTab}`} className="transition-opacity duration-200">
                {currentForce.subTabs.find((t) => t.id === activeSubTab)?.content}
              </div>

              {/* Force connector visual */}
              {!currentForce.isUnresolved && (
                <div className="mt-8 flex items-center gap-3 rounded-xl border border-primary/20 bg-primary/[0.05] p-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/20 text-primary">
                    <Globe size={16} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-silver/80">
                      AmanorX Sector Governance Discipline
                    </div>
                    <div className="text-xs text-silver/50">
                      This force follows the same evaluation-first model applied across all sixteen sectors.
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}