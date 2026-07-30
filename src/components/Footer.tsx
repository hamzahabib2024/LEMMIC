import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Framework", href: "/framework" },
  { label: "About", href: "/about" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const forces = ["Evaluation", "Management", "Marketplace", "Investment"];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-silver-dim/10 bg-ink-light/30 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-3 lg:grid-cols-4">
          {/* About blurb */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="mb-4 inline-block font-[var(--font-poppins)] text-xl font-bold tracking-tight text-white"
            >
              LEMMIC
            </Link>
            <p className="mb-4 text-sm leading-relaxed text-silver/50">
              LEMMIC is AmanorX&apos;s planned logistics-sector company —
              positioned to bring evaluation, management, a verified freight
              Marketplace, and disciplined investment to Pakistan&apos;s
              road-freight industry.
            </p>
            
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-silver/40">
              Pages &amp; Sections
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-silver/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* EMMIC Forces */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-silver/40">
              The Four Forces
            </h4>
            <ul className="space-y-2.5">
              {forces.map((force) => (
                <li key={force}>
                  <Link
                    href="/framework"
                    className={`text-sm transition-colors hover:text-white ${
                      force === "Company"
                        ? "text-silver/30 italic"
                        : "text-silver/60"
                    }`}
                  >
                    {force}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-silver/40">
              Group Legal
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#"
                  className="text-sm text-silver/60 transition-colors hover:text-white"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-silver/60 transition-colors hover:text-white"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-silver-dim/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-center md:text-left text-xs text-silver/30">
            © {year} LEMMIC — a planned sector of AmanorX Holdings (Pvt) Ltd.
            All rights reserved.
          </p>
         
        </div>
      </div>
    </footer>
  );
}