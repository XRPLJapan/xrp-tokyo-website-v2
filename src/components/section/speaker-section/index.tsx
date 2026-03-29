"use client";

import { motion } from "motion/react";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogPanel,
} from "@/components/animate-ui/components/headless/dialog";
import {
  GlobeWebIcon,
  LinkedInLogoIcon,
  XLogoIcon,
} from "@/components/icons/social";
import { SectionTitle } from "@/components/layout/section-title";
import { SpeakerCard } from "@/components/section/speaker-section/speaker-card";
import type { Speaker } from "@/config/speakers";
import { SECTION_STYLES } from "@/lib/styles/common";

export function SpeakerSection() {
  const t = useTranslations();
  const locale = useLocale();
  const [activeSpeaker, setActiveSpeaker] = useState<Speaker | null>(null);
  const [speakers, setSpeakers] = useState<Speaker[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchSpeakers = async () => {
      try {
        const res = await fetch("/data.json");
        if (!res.ok) throw new Error("Failed to load data.json");
        const data = (await res.json()) as { speakers?: Speaker[] };
        if (isMounted) {
          setSpeakers(data.speakers ?? []);
        }
      } catch (error) {
        console.error("Failed to fetch speakers", error);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    fetchSpeakers();
    return () => {
      isMounted = false;
    };
  }, []);

  const getSpeakerText = (speaker: Speaker) => {
    const name =
      locale === "ja" && speaker.nameJa ? speaker.nameJa : speaker.name;
    const role =
      locale === "ja" && speaker.roleJa ? speaker.roleJa : speaker.role;
    const company =
      locale === "ja" && speaker.companyJa
        ? speaker.companyJa
        : speaker.company;
    const bio = locale === "en" && speaker.bio_en ? speaker.bio_en : speaker.bio;
    return { name, role, company, bio };
  };

  return (
    <section
      id="speakers"
      className="relative w-full flex flex-col items-center justify-center bg-black rounded-tr-2xl rounded-tl-2xl scroll-mt-24"
    >
      <div className={`${SECTION_STYLES.container} px-4 sm:px-6 lg:px-8`}>
        <div className="flex flex-col items-center text-center text-white">
          <div className="mb-3 h-px w-24 bg-[#e81111]" aria-hidden="true" />
          <SectionTitle
            title={t("speakerSection.title")}
            className="text-white text-xl md:text-3xl"
            accentClassName="bg-gradient-to-r from-transparent via-[#e81111] to-transparent"
          />

          {isLoading ? (
            <motion.p
              className="text-white/70 text-sm md:text-base"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              Loading speakers...
            </motion.p>
          ) : speakers.length === 0 ? (
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
                  onSelect={setActiveSpeaker}
                />
              ))}
            </motion.div>
          )}
        </div>
      </div>

      <Dialog open={!!activeSpeaker} onClose={() => setActiveSpeaker(null)}>
        {activeSpeaker &&
          (() => {
            const { name, role, company, bio } = getSpeakerText(activeSpeaker);
            return (
              <DialogPanel
                showCloseButton={false}
                className="inset-x-0 mx-auto top-4 w-[94%] max-w-none translate-x-0 translate-y-0 max-h-[calc(100dvh-2rem)] overflow-y-auto sm:top-1/2 sm:left-1/2 sm:right-auto sm:mx-0 sm:w-full sm:max-w-[720px] sm:-translate-x-1/2 sm:-translate-y-1/2 sm:max-h-[calc(100dvh-4rem)] bg-white text-black rounded-3xl sm:p-8 md:p-12"
              >
                <button
                  type="button"
                  onClick={() => setActiveSpeaker(null)}
                  className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/5 text-3xl leading-none text-black/70 transition-colors hover:bg-black/10 hover:text-black"
                  aria-label="Close"
                >
                  <span className="relative -top-px">×</span>
                </button>

                <div className="flex flex-col items-center text-center">
                  <div className="relative h-40 w-40 sm:h-44 sm:w-44 overflow-hidden rounded-3xl bg-black/10">
                    <img
                      src={activeSpeaker.image}
                      alt={name}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>

                  <div className="mt-4">
                    <h3 className="text-2xl sm:text-3xl font-semibold">
                      {name}
                    </h3>
                    <p className="mt-1 text-sm sm:text-base text-black/70">
                      {role}
                    </p>
                  </div>

                  <div className="mt-3 inline-flex items-center rounded-full bg-black px-4 py-2 text-white text-sm font-semibold">
                    {company}
                  </div>

                  {(activeSpeaker.twitter ||
                    activeSpeaker.linkedin ||
                    activeSpeaker.website) && (
                    <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                      {activeSpeaker.twitter && (
                        <a
                          href={activeSpeaker.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${name} on X`}
                          className="flex h-7 w-7 items-center justify-center rounded-sm bg-black/[0.08] text-black transition-colors hover:bg-black/15"
                        >
                          <XLogoIcon className="origin-center scale-[0.7] text-black" />
                        </a>
                      )}
                      {activeSpeaker.linkedin && (
                        <a
                          href={activeSpeaker.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${name} on LinkedIn`}
                          className="flex h-7 w-7 items-center justify-center rounded-sm bg-black/[0.08] text-black transition-colors hover:bg-black/15"
                        >
                          <LinkedInLogoIcon className="origin-center scale-[0.8] text-black" />
                        </a>
                      )}
                      {activeSpeaker.website && (
                        <a
                          href={activeSpeaker.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${name} website`}
                          className="flex h-7 w-7 items-center justify-center rounded-sm bg-black/[0.08] text-black transition-colors hover:bg-black/15"
                        >
                          <GlobeWebIcon className="origin-center scale-[0.8] text-black" />
                        </a>
                      )}
                    </div>
                  )}

                  <p className="mt-6 text-left text-[13px] sm:text-[15px] text-gray-800 leading-relaxed max-w-2xl antialiased whitespace-pre-line">
                    {bio}
                  </p>
                </div>
              </DialogPanel>
            );
          })()}
      </Dialog>
    </section>
  );
}
