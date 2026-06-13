"use client";

import { motion } from "motion/react";
import { useLocale, useTranslations } from "next-intl";
import { useLenis } from "lenis/react";
import { useCallback, useEffect, useState } from "react";
import { DarkSectionHeader } from "@/components/layout/dark-section-header";
import { SpeakerCard } from "@/components/section/speaker-section/speaker-card";
import { SpeakerDetailModal } from "@/components/section/speaker-section/speaker-detail-modal";
import type { Speaker } from "@/config/speakers";
import { useModalScrollRestore } from "@/hooks/use-modal-scroll-restore";
import { SECTION_STYLES } from "@/lib/styles/common";

type SpeakerSectionProps = {
  speakers: Speaker[];
};

export function SpeakerSection({ speakers }: SpeakerSectionProps) {
  const t = useTranslations();
  const locale = useLocale();
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const lenis = useLenis();

  const isModalOpen = activeIndex >= 0;
  const activeSpeaker = isModalOpen ? speakers[activeIndex] : null;
  const { captureScroll } = useModalScrollRestore(isModalOpen, lenis ?? undefined);

  const openSpeaker = useCallback(
    (index: number) => {
      captureScroll();
      setActiveIndex(index);
    },
    [captureScroll],
  );

  const goToPrev = useCallback(() => {
    setActiveIndex((i) => (i <= 0 ? speakers.length - 1 : i - 1));
  }, [speakers.length]);

  const goToNext = useCallback(() => {
    setActiveIndex((i) => (i >= speakers.length - 1 ? 0 : i + 1));
  }, [speakers.length]);

  useEffect(() => {
    if (!isModalOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goToPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goToNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, goToPrev, goToNext]);

  return (
    <section
      id="speakers"
      className="relative w-full flex flex-col items-center justify-center bg-black rounded-tr-2xl rounded-tl-2xl scroll-mt-24"
    >
      <div className={`${SECTION_STYLES.container} px-4 sm:px-6 lg:px-8`}>
        <div className="flex flex-col items-center text-center text-white">
          <DarkSectionHeader title={t("speakerSection.title")} />

          {speakers.length === 0 ? (
            <motion.p
              className="text-white/70 text-sm md:text-base"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {t("speakerSection.comingSoon")}
            </motion.p>
          ) : (
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full mt-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ staggerChildren: 0.06 }}
            >
              {speakers.map((speaker, index) => (
                <SpeakerCard
                  key={speaker.name}
                  speaker={speaker}
                  locale={locale}
                  onSelect={() => openSpeaker(index)}
                />
              ))}
            </motion.div>
          )}
        </div>
      </div>

      {activeSpeaker && (
        <SpeakerDetailModal
          speaker={activeSpeaker}
          locale={locale}
          onClose={() => setActiveIndex(-1)}
          onPrev={goToPrev}
          onNext={goToNext}
        />
      )}
    </section>
  );
}
