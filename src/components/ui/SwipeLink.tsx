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
      document.documentElement.classList.add("swipe-navigating");
      router.push(href);
    },
    [href, router]
  );

  return (
    <a href={href} onClick={handleClick} className={className} style={style}>
      {children}
    </a>
  );
}
