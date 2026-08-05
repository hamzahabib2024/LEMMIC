"use client";

import Link from "next/link";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import ForceDetail from "../../../components/ForceDetail";
import { findForceBySlug } from "../../../lib/forcesData";

export default function ManagementPage() {
  const force = findForceBySlug("management");
  if (!force) return <div className="p-8">Force not found</div>;

  return (
    <div className="min-h-screen bg-ink text-silver flex flex-col justify-between">
      <Navbar />

      <main className="relative pt-24 pb-20 flex-1 overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-15"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}
        />

        <div className="relative mx-auto max-w-3xl px-6 py-12">
          <Link href="/framework" className="mb-6 inline-block text-sm text-primary">← Back to framework</Link>
          <ForceDetail force={force} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
