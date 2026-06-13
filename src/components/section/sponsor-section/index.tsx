"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { DarkSectionHeader } from "@/components/layout/dark-section-header";
import { LogoBox } from "@/components/section/sponsor-section/logo-box";
import { TierTitle } from "@/components/section/sponsor-section/tier-title";
import { Tier } from "@/config/enums";
import { TIER_DISPLAY_ORDER } from "@/config/sponsor-display";
import { SECTION_STYLES } from "@/lib/styles/common";
import type { Sponsor } from "@/lib/site-data";

type SponsorSectionProps = {
  sponsors: Sponsor[];
};

export function SponsorSection({ sponsors }: SponsorSectionProps) {
  const t = useTranslations();

  return (
    <section
      id="sponsors"
      className="relative w-full flex flex-col items-center justify-center bg-black py-16 md:py-24 rounded-tr-2xl rounded-tl-2xl text-white scroll-mt-24"
    >
      <div className={SECTION_STYLES.container}>
        <div className="flex flex-col items-center text-center">
          <DarkSectionHeader title={t("sponsorSection.title")} />

          {sponsors.length === 0 ? (
            <motion.p
              className="text-white/70 text-sm md:text-base"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {t("sponsorSection.loading")}
            </motion.p>
          ) : (
            TIER_DISPLAY_ORDER.map(
              ({ tier, containerClass, logoClass, gap, titleGap, initialY }) => {
                const tierSponsors = sponsors.filter((s) => s.tier === tier);
                if (tierSponsors.length === 0) return null;

                const bronzeSubLabelClass =
                  "text-xs text-amber-600/70 uppercase tracking-widest mb-2 text-center";

                const renderLogoGrid = (list: Sponsor[]) => (
                  <motion.div
                    className={containerClass}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ staggerChildren: 0.06 }}
                  >
                    {list.map((sponsor) => (
                      <LogoBox
                        key={sponsor.name}
                        tier={tier}
                        alt={sponsor.name}
                        logo={sponsor.logo}
                        website={sponsor.website}
                        className={logoClass}
                        whiteLogo={sponsor.whiteLogo}
                        whiteBackground={sponsor.forceWhiteBackground}
                        logoInset={sponsor.logoInset}
                      />
                    ))}
                  </motion.div>
                );

                return (
                  <motion.div
                    key={tier}
                    className={`w-full ${gap}`}
                    initial={{ opacity: 0, y: initialY }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <div className={titleGap}>
                      <TierTitle tier={tier} />
                    </div>
                    {tier === Tier.Bronze ? (
                      <div className="flex flex-col w-full gap-8">
                        {(() => {
                          const corporate = tierSponsors.filter(
                            (s) => s.type === "corporate",
                          );
                          const heroes = tierSponsors.filter(
                            (s) => s.type !== "corporate",
                          );
                          return (
                            <>
                              {corporate.length > 0 && (
                                <div className="w-full">
                                  <p className={bronzeSubLabelClass}>Corporate</p>
                                  {renderLogoGrid(corporate)}
                                </div>
                              )}
                              {heroes.length > 0 && (
                                <div className="w-full">
                                  <p className={bronzeSubLabelClass}>Heroes</p>
                                  {renderLogoGrid(heroes)}
                                </div>
                              )}
                            </>
                          );
                        })()}
                      </div>
                    ) : (
                      renderLogoGrid(tierSponsors)
                    )}
                  </motion.div>
                );
              },
            )
          )}
        </div>
      </div>
    </section>
  );
}
