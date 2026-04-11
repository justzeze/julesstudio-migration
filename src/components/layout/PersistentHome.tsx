"use client";

import { usePathname } from "next/navigation";
import { HomeHero } from "../sections/HomeHero";

export function PersistentHome() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <div style={{ display: isHome ? "contents" : "none" }}>
      <HomeHero isVisible={isHome} />
    </div>
  );
}
