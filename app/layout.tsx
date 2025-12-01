"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { createContext } from "react";
import useToggleLanguage from "@/others/useToggleLanguage";
import { TContext } from "@/others/types";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
  return (
    <html lang="en">
      <body>
        <GlobalContext value={value}>{children}</GlobalContext>
      </body>
    </html>
  );
}
