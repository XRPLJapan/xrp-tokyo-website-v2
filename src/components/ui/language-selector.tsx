"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/animate-ui/components/radix/dropdown-menu";
import { LOCALES, type Locale } from "@/lib/constants";
import {
  getClientLocaleCookie,
  resolveClientLocale,
  setClientLocaleCookie,
} from "@/lib/locale";
import { cn } from "@/lib/utils";

type LanguageSelectorProps = {
  className?: string;
};

export function LanguageSelector({ className }: LanguageSelectorProps) {
  const t = useTranslations();
  const [currentLocale, setCurrentLocale] = useState<Locale>("ja");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const cookieLocale = getClientLocaleCookie();
    if (cookieLocale) {
      setCurrentLocale(cookieLocale);
    } else {
      const savedLocale = resolveClientLocale();
      if (savedLocale) {
        setCurrentLocale(savedLocale);
        setClientLocaleCookie(savedLocale);
      }
    }

    setMounted(true);
  }, []);

  const handleLocaleChange = (locale: Locale) => {
    setCurrentLocale(locale);
    localStorage.setItem("locale", locale);
    setClientLocaleCookie(locale);
    window.location.reload();
  };

  const triggerClassName = cn(
    "flex items-center justify-center rounded-md p-2 text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
    className,
  );

  if (!mounted) {
    return (
      <button
        type="button"
        className={triggerClassName}
        aria-label={t("header.selectLanguage")}
        disabled
      >
        <Globe className="size-5" />
      </button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className={triggerClassName}
          aria-label={t("header.selectLanguage")}
        >
          <Globe className="size-5" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {LOCALES.map((locale) => (
          <DropdownMenuItem
            key={locale.code}
            onClick={() => handleLocaleChange(locale.code)}
            className={currentLocale === locale.code ? "bg-accent" : ""}
          >
            {locale.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
