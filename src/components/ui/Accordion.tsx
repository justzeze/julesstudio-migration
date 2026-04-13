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
        className="flex items-center justify-between w-full py-5 text-left group cursor-pointer hover:opacity-70"
        style={{ transition: "opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1)" }}
      >
        <span className="font-[family-name:var(--font-merriweather)] text-base md:text-lg font-bold">
          {question}
        </span>
        <span
          className={`text-xl ${open ? "rotate-45" : ""}`}
          style={{ transition: "transform 1.2s cubic-bezier(0.4, 0, 0.2, 1)" }}
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
