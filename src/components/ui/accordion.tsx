"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../../lib/utils";

interface AccordionItem {
  question: string;
  answer: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i;

        return (
          <div
            key={i}
            className={cn(
              "rounded-xl border transition-all",
              isOpen
                ? "border-primary/20 bg-ink-light/50"
                : "border-silver-dim/10 bg-transparent hover:border-silver-dim/20"
            )}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center justify-between p-5 text-left"
              aria-expanded={isOpen}
            >
              <span
                className={cn(
                  "font-[var(--font-poppins)] text-sm font-medium",
                  isOpen ? "text-white" : "text-silver/80"
                )}
              >
                {item.question}
              </span>
              <ChevronDown
                size={18}
                className={cn(
                  "shrink-0 text-silver/40 transition-transform duration-300",
                  isOpen && "rotate-180 text-primary"
                )}
              />
            </button>
            <div
              className={cn(
                "overflow-hidden transition-all duration-300",
                isOpen ? "max-h-96" : "max-h-0"
              )}
            >
              <div className="px-5 pb-5 text-sm leading-relaxed text-silver/60">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}