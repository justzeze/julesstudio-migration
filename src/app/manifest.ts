import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Jules Studio — Web Design & Webflow Paris",
    short_name: "Jules Studio",
    description:
      "Studio de web design et développement Webflow à Paris. Création de sites internet sur mesure.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1b1d22",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
