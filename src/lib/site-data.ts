import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { Tier } from "@/config/enums";
import type { Speaker } from "@/config/speakers";

export type RawSponsor = {
  name: string;
  tier?: string;
  logo?: string;
  website?: string;
  whiteLogo?: boolean;
  forceWhiteBackground?: boolean;
  logoInset?: boolean;
  type?: string;
};

export type Sponsor = {
  name: string;
  tier: Tier;
  logo?: string;
  website?: string;
  whiteLogo?: boolean;
  forceWhiteBackground?: boolean;
  logoInset?: boolean;
  type?: string;
};

export type SiteData = {
  speakers: Speaker[];
  sponsors: Sponsor[];
};

const TIER_MAP: Record<string, Tier> = {
  Title: Tier.Title,
  Platinum: Tier.Platinum,
  Gold: Tier.Gold,
  Silver: Tier.Silver,
  Bronze: Tier.Bronze,
  Research: Tier.Research,
  "Research Partner": Tier.Research,
  Supporter: Tier.Supporter,
  Media: Tier.Media,
  "Media Partner": Tier.Media,
  Education: Tier.Education,
  "Education Partner": Tier.Education,
  Community: Tier.Community,
  "Community Partner": Tier.Community,
};

export function mapSponsors(raw: RawSponsor[] = []): Sponsor[] {
  const mapped = raw.map((sponsor) => ({
    name: sponsor.name,
    tier: TIER_MAP[sponsor.tier ?? ""] ?? Tier.Community,
    logo: sponsor.logo,
    website: sponsor.website,
    whiteLogo: sponsor.whiteLogo,
    forceWhiteBackground: sponsor.forceWhiteBackground,
    logoInset: sponsor.logoInset,
    type: sponsor.type,
  }));

  const seen = new Set<string>();
  return mapped.filter((s) => {
    const key = s.logo ? `${s.tier}:${s.logo}` : `${s.tier}:${s.name}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

type RawSiteData = {
  speakers?: Speaker[];
  sponsors?: RawSponsor[];
};

export function parseSiteData(raw: RawSiteData): SiteData {
  return {
    speakers: raw.speakers ?? [],
    sponsors: mapSponsors(raw.sponsors),
  };
}

/** Server-side: load public/data.json from disk */
export async function loadSiteData(): Promise<SiteData> {
  const path = join(process.cwd(), "public", "data.json");
  const content = await readFile(path, "utf-8");
  return parseSiteData(JSON.parse(content) as RawSiteData);
}
