"use client";

import { motion } from "framer-motion";

const HEADER_H = "64px";

export function HomeHero() {
  return (
    <section
      className="fixed inset-0 overflow-hidden"
      style={{ top: HEADER_H }}
    >
      {/* Background video — fullscreen behind everything */}
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

      {/* Aperçu window — large frosted glass, left side */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.5, 0, 0, 1] }}
        className="absolute top-0 left-0 z-20 w-[38vw] max-w-[540px] min-w-[320px] h-full"
      >
        <div className="relative w-full h-full bg-white/75 backdrop-blur-2xl">
          {/* Window header */}
          <div className="flex items-center justify-between px-6 py-4">
            <span className="text-base font-semibold text-[color:var(--color-foreground)]">
              Aperçu
            </span>
            <div className="flex gap-2 items-center">
              <span className="w-2.5 h-2.5 rounded-full bg-black/15" />
              <span className="w-2.5 h-2.5 rounded-full bg-black/10" />
              <span className="w-8 h-1 rounded-full bg-black/10 ml-2" />
            </div>
          </div>

          {/* Teasing content — site preview video */}
          <div className="relative mx-4 rounded-lg overflow-hidden shadow-2xl" style={{ height: "calc(100% - 70px)" }}>
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

      {/* Badge "Fermé" — bottom left */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="absolute bottom-6 left-6 z-30"
      >
        <span className="inline-block bg-white rounded-full px-5 py-2.5 text-sm font-medium shadow-sm">
          Fermé
        </span>
      </motion.div>

      {/* Sidebar social links — right edge, vertical, bottom-aligned */}
      <div className="hidden md:flex absolute right-0 top-0 h-full z-30 flex-col items-center justify-end pb-6">
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
            className="[writing-mode:vertical-rl] text-xs font-semibold tracking-wider text-white bg-white/20 backdrop-blur-sm px-2 py-3 hover:bg-white/40 transition-colors duration-200"
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}
