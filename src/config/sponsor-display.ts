import { Tier } from "@/config/enums";

export type TierDisplayConfig = {
  tier: Tier;
  containerClass: string;
  logoClass: string;
  gap: string;
  titleGap: string;
  initialY: number;
};

/**
 * Tier ごとの表示設定（レイアウト・ロゴサイズ・アニメーション）
 */
export const TIER_DISPLAY_ORDER: TierDisplayConfig[] = [
  {
    tier: Tier.Title,
    containerClass:
      "flex flex-wrap justify-center items-start gap-6 w-full max-w-md mx-auto",
    logoClass:
      "w-full max-w-xs aspect-[2/1] border-4 border-white rounded-2xl bg-white/5 shadow-[0_0_25px_rgba(255,255,255,0.3)]",
    gap: "mt-0",
    titleGap: "mb-6",
    initialY: 40,
  },
  {
    tier: Tier.Platinum,
    containerClass:
      "grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-0 w-full max-w-2xl mx-auto justify-items-center items-start",
    logoClass:
      "w-full max-w-[300px] md:max-w-[280px] aspect-[1.8/1] border-2 border-slate-300 rounded-xl platinum-blink-card",
    gap: "mt-16 md:mt-20",
    titleGap: "mb-5",
    initialY: 40,
  },
  {
    tier: Tier.Gold,
    containerClass:
      "flex flex-wrap justify-center items-start gap-x-5 gap-y-6 w-full max-w-3xl mx-auto",
    logoClass:
      "w-full max-w-[280px] md:max-w-[260px] aspect-[1.8/1] border-2 border-agenda-gold rounded-lg bg-black/20 shadow-[0_0_10px_rgba(212,175,55,0.2)]",
    gap: "mt-14 md:mt-16",
    titleGap: "mb-4",
    initialY: 32,
  },
  {
    tier: Tier.Silver,
    containerClass:
      "flex flex-wrap justify-center items-start gap-4 w-full max-w-3xl mx-auto",
    logoClass:
      "w-[calc(33.333%-1rem)] min-w-[160px] aspect-[1.5/1] border-[1.5px] border-[#C0C0C0] rounded-md bg-black/10 shadow-[0_0_8px_rgba(192,192,192,0.15)]",
    gap: "mt-12 md:mt-14",
    titleGap: "mb-4",
    initialY: 28,
  },
  {
    tier: Tier.Bronze,
    containerClass:
      "flex flex-wrap md:flex-nowrap justify-center items-start gap-3 w-full max-w-4xl mx-auto",
    logoClass:
      "w-full max-w-[160px] md:w-auto md:flex-1 md:max-w-[200px] aspect-[1.5/1] border border-[#CD7F32]/60 rounded-md bg-black/5",
    gap: "mt-10 md:mt-12",
    titleGap: "mb-3",
    initialY: 24,
  },
  {
    tier: Tier.Research,
    containerClass:
      "flex flex-wrap md:flex-nowrap justify-center items-start gap-3 w-full max-w-4xl mx-auto",
    logoClass:
      "w-full max-w-[160px] md:w-auto md:flex-1 md:max-w-[200px] aspect-[1.5/1] border border-cyan-300/40 rounded-md bg-white/5 shadow-sm",
    gap: "mt-10 md:mt-12",
    titleGap: "mb-3",
    initialY: 24,
  },
  {
    tier: Tier.Supporter,
    containerClass:
      "flex flex-wrap md:flex-nowrap justify-center items-start gap-3 w-full max-w-4xl mx-auto",
    logoClass:
      "w-full max-w-[160px] md:w-auto md:flex-1 md:max-w-[200px] aspect-[1.5/1] border border-indigo-300/40 rounded-md bg-white/5 shadow-sm",
    gap: "mt-10 md:mt-12",
    titleGap: "mb-3",
    initialY: 24,
  },
  {
    tier: Tier.Media,
    containerClass:
      "flex flex-wrap md:flex-nowrap justify-center items-start gap-3 w-full max-w-4xl mx-auto",
    logoClass:
      "w-full max-w-[160px] md:w-auto md:flex-1 md:max-w-[200px] aspect-[1.5/1] border border-[#4A90E2]/40 rounded-md bg-white/5 shadow-sm",
    gap: "mt-10 md:mt-12",
    titleGap: "mb-3",
    initialY: 24,
  },
  {
    tier: Tier.Education,
    containerClass:
      "flex flex-wrap md:flex-nowrap justify-center items-start gap-3 w-full max-w-4xl mx-auto",
    logoClass:
      "w-full max-w-[160px] md:w-auto md:flex-1 md:max-w-[200px] aspect-[1.4/1] border border-[#10B981]/40 rounded-md bg-white/5 shadow-sm",
    gap: "mt-10 md:mt-12",
    titleGap: "mb-3",
    initialY: 24,
  },
  {
    tier: Tier.Community,
    containerClass:
      "grid grid-cols-3 md:grid-cols-4 gap-2.5 w-full max-w-xl mx-auto items-start",
    logoClass:
      "aspect-square border border-[#22D3EE]/30 rounded-lg bg-white/5 hover:border-[#22D3EE]/60 transition-colors",
    gap: "mt-8 md:mt-10",
    titleGap: "mb-2",
    initialY: 24,
  },
];
