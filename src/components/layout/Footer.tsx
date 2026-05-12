"use client";

import { useSiteSettings } from "@/lib/site-settings-context";

export function Footer() {
  const settings = useSiteSettings();

  const socialLinks = [
    { label: "Mail", href: `mailto:${settings.email}` },
    { label: "Insta", href: settings.instagramUrl },
    { label: "YouTube", href: settings.youtubeUrl },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Marquee */}
      <div className="border-t border-[color:var(--color-border)] py-3 overflow-hidden">
        <div className="marquee-track flex whitespace-nowrap" style={{ "--marquee-duration": "25s" } as React.CSSProperties}>
          {Array.from({ length: 4 }).map((_, i) => (
            <span
              key={i}
              className="text-xs font-medium tracking-[0.3em] text-[color:var(--color-muted)] mx-8"
            >
              {settings.tagline}
            </span>
          ))}
        </div>
      </div>

      {/* Grand titre */}
      <div className="px-6 md:px-10 pt-8 pb-4">
        <h2
          className="font-[family-name:var(--font-merriweather)] text-[clamp(4rem,15vw,12rem)] font-black leading-[0.85] text-[color:var(--color-accent)]"
          style={{ WebkitTextStroke: "1px var(--color-accent)" }}
        >
          JULESSTUDIO
        </h2>
      </div>

      {/* Bottom bar */}
      <div className="flex items-center justify-between px-6 md:px-10 py-6 text-xs text-[color:var(--color-muted)]">
        <span>&copy; {settings.copyright}</span>

        <div className="flex items-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="link-hover hover:text-[color:var(--color-foreground)] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
