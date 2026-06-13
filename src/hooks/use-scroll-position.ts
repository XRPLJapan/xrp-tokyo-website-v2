"use client";

import { useState, useEffect } from "react";
import { useLenis } from "lenis/react";
import { subscribeScroll } from "@/lib/lenis-scroll";

/**
 * スクロール位置を監視するカスタムフック
 * @param threshold スクロール位置の閾値（0-1）
 * @returns 閾値を超えたかどうか
 */
export function useScrollPosition(threshold: number = 0.95) {
  const [isAtThreshold, setIsAtThreshold] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    return subscribeScroll(lenis ?? undefined, (scrollY) => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPercentage = (scrollY + windowHeight) / documentHeight;
      setIsAtThreshold(scrollPercentage >= threshold);
    });
  }, [lenis, threshold]);

  return isAtThreshold;
}
