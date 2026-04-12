"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";

interface SwipeLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  direction?: "forward" | "back";
}

export function SwipeLink({
  href,
  children,
  className,
  style,
  direction = "forward",
}: SwipeLinkProps) {
  const router = useRouter();

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      document.documentElement.classList.add(
        direction === "back" ? "swipe-back" : "swipe-navigating"
      );
      router.push(href);
    },
    [href, router, direction]
  );

  return (
    <a href={href} onClick={handleClick} className={className} style={style}>
      {children}
    </a>
  );
}
