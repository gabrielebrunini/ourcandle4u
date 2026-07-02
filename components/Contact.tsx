import { useTranslations } from "next-intl";

const WHATSAPP_URL = "https://wa.me/41772593546";
const GOMORE_APP_URL = "https://gomore.ch/app";

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="px-6 py-16 sm:px-10">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-4 text-3xl font-extrabold text-charcoal">
          {t("title")}
        </h2>
        <p className="mb-8 text-lg text-charcoal/75">{t("description")}</p>

        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 flex-col items-center rounded-3xl bg-[#25D366] px-6 py-5 text-white shadow-md transition hover:scale-[1.02] hover:shadow-lg sm:max-w-xs"
          >
            <span className="mb-1 text-2xl" aria-hidden="true">
              💬
            </span>
            <span className="text-lg font-bold">{t("whatsapp")}</span>
            <span className="mt-1 text-sm text-white/85">{t("whatsappHint")}</span>
          </a>

          <a
            href={GOMORE_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 flex-col items-center rounded-3xl bg-charcoal px-6 py-5 text-white shadow-md transition hover:scale-[1.02] hover:shadow-lg sm:max-w-xs"
          >
            <span className="mb-1 text-2xl" aria-hidden="true">
              🚗
            </span>
            <span className="text-lg font-bold">{t("gomore")}</span>
            <span className="mt-1 text-sm text-white/85">{t("gomoreHint")}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
