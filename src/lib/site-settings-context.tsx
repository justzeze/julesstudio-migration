"use client";

import { createContext, useContext } from "react";

export interface SiteSettings {
  email: string;
  instagramUrl: string;
  youtubeUrl: string;
  tagline: string;
  copyright: string;
  heroVideoUrl: string;
  heroVideoPoster?: string;
  teasingVideoUrl: string;
}

const defaults: SiteSettings = {
  email: "hello@julesstudio.fr",
  instagramUrl: "https://www.instagram.com/julesstudio.fr",
  youtubeUrl: "https://youtube.com/@julesstudioyt",
  tagline: "#CREATEAMAZINGEVERYWHEREANYTIME",
  copyright: "2026 JULESSTUDIO",
  heroVideoUrl: "https://iframe.mediadelivery.net/embed/651531/684150da-f1fd-4cb8-8e2a-09e245ab1ff8?autoplay=true&loop=true&muted=true&preload=true&responsive=false",
  heroVideoPoster: "https://cdn.sanity.io/images/088jc00v/production/511a9b60ad321292f56d55ec70bf165e8ea33d8f-446x325.png",
  teasingVideoUrl: "https://iframe.mediadelivery.net/embed/651531/f89ec9ee-33ab-4cf3-b63e-4402483c0aab?autoplay=true&loop=true&muted=true&preload=true&responsive=false&showControls=false&poster=false",
};

const SiteSettingsContext = createContext<SiteSettings>(defaults);

export function SiteSettingsProvider({
  value,
  children,
}: {
  value: SiteSettings | null;
  children: React.ReactNode;
}) {
  return (
    <SiteSettingsContext.Provider value={value || defaults}>
      {children}
    </SiteSettingsContext.Provider>
  );
}

export function useSiteSettings() {
  return useContext(SiteSettingsContext);
}
