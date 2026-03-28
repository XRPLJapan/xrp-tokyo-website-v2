import { AGENDA_ITEMS, AGENDA_SPEAKERS } from "@/config/agenda";
import Image from "next/image";

const speakerMap = new Map(
  AGENDA_SPEAKERS.map((speaker) => [speaker.name, speaker]),
);

export default function AgendaPage() {
  const renderPersonCard = (
    itemTitle: string,
    personName: string,
    tag?: string,
  ) => {
    const speaker = speakerMap.get(personName);

    if (!speaker) {
      return (
        <div
          key={`${itemTitle}-${personName}-${tag ?? "speaker"}`}
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
        key={`${itemTitle}-${speaker.name}-${tag ?? "speaker"}`}
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
  };

  return (
    <main className="min-h-screen bg-[#000000] px-4 py-8 sm:px-6 lg:px-10 lg:py-10">
      <div className="mx-auto max-w-6xl">
        <section className="relative mb-6 overflow-hidden">
          <div className="absolute inset-0" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[length:100%_3px] opacity-[0.07]" />
          <div className="absolute left-1/2 top-[8%] h-28 w-[72%] -translate-x-1/2 rounded-full bg-white/12 blur-3xl" />

          <div className="relative z-10 flex min-h-[360px] flex-col items-center justify-center px-4 py-8 text-center sm:min-h-[420px] sm:px-6 lg:min-h-[560px] lg:px-10 lg:py-12">
            <Image
              src="https://cdn.prod.website-files.com/63905feb5ec39b55fbfcc10a/6937cee58307d36d0e7b93b7_xrp-tokyo-26-negrative.svg"
              alt="XRP Tokyo 2026 Logo"
              width={560}
              height={128}
              className="h-auto w-[300px] max-w-full sm:w-[420px] lg:w-[560px]"
              unoptimized
            />

            <p className="mt-3 text-[12px] font-extrabold tracking-[0.08em] text-white sm:text-sm lg:text-base">
              XRP TOKYO 2026 FIRST EDITION
            </p>

            <div className="mt-10 grid w-full max-w-[660px] grid-cols-2 items-start gap-4 sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:gap-6 lg:mt-12">
              <div className="flex min-w-0 flex-col items-start text-left">
                <span className="mb-2 text-[11px] font-bold tracking-[0.04em] text-[#B6B6B6] sm:mb-3 sm:text-sm">
                  Hosted By:
                </span>
                <div className="flex min-h-[52px] w-full items-center justify-start sm:min-h-[68px]">
                  <Image
                    src="https://cdn.prod.website-files.com/63905feb5ec39b55fbfcc10a/69b61ef4b73770a04d2b7115_xrp-white-and-color.svg"
                    alt="XRPL Japan"
                    width={208}
                    height={64}
                    className="h-auto w-[118px] sm:w-[190px] lg:w-[208px]"
                    unoptimized
                  />
                </div>
              </div>

              <div className="mx-auto hidden h-20  sm:block" />

              <div className="flex min-w-0 flex-col items-start text-left">
                <span className="mb-2 text-[11px] font-bold tracking-[0.04em] text-[#B6B6B6] sm:mb-3 sm:text-sm">
                  Managing Partner
                </span>
                <div className="flex min-h-[52px] w-full items-center justify-start sm:min-h-[68px]">
                  <Image
                    src="https://cdn.prod.website-files.com/63905feb5ec39b55fbfcc10a/69b61f578d878d06e0eea264_asia-web3.svg"
                    alt="Asia Web3 Alliance Japan"
                    width={228}
                    height={68}
                    className="h-auto w-[128px] sm:w-[204px] lg:w-[228px]"
                    unoptimized
                  />
                </div>
              </div>
            </div>

            <div className="mt-10 grid w-full max-w-[520px] grid-cols-[1.2fr_0.9fr_1.1fr] items-stretch overflow-hidden rounded-2xl border border-white/20 bg-black/72 backdrop-blur-sm">
              <div className="flex items-center justify-center gap-2 border-r border-white/10 px-4 py-4 sm:px-5">
                <span className="text-4xl leading-none font-extrabold text-white sm:text-5xl">
                  5
                </span>
                <span className="text-left text-xl font-semibold text-white/92 sm:text-2xl">
                  Floor
                </span>
              </div>

              <div className="flex items-center justify-center border-r border-white/10 px-3 text-center text-sm font-semibold leading-tight text-white/85 sm:px-4 sm:text-base">
                Day
                <br />
                Time
              </div>

              <div className="flex flex-col justify-center px-4 py-4 text-left sm:px-5">
                <span className="text-sm font-extrabold text-white sm:text-base">
                  April 7th
                </span>
                <span className="text-sm font-extrabold text-white sm:text-base">
                  09:00 ~ 18:00
                </span>
              </div>
            </div>

            <div className="mt-6 h-px w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
            <p className="mt-4 text-xl sm:text-2xl font-extrabold tracking-[0.28em] text-[#D4AF37] uppercase">
              Agenda
            </p>
          </div>
        </section>

        <p className="mb-6 text-center text-xs text-[#A0A0A0] sm:text-sm">
          Changes may occur to the agenda content. Please refer to this website
          for the latest information.
        </p>

        <div className="space-y-4 sm:space-y-5 lg:space-y-6">
          {AGENDA_ITEMS.map((item, itemIndex) => (
            <section
              key={`${item.time}-${item.title}-${itemIndex}`}
              className="relative grid items-start gap-3 sm:gap-4 lg:grid-cols-[220px_1fr] lg:gap-6"
            >
              <div className="pointer-events-none absolute top-0 bottom-0 left-[220px] hidden w-px bg-gradient-to-b from-[#D4AF37] via-[#f1d17a] to-transparent lg:block" />

              <div className="rounded-xl border border-[#D4AF37]/60 bg-[#0A0A0A] px-3 py-3 text-base leading-none font-semibold tracking-tight text-[#D4AF37] sm:text-lg lg:text-xl">
                <span className="inline-block whitespace-nowrap">
                  {item.time}
                </span>
                <span className="mt-2 block h-[2px] w-full bg-gradient-to-r from-[#D4AF37] to-transparent" />
              </div>

              <article className="rounded-xl border border-[#c6c7ac]/30 bg-[#0A0A0A] px-4 py-4 shadow-[0_8px_20px_rgba(0,0,0,0.35)] transition-shadow duration-300 hover:shadow-[0_0_22px_rgba(212,175,55,0.32)] sm:px-5 sm:py-5 lg:px-6">
                {item.track ? (
                  <p className="mb-2 inline-flex rounded-full border border-[#D4AF37] bg-black px-2 py-0.5 text-[11px] font-semibold tracking-[0.14em] text-white uppercase sm:text-xs">
                    {item.track}
                  </p>
                ) : null}

                <h2 className="text-xl leading-tight font-semibold tracking-tight text-white sm:text-2xl lg:text-[26px]">
                  {item.title}
                </h2>

                {item.speakerNames.length > 0 ||
                (item.moderatorNames?.length ?? 0) > 0 ? (
                  <div className="mt-4 grid gap-3 sm:mt-5 sm:grid-cols-2 xl:grid-cols-3">
                    {item.speakerNames.map((speakerName) =>
                      renderPersonCard(item.title, speakerName),
                    )}
                    {item.moderatorNames?.map((moderatorName) =>
                      renderPersonCard(item.title, moderatorName, "Moderator"),
                    )}
                  </div>
                ) : null}
              </article>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
