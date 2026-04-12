"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export function HomeGallery() {
  return (
    <section className="px-6 md:px-10 py-20">
      {/* Section header */}
      <div className="flex items-end justify-between mb-12">
        <div>
          <p className="text-xs font-medium tracking-widest text-[color:var(--color-muted)] uppercase mb-2">
            Chaque projet ci-dessous a été conçu avec un seul objectif : générer
            des résultats mesurables.
          </p>
        </div>
        <Link
          href="/tous-les-projets"
          className="link-hover text-xs font-medium tracking-widest text-[color:var(--color-muted)] hover:text-[color:var(--color-foreground)] transition-colors"
        >
          Tous les projets
        </Link>
      </div>

      {/* Project preview — will be dynamic with Sanity */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
      >
        <Link href="/gallerie-projets/justzeze" className="group block">
          <div className="relative overflow-hidden rounded-lg bg-[color:var(--color-beige)] hover:bg-white" style={{ transition: "background-color 1.2s cubic-bezier(0.4, 0, 0.2, 1)" }}>
            <div className="flex flex-col md:flex-row gap-6 p-6">
              {/* Thumbnail */}
              <div className="relative w-full md:w-20 h-20 rounded overflow-hidden flex-shrink-0">
                <Image
                  src="https://cdn.prod.website-files.com/6983a7c2decf98d1d77ad954/69ab6985047d28d4eecfa2d6_Capture%20d%E2%80%99e%CC%81cran%202025-09-27%20a%CC%80%203.06.01%E2%80%AFPM.png"
                  alt="Justzeze"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Info */}
              <div className="flex-1">
                <h3 className="font-[family-name:var(--font-merriweather)] text-xl font-bold">
                  Justzeze
                </h3>
                <p className="mt-1 text-xs text-[color:var(--color-muted)]">
                  Design, Intégration Webflow, Design Système
                </p>
              </div>

              {/* Number */}
              <div className="flex items-center">
                <span className="text-xs font-medium text-[color:var(--color-muted)]">
                  1
                </span>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>

      {/* Hint text */}
      <p className="mt-6 text-xs text-[color:var(--color-muted)] text-right">
        Passez la souris au-dessus pour voir le projet
      </p>
    </section>
  );
}
