import type { Speaker } from "@/config/speakers";
import type { Locale } from "@/lib/constants";

export type SpeakerDisplayFields = {
  name: string;
  role: string;
  company: string;
  bio: string;
};

/** Locale-aware speaker label fields (name / role / company / bio) */
export function getSpeakerDisplayFields(
  speaker: Speaker,
  locale: string,
): SpeakerDisplayFields {
  const name =
    locale === "ja" && speaker.nameJa ? speaker.nameJa : speaker.name;
  const role =
    locale === "ja" && speaker.roleJa ? speaker.roleJa : speaker.role;
  const company =
    locale === "ja" && speaker.companyJa ? speaker.companyJa : speaker.company;
  const bio =
    locale === "en" && speaker.bio_en ? speaker.bio_en : speaker.bio;
  return { name, role, company, bio };
}

export type AgendaSpeakerProfile = {
  name: string;
  role: string;
  company: string;
  image?: string;
};

/** Build name → profile map from site speakers + agenda-only overrides */
export function buildSpeakerProfileMap(
  speakers: Speaker[],
  overrides: Record<string, AgendaSpeakerProfile> = {},
): Map<string, AgendaSpeakerProfile> {
  const map = new Map<string, AgendaSpeakerProfile>();

  for (const speaker of speakers) {
    map.set(speaker.name, {
      name: speaker.name,
      role: speaker.role,
      company: speaker.company,
      image: speaker.image,
    });
  }

  for (const [name, profile] of Object.entries(overrides)) {
    map.set(name, profile);
  }

  return map;
}
