import type { Metadata } from "next";
import { locales, defaultLocale, type Locale } from "@/i18n/config";

const BASE_URL = "https://julesstudio.fr";
const DEFAULT_OG_IMAGE = "/opengraph-image";

type LocalizedText = string | Partial<Record<Locale, string>>;

type BuildPageMetadataInput = {
  locale: string;
  path: string;
  title?: LocalizedText;
  description?: LocalizedText;
  ogTitle?: LocalizedText;
  ogDescription?: LocalizedText;
  ogImage?: string;
};

function pick(text: LocalizedText | undefined, locale: Locale): string | undefined {
  if (text === undefined) return undefined;
  if (typeof text === "string") return text;
  return text[locale] ?? text[defaultLocale];
}

export function buildPageMetadata({
  locale,
  path,
  title,
  description,
  ogTitle,
  ogDescription,
  ogImage,
}: BuildPageMetadataInput): Metadata {
  const validLocale: Locale = (locales as readonly string[]).includes(locale)
    ? (locale as Locale)
    : defaultLocale;

  const normalizedPath = path === "/" ? "" : path;
  const canonical = `${BASE_URL}/${validLocale}${normalizedPath}`;

  const languages: Record<string, string> = {};
  for (const l of locales) {
    languages[l] = `${BASE_URL}/${l}${normalizedPath}`;
  }
  languages["x-default"] = `${BASE_URL}/${defaultLocale}${normalizedPath}`;

  const resolvedTitle = pick(title, validLocale);
  const resolvedDescription = pick(description, validLocale);
  const resolvedOgTitle = pick(ogTitle, validLocale) ?? resolvedTitle;
  const resolvedOgDescription =
    pick(ogDescription, validLocale) ?? resolvedDescription;

  return {
    // absolute: page titles already carry the brand — avoids the layout
    // template appending "| Jules Studio…" a second time
    ...(resolvedTitle ? { title: { absolute: resolvedTitle } } : {}),
    ...(resolvedDescription ? { description: resolvedDescription } : {}),
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      type: "website",
      siteName: "Jules Studio",
      url: canonical,
      locale: validLocale === "fr" ? "fr_FR" : "en_US",
      ...(resolvedOgTitle ? { title: resolvedOgTitle } : {}),
      ...(resolvedOgDescription ? { description: resolvedOgDescription } : {}),
      // page-level openGraph fully replaces the layout's, so images must be
      // set here or og:image disappears
      images: [
        {
          url: ogImage ?? DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: "Jules Studio — Web Design & Webflow Paris",
        },
      ],
    },
  };
}
