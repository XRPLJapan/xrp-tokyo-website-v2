import type { AgendaSpeakerProfile } from "@/lib/speakers";

/** Speakers referenced on the agenda but not in public/data.json */
export const AGENDA_SPEAKER_OVERRIDES: Record<string, AgendaSpeakerProfile> = {
  "VIP After Party": {
    name: "VIP After Party",
    role: "Limited attendance. Prior approval required.",
    company: "https://luma.com/da2ucul1",
    image: "/speakers/partyimg.png",
  },
};
