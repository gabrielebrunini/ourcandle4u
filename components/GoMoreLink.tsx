"use client";

import { useTranslations } from "next-intl";

const GOMORE_UNIVERSAL_LINK = "https://gomore.ch/accounts/rentals";
const GOMORE_ANDROID_INTENT =
  "intent://gomore.ch/accounts/rentals#Intent;scheme=https;package=dk.gomore;end";

function getGoMoreHref(): string {
  if (/Android/i.test(navigator.userAgent)) {
    return GOMORE_ANDROID_INTENT;
  }
  return GOMORE_UNIVERSAL_LINK;
}

export default function GoMoreLink() {
  const t = useTranslations("contact");

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.location.assign(getGoMoreHref());
  };

  return (
    <a
      href={GOMORE_UNIVERSAL_LINK}
      onClick={handleClick}
      className="flex flex-1 flex-col items-center rounded-3xl bg-gomore px-6 py-5 text-charcoal shadow-md transition hover:scale-[1.02] hover:bg-gomore-dark hover:shadow-lg sm:max-w-xs"
    >
      <span className="mb-3 text-2xl" aria-hidden="true">
        🚗
      </span>
      <span className="rounded-full bg-white px-6 py-2.5 text-base font-bold text-charcoal shadow-sm">
        {t("gomore")}
      </span>
      <span className="mt-3 text-sm text-charcoal/80">{t("gomoreHint")}</span>
    </a>
  );
}
