import { NextRequest, NextResponse } from "next/server";
import { i18n } from "./i18n-config";
import Negotiator from "negotiator";
import { match as matchLocale } from "@formatjs/intl-localematcher";

function getLocale(request: NextRequest): string | undefined {
  const negotiatorHeaders: Record<string, string> = {};

  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const locales: string[] = i18n.locales;

  let languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales
  );

  const locale = matchLocale(languages, locales, i18n.defaultLocale);
  return locale;
}

function redirectWithLocale(request: NextRequest, locale?: string) {
  if (!locale) {
    locale = getLocale(request);
  }
  const { pathname, search } = request.nextUrl;
  return NextResponse.redirect(
    new URL(
      `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}${search}`,
      request.url
    )
  );
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  const isMappedLocale = Object.keys(i18n.mapLocales).includes(
    pathname.split("/")[1]
  );

  if (isMappedLocale) {
    const [_, oldLocale] = pathname.split("/");
    const locale = i18n.mapLocales[pathname.split("/")[1]];
    // remove the mapped locale from the pathname
    request.nextUrl.pathname = pathname.replace(`/${oldLocale}`, "");
    // Redirect if locale is mapped
    return redirectWithLocale(request, locale);
  }

  if (pathnameIsMissingLocale) {
    // Redirect if locale is missing
    return redirectWithLocale(request);
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!api|static|.*\\..*|_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
