"use client";

import { useState, useCallback } from "react";
import { createPortal } from "react-dom";

const CAL_EMBED_URL =
  "https://cal.com/julesstudio/appel-decouverte?embed=true&layout=month_view";

interface CalButtonProps {
  children: React.ReactNode;
  variant: "link" | "button";
}

export function CalButton({ children, variant }: CalButtonProps) {
  const [open, setOpen] = useState(false);

  if (variant === "link") {
    return (
      <>
        <button
          onClick={() => setOpen(true)}
          className="link-hover text-[color:var(--color-foreground)] font-medium underline cursor-pointer bg-transparent border-none py-2 text-sm"
        >
          {children}
        </button>
        {open && <CalModal onClose={() => setOpen(false)} />}
      </>
    );
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-block text-sm font-medium cursor-pointer text-[color:var(--color-foreground)] bg-transparent"
        style={{
          border: "1px solid var(--color-foreground)",
          borderRadius: "5px",
          padding: "0.75rem 1.5rem",
        }}
      >
        {children}
      </button>
      {open && <CalModal onClose={() => setOpen(false)} />}
    </>
  );
}

function CalModal({ onClose }: { onClose: () => void }) {
  const [closing, setClosing] = useState(false);

  const handleClose = useCallback(() => {
    setClosing(true);
  }, []);

  const handleAnimationEnd = useCallback(() => {
    if (closing) {
      onClose();
    }
  }, [closing, onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ padding: "2rem" }}
    >
      {/* Overlay with backdrop blur */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          animation: closing
            ? "fade-out 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards"
            : "fade-in 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        }}
        onClick={handleClose}
      />

      {/* Modal */}
      <div
        className="relative z-10 w-full"
        style={{
          maxWidth: "900px",
          height: "85vh",
          maxHeight: "700px",
          backgroundColor: "#1a1a1a",
          borderRadius: "12px",
          overflow: "hidden",
          animation: closing
            ? "slide-down-to-bottom 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards"
            : "slide-up-from-bottom 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        }}
        onAnimationEnd={handleAnimationEnd}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 flex items-center justify-center cursor-pointer bg-transparent border-none"
          style={{ width: "32px", height: "32px" }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Cal.com iframe */}
        <iframe
          src={CAL_EMBED_URL}
          title="Réserver un appel découverte"
          className="w-full h-full border-0"
          allow="payment"
          style={{ colorScheme: "dark" }}
        />
      </div>
    </div>,
    document.body
  );
}
