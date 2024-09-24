import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="w-full bg-black px-5 py-20 text-center text-[14px] font-normal uppercase leading-7 tracking-[2px] text-white tablet:flex tablet:pl-[39px] tablet:text-left xl:px-[165px] desktop:px-[240px]">
      <Logo className="mx-auto flex h-[40px] w-[103.42px] justify-center tablet:mx-0" />
      <div className="flex flex-col gap-8 pt-[42px] tablet:pl-[129.58px] tablet:pt-0 lg:flex-row lg:gap-[100px] desktop:gap-[124px] desktop:pl-[192.58px]">
        <div>
          <p>Marthwaite, Sedbergh</p>
          <p>Cumbria</p>
          <p>+00 44 123 4567</p>
        </div>
        <div>
          <h4>OPEN TIMES</h4>
          <p>MON - FRI: 09:00 AM - 10:00 PM</p>
          <p>SAT - SUN: 09:00 AM - 11:30 PM</p>
        </div>
      </div>
    </footer>
  );
}
