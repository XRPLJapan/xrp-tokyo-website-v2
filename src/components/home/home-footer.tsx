"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { LinkedInLogoIcon, XLogoIcon } from "@/components/icons/social";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import { SOCIAL_LINKS } from "@/lib/constants";
import { BRAND_STYLES } from "@/lib/styles/common";
import { cn } from "@/lib/utils";

export function HomeFooter() {
  const t = useTranslations();
  const isAtBottom = useScrollPosition(0.95);

  return (
    <footer
      className={cn(
        "relative bg-black text-white pb-20 md:pb-0",
        BRAND_STYLES.footerBorder,
        BRAND_STYLES.footerShadow,
      )}
    >
      <div
        className={cn(
          "absolute top-0 left-0 right-0 h-px",
          BRAND_STYLES.accentGradient,
          BRAND_STYLES.footerGlow,
        )}
        aria-hidden="true"
      />
      <div
        className="transition-all ease-linear flex flex-col items-center justify-center py-12 px-4 text-center gap-6"
        style={{
          transform: `translateY(${isAtBottom ? 16 : 80}px)`,
        }}
      >
        <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
          <Image
            src="/logo-dark.svg"
            alt="XRP Tokyo 2026"
            width={140}
            height={24}
            className="h-6 w-auto"
            style={{ width: "auto", height: "auto" }}
            priority
          />
        </div>

        <div className="flex items-center gap-3">
          <a
            href={SOCIAL_LINKS.x}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-sm bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="X (Twitter) でフォロー"
          >
            <XLogoIcon className="text-white" />
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-sm bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="LinkedIn でフォロー"
          >
            <LinkedInLogoIcon className="text-white" />
          </a>
        </div>
      </div>

      <div className="pb-6 text-center text-gray-500 text-xs">
        {t("footer.copyright")}
      </div>
    </footer>
  );
}
