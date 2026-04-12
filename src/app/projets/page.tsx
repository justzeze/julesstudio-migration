import type { Metadata } from "next";
import { ProjetsPageClient } from "@/components/sections/ProjetsPageClient";

export const metadata: Metadata = {
  title: "Portfolio Web Design & Webflow Paris — Nos Réalisations",
  description:
    "Découvrez nos réalisations web design à Paris : sites vitrines, landing pages, e-commerce et identités visuelles. Chaque projet est conçu sur mesure avec Webflow pour générer des résultats mesurables.",
  alternates: {
    canonical: "https://julesstudio.fr/projets",
  },
  openGraph: {
    title: "Portfolio Jules Studio — Projets Web Design & Webflow",
    description:
      "Sites vitrines, landing pages, e-commerce : découvrez nos projets conçus sur mesure avec Webflow à Paris.",
    url: "https://julesstudio.fr/projets",
  },
};

export default function ProjetsPage() {
  return <ProjetsPageClient />;
}
