import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import CandleSection from "@/components/CandleSection";
import TwintTip from "@/components/TwintTip";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Logo from "@/components/Logo";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <header className="sticky top-0 z-40 flex items-center justify-between px-6 py-4 sm:px-10">
        <Logo />
        <LanguageSwitcher />
      </header>
      <main>
        <Hero />
        <Story />
        <CandleSection />
        <TwintTip />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
