"use client";

import { useState, useEffect } from "react";
import { useLenis } from "lenis/react";
import { subscribeScroll } from "@/lib/lenis-scroll";

/**
 * スクロールしたかどうかを監視するカスタムフック
 * @param threshold スクロール閾値（ピクセル）
 * @returns スクロールしているかどうか
 */
export function useScrolled(threshold: number = 100) {
  const [isScrolled, setIsScrolled] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    return subscribeScroll(lenis ?? undefined, (scrollY) => {
      setIsScrolled(scrollY > threshold);
    });
  }, [lenis, threshold]);

  return isScrolled;
}
