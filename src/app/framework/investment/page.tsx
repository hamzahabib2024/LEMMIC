"use client";

import Link from "next/link";
import ForceDetail from "../../../components/ForceDetail";
import { findForceBySlug } from "../../../lib/forcesData";

export default function InvestmentPage() {
  const force = findForceBySlug("investment");
  if (!force) return <div className="p-8">Force not found</div>;

  return (
    <section className="relative py-12">
      <div
        className="pointer-events-none absolute inset-0 opacity-15"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&w=1400&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}
      />
      <div className="relative mx-auto max-w-3xl px-6">
        <Link href="/framework" className="mb-6 inline-block text-sm text-primary">← Back to framework</Link>
        <ForceDetail force={force} />
      </div>
    </section>
  );
}
