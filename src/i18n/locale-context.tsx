"use client";

import { createContext, useContext } from "react";
import type { Locale } from "./config";

const LocaleContext = createContext<Locale>("fr");

export const LocaleProvider = ({ children, value }: { children: React.ReactNode; value: Locale }) => (
  <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
);

export const useLocale = () => useContext(LocaleContext);
