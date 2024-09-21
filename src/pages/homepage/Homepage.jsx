import { Header } from "./components/Header";
import { RestaurantOverviewSection } from "./components/RestaurantOverviewSection";
import { MenuHighlightsSection } from "./components/MenuHighlightsSection";

export function Homepage() {
  return (
    <div>
      <Header />
      <main className="relative z-[9999] bg-white">
        <RestaurantOverviewSection />
        <MenuHighlightsSection />
        <section className="bg-white py-10"></section>
      </main>
    </div>
  );
}
