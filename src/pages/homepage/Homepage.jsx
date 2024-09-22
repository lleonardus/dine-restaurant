import { Header } from "./components/Header";
import { RestaurantOverviewSection } from "./components/RestaurantOverviewSection";
import { MenuHighlightsSection } from "./components/MenuHighlightsSection";
import { EventsAndGatheringsSection } from "./components/EventsAndGatheringsSection";
import { BookYourTableSection } from "./components/BookYourTableSection";

export function Homepage() {
  return (
    <>
      <Header />
      <main className="relative z-[9999] bg-white">
        <RestaurantOverviewSection />
        <MenuHighlightsSection />
        <EventsAndGatheringsSection />
        <BookYourTableSection />
      </main>
    </>
  );
}
