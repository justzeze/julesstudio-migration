"use client";

import { useState } from "react";


interface BackgroundVideoPanelProps {
  hoveredVideoUrl?: string | null;
  hoveredName?: string | null;
}

export function BackgroundVideoPanel({
  hoveredVideoUrl,
  hoveredName,
}: BackgroundVideoPanelProps = {}) {
  const [previewOpen, setPreviewOpen] = useState(true);
  const [headerHovered, setHeaderHovered] = useState(false);

  const isProjectsMode = hoveredVideoUrl !== undefined;

  return (
    <div
      className="panel-enter-right relative mx-2 mb-[5.5rem] h-[70vh] md:mx-0 md:mb-0 md:fixed md:top-[4rem] md:right-[0.5rem] md:bottom-[0.5rem] md:w-[63%] md:h-auto z-0 overflow-clip"
      style={{ borderRadius: "5px" }}
    >
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
        poster="https://cdn.prod.website-files.com/6983a7c2decf98d1d77ad954/69ab6985047d28d4eecfa2d6_Capture%20d%E2%80%99e%CC%81cran%202025-09-27%20a%CC%80%203.06.01%E2%80%AFPM.png"
      >
        <source
          src="https://s3.amazonaws.com/webflow-prod-assets/697be174b8224c11c814a60e/697c72ff2f64b42254f72b34_best%20bg%20video%20V2.mp4"
          type="video/mp4"
        />
      </video>

      {/* ===== TAGLINE MOBILE ===== */}
      <div
        className="md:hidden absolute z-10 left-1/2 -translate-x-1/2"
        style={{ top: "40%" }}
      >
        <h1
          className="text-white uppercase font-bold leading-[1.3]"
          style={{ fontSize: "1.25rem" }}
        >
          <div>STUDIO DE DESIGN</div>
          <div style={{ paddingLeft: "5rem" }}>DIGITAL &amp; DE</div>
          <div style={{ paddingLeft: "2.5rem" }}>DEVELOPPEMENT</div>
          <div className="flex items-center" style={{ paddingLeft: "4rem" }}>
            <span>WEBFLOW</span>
            <span className="text-[0.55rem] font-medium ml-2 leading-tight opacity-80 whitespace-nowrap">
              ©2026
              <br />
              JULES STUDIO
            </span>
          </div>
        </h1>
      </div>

      {isProjectsMode ? (
        <>
          {/* ===== PROJETS MODE: v2-preview-btn-wrapper (Aperçu header) ===== */}
          <div
            className="hidden md:block absolute z-20"
            style={{
              backgroundColor: "#fff",
              borderRadius: "5px",
              width: "15rem",
              top: "0.5rem",
              left: "3rem",
              overflow: "hidden",
              pointerEvents: previewOpen ? "auto" : "none",
              opacity: previewOpen ? 1 : 0,
              transform: previewOpen ? "translateY(0)" : "translateY(-20px)",
              transition: "opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1), transform 1.2s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            <div
              className="flex items-center justify-between w-full px-3 py-2 cursor-pointer"
              onClick={() => setPreviewOpen(false)}
              onMouseEnter={() => setHeaderHovered(true)}
              onMouseLeave={() => setHeaderHovered(false)}
            >
              <span
                className="text-sm font-semibold"
                style={{
                  padding: "0.3rem 0.5rem",
                  borderRadius: "5px",
                  backgroundColor: headerHovered ? "rgba(0,0,0,0.14)" : "transparent",
                  transition: "background-color 1.2s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                {headerHovered ? "Fermé" : "Aperçu"}
              </span>
              <div className="flex items-center gap-2">
                <span
                  className="rounded-full"
                  style={{
                    width: 10,
                    height: 10,
                    backgroundColor: "#c4c4c4",
                    transition: "transform 1.2s cubic-bezier(0.4, 0, 0.2, 1)",
                    transform: headerHovered ? "translateX(-2.5rem)" : "translateX(0)",
                  }}
                />
                <span
                  className="rounded-full"
                  style={{ width: 10, height: 10, backgroundColor: "#c4c4c4" }}
                />
              </div>
            </div>
          </div>

          {/* ===== v2-preview-wrapper ===== */}
          <div
            className="hidden md:flex absolute z-10 left-0 right-0 justify-center items-end overflow-clip"
            style={{
              backgroundColor: "#fff",
              borderRadius: "5px",
              width: "90%",
              height: "80%",
              marginTop: "4rem",
              marginLeft: "auto",
              marginRight: "auto",
              top: 0,
              pointerEvents: previewOpen ? "auto" : "none",
              opacity: previewOpen ? 1 : 0,
              transform: previewOpen ? "translateY(0)" : "translateY(-30px)",
              transition: "opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1), transform 1.2s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            {/* v2-preview-list — video grid overlay */}
            <div
              className="absolute grid"
              style={{
                top: 0,
                left: 0,
                right: 0,
                bottom: "3rem",
                gridTemplateRows: "1fr",
                gridTemplateColumns: "1fr",
              }}
            >
              <div
                className="flex justify-center items-center overflow-hidden"
                style={{
                  gridArea: "1 / 1 / 2 / 2",
                  opacity: hoveredVideoUrl ? 1 : 0,
                  transition: "opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                {hoveredVideoUrl && (
                  <video
                    key={hoveredVideoUrl}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="object-cover"
                    style={{
                      width: "80%",
                      height: "85%",
                      borderRadius: "5px",
                    }}
                  >
                    <source src={hoveredVideoUrl} type="video/mp4" />
                  </video>
                )}
              </div>
            </div>

            {/* v2-preview-text-wrapper — hint/name at bottom */}
            <div
              className="relative w-full shrink-0"
              style={{ padding: "0.5rem 0.5rem 1rem 2rem" }}
            >
              <div
                className="w-full mb-2"
                style={{ height: "1px", backgroundColor: "#e5e5e5" }}
              />
              <span className="text-xs font-medium text-[color:var(--color-muted)]">
                {hoveredName
                  ? hoveredName.toLowerCase()
                  : "Passez la souris au-dessus pour voir le projet"}
              </span>
            </div>
          </div>

          {/* ===== Bottom "Aperçu" button — visible when card is closed ===== */}
          <button
            onClick={() => setPreviewOpen(true)}
            className="hidden md:flex absolute z-20 items-center justify-center text-sm font-medium cursor-pointer hover:-translate-y-[5px] transition-transform"
            style={{
              backgroundImage: "linear-gradient(#c4c4c4, #f3f2f0)",
              borderRadius: "5px",
              width: "5rem",
              height: "2rem",
              bottom: "1.5rem",
              left: "3rem",
              border: "none",
              opacity: previewOpen ? 0 : 1,
              pointerEvents: previewOpen ? "none" : "auto",
              transition: "opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1), transform 1.2s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            Aperçu
          </button>
        </>
      ) : (
        <>
          {/* ===== STUDIO MODE: original teasing card ===== */}
          <div
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
              opacity: previewOpen ? 1 : 0,
              transform: previewOpen ? "translateY(0)" : "translateY(-20px)",
              transition: "opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1), transform 1.2s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            <div
              className="flex items-center w-full px-2"
              style={{ height: "6vh" }}
            >
              <div className="flex items-center justify-between w-full h-full relative">
                <span
                  className="text-base font-semibold cursor-pointer"
                  style={{
                    padding: "0.4rem 0.6rem",
                    borderRadius: "5px",
                    backgroundColor: headerHovered ? "rgba(0,0,0,0.14)" : "transparent",
                    transition: "background-color 1.2s cubic-bezier(0.4, 0, 0.2, 1)",
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
                  <span
                    className="rounded-full"
                    style={{ width: 12, height: 12, backgroundColor: "#c4c4c4" }}
                  />
                </div>
              </div>
            </div>

            <div style={{ height: "18.7rem", padding: "0 0.5rem 0.5rem" }}>
              <div
                className="w-full h-full"
                style={{ borderRadius: "5px", overflow: "clip" }}
              >
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                >
                  <source
                    src="https://res.cloudinary.com/daehyxast/video/upload/v1773019481/screen_projects_at6p0o.mov"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </div>

          {/* Toggle button */}
          <button
            onClick={() => setPreviewOpen((v) => !v)}
            className="hidden md:flex absolute z-20 items-center justify-center text-sm font-medium cursor-pointer hover:-translate-y-[5px] transition-transform"
            style={{
              backgroundImage: "linear-gradient(#c4c4c4, #f3f2f0)",
              borderRadius: "5px",
              width: "5rem",
              height: "2rem",
              bottom: "1.5rem",
              left: "6.5rem",
              border: "none",
            }}
          >
            {previewOpen ? "Fermé" : "Aperçu"}
          </button>
        </>
      )}

      {/* ===== CONTACT CARD — rotated 90° (desktop only) ===== */}
      <div
        className="hidden md:block absolute z-10"
        style={{
          width: "11.5rem",
          height: "9.5vh",
          right: "-3.8rem",
          bottom: "14.5rem",
          transform: "rotate(90deg)",
          backgroundColor: "#fff",
          borderRadius: "0 0 5px 5px",
          opacity: isProjectsMode && previewOpen ? 0 : 1,
          pointerEvents: isProjectsMode && previewOpen ? "none" : "auto",
          transition: "opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div className="flex flex-col w-full h-full">
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
          <div className="flex items-center justify-between gap-1 px-2" style={{ height: "50%" }}>
            <a
              href="mailto:hello@julesstudio.fr"
              className="text-[10px] font-medium px-2 py-1 rounded-[5px] transition-opacity hover:opacity-70"
              style={{ backgroundImage: "linear-gradient(#c4c4c4, #f3f2f0)" }}
            >
              Mail
            </a>
            <a
              href="https://www.instagram.com/julesstudio.fr"
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
  );
}
