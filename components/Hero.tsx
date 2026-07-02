"use client";

import { useTranslations } from "next-intl";
import LivePhoto from "./LivePhoto";

export default function Hero() {
  const t = useTranslations("hero");

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden px-6 pb-16 pt-10 sm:px-10 sm:pt-16">
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-mint/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-yellow/50 blur-3xl" />

      <div className="relative mx-auto max-w-3xl text-center">
        <span className="mb-4 inline-block rounded-full bg-coral/15 px-4 py-1.5 text-sm font-semibold text-coral">
          {t("badge")}
        </span>
        <h1 className="mb-4 text-4xl font-extrabold leading-tight tracking-tight text-charcoal sm:text-5xl">
          {t("title")}
        </h1>
        <p className="mx-auto mb-8 max-w-xl text-lg text-charcoal/75 sm:text-xl">
          {t("subtitle")}
        </p>

        <div className="relative mx-auto mb-10 aspect-[4/3] max-w-md overflow-hidden rounded-3xl border-4 border-white shadow-xl">
          <LivePhoto
            baseName="couple-lake"
            alt={t("altHosts")}
            className="absolute inset-0 h-full w-full object-cover"
            priority
          />
        </div>

        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => scrollTo("story")}
            className="w-full rounded-full border-2 border-charcoal/20 bg-white px-8 py-3.5 text-base font-bold text-charcoal transition hover:border-coral hover:text-coral sm:w-auto"
          >
            {t("ctaStory")}
          </button>
          <button
            type="button"
            onClick={() => scrollTo("twint")}
            className="w-full rounded-full bg-coral px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-coral/30 transition hover:bg-coral-dark sm:w-auto"
          >
            {t("ctaTwint")}
          </button>
        </div>
      </div>
    </section>
  );
}
