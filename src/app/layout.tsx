import type { Metadata } from "next";
import { Montserrat, Merriweather } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { ConditionalFooter } from "@/components/layout/ConditionalFooter";
import { PersistentHome } from "@/components/layout/PersistentHome";
import {
  LocalBusinessJsonLd,
  WebSiteJsonLd,
} from "@/components/seo/JsonLd";

import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: {
    default:
      "Jules Studio — Studio Web Design & Agence Webflow à Paris | Création de Sites Sur Mesure",
    template: "%s | Jules Studio — Web Design Paris",
  },
  description:
    "Jules Studio, studio de web design et développement Webflow à Paris. Création de sites internet sur mesure, landing pages haute conversion, identité visuelle et stratégie digitale. Réservez votre appel découverte gratuit.",
  metadataBase: new URL("https://julesstudio.fr"),
  keywords: [
    "web design paris",
    "agence webflow paris",
    "studio web design",
    "création site internet paris",
    "design digital paris",
    "webflow designer paris",
    "site vitrine paris",
    "landing page paris",
    "identité visuelle paris",
    "freelance webflow",
    "développement webflow",
    "agence digitale paris",
    "web designer freelance paris",
    "création site sur mesure",
    "studio créatif paris",
  ],
  authors: [{ name: "Jules Studio", url: "https://julesstudio.fr" }],
  creator: "Jules Studio",
  publisher: "Jules Studio",
  formatDetection: {
    email: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://julesstudio.fr",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://julesstudio.fr",
    siteName: "Jules Studio",
    title:
      "Jules Studio — Studio Web Design & Agence Webflow à Paris",
    description:
      "Création de sites internet sur mesure avec Webflow. Design premium, stratégie digitale et identité visuelle pour entrepreneurs et marques ambitieuses à Paris.",
    images: [
      {
        url: "/images/jslogo.svg",
        width: 1200,
        height: 630,
        alt: "Jules Studio — Web Design & Webflow Paris",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jules Studio — Studio Web Design & Webflow à Paris",
    description:
      "Création de sites internet sur mesure avec Webflow. Design premium pour entrepreneurs et marques ambitieuses.",
    images: ["/images/jslogo.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {},
  category: "Web Design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${montserrat.variable} ${merriweather.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-[family-name:var(--font-montserrat)]">
        <LocalBusinessJsonLd />
        <WebSiteJsonLd />
        <Header />
        <PersistentHome />
        <main className="flex-1">{children}</main>
        <ConditionalFooter />
      </body>
    </html>
  );
}
