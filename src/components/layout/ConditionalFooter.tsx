"use client";

import { usePathname } from "next/navigation";
import { Footer } from "./Footer";

export function ConditionalFooter() {
  const pathname = usePathname();

  // No footer on Home, Studio, Projets and Gallery pages (they have their own layout)
  if (
    pathname === "/" ||
    pathname === "/studio" ||
    pathname === "/projets" ||
    pathname.startsWith("/gallerie-projets")
  )
    return null;

  return <Footer />;
}
