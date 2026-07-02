import { useTranslations } from "next-intl";

const PHONE_NUMBER = "+41772593546";

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="px-6 py-16 sm:px-10">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-4 text-3xl font-extrabold text-charcoal">
          {t("title")}
        </h2>
        <p className="mb-8 text-lg text-charcoal/75">{t("description")}</p>

        <div className="space-y-4 rounded-3xl bg-white p-8 shadow-md">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-charcoal/50">
              {t("phone")}
            </p>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="text-2xl font-bold text-coral transition hover:text-coral-dark"
            >
              {t("phoneNumber")}
            </a>
          </div>
          <div className="border-t border-charcoal/10 pt-4">
            <p className="text-base text-charcoal/75">{t("gomore")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
