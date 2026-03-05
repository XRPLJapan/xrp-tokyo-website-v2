"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import Image from "next/image";
import { SECTION_STYLES } from "@/lib/styles/common";
import { SectionTitle } from "@/components/layout/section-title";

function PartnerCard({
  imageSrc,
  imageAlt,
  title,
  subtitle,
}: {
  imageSrc?: string;
  imageAlt: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      className="flex flex-col items-center gap-6 rounded-2xl border border-white/15 bg-white/[0.07] p-10 shadow-[0_0_40px_rgba(255,255,255,0.06)] backdrop-blur-sm"
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex h-36 w-72 items-center justify-center overflow-hidden rounded-xl bg-white p-8 shadow-md">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={240}
            height={120}
            className="h-auto max-h-28 w-auto max-w-[220px] object-contain"
          />
        ) : (
          <span className="text-xs text-black/30">Logo</span>
        )}
      </div>
      <div className="text-center">
        <p className="text-sm leading-relaxed text-white/90 md:text-base">
          {title}
        </p>
        {subtitle && (
          <p className="mt-2 text-sm font-semibold text-white md:text-base">
            {subtitle}
          </p>
        )}
      </div>
    </motion.div>
  );
}

export function StrategicPartnerSection() {
  const t = useTranslations("strategicPartnerSection");

  return (
    <section
      id="strategic-partner"
      className="relative w-full overflow-hidden bg-black py-16 text-white md:py-24 scroll-mt-24"
    >
      <div
        className="pointer-events-none absolute -bottom-[300px] -left-[300px] h-[800px] w-[800px] animate-glow-drift rounded-full md:-bottom-[450px] md:-left-[450px] md:h-[1200px] md:w-[1200px]"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle, rgba(140,50,220,0.55) 0%, rgba(140,50,220,0) 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-[300px] -right-[300px] h-[800px] w-[800px] animate-glow-drift rounded-full md:-bottom-[450px] md:-right-[450px] md:h-[1200px] md:w-[1200px]"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle, rgba(140,50,220,0.55) 0%, rgba(140,50,220,0) 70%)",
          animationDelay: "4s",
        }}
      />
      <div className={`relative ${SECTION_STYLES.container}`}>
        <div className="flex flex-col items-center text-center">
          <div className="mb-3 h-px w-24 bg-[#e81111]" aria-hidden="true" />
          <SectionTitle
            title={t("title")}
            className="text-white"
            accentClassName="bg-gradient-to-r from-transparent via-[#e81111] to-transparent"
          />

          <motion.div
            className="flex w-full justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="w-full max-w-lg">
              <PartnerCard
                imageSrc="/strategic-partner/logo-digitalchamber.svg"
                imageAlt="Digital Chamber"
                title={t("digitalChamber.description")}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
