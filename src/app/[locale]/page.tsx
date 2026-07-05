import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({
    locale,
    path: "/",
    title: {
      fr: "Jules Studio — Studio Web Design & Agence Webflow à Paris | Création de Sites Sur Mesure",
      en: "Jules Studio — Web Design Studio & Webflow Agency in Paris | Custom Websites",
    },
    description: {
      fr: "Jules Studio, studio de web design et développement Webflow à Paris. Création de sites internet sur mesure, landing pages haute conversion, identité visuelle et stratégie digitale.",
      en: "Jules Studio, a web design and Webflow development studio in Paris. Custom websites, high-converting landing pages, visual identity and digital strategy.",
    },
    ogTitle: {
      fr: "Jules Studio — Studio Web Design & Agence Webflow à Paris",
      en: "Jules Studio — Web Design Studio & Webflow Agency in Paris",
    },
    ogDescription: {
      fr: "Création de sites internet sur mesure avec Webflow. Design premium pour entrepreneurs et marques ambitieuses à Paris.",
      en: "Custom websites built with Webflow. Premium design for ambitious entrepreneurs and brands in Paris.",
    },
  });
}

// HomeHero is rendered persistently in the layout (PersistentHome)
// so it never unmounts and the video stays loaded across navigations.
export default function Home() {
  return null;
}
