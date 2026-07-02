"use client";

import { useLocale } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";

const localeLabels: Record<Locale, string> = {
  en: "EN",
  de: "DE",
  it: "IT",
};

export default function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-1 rounded-full bg-white/80 p-1 shadow-sm backdrop-blur-sm">
      {routing.locales.map((loc) => (
        <Link
          key={loc}
          href={pathname}
          locale={loc}
          className={`rounded-full px-3 py-1 text-sm font-semibold transition-colors ${
            locale === loc
              ? "bg-coral text-white"
              : "text-charcoal/70 hover:text-charcoal"
          }`}
        >
          {localeLabels[loc]}
        </Link>
      ))}
    </div>
  );
}
