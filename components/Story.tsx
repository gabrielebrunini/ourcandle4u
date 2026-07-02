import { useTranslations } from "next-intl";

export default function Story() {
  const t = useTranslations("story");

  return (
    <section id="story" className="px-6 py-16 sm:px-10">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-6 text-center text-3xl font-extrabold text-charcoal">
          {t("title")}
        </h2>
        <div className="space-y-5 rounded-3xl bg-white p-8 shadow-md">
          <p className="text-lg leading-relaxed text-charcoal/80">
            {t("paragraph1")}
          </p>
          <p className="text-lg leading-relaxed text-charcoal/80">
            {t("paragraph2")}
          </p>
          <p className="rounded-2xl bg-mint/20 px-5 py-4 text-base font-medium text-charcoal/85">
            {t("paragraph3")}
          </p>
        </div>
      </div>
    </section>
  );
}
