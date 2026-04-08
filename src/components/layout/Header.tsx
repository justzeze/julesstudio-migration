"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/studio", label: "STUDIO" },
  { href: "/projets", label: "PROJETS" },
  { href: "/contact", label: "CONTACT" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white">
      <div className="flex items-center justify-between px-8 py-4 md:px-12">
        {/* Logo */}
        <Link href="/" className="flex items-baseline gap-1">
          <span className="font-[family-name:var(--font-merriweather)] text-2xl md:text-3xl font-black tracking-tight text-[color:var(--color-foreground)]">
            JULES STUDIO
          </span>
          <span className="text-[color:var(--color-accent)] text-lg">✦</span>
        </Link>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                pathname === link.href
                  ? "text-[color:var(--color-foreground)]"
                  : "text-[color:var(--color-foreground)] hover:opacity-60"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Nav mobile */}
        <MobileNav pathname={pathname} />
      </div>
    </header>
  );
}

function MobileNav({ pathname }: { pathname: string }) {
  return (
    <nav className="fixed bottom-0 left-0 w-full md:hidden z-50 bg-white border-t border-[color:var(--color-border)]">
      <div className="flex items-center justify-around py-3">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-xs font-medium tracking-widest transition-colors ${
              pathname === link.href
                ? "text-[color:var(--color-foreground)]"
                : "text-[color:var(--color-muted)]"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
