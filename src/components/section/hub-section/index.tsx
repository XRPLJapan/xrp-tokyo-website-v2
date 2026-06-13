"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { HubImageFrame } from "@/components/layout/hub-image-frame";
import { EVENT_INFO } from "@/lib/constants";
import { BRAND_STYLES, SECTION_STYLES, VIP_STYLES } from "@/lib/styles/common";
import { cn } from "@/lib/utils";

type HubSectionProps = {
  variant?: "textLeft" | "imageLeft";
};

const STATS = [
  { value: "3,000+", labelKey: "hubSection.stats.attendees" },
  { value: "20+", labelKey: "hubSection.stats.sessions" },
  { value: "30+", labelKey: "hubSection.stats.sponsors" },
];

function HubImages() {
  return (
    <div className="relative">
      <div className="grid grid-cols-2 lg:grid-cols-[1.1fr_1fr] grid-rows-2 gap-4">
        <div className="col-span-2">
          <HubImageFrame aspect="aspect-[16/9]">
            <Image
              src="/hub1.png"
              alt="Conference hall"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
            />
          </HubImageFrame>
        </div>

        <HubImageFrame aspect="aspect-[4/3]">
          <Image
            src="/hub2.png"
            alt="Venue"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 25vw, 50vw"
          />
        </HubImageFrame>

        <HubImageFrame aspect="aspect-[4/3]">
          <Image
            src="/hub3.png"
            alt="Community"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 25vw, 50vw"
          />
        </HubImageFrame>
      </div>

      <div
        className={cn(
          "pointer-events-none absolute -right-6 -top-6 h-20 w-20 hidden md:block",
          BRAND_STYLES.hubGlowOrb,
        )}
      />
      <div className="pointer-events-none absolute -left-8 -bottom-8 h-24 w-24 rounded-full bg-white/10 blur-2xl" />
    </div>
  );
}

function HubText() {
  const t = useTranslations();

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
          {t("hubSection.heading.line1")}
          <br />
          {t("hubSection.heading.line2")}
          <br />
          {t("hubSection.heading.line3")}
        </h2>

        <p className="text-base sm:text-lg text-white/80 font-semibold">
          {t("hubSection.subheading")}
        </p>

        <p className="text-sm sm:text-base text-white/60 max-w-xl">
          {t("hubSection.description")}
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6 sm:gap-8 w-full max-w-lg">
        {STATS.map((stat) => (
          <div
            key={stat.labelKey}
            className="space-y-1.5 text-center min-w-0"
          >
            <p className="text-2xl sm:text-3xl md:text-4xl font-semibold tabular-nums">
              {stat.value}
            </p>
            <p className={cn("text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em]", VIP_STYLES.statLabel)}>
              {t(stat.labelKey)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function HubSection({ variant = "textLeft" }: HubSectionProps) {
  const isImageLeft = variant === "imageLeft";
  const t = useTranslations();

  return (
    <section className="relative w-full bg-black text-white">
      <div className={`${SECTION_STYLES.container} py-16 md:py-24 space-y-16`}>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.25fr] lg:items-center">
          {isImageLeft ? (
            <>
              <HubImages />
              <HubText />
            </>
          ) : (
            <>
              <HubText />
              <HubImages />
            </>
          )}
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div className="order-1 lg:order-2 space-y-6">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
              <span className="block text-white">
                {t("redCarpetSection.heading.line1")}
              </span>
              <span className="block text-white">
                {t("redCarpetSection.heading.line2")}
              </span>
              <span className={cn("block", VIP_STYLES.gradientText)}>
                {t("redCarpetSection.heading.line3")}
              </span>
            </h3>

            <p className="text-sm sm:text-base text-white/70 tracking-wide">
              {t("redCarpetSection.meta")}
            </p>

            <p className="text-sm sm:text-base text-white/60 max-w-xl leading-relaxed">
              {t("redCarpetSection.description")}
            </p>

            <a
              href={EVENT_INFO.vipAfterPartyUrl}
              target="_blank"
              rel="noreferrer"
              className={cn(
                "inline-flex items-center justify-center rounded-full px-8 py-3 font-semibold uppercase tracking-wide",
                VIP_STYLES.ctaButton,
                VIP_STYLES.ctaFocus,
              )}
            >
              {t("redCarpetSection.ctaLabel")}
            </a>
          </div>

          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <HubImageFrame aspect="aspect-[16/9]">
                  <Image
                    src="/redcarpet1img.webp"
                    alt="Red carpet wall"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </HubImageFrame>
              </div>

              <HubImageFrame aspect="aspect-[4/3]">
                <Image
                  src="/rcarpet2.png"
                  alt="Networking"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 25vw, 50vw"
                />
              </HubImageFrame>

              <HubImageFrame aspect="aspect-[4/3]">
                <Image
                  src="/rcarpet3.png"
                  alt="VIP after party"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 25vw, 50vw"
                />
              </HubImageFrame>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
