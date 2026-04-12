"use client";

import { useState } from "react";
import { ContentPanel } from "@/components/layout/ContentPanel";
import { BackgroundVideoPanel } from "@/components/layout/BackgroundVideoPanel";
import { FilterButtons } from "@/components/ui/FilterButtons";
import { ProjectListItem } from "@/components/ui/ProjectListItem";

interface Project {
  name: string;
  slug: string;
  image: string;
  videoUrl?: string;
  category: string;
  task: string;
  liveUrl?: string;
}

export function ProjetsPageClient({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState("Tous");
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);
  const [hoveredName, setHoveredName] = useState<string | null>(null);

  const filtered =
    filter === "Tous"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <div className="flex flex-col md:flex-row">
      <ContentPanel>
        {/* Header illustration + intro + filters — projets-header-left-content-wrapper */}
        <div
          className="flex flex-none flex-col items-center justify-end w-full h-[40vh] md:mt-auto overflow-clip max-md:bg-[length:64rem] max-md:bg-center"
          style={{
            borderRadius: "5px",
            backgroundImage: `url('/images/illustration-projet.svg')`,
            backgroundPosition: "100% 0",
            backgroundSize: "33rem",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Frosted glass overlay at bottom */}
          <div
            className="w-full p-4 flex flex-col gap-3"
            style={{
              background: "rgba(255, 255, 255, 0.65)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
          >
            <p className="text-xs font-medium tracking-widest text-[color:var(--color-foreground)]">
              Chaque projet ci-dessous a été conçu avec un seul objectif :
              générer des résultats mesurables. Pas juste un beau design.
            </p>
            <FilterButtons onFilter={setFilter} />
          </div>
        </div>

        {/* Project list */}
        <div className="flex flex-col gap-2">
          {filtered.map((project, i) => (
            <ProjectListItem
              key={project.slug}
              {...project}
              index={i + 1}
              onHover={(videoUrl, name) => {
                setHoveredVideo(videoUrl);
                setHoveredName(name);
              }}
              onLeave={() => {
                setHoveredVideo(null);
                setHoveredName(null);
              }}
            />
          ))}

          {filtered.length === 0 && (
            <p className="text-center text-sm text-[color:var(--color-foreground)] py-20">
              Aucun projet dans cette catégorie pour le moment.
            </p>
          )}
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

      <BackgroundVideoPanel
        hoveredVideoUrl={hoveredVideo}
        hoveredName={hoveredName}
      />
    </div>
  );
}
