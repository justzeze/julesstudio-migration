"use client";

import { useState, useMemo, useCallback } from "react";
import { ContentPanel } from "@/components/layout/ContentPanel";
import { BackgroundVideoPanel } from "@/components/layout/BackgroundVideoPanel";
import { FilterButtons } from "@/components/ui/FilterButtons";
import { ProjectListItem } from "@/components/ui/ProjectListItem";
import { InlineFooter } from "@/components/layout/InlineFooter";

interface Project {
  name: string;
  slug: string;
  image: string;
  videoUrl?: string;
  category: string;
  task: string;
  liveUrl?: string;
}

interface ProjetsDict {
  intro: string;
  viewProject: string;
  hoverHint: string;
  noProjects: string;
  filters: {
    all: string;
    showcase: string;
    ecommerce: string;
    editorial: string;
    identity: string;
    portfolio: string;
    social: string;
  };
}

interface ProjetsPageClientProps {
  projects: Project[];
  dict?: ProjetsDict;
}

export function ProjetsPageClient({ projects, dict }: ProjetsPageClientProps) {
  const filters = dict?.filters || {
    all: "Tous",
    showcase: "Site Vitrine",
    ecommerce: "E-commerce",
    editorial: "Éditorial",
    identity: "Identité Visuelle",
    portfolio: "Portfolio",
    social: "Social Media",
  };

  const [filter, setFilter] = useState(filters.all);
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);
  const [hoveredName, setHoveredName] = useState<string | null>(null);

  const filtered = useMemo(
    () => filter === filters.all ? projects : projects.filter((p) => p.category === filter),
    [filter, filters.all, projects]
  );

  const handleHover = useCallback((videoUrl: string, name: string) => {
    setHoveredVideo(videoUrl);
    setHoveredName(name);
  }, []);

  const handleLeave = useCallback(() => {
    setHoveredVideo(null);
    setHoveredName(null);
  }, []);

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
              {dict?.intro || "Chaque projet ci-dessous a été conçu avec un seul objectif : générer des résultats mesurables. Pas juste un beau design."}
            </p>
            <FilterButtons onFilter={setFilter} filters={filters} />
          </div>
        </div>

        {/* Project list */}
        <div className="flex flex-col gap-2">
          {filtered.map((project, i) => (
            <ProjectListItem
              key={project.slug}
              {...project}
              index={i + 1}
              viewProjectLabel={dict?.viewProject || "Voir le projet"}
              onHover={handleHover}
              onLeave={handleLeave}
            />
          ))}

          {filtered.length === 0 && (
            <p className="text-center text-sm text-[color:var(--color-foreground)] py-20">
              {dict?.noProjects || "Aucun projet dans cette catégorie pour le moment."}
            </p>
          )}
        </div>

        <InlineFooter />
      </ContentPanel>

      <BackgroundVideoPanel
        hoveredVideoUrl={hoveredVideo}
        hoveredName={hoveredName}
      />
    </div>
  );
}
