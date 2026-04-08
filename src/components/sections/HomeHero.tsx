"use client";

import { motion } from "framer-motion";

/**
 * Home Hero — fixed fullscreen, no scroll.
 *
 * From Webflow CSS:
 * - home-background-video: z-index -1, width 100%, height 100%, border-radius 5px, top 4.3rem
 * - studio-main-preview-teasing-wrapper: 28rem x 18.7rem, left 6.5rem, bg #e6e6e6c4
 * - teasing-content: border-radius 5px, overflow clip
 * - home-bottom-btn-preview-on: absolute bottom 4rem left 1rem
 * - contact sidebar: right edge, vertical text
 */

export function HomeHero() {
  return (
    <div className="fixed inset-0 overflow-hidden" style={{ top: "3.5rem" }}>
      {/* ===== BACKGROUND VIDEO — FULLSCREEN ===== */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute w-full h-full object-cover"
        style={{
          zIndex: -1,
          borderRadius: "5px",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        <source
          src="https://s3.amazonaws.com/webflow-prod-assets/697be174b8224c11c814a60e/697c72ff2f64b42254f72b34_best%20bg%20video%20V2.mp4"
          type="video/mp4"
        />
      </video>

      {/* ===== APERÇU HEADER BAR ===== */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute top-0 left-0 z-10"
        style={{
          background: "rgba(230,230,230,0.77)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
      >
        <div className="flex items-center gap-4 px-6 py-4" style={{ width: "34.5rem" }}>
          <span className="text-base font-semibold">Aperçu</span>
          <div className="flex-1" />
          <div className="flex items-center gap-2">
            <span className="rounded-full" style={{ width: 12, height: 12, backgroundColor: "#c4c4c4" }} />
            <span className="rounded-full" style={{ width: 12, height: 12, backgroundColor: "#c4c4c4" }} />
          </div>
          <span className="rounded-full" style={{ width: "2rem", height: 4, backgroundColor: "rgba(0,0,0,0.15)" }} />
        </div>
      </motion.div>

      {/* ===== TEASING WRAPPER — 28rem x 18.7rem ===== */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.5, 0, 0, 1] }}
        className="absolute z-10"
        style={{
          width: "28rem",
          height: "18.7rem",
          left: "6.5rem",
          top: "3.2rem",
          background: "rgba(230, 230, 230, 0.77)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderBottomLeftRadius: "5px",
          borderBottomRightRadius: "5px",
          padding: "0 0.5rem 0.5rem",
          overflow: "clip",
        }}
      >
        <div className="w-full h-full" style={{ borderRadius: "5px", overflow: "clip" }}>
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          >
            <source
              src="https://res.cloudinary.com/daehyxast/video/upload/v1773019481/screen_projects_at6p0o.mov"
              type="video/mp4"
            />
          </video>
        </div>
      </motion.div>

      {/* ===== BADGE "Fermé" ===== */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="absolute z-20"
        style={{ bottom: "4rem", left: "1rem" }}
      >
        <span
          className="flex items-center justify-center text-sm font-medium"
          style={{
            backgroundImage: "linear-gradient(#c4c4c4, #f3f2f0)",
            borderRadius: "5px",
            width: "5rem",
            height: "2rem",
          }}
        >
          Fermé
        </span>
      </motion.div>

      {/* ===== SIDEBAR SOCIAL LINKS — far right, vertical ===== */}
      <div className="hidden md:flex absolute right-0 bottom-0 z-10 flex-col">
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
            className="[writing-mode:vertical-rl] text-xs font-semibold tracking-wider text-white px-2 py-3 hover:bg-white/20 transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
