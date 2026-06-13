"use client";

import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { useSplash } from "@/contexts/splash-context";
import { getFadeInAnimation } from "@/lib/utils/animation";
import { motion } from "motion/react";

const SPLASH_PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: (i - 10) * 12 * ((i % 3) + 1),
  y: (i - 10) * 10 * ((i % 4) + 1),
}));

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(true);
  const { setIsSplashComplete } = useSplash();
  const fadeIn = getFadeInAnimation("short");
  const particles = useMemo(() => SPLASH_PARTICLES, []);

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 424"
            className="w-[160%] h-[160%] md:w-[130%] md:h-[130%]"
            style={{ opacity: 0.5 }}
          >
            <defs>
              <filter
                id="neonBlur-splash"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
              >
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            <motion.g
              animate={{
                opacity: [1, 1, 0, 0, 1],
                scale: [1, 1.1, 0.8, 0.8, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                times: [0, 0.3, 0.4, 0.9, 1],
              }}
            >
              <motion.path
                d="M437,0h74L357,152.48c-55.77,55.19-146.19,55.19-202,0L.94,0H75L192,115.83a91.11,91.11,0,0,0,127.91,0Z"
                fill="none"
                stroke="#e81111"
                strokeWidth="3"
                filter="url(#neonBlur-splash)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0, 1, 1] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  times: [0, 0.3, 1],
                }}
              />
              <motion.path
                d="M74.05,424H0L155,270.58c55.77-55.19,146.19-55.19,202,0L512,424H438L320,307.23a91.11,91.11,0,0,0-127.91,0Z"
                fill="none"
                stroke="#e81111"
                strokeWidth="3"
                filter="url(#neonBlur-splash)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0, 1, 1] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  times: [0, 0.3, 1],
                }}
              />
            </motion.g>

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

            {particles.map(({ id, x, y }) => (
              <motion.circle
                key={id}
                cx="256"
                cy="212"
                r="1.5"
                fill="#e81111"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  x: [0, x],
                  y: [0, y],
                  scale: [0, 1.5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  delay: 2.1,
                  times: [0.35, 0.5, 0.7],
                }}
              />
            ))}
          </svg>
        </div>
      </div>
    </div>
  );
}
