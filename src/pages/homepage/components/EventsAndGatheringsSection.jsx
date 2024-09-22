import { useState } from "react";
import { Button } from "../../../ui/Button";

const data = {
  0: {
    title: "Family Gathering",
    text: "We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.",
    imgClasses:
      "bg-[url('/images/homepage/family-gathering-mobile.jpg')] tablet:bg-[url('/images/homepage/family-gathering-tablet.jpg')] xl:bg-[url('/images/homepage/family-gathering-desktop.jpg')]",
  },
  1: {
    title: "Special Events",
    text: "Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.",
    imgClasses:
      "bg-[url('/images/homepage/special-events-mobile.jpg')] tablet:bg-[url('/images/homepage/special-events-tablet.jpg')] xl:bg-[url('/images/homepage/special-events-desktop.jpg')]",
  },
  2: {
    title: "Social Events",
    text: "Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.",
    imgClasses:
      "bg-[url('/images/homepage/social-events-mobile.jpg')] tablet:bg-[url('/images/homepage/social-events-tablet.jpg')] xl:bg-[url('/images/homepage/social-events-desktop.jpg')]",
  },
};

export function EventsAndGatheringsSection() {
  const [current, setCurrent] = useState(0);

  return (
    <section className="bg-white text-center text-ebony-clay tablet:bg-[url('/images/patterns/pattern-curve-top-right.svg')] tablet:bg-[length:50%_360px] tablet:bg-no-repeat desktop:bg-[length:643px_360px]">
      <div className="pb-[124px] pt-20 tablet:pb-[120px] xl:flex xl:gap-[125px] xl:px-[165px] xl:pb-40 xl:pt-40 desktop:px-[240px] desktop:pr-0">
        <div
          className={`mx-auto mb-[49px] h-[400px] w-[326px] shrink-0 bg-shuttle-gray/20 bg-center bg-no-repeat shadow-[0px_100px_80px_-30px_rgba(0,0,0,0.25)] tablet:relative tablet:mb-[57px] tablet:h-[360px] tablet:w-[573px] tablet:shadow-[0px_100px_80px_-40px_rgba(0,0,0,0.25)] tablet:after:absolute tablet:after:-left-[58px] tablet:after:-top-[38px] tablet:after:h-[76px] tablet:after:w-40 tablet:after:bg-[url('/images/patterns/pattern-lines.svg')] xl:relative xl:m-0 xl:mb-0 xl:h-[600px] xl:w-[540px] xl:bg-center desktop:mb-0 ${data[current].imgClasses}`}
        ></div>
        <div className="xl:mb-[60px] xl:flex xl:flex-col-reverse">
          <ul className="mb-[27px] flex flex-col gap-4 tablet:mx-auto tablet:mb-[47px] tablet:max-w-[689px] tablet:flex-row xl:mx-0 xl:mb-0 xl:mt-[79px] xl:flex-col xl:text-left">
            {Array.from({ length: 3 }).map((_, id) => (
              <Selector
                key={id}
                isCurrent={id === current}
                onClick={() => setCurrent(id)}
              >
                {data[id].title}
              </Selector>
            ))}
          </ul>
          <div className="flex flex-col items-center xl:items-start xl:text-left">
            <div className="mb-[27px] tablet:mb-[60px]">
              <h2 className="mx-auto max-w-[327px] pb-[13px] text-[32px] font-bold leading-10 tracking-[-0.4px] tablet:max-w-[445px] tablet:pb-[27px] tablet:text-[48px] tablet:leading-[64px] tablet:tracking-[-0.5px] xl:m-0 xl:max-w-[380px] xl:text-heading-lg">
                {data[current].title}
              </h2>
              <p className="mx-auto max-w-[345px] text-body-sm tablet:max-w-[470px] tablet:text-body-base xl:m-0 xl:max-w-[445px]">
                {data[current].text}
              </p>
            </div>
            <Button theme={"light"} to={"/booking"}>
              Book a table
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Selector({ children, isCurrent, onClick }) {
  return (
    <li
      className={`relative mx-auto w-fit cursor-pointer text-[17px] font-semibold uppercase leading-[28px] tracking-[2.5px] transition-colors duration-[190ms] after:absolute after:bottom-0 after:left-[50%] after:h-[1px] after:w-0 after:translate-x-[-50%] after:bg-beaver after:transition-[width] after:duration-[190ms] hover:text-cod-gray xl:m-0 xl:after:-left-[125px] xl:after:top-[50%] xl:after:translate-x-0 xl:after:translate-y-[-50%] ${isCurrent ? "text-cod-gray after:w-12 xl:after:w-[95px]" : "text-shuttle-gray"}`}
      onClick={onClick}
    >
      {children}
    </li>
  );
}
