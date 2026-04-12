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
        el.style.position = "fixed";
        el.style.inset = "0";
        el.style.zIndex = "100";
        el.style.overflow = "hidden";
        el.style.animation =
          "swipe-in-from-left 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards";

        const cleanup = () => {
          el.style.position = "";
          el.style.inset = "";
          el.style.zIndex = "";
          el.style.overflow = "";
          el.style.animation = "";
        };
        el.addEventListener("animationend", cleanup, { once: true });
      }
    }
  }, []);

  // Handle browser back button
  useEffect(() => {
    const handlePopState = () => {
      document.documentElement.classList.add("swipe-back");
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return (
    <div
      ref={wrapperRef}
      style={{ backgroundColor: "var(--color-background)" }}
    >
      {children}
    </div>
  );
}
