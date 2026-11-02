import type { Metadata } from "next";
import HomeContent from "@/components/home-content";
import { getTranslations } from "@/lib/lance-link-i18n";

const t = getTranslations("rw");
export const metadata: Metadata = {
  title: t.seo.title,
  description: t.seo.description,
  alternates: { canonical: "/rw", languages: { en: "/", rw: "/rw" } },
};
export default function KinyarwandaHome() {
  return <HomeContent language="rw" />;
}
