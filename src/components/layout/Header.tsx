"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/studio", label: "STUDIO" },
  { href: "/projets", label: "PROJETS" },
  { href: "/contact", label: "CONTACT" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop header — hidden on mobile */}
      <header className="hidden md:block fixed top-0 left-0 w-full z-50 bg-white">
        <div className="flex items-center justify-between px-8 py-3 md:px-12">
          <Link href="/">
            <Image
              src="/images/jslogo.svg"
              alt="Jules Studio"
              width={220}
              height={50}
              className="h-10 w-auto"
              priority
            />
          </Link>

          <nav className="flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide ${
                  pathname === link.href
                    ? "text-[color:var(--color-foreground)]"
                    : "text-[color:var(--color-foreground)] hover:opacity-60"
                }`}
                style={{ transition: "opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1)" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Mobile nav — fixed bottom, hidden on desktop */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-[999] bg-white flex flex-col">
        <div className="flex items-center justify-between w-full px-2">
          {/* Left: logo + Studio | Projets */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center justify-center w-[4.5rem] h-[4.5rem] p-2 pb-4">
              <Image
                src="/images/jslogo-shape.svg"
                alt="Jules Studio"
                width={60}
                height={60}
                className="w-full h-full object-contain"
              />
            </Link>
            <div className="flex items-center gap-3">
              <Link
                href="/studio"
                className={`text-sm ${
                  pathname === "/studio" ? "font-medium" : "font-normal"
                }`}
                style={{ transition: "color 1.2s cubic-bezier(0.4, 0, 0.2, 1)" }}
              >
                Studio
              </Link>
              <div className="w-px h-8 bg-[#c4c4c4]" />
              <Link
                href="/projets"
                className={`text-sm ${
                  pathname === "/projets" ? "font-medium" : "font-normal"
                }`}
                style={{ transition: "color 1.2s cubic-bezier(0.4, 0, 0.2, 1)" }}
              >
                Projets
              </Link>
            </div>
          </div>

          {/* Right: Contact button */}
          <Link
            href="/contact"
            className="text-sm font-normal px-2 py-2 rounded-[5px]"
            style={{
              backgroundImage: "linear-gradient(#f3f2f0, #afafaf 60%, #c4c4c4)",
              border: "1px solid #c4c4c4",
            }}
          >
            Contact
          </Link>
        </div>
      </nav>
    </>
  );
}
