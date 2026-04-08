import type { Metadata } from "next";
import Image from "next/image";
import { BackgroundVideoPanel } from "@/components/layout/BackgroundVideoPanel";

export const metadata: Metadata = {
  title: "Notre Studio Créatif — Direction Artistique & Développement Webflow",
  description:
    "Jules Studio, studio de web design à Paris fondé par des passionnés de web. Direction artistique, développement Webflow, interaction design et stratégie digitale.",
};

const services = [
  "Direction artistique",
  "Stratégie digitale",
  "Web Design",
  "Interaction Design",
  "CMS & Webflow Development",
];

export default function StudioPage() {
  return (
    <div className="relative pt-28 pb-20">
      <BackgroundVideoPanel />

      {/* Hero */}
      <section className="relative z-10 px-6 md:px-10 md:w-1/2 mb-16">
        <div className="flex flex-col gap-8">
          {/* Title */}
          <div>
            <h1 className="font-[family-name:var(--font-merriweather)] text-3xl md:text-4xl font-bold text-[color:var(--color-accent)] mb-1">
              JULES STUDIO
            </h1>
            <p className="text-xs tracking-widest text-[color:var(--color-muted)]">
              PARIS 2025
            </p>
          </div>

          {/* Portrait photo placeholder */}
          <div className="relative w-32 h-32 rounded-full overflow-hidden bg-[color:var(--color-beige)]">
            <Image
              src="https://cdn.prod.website-files.com/697be174b8224c11c814a60e/placeholder-portrait.jpg"
              alt="Jules Studio"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* Content sections */}
      <div className="relative z-10 px-6 md:px-10 md:w-1/2 max-w-3xl space-y-16">
        {/* Le Studio */}
        <section>
          <h2 className="font-[family-name:var(--font-merriweather)] text-xl font-bold mb-4">
            Le Studio
          </h2>
          <p className="text-sm leading-relaxed text-[color:var(--color-muted)]">
            Un site beau, c&apos;est bien. Un site qui donne envie de vous
            choisir, c&apos;est mieux. Jules Studio est un studio de web design
            basé à Paris, spécialisé dans la création de sites sur mesure avec
            Webflow. Nous créons des vitrines numériques pour les marques, les
            studios et les entreprises qui veulent se positionner haut, convertir
            plus de visiteurs, et affirmer leur image de marque.
          </p>
        </section>

        {/* Notre Vision */}
        <section>
          <h2 className="font-[family-name:var(--font-merriweather)] text-xl font-bold mb-4">
            Notre Vision
          </h2>
          <p className="text-sm leading-relaxed text-[color:var(--color-muted)]">
            Votre site ne doit pas juste exister. Il doit convaincre. Chaque
            pixel est pensé pour votre positionnement, votre crédibilité, et
            la conversion de vos visiteurs. Pas de design gratuit. Pas de
            blabla. Pas de site joli mais inutile.
          </p>
        </section>

        {/* Nos Services */}
        <section>
          <h2 className="font-[family-name:var(--font-merriweather)] text-xl font-bold mb-4">
            Nos Services
          </h2>
          <ul className="space-y-2">
            {services.map((service) => (
              <li
                key={service}
                className="text-sm text-[color:var(--color-muted)] flex items-center gap-3"
              >
                <span className="w-1 h-1 rounded-full bg-[color:var(--color-accent)]" />
                {service}
              </li>
            ))}
          </ul>
        </section>

        {/* Nos Équipes */}
        <section>
          <h2 className="font-[family-name:var(--font-merriweather)] text-xl font-bold mb-4">
            Nos Équipes
          </h2>
          <p className="text-sm leading-relaxed text-[color:var(--color-muted)]">
            Jules Studio a été créé par un couple de geeks. Sous la tutelle de
            John, c&apos;est Charles qui mène le design et le développement.
            Nous faisons appel à des partenaires créatifs selon les projets.
          </p>
        </section>

        {/* Valeurs */}
        <section>
          <h2 className="font-[family-name:var(--font-merriweather)] text-xl font-bold mb-4">
            Valeurs
          </h2>
          <p className="text-sm leading-relaxed text-[color:var(--color-muted)]">
            Avant d&apos;être un studio, Jules Studio à Paris est un studio à
            taille humaine. Pas de commercial entre nous. Chaque projet est
            unique, jamais de template, jamais de compromis.
          </p>
        </section>

        {/* CTA */}
        <section>
          <h2 className="font-[family-name:var(--font-merriweather)] text-xl font-bold mb-4">
            Contactez-nous
          </h2>
          <p className="text-sm text-[color:var(--color-muted)]">
            Parlez-nous de votre projet, écrivez-nous à{" "}
            <a
              href="mailto:hello@julesstudio.fr"
              className="link-hover text-[color:var(--color-foreground)] font-medium"
            >
              hello@julesstudio.fr
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
