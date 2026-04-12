"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

/**
 * Left content panel (v2-content-layer) with independent smooth scroll.
 * Takes 36.36% width on desktop, full width on mobile.
 * Has its own Lenis instance so scroll always works regardless of navigation.
 */
export function ContentPanel({ children }: { children: React.ReactNode }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wrapper: scrollRef.current,
      content: scrollRef.current,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Reset scroll position on mount (page navigation)
    scrollRef.current.scrollTop = 0;

    return () => lenis.destroy();
  }, []);

  return (
    <div
      ref={scrollRef}
      className="page-enter relative z-[1] flex flex-col gap-2 w-full md:w-[36.36%] min-h-screen md:h-screen md:overflow-y-auto bg-white px-2 pt-8 md:pt-20"
      style={{ scrollbarWidth: "none" }}
    >
      {children}
    </div>
  );
}
