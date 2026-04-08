"use client";

import { usePathname } from "next/navigation";
import { Footer } from "./Footer";

export function ConditionalFooter() {
  const pathname = usePathname();

  // No footer on Home page
  if (pathname === "/") return null;

  return <Footer />;
}
