import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-charcoal/10 px-6 py-10 sm:px-10">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <p className="text-sm font-medium text-charcoal/60">{t("tagline")}</p>
        <p className="text-lg font-bold text-coral">{t("domain")}</p>
      </div>
    </footer>
  );
}
