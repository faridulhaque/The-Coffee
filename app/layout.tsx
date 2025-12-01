"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { createContext, useEffect } from "react";
import useToggleLanguage from "@/others/useToggleLanguage";
import { TContext } from "@/others/types";
import AOS from "aos";
import "aos/dist/aos.css";

export const GlobalContext = createContext<TContext>({} as TContext);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const toggleLanguageData = useToggleLanguage();

  const value = {
    language: toggleLanguageData.language,
    toggleLanguage: toggleLanguageData.toggleLanguage,
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <html lang="en">
      <body>
        <GlobalContext value={value}>{children}</GlobalContext>
      </body>
    </html>
  );
}
