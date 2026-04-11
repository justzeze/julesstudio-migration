"use client";

import Image from "next/image";
import { useState, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";

interface ProjectCardProps {
  name: string;
  slug: string;
  image: string;
  videoUrl?: string;
  category: string;
  task: string;
}

export function ProjectCard({
  name,
  slug,
  image,
  videoUrl,
  category,
  task,
}: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const router = useRouter();

  const handleSwipeClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      document.documentElement.classList.add("swipe-out");
      setTimeout(() => {
        router.push(`/gallerie-projets/${slug}`);
      }, 600);
    },
    [router, slug]
  );

  function handleMouseEnter() {
    setHovered(true);
    videoRef.current?.play();
  }

  function handleMouseLeave() {
    setHovered(false);
    videoRef.current?.pause();
  }

  return (
    <a
      href={`/gallerie-projets/${slug}`}
      onClick={handleSwipeClick}
      className="group block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative overflow-hidden rounded-lg bg-[color:var(--color-beige)] hover:bg-white" style={{ transition: "background-color 1.2s cubic-bezier(0.4, 0, 0.2, 1)" }}>
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-105"
            style={{ transition: "transform 1.2s cubic-bezier(0.4, 0, 0.2, 1)" }}
          />

          {/* Video overlay on hover */}
          {videoUrl && (
            <video
              ref={videoRef}
              src={videoUrl}
              muted
              loop
              playsInline
              className={`absolute inset-0 w-full h-full object-cover ${
                hovered ? "opacity-100" : "opacity-0"
              }`}
              style={{ transition: "opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1)" }}
            />
          )}
        </div>

        {/* Info */}
        <div className="p-4">
          <span className="text-[10px] font-medium tracking-widest text-[color:var(--color-muted)] uppercase">
            {category}
          </span>
          <h3 className="mt-1 font-[family-name:var(--font-merriweather)] text-lg font-bold">
            {name}
          </h3>
          <p className="mt-1 text-xs text-[color:var(--color-muted)]">{task}</p>
        </div>
      </div>
    </a>
  );
}
