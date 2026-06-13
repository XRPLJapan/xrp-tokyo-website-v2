import { Hero } from "@/components/section/hero";
import { HubSection } from "@/components/section/hub-section";
import { HighlightsSection } from "@/components/section/highlights-section";
import { EventOverview } from "@/components/event-overview";
import { NextSection } from "@/components/section/next-section";
import { SponsorSection } from "@/components/section/sponsor-section";
import { SpeakerSection } from "@/components/section/speaker-section";
import { MobileTicketButton } from "@/components/mobile-ticket-button";
import { HomeFooter } from "@/components/home/home-footer";
import { loadSiteData } from "@/lib/site-data";

export default async function Home() {
  const { speakers, sponsors } = await loadSiteData();

  return (
    <main className="bg-background">
      <div className="wrapper">
        <section className="relative w-full bg-background sticky top-0">
          <Hero />
        </section>

        <EventOverview />
        <HubSection />
        <HighlightsSection />
        <SpeakerSection speakers={speakers} />
        <SponsorSection sponsors={sponsors} />
        <NextSection />
      </div>

      <HomeFooter />
      <MobileTicketButton />
    </main>
  );
}
