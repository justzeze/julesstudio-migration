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
      "slug": slug.current,
      "image": imagePrincipale.asset->url,
      "videoUrl": videoCloudinaryUrl,
      "category": categorie,
      "task": tacheRealiser,
      "liveUrl": lienProjet,
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
      "slug": slug.current,
      "thumbnail": imagePrincipale.asset->url,
      "videoUrl": videoCloudinaryUrl,
      "liveUrl": lienProjet,
      "category": categorie,
      "task": tacheRealiser,
      collaboration,
      shortDescription,
      services,
      titreContexte,
      contexteProjet,
      "imageContexte": imageContexte.asset->url,
      "imageFondContexte": imageFondContexte.asset->url,
      titreApproche,
      approcheConception,
      imageApproche,
      "imageFondApproche": imageFondApproche.asset->url,
      "imageFondHero": imageFondHero.asset->url,
      "imageShowcase1": imageShowcase1.asset->url,
      credits,
      dateMiseAJour,
      footerDescription,
      numero
    }
  `,
    { slug }
  );
}

export async function getAllProjectSlugs() {
  return sanityClient.fetch(`
    *[_type == "projet"] { "slug": slug.current }
  `);
}
