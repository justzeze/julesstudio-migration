"use client";

import Image from "next/image";
import Link from "next/link";

// TODO: Replace with Sanity fetch + generateStaticParams
const project = {
  name: "Justzeze",
  slug: "justzeze",
  thumbnail:
    "https://cdn.prod.website-files.com/6983a7c2decf98d1d77ad954/69ab6985047d28d4eecfa2d6_Capture%20d%E2%80%99e%CC%81cran%202025-09-27%20a%CC%80%203.06.01%E2%80%AFPM.png",
  liveUrl: "https://www.justzeze.com/",
  collaboration: "Julesstudio X Justzeze · 2025",
  shortDescription:
    "Direction artistique, Web Design et développement webflow.",
  // Section: Context
  contextTitle: "Portfolio pour webdesigner",
  contextDescription:
    "Justzeze, projet expérimental signé Jules Studio, est un site web conçu pour un webdesigner. Chaque choix typographique, chaque animation et chaque interaction a été pensé pour servir un objectif : montrer le travail, pas juste le décorer. Un design épuré où chaque pixel a sa raison d'être.",
  contextImage:
    "https://cdn.prod.website-files.com/697be174b8224c11c814a60e/699607a32fc661f9142d7305_Capture%20d%E2%80%99e%CC%81cran%202025-09-27%20a%CC%80%202.52.08%E2%80%AFPM.png",
  // Section: Approche
  approcheTitle: "Approche de conception",
  approcheDescription:
    "Chaque bloc, chaque espace, chaque mouvement a été calculé pour tenir sur une ligne fine entre esthétique et fonctionnalité. L'approche s'est articulée autour de trois axes : clarté visuelle, performance et expérience utilisateur.",
  approcheImage:
    "https://cdn.prod.website-files.com/697be174b8224c11c814a60e/699607a32fc661f9142d7313_Capture%20d%E2%80%99e%CC%81cran%202025-10-12%20a%CC%80%207.32.12%E2%80%AFPM.png",
  // Section: Ce que nous avons fait
  services: [
    "Définition du cadre",
    "Structure et hiérarchie",
    "Direction artistique",
    "Interactions et animations",
    "Développement Webflow",
  ],
  dateMiseAJour: "Mise à jour le 14 octobre 2025",
  credits: "Justzeze par Julesstudio X Justzeze",
};

export default function ProjetDetailPage() {
  return (
    <div className="w-full bg-white">
      {/* ===== SECTION 1: HERO ===== */}
      <section className="px-5 md:px-12 pt-24 pb-12 md:pt-24 md:pb-16">
        {/* Small thumbnail */}
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

        {/* Title */}
        <h1
          className="font-[family-name:var(--font-merriweather)] font-black uppercase leading-[0.95]"
          style={{ fontSize: "clamp(3rem, 10vw, 8rem)" }}
        >
          {project.name}
        </h1>

        {/* Subtitle line */}
        <p className="mt-4 text-sm text-[color:var(--color-muted)]">
          {project.collaboration} ·{" "}
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[color:var(--color-foreground)] hover:text-[color:var(--color-muted)] transition-colors duration-600"
          >
            voir en live
          </a>
        </p>

        {/* Short description */}
        <p className="mt-3 text-base text-[color:var(--color-foreground)]">
          {project.shortDescription}
        </p>
      </section>

      {/* ===== SECTION 2: Full-width background + overlay screenshot ===== */}
      <section className="px-3 md:px-4">
        <div
          className="relative w-full overflow-hidden max-md:!h-[80svh]"
          style={{ height: "150svh", borderRadius: "0.5rem" }}
        >
        {/* Background image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://cdn.prod.website-files.com/697be174b8224c11c814a60e/699607a32fc661f9142d72f7_photo%20site%20bg%20hero%20main.jpeg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay screenshot */}
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
              src="https://cdn.prod.website-files.com/697be174b8224c11c814a60e/699607a32fc661f9142d7305_Capture%20d%E2%80%99e%CC%81cran%202025-09-27%20a%CC%80%202.52.08%E2%80%AFPM.png"
              alt={project.name}
              width={1030}
              height={580}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
        </div>
      </section>

      {/* ===== SECTION 3: Context ===== */}
      <section className="px-5 md:px-12 py-20 md:py-36">
        <div style={{ maxWidth: "30svw" }} className="max-md:!max-w-full">
          <h2
            className="font-[family-name:var(--font-merriweather)] font-bold"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
          >
            {project.contextTitle}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[color:var(--color-muted)]">
            {project.contextDescription}
          </p>
        </div>
      </section>

      {/* Context full-width background + overlay screenshot */}
      <section className="px-3 md:px-4">
        <div
          className="relative w-full overflow-hidden max-md:!h-[80svh]"
          style={{ height: "150svh", borderRadius: "0.5rem" }}
        >
        {/* Background image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://cdn.prod.website-files.com/697be174b8224c11c814a60e/699607a42fc661f9142d731c_IMG_3889.webp"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay screenshot */}
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
              src="https://cdn.prod.website-files.com/697be174b8224c11c814a60e/699607a32fc661f9142d7313_Capture%20d%E2%80%99e%CC%81cran%202025-10-12%20a%CC%80%207.32.12%E2%80%AFPM.png"
              alt={project.contextTitle}
              width={1030}
              height={580}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        </div>
      </section>

      {/* ===== SECTION 4: Approche de conception ===== */}
      <section className="px-5 md:px-12 py-20 md:py-36">
        <div style={{ maxWidth: "30svw" }} className="max-md:!max-w-full">
          <h2
            className="font-[family-name:var(--font-merriweather)] font-bold"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
          >
            {project.approcheTitle}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[color:var(--color-muted)]">
            {project.approcheDescription}
          </p>
        </div>
      </section>

      {/* Approche full-width background + overlay video */}
      <section className="px-3 md:px-4">
        <div
          className="relative w-full overflow-hidden max-md:!h-[80svh]"
          style={{ height: "150svh", borderRadius: "0.5rem" }}
        >
        {/* Background image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://cdn.prod.website-files.com/697be174b8224c11c814a60e/699607a42fc661f9142d731f_IMG_3385.webp"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay video */}
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
            <video
              src="https://res.cloudinary.com/daehyxast/video/upload/f_auto,q_auto/v1759347982/video_preview_2_muirbu.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        </div>
      </section>

      {/* ===== SECTION 5: Ce que nous avons fait ===== */}
      <section className="px-5 md:px-12 py-20 md:py-36">
        <div style={{ maxWidth: "30svw" }} className="max-md:!max-w-full">
          <h2
            className="font-[family-name:var(--font-merriweather)] font-bold mb-6"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
          >
            Ce que nous avons fait
          </h2>
          <ul className="space-y-2">
            {project.services.map((service) => (
              <li
                key={service}
                className="text-sm text-[color:var(--color-muted)]"
              >
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Gradient bar */}
        <div
          className="mt-12"
          style={{
            height: "4px",
            borderRadius: "2px",
            backgroundImage:
              "linear-gradient(90deg, var(--color-accent), #f3f2f0)",
          }}
        />

        {/* Credits line */}
        <div className="flex items-center justify-between mt-6">
          <span className="text-xs text-[color:var(--color-muted)]">
            {project.credits}
          </span>
          <span className="text-xs text-[color:var(--color-muted)]">
            {project.dateMiseAJour}
          </span>
        </div>
      </section>

      {/* ===== SECTION 6: Footer ===== */}
      <section className="px-5 md:px-12 py-12">
        {/* Plus de projets */}
        <div className="mb-16 text-center">
          <Link
            href="/projets"
            className="text-sm font-medium no-underline text-[color:var(--color-foreground)]"
            style={{
              backgroundImage: "linear-gradient(#f3f2f0, #919191 75%, #c4c4c4)",
              border: "1px solid #c4c4c4",
              borderRadius: "5px",
              padding: "0.5rem 1rem",
            }}
          >
            Plus de projets
          </Link>
        </div>

        {/* CTA Contact Card */}
        <div
          className="max-md:!mx-0"
          style={{
            backgroundColor: "#f3f2f0",
            borderRadius: "5px",
            marginLeft: "10rem",
            marginRight: "10rem",
            padding: "1.5rem",
          }}
        >
          <h3
            className="font-[family-name:var(--font-merriweather)] font-bold mb-3"
            style={{ fontSize: "clamp(1.25rem, 2vw, 2rem)" }}
          >
            Venez nous saluer !
          </h3>
          <a
            href="mailto:hello@julesstudio.fr"
            className="text-sm underline text-[color:var(--color-foreground)] hover:text-[color:var(--color-muted)] transition-colors duration-600"
          >
            hello@julesstudio.fr
          </a>
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
