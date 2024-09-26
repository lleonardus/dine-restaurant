import { Hero } from "./components/Hero";
import { ReservationForm } from "./components/reservation-form/ReservationForm";

export function Booking() {
  return (
    <>
      <Hero />
      <main className="relative h-[533px] text-[20px] font-normal leading-7 tablet:h-[435px] xl:h-[320px] xl:bg-[url('/images/patterns/pattern-curve-bottom-right.svg')] xl:bg-no-repeat">
        <ReservationForm />
      </main>
    </>
  );
}
