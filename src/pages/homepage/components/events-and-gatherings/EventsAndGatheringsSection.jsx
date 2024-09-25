import { useState } from "react";
import { Gallery } from "./Gallery";
import { ImageList } from "./ImageList";
import { ImageItem } from "./ImageItem";
import { SelectorList } from "./SelectorList";
import { SelectorItem } from "./SelectorItem";
import { Button } from "../../../../ui/Button";

const data = [
  {
    title: "Family Gathering",
    text: "We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.",
  },
  {
    title: "Special Events",
    text: "Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.",
  },
  {
    title: "Social Events",
    text: "Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.",
  },
];

export function EventsAndGatheringsSection() {
  const [current, setCurrent] = useState(0);

  return (
    <section className="bg-white pb-[124px] pt-20 text-center text-ebony-clay tablet:bg-[url('/images/patterns/pattern-curve-top-right.svg')] tablet:bg-[length:50%_360px] tablet:bg-no-repeat tablet:py-[120px] xl:flex xl:gap-[125px] xl:px-[165px] xl:py-40 desktop:bg-[length:643px_360px] desktop:px-[240px] desktop:pr-0">
      <div className="mx-auto mb-[49px] h-[400px] w-[326px] shrink-0 bg-shuttle-gray/20 shadow-[0px_100px_80px_-30px_rgba(0,0,0,0.25)] tablet:relative tablet:mb-[57px] tablet:h-[360px] tablet:w-[573px] tablet:overflow-visible tablet:shadow-[0px_100px_80px_-40px_rgba(0,0,0,0.25)] tablet:after:absolute tablet:after:-left-[58px] tablet:after:-top-[38px] tablet:after:h-[76px] tablet:after:w-40 tablet:after:bg-[url('/images/patterns/pattern-lines.svg')] xl:relative xl:m-0 xl:mb-0 xl:h-[600px] xl:w-[540px] xl:bg-center desktop:mb-0">
        <Gallery>
          <ImageList current={current}>
            {data.map((item, id) => {
              return <ImageItem key={id} title={item.title} />;
            })}
          </ImageList>
        </Gallery>
      </div>
      <div className="xl:mb-[60px] xl:flex xl:flex-col-reverse">
        <SelectorList>
          {data.map((item, id) => (
            <SelectorItem
              key={id}
              isCurrent={id === current}
              onClick={() => setCurrent(id)}
            >
              {item.title}
            </SelectorItem>
          ))}
        </SelectorList>
        <div className="flex flex-col items-center xl:items-start xl:text-left">
          <div className="mb-[27px] tablet:mb-[60px] xl:mb-[30px]">
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
    </section>
  );
}
