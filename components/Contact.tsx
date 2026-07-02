import { useTranslations } from "next-intl";
import Image from "next/image";
import GoMoreLink from "./GoMoreLink";

const WHATSAPP_URL = "https://wa.me/41772593546";

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="px-6 py-16 sm:px-10">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-4 text-3xl font-extrabold text-charcoal">
          {t("title")}
        </h2>
        <p className="mb-8 text-lg text-charcoal/75">{t("description")}</p>

        <div className="mx-auto mb-8 max-w-sm overflow-hidden rounded-3xl border-4 border-mint/40 bg-white shadow-lg">
          <div className="relative aspect-[3/4] w-full">
            <Image
              src="/images/candle-colors.png"
              alt={t("altColors")}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 672px"
            />
          </div>
          <p className="px-5 py-4 text-sm font-medium text-charcoal/70">
            {t("colorsCaption")}
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 flex-col items-center rounded-3xl bg-[#25D366] px-6 py-5 text-white shadow-md transition hover:scale-[1.02] hover:shadow-lg sm:max-w-xs"
          >
            <span className="mb-3 text-2xl" aria-hidden="true">
              💬
            </span>
            <span className="rounded-full bg-white px-6 py-2.5 text-base font-bold text-charcoal shadow-sm">
              {t("whatsapp")}
            </span>
            <span className="mt-3 text-sm text-white/90">{t("whatsappHint")}</span>
          </a>

          <GoMoreLink />
        </div>
      </div>
    </section>
  );
}
