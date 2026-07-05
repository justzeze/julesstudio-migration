import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "white",
          }}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
