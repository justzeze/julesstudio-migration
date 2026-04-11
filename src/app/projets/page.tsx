import type { Metadata } from "next";
import { ProjetsPageClient } from "@/components/sections/ProjetsPageClient";

export const metadata: Metadata = {
  title: "Nos Réalisations Web Design & Webflow — Portfolio",
  description:
    "Explorez nos meilleurs projets : sites vitrines, e-commerce, éditorial et identités visuelles. Chaque site est conçu sur mesure avec Webflow.",
};

export default function ProjetsPage() {
  return <ProjetsPageClient />;
}
