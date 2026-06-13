"use client";

import { useRef, useLayoutEffect, useState } from "react";
import { motion } from "motion/react";
import { HeroNeonSvg } from "@/components/hero/hero-neon-svg";
import { EVENT_INFO } from "@/lib/constants";
import { trackTicketButtonClick } from "@/lib/gtag";
import { SECTION_STYLES } from "@/lib/styles/common";
import Image from "next/image";
import Link from "next/link";

const SVG_VIEWBOX_HEIGHT = 424;

export function Hero() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [textY, setTextY] = useState(SVG_VIEWBOX_HEIGHT * 0.7);

  useLayoutEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const update = () => {
      const { width } = svg.getBoundingClientRect();
      const isMobile = width < 768;
      setTextY(
        isMobile ? SVG_VIEWBOX_HEIGHT * 0.42 : SVG_VIEWBOX_HEIGHT * 0.82,
      );
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(svg);
    return () => ro.disconnect();
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen md:min-h-[calc(100vh-4rem)] overflow-hidden flex items-start md:items-center bg-[#050505] pt-14 md:pt-0"
    >
      <div className="absolute inset-0 z-0 bg-[url('/herobackground.png')] bg-cover bg-center bg-no-repeat opacity-40" />
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <HeroNeonSvg
          filterId="neonBlur-hero"
          className="w-[160%] h-[160%] md:w-[130%] md:h-[130%]"
          style={{ opacity: 0.3 }}
          svgRef={svgRef}
        >
          <motion.text
            x="50%"
            y={textY}
            dominantBaseline="middle"
            textAnchor="middle"
            fill="none"
            stroke="#e81111"
            strokeWidth="2"
            className="text-[18px] md:text-[20px] font-bold"
            style={{
              letterSpacing: "3px",
              filter: "drop-shadow(0 0 8px rgba(232, 17, 17, 0.8))",
              fontFamily: "sans-serif",
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0, 1, 1, 0],
              letterSpacing: ["2px", "4px", "2px"],
              strokeWidth: [1.5, 2, 1.5],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              times: [0, 0.35, 0.5, 0.75, 1],
            }}
          >
            JOIN THE FUTURE OF FINANCE
          </motion.text>
        </HeroNeonSvg>
      </div>

      <div className={`${SECTION_STYLES.container} relative z-10`}>
        <div className="flex flex-col items-center justify-center text-center">
          <Link
            href={EVENT_INFO.ticketUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackTicketButtonClick("hero_image_link")}
            className="block w-full overflow-hidden rounded-xl"
          >
            <div className="w-full lg:w-[85%] mx-auto overflow-hidden rounded-xl">
              <div className="block md:hidden">
                <Image
                  src="/xrp-header-mobile1.png"
                  alt="XRP Tokyo 2026"
                  width={800}
                  height={1200}
                  priority
                  sizes="100vw"
                  className="w-full h-auto object-cover object-top"
                />
              </div>
              <div className="hidden md:block">
                <Image
                  src="/headerinternalimagedesktop4.png"
                  alt="XRP Tokyo 2026"
                  width={1920}
                  height={800}
                  priority
                  sizes="100vw"
                  className="w-full h-auto object-cover object-center"
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
