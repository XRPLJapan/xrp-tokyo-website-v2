"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useSplash } from "@/contexts/splash-context";
import { getFadeInAnimation } from "@/lib/utils/animation";
import { motion } from "motion/react";
import { HeroNeonSvg } from "@/components/hero/hero-neon-svg";

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(true);
  const { setIsSplashComplete } = useSplash();
  const fadeIn = getFadeInAnimation("short");

  useEffect(() => {
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        setIsMounted(false);
        document.body.style.overflow = "";
        setIsSplashComplete(true);
      }, 500);
    }, 1500);

    document.body.style.overflow = "hidden";

    return () => {
      clearTimeout(hideTimer);
      document.body.style.overflow = "";
    };
  }, [setIsSplashComplete]);

  if (!isMounted) {
    return null;
  }

  return (
    <div
      className={cn(
        "fixed inset-0 z-[9999] flex items-center justify-center bg-background transition-opacity duration-500",
        isVisible ? "opacity-100" : "opacity-0",
      )}
    >
      <div className="flex flex-col items-center gap-6">
        <div
          className={cn("flex flex-row items-center gap-3", fadeIn.className)}
          style={fadeIn.style}
        >
          <HeroNeonSvg
            filterId="neonBlur-splash"
            className="w-[160%] h-[160%] md:w-[130%] md:h-[130%]"
            style={{ opacity: 0.5 }}
          >
            <motion.text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              fill="none"
              stroke="#e81111"
              strokeWidth="2"
              style={{
                fontSize: "45px",
                fontWeight: "bold",
                letterSpacing: "4px",
                filter: "url(#neonBlur-splash)",
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: [0, 0, 1, 1, 0],
                scale: [0.8, 0.8, 1, 1.05, 1.1],
                letterSpacing: ["2px", "2px", "4px", "8px", "12px"],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                times: [0, 0.35, 0.45, 0.7, 0.8],
              }}
            >
              XRP TOKYO 2026
            </motion.text>
          </HeroNeonSvg>
        </div>
      </div>
    </div>
  );
}
