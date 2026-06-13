import { EVENT_INFO } from "@/lib/constants";
import { AGENDA_STYLES } from "@/lib/styles/common";
import { cn } from "@/lib/utils";

type AgendaHeroProps = {
  floorNumbers: string;
  floor: string;
  dayTimeLine1: string;
  dayTimeLine2: string;
  eventDate: string;
  eventTime: string;
  vipAfterParty: string;
  vipTime: string;
  title: string;
};

export function AgendaHero({
  floorNumbers,
  floor,
  dayTimeLine1,
  dayTimeLine2,
  eventDate,
  eventTime,
  vipAfterParty,
  vipTime,
  title,
}: AgendaHeroProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto flex flex-col items-center px-4 py-0 text-center sm:px-6 lg:px-10">
        <div className="mt-8 grid w-full max-w-[700px] grid-cols-2 items-stretch overflow-hidden rounded-2xl border border-white/20 bg-black/72 backdrop-blur-sm sm:grid-cols-4">
          <div className="flex items-center justify-center gap-2 border-r border-b border-white/10 px-4 py-5 sm:border-b-0 sm:py-6">
            <span className="text-4xl font-extrabold text-white sm:text-5xl">
              {floorNumbers}
            </span>
            <span className="text-lg font-semibold text-white/90 sm:text-2xl">
              {floor}
            </span>
          </div>

          <div className="flex items-center justify-center border-b border-white/10 px-3 py-5 text-center text-sm font-semibold text-white/85 sm:border-b-0 sm:border-r sm:py-6 sm:text-base">
            {dayTimeLine1}
            <br />
            {dayTimeLine2}
          </div>

          <div className="flex flex-col justify-center border-r border-white/10 px-4 py-5 text-center sm:text-left sm:py-6">
            <span className="text-sm font-extrabold text-white sm:text-base">
              {eventDate}
            </span>
            <span className="text-sm font-extrabold text-white sm:text-base">
              {eventTime}
            </span>
          </div>

          <div className="flex flex-col justify-center px-4 py-5 text-center sm:text-left sm:py-6">
            <span
              className={cn(
                "text-sm font-extrabold sm:text-base",
                AGENDA_STYLES.goldText,
              )}
            >
              {vipAfterParty}
            </span>
            <span className="text-sm font-extrabold text-white sm:text-base">
              {vipTime}
            </span>
            <a
              href={EVENT_INFO.vipAfterPartyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "mt-1 inline-block text-[9px] font-semibold whitespace-nowrap sm:text-xs",
                AGENDA_STYLES.link,
              )}
            >
              {EVENT_INFO.vipAfterPartyUrl}
            </a>
          </div>
        </div>

        <div className={cn("mt-2", AGENDA_STYLES.goldAccentLine)} />
        <p
          className={cn(
            "mt-2 text-xl font-extrabold tracking-[0.28em] uppercase sm:text-2xl",
            AGENDA_STYLES.goldText,
          )}
        >
          {title}
        </p>
      </div>
    </section>
  );
}
