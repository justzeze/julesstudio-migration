import type { MetadataRoute } from "next";
import { getAllProjectSlugs } from "@/lib/queries";

const baseUrl = "https://julesstudio.fr";
const locales = ["fr", "en"] as const;

function localizedEntry(
  path: string,
  opts: { changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number }
): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: `${baseUrl}/${locale}${path}`,
    lastModified: new Date(),
    changeFrequency: opts.changeFrequency,
    priority: opts.priority,
    alternates: {
      languages: Object.fromEntries(
        locales.map((l) => [l, `${baseUrl}/${l}${path}`])
      ),
    },
  }));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projectSlugs = await getAllProjectSlugs();

  const staticPages = [
    ...localizedEntry("", { changeFrequency: "weekly", priority: 1 }),
    ...localizedEntry("/studio", { changeFrequency: "monthly", priority: 0.9 }),
    ...localizedEntry("/projets", { changeFrequency: "weekly", priority: 0.9 }),
    ...localizedEntry("/contact", { changeFrequency: "monthly", priority: 0.8 }),
    ...localizedEntry("/tous-les-projets", { changeFrequency: "weekly", priority: 0.7 }),
  ];

  const projectPages = projectSlugs.flatMap((p: { slug: string }) =>
    localizedEntry(`/gallerie-projets/${p.slug}`, {
      changeFrequency: "monthly",
      priority: 0.7,
    })
  );

  return [...staticPages, ...projectPages];
}
