import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { BRAND_STYLES, SECTION_STYLES } from "@/lib/styles/common";
import { cn } from "@/lib/utils";

export async function HighlightsSection() {
  const t = await getTranslations("highlightsSection");

  return (
    <section
      id="highlights"
      className="relative w-full bg-black text-white scroll-mt-24"
    >
      <div className={`${SECTION_STYLES.container} py-16 md:py-24`}>
        <div className="flex flex-col items-center text-center">
          <p className={BRAND_STYLES.kicker}>{t("kicker")}</p>
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold">
            {t("title")}
          </h2>
          <div className={BRAND_STYLES.kickerDivider} />
        </div>

        <div className="relative mt-12 w-full mx-auto">
          <div
            className={cn(
              "relative w-full overflow-hidden transition-transform duration-500 ease-out md:hover:scale-105",
            )}
          >
            <div className="block md:hidden">
              <Image
                src="/agenda-mobile.jpeg"
                alt={t("title")}
                width={800}
                height={1200}
                priority
                sizes="100vw"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="hidden md:block">
              <Image
                src="/highlights.jpg"
                alt={t("title")}
                width={1920}
                height={800}
                priority
                sizes="100vw"
                className="w-full h-auto object-cover md:object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
