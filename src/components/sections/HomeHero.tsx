"use client";

import { motion } from "framer-motion";

export function HomeHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden pt-[72px]">
      {/* Background video fullscreen */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="https://cdn.prod.website-files.com/6983a7c2decf98d1d77ad954/69ab6985047d28d4eecfa2d6_Capture%20d%E2%80%99e%CC%81cran%202025-09-27%20a%CC%80%203.06.01%E2%80%AFPM.png"
      >
        <source
          src="https://s3.amazonaws.com/webflow-prod-assets/697be174b8224c11c814a60e/697c72ff2f64b42254f72b34_best%20bg%20video%20V2.mp4"
          type="video/mp4"
        />
      </video>

      {/* Aperçu window — large frosted glass panel */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.5, 0, 0, 1] }}
        className="absolute top-[72px] left-0 z-20 w-[500px] max-w-[90vw] h-[calc(100vh-72px)]"
      >
        <div className="relative w-full h-full bg-white/70 backdrop-blur-2xl overflow-hidden">
          {/* Window header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-black/5">
            <span className="text-base font-semibold text-[color:var(--color-foreground)]">
              Aperçu
            </span>
            <div className="flex gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-black/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-black/10" />
            </div>
          </div>

          {/* Teasing content — site preview video */}
          <div className="relative w-full h-[calc(100%-52px)] overflow-hidden">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="w-full h-full object-cover object-top"
            >
              <source
                src="https://res.cloudinary.com/daehyxast/video/upload/v1773019481/screen_projects_at6p0o.mov"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </motion.div>

      {/* Status badge — bottom left */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="absolute bottom-8 left-8 z-30"
      >
        <span className="inline-block bg-white rounded-full px-5 py-2.5 text-sm font-medium shadow-sm">
          Fermé
        </span>
      </motion.div>

      {/* Sidebar social links — right edge, vertical */}
      <div className="hidden md:flex fixed right-0 top-[72px] h-[calc(100vh-72px)] z-40 flex-col items-center justify-end pb-8 gap-0">
        {[
          { label: "Contact", href: "mailto:hello@julesstudio.fr" },
          { label: "Mail", href: "mailto:hello@julesstudio.fr" },
          { label: "Insta", href: "https://instagram.com/julesstudio.fr" },
          { label: "Yout", href: "https://youtube.com/@julesstudioyt" },
        ].map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="[writing-mode:vertical-rl] text-xs font-semibold tracking-wider text-white px-3 py-4 hover:bg-white/10 transition-colors duration-200"
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}
