"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";

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

  function handleMouseEnter() {
    setHovered(true);
    videoRef.current?.play();
  }

  function handleMouseLeave() {
    setHovered(false);
    videoRef.current?.pause();
  }

  return (
    <Link
      href={`/gallerie-projets/${slug}`}
      className="group block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative overflow-hidden rounded-lg bg-[color:var(--color-beige)] transition-colors duration-300 hover:bg-white">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Video overlay on hover */}
          {videoUrl && (
            <video
              ref={videoRef}
              src={videoUrl}
              muted
              loop
              playsInline
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-400 ${
                hovered ? "opacity-100" : "opacity-0"
              }`}
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
    </Link>
  );
}
