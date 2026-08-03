import Link from "next/link";
import Image from "next/image";

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
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink">
          {/* Background Image */}
          <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/footer1.jpg"
            alt="Footer background"
            fill
            className="object-cover object-center opacity-70"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-ink/60" />

          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-ink/20 via-ink/50 to-ink" />
        </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-24">
        {/* Top brand statement */}
        <div className="mb-16 max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <div className="h-px w-10 bg-white/40" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40">
              AmanorX Holdings
            </span>
          </div>

          <h2 className="font-[var(--font-poppins)] text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl">
            Building the infrastructure
            <span className="block text-white/40">
              behind Pakistan&apos;s freight economy.
            </span>
          </h2>
        </div>

        {/* Main Footer Grid */}
        <div className="grid gap-12 border-t border-white/10 pt-12 md:grid-cols-3 lg:grid-cols-4 lg:gap-16">
          {/* About */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="group mb-5 inline-flex items-center gap-2"
            >
              <span className="font-[var(--font-poppins)] text-2xl font-bold tracking-[-0.04em] text-white transition-opacity group-hover:opacity-80">
                LEMMIC
              </span>
            </Link>

            <p className="max-w-sm text-sm leading-7 text-white/45">
              LEMMIC is AmanorX&apos;s planned logistics-sector company —
              positioned to bring evaluation, management, a verified freight
              marketplace, and disciplined investment to Pakistan&apos;s
              road-freight industry.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/35">
              Pages &amp; Sections
            </h4>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center text-sm text-white/55 transition-all duration-300 hover:translate-x-1 hover:text-white"
                  >
                    <span>{link.label}</span>
                    <span className="ml-2 text-white/0 transition-all duration-300 group-hover:text-white/40">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Four Forces */}
          <div>
            <h4 className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/35">
              The Four Forces
            </h4>

            <ul className="space-y-3">
              {forces.map((force) => (
                <li key={force}>
                  <Link
                    href="/framework"
                    className="group inline-flex items-center text-sm text-white/55 transition-all duration-300 hover:translate-x-1 hover:text-white"
                  >
                    <span>{force}</span>
                    <span className="ml-2 text-white/0 transition-all duration-300 group-hover:text-white/40">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/35">
              Group Legal
            </h4>

            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-white/55 transition-colors duration-300 hover:text-white"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-white/55 transition-colors duration-300 hover:text-white"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-center text-[11px] leading-relaxed text-white/30 md:text-left">
            © {year} LEMMIC — a planned sector of AmanorX Holdings (Pvt) Ltd.
            <br className="md:hidden" /> All rights reserved.
          </p>

          <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-white/25">
            <span>Pakistan</span>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <span>Logistics</span>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <span>Infrastructure</span>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/20 to-transparent" />
    </footer>
  );
}

