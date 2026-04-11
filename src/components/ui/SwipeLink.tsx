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

      // Mark the body for the swipe-out animation
      document.documentElement.classList.add("swipe-out");

      // Wait for the exit animation, then navigate
      setTimeout(() => {
        router.push(href);
      }, 600);
    },
    [href, router]
  );

  return (
    <a href={href} onClick={handleClick} className={className} style={style}>
      {children}
    </a>
  );
}
