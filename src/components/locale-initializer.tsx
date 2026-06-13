"use client";

import { useEffect } from "react";
import { LOCALES, type Locale } from "@/lib/constants";
import {
  getClientLocaleCookie,
  isValidLocale,
  resolveClientLocale,
  setClientLocaleCookie,
} from "@/lib/locale";

/**
 * 初回訪問時に cookie がない場合、確実に日本語の cookie を設定するコンポーネント
 */
export function LocaleInitializer() {
  useEffect(() => {
    const cookieLocale = getClientLocaleCookie();
    const savedLocale = resolveClientLocale();

    if (!cookieLocale && !savedLocale) {
      const defaultLocale: Locale = "ja";
      localStorage.setItem("locale", defaultLocale);
      setClientLocaleCookie(defaultLocale);
      return;
    }

    if (cookieLocale && !localStorage.getItem("locale")) {
      localStorage.setItem("locale", cookieLocale);
      return;
    }

    if (savedLocale && !cookieLocale) {
      setClientLocaleCookie(savedLocale);
      window.location.reload();
      return;
    }

    if (
      cookieLocale &&
      savedLocale &&
      cookieLocale !== savedLocale &&
      isValidLocale(cookieLocale)
    ) {
      localStorage.setItem("locale", cookieLocale);
    }
  }, []);

  return null;
}
