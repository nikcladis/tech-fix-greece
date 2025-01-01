import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "el"],

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: "el",

  // Add this to handle the root path
  localePrefix: "always",
});

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
