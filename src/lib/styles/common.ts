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
} as const;
