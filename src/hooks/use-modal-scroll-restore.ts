"use client";

import { useEffect, useRef } from "react";
import type Lenis from "lenis";

/**
 * Restores scroll position after closing a modal (Lenis + native scroll).
 * Handles Headless UI scroll-lock conflicting with Lenis.
 */
export function useModalScrollRestore(
  isOpen: boolean,
  lenis: Lenis | undefined,
) {
  const savedScrollYRef = useRef(0);
  const wasOpenRef = useRef(false);

  const captureScroll = () => {
    const y =
      lenis?.scroll ??
      window.scrollY ??
      document.documentElement.scrollTop ??
      window.pageYOffset ??
      0;
    savedScrollYRef.current = y;
  };

  useEffect(() => {
    if (isOpen) {
      wasOpenRef.current = true;
      return;
    }
    if (!wasOpenRef.current) return;
    wasOpenRef.current = false;

    const y = savedScrollYRef.current;
    const restore = () => {
      lenis?.scrollTo(y, { immediate: true, force: true });
      window.scrollTo(0, y);
      document.documentElement.scrollTop = y;
      document.body.scrollTop = y;
    };

    restore();
    let raf2 = 0;
    const raf1 = requestAnimationFrame(() => {
      restore();
      raf2 = requestAnimationFrame(restore);
    });
    const t0 = window.setTimeout(restore, 0);
    const t1 = window.setTimeout(restore, 100);
    const t2 = window.setTimeout(restore, 300);

    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      window.clearTimeout(t0);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [isOpen, lenis]);

  return { captureScroll };
}
