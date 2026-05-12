import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Paramètres du site",
  type: "document",
  fields: [
    defineField({
      name: "email",
      title: "Email de contact",
      type: "string",
      initialValue: "hello@julesstudio.fr",
    }),
    defineField({
      name: "instagramUrl",
      title: "Instagram URL",
      type: "url",
    }),
    defineField({
      name: "youtubeUrl",
      title: "YouTube URL",
      type: "url",
    }),
    defineField({
      name: "tagline",
      title: "Tagline (marquee)",
      type: "string",
      initialValue: "#CREATEAMAZINGEVERYWHEREANYTIME",
    }),
    defineField({
      name: "copyright",
      title: "Copyright text",
      type: "string",
      initialValue: "2026 JULESSTUDIO",
    }),
    defineField({
      name: "heroVideoUrl",
      title: "URL vidéo hero (background)",
      type: "url",
      description: "URL de la vidéo de fond (S3/Bunny)",
    }),
    defineField({
      name: "heroVideoPoster",
      title: "Poster vidéo hero",
      type: "image",
      description: "Image poster affichée avant le chargement de la vidéo",
    }),
    defineField({
      name: "teasingVideoUrl",
      title: "URL vidéo teasing (preview card)",
      type: "url",
      description: "URL embed Bunny pour la preview card",
    }),
  ],
  preview: {
    prepare() {
      return { title: "Paramètres du site" };
    },
  },
});
