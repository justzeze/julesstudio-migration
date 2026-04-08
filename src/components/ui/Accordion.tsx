"use client";

import { useState } from "react";

interface AccordionItemProps {
  question: string;
  children: React.ReactNode;
}

export function AccordionItem({ question, children }: AccordionItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[color:var(--color-border)]">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-5 text-left group"
      >
        <span className="font-[family-name:var(--font-merriweather)] text-base md:text-lg font-bold">
          {question}
        </span>
        <span
          className={`text-xl transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <div className={`accordion-content ${open ? "open" : ""}`}>
        <div>
          <div className="pb-5 text-sm leading-relaxed text-[color:var(--color-muted)]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
