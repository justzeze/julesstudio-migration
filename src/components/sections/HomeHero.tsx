"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const HEADER_H = "3.5rem";
const IR_SIZE = 10; // inner radius size in px

/**
 * Single concave corner using radial-gradient.
 * `position` determines which corner: tl, tr, bl, br
 * `color` is the card's background color that "wraps" around.
 */
function ConcaveCorner({
  position,
  color,
  style,
}: {
  position: "tl" | "tr" | "bl" | "br";
  color: string;
  style?: React.CSSProperties;
}) {
  const gradientOrigin = {
    tl: "0% 0%",
    tr: "100% 0%",
    bl: "0% 100%",
    br: "100% 100%",
  }[position];

  return (
    <span
      aria-hidden
      style={{
        position: "absolute",
        width: IR_SIZE,
        height: IR_SIZE,
        pointerEvents: "none",
        zIndex: 2,
        background: `radial-gradient(circle at ${gradientOrigin}, transparent ${IR_SIZE}px, ${color} ${IR_SIZE}px)`,
        ...style,
      }}
    />
  );
}

export function HomeHero() {
  const [previewOpen, setPreviewOpen] = useState(true);
  const [headerHovered, setHeaderHovered] = useState(false);

  return (
    <div
      className="fixed inset-0 bg-white"
      style={{ top: "3.5rem" }}
    >
      {/* v2-home-bg-wrapper — white border + rounded corners */}
      <div
        className="absolute overflow-hidden"
        style={{
          top: "0.5rem",
          left: "0.5rem",
          right: "0.5rem",
          bottom: "0.5rem",
          borderRadius: "5px",
        }}
      >
      {/* ===== BACKGROUND VIDEO — FULLSCREEN ===== */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: -1 }}
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
          pointerEvents: previewOpen ? "auto" : "none",
        }}
      >
        {/* Inner radius — top corners only (where card meets top edge) */}
        <ConcaveCorner
          position="br"
          color="rgba(230,230,230,0.77)"
          style={{
            top: 0, left: -IR_SIZE,
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
          }}
        />
        <ConcaveCorner
          position="bl"
          color="rgba(230,230,230,0.77)"
          style={{
            top: 0, right: -IR_SIZE,
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
          }}
        />

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

      {/* ===== CONTACT CARD (rotated 90°, fixed right) ===== */}
      <div
        className="hidden md:block fixed z-10"
        style={{
          width: "11.5rem",
          height: "9.5vh",
          right: "-2.8rem",
          bottom: "14.5rem",
          transform: "rotate(90deg)",
          backgroundColor: "#fff",
          borderRadius: "0 0 5px 5px",
        }}
      >
        <div className="flex flex-col w-full h-full relative">
          {/* Inner radius — top corners only (where card meets edge) */}
          <ConcaveCorner position="br" color="#fff" style={{ top: 0, left: -IR_SIZE }} />
          <ConcaveCorner position="bl" color="#fff" style={{ top: 0, right: -IR_SIZE }} />

          {/* Label row — "Contact" with bottom border */}
          <div
            className="flex items-center px-3 text-xs font-semibold tracking-wide"
            style={{
              borderBottom: "1px solid #c4c4c4",
              height: "50%",
              cursor: "default",
            }}
          >
            Contact
          </div>

          {/* Links row */}
          <div className="flex items-center justify-between gap-1 px-2" style={{ height: "50%" }}>
            <a
              href="mailto:hello@julesstudio.fr"
              className="text-[10px] font-medium px-2 py-1 rounded-[5px] transition-opacity hover:opacity-70"
              style={{ backgroundImage: "linear-gradient(#c4c4c4, #f3f2f0)" }}
            >
              Mail
            </a>
            <a
              href="https://instagram.com/julesstudio.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-medium px-2 py-1 rounded-[5px] transition-opacity hover:opacity-70"
              style={{ backgroundImage: "linear-gradient(#c4c4c4, #f3f2f0)" }}
            >
              Insta
            </a>
            <a
              href="https://youtube.com/@julesstudioyt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-medium px-2 py-1 rounded-[5px] transition-opacity hover:opacity-70"
              style={{ backgroundImage: "linear-gradient(#c4c4c4, #f3f2f0)" }}
            >
              Yout
            </a>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
