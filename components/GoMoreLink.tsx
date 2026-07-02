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
      <span className="mb-1 text-2xl" aria-hidden="true">
        🚗
      </span>
      <span className="text-lg font-bold">{t("gomore")}</span>
      <span className="mt-1 text-sm text-charcoal/75">{t("gomoreHint")}</span>
    </a>
  );
}
