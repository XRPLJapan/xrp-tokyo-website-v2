import type { AgendaSpeakerProfile } from "@/lib/speakers";

type AgendaPersonCardProps = {
  itemTitle: string;
  personName: string;
  tag?: string;
  speaker?: AgendaSpeakerProfile;
};

export function AgendaPersonCard({
  itemTitle,
  personName,
  tag,
  speaker,
}: AgendaPersonCardProps) {
  if (!speaker) {
    return (
      <div
        className="rounded-xl border border-[#D4AF37]/50 bg-[#0A0A0A] p-3"
      >
        {tag ? (
          <p className="mb-2 inline-flex rounded-full border border-[#D4AF37] bg-black px-2 py-0.5 text-[10px] font-bold tracking-[0.1em] text-white uppercase">
            {tag}
          </p>
        ) : null}
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
      className="flex items-start gap-3 rounded-xl border border-[#c6c7ac]/20 bg-[#0A0A0A] p-3"
    >
      <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full border border-[#D4AF37]/50 bg-black sm:h-14 sm:w-14">
        {speaker.image ? (
          // biome-ignore lint/performance/noImgElement: static agenda avatar with graceful 404 fallback
          <img
            src={speaker.image}
            alt={speaker.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-xs font-semibold text-[#A0A0A0]">
            {initials}
          </div>
        )}
      </div>

      <div>
        {tag ? (
          <p className="mb-1 inline-flex rounded-full border border-[#D4AF37] bg-black px-2 py-0.5 text-[10px] font-bold tracking-[0.1em] text-white uppercase">
            {tag}
          </p>
        ) : null}
        <p className="text-base leading-5 font-semibold tracking-tight text-white sm:text-lg">
          {speaker.name}
        </p>
        <p className="text-xs leading-4 text-[#A0A0A0] sm:text-sm">
          {speaker.role}
        </p>
        <p className="text-xs leading-4 text-[#A0A0A0] sm:text-sm">
          {speaker.company}
        </p>
      </div>
    </div>
  );
}
