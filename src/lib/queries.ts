import { sanityClient } from "./sanity";

export async function getStudioPage() {
  return sanityClient.fetch(`
    *[_type == "studioPage"][0] {
      heroTitle,
      heroSubtitle,
      "heroBackgroundImage": heroBackgroundImage.asset->url,
      introTitle,
      introText,
      "teamPhotos": teamPhotos[].asset->url,
      visionTitle,
      visionText,
      servicesTitle,
      services[] { name, description },
      teamTitle,
      teamText,
      valuesTitle,
      valuesText,
      ctaTitle,
      ctaText,
      ctaEmail,
      seoTitle,
      seoDescription
    }
  `);
}

export async function getAllProjects() {
  return sanityClient.fetch(`
    *[_type == "projet"] | order(numero asc) {
      _id,
      name,
      slug,
      "imagePrincipale": imagePrincipale.asset->url,
      videoCloudinaryUrl,
      categorie,
      tacheRealiser,
      collaboration,
      numero
    }
  `);
}

export async function getProjectBySlug(slug: string) {
  return sanityClient.fetch(
    `
    *[_type == "projet" && slug.current == $slug][0] {
      _id,
      name,
      slug,
      "imagePrincipale": imagePrincipale.asset->url,
      videoCloudinaryUrl,
      lienProjet,
      categorie,
      typeDeProjets,
      tacheRealiser,
      collaboration,
      numero,
      titreContexte,
      contexteProjet,
      approcheConception,
      ceQueNousAvonsFait,
      dateMiseAJour,
      "logoClient": logoClient.asset->url,
      "imageShowcase1": imageShowcase1.asset->url,
      "imageShowcase2": imageShowcase2.asset->url,
      footerDescription
    }
  `,
    { slug }
  );
}
