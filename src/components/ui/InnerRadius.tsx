/**
 * Inner Radius — concave corner effect (madebynull technique)
 *
 * Usage:
 *   <InnerRadius className="bg-beige rounded-xl p-8">
 *     content here
 *   </InnerRadius>
 *
 * The 4 concave corners are drawn with clip-path polygons on
 * ::before, ::after, and two <span> elements.
 * --corner-bg controls the corner color (defaults to white).
 */

interface InnerRadiusProps {
  children: React.ReactNode;
  className?: string;
  cornerBg?: string;
  as?: keyof HTMLElementTagNameMap;
}

export function InnerRadius({
  children,
  className = "",
  cornerBg = "#ffffff",
  as: Tag = "div" as keyof HTMLElementTagNameMap,
}: InnerRadiusProps) {
  const Component = Tag as React.ElementType;

  return (
    <Component
      className={`inner-radius ${className}`}
      style={{ "--corner-bg": cornerBg } as React.CSSProperties}
    >
      <span className="corner-bl" aria-hidden />
      <span className="corner-br" aria-hidden />
      {children}
    </Component>
  );
}
