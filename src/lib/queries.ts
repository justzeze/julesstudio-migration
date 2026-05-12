import { sanityClient } from "./sanity";

export async function getSiteSettings() {
  return sanityClient.fetch(`
    *[_type == "siteSettings"][0] {
      email,
      instagramUrl,
      youtubeUrl,
      tagline,
      copyright,
      heroVideoUrl,
      "heroVideoPoster": heroVideoPoster.asset->url,
      teasingVideoUrl
    }
  `);
}

export async function getStudioPage(locale: string = "fr") {
  const l = locale === "en" ? "en" : "fr";
  return sanityClient.fetch(`
    *[_type == "studioPage"][0] {
      heroTitle,
      heroSubtitle,
      "heroBackgroundImage": heroBackgroundImage.asset->url,
      "introTitle": coalesce(introTitle_${l}, introTitle),
      "introText": coalesce(introText_${l}, introText),
      "visionTitle": coalesce(visionTitle_${l}, visionTitle),
      "visionText": coalesce(visionText_${l}, visionText),
      "servicesTitle": coalesce(servicesTitle_${l}, servicesTitle),
      "servicesIntro": servicesIntro_${l},
      "teamTitle": coalesce(teamTitle_${l}, teamTitle),
      "teamText": coalesce(teamText_${l}, teamText),
      "valuesTitle": coalesce(valuesTitle_${l}, valuesTitle),
      "valuesText": coalesce(valuesText_${l}, valuesText),
      "ctaTitle": coalesce(ctaTitle_${l}, ctaTitle),
      "ctaText": coalesce(ctaText_${l}, ctaText),
      ctaEmail,
      "services": services[] {
        "name": coalesce(name_${l}, name_fr),
        "description": coalesce(description_${l}, description_fr)
      },
      "teamPhotos": teamPhotos[].asset->url,
      "seoTitle": coalesce(seoTitle_${l}, seoTitle),
      "seoDescription": coalesce(seoDescription_${l}, seoDescription)
    }
  `);
}

export async function getAllProjects(locale: string = "fr") {
  const l = locale === "en" ? "en" : "fr";
  return sanityClient.fetch(`
    *[_type == "projet"] | order(numero asc) {
      _id,
      name,
      "slug": slug.current,
      "image": imagePrincipale.asset->url,
      "videoUrl": coalesce(videoUrl, videoCloudinaryUrl),
      "category": categorie,
      "task": coalesce(tacheRealiser_${l}, tacheRealiser),
      "liveUrl": lienProjet,
      "collaboration": coalesce(collaboration_${l}, collaboration),
      numero
    }
  `);
}

export async function getProjectBySlug(slug: string, locale: string = "fr") {
  const l = locale === "en" ? "en" : "fr";
  return sanityClient.fetch(
    `
    *[_type == "projet" && slug.current == $slug][0] {
      _id,
      name,
      "slug": slug.current,
      "thumbnail": imagePrincipale.asset->url,
      "videoUrl": coalesce(videoUrl, videoCloudinaryUrl),
      "liveUrl": lienProjet,
      "category": categorie,
      "task": coalesce(tacheRealiser_${l}, tacheRealiser),
      "collaboration": coalesce(collaboration_${l}, collaboration),
      "shortDescription": coalesce(shortDescription_${l}, shortDescription),
      "services": services[] { "label": coalesce(label_${l}, label_fr) },
      "titreContexte": coalesce(titreContexte_${l}, titreContexte),
      "contexteProjet": coalesce(contexteProjet_${l}, contexteProjet),
      "imageContexte": imageContexte.asset->url,
      "imageFondContexte": imageFondContexte.asset->url,
      "titreApproche": coalesce(titreApproche_${l}, titreApproche),
      "approcheConception": coalesce(approcheConception_${l}, approcheConception),
      imageApproche,
      "imageFondApproche": imageFondApproche.asset->url,
      "imageFondHero": imageFondHero.asset->url,
      "imageShowcase1": imageShowcase1.asset->url,
      "credits": coalesce(credits_${l}, credits),
      "dateMiseAJour": coalesce(dateMiseAJour_${l}, dateMiseAJour),
      "footerDescription": coalesce(footerDescription_${l}, footerDescription),
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
