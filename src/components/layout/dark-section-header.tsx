"use client";

import { SectionTitle } from "@/components/layout/section-title";
import { BRAND_STYLES } from "@/lib/styles/common";
import { cn } from "@/lib/utils";

type DarkSectionHeaderProps = {
  title: string;
  titleClassName?: string;
};

/** Black-section header: brand accent line + animated title */
export function DarkSectionHeader({
  title,
  titleClassName,
}: DarkSectionHeaderProps) {
  return (
    <>
      <div className={cn(BRAND_STYLES.accentLine, "mb-3")} aria-hidden="true" />
      <SectionTitle
        title={title}
        className={cn("text-white text-xl md:text-3xl", titleClassName)}
        accentClassName={BRAND_STYLES.accentGradient}
      />
    </>
  );
}
