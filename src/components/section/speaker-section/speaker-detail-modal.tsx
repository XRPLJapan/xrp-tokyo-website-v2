"use client";

import { useLayoutEffect, useRef } from "react";
import {
  Dialog,
  DialogPanel,
} from "@/components/animate-ui/components/headless/dialog";
import {
  GlobeWebIcon,
  LinkedInLogoIcon,
  XLogoIcon,
} from "@/components/icons/social";
import type { Speaker } from "@/config/speakers";
import { getSpeakerDisplayFields } from "@/lib/speakers";

type SpeakerDetailModalProps = {
  speaker: Speaker | null;
  locale: string;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export function SpeakerDetailModal({
  speaker,
  locale,
  onClose,
  onPrev,
  onNext,
}: SpeakerDetailModalProps) {
  const modalBodyRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!speaker) return;
    modalBodyRef.current?.scrollTo(0, 0);
  }, [speaker?.name]);

  if (!speaker) return null;

  const { name, role, company, bio } = getSpeakerDisplayFields(speaker, locale);

  return (
    <Dialog open onClose={onClose}>
      <DialogPanel
        showCloseButton={false}
        className="inset-x-0 mx-auto top-[10svh] w-[94%] max-w-none translate-x-0 translate-y-0 block overflow-hidden gap-0 p-0 sm:top-1/2 sm:left-1/2 sm:right-auto sm:mx-0 sm:w-full sm:max-w-[720px] sm:-translate-x-1/2 sm:-translate-y-1/2 bg-white text-black rounded-3xl"
      >
        <button
          type="button"
          onClick={onPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black/5 text-black/50 transition-colors hover:bg-black/10 hover:text-black sm:left-3 sm:h-10 sm:w-10 z-10"
          aria-label="Previous speaker"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <button
          type="button"
          onClick={onNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black/5 text-black/50 transition-colors hover:bg-black/10 hover:text-black sm:right-3 sm:h-10 sm:w-10 z-10"
          aria-label="Next speaker"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <polyline points="9 6 15 12 9 18" />
          </svg>
        </button>

        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 hidden h-10 w-10 items-center justify-center rounded-full bg-black/5 text-3xl leading-none text-black/70 transition-colors hover:bg-black/10 hover:text-black sm:flex"
          aria-label="Close"
        >
          <span className="relative -top-px">×</span>
        </button>

        <div
          ref={modalBodyRef}
          className="max-h-[80svh] sm:max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-y-contain px-6 py-6 sm:px-8 sm:py-8 md:px-18 md:py-12"
          data-lenis-prevent
        >
          <button
            type="button"
            onClick={onClose}
            className="sticky top-0 ml-auto mr-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm text-3xl leading-none text-black/70 transition-colors hover:bg-black/10 hover:text-black z-10 -mb-10 sm:hidden"
            aria-label="Close"
          >
            <span className="relative -top-px">×</span>
          </button>

          <div className="flex flex-col items-center text-center">
            <div className="relative h-40 w-40 sm:h-44 sm:w-44 overflow-hidden rounded-3xl bg-black/10">
              {speaker.image ? (
                // biome-ignore lint/performance/noImgElement: modal avatar with external/static paths
                <img
                  src={speaker.image}
                  alt={name}
                  className="h-full w-full object-cover object-top"
                />
              ) : null}
            </div>

            <div className="mt-4 w-full max-w-2xl px-1">
              <h3 className="text-2xl sm:text-3xl font-semibold">{name}</h3>
              <p className="mt-1 text-sm sm:text-base text-black/70 leading-snug break-words whitespace-normal">
                {role}
              </p>
            </div>

            {company?.trim() ? (
              <div className="mt-3 inline-flex max-w-full items-center justify-center rounded-full bg-black px-4 py-2 text-center text-white text-sm font-semibold break-words">
                {company}
              </div>
            ) : null}

            {(speaker.twitter || speaker.linkedin || speaker.website) && (
              <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                {speaker.twitter && (
                  <a
                    href={speaker.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${name} on X`}
                    className="flex h-7 w-7 items-center justify-center rounded-sm bg-black/[0.08] text-black transition-colors hover:bg-black/15"
                  >
                    <XLogoIcon className="origin-center scale-[0.7] text-black" />
                  </a>
                )}
                {speaker.linkedin && (
                  <a
                    href={speaker.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${name} on LinkedIn`}
                    className="flex h-7 w-7 items-center justify-center rounded-sm bg-black/[0.08] text-black transition-colors hover:bg-black/15"
                  >
                    <LinkedInLogoIcon className="origin-center scale-[0.8] text-black" />
                  </a>
                )}
                {speaker.website && (
                  <a
                    href={speaker.website}
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
        </div>
      </DialogPanel>
    </Dialog>
  );
}
