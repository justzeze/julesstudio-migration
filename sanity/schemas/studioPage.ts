import { defineField, defineType } from "sanity";

export default defineType({
  name: "studioPage",
  title: "Page Studio",
  type: "document",
  groups: [
    { name: "fr", title: "Français" },
    { name: "en", title: "English" },
    { name: "media", title: "Médias" },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    // Hero
    defineField({
      name: "heroTitle",
      title: "Titre hero",
      type: "string",
      initialValue: "JULES STUDIO",
    }),
    defineField({
      name: "heroSubtitle",
      title: "Sous-titre hero",
      type: "string",
      initialValue: "PARIS 2025",
    }),
    defineField({
      name: "heroBackgroundImage",
      title: "Image de fond hero",
      type: "image",
      group: "media",
    }),

    // FR fields
    defineField({
      name: "introTitle_fr",
      title: "Titre intro (FR)",
      type: "string",
      group: "fr",
      initialValue: "Le Studio",
    }),
    defineField({
      name: "introText_fr",
      title: "Texte intro (FR)",
      type: "text",
      rows: 5,
      group: "fr",
    }),
    defineField({
      name: "visionTitle_fr",
      title: "Titre vision (FR)",
      type: "string",
      group: "fr",
      initialValue: "Notre Vision",
    }),
    defineField({
      name: "visionText_fr",
      title: "Texte vision (FR)",
      type: "text",
      rows: 5,
      group: "fr",
    }),
    defineField({
      name: "servicesTitle_fr",
      title: "Titre services (FR)",
      type: "string",
      group: "fr",
      initialValue: "Nos Services",
    }),
    defineField({
      name: "servicesIntro_fr",
      title: "Intro services (FR)",
      type: "string",
      group: "fr",
      initialValue: "Nous concevons des expériences digitales complètes :",
    }),
    defineField({
      name: "teamTitle_fr",
      title: "Titre équipes (FR)",
      type: "string",
      group: "fr",
      initialValue: "Nos Equipes",
    }),
    defineField({
      name: "teamText_fr",
      title: "Texte équipes (FR)",
      type: "text",
      rows: 4,
      group: "fr",
    }),
    defineField({
      name: "valuesTitle_fr",
      title: "Titre valeurs (FR)",
      type: "string",
      group: "fr",
      initialValue: "Valeurs",
    }),
    defineField({
      name: "valuesText_fr",
      title: "Texte valeurs (FR)",
      type: "text",
      rows: 4,
      group: "fr",
    }),
    defineField({
      name: "ctaTitle_fr",
      title: "Titre CTA (FR)",
      type: "string",
      group: "fr",
      initialValue: "Contactez-nous",
    }),
    defineField({
      name: "ctaText_fr",
      title: "Texte CTA (FR)",
      type: "string",
      group: "fr",
    }),

    // EN fields
    defineField({
      name: "introTitle_en",
      title: "Intro title (EN)",
      type: "string",
      group: "en",
      initialValue: "The Studio",
    }),
    defineField({
      name: "introText_en",
      title: "Intro text (EN)",
      type: "text",
      rows: 5,
      group: "en",
    }),
    defineField({
      name: "visionTitle_en",
      title: "Vision title (EN)",
      type: "string",
      group: "en",
      initialValue: "Our Vision",
    }),
    defineField({
      name: "visionText_en",
      title: "Vision text (EN)",
      type: "text",
      rows: 5,
      group: "en",
    }),
    defineField({
      name: "servicesTitle_en",
      title: "Services title (EN)",
      type: "string",
      group: "en",
      initialValue: "Our Services",
    }),
    defineField({
      name: "servicesIntro_en",
      title: "Services intro (EN)",
      type: "string",
      group: "en",
      initialValue: "We design complete digital experiences:",
    }),
    defineField({
      name: "teamTitle_en",
      title: "Team title (EN)",
      type: "string",
      group: "en",
      initialValue: "Our Team",
    }),
    defineField({
      name: "teamText_en",
      title: "Team text (EN)",
      type: "text",
      rows: 4,
      group: "en",
    }),
    defineField({
      name: "valuesTitle_en",
      title: "Values title (EN)",
      type: "string",
      group: "en",
      initialValue: "Values",
    }),
    defineField({
      name: "valuesText_en",
      title: "Values text (EN)",
      type: "text",
      rows: 4,
      group: "en",
    }),
    defineField({
      name: "ctaTitle_en",
      title: "CTA title (EN)",
      type: "string",
      group: "en",
      initialValue: "Contact us",
    }),
    defineField({
      name: "ctaText_en",
      title: "CTA text (EN)",
      type: "string",
      group: "en",
    }),

    // Shared fields
    defineField({
      name: "ctaEmail",
      title: "Email de contact",
      type: "string",
      initialValue: "hello@julesstudio.fr",
    }),
    defineField({
      name: "services",
      title: "Services",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "name_fr", title: "Nom (FR)", type: "string" }),
            defineField({ name: "name_en", title: "Name (EN)", type: "string" }),
            defineField({ name: "description_fr", title: "Description (FR)", type: "string" }),
            defineField({ name: "description_en", title: "Description (EN)", type: "string" }),
          ],
          preview: {
            select: { title: "name_fr", subtitle: "description_fr" },
          },
        },
      ],
    }),
    defineField({
      name: "teamPhotos",
      title: "Photos d'équipe",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
      validation: (rule) => rule.max(6),
      group: "media",
    }),

    // SEO
    defineField({ name: "seoTitle_fr", title: "SEO Title (FR)", type: "string", group: "seo" }),
    defineField({ name: "seoDescription_fr", title: "SEO Description (FR)", type: "text", rows: 3, group: "seo" }),
    defineField({ name: "seoTitle_en", title: "SEO Title (EN)", type: "string", group: "seo" }),
    defineField({ name: "seoDescription_en", title: "SEO Description (EN)", type: "text", rows: 3, group: "seo" }),

    // Legacy fields (kept for backward compat during migration)
    defineField({ name: "introTitle", title: "[Legacy] Titre intro", type: "string", hidden: true }),
    defineField({ name: "introText", title: "[Legacy] Texte intro", type: "text", hidden: true }),
    defineField({ name: "visionTitle", title: "[Legacy] Titre vision", type: "string", hidden: true }),
    defineField({ name: "visionText", title: "[Legacy] Texte vision", type: "text", hidden: true }),
    defineField({ name: "servicesTitle", title: "[Legacy] Titre services", type: "string", hidden: true }),
    defineField({ name: "teamTitle", title: "[Legacy] Titre équipes", type: "string", hidden: true }),
    defineField({ name: "teamText", title: "[Legacy] Texte équipes", type: "text", hidden: true }),
    defineField({ name: "valuesTitle", title: "[Legacy] Titre valeurs", type: "string", hidden: true }),
    defineField({ name: "valuesText", title: "[Legacy] Texte valeurs", type: "text", hidden: true }),
    defineField({ name: "ctaTitle", title: "[Legacy] Titre CTA", type: "string", hidden: true }),
    defineField({ name: "ctaText", title: "[Legacy] Texte CTA", type: "string", hidden: true }),
    defineField({ name: "seoTitle", title: "[Legacy] SEO Title", type: "string", hidden: true }),
    defineField({ name: "seoDescription", title: "[Legacy] SEO Description", type: "text", hidden: true }),
  ],
  preview: {
    prepare() {
      return { title: "Page Studio" };
    },
  },
});
