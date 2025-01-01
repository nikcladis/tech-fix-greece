import { getRequestConfig } from "next-intl/server";

const locales = ["en", "el"];

export default getRequestConfig(async () => {
  return {
    locale: locales[0],
    messages: (await import(`../messages/${locales[0]}.json`)).default,
    defaultLocale: locales[0],
    locales,
  };
});
