"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "../lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Model", href: "/framework" },
  { label: "About", href: "/about" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled || pathname !== "/"
          ? "bg-ink/90 backdrop-blur-md border-b border-silver-dim/20 shadow-lg py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-[var(--font-poppins)] text-2xl font-bold tracking-tight text-white flex items-center gap-2"
        >
          <span className="text-primary font-mono text-xl">&lt;/&gt;</span>
          <span>LEMMIC</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-white relative py-1",
                  isActive
                    ? "text-primary font-semibold"
                    : "text-silver/70"
                )}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-primary" />
                )}
              </Link>
            );
          })}

         
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white p-2 rounded-lg border border-silver-dim/20 bg-ink-light/50"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="border-t border-silver-dim/20 bg-ink/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-3 px-6 py-6">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "text-base py-2 font-medium transition-colors border-b border-silver-dim/10 flex items-center justify-between",
                    isActive ? "text-primary font-semibold" : "text-silver/80"
                  )}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="h-2 w-2 rounded-full bg-primary" />}
                </Link>
              );
            })}

          
          </div>
        </div>
      )}
    </nav>
  );
}