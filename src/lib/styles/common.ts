/**
 * 共通のスタイルクラス定義
 */

export const SECTION_STYLES = {
  sticky: "sticky top-0 h-screen overflow-hidden",
  container:
    "container mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-4 py-2 md:py-20",
} as const;

/** XRP Tokyo ブランドカラー（globals.css --brand-* と対応） */
export const BRAND_STYLES = {
  accentLine: "h-px w-24 bg-brand",
  accentGradient: "bg-gradient-to-r from-transparent via-brand to-transparent",
  footerBorder: "border-t border-brand",
  footerShadow: "shadow-[0_-5px_15px_rgba(232,17,17,0.3)]",
  footerGlow: "shadow-[0_0_15px_var(--brand)]",
  ctaButton: "bg-brand text-white hover:bg-brand-hover",
  ctaButtonGradient:
    "bg-gradient-to-r from-brand to-brand-muted text-white hover:from-brand-hover hover:to-brand",
  cardHoverBorder: "group-hover:border-brand",
  hubImageFrame:
    "overflow-hidden rounded-3xl border border-brand/60 shadow-[0_20px_50px_rgba(0,0,0,0.35)]",
  hubGlowOrb: "rounded-full bg-brand/20 blur-2xl",
  sectionBorderTop: "border-t border-brand",
  kicker: "text-xs uppercase tracking-[0.6em] text-brand",
  kickerDivider: "mt-4 h-0.5 w-20 rounded-full bg-brand",
  outlineButton:
    "border border-brand bg-black text-white transition-all duration-300 hover:bg-brand hover:scale-105",
  giveawayAccentLine:
    "h-[3px] bg-gradient-to-r from-transparent via-brand/60 to-transparent",
  giveawayBadge:
    "rounded-full bg-brand/[0.07] border border-brand/20",
  giveawayBadgeText:
    "text-[10px] font-bold tracking-[0.4em] text-brand uppercase",
  giveawayDot: "rounded-full bg-brand/35",
} as const;

/** アジェンダページ専用（globals.css --agenda-* と対応） */
export const AGENDA_STYLES = {
  pageBg: "min-h-screen bg-black",
  goldText: "text-agenda-gold",
  goldBorder: "border-agenda-gold/60",
  goldBorderSoft: "border-agenda-gold/50",
  goldAccentLine:
    "h-px w-24 bg-gradient-to-r from-transparent via-agenda-gold to-transparent",
  goldDivider:
    "h-[2px] w-full bg-gradient-to-r from-agenda-gold to-transparent",
  timelineLine:
    "bg-gradient-to-b from-agenda-gold via-agenda-gold-light to-transparent",
  surface: "bg-agenda-surface",
  surfaceBorder: "border-agenda-border/30",
  cardBorder: "border-agenda-border/20",
  mutedText: "text-agenda-muted",
  sessionHover:
    "shadow-[0_8px_20px_rgba(0,0,0,0.35)] hover:shadow-[0_0_22px_rgba(212,175,55,0.32)]",
  tag: "inline-flex rounded-full border border-agenda-gold bg-black px-2 py-0.5 text-[10px] font-bold tracking-[0.1em] text-white uppercase",
  trackTag:
    "mb-2 inline-flex rounded-full border border-agenda-gold bg-black px-2 py-0.5 text-[11px] font-semibold tracking-[0.14em] text-white uppercase sm:text-xs",
  link: "text-agenda-gold underline decoration-agenda-gold/80 underline-offset-2",
  sponsorGoldFrame:
    "border-2 border-agenda-gold rounded-lg bg-black/20 shadow-[0_0_10px_rgba(212,175,55,0.2)]",
} as const;

/** VIP / ゴールドアクセント（レッドカーペット・CTA等） */
export const VIP_STYLES = {
  gradientText:
    "bg-gradient-to-r from-[#c89b3c] via-[#f6d365] to-[#b8860b] bg-clip-text text-transparent",
  ctaButton:
    "bg-gradient-to-r from-[#c89b3c] via-[#f6d365] to-[#b8860b] text-black shadow-[0_0_18px_rgba(246,211,101,0.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_28px_rgba(246,211,101,0.6)]",
  ctaButtonLarge:
    "bg-gradient-to-r from-[#c89b3c] via-[#f6d365] to-[#b8860b] shadow-[0_0_20px_rgba(246,211,101,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(246,211,101,0.7)]",
  ctaFocus:
    "focus:outline-none focus:ring-2 focus:ring-[#f6d365]/70 focus:ring-offset-2 focus:ring-offset-black",
  statLabel: "text-[#fbc500]",
} as const;
