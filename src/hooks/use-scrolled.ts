"use client";

import { useState, useEffect } from "react";
import { useLenis } from "lenis/react";

/**
 * スクロールしたかどうかを監視するカスタムフック
 * @param threshold スクロール閾値（ピクセル）
 * @returns スクロールしているかどうか
 */
export function useScrolled(threshold: number = 100) {
  const [isScrolled, setIsScrolled] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const update = (scrollY: number) => {
      setIsScrolled(scrollY > threshold);
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

  return isScrolled;
}
