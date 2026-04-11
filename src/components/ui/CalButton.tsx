"use client";

import { useEffect } from "react";

const CAL_URL = "https://cal.com/julesstudio/appel-decouverte";

interface CalButtonProps {
  children: React.ReactNode;
  variant: "link" | "button";
}

export function CalButton({ children, variant }: CalButtonProps) {
  useEffect(() => {
    // Load Cal.com embed script
    const script = document.createElement("script");
    script.src = "https://app.cal.com/embed/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const openCal = () => {
    // @ts-expect-error Cal is loaded via external script
    if (typeof window !== "undefined" && window.Cal) {
      // @ts-expect-error Cal is loaded via external script
      window.Cal("modal", {
        calLink: "julesstudio/appel-decouverte",
        layout: "month_view",
      });
    } else {
      window.open(CAL_URL, "_blank");
    }
  };

  if (variant === "link") {
    return (
      <button
        onClick={openCal}
        className="link-hover text-[color:var(--color-foreground)] font-medium underline cursor-pointer bg-transparent border-none p-0 text-sm"
      >
        {children}
      </button>
    );
  }

  return (
    <button
      onClick={openCal}
      className="inline-block text-sm font-medium cursor-pointer text-[color:var(--color-foreground)] bg-transparent"
      style={{
        border: "1px solid var(--color-foreground)",
        borderRadius: "5px",
        padding: "0.75rem 1.5rem",
      }}
    >
      {children}
    </button>
  );
}
