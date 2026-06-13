import type { AgendaItem } from "@/config/agenda";
import { AgendaPersonCard } from "@/components/agenda/agenda-person-card";
import type { AgendaSpeakerProfile } from "@/lib/speakers";
import { pickLocalizedString } from "@/lib/i18n-fields";
import type { Locale } from "@/lib/constants";
import { AGENDA_STYLES } from "@/lib/styles/common";
import { cn } from "@/lib/utils";

type AgendaSessionRowProps = {
  item: AgendaItem;
  locale: Locale;
  speakerMap: Map<string, AgendaSpeakerProfile>;
  moderatorLabel: string;
};

export function AgendaSessionRow({
  item,
  locale,
  speakerMap,
  moderatorLabel,
}: AgendaSessionRowProps) {
  const sessionTitle = pickLocalizedString(locale, item.title, item.titleJa);
  const noticeText = pickLocalizedString(locale, item.notice, item.noticeJa);

  return (
    <section className="relative grid items-start gap-3 sm:gap-4 lg:grid-cols-[220px_1fr] lg:gap-6">
      <div
        className={cn(
          "pointer-events-none absolute top-0 bottom-0 left-[220px] hidden w-px lg:block",
          AGENDA_STYLES.timelineLine,
        )}
      />

      <div
        className={cn(
          "rounded-xl border px-3 py-3 text-base leading-none font-semibold tracking-tight sm:text-lg lg:text-xl",
          AGENDA_STYLES.goldBorder,
          AGENDA_STYLES.surface,
          AGENDA_STYLES.goldText,
        )}
      >
        <span className="inline-block whitespace-nowrap">{item.time}</span>
        <span className={cn("mt-2 block", AGENDA_STYLES.goldDivider)} />
      </div>

      <article
        className={cn(
          "rounded-xl border px-4 py-4 transition-shadow duration-300 sm:px-5 sm:py-5 lg:px-6",
          AGENDA_STYLES.surfaceBorder,
          AGENDA_STYLES.surface,
          AGENDA_STYLES.sessionHover,
        )}
      >
        {item.track ? (
          <p className={AGENDA_STYLES.trackTag}>{item.track}</p>
        ) : null}

        <h2
          className={cn(
            "text-xl font-semibold tracking-tight text-white sm:text-2xl lg:text-[26px]",
            locale === "ja" ? "leading-relaxed" : "leading-tight",
          )}
        >
          {sessionTitle}
        </h2>

        {noticeText ? (
          <p
            className={cn(
              "mt-4 text-sm leading-relaxed sm:text-base",
              AGENDA_STYLES.mutedText,
            )}
          >
            {noticeText}
          </p>
        ) : null}

        {item.speakerNames.length > 0 ||
        (item.moderatorNames?.length ?? 0) > 0 ? (
          <div className="mt-4 grid gap-3 sm:mt-5 sm:grid-cols-2 xl:grid-cols-3">
            {item.speakerNames.map((speakerName) => (
              <AgendaPersonCard
                key={`${sessionTitle}-${speakerName}-speaker`}
                personName={speakerName}
                speaker={speakerMap.get(speakerName)}
              />
            ))}
            {item.moderatorNames?.map((moderatorName) => (
              <AgendaPersonCard
                key={`${sessionTitle}-${moderatorName}-moderator`}
                personName={moderatorName}
                tag={moderatorLabel}
                speaker={speakerMap.get(moderatorName)}
              />
            ))}
          </div>
        ) : null}
      </article>
    </section>
  );
}
