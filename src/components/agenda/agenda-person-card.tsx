import type { AgendaSpeakerProfile } from "@/lib/speakers";
import { AGENDA_STYLES } from "@/lib/styles/common";
import { cn } from "@/lib/utils";

type AgendaPersonCardProps = {
  personName: string;
  tag?: string;
  speaker?: AgendaSpeakerProfile;
};

export function AgendaPersonCard({
  personName,
  tag,
  speaker,
}: AgendaPersonCardProps) {
  if (!speaker) {
    return (
      <div
        className={cn(
          "rounded-xl border p-3",
          AGENDA_STYLES.goldBorderSoft,
          AGENDA_STYLES.surface,
        )}
      >
        {tag ? <p className={AGENDA_STYLES.tag}>{tag}</p> : null}
        <p className="text-sm font-semibold text-white">{personName}</p>
      </div>
    );
  }

  const initials = speaker.name
    .split(" ")
    .map((value) => value[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className={cn(
        "flex items-start gap-3 rounded-xl border p-3",
        AGENDA_STYLES.cardBorder,
        AGENDA_STYLES.surface,
      )}
    >
      <div
        className={cn(
          "h-12 w-12 shrink-0 overflow-hidden rounded-full border bg-black sm:h-14 sm:w-14",
          AGENDA_STYLES.goldBorderSoft,
        )}
      >
        {speaker.image ? (
          // biome-ignore lint/performance/noImgElement: static agenda avatar with graceful 404 fallback
          <img
            src={speaker.image}
            alt={speaker.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <div
            className={cn(
              "flex h-full w-full items-center justify-center text-xs font-semibold",
              AGENDA_STYLES.mutedText,
            )}
          >
            {initials}
          </div>
        )}
      </div>

      <div>
        {tag ? <p className={cn("mb-1", AGENDA_STYLES.tag)}>{tag}</p> : null}
        <p className="text-base leading-5 font-semibold tracking-tight text-white sm:text-lg">
          {speaker.name}
        </p>
        <p
          className={cn(
            "text-xs leading-4 sm:text-sm",
            AGENDA_STYLES.mutedText,
          )}
        >
          {speaker.role}
        </p>
        <p
          className={cn(
            "text-xs leading-4 sm:text-sm",
            AGENDA_STYLES.mutedText,
          )}
        >
          {speaker.company}
        </p>
      </div>
    </div>
  );
}
