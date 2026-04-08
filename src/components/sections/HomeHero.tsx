"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const HEADER_H = "3.5rem";

export function HomeHero() {
  const [previewOpen, setPreviewOpen] = useState(true);
  const [headerHovered, setHeaderHovered] = useState(false);

  return (
    <div className="fixed inset-0 overflow-hidden" style={{ top: "3.5rem" }}>
      {/* ===== BACKGROUND VIDEO — FULLSCREEN ===== */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: -1, borderRadius: "5px" }}
      >
        <source
          src="https://s3.amazonaws.com/webflow-prod-assets/697be174b8224c11c814a60e/697c72ff2f64b42254f72b34_best%20bg%20video%20V2.mp4"
          type="video/mp4"
        />
      </video>

      {/* ===== PREVIEW CARD (btn-teasing-wrapper + teasing) ===== */}
      {/* studio-main-preview-teasing-wrapper — contains BOTH header + teasing video */}
      <motion.div
        initial={false}
        animate={{
          opacity: previewOpen ? 1 : 0,
          y: previewOpen ? 0 : -20,
        }}
        transition={{ duration: 0.4, ease: [0.5, 0, 0, 1] }}
        className="absolute top-0 left-0 z-10"
        style={{
          width: "28rem",
          marginLeft: "6.5rem",
          background: "rgba(230, 230, 230, 0.77)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderBottomLeftRadius: "5px",
          borderBottomRightRadius: "5px",
          overflow: "clip",
          pointerEvents: previewOpen ? "auto" : "none",
        }}
      >
        {/* btn-teasing-wrapper — header bar, hover shows "Fermé", click closes */}
        <div
          className="flex items-center"
          style={{
            width: "100%",
            height: "6vh",
            paddingLeft: "0.5rem",
            paddingRight: "0.5rem",
          }}
        >
          <div className="flex items-center justify-between w-full h-full relative">
            <span
              className="text-base font-semibold transition-opacity duration-200 cursor-pointer"
              style={{ padding: "0.4rem 0.6rem", borderRadius: "4px" }}
              onClick={() => setPreviewOpen(false)}
              onMouseEnter={() => setHeaderHovered(true)}
              onMouseLeave={() => setHeaderHovered(false)}
            >
              {headerHovered ? "Fermé" : "Aperçu"}
            </span>
            <div className="flex items-center gap-2">
              <span className="rounded-full" style={{ width: 12, height: 12, backgroundColor: "#c4c4c4" }} />
              <span className="rounded-full" style={{ width: 12, height: 12, backgroundColor: "#c4c4c4" }} />
              <span className="rounded-full ml-4" style={{ width: "2rem", height: 4, backgroundColor: "rgba(0,0,0,0.15)" }} />
            </div>
          </div>
        </div>

        {/* teasing-content — video */}
        <div
          style={{
            height: "18.7rem",
            padding: "0 0.5rem 0.5rem",
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
        </div>
      </motion.div>

      {/* ===== TOGGLE BUTTON ===== */}
      {/* When card is open: hidden (close via header hover+click) */}
      {/* When card is closed: shows "Aperçu" button to reopen */}
      <button
        onClick={() => setPreviewOpen((v) => !v)}
        className="absolute z-20 flex items-center justify-center text-sm font-medium cursor-pointer hover:-translate-y-[5px] transition-transform"
        style={{
          backgroundImage: "linear-gradient(#c4c4c4, #f3f2f0)",
          borderRadius: "5px",
          width: "5rem",
          height: "2rem",
          bottom: "4rem",
          left: "6.5rem",
          border: "none",
        }}
      >
        Aperçu
      </button>

      {/* ===== SIDEBAR SOCIAL LINKS ===== */}
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
