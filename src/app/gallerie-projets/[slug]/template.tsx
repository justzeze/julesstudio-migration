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

      const el = wrapperRef.current;
      if (el) {
        el.style.animation =
          "swipe-in-from-left 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards";

        const cleanup = () => {
          el.style.animation = "";
        };
        el.addEventListener("animationend", cleanup, { once: true });
      }
    }
  }, []);

  return (
    <div
      ref={wrapperRef}
      style={{
        position: "relative",
        zIndex: 10,
        backgroundColor: "var(--color-background)",
      }}
    >
      {children}
    </div>
  );
}
