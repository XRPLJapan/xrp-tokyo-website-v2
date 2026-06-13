"use client";

import { motion } from "motion/react";
import type { CSSProperties, ReactNode, Ref } from "react";

const BRAND_STROKE = "#e81111";

export const NEON_PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: (i - 10) * 12 * ((i % 3) + 1),
  y: (i - 10) * 10 * ((i % 4) + 1),
}));

type HeroNeonSvgProps = {
  filterId: string;
  className?: string;
  style?: CSSProperties;
  svgRef?: Ref<SVGSVGElement>;
  children?: ReactNode;
};

export function HeroNeonSvg({
  filterId,
  className,
  style,
  svgRef,
  children,
}: HeroNeonSvgProps) {
  const filterUrl = `url(#${filterId})`;

  return (
    <svg
      ref={svgRef}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 424"
      className={className}
      style={style}
    >
      <defs>
        <filter id={filterId} x="-50%" y="-50%" width="200%" height="200%">
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
          stroke={BRAND_STROKE}
          strokeWidth="3"
          filter={filterUrl}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 1] }}
          transition={{ duration: 6, repeat: Infinity, times: [0, 0.3, 1] }}
        />
        <motion.path
          d="M74.05,424H0L155,270.58c55.77-55.19,146.19-55.19,202,0L512,424H438L320,307.23a91.11,91.11,0,0,0-127.91,0Z"
          fill="none"
          stroke={BRAND_STROKE}
          strokeWidth="3"
          filter={filterUrl}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 1] }}
          transition={{ duration: 6, repeat: Infinity, times: [0, 0.3, 1] }}
        />
      </motion.g>

      {children}

      {NEON_PARTICLES.map(({ id, x, y }) => (
        <motion.circle
          key={id}
          cx="256"
          cy="212"
          r="1.5"
          fill={BRAND_STROKE}
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
  );
}
