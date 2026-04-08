import { HomeHero } from "@/components/sections/HomeHero";
import { HomeGallery } from "@/components/sections/HomeGallery";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeGallery />

      {/* Sidebar social links (desktop) */}
      <aside className="hidden md:flex fixed right-0 top-1/2 -translate-y-1/2 z-40 flex-col gap-4">
        {[
          { label: "Contact", href: "mailto:hello@julesstudio.fr" },
          { label: "Mail", href: "mailto:hello@julesstudio.fr" },
          { label: "Insta", href: "https://instagram.com/julesstudio.fr" },
          { label: "YouTube", href: "https://youtube.com/@julesstudioyt" },
        ].map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="link-hover text-[10px] font-medium tracking-widest text-[color:var(--color-muted)] [writing-mode:vertical-rl] rotate-180 px-3 py-2 border-l border-transparent hover:border-[color:var(--color-border)] transition-all duration-300"
          >
            {link.label}
          </a>
        ))}
      </aside>
    </>
  );
}
