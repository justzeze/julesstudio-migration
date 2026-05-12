"use client";

import { usePathname } from "next/navigation";
import { Footer } from "./Footer";

export function ConditionalFooter() {
  const pathname = usePathname();

  // Strip locale prefix to get the base path
  const basePath = pathname.replace(/^\/(fr|en)/, "") || "/";

  // No footer on Home, Studio, Projets and Gallery pages (they have their own layout)
  if (
    basePath === "/" ||
    basePath === "/studio" ||
    basePath === "/projets" ||
    basePath === "/contact" ||
    basePath.startsWith("/gallerie-projets")
  )
    return null;

  return <Footer />;
}
