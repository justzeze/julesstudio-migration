/**
 * Migration Webflow → Sanity
 *
 * Ce script prend les données extraites de l'API Webflow
 * et les pousse dans Sanity CMS.
 *
 * Usage: npx tsx scripts/migrate-webflow-to-sanity.ts
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

// ---- Webflow data (extracted from API) ----

const webflowProjects = [
  {
    id: "6983a9ed74d9cd87f499c2ce",
    name: "justzeze",
    slug: "justzeze",
    numero: 1,
    imagePrincipale:
      "https://cdn.prod.website-files.com/6983a7c2decf98d1d77ad954/69ab6985047d28d4eecfa2d6_Capture%20d%E2%80%99e%CC%81cran%202025-09-27%20a%CC%80%203.06.01%E2%80%AFPM.png",
    videoCloudinaryUrl:
      "https://res.cloudinary.com/daehyxast/video/upload/f_auto,q_auto/v1759347982/video_preview_2_muirbu.mp4",
    lienProjet: "https://justzeze.com",
    typeDeProjets: "reel",
    categorie: "Portfolio",
    tacheRealiser: "Desgn, Integration webflow, design systeme",
    collaboration: "",
    dateMiseAJour: "Mise à jour le 14 octobre 2025",
    footerDescription: "Justzeze par Julesstudio X Justzeze",
    logoClient:
      "https://cdn.prod.website-files.com/6983a7c2decf98d1d77ad954/69ab6985047d28d4eecfa2d6_Capture%20d%E2%80%99e%CC%81cran%202025-09-27%20a%CC%80%203.06.01%E2%80%AFPM.png",
  },
];

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

  const ext = imageUrl.includes(".png") ? ".png" : ".jpg";
  const tmpPath = path.join(tmpDir, `${filename}${ext}`);

  console.log(`  ↓ Downloading: ${filename}...`);
  await downloadFile(imageUrl, tmpPath);

  console.log(`  ↑ Uploading to Sanity: ${filename}...`);
  const asset = await sanity.assets.upload(
    "image",
    fs.createReadStream(tmpPath),
    { filename: `${filename}${ext}` }
  );

  // Cleanup
  fs.unlinkSync(tmpPath);

  return {
    _type: "image",
    asset: { _type: "reference", _ref: asset._id },
  };
}

// ---- Main migration ----

async function migrate() {
  console.log("=== Migration Webflow → Sanity ===\n");

  for (const project of webflowProjects) {
    console.log(`\n📦 Migrating: ${project.name}`);

    // Upload images
    let imagePrincipale = undefined;
    let logoClient = undefined;

    if (project.imagePrincipale) {
      imagePrincipale = await uploadImageToSanity(
        project.imagePrincipale,
        `${project.slug}-image-principale`
      );
    }

    if (project.logoClient) {
      logoClient = await uploadImageToSanity(
        project.logoClient,
        `${project.slug}-logo-client`
      );
    }

    // Create Sanity document
    const doc = {
      _type: "projet",
      _id: `webflow-${project.id}`,
      name: project.name,
      slug: { _type: "slug", current: project.slug },
      numero: project.numero,
      ...(imagePrincipale && { imagePrincipale }),
      ...(project.videoCloudinaryUrl && {
        videoCloudinaryUrl: project.videoCloudinaryUrl,
      }),
      ...(project.lienProjet && { lienProjet: project.lienProjet }),
      ...(project.typeDeProjets && { typeDeProjets: project.typeDeProjets }),
      ...(project.categorie && { categorie: project.categorie }),
      ...(project.tacheRealiser && { tacheRealiser: project.tacheRealiser }),
      ...(project.collaboration && { collaboration: project.collaboration }),
      ...(project.dateMiseAJour && { dateMiseAJour: project.dateMiseAJour }),
      ...(logoClient && { logoClient }),
      ...(project.footerDescription && {
        footerDescription: project.footerDescription,
      }),
    };

    const result = await sanity.createOrReplace(doc);
    console.log(`  ✓ Created: ${result._id}`);
  }

  // Cleanup tmp dir
  const tmpDir = path.join(process.cwd(), "tmp");
  if (fs.existsSync(tmpDir)) fs.rmdirSync(tmpDir);

  console.log("\n=== Migration terminée ! ===");
}

migrate().catch((err) => {
  console.error("Migration error:", err);
  process.exit(1);
});
