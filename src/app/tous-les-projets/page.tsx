import type { Metadata } from "next";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { BackgroundVideoPanel } from "@/components/layout/BackgroundVideoPanel";
import { ContentPanel } from "@/components/layout/ContentPanel";

export const metadata: Metadata = {
  title: "Tous Nos Projets Web Design & Webflow — Portfolio Complet",
  description:
    "Découvrez l'ensemble de nos réalisations : sites vitrines, landing pages, e-commerce et identités visuelles.",
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
