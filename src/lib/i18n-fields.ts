/** Pick a locale-aware string from en/ja field pair */
export function pickLocalizedString(
  locale: string,
  en: string | undefined,
  ja: string | undefined,
): string {
  if (locale === "ja" && ja) return ja;
  return en ?? "";
}
