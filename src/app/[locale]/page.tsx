import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({ locale, path: "/" });
}

// HomeHero is rendered persistently in the layout (PersistentHome)
// so it never unmounts and the video stays loaded across navigations.
export default function Home() {
  return null;
}
