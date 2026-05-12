"use client";

import { memo } from "react";
import Image from "next/image";
import { SwipeLink } from "./SwipeLink";
import { useLocale } from "@/i18n/locale-context";

interface ProjectListItemProps {
  name: string;
  slug: string;
  image: string;
  videoUrl?: string;
  category: string;
  task: string;
  liveUrl?: string;
  index: number;
  viewProjectLabel?: string;
  onHover: (videoUrl: string, name: string) => void;
  onLeave: () => void;
}

export const ProjectListItem = memo(function ProjectListItem({
  name,
  slug,
  image,
  category,
  task,
  liveUrl,
  videoUrl,
  index,
  viewProjectLabel = "Voir le projet",
  onHover,
  onLeave,
}: ProjectListItemProps) {
  const locale = useLocale();

  return (
    <div
      className="flex flex-col gap-4 rounded-[5px] bg-[color:var(--color-beige)] hover:bg-white"
      style={{ transition: "background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1)" }}
      onMouseEnter={() => videoUrl && onHover(videoUrl, name)}
      onMouseLeave={onLeave}
    >
      {/* Top row: thumbnail + title/description */}
      <div className="flex items-start gap-4 p-4">
        {/* Thumbnail — 80x80 like madebynull */}
        <div
          className="shrink-0 overflow-clip"
          style={{ borderRadius: "5px", width: "80px", height: "80px" }}
        >
          <Image
            src={image}
            alt={name}
            width={80}
            height={80}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Title + description */}
        <div>
          <h3 className="font-bold text-base">{name}</h3>
          <p className="mt-1 text-xs text-[color:var(--color-foreground)]">
            {task}
          </p>
        </div>
      </div>

      {/* Bottom action bar */}
      <div className="flex items-center gap-3 px-4 pb-4">
        <SwipeLink
          href={`/${locale}/gallerie-projets/${slug}`}
          className="whitespace-nowrap text-xs font-medium no-underline text-[color:var(--color-foreground)]"
          style={{
            backgroundImage: "linear-gradient(#f3f2f0, #919191 75%, #c4c4c4)",
            border: "1px solid #c4c4c4",
            borderRadius: "5px",
            padding: "0.75rem 0.75rem",
          }}
        >
          {viewProjectLabel}
        </SwipeLink>

        <span className="text-xs text-[color:var(--color-muted)]">{index}</span>

        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap text-xs font-medium no-underline text-[color:var(--color-foreground)] hover:opacity-70"
            style={{
              border: "1px solid var(--color-foreground)",
              borderRadius: "5px",
              padding: "0.75rem 0.75rem",
              transition: "opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            {name.toLowerCase()}
          </a>
        )}
      </div>
    </div>
  );
});
