import type { Metadata } from "next";
import { AccordionItem } from "@/components/ui/Accordion";
import { BackgroundVideoPanel } from "@/components/layout/BackgroundVideoPanel";
import { ContentPanel } from "@/components/layout/ContentPanel";
import { CalButton } from "@/components/ui/CalButton";
import { FAQJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Contact — Réservez Votre Appel Découverte Gratuit | Web Design Paris",
  description:
    "Prêt à lancer votre projet web ? Contactez Jules Studio, studio de web design à Paris. Appel découverte gratuit de 30 min. Site vitrine dès 890€, landing page dès 1 690€. Webflow, identité visuelle, stratégie digitale.",
  alternates: {
    canonical: "https://julesstudio.fr/contact",
  },
  openGraph: {
    title: "Contactez Jules Studio — Appel Découverte Gratuit",
    description:
      "Réservez un appel découverte gratuit de 30 min avec Charles. On parle de votre projet web, sans engagement. Studio web design & Webflow à Paris.",
    url: "https://julesstudio.fr/contact",
  },
};

export default function ContactPage() {
  return (
    <>
    <FAQJsonLd />
    <BreadcrumbJsonLd
      items={[
        { name: "Accueil", url: "https://julesstudio.fr" },
        { name: "Contact", url: "https://julesstudio.fr/contact" },
      ]}
    />
    <div className="flex flex-col md:flex-row">
      {/* LEFT CONTENT PANEL */}
      <ContentPanel>

      {/* contact-header-intro-wrapper */}
      <section className="p-4" style={{ borderRadius: "5px", backgroundColor: "#fff", height: "40vh" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/peace-of-mind.svg"
          alt="Illustration"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
        />
      </section>

      <section className="p-4" style={{ borderRadius: "5px", backgroundColor: "var(--color-beige)" }}>
        <h1 className="font-[family-name:var(--font-merriweather)] text-2xl md:text-3xl font-bold mb-4">
          Parlons de votre projet
        </h1>
        <p className="text-sm leading-relaxed text-[color:var(--color-foreground)]">
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
        <p className="text-sm text-[color:var(--color-foreground)] mb-6">
          Réservez un appel découverte gratuit de 30 min avec Charles. On
          parle de votre projet, sans engagement.
        </p>
        <CalButton variant="button">
          Réserver mon appel gratuit
        </CalButton>
      </section>

      {/* Spacers */}
      <div className="pt-4" />
      <div className="pt-12" />
      <div className="pt-12" />
      <div className="pt-12" />

      {/* Tagline */}
      <div className="flex-1 text-center">
        <div className="text-sm font-normal text-[color:var(--color-muted)]">
          #CREATAMAZINGEVERYWHEREANYTIME
        </div>
      </div>

      {/* Footer inline */}
      <div className="pt-12" />
      <div className="pt-12" />

      <div className="flex flex-col items-center gap-8 p-2">
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
            2026 JULESSTUDIO
          </span>
        </div>
      </div>

      <div className="pt-12" />
      <div className="pt-12" />

      </ContentPanel>

      {/* RIGHT PANEL */}
      <BackgroundVideoPanel />
    </div>
    </>
  );
}
