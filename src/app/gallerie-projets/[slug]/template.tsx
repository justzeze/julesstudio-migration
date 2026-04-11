"use client";

import { useEffect, useRef } from "react";

export default function GallerieTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const html = document.documentElement;

    if (html.classList.contains("swipe-navigating")) {
      html.classList.remove("swipe-navigating");

      // Play the slide-in animation
      const el = wrapperRef.current;
      if (el) {
        el.style.animation =
          "swipe-in-from-left 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards";

        const cleanup = () => {
          el.style.animation = "";
        };
        el.addEventListener("animationend", cleanup, { once: true });
      }
    }
  }, []);

  return <div ref={wrapperRef}>{children}</div>;
}
