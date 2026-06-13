import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { AgendaHero } from "@/components/agenda/agenda-hero";
import { AgendaSessionRow } from "@/components/agenda/agenda-session-row";
import { AGENDA_SPEAKER_OVERRIDES } from "@/config/agenda-speaker-overrides";
import { AGENDA_ITEMS } from "@/config/agenda";
import type { Locale } from "@/lib/constants";
import { getServerLocale } from "@/lib/locale-server";
import { getMetadata } from "@/lib/metadata";
import { buildSpeakerProfileMap } from "@/lib/speakers";
import { loadSiteData } from "@/lib/site-data";
import { AGENDA_STYLES } from "@/lib/styles/common";
import { cn } from "@/lib/utils";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const t = await getTranslations("agenda");
  const base = getMetadata(locale);

  return {
    ...base,
    title: `${t("title")} | XRP Tokyo 2026`,
    alternates: {
      ...base.alternates,
      canonical: new URL("/agenda", base.metadataBase!).toString(),
    },
  };
}

export default async function AgendaPage() {
  const locale = await getServerLocale();
  const t = await getTranslations("agenda");
  const { speakers } = await loadSiteData();
  const speakerMap = buildSpeakerProfileMap(
    speakers,
    locale,
    AGENDA_SPEAKER_OVERRIDES,
  );

  return (
    <main
      className={cn(
        AGENDA_STYLES.pageBg,
        "px-4 py-8 sm:px-6 lg:px-10 lg:py-10",
      )}
    >
      <div className="mx-auto max-w-6xl">
        <AgendaHero
          floorNumbers={t("floorNumbers")}
          floor={t("floor")}
          dayTimeLine1={t("dayTimeLine1")}
          dayTimeLine2={t("dayTimeLine2")}
          eventDate={t("eventDate")}
          eventTime={t("eventTime")}
          vipAfterParty={t("vipAfterParty")}
          vipTime={t("vipTime")}
          title={t("title")}
        />

        <p
          className={cn(
            "mb-6 text-center text-xs sm:text-sm",
            AGENDA_STYLES.mutedText,
          )}
        >
          {t("disclaimer")}
        </p>

        <div className="space-y-4 sm:space-y-5 lg:space-y-6">
          {AGENDA_ITEMS.map((item, itemIndex) => (
            <AgendaSessionRow
              key={`${item.time}-${item.title}-${itemIndex}`}
              item={item}
              locale={locale as Locale}
              speakerMap={speakerMap}
              moderatorLabel={t("moderator")}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
