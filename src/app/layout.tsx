import type { Metadata } from "next";
import { Montserrat, Merriweather } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { ConditionalFooter } from "@/components/layout/ConditionalFooter";
import { PersistentHome } from "@/components/layout/PersistentHome";

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
    default: "Jules Studio — Studio Web Design & Agence Webflow à Paris",
    template: "%s | Jules Studio",
  },
  description:
    "Jules Studio, studio créatif à Paris spécialisé en web design et développement Webflow. Création de sites internet sur mesure, identité visuelle et stratégie digitale.",
  metadataBase: new URL("https://julesstudio.fr"),
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
        <Header />
        <PersistentHome />
        <main className="flex-1">{children}</main>
        <ConditionalFooter />
      </body>
    </html>
  );
}
