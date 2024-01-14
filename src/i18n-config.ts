export const i18n = {
  defaultLocale: "en",
  locales: ["en", "pt-BR"],
  mapLocales: {
    pt: "pt-BR",
  },
};

export type Locale = (typeof i18n)["locales"][number];
