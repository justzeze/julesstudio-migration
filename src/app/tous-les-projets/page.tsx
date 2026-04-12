import type { Metadata } from "next";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { BackgroundVideoPanel } from "@/components/layout/BackgroundVideoPanel";
import { ContentPanel } from "@/components/layout/ContentPanel";

export const metadata: Metadata = {
  title: "Portfolio Complet — Tous Nos Projets Web Design & Webflow Paris",
  description:
    "Découvrez l'ensemble de nos réalisations web design à Paris : sites vitrines, landing pages, e-commerce et identités visuelles. Chaque projet Webflow est conçu sur mesure.",
  alternates: {
    canonical: "https://julesstudio.fr/tous-les-projets",
  },
  openGraph: {
    title: "Tous les projets Jules Studio — Web Design & Webflow",
    description:
      "Portfolio complet de nos créations web : sites vitrines, landing pages, e-commerce conçus avec Webflow à Paris.",
    url: "https://julesstudio.fr/tous-les-projets",
  },
};

export default function TousLesProjetsPage() {
  return (
    <div className="flex flex-col md:flex-row">
      {/* LEFT CONTENT PANEL */}
      <ContentPanel>
        <div
          className="p-4"
          style={{ borderRadius: "5px", backgroundColor: "var(--color-beige)" }}
        >
          <h1 className="font-[family-name:var(--font-merriweather)] text-2xl md:text-3xl font-bold">
            Tous les projets
          </h1>
        </div>
        <div className="p-2">
          <ProjectsGrid />
        </div>
      </ContentPanel>

      {/* RIGHT PANEL */}
      <BackgroundVideoPanel />
    </div>
  );
}
