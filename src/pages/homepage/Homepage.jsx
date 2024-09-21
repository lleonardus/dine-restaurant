import { Header } from "./components/Header";
import { RestaurantOverviewSection } from "./components/RestaurantOverviewSection";

export function Homepage() {
  return (
    <div>
      <Header />
      <main className="relative z-[9999] bg-white">
        <RestaurantOverviewSection />
        <section className="border border-white bg-black py-[100px]">
          <p>another section</p>
        </section>
      </main>
    </div>
  );
}
