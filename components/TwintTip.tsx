"use client";

import { useState, useCallback } from "react";
import { useTranslations } from "next-intl";

const PHONE_DISPLAY = "+41 77 259 35 46";

export default function TwintTip() {
  const t = useTranslations("twint");
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyPhone = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(PHONE_DISPLAY);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard may be unavailable */
    }
  }, []);

  const openModal = useCallback(() => {
    setOpen(true);
  }, []);

  const openTwintApp = useCallback(() => {
    window.location.href = "twint://";
  }, []);

  return (
    <section id="twint" className="px-6 py-16 sm:px-10">
      <div className="mx-auto max-w-2xl">
        <div className="rounded-3xl bg-gradient-to-br from-coral to-coral-dark p-8 text-center text-white shadow-xl sm:p-10">
          <h2 className="mb-3 text-3xl font-extrabold">{t("title")}</h2>
          <p className="mb-8 text-lg text-white/90">{t("description")}</p>
          <button
            type="button"
            onClick={openModal}
            aria-label={t("buttonAria")}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-charcoal shadow-lg transition hover:scale-105 hover:shadow-xl"
          >
            {t("button")}
          </button>
        </div>

        {open && (
          <div
            className="fixed inset-0 z-50 flex items-end justify-center bg-charcoal/50 p-4 sm:items-center"
            role="dialog"
            aria-modal="true"
            aria-labelledby="twint-modal-title"
            onClick={() => setOpen(false)}
            onKeyDown={(e) => e.key === "Escape" && setOpen(false)}
          >
            <div
              className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl sm:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <h3
                id="twint-modal-title"
                className="mb-4 text-center text-xl font-extrabold text-charcoal"
              >
                {t("button")}
              </h3>
              <ol className="mb-6 space-y-3 text-charcoal/80">
                <li className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-mint text-sm font-bold text-charcoal">
                    1
                  </span>
                  {t("step1")}
                </li>
                <li className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-mint text-sm font-bold text-charcoal">
                    2
                  </span>
                  {t("step2")}
                </li>
                <li className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-mint text-sm font-bold text-charcoal">
                    3
                  </span>
                  {t("step3")}
                </li>
              </ol>

              <div className="mb-4 rounded-2xl bg-cream p-4">
                <p className="mb-1 text-sm font-medium text-charcoal/60">
                  {t("phoneLabel")}
                </p>
                <p className="text-2xl font-bold tracking-wide text-charcoal">
                  {PHONE_DISPLAY}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={copyPhone}
                  className="flex-1 rounded-full bg-mint px-6 py-3 font-bold text-charcoal transition hover:bg-mint-dark"
                >
                  {copied ? t("copied") : t("copy")}
                </button>
                <button
                  type="button"
                  onClick={openTwintApp}
                  className="flex-1 rounded-full bg-coral px-6 py-3 font-bold text-white transition hover:bg-coral-dark"
                >
                  {t("openApp")}
                </button>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="mt-4 w-full py-2 text-sm font-semibold text-charcoal/60 hover:text-charcoal"
              >
                {t("close")}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
