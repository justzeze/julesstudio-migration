"use client";

import { useState } from "react";
import { FilterButtons } from "@/components/ui/FilterButtons";
import { ProjectCard } from "@/components/ui/ProjectCard";

interface Project {
  name: string;
  slug: string;
  image: string;
  videoUrl?: string;
  category: string;
  task: string;
}

export function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState("Tous");

  const filtered =
    filter === "Tous"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <>
      <FilterButtons onFilter={setFilter} />

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} {...project} />
        ))}

        {filtered.length === 0 && (
          <p className="col-span-full text-center text-sm text-[color:var(--color-muted)] py-20">
            Aucun projet dans cette catégorie pour le moment.
          </p>
        )}
      </div>
    </>
  );
}
