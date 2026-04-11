"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const HEADER_H = "3.5rem";

const TAGLINE_WORDS = [
  { text: "Studio", ml: "-5.5rem" },
  { text: "de" },
  { text: "Design" },
  { text: "Digital" },
  { text: "&" },
  { text: "de" },
  { text: "Developpement", ml: "-4.5rem" },
  { text: "Webflow" },
];

export function HomeHero({ isVisible = true }: { isVisible?: boolean }) {
  const [previewOpen, setPreviewOpen] = useState(true);
  const [headerHovered, setHeaderHovered] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [isMd, setIsMd] = useState(false);
  const taglineRef = useRef<HTMLDivElement>(null);
  const yearsRef = useRef<HTMLDivElement>(null);
  const bgVideoRef = useRef<HTMLVideoElement>(null);
  const teasingVideoRef = useRef<HTMLVideoElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    setIsMd(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMd(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const animateTagline = useCallback((show: boolean) => {
    if (!taglineRef.current) return;
    const words = taglineRef.current.querySelectorAll(".tagline-word");
    const years = yearsRef.current;

    if (show) {
      // Tagline IN — staggered from bottom, slow & fluid
      gsap.fromTo(
        words,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.12,
          ease: "power3.out",
        }
      );
      if (years) {
        gsap.fromTo(
          years,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, delay: 0.8, ease: "power3.out" }
        );
      }
    } else {
      // Tagline OUT — years first, then words from last to first
      if (years) {
        gsap.to(years, { y: 20, opacity: 0, duration: 0.6, ease: "power2.inOut" });
      }
      gsap.to(words, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: { each: 0.08, from: "end" },
        delay: 0.15,
        ease: "power2.inOut",
      });
    }
  }, []);

  useEffect(() => {
    if (!hasAnimated.current) {
      hasAnimated.current = true;
      if (isMd && taglineRef.current) {
        const words = taglineRef.current.querySelectorAll(".tagline-word");
        gsap.set(words, { y: 40, opacity: 0 });
      }
      if (isMd && yearsRef.current) {
        gsap.set(yearsRef.current, { y: 20, opacity: 0 });
      }
    }
  }, [isMd]);

  useEffect(() => {
    if (!hasAnimated.current || !isMd) return;
    animateTagline(!previewOpen);
  }, [previewOpen, animateTagline, isMd]);

  // Pause/resume videos when visibility changes (persistent mount in layout)
  useEffect(() => {
    const bg = bgVideoRef.current;
    const teasing = teasingVideoRef.current;
    if (isVisible) {
      bg?.play();
      teasing?.play();
    } else {
      bg?.pause();
      teasing?.pause();
    }
  }, [isVisible]);

  return (
    <div
      className="fixed inset-0 bg-white top-0 md:top-[3.5rem]"
    >
      {/* ===== MOBILE GALLERY (project-gallery-wapper) ===== */}
      <div className="md:hidden fixed inset-x-0 top-0 z-[999]">
        {/* project-gallery-top-wrapper */}
        <div
          className="flex items-start justify-between cursor-pointer"
          onClick={() => setGalleryOpen((v) => !v)}
          style={{
            backgroundColor: "#f3f2f0",
            borderRadius: "5px",
            padding: "0.5rem",
          }}
        >
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2m-10.6-3.47l1.63 2.18l2.58-3.22a.5.5 0 0 1 .78 0l2.96 3.7c.26.33.03.81-.39.81H9a.5.5 0 0 1-.4-.8l2-2.67c.2-.26.6-.26.8 0M2 7v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1s-1 .45-1 1" />
            </svg>
            <span className="text-sm font-normal">Gallerie</span>
          </div>
          {/* Toggle icon: dots when closed, chevron when open */}
          <div
            className="flex items-center justify-center rounded-[5px]"
            style={{
              padding: "0.25rem",
              ...(galleryOpen
                ? {}
                : { backgroundColor: "#fff", border: "1px solid #c4c4c4" }),
            }}
          >
            {galleryOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6l-6 6z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" fill="currentColor">
                <circle cx="8" cy="16" r="2" />
                <circle cx="16" cy="16" r="2" />
                <circle cx="24" cy="16" r="2" />
              </svg>
            )}
          </div>
        </div>

        {/* project-gallery-bottom-wrapper (slide animation) */}
        <div
          className="flex flex-col items-center overflow-hidden"
          style={{
            backgroundColor: "#fff",
            borderRadius: "5px",
            maxHeight: galleryOpen ? "80vh" : "0",
            padding: galleryOpen ? "1rem 0.5rem" : "0 0.5rem",
            opacity: galleryOpen ? 1 : 0,
            transition: "max-height 0.8s cubic-bezier(0.4, 0, 0.2, 1), padding 0.8s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.6s ease",
          }}
        >
            {/* project-gallery-content-wrapper */}
            <div className="flex flex-col items-center gap-4 p-2">
              {/* project-gallery-img-wrapper */}
              <div
                className="overflow-clip flex items-center justify-center"
                style={{ width: "18rem", height: "15rem" }}
              >
                <img
                  src="https://cdn.prod.website-files.com/6983a7c2decf98d1d77ad954/69ab6985047d28d4eecfa2d6_Capture%20d%E2%80%99e%CC%81cran%202025-09-27%20a%CC%80%203.06.01%E2%80%AFPM.png"
                  alt="Justzeze"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* project-gallery-bottom-element */}
              <div className="flex items-center justify-between w-[80vw] flex-wrap gap-2">
                {/* Left: project link */}
                <a
                  href="/gallerie-projets/justzeze"
                  className="text-sm font-medium hover:border-b hover:border-black transition-all"
                >
                  Justzeze
                </a>
                {/* Right: number + line + tous les projets */}
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium">1</span>
                  <div className="w-px h-4 bg-[#c4c4c4]" />
                  <a
                    href="/tous-les-projets"
                    className="text-sm font-medium px-2 py-2 rounded-[5px] flex items-center justify-center"
                    style={{
                      backgroundImage: "linear-gradient(#f3f2f0, #d2d1d1 75%, #c4c4c4)",
                      border: "1px solid #c4c4c4",
                    }}
                  >
                    Tous les projets
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      {/* SPACER — keep mobile gallery above video */}

      {/* v2-home-bg-wrapper — white border + rounded corners */}
      <div
        className="absolute overflow-hidden bottom-[8rem] md:bottom-[0.5rem] top-[3rem] md:top-[0.5rem]"
        style={{
          left: "0.5rem",
          right: "0.5rem",
          borderRadius: "5px",
        }}
      >
      {/* ===== BACKGROUND VIDEO — FULLSCREEN ===== */}
      <video
        ref={bgVideoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
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
        transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
        className="hidden md:block absolute top-0 left-0 z-10"
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
              className="text-base font-semibold cursor-pointer"
              style={{
                padding: "0.4rem 0.6rem",
                borderRadius: "4px",
                backgroundColor: headerHovered ? "rgba(0,0,0,0.08)" : "transparent",
                transition: "background-color 0.8s ease",
              }}
              onClick={() => setPreviewOpen(false)}
              onMouseEnter={() => setHeaderHovered(true)}
              onMouseLeave={() => setHeaderHovered(false)}
            >
              {headerHovered ? "Fermé" : "Aperçu"}
            </span>
            <div className="flex items-center gap-2">
              <span
                className="rounded-full"
                style={{
                  width: 12,
                  height: 12,
                  backgroundColor: "#c4c4c4",
                  transition: "transform 1.2s cubic-bezier(0.4, 0, 0.2, 1)",
                  transform: headerHovered ? "translateX(-4rem)" : "translateX(0)",
                }}
              />
              <span className="rounded-full" style={{ width: 12, height: 12, backgroundColor: "#c4c4c4" }} />
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
              ref={teasingVideoRef}
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
      {/* home-bottom-btn-preview-on / off */}
      <button
        onClick={() => setPreviewOpen((v) => !v)}
        className="hidden md:flex absolute z-20 items-center justify-center text-sm font-medium cursor-pointer hover:-translate-y-[5px] transition-transform"
        style={{
          backgroundImage: "linear-gradient(#c4c4c4, #f3f2f0)",
          borderRadius: "5px",
          width: "5rem",
          height: "2rem",
          bottom: "1.5rem",
          left: "5rem",
          border: "none",
        }}
      >
        {previewOpen ? "Fermé" : "Aperçu"}
      </button>

      {/* ===== TAGLINE MOBILE (static, fixed lines) ===== */}
      <div
        className="md:hidden absolute z-10 left-1/2 -translate-x-1/2"
        style={{ top: "40%" }}
      >
        <h1 className="text-white uppercase font-bold leading-[1.3]" style={{ fontSize: "1.25rem" }}>
          <div>STUDIO DE DESIGN</div>
          <div style={{ paddingLeft: "5rem" }}>DIGITAL &amp; DE</div>
          <div style={{ paddingLeft: "2.5rem" }}>DEVELOPPEMENT</div>
          <div className="flex items-center" style={{ paddingLeft: "4rem" }}>
            <span>WEBFLOW</span>
            <span className="text-[0.55rem] font-medium ml-2 leading-tight opacity-80 whitespace-nowrap">©2026<br/>JULES STUDIO</span>
          </div>
        </h1>
      </div>

      {/* ===== TAGLINE DESKTOP (GSAP animated) ===== */}
      <div
        ref={taglineRef}
        className="hidden md:block absolute z-10"
        style={{
          width: "20rem",
          bottom: "1.5rem",
          left: "70%",
          padding: "0.5rem 0.5rem 0",
        }}
      >
        <h1
          className="text-white uppercase font-bold leading-[1.2] flex flex-wrap text-[2rem]"
        >
          {TAGLINE_WORDS.map((word, i) => (
            <span
              key={i}
              className="tagline-word inline-block"
              style={{
                marginLeft: word.ml ?? undefined,
                marginRight: "0.35rem",
              }}
            >
              {word.text}
            </span>
          ))}
        </h1>
        <div
          ref={yearsRef}
          className="absolute flex flex-col items-center text-white text-xs"
          style={{
            right: 0,
            bottom: 0,
            padding: "0.5rem",
          }}
        >
          <div>©2026</div>
          <div>JULES STUDIO</div>
        </div>
      </div>

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
        <div className="flex flex-col w-full h-full">
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

      {/* ===== MOBILE CONTACT ROW (below video) ===== */}
      <div
        className="md:hidden absolute left-[0.5rem] right-[0.5rem] grid gap-2"
        style={{
          bottom: "5rem",
          gridTemplateColumns: "0.25fr 0.25fr 1fr",
          padding: "0.5rem",
        }}
      >
        <a
          href="https://youtube.com/@julesstudioyt"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center text-xs font-medium py-2 rounded-[5px]"
          style={{
            backgroundImage: "linear-gradient(#f3f2f0, #919191 75%, #c4c4c4)",
            border: "1px solid #c4c4c4",
          }}
        >
          Yout
        </a>
        <a
          href="https://instagram.com/julesstudio.fr"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center text-xs font-medium py-2 rounded-[5px]"
          style={{
            backgroundImage: "linear-gradient(#f3f2f0, #919191 75%, #c4c4c4)",
            border: "1px solid #c4c4c4",
          }}
        >
          Insta
        </a>
        <a
          href="mailto:hello@julesstudio.fr"
          className="flex items-center justify-center text-xs font-medium py-2 rounded-[5px]"
          style={{
            backgroundImage: "linear-gradient(#f3f2f0, #919191 75%, #c4c4c4)",
            border: "1px solid #c4c4c4",
          }}
        >
          Mail
        </a>
      </div>
    </div>
  );
}
