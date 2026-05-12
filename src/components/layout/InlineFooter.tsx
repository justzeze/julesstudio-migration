"use client";

import { useSiteSettings } from "@/lib/site-settings-context";

export function InlineFooter() {
  const settings = useSiteSettings();

  return (
    <>
      <div className="mt-40 text-center">
        <div className="text-sm font-normal text-[color:var(--color-muted)]">
          {settings.tagline}
        </div>
      </div>

      <div className="mt-24 flex flex-col items-center gap-8 p-2">
        <div className="h-60 flex items-center">
          <span
            className="text-4xl font-black text-[color:var(--color-accent)]"
            style={{
              fontFamily: "'Palatino Linotype', Palatino, serif",
              transform: "scale3d(1, 4.5, 1)",
            }}
          >
            JULESSTUDIO
          </span>
        </div>

        <div className="flex items-center justify-end gap-2 w-full -mt-18 px-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[color:var(--color-muted)]"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M14.83 14.83a4 4 0 1 1 0-5.66" />
          </svg>
          <span className="text-sm font-light text-[color:var(--color-foreground)]">
            {settings.copyright}
          </span>
        </div>
      </div>

      <div className="h-24" />
    </>
  );
}
