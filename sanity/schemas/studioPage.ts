import { defineField, defineType } from "sanity";

export default defineType({
  name: "studioPage",
  title: "Page Studio",
  type: "document",
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
      description: "SVG ou image de fond du header",
    }),

    // Le Studio
    defineField({
      name: "introTitle",
      title: "Titre intro (Le Studio)",
      type: "string",
      initialValue: "Le Studio",
    }),
    defineField({
      name: "introText",
      title: "Texte intro",
      type: "text",
      rows: 5,
    }),

    // Photos d'équipe
    defineField({
      name: "teamPhotos",
      title: "Photos d'équipe",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
        },
      ],
      validation: (rule) => rule.max(6),
    }),

    // Notre Vision
    defineField({
      name: "visionTitle",
      title: "Titre vision",
      type: "string",
      initialValue: "Notre Vision",
    }),
    defineField({
      name: "visionText",
      title: "Texte vision",
      type: "text",
      rows: 5,
    }),

    // Nos Services
    defineField({
      name: "servicesTitle",
      title: "Titre services",
      type: "string",
      initialValue: "Nos Services",
    }),
    defineField({
      name: "services",
      title: "Services",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "name",
              title: "Nom du service",
              type: "string",
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "string",
            }),
          ],
          preview: {
            select: { title: "name", subtitle: "description" },
          },
        },
      ],
    }),

    // Nos Equipes
    defineField({
      name: "teamTitle",
      title: "Titre équipes",
      type: "string",
      initialValue: "Nos Equipes",
    }),
    defineField({
      name: "teamText",
      title: "Texte équipes",
      type: "text",
      rows: 4,
    }),

    // Valeurs
    defineField({
      name: "valuesTitle",
      title: "Titre valeurs",
      type: "string",
      initialValue: "valeurs",
    }),
    defineField({
      name: "valuesText",
      title: "Texte valeurs",
      type: "text",
      rows: 4,
    }),

    // CTA
    defineField({
      name: "ctaTitle",
      title: "Titre CTA",
      type: "string",
      initialValue: "Contactez-nous",
    }),
    defineField({
      name: "ctaText",
      title: "Texte CTA",
      type: "string",
    }),
    defineField({
      name: "ctaEmail",
      title: "Email de contact",
      type: "string",
      initialValue: "hello@julesstudio.fr",
    }),

    // SEO
    defineField({
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
    }),
    defineField({
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
      rows: 3,
    }),
  ],
  preview: {
    prepare() {
      return { title: "Page Studio" };
    },
  },
});
