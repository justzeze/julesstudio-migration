import { defineField, defineType } from "sanity";

export default defineType({
  name: "projet",
  title: "Projet",
  type: "document",
  groups: [
    { name: "fr", title: "Français" },
    { name: "en", title: "English" },
    { name: "media", title: "Médias" },
  ],
  fields: [
    defineField({
      name: "name",
      title: "Nom",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "numero",
      title: "Numéro du projet",
      type: "number",
    }),
    defineField({
      name: "imagePrincipale",
      title: "Image principale",
      type: "image",
      options: { hotspot: true },
      group: "media",
    }),
    defineField({
      name: "videoUrl",
      title: "Video URL (Bunny/embed)",
      type: "url",
      description: "URL de la vidéo du projet (Bunny stream player URL)",
    }),
    // Keep legacy field hidden for data migration
    defineField({
      name: "videoCloudinaryUrl",
      title: "[Legacy] Video Cloudinary URL",
      type: "url",
      hidden: true,
    }),
    defineField({
      name: "lienProjet",
      title: "Lien vers le projet",
      type: "url",
    }),
    defineField({
      name: "typeDeProjets",
      title: "Type de projet",
      type: "string",
      options: {
        list: [
          { title: "Case Study", value: "case-study" },
          { title: "Reel", value: "reel" },
        ],
      },
    }),
    defineField({
      name: "categorie",
      title: "Catégorie",
      type: "string",
      options: {
        list: [
          { title: "Site Vitrine", value: "Site Vitrine" },
          { title: "E-commerce", value: "E-commerce" },
          { title: "Éditorial", value: "Éditorial" },
          { title: "Identité Visuelle", value: "Identité Visuelle" },
          { title: "Case Study", value: "Case Study" },
          { title: "Reel", value: "Reel" },
          { title: "Portfolio", value: "Portfolio" },
          { title: "Social Media", value: "Social Media" },
        ],
      },
    }),

    // FR localized text
    defineField({ name: "tacheRealiser_fr", title: "Tâche réalisée (FR)", type: "string", group: "fr" }),
    defineField({ name: "shortDescription_fr", title: "Description courte (FR)", type: "string", group: "fr" }),
    defineField({ name: "collaboration_fr", title: "Collaboration (FR)", type: "string", group: "fr" }),
    defineField({ name: "titreContexte_fr", title: "Titre contexte (FR)", type: "string", group: "fr" }),
    defineField({ name: "contexteProjet_fr", title: "Contexte du projet (FR)", type: "text", rows: 4, group: "fr" }),
    defineField({ name: "titreApproche_fr", title: "Titre approche (FR)", type: "string", group: "fr" }),
    defineField({ name: "approcheConception_fr", title: "Approche de conception (FR)", type: "text", rows: 4, group: "fr" }),
    defineField({ name: "credits_fr", title: "Crédits (FR)", type: "string", group: "fr" }),
    defineField({ name: "dateMiseAJour_fr", title: "Date de mise à jour (FR)", type: "string", group: "fr" }),
    defineField({ name: "footerDescription_fr", title: "Footer description (FR)", type: "string", group: "fr" }),

    // EN localized text
    defineField({ name: "tacheRealiser_en", title: "Task performed (EN)", type: "string", group: "en" }),
    defineField({ name: "shortDescription_en", title: "Short description (EN)", type: "string", group: "en" }),
    defineField({ name: "collaboration_en", title: "Collaboration (EN)", type: "string", group: "en" }),
    defineField({ name: "titreContexte_en", title: "Context title (EN)", type: "string", group: "en" }),
    defineField({ name: "contexteProjet_en", title: "Project context (EN)", type: "text", rows: 4, group: "en" }),
    defineField({ name: "titreApproche_en", title: "Approach title (EN)", type: "string", group: "en" }),
    defineField({ name: "approcheConception_en", title: "Design approach (EN)", type: "text", rows: 4, group: "en" }),
    defineField({ name: "credits_en", title: "Credits (EN)", type: "string", group: "en" }),
    defineField({ name: "dateMiseAJour_en", title: "Last updated (EN)", type: "string", group: "en" }),
    defineField({ name: "footerDescription_en", title: "Footer description (EN)", type: "string", group: "en" }),

    // Shared services array
    defineField({
      name: "services",
      title: "Services réalisés",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "label_fr", title: "Label (FR)", type: "string" }),
            defineField({ name: "label_en", title: "Label (EN)", type: "string" }),
          ],
          preview: { select: { title: "label_fr" } },
        },
      ],
    }),

    // Media
    defineField({ name: "imageContexte", title: "Image contexte", type: "image", options: { hotspot: true }, group: "media" }),
    defineField({ name: "imageFondContexte", title: "Image fond contexte", type: "image", options: { hotspot: true }, group: "media" }),
    defineField({ name: "imageApproche", title: "Image/Vidéo approche (URL)", type: "url", group: "media" }),
    defineField({ name: "imageFondApproche", title: "Image fond approche", type: "image", options: { hotspot: true }, group: "media" }),
    defineField({ name: "imageFondHero", title: "Image fond hero", type: "image", options: { hotspot: true }, group: "media" }),
    defineField({ name: "logoClient", title: "Logo client", type: "image", group: "media" }),
    defineField({ name: "imageShowcase1", title: "Image showcase 1", type: "image", options: { hotspot: true }, group: "media" }),
    defineField({ name: "imageShowcase2", title: "Image showcase 2", type: "image", options: { hotspot: true }, group: "media" }),

    // Legacy fields (hidden, kept for migration)
    defineField({ name: "tacheRealiser", title: "[Legacy] Tâche réalisée", type: "string", hidden: true }),
    defineField({ name: "shortDescription", title: "[Legacy] Description courte", type: "string", hidden: true }),
    defineField({ name: "collaboration", title: "[Legacy] Collaboration", type: "string", hidden: true }),
    defineField({ name: "titreContexte", title: "[Legacy] Titre contexte", type: "string", hidden: true }),
    defineField({ name: "contexteProjet", title: "[Legacy] Contexte du projet", type: "text", hidden: true }),
    defineField({ name: "titreApproche", title: "[Legacy] Titre approche", type: "string", hidden: true }),
    defineField({ name: "approcheConception", title: "[Legacy] Approche de conception", type: "text", hidden: true }),
    defineField({ name: "credits", title: "[Legacy] Crédits", type: "string", hidden: true }),
    defineField({ name: "dateMiseAJour", title: "[Legacy] Date de mise à jour", type: "string", hidden: true }),
    defineField({ name: "footerDescription", title: "[Legacy] Footer description", type: "string", hidden: true }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "categorie",
      media: "imagePrincipale",
    },
  },
});
