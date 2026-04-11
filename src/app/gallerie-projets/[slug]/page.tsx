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
    "L'idée derrière Justzeze était de concevoir un portfolio qui reflète fidèlement l'univers créatif de son propriétaire. Chaque choix typographique, chaque animation et chaque interaction a été pensé pour servir un objectif : montrer le travail, pas juste le décorer. Un design épuré où chaque pixel a sa raison d'être.",
  contextImage:
    "https://cdn.prod.website-files.com/6983a7c2decf98d1d77ad954/69ab6985047d28d4eecfa2d6_Capture%20d%E2%80%99e%CC%81cran%202025-09-27%20a%CC%80%203.06.01%E2%80%AFPM.png",
  // Section: Full-width media
  heroMediaBg:
    "https://cdn.prod.website-files.com/697be174b8224c11c814a60e/699607a32fc661f9142d72f7_photo%20site%20bg%20hero%20main.jpeg",
  heroVideoThumb:
    "https://cdn.prod.website-files.com/697be174b8224c11c814a60e/699607a42fc661f9142d731c_IMG_3889.webp",
  // Section: Approche
  approcheTitle: "Approche de conception",
  approcheDescription:
    "L'approche pour ce projet s'est articulée autour de trois axes : clarté visuelle, performance et expérience utilisateur. Chaque section a été conçue comme une unité autonome qui guide l'œil et raconte une histoire. Les animations sont subtiles, les transitions fluides — rien n'est là par hasard.",
  approcheImage:
    "https://cdn.prod.website-files.com/697be174b8224c11c814a60e/699607a42fc661f9142d731f_IMG_3385.webp",
  // Section: Ce que nous avons fait
  services: [
    "Direction artistique",
    "Web Design",
    "Design Système",
    "Intégration Webflow",
    "Animations & Interactions",
    "Responsive Design",
  ],
  dateMiseAJour: "Mise à jour le 14 octobre 2025",
  credits: "Justzeze par Julesstudio X Justzeze",
};

export default function ProjetDetailPage() {
  return (
    <div className="w-full bg-white">
      {/* ===== SCREEN 1: HERO ===== */}
      <section style={{ padding: "6rem 3rem" }}>
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

      {/* ===== SCREEN 2: Full-width B&W hero media ===== */}
      <section
        className="relative w-full overflow-hidden"
        style={{ height: "150svh" }}
      >
        {/* Background image via img for reliability */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.heroMediaBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "50% 50%" }}
        />

        {/* Large overlay text — centered */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <span
            className="text-white font-black uppercase"
            style={{
              fontSize: "clamp(4rem, 15vw, 14rem)",
              textShadow: "0 4px 40px rgba(0,0,0,0.3)",
            }}
          >
            HELLO
          </span>
        </div>

        {/* Project card overlay at bottom */}
        <div
          className="absolute z-10 flex flex-col items-center"
          style={{
            bottom: "10%",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <div
            className="overflow-clip"
            style={{ borderRadius: "5px", width: "1030px", maxWidth: "90vw" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.thumbnail}
              alt={`${project.name} preview`}
              className="w-full h-auto object-cover"
            />
          </div>
          <span
            className="mt-4 text-white font-black uppercase tracking-wide"
            style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)" }}
          >
            {project.name}
          </span>
        </div>
      </section>

      {/* ===== SCREEN 3: Context section ===== */}
      <section style={{ padding: "9rem 3rem" }}>
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

      {/* Context wide image */}
      <section className="px-2">
        <div
          className="w-full overflow-clip"
          style={{ borderRadius: "5px", height: "60vh" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.contextImage}
            alt={project.contextTitle}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* ===== SCREEN 4: Full-width dark media with overlay card ===== */}
      <section
        className="relative w-full overflow-hidden"
        style={{ height: "150svh" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.heroVideoThumb}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div
          className="absolute z-10 flex flex-col items-center justify-center"
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
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.thumbnail}
              alt={`${project.name} screens`}
              className="w-full h-auto object-cover"
            />
          </div>
          <span
            className="mt-6 text-white font-black uppercase tracking-wide"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          >
            {project.name}
          </span>
        </div>
      </section>

      {/* ===== SCREEN 5: Approche de conception ===== */}
      <section style={{ padding: "9rem 3rem" }}>
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

      {/* Approche full-width image */}
      <section className="relative w-full overflow-hidden" style={{ height: "100vh" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.approcheImage}
          alt={project.approcheTitle}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "50% 95%" }}
        />
      </section>

      {/* ===== SCREEN 6: Curieux d'en découvrir davantage? ===== */}
      <section
        className="relative w-full flex items-center justify-center overflow-hidden"
        style={{ height: "80vh" }}
      >
        {/* Dark photo background */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.approcheImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.3)" }}
        />

        <div className="relative z-10 text-center px-6">
          <h2
            className="font-[family-name:var(--font-merriweather)] text-white font-bold"
            style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)" }}
          >
            Curieux d&apos;en découvrir davantage ?
          </h2>
          <div className="mt-8">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm font-medium text-white no-underline transition-transform hover:-translate-y-1"
              style={{
                border: "1px solid rgba(255,255,255,0.3)",
                borderRadius: "5px",
                padding: "0.75rem 2rem",
              }}
            >
              Voir le site →
            </a>
          </div>
        </div>
      </section>

      {/* ===== SCREEN 7: Ce que nous avons fait ===== */}
      <section style={{ padding: "9rem 3rem" }}>
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

      {/* ===== SCREEN 8: Plus de projets + CTA + Footer ===== */}
      <section style={{ padding: "3rem" }}>
        {/* Plus de projets */}
        <div className="mb-16">
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
          style={{
            backgroundColor: "#f3f2f0",
            borderRadius: "5px",
            marginLeft: "10rem",
            marginRight: "10rem",
            padding: "1rem",
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
