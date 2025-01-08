import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Create the middleware
const intlMiddleware = createMiddleware({
  locales: ["en", "el"],
  defaultLocale: "el",
  localePrefix: "always",
});

// Wrap the middleware to extract locale
export default function middleware(request: NextRequest) {
  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)", "/"],
};
