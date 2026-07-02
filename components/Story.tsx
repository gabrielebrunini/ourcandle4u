import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Story() {
  const t = useTranslations("story");

  return (
    <section id="story" className="px-6 py-16 sm:px-10">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-6 text-center text-3xl font-extrabold text-charcoal">
          {t("title")}
        </h2>

        <div className="relative mx-auto mb-8 aspect-[3/4] max-w-xs overflow-hidden rounded-3xl border-4 border-mint/40 bg-cream shadow-lg">
          <Image
            src="/images/couple-travel.png"
            alt={t("altTravel")}
            fill
            className="object-contain object-center"
            sizes="(max-width: 768px) 80vw, 320px"
          />
        </div>

        <div className="space-y-5 rounded-3xl bg-white p-8 shadow-md">
          <p className="text-lg leading-relaxed text-charcoal/80">
            {t("paragraph1")}
          </p>
          <div className="rounded-2xl bg-mint/20 px-5 py-4">
            <p className="text-lg leading-relaxed font-medium text-charcoal/85">
              {t("paragraph2")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
