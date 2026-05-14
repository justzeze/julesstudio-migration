import type { Metadata } from "next";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { BackgroundVideoPanel } from "@/components/layout/BackgroundVideoPanel";
import { ContentPanel } from "@/components/layout/ContentPanel";
import { getAllProjects } from "@/lib/queries";
import { buildPageMetadata } from "@/lib/seo";
import { ProjectVideosJsonLd } from "@/components/seo/JsonLd";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({
    locale,
    path: "/tous-les-projets",
    title: "Portfolio Complet — Tous Nos Projets Web Design & Webflow Paris",
    description:
      "Découvrez l'ensemble de nos réalisations web design à Paris : sites vitrines, landing pages, e-commerce et identités visuelles. Chaque projet Webflow est conçu sur mesure.",
    ogTitle: "Tous les projets Jules Studio — Web Design & Webflow",
    ogDescription:
      "Portfolio complet de nos créations web : sites vitrines, landing pages, e-commerce conçus avec Webflow à Paris.",
  });
}

export const revalidate = 60;

export default async function TousLesProjetsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const projects = await getAllProjects(locale);

  return (
    <div className="flex flex-col md:flex-row">
      <ProjectVideosJsonLd projects={projects} />
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
          <ProjectsGrid projects={projects} />
        </div>
      </ContentPanel>

      {/* RIGHT PANEL */}
      <BackgroundVideoPanel />
    </div>
  );
}
