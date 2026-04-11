"use client";

import { useEffect } from "react";

export default function GallerieTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const html = document.documentElement;

    // If we arrived via swipe navigation, play the enter animation
    if (html.classList.contains("swipe-out")) {
      html.classList.remove("swipe-out");
      html.classList.add("swipe-in");

      const cleanup = setTimeout(() => {
        html.classList.remove("swipe-in");
      }, 800);

      return () => clearTimeout(cleanup);
    }
  }, []);

  return <>{children}</>;
}
