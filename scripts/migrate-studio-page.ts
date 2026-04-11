/**
 * Migration Studio Page → Sanity
 *
 * Pousse le contenu de la page Studio (extrait de Webflow) dans Sanity CMS.
 *
 * Usage: npx tsx scripts/migrate-studio-page.ts
 */

import { createClient } from "@sanity/client";
import https from "https";
import fs from "fs";
import path from "path";

const sanity = createClient({
  projectId: "088jc00v",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN!,
});

// ---- Helpers ----

function downloadFile(url: string, dest: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https
      .get(url, (response) => {
        if (response.statusCode === 301 || response.statusCode === 302) {
          downloadFile(response.headers.location!, dest)
            .then(resolve)
            .catch(reject);
          return;
        }
        response.pipe(file);
        file.on("finish", () => {
          file.close();
          resolve(dest);
        });
      })
      .on("error", (err) => {
        fs.unlink(dest, () => {});
        reject(err);
      });
  });
}

async function uploadImageToSanity(
  imageUrl: string,
  filename: string
): Promise<{ _type: "image"; asset: { _type: "reference"; _ref: string } }> {
  const tmpDir = path.join(process.cwd(), "tmp");
  if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir);

  const ext = imageUrl.toLowerCase().includes(".svg")
    ? ".svg"
    : imageUrl.toLowerCase().includes(".png")
      ? ".png"
      : ".jpg";
  const tmpPath = path.join(tmpDir, `${filename}${ext}`);

  console.log(`  ↓ Downloading: ${filename}...`);
  await downloadFile(imageUrl, tmpPath);

  console.log(`  ↑ Uploading to Sanity: ${filename}...`);
  const asset = await sanity.assets.upload(
    "image",
    fs.createReadStream(tmpPath),
    { filename: `${filename}${ext}` }
  );

  fs.unlinkSync(tmpPath);

  return {
    _type: "image",
    asset: { _type: "reference", _ref: asset._id },
  };
}

// ---- Studio page data from Webflow ----

const studioData = {
  heroTitle: "JULES STUDIO",
  heroSubtitle: "PARIS 2025",
  heroBackgroundImageUrl:
    "https://cdn.prod.website-files.com/697be174b8224c11c814a60e/6983e0086dfdf5f29a840fed_dream%20studio.svg",

  introTitle: "Le Studio",
  introText:
    "Un site beau, c'est bien. Un site qui donne envie de vous choisir, c'est mieux. Jules Studio est un studio de web design et développement Webflow basé à Paris.\n\nNous créons des sites sur mesure pour les marques, studios et entreprises qui veulent une présence en ligne plus forte, plus claire et plus crédible.",

  teamPhotoUrls: [
    "https://cdn.prod.website-files.com/697be174b8224c11c814a60e/69aafadf6aa27bd056ef149d_IMG_6090.JPG",
    "https://cdn.prod.website-files.com/697be174b8224c11c814a60e/69aafadfc7aac51576135df0_IMG_6092.JPG",
    "https://cdn.prod.website-files.com/697be174b8224c11c814a60e/69aafdfb70c59ba8d6375ec9_acdbd1ee-d47a-4fb6-8462-1f86bf740b94.JPG",
    "https://cdn.prod.website-files.com/697be174b8224c11c814a60e/69aafeb9d37262409ce52d0e_IMG_8246.JPG",
  ],

  visionTitle: "Notre Vision",
  visionText:
    "Votre site ne doit pas juste exister. Il doit convaincre. Chaque projet est pensé pour une chose :\n\nmieux positionner votre marque, renforcer votre image et transformer plus de visiteurs en prises de contact. Pas de design gratuit.\nPas de blabla.\nPas de site \u201Cjoli mais inutile\u201D.",

  servicesTitle: "Nos Services",
  services: [
    {
      name: "Direction artistique",
      description: "Donner une identité forte à votre présence digitale.",
    },
    {
      name: "Stratégie digitale",
      description: "Clarifier votre message et votre positionnement.",
    },
    {
      name: "Web Design",
      description: "Créer une interface élégante et impactante.",
    },
    {
      name: "Interaction Design",
      description: "Construire une expérience fluide et mémorable.",
    },
    {
      name: "CMS & Webflow Development",
      description: "Un site rapide, évolutif et facile à gérer.",
    },
  ],

  teamTitle: "Nos Equipes",
  teamText:
    "Jules Studio est sous la tutelle de John. Toute la technique (design et développement) est réalisée par charles. Pour des projets spécifiques, nous faisons appel à des amis créatifs qui participent selon la taille du projet.",

  valuesTitle: "valeurs",
  valuesText:
    "Pourquoi travailler avec Jules Studio ? Parce qu'on est un studio à taille humaine. Pas de commercial entre vous et le designer. Vous travaillez directement avec Charles du brief à la mise en ligne. Chaque projet est unique, jamais de template, jamais de copier-coller.",

  ctaTitle: "Contactez-nous",
  ctaText: "Parlons de votre projet, veuillez nous contacter à",
  ctaEmail: "hello@julesstudio.fr",

  seoTitle:
    "Notre Studio Créatif — Direction Artistique & Développement Webflow | Jules Studio Paris",
  seoDescription:
    "Jules Studio, studio de web design à Paris fondé par des passionnés de web. Direction artistique, développement Webflow, interaction design et stratégie digitale. On crée des sites qui marquent les esprits et génèrent des résultats.",
};

// ---- Main migration ----

async function migrate() {
  console.log("=== Migration Studio Page → Sanity ===\n");

  // Upload hero background SVG
  console.log("📷 Uploading hero background...");
  const heroBackgroundImage = await uploadImageToSanity(
    studioData.heroBackgroundImageUrl,
    "studio-hero-background"
  );

  // Upload team photos
  console.log("\n📷 Uploading team photos...");
  const teamPhotos = [];
  for (let i = 0; i < studioData.teamPhotoUrls.length; i++) {
    const photo = await uploadImageToSanity(
      studioData.teamPhotoUrls[i],
      `studio-team-photo-${i + 1}`
    );
    teamPhotos.push({ ...photo, _key: `photo-${i}` });
  }

  // Build services array
  const services = studioData.services.map((s, i) => ({
    _type: "object",
    _key: `service-${i}`,
    name: s.name,
    description: s.description,
  }));

  // Create the document
  const doc = {
    _type: "studioPage",
    _id: "studioPage",
    heroTitle: studioData.heroTitle,
    heroSubtitle: studioData.heroSubtitle,
    heroBackgroundImage,
    introTitle: studioData.introTitle,
    introText: studioData.introText,
    teamPhotos,
    visionTitle: studioData.visionTitle,
    visionText: studioData.visionText,
    servicesTitle: studioData.servicesTitle,
    services,
    teamTitle: studioData.teamTitle,
    teamText: studioData.teamText,
    valuesTitle: studioData.valuesTitle,
    valuesText: studioData.valuesText,
    ctaTitle: studioData.ctaTitle,
    ctaText: studioData.ctaText,
    ctaEmail: studioData.ctaEmail,
    seoTitle: studioData.seoTitle,
    seoDescription: studioData.seoDescription,
  };

  console.log("\n📝 Creating Studio page document...");
  const result = await sanity.createOrReplace(doc);
  console.log(`  ✓ Created: ${result._id}`);

  // Cleanup tmp dir
  const tmpDir = path.join(process.cwd(), "tmp");
  if (fs.existsSync(tmpDir)) fs.rmdirSync(tmpDir);

  console.log("\n=== Migration Studio terminée ! ===");
}

migrate().catch((err) => {
  console.error("Migration error:", err);
  process.exit(1);
});
