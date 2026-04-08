import type { Metadata } from "next";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { BackgroundVideoPanel } from "@/components/layout/BackgroundVideoPanel";

export const metadata: Metadata = {
  title: "Tous Nos Projets Web Design & Webflow — Portfolio Complet",
  description:
    "Découvrez l'ensemble de nos réalisations : sites vitrines, landing pages, e-commerce et identités visuelles.",
};

export default function TousLesProjetsPage() {
  return (
    <div className="relative pt-28 pb-20 px-6 md:px-10">
      <BackgroundVideoPanel />
      <div className="relative z-10 md:w-1/2">
        <h1 className="font-[family-name:var(--font-merriweather)] text-2xl md:text-3xl font-bold mb-8">
          Tous les projets
        </h1>
        <ProjectsGrid />
      </div>
    </div>
  );
}
