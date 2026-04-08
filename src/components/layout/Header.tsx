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
    <header className="fixed top-0 left-0 w-full z-50 mix-blend-difference">
      <div className="flex items-center justify-between px-6 py-5 md:px-10">
        {/* Logo */}
        <Link href="/" className="text-white">
          <span className="font-[family-name:var(--font-merriweather)] text-sm font-bold tracking-wide">
            JULES STUDIO
          </span>
          <span className="text-[color:var(--color-accent)] ml-0.5">✦</span>
        </Link>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`link-hover text-xs font-medium tracking-widest text-white transition-opacity duration-300 ${
                pathname === link.href ? "opacity-100" : "opacity-70 hover:opacity-100"
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
    <nav className="fixed bottom-0 left-0 w-full md:hidden z-50 bg-white/80 backdrop-blur-md border-t border-[color:var(--color-border)]">
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
