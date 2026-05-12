import type { Metadata } from "next";
import { locales, defaultLocale, type Locale } from "@/i18n/config";

const BASE_URL = "https://julesstudio.fr";

type BuildPageMetadataInput = {
  locale: string;
  path: string;
  title?: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
};

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

  return {
    ...(title ? { title } : {}),
    ...(description ? { description } : {}),
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      url: canonical,
      locale: validLocale === "fr" ? "fr_FR" : "en_US",
      ...(ogTitle ? { title: ogTitle } : title ? { title } : {}),
      ...(ogDescription
        ? { description: ogDescription }
        : description
          ? { description }
          : {}),
      ...(ogImage ? { images: [{ url: ogImage }] } : {}),
    },
  };
}
