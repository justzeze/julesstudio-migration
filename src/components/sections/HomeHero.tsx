"use client";

import { motion } from "framer-motion";
import { InnerRadius } from "@/components/ui/InnerRadius";

export function HomeHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background video (Webflow class: home-Background-Video) */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="https://cdn.prod.website-files.com/6983a7c2decf98d1d77ad954/69ab6985047d28d4eecfa2d6_Capture%20d%E2%80%99e%CC%81cran%202025-09-27%20a%CC%80%203.06.01%E2%80%AFPM.png"
      >
        <source src="https://s3.amazonaws.com/webflow-prod-assets/697be174b8224c11c814a60e/697c72ff2f64b42254f72b34_best%20bg%20video%20V2.mp4" type="video/mp4" />
      </video>

      {/* Inner radius frame overlay — creates the concave corners effect */}
      <InnerRadius
        className="absolute inset-4 md:inset-6 border border-white/20 rounded-xl z-10"
        cornerBg="transparent"
      >
        {/* Empty — this is purely decorative framing */}
        <span className="corner-bl" aria-hidden />
        <span className="corner-br" aria-hidden />
      </InnerRadius>

      {/* Preview window (top-left) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute top-8 left-8 md:top-12 md:left-12 z-20"
      >
        <div className="bg-white/80 backdrop-blur-xl rounded-lg p-4 w-48 md:w-56 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-medium">Aperçu</span>
            <div className="flex gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--color-muted)]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--color-border)]" />
            </div>
          </div>
          <div className="aspect-video rounded overflow-hidden">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="w-full h-full object-cover"
            >
              <source src="https://res.cloudinary.com/daehyxast/video/upload/v1773019481/screen_projects_at6p0o.mov" type="video/mp4" />
            </video>
          </div>
        </div>
      </motion.div>

      {/* Status badge (bottom-left) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute bottom-8 left-8 md:bottom-12 md:left-12 z-20"
      >
        <span className="inline-block bg-white/80 backdrop-blur-xl rounded-full px-4 py-2 text-xs font-medium">
          Fermé
        </span>
      </motion.div>
    </section>
  );
}
