import { cookies } from "next/headers";
import type { Locale } from "@/lib/constants";
import { isValidLocale, LOCALE_COOKIE_NAME } from "@/lib/locale";

const DEFAULT_LOCALE: Locale = "ja";

/** Server-side: read locale from cookie (shared by layout & next-intl) */
export async function getServerLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const value = cookieStore.get(LOCALE_COOKIE_NAME)?.value;
  return isValidLocale(value) ? value : DEFAULT_LOCALE;
}
