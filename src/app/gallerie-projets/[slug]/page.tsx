import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

// TODO: Replace with Sanity fetch when connected
// import { getProjectBySlug } from "@/lib/queries";

// Temporary static data
const project = {
  name: "Justzeze",
  slug: "justzeze",
  imagePrincipale:
    "https://cdn.prod.website-files.com/6983a7c2decf98d1d77ad954/69ab6985047d28d4eecfa2d6_Capture%20d%E2%80%99e%CC%81cran%202025-09-27%20a%CC%80%203.06.01%E2%80%AFPM.png",
  lienProjet: "https://justzeze.com",
  categorie: "Portfolio",
  tacheRealiser: "Design, Intégration Webflow, Design Système",
  collaboration: "Julesstudio X Justzeze . 2025",
  dateMiseAJour: "Mise à jour le 14 octobre 2025",
  footerDescription: "Justzeze par Julesstudio X Justzeze",
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `${project.name} — Projet Web Design & Webflow`,
    description: `Découvrez le projet ${project.name} réalisé par Jules Studio à Paris.`,
  };
}

export default function ProjetDetailPage() {
  return (
    <div className="pt-28 pb-20">
      {/* Hero image */}
      <section className="px-6 md:px-10 mb-16">
        <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-[color:var(--color-beige)]">
          <Image
            src={project.imagePrincipale}
            alt={project.name}
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Project info */}
      <section className="px-6 md:px-10 max-w-4xl">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left — Meta */}
          <div className="md:w-1/3 space-y-6">
            <div>
              <span className="text-[10px] font-medium tracking-widest text-[color:var(--color-muted)] uppercase">
                Projet
              </span>
              <h1 className="font-[family-name:var(--font-merriweather)] text-3xl font-bold mt-1">
                {project.name}
              </h1>
            </div>

            <div>
              <span className="text-[10px] font-medium tracking-widest text-[color:var(--color-muted)] uppercase">
                Catégorie
              </span>
              <p className="text-sm mt-1">{project.categorie}</p>
            </div>

            <div>
              <span className="text-[10px] font-medium tracking-widest text-[color:var(--color-muted)] uppercase">
                Tâches réalisées
              </span>
              <p className="text-sm mt-1">{project.tacheRealiser}</p>
            </div>

            <div>
              <span className="text-[10px] font-medium tracking-widest text-[color:var(--color-muted)] uppercase">
                Collaboration
              </span>
              <p className="text-sm mt-1">{project.collaboration}</p>
            </div>

            {project.lienProjet && (
              <a
                href={project.lienProjet}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 rounded-full bg-[color:var(--color-foreground)] text-white text-xs font-medium tracking-widest hover:opacity-90 transition-opacity"
              >
                Voir le site →
              </a>
            )}
          </div>

          {/* Right — Content (will be rich text from Sanity) */}
          <div className="md:w-2/3 space-y-10">
            <div>
              <h2 className="font-[family-name:var(--font-merriweather)] text-lg font-bold mb-3">
                Contexte du projet
              </h2>
              <p className="text-sm leading-relaxed text-[color:var(--color-muted)]">
                Contenu à venir depuis Sanity CMS...
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-merriweather)] text-lg font-bold mb-3">
                Approche de conception
              </h2>
              <p className="text-sm leading-relaxed text-[color:var(--color-muted)]">
                Contenu à venir depuis Sanity CMS...
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-merriweather)] text-lg font-bold mb-3">
                Ce que nous avons fait
              </h2>
              <p className="text-sm leading-relaxed text-[color:var(--color-muted)]">
                Contenu à venir depuis Sanity CMS...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer info */}
      <section className="px-6 md:px-10 mt-16 pt-8 border-t border-[color:var(--color-border)]">
        <div className="flex items-center justify-between text-xs text-[color:var(--color-muted)]">
          <span>{project.footerDescription}</span>
          <span>{project.dateMiseAJour}</span>
        </div>
      </section>
    </div>
  );
}
