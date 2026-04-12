import type { Metadata } from "next";
import Image from "next/image";
import { SwipeLink } from "@/components/ui/SwipeLink";
import { BreadcrumbJsonLd, ProjectJsonLd } from "@/components/seo/JsonLd";
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/queries";
import { notFound } from "next/navigation";

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getAllProjectSlugs();
  return slugs.map((s: { slug: string }) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return {};

  const title = `${project.name} — Projet Web Design Paris`;
  const description =
    project.shortDescription ||
    `Découvrez le projet ${project.name} réalisé par Jules Studio : direction artistique, web design et développement Webflow à Paris.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://julesstudio.fr/gallerie-projets/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://julesstudio.fr/gallerie-projets/${slug}`,
      images: project.thumbnail
        ? [{ url: project.thumbnail, width: 1200, height: 630, alt: project.name }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: project.thumbnail ? [project.thumbnail] : undefined,
    },
  };
}

export default async function ProjetDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) return notFound();

  return (
    <div className="page-enter w-full bg-white">
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "https://julesstudio.fr" },
          { name: "Projets", url: "https://julesstudio.fr/projets" },
          { name: project.name, url: `https://julesstudio.fr/gallerie-projets/${slug}` },
        ]}
      />
      <ProjectJsonLd
        name={project.name}
        slug={slug}
        description={project.shortDescription}
        image={project.thumbnail}
        datePublished={project.dateMiseAJour}
      />
      {/* ===== SECTION 1: HERO ===== */}
      <section className="px-5 md:px-12 pt-24 pb-12 md:pt-24 md:pb-16">
        {/* Small thumbnail */}
        {project.thumbnail && (
          <div
            className="shrink-0 overflow-clip mb-6"
            style={{ borderRadius: "5px", width: "80px", height: "80px" }}
          >
            <Image
              src={project.thumbnail}
              alt={project.name}
              width={80}
              height={80}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        )}

        {/* Title */}
        <h1
          className="font-[family-name:var(--font-merriweather)] font-black uppercase leading-[0.95]"
          style={{ fontSize: "clamp(3rem, 10vw, 8rem)" }}
        >
          {project.name}
        </h1>

        {/* Subtitle line */}
        <p className="mt-4 text-sm text-[color:var(--color-muted)]">
          {project.collaboration}
          {project.liveUrl && (
            <>
              {" · "}
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-[color:var(--color-foreground)] hover:text-[color:var(--color-muted)] transition-colors duration-[1.2s]"
              >
                voir en live
              </a>
            </>
          )}
        </p>

        {/* Short description */}
        {project.shortDescription && (
          <p className="mt-3 text-base text-[color:var(--color-foreground)]">
            {project.shortDescription}
          </p>
        )}
      </section>

      {/* ===== SECTION 2: Full-width background + overlay screenshot ===== */}
      {project.imageFondHero && (
        <section className="px-3 md:px-4">
          <div
            className="relative w-full overflow-hidden max-md:!h-[80svh]"
            style={{ height: "150svh", borderRadius: "0.5rem" }}
          >
            {/* Background image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.imageFondHero}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay screenshot */}
            {project.thumbnail && (
              <div
                className="absolute z-10 flex flex-col items-center"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div
                  className="overflow-clip"
                  style={{ borderRadius: "5px", width: "1030px", maxWidth: "90vw" }}
                >
                  <Image
                    src={project.imageShowcase1 || project.thumbnail}
                    alt={project.name}
                    width={1030}
                    height={580}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ===== SECTION 3: Context ===== */}
      {(project.titreContexte || project.contexteProjet) && (
        <section className="px-5 md:px-12 py-20 md:py-36">
          <div style={{ maxWidth: "30svw" }} className="max-md:!max-w-full">
            {project.titreContexte && (
              <h2
                className="font-[family-name:var(--font-merriweather)] font-bold"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
              >
                {project.titreContexte}
              </h2>
            )}
            {project.contexteProjet && (
              <p className="mt-4 text-sm leading-relaxed text-[color:var(--color-muted)]">
                {project.contexteProjet}
              </p>
            )}
          </div>
        </section>
      )}

      {/* Context full-width background + overlay screenshot */}
      {project.imageFondContexte && (
        <section className="px-3 md:px-4">
          <div
            className="relative w-full overflow-hidden max-md:!h-[80svh]"
            style={{ height: "150svh", borderRadius: "0.5rem" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.imageFondContexte}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />

            {project.imageContexte && (
              <div
                className="absolute z-10 flex flex-col items-center"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div
                  className="overflow-clip"
                  style={{ borderRadius: "5px", width: "1030px", maxWidth: "90vw" }}
                >
                  <Image
                    src={project.imageContexte}
                    alt={project.titreContexte || ""}
                    width={1030}
                    height={580}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ===== SECTION 4: Approche de conception ===== */}
      {(project.titreApproche || project.approcheConception) && (
        <section className="px-5 md:px-12 py-20 md:py-36">
          <div style={{ maxWidth: "30svw" }} className="max-md:!max-w-full">
            {project.titreApproche && (
              <h2
                className="font-[family-name:var(--font-merriweather)] font-bold"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
              >
                {project.titreApproche}
              </h2>
            )}
            {project.approcheConception && (
              <p className="mt-4 text-sm leading-relaxed text-[color:var(--color-muted)]">
                {project.approcheConception}
              </p>
            )}
          </div>
        </section>
      )}

      {/* Approche full-width background + overlay video/image */}
      {project.imageFondApproche && (
        <section className="px-3 md:px-4">
          <div
            className="relative w-full overflow-hidden max-md:!h-[80svh]"
            style={{ height: "150svh", borderRadius: "0.5rem" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.imageFondApproche}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />

            {project.imageApproche && (
              <div
                className="absolute z-10 flex flex-col items-center"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div
                  className="overflow-clip"
                  style={{ borderRadius: "5px", width: "1030px", maxWidth: "90vw" }}
                >
                  {project.imageApproche.includes(".mp4") ||
                  project.imageApproche.includes(".mov") ? (
                    <video
                      src={project.imageApproche}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-auto object-cover"
                    />
                  ) : (
                    <Image
                      src={project.imageApproche}
                      alt={project.titreApproche || ""}
                      width={1030}
                      height={580}
                      className="w-full h-auto object-cover"
                    />
                  )}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ===== SECTION 5: Ce que nous avons fait ===== */}
      {project.services && project.services.length > 0 && (
        <section className="px-5 md:px-12 py-20 md:py-36">
          <div style={{ maxWidth: "30svw" }} className="max-md:!max-w-full">
            <h2
              className="font-[family-name:var(--font-merriweather)] font-bold mb-6"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
            >
              Ce que nous avons fait
            </h2>
            <ul className="space-y-2">
              {project.services.map((service: string) => (
                <li
                  key={service}
                  className="text-sm text-[color:var(--color-muted)]"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Credits + dots */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-16">
            <span className="text-xs uppercase tracking-widest text-[color:var(--color-muted)]">
              {project.credits || project.footerDescription}
            </span>
            <div className="flex items-center gap-2">
              <div style={{ width: "15px", height: "15px", borderRadius: "100%", backgroundColor: "#c4c4c4" }} />
              <div style={{ width: "15px", height: "15px", borderRadius: "100%", backgroundColor: "var(--color-accent)" }} />
            </div>
            {project.dateMiseAJour && (
              <span className="text-xs uppercase tracking-widest text-[color:var(--color-muted)]">
                {project.dateMiseAJour}
              </span>
            )}
          </div>
        </section>
      )}

      {/* ===== SECTION 6: Footer ===== */}
      <section className="px-5 md:px-12 py-12">
        {/* Plus de projets */}
        <div className="mb-16 text-center">
          <SwipeLink
            href="/projets"
            direction="back"
            className="text-sm font-medium no-underline text-[color:var(--color-foreground)]"
            style={{
              backgroundImage: "linear-gradient(#f3f2f0, #919191 75%, #c4c4c4)",
              border: "1px solid #c4c4c4",
              borderRadius: "5px",
              padding: "0.5rem 1rem",
            }}
          >
            Plus de projets
          </SwipeLink>
        </div>

        {/* CTA Contact Card */}
        <div
          className="md:mx-auto md:max-w-xl"
          style={{
            backgroundColor: "#f3f2f0",
            borderRadius: "5px",
            padding: "1.5rem",
          }}
        >
          <h3
            className="font-[family-name:var(--font-merriweather)] font-bold mb-2"
            style={{ fontSize: "clamp(1.25rem, 2vw, 2rem)" }}
          >
            Venez nous saluer !
          </h3>
          <p className="text-sm text-[color:var(--color-foreground)]">
            Contactez-nous au{" "}
            <a
              href="mailto:hello@julesstudio.fr"
              className="underline text-[color:var(--color-foreground)] hover:text-[color:var(--color-muted)] transition-colors duration-[1.2s]"
            >
              hello@julesstudio.fr
            </a>
          </p>
        </div>

        {/* Tagline */}
        <div className="text-center mt-16">
          <span className="text-sm font-normal text-[color:var(--color-muted)]">
            #CREATAMAZINGEVERYWHEREANYTIME
          </span>
        </div>

        {/* Inline footer */}
        <div className="flex flex-col items-center gap-8 mt-16 p-2">
          <div className="h-60 flex items-center">
            <span
              className="text-4xl font-black text-[color:var(--color-accent)]"
              style={{
                fontFamily: "'Palatino Linotype', Palatino, serif",
                transform: "scale3d(1, 4.5, 1)",
              }}
            >
              JULESSTUDIO
            </span>
          </div>

          <div className="flex items-center justify-end gap-2 w-full -mt-18 px-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-[color:var(--color-muted)]"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M14.83 14.83a4 4 0 1 1 0-5.66" />
            </svg>
            <span className="text-sm font-light text-[color:var(--color-foreground)]">
              2026 JULESSTUDIO
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
