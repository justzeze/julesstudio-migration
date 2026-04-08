"use client";

/**
 * Panneau vidéo background (Webflow class: v2-right-panel / Background Video)
 *
 * Présent sur toutes les pages sauf la Home (qui a son propre hero fullscreen).
 * Affiche la vidéo en boucle dans un panneau fixe à droite sur desktop.
 */

export function BackgroundVideoPanel() {
  return (
    <div className="hidden md:block fixed top-0 right-0 w-1/2 h-screen z-0">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="w-full h-full object-cover"
        poster="https://cdn.prod.website-files.com/6983a7c2decf98d1d77ad954/69ab6985047d28d4eecfa2d6_Capture%20d%E2%80%99e%CC%81cran%202025-09-27%20a%CC%80%203.06.01%E2%80%AFPM.png"
      >
        <source
          src="https://s3.amazonaws.com/webflow-prod-assets/697be174b8224c11c814a60e/697c72ff2f64b42254f72b34_best%20bg%20video%20V2.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}
