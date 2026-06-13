import { LOCALES, type Locale } from "@/lib/constants";

export const LOCALE_COOKIE_NAME = "locale";
export const LOCALE_COOKIE_MAX_AGE = 31536000; // 1 year

export function isValidLocale(value: string | null | undefined): value is Locale {
  return value !== null && value !== undefined && LOCALES.some((l) => l.code === value);
}

/** Client-side: read locale cookie */
export function getClientLocaleCookie(): Locale | null {
  if (typeof document === "undefined") return null;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${LOCALE_COOKIE_NAME}=`);
  if (parts.length !== 2) return null;
  const cookie = parts.pop()?.split(";").shift() ?? null;
  return isValidLocale(cookie) ? cookie : null;
}

/** Client-side: persist locale to cookie */
export function setClientLocaleCookie(locale: Locale): void {
  document.cookie = `${LOCALE_COOKIE_NAME}=${locale}; path=/; max-age=${LOCALE_COOKIE_MAX_AGE}`;
}

/** Client-side: resolve locale from cookie or localStorage */
export function resolveClientLocale(): Locale | null {
  const fromCookie = getClientLocaleCookie();
  if (fromCookie) return fromCookie;

  const fromStorage = localStorage.getItem(LOCALE_COOKIE_NAME);
  return isValidLocale(fromStorage) ? fromStorage : null;
}
