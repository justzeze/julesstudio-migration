import type { Metadata } from "next";
import { AccordionItem } from "@/components/ui/Accordion";
import { BackgroundVideoPanel } from "@/components/layout/BackgroundVideoPanel";
import { ContentPanel } from "@/components/layout/ContentPanel";
import { CalButton } from "@/components/ui/CalButton";

export const metadata: Metadata = {
  title: "Contact — Réservez Votre Appel Découverte Gratuit",
  description:
    "Prêt à lancer votre projet web ? Contactez Jules Studio à Paris pour un appel découverte gratuit. Création de site Webflow sur mesure.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col md:flex-row">
      {/* LEFT CONTENT PANEL */}
      <ContentPanel>

      {/* contact-header-left-content-wrapper */}
      <div
        className="w-full overflow-hidden"
        style={{ height: "40vh", borderRadius: "5px", backgroundColor: "#fff" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://cdn.prod.website-files.com/697be174b8224c11c814a60e/699236619f378c81f531f89d_peace%20of%20mind.svg"
          alt="Illustration"
          className="h-full w-auto object-contain"
        />
      </div>

      {/* contact-header-intro-wrapper */}
      <section className="p-4" style={{ borderRadius: "5px", backgroundColor: "var(--color-beige)" }}>
        <h1 className="font-[family-name:var(--font-merriweather)] text-2xl md:text-3xl font-bold mb-4">
          Parlons de votre projet
        </h1>
        <p className="text-sm leading-relaxed text-[color:var(--color-muted)]">
          Vous avez un projet de site web en tête ? Écrivez-nous à{" "}
          <a
            href="mailto:hello@julesstudio.fr"
            className="link-hover text-[color:var(--color-foreground)] font-medium"
          >
            hello@julesstudio.fr
          </a>{" "}
          ou mieux encore, passez directement à l&apos;action —{" "}
          <CalButton variant="link">
            réservez votre appel découverte gratuit
          </CalButton>{" "}
          de 30 min avec Charles.
        </p>
      </section>

      {/* FAQ */}
      <section className="p-4" style={{ borderRadius: "5px", backgroundColor: "var(--color-beige)" }}>
        <h2 className="font-[family-name:var(--font-merriweather)] text-xl font-bold mb-6">
          Questions fréquentes
        </h2>

        <AccordionItem question="Pour qui on travaille ?">
          <p>
            Indépendants, freelances, créateurs, coachs, startups, marques à
            Paris et partout en France. Si vous avez une vision claire et
            l&apos;ambition de vous démarquer, on est faits pour travailler
            ensemble.
          </p>
        </AccordionItem>

        <AccordionItem question="Combien ça coûte ?">
          <ul className="space-y-2">
            <li>
              <strong>Site vitrine</strong> → à partir de 890 €
            </li>
            <li>
              <strong>Landing page haute conversion</strong> → à partir de
              1 690 €
            </li>
            <li>
              <strong>Projet complet</strong> (stratégie + design + Webflow) →
              à partir de 2 390 €
            </li>
          </ul>
        </AccordionItem>

        <AccordionItem question="Comment ça se passe ?">
          <ol className="space-y-2 list-decimal list-inside">
            <li>
              <strong>Immersion</strong> — On comprend votre marque, vos
              objectifs, votre audience.
            </li>
            <li>
              <strong>Direction créative</strong> — On définit l&apos;identité
              visuelle et la stratégie.
            </li>
            <li>
              <strong>Design</strong> — On crée chaque page, chaque
              interaction.
            </li>
            <li>
              <strong>Développement & lancement</strong> — On intègre, on
              teste, on livre.
            </li>
          </ol>
        </AccordionItem>
      </section>

      {/* CTA */}
      <section className="p-4" style={{ borderRadius: "5px", backgroundColor: "var(--color-beige)" }}>
        <h2 className="font-[family-name:var(--font-merriweather)] text-lg font-bold mb-3">
          PRÊT À LANCER ?
        </h2>
        <p className="text-sm text-[color:var(--color-muted)] mb-6">
          Réservez un appel découverte gratuit de 30 min avec Charles. On
          parle de votre projet, sans engagement.
        </p>
        <CalButton variant="button">
          Réserver mon appel gratuit
        </CalButton>
      </section>

      {/* Inline footer */}
      <section className="px-4 pt-8 pb-4">
        {/* Marquee */}
        <div className="border-t border-[color:var(--color-border)] py-3 overflow-hidden">
          <span className="text-xs font-medium tracking-[0.3em] text-[color:var(--color-muted)]">
            #CREATEAMAZINGEVERYWHEREANYTIME
          </span>
        </div>

        {/* Grand titre */}
        <div className="pt-6 pb-4">
          <h2
            className="font-[family-name:var(--font-merriweather)] font-black leading-[0.85] text-[color:var(--color-accent)]"
            style={{ fontSize: "clamp(3rem, 10vw, 7rem)", WebkitTextStroke: "1px var(--color-accent)" }}
          >
            JULESSTUDIO
          </h2>
        </div>

        {/* Copyright */}
        <div className="flex items-center gap-2 py-4 text-xs text-[color:var(--color-muted)]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M14.83 14.83a4 4 0 1 1 0-5.66" />
          </svg>
          <span>2026 JULESSTUDIO</span>
        </div>
      </section>

      </ContentPanel>

      {/* RIGHT PANEL */}
      <BackgroundVideoPanel />
    </div>
  );
}
