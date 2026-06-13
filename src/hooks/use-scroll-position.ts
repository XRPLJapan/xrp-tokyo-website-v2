"use client";

import { useState, useEffect } from "react";
import { useLenis } from "lenis/react";

/**
 * スクロール位置を監視するカスタムフック
 * @param threshold スクロール位置の閾値（0-1）
 * @returns 閾値を超えたかどうか
 */
export function useScrollPosition(threshold: number = 0.95) {
  const [isAtThreshold, setIsAtThreshold] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const update = (scrollY: number) => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPercentage = (scrollY + windowHeight) / documentHeight;
      setIsAtThreshold(scrollPercentage >= threshold);
    };

    if (lenis) {
      update(lenis.scroll);
      const onScroll = ({ scroll }: { scroll: number }) => update(scroll);
      lenis.on("scroll", onScroll);
      return () => {
        lenis.off("scroll", onScroll);
      };
    }

    const handleScroll = () => update(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lenis, threshold]);

  return isAtThreshold;
}
