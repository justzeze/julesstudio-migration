"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";

interface SwipeLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function SwipeLink({ href, children, className, style }: SwipeLinkProps) {
  const router = useRouter();

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      // Quick exit animation then navigate
      document.body.style.transition = "transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s ease";
      document.body.style.transform = "translateX(100%)";
      document.body.style.opacity = "0";
      document.documentElement.classList.add("swipe-navigating");
      setTimeout(() => {
        document.body.style.transition = "";
        document.body.style.transform = "";
        document.body.style.opacity = "";
        router.push(href);
      }, 200);
    },
    [href, router]
  );

  return (
    <a href={href} onClick={handleClick} className={className} style={style}>
      {children}
    </a>
  );
}
