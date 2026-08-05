import type { Metadata } from "next";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EMMIC Framework — LEMMIC Logistics",
  description:
    "Explore the five forces driving LEMMIC: Evaluation, Management, Marketplace, Investment, and Company.",
};

export default function FrameworkPage() {
  return (
    <div className="min-h-screen bg-ink text-silver flex flex-col justify-between">
      <Navbar />

      <main className="relative pt-24 pb-20 flex-1 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-30" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1600&q=80')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/60" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/20 backdrop-blur-xl p-8 shadow-2xl shadow-black/40">
            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div className="max-w-2xl">
                <span className="inline-flex rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-primary/80">
                  Framework overview
                </span>
                <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  The LEMMIC model for verified freight, managed lifecycle, and capital-backed execution.
                </h1>
                <p className="mt-6 text-lg leading-8 text-silver/70">
                  LEMMIC’s framework brings four core forces together: Evaluation, Management, Marketplace, and Investment. Each section is designed to make logistics reliable, transparent, and contractually enforceable.
                </p>
                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-white/5 p-5">
                    <p className="text-sm uppercase tracking-[0.3em] text-silver/60">Verified supply</p>
                    <p className="mt-3 text-white font-semibold">Carrier certification before onboarding.</p>
                  </div>
                  <div className="rounded-3xl bg-white/5 p-5">
                    <p className="text-sm uppercase tracking-[0.3em] text-silver/60">Contract enforcement</p>
                    <p className="mt-3 text-white font-semibold">Milestone-based operations and payment triggers.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-[1.5rem] bg-white/5 p-6 shadow-lg shadow-black/10 backdrop-blur-sm">
                  <p className="text-sm uppercase tracking-[0.3em] text-silver/50">Explore a force</p>
                  <div className="mt-4 space-y-4">
                    <Link href="/framework/evaluation" className="block rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-white transition hover:bg-white/10">
                      <h3 className="font-semibold">Evaluation</h3>
                      <p className="mt-2 text-sm text-silver/70">Proof and verification before any carrier joins.</p>
                    </Link>
                    <Link href="/framework/management" className="block rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-white transition hover:bg-white/10">
                      <h3 className="font-semibold">Management</h3>
                      <p className="mt-2 text-sm text-silver/70">A platform-enforced shipment lifecycle.</p>
                    </Link>
                    <Link href="/framework/marketplace" className="block rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-white transition hover:bg-white/10">
                      <h3 className="font-semibold">Marketplace</h3>
                      <p className="mt-2 text-sm text-silver/70">Verified demand matched with certified carriers.</p>
                    </Link>
                    <Link href="/framework/investment" className="block rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-white transition hover:bg-white/10">
                      <h3 className="font-semibold">Investment</h3>
                      <p className="mt-2 text-sm text-silver/70">Capital moves only when volume is contracted.</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 grid gap-4 lg:grid-cols-2">
              <div className="rounded-3xl bg-white/5 p-6 backdrop-blur-sm">
                <h2 className="text-xl font-semibold text-white">Why this matters</h2>
                <p className="mt-3 text-silver/70">
                  The LEMMIC framework is built to reduce uncertainty in road freight by shifting logistics from phone calls and trust to a governed digital protocol.
                </p>
              </div>
              <div className="rounded-3xl bg-white/5 p-6 backdrop-blur-sm">
                <h2 className="text-xl font-semibold text-white">How it works</h2>
                <ul className="mt-3 space-y-3 text-silver/70">
                  <li>• Verify carriers and shippers before the first transaction.</li>
                  <li>• Lock in routes, terms, and milestones in the platform.</li>
                  <li>• Match confirmed orders with certified capacity.</li>
                  <li>• Deploy working capital only after contracted volume is proven.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
