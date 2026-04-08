"use client";

import { useState } from "react";

const categories = [
  "Tous",
  "Site Vitrine",
  "E-commerce",
  "Éditorial",
  "Identité Visuelle",
  "Portfolio",
  "Social Media",
];

interface FilterButtonsProps {
  onFilter: (category: string) => void;
}

export function FilterButtons({ onFilter }: FilterButtonsProps) {
  const [active, setActive] = useState("Tous");

  function handleClick(cat: string) {
    setActive(cat);
    onFilter(cat);
  }

  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => handleClick(cat)}
          className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300 border ${
            active === cat
              ? "bg-[color:var(--color-foreground)] text-white border-transparent"
              : "bg-transparent text-[color:var(--color-muted)] border-[color:var(--color-border)] hover:border-[color:var(--color-foreground)] hover:text-[color:var(--color-foreground)]"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
