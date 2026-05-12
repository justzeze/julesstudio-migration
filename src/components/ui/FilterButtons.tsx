"use client";

import { useState } from "react";

interface FilterButtonsProps {
  onFilter: (category: string) => void;
  filters?: {
    all: string;
    showcase: string;
    ecommerce: string;
    editorial: string;
    identity: string;
    portfolio: string;
    social: string;
  };
}

export function FilterButtons({ onFilter, filters }: FilterButtonsProps) {
  const defaultFilters = {
    all: "Tous",
    showcase: "Site Vitrine",
    ecommerce: "E-commerce",
    editorial: "Éditorial",
    identity: "Identité Visuelle",
    portfolio: "Portfolio",
    social: "Social Media",
  };

  const f = filters || defaultFilters;
  const categories = [
    f.all,
    f.showcase,
    f.ecommerce,
    f.editorial,
    f.identity,
    f.portfolio,
    f.social,
  ];

  const [active, setActive] = useState(f.all);

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
          className={`px-4 py-3 rounded-full text-xs font-medium tracking-wide border cursor-pointer ${
            active === cat
              ? "bg-[#e8e7e5] text-[color:var(--color-foreground)] border-transparent"
              : "bg-transparent text-[color:var(--color-muted)] border-[color:var(--color-border)] hover:border-[color:var(--color-foreground)] hover:text-[color:var(--color-foreground)]"
          }`}
          style={{ transition: "background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1), color 0.3s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1)" }}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
