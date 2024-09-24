import { useEffect, useState } from "react";
import { Button } from "../../../ui/Button";

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

function getImgDimensions(windowSize) {
  if (windowSize < 768) {
    return { width: 326, height: 400 };
  } else if (windowSize < 1280) {
    return { width: 573, height: 360 };
  } else {
    return { width: 540, height: 600 };
  }
}

export function EventsAndGatheringsSection() {
  const [current, setCurrent] = useState(0);
  const [imgDimensions, setImgDimensions] = useState(
    getImgDimensions(window.innerWidth),
  );

  useEffect(function () {
    function handleResize() {
      setImgDimensions(getImgDimensions(window.innerWidth));
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="bg-white text-center text-ebony-clay tablet:bg-[url('/images/patterns/pattern-curve-top-right.svg')] tablet:bg-[length:50%_360px] tablet:bg-no-repeat desktop:bg-[length:643px_360px]">
      <div className="pb-[124px] pt-20 tablet:pb-[120px] xl:flex xl:gap-[125px] xl:px-[165px] xl:pb-40 xl:pt-40 desktop:px-[240px] desktop:pr-0">
        <div
          className={`mx-auto mb-[49px] h-[400px] w-[326px] shrink-0 overflow-hidden bg-shuttle-gray/20 shadow-[0px_100px_80px_-30px_rgba(0,0,0,0.25)] tablet:relative tablet:mb-[57px] tablet:h-[360px] tablet:w-[573px] tablet:overflow-visible tablet:shadow-[0px_100px_80px_-40px_rgba(0,0,0,0.25)] tablet:after:absolute tablet:after:-left-[58px] tablet:after:-top-[38px] tablet:after:h-[76px] tablet:after:w-40 tablet:after:bg-[url('/images/patterns/pattern-lines.svg')] xl:relative xl:m-0 xl:mb-0 xl:h-[600px] xl:w-[540px] xl:bg-center desktop:mb-0`}
        >
          <div className="h-full w-full overflow-hidden">
            <ImageList current={current} imgDimensions={imgDimensions} />
          </div>
        </div>
        <div className="xl:mb-[60px] xl:flex xl:flex-col-reverse">
          <ul className="mb-[27px] flex flex-col gap-4 tablet:mx-auto tablet:mb-[47px] tablet:max-w-[689px] tablet:flex-row xl:mx-0 xl:mb-0 xl:mt-[79px] xl:flex-col xl:text-left">
            {data.map((item, id) => (
              <Selector
                key={id}
                isCurrent={id === current}
                onClick={() => setCurrent(id)}
              >
                {item.title}
              </Selector>
            ))}
          </ul>
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
      </div>
    </section>
  );
}

function ImageList({ current, imgDimensions }) {
  return (
    <ul
      className={`h-full w-full transition-all duration-300 tablet:flex xl:block`}
      style={{
        transform: `${window.innerWidth < 768 || window.innerWidth > 1280 ? `translateY(-${current * imgDimensions.height}px)` : `translateX(-${current * imgDimensions.width}px)`}`,
      }}
    >
      {data.map((item, id) => {
        return <ImageItem key={id} title={item.title} />;
      })}
    </ul>
  );
}

function ImageItem({ title }) {
  const imgName = title.toLowerCase().replaceAll(" ", "-");
  return (
    <li className={`h-full tablet:min-w-[573px] xl:w-full xl:min-w-[540px]`}>
      <picture>
        <source
          media="(min-width:1280px)"
          srcSet={`/images/homepage/${imgName}-desktop.jpg`}
        />
        <source
          media="(min-width:768px)"
          srcSet={`/images/homepage/${imgName}-tablet.jpg`}
        />
        <img src={`/images/homepage/${imgName}-mobile.jpg`} alt={`${title}`} />
      </picture>
    </li>
  );
}

function Selector({ children, isCurrent, onClick }) {
  return (
    <li
      className={`relative mx-auto w-fit cursor-pointer text-[17px] font-semibold uppercase leading-[28px] tracking-[2.5px] transition-colors duration-[190ms] after:absolute after:bottom-0 after:left-[50%] after:h-[1px] after:w-0 after:translate-x-[-50%] after:bg-beaver after:transition-[width] after:duration-[190ms] hover:text-cod-gray xl:m-0 xl:after:-left-[125px] xl:after:top-[50%] xl:after:translate-x-0 xl:after:translate-y-[-50%] xl:after:duration-[300ms] ${isCurrent ? "text-cod-gray after:w-12 xl:after:w-[95px]" : "text-shuttle-gray"}`}
      onClick={onClick}
    >
      {children}
    </li>
  );
}
