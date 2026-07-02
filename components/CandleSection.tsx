import { useTranslations } from "next-intl";
import Image from "next/image";

export default function CandleSection() {
  const t = useTranslations("candle");

  return (
    <section className="px-6 py-16 sm:px-10">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-8 text-center text-3xl font-extrabold text-charcoal">
          {t("title")}
        </h2>
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="relative aspect-square overflow-hidden rounded-3xl border-4 border-yellow/60 shadow-lg">
            <Image
              src="/images/candle.png"
              alt={t("altCandle")}
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-4">
            <p className="text-lg leading-relaxed text-charcoal/80">
              {t("description")}
            </p>
            <p className="rounded-2xl bg-yellow/25 px-5 py-4 text-base font-semibold text-charcoal">
              {t("colorsNote")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
