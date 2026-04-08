import type { Metadata } from "next";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";

export const metadata: Metadata = {
  title: "Nos Réalisations Web Design & Webflow — Portfolio",
  description:
    "Explorez nos meilleurs projets : sites vitrines, e-commerce, éditorial et identités visuelles. Chaque site est conçu sur mesure avec Webflow.",
};

export default function ProjetsPage() {
  return (
    <div className="pt-28 pb-20 px-6 md:px-10">
      {/* Header */}
      <div className="mb-12">
        <p className="text-xs font-medium tracking-widest text-[color:var(--color-muted)] mb-4">
          Chaque projet ci-dessous a été conçu avec un seul objectif : générer
          des résultats mesurables. Pas juste un beau design.
        </p>
      </div>

      {/* Projects grid with filters */}
      <ProjectsGrid />
    </div>
  );
}
