import type { Metadata } from "next";
import { Montserrat, Merriweather } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { ConditionalFooter } from "@/components/layout/ConditionalFooter";
import { PersistentHome } from "@/components/layout/PersistentHome";
import { Preloader } from "@/components/layout/Preloader";
import { LocaleProvider } from "@/i18n/locale-context";
import { locales, type Locale } from "@/i18n/config";
import { SiteSettingsProvider } from "@/lib/site-settings-context";
import { getSiteSettings } from "@/lib/queries";
import {
  LocalBusinessJsonLd,
  WebSiteJsonLd,
} from "@/components/seo/JsonLd";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "Jules Studio — Studio Web Design & Agence Webflow à Paris | Création de Sites Sur Mesure",
    template: "%s | Jules Studio — Web Design Paris",
  },
  description:
    "Jules Studio, studio de web design et développement Webflow à Paris. Création de sites internet sur mesure, landing pages haute conversion, identité visuelle et stratégie digitale.",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon.svg",
  },
  metadataBase: new URL("https://julesstudio.fr"),
  keywords: [
    "web design paris",
    "agence webflow paris",
    "studio web design",
    "création site internet paris",
    "webflow designer paris",
  ],
  authors: [{ name: "Jules Studio", url: "https://julesstudio.fr" }],
  creator: "Jules Studio",
  publisher: "Jules Studio",
  formatDetection: { email: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://julesstudio.fr",
    siteName: "Jules Studio",
    title: "Jules Studio — Studio Web Design & Agence Webflow à Paris",
    description: "Création de sites internet sur mesure avec Webflow. Design premium pour entrepreneurs et marques ambitieuses à Paris.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Jules Studio — Web Design & Webflow Paris", type: "image/png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jules Studio — Studio Web Design & Webflow à Paris",
    description: "Création de sites internet sur mesure avec Webflow.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": 0, "max-image-preview": "large", "max-snippet": -1 },
  },
  verification: { google: "eM8xLgspSyzBRgk_vTd4_vjlu3VLAL9c6DkffqzZf58" },
  category: "Web Design",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const validLocale = locales.includes(locale as Locale) ? (locale as Locale) : "fr";
  const siteSettings = await getSiteSettings();

  return (
    <html
      lang={validLocale}
      className={`${montserrat.variable} ${merriweather.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://cdn.sanity.io" />
        <link rel="dns-prefetch" href="https://iframe.mediadelivery.net" />
        <link rel="dns-prefetch" href="https://s3.amazonaws.com" />
      </head>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-montserrat)]">
        <LocaleProvider value={validLocale}>
          <SiteSettingsProvider value={siteSettings}>
            <Preloader />
            <LocalBusinessJsonLd />
            <WebSiteJsonLd />
            <Header />
            <PersistentHome />
            <main className="flex-1">{children}</main>
            <ConditionalFooter />
          </SiteSettingsProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
