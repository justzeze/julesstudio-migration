import { defineField, defineType } from "sanity";

export default defineType({
  name: "projet",
  title: "Projet",
  type: "document",
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
    }),
    defineField({
      name: "videoCloudinaryUrl",
      title: "Video Cloudinary URL",
      type: "url",
      description: "URL directe du fichier .mp4 hébergé sur Cloudinary",
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
    defineField({
      name: "tacheRealiser",
      title: "Tâche réalisée",
      type: "string",
    }),
    defineField({
      name: "collaboration",
      title: "Collaboration",
      type: "string",
      description: "Ex: Julesstudio X Justzeze . 2025",
    }),
    defineField({
      name: "titreContexte",
      title: "Titre contexte",
      type: "string",
    }),
    defineField({
      name: "contexteProjet",
      title: "Contexte du projet",
      type: "blockContent",
    }),
    defineField({
      name: "approcheConception",
      title: "Approche de conception",
      type: "blockContent",
    }),
    defineField({
      name: "ceQueNousAvonsFait",
      title: "Ce que nous avons fait",
      type: "blockContent",
    }),
    defineField({
      name: "dateMiseAJour",
      title: "Date de mise à jour",
      type: "string",
      description: "Ex: Mise à jour le 14 octobre 2025",
    }),
    defineField({
      name: "logoClient",
      title: "Logo client",
      type: "image",
    }),
    defineField({
      name: "imageShowcase1",
      title: "Image showcase 1",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "imageShowcase2",
      title: "Image showcase 2",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "footerDescription",
      title: "Footer description",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "categorie",
      media: "imagePrincipale",
    },
  },
});
