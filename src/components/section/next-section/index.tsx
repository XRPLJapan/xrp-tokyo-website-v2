"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { EVENT_INFO } from "@/lib/constants";
import { BRAND_STYLES, VIP_STYLES } from "@/lib/styles/common";
import { cn } from "@/lib/utils";

const fadeInUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export function NextSection() {
  const t = useTranslations();

  const content = {
    journeyHeading: t("journeySection.heading"),
    journeySubtext: t("journeySection.subtext"),
    journeyPrimaryLabel: t("journeySection.primaryCta"),
    journeyPrimaryUrl: EVENT_INFO.vipAfterPartyUrl,
    journeySecondaryLabel: t("journeySection.secondaryCta"),
    journeySecondaryUrl: EVENT_INFO.ticketUrl,
  };

  return (
    <section
      id="journey-begins"
      className={cn(
        "relative w-full py-24 flex flex-col items-center justify-center text-center rounded-tr-2xl rounded-tl-2xl overflow-hidden bg-black",
        BRAND_STYLES.sectionBorderTop,
      )}
    >
      <div
        className="absolute inset-0 bg-no-repeat"
        style={{
          backgroundImage: "url('/footerbackgroundimage.png')",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
        }}
      />

      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10">
        <div className="inner px-4 md:px-6 lg:px-8">
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-white font-extrabold text-5xl md:text-7xl sm:text-4xl uppercase tracking-tight"
          >
            {content.journeyHeading}
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="mt-4 text-gray-400 text-lg sm:text-base"
          >
            {content.journeySubtext}
          </motion.p>
        </div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <div className="flex gap-4 items-center justify-center">
            <a
              href={content.journeyPrimaryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "px-8 py-3 rounded-full font-semibold text-black",
                VIP_STYLES.ctaButtonLarge,
              )}
            >
              {content.journeyPrimaryLabel}
            </a>

            <a
              href={content.journeySecondaryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "px-8 py-3 rounded-full font-semibold",
                BRAND_STYLES.outlineButton,
              )}
            >
              {content.journeySecondaryLabel}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
