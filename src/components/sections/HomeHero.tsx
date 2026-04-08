"use client";

import { motion } from "framer-motion";

/**
 * Home Hero — fixed fullscreen, no scroll.
 *
 * Layout from Webflow CSS:
 * - nav-component: fixed top, bg white, padding 0.5rem
 * - v2-right-panel: 63% width, fixed, top/bottom/right 0.5rem, border-radius 5px, overflow hidden
 * - studio-main-preview-teasing-wrapper: 28rem x 18.7rem, left 6.5rem, bg #e6e6e6c4, border-radius 5px bottom
 * - teasing-content: border-radius 5px, overflow clip
 * - home-bottom-btn-preview-on: absolute, bottom 4rem, left 1rem
 * - contact sidebar: absolute right, vertical text
 */

export function HomeHero() {
  return (
    <div className="fixed inset-0 overflow-hidden" style={{ top: "3.5rem" }}>
      {/* ===== RIGHT PANEL — v2-right-panel (63% width, video background) ===== */}
      <div
        className="fixed flex flex-col justify-center items-center overflow-hidden"
        style={{
          width: "63%",
          top: "0.5rem",
          bottom: "0.5rem",
          right: "0.5rem",
          borderRadius: "5px",
          zIndex: 0,
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ borderRadius: "5px", top: "4.3rem" }}
        >
          <source
            src="https://s3.amazonaws.com/webflow-prod-assets/697be174b8224c11c814a60e/697c72ff2f64b42254f72b34_best%20bg%20video%20V2.mp4"
            type="video/mp4"
          />
        </video>

        {/* Sidebar social links — right edge, bottom */}
        <div
          className="absolute right-0 bottom-0 flex flex-col z-10"
          style={{ gap: 0 }}
        >
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

      {/* ===== LEFT SIDE — Preview teasing ===== */}

      {/* Aperçu header bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute top-0 left-0 z-10"
        style={{ width: "37%" }}
      >
        <div
          className="flex items-center justify-between px-4 py-3"
          style={{ background: "rgba(230,230,230,0.77)" }}
        >
          <span className="text-base font-semibold">Aperçu</span>
          <div className="flex items-center gap-2">
            {/* Dots */}
            <span
              className="rounded-full"
              style={{
                width: "12px",
                height: "12px",
                backgroundColor: "var(--base-color-neutral--neutral-light, #c4c4c4)",
              }}
            />
            <span
              className="rounded-full"
              style={{
                width: "12px",
                height: "12px",
                backgroundColor: "var(--base-color-neutral--neutral-light, #c4c4c4)",
              }}
            />
            {/* Scrollbar indicator */}
            <span
              className="rounded-full ml-4"
              style={{
                width: "2rem",
                height: "4px",
                backgroundColor: "rgba(0,0,0,0.15)",
              }}
            />
          </div>
        </div>
      </motion.div>

      {/* Teasing wrapper — 28rem x 18.7rem, left 6.5rem */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.5, 0, 0, 1] }}
        className="absolute z-10"
        style={{
          width: "28rem",
          height: "18.7rem",
          left: "6.5rem",
          top: "3.5rem",
          background: "rgba(230, 230, 230, 0.77)",
          borderBottomLeftRadius: "5px",
          borderBottomRightRadius: "5px",
          padding: "0 0.5rem 0.5rem",
          overflow: "clip",
        }}
      >
        {/* teasing-content */}
        <div
          className="w-full h-full"
          style={{ borderRadius: "5px", overflow: "clip" }}
        >
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

      {/* Badge "Fermé" — bottom left */}
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
    </div>
  );
}
