"use client";


import Image from "next/image";
import { useState } from "react";
import { Bell, Send } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire to real form endpoint
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="relative overflow-hidden border-t border-silver-dim/10 py-24 md:py-32">
      {/* Background Image */}
              <div className="absolute inset-0 z-0 pointer-events-none">
                <Image
                  src="/contact1.jpg"
                  alt="About LEMMIC background"
                  fill
                  className="object-cover object-center opacity-80"
                />
      
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-ink/35" />
      
                {/* Soft gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/40 to-ink" />
              </div>
      <div className="relative z-10 mx-auto max-w-2xl px-6">
        <ScrollReveal>
          <div className="mb-4 text-center">
            <span className="text-xs font-medium tracking-[0.2em] text-silver/50 uppercase">
              Be the first to know
            </span>
          </div>
          <h2 className="mb-4 text-center font-[var(--font-poppins)] text-3xl font-semibold text-white md:text-4xl">
            LEMMIC is in development.
          </h2>
          <p className="mb-10 text-center text-silver/60">
            Leave your email and we&apos;ll reach out when there&apos;s something to show.
            No spam, no third-party sharing — this is only used to notify you about
            LEMMIC.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-2xl border border-silver-dim/10 bg-ink-light/30 p-6 md:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-xs font-medium text-silver/60"
                >
                  Full name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full rounded-lg border border-silver-dim/15 bg-ink px-4 py-3 text-sm text-white placeholder:text-silver/30 focus:border-primary/40 focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-xs font-medium text-silver/60"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full rounded-lg border border-silver-dim/15 bg-ink px-4 py-3 text-sm text-white placeholder:text-silver/30 focus:border-primary/40 focus:outline-none"
                  placeholder="you@company.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="role"
                className="mb-1.5 block text-xs font-medium text-silver/60"
              >
                I am a
              </label>
              <select
                id="role"
                required
                value={formData.role}
                onChange={(e) =>
                  setFormData({ ...formData, role: e.target.value })
                }
                className="w-full rounded-lg border border-silver-dim/15 bg-ink px-4 py-3 text-sm text-white focus:border-primary/40 focus:outline-none"
              >
                <option value="" disabled>
                  Select your role
                </option>
                <option value="shipper">Shipper</option>
                <option value="carrier">Carrier or Fleet Owner</option>
                <option value="investor">Investor or Partner</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-xs font-medium text-silver/60"
              >
                Message{" "}
                <span className="text-silver/30">(optional)</span>
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full resize-none rounded-lg border border-silver-dim/15 bg-ink px-4 py-3 text-sm text-white placeholder:text-silver/30 focus:border-primary/40 focus:outline-none"
                placeholder="Tell us what you're looking for..."
              />
            </div>

            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-medium text-white transition-all hover:bg-primary/90 hover:force-glow"
            >
              {submitted ? (
                <>
                  <Send size={18} />
                  {/* TODO: wire to real form endpoint */}
                  Saved locally
                </>
              ) : (
                <>
                  <Bell size={18} />
                  Contact Us
                </>
              )}
            </button>

            <p className="text-center text-[10px] text-silver/30">
              {/* TODO: wire to real form endpoint */}
              This form is currently wired to local state only.
            </p>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}