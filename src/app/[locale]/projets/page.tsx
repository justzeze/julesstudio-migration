import type { Metadata } from "next";
import { ProjetsPageClient } from "@/components/sections/ProjetsPageClient";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { getAllProjects } from "@/lib/queries";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({
    locale,
    path: "/projets",
    title: "Portfolio Web Design & Webflow Paris — Nos Réalisations",
    description:
      "Découvrez nos réalisations web design à Paris : sites vitrines, landing pages, e-commerce et identités visuelles. Chaque projet est conçu sur mesure avec Webflow pour générer des résultats mesurables.",
    ogTitle: "Portfolio Jules Studio — Projets Web Design & Webflow",
    ogDescription:
      "Sites vitrines, landing pages, e-commerce : découvrez nos projets conçus sur mesure avec Webflow à Paris.",
  });
}

export const revalidate = 60;

export default async function ProjetsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const projects = await getAllProjects(locale);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "https://julesstudio.fr" },
          { name: "Projets", url: "https://julesstudio.fr/projets" },
        ]}
      />
      <ProjetsPageClient projects={projects} dict={dict.projets} />
    </>
  );
}
