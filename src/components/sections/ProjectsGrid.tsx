"use client";

import { useState } from "react";
import { FilterButtons } from "@/components/ui/FilterButtons";
import { ProjectCard } from "@/components/ui/ProjectCard";

// Temporary static data — will be replaced by Sanity fetch
const projects = [
  {
    name: "Justzeze",
    slug: "justzeze",
    image:
      "https://cdn.prod.website-files.com/6983a7c2decf98d1d77ad954/69ab6985047d28d4eecfa2d6_Capture%20d%E2%80%99e%CC%81cran%202025-09-27%20a%CC%80%203.06.01%E2%80%AFPM.png",
    videoUrl:
      "https://res.cloudinary.com/daehyxast/video/upload/f_auto,q_auto/v1759347982/video_preview_2_muirbu.mp4",
    category: "Portfolio",
    task: "Design, Intégration Webflow, Design Système",
  },
];

export function ProjectsGrid() {
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
