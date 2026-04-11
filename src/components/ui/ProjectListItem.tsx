"use client";

import Image from "next/image";
import Link from "next/link";
import { SwipeLink } from "./SwipeLink";

interface ProjectListItemProps {
  name: string;
  slug: string;
  image: string;
  videoUrl?: string;
  category: string;
  task: string;
  liveUrl?: string;
  index: number;
  onHover: (videoUrl: string, name: string) => void;
  onLeave: () => void;
}

export function ProjectListItem({
  name,
  slug,
  image,
  category,
  task,
  liveUrl,
  videoUrl,
  index,
  onHover,
  onLeave,
}: ProjectListItemProps) {
  return (
    <div
      className="flex flex-col gap-4 rounded-[5px] bg-[color:var(--color-beige)] hover:bg-white"
      style={{ transition: "background-color 1.2s cubic-bezier(0.4, 0, 0.2, 1)" }}
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
          href={`/gallerie-projets/${slug}`}
          className="whitespace-nowrap text-xs font-medium no-underline text-[color:var(--color-foreground)]"
          style={{
            backgroundImage: "linear-gradient(#f3f2f0, #919191 75%, #c4c4c4)",
            border: "1px solid #c4c4c4",
            borderRadius: "5px",
            padding: "0.5rem",
          }}
        >
          Voir le projet
        </SwipeLink>

        <span className="text-xs text-[color:var(--color-muted)]">{index}</span>

        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap text-xs font-medium no-underline text-[color:var(--color-foreground)]"
            style={{
              border: "1px solid #000",
              borderRadius: "5px",
              padding: "0.5rem",
            }}
          >
            {name.toLowerCase()}
          </a>
        )}
      </div>
    </div>
  );
}
