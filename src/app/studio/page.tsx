import type { Metadata } from "next";
import Image from "next/image";
import { getStudioPage } from "@/lib/queries";
import { BackgroundVideoPanel } from "@/components/layout/BackgroundVideoPanel";
import { ContentPanel } from "@/components/layout/ContentPanel";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getStudioPage();
  return {
    title:
      data?.seoTitle ??
      "Studio Web Design Paris — Direction Artistique & Développement Webflow",
    description:
      data?.seoDescription ??
      "Jules Studio, studio de web design et design digital à Paris. Direction artistique, identité visuelle, développement Webflow. Découvrez notre équipe, notre vision et nos services.",
    alternates: {
      canonical: "https://julesstudio.fr/studio",
    },
    openGraph: {
      title: "Jules Studio — Studio Web Design & Design Digital à Paris",
      description:
        "Notre studio créatif à Paris : direction artistique, web design et développement Webflow pour des projets sur mesure.",
      url: "https://julesstudio.fr/studio",
    },
  };
}

export const revalidate = 60;

export default async function StudioPage() {
  const data = await getStudioPage();

  if (!data) {
    return <div className="p-10">Chargement…</div>;
  }

  return (
    <div className="flex flex-col md:flex-row">
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "https://julesstudio.fr" },
          { name: "Studio", url: "https://julesstudio.fr/studio" },
        ]}
      />
      {/* ===== LEFT CONTENT PANEL (v2-content-layer) ===== */}
      <ContentPanel>
        {/* Hero header with background SVG — studio-header-left-content-wrapper */}
        <div
          className="flex flex-none items-center justify-center w-full h-[40vh] md:mt-auto overflow-clip max-md:bg-[length:64rem]"
          style={{
            borderRadius: "5px",
            backgroundImage: `url('/images/dream-studio.svg')`,
            backgroundPosition: "50%",
            backgroundSize: "55rem",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* studio-since-wrapper */}
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="text-[1.5rem] font-bold uppercase leading-[1.4] text-[color:var(--color-accent)]">
              {data.heroTitle}
            </div>
            <div className="font-semibold uppercase text-[color:var(--color-accent)]">
              {data.heroSubtitle}
            </div>
          </div>
        </div>

        {/* Le Studio — intro section */}
        <div
          className="p-4"
          style={{
            borderRadius: "5px",
            backgroundColor: "var(--color-beige)",
          }}
        >
          <h1 className="text-2xl font-bold leading-[1.4]">
            {data.introTitle}
          </h1>
          <div className="w-full pt-4" />
          <p className="text-sm font-normal leading-relaxed text-[color:var(--color-foreground)] whitespace-pre-line">
            {data.introText}
          </p>
        </div>

        {/* Team photos — horizontal scroll */}
        <div className="p-2">
          <div
            className="flex items-center justify-between gap-2 overflow-auto"
            style={{ borderRadius: "5px" }}
          >
            {data.teamPhotos?.map((url: string, i: number) => (
              <Image
                key={i}
                src={url}
                alt={`Jules Studio team photo ${i + 1}`}
                width={400}
                height={300}
                className="w-[60%] shrink-0 object-cover"
                style={{ borderRadius: "5px" }}
              />
            ))}
          </div>
        </div>

        {/* Notre Vision */}
        <div
          className="p-4"
          style={{
            borderRadius: "5px",
            backgroundColor: "var(--color-beige)",
          }}
        >
          <h2 className="text-2xl font-bold leading-[1.4]">
            {data.visionTitle}
          </h2>
          <div className="w-full pt-4" />
          <p className="text-sm font-normal leading-relaxed text-[color:var(--color-foreground)] whitespace-pre-line">
            {data.visionText}
          </p>
        </div>

        {/* Nos Services */}
        <div
          className="p-4"
          style={{
            borderRadius: "5px",
            backgroundColor: "var(--color-beige)",
          }}
        >
          <h3 className="text-2xl font-bold leading-[1.4]">
            {data.servicesTitle}
          </h3>
          <div className="w-full pt-4" />
          <p className="text-sm font-normal leading-relaxed text-[color:var(--color-foreground)]">
            Nous concevons des expériences digitales complètes :
          </p>
          <div className="mt-4 space-y-3">
            {data.services?.map(
              (s: { name: string; description: string }, i: number) => (
                <div key={i}>
                  <p className="text-sm text-[color:var(--color-foreground)]">
                    <strong>{s.name}</strong>
                    <br />
                    {s.description}
                  </p>
                </div>
              )
            )}
          </div>
        </div>

        {/* Nos Equipes */}
        <div
          className="p-4"
          style={{
            borderRadius: "5px",
            backgroundColor: "var(--color-beige)",
          }}
        >
          <h3 className="text-2xl font-bold leading-[1.4]">
            {data.teamTitle}
          </h3>
          <div className="w-full pt-4" />
          <p className="text-sm font-normal leading-relaxed text-[color:var(--color-foreground)]">
            {data.teamText}
          </p>
        </div>

        {/* Valeurs */}
        <div
          className="p-4"
          style={{
            borderRadius: "5px",
            backgroundColor: "var(--color-beige)",
          }}
        >
          <h3 className="text-2xl font-bold leading-[1.4]">
            <strong>{data.valuesTitle}</strong>
          </h3>
          <div className="w-full pt-4" />
          <p className="text-sm font-normal leading-relaxed text-[color:var(--color-foreground)]">
            {data.valuesText}
          </p>
        </div>

        {/* Contactez-nous */}
        <div
          className="p-4"
          style={{
            borderRadius: "5px",
            backgroundColor: "var(--color-beige)",
          }}
        >
          <h3 className="text-2xl font-bold leading-[1.4]">
            {data.ctaTitle}
          </h3>
          <div className="w-full pt-4" />
          <p className="text-sm font-normal leading-relaxed text-[color:var(--color-foreground)]">
            {data.ctaText}{" "}
            <a
              href={`mailto:${data.ctaEmail}`}
              className="link-hover text-[color:var(--color-foreground)] font-medium whitespace-nowrap transition-colors duration-[1.2s]"
            >
              {data.ctaEmail}
            </a>
          </p>
        </div>

        {/* Spacers */}
        <div className="pt-4" />
        <div className="pt-12" />
        <div className="pt-12" />
        <div className="pt-12" />

        {/* Tagline */}
        <div className="flex-1 text-center">
          <div className="text-sm font-normal text-[color:var(--color-muted)]">
            #CREATAMAZINGEVERYWHEREANYTIME
          </div>
        </div>

        {/* Footer inline */}
        <div className="pt-12" />
        <div className="pt-12" />

        <div className="flex flex-col items-center gap-8 p-2">
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

        <div className="pt-12" />
        <div className="pt-12" />
      </ContentPanel>

      {/* ===== RIGHT PANEL (v2-right-panel) ===== */}
      <BackgroundVideoPanel />
    </div>
  );
}
