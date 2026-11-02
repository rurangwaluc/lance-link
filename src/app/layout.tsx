import type { Metadata } from "next";
import { headers } from "next/headers";
import type { Language } from "@/lib/lance-link-i18n";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lance Link | Engineering & Architecture",
  description: "Architectural design, engineering, project supervision, and renovation services from Lance Link.",
  metadataBase: new URL("https://lancelink.site"),
  alternates: { canonical: "/", languages: { en: "/", rw: "/rw" } },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const language: Language = (await headers()).get("x-lance-language") === "rw" ? "rw" : "en";
  return (
    <html lang={language}>
      <body>
        <SiteHeader language={language} />
        {children}
        <SiteFooter language={language} />
      </body>
    </html>
  );
}
