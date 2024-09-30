export function RestaurantOverviewSection() {
  return (
    <section>
      <div className="flex flex-col items-center px-[24px] text-center tablet:bg-[url('/images/patterns/pattern-curve-top-right.svg')] tablet:bg-[length:50%_320px] tablet:bg-[left_top_100px] tablet:bg-no-repeat tablet:px-0 xl:flex-row xl:items-start xl:bg-auto xl:bg-[left_top_250px] xl:px-[165px] xl:text-left desktop:bg-[length:50%_320px] desktop:px-[240px] desktop:pr-[165px]">
        <picture className="skeleton-animation mb-[48px] h-[400px] w-[327px] shrink-0 translate-y-[-72px] shadow-[0px_100px_80px_-30px_rgba(0,0,0,0.25)] tablet:mb-[0px] tablet:h-[360px] tablet:w-[573px] tablet:translate-y-[-96px] tablet:shadow-[0px_100px_80px_-40px_rgba(0,0,0,0.25)] xl:relative xl:h-[720px] xl:w-[540px] xl:translate-y-[-70px] xl:bg-center">
          <source
            media="(min-width: 1280px)"
            srcSet="/images/homepage/enjoyable-place-desktop@2x.jpg"
          />
          <source
            media="(min-width: 768px)"
            srcSet="/images/homepage/enjoyable-place-tablet@2x.jpg"
          />
          <img
            src="/images/homepage/enjoyable-place-mobile@2x.jpg"
            alt="enjoyable place"
          />
        </picture>
        <div className="translate-y-[-72px] bg-[url('/images/patterns/pattern-divide.svg')] bg-top bg-no-repeat pb-[29px] pt-[43px] text-ebony-clay tablet:translate-y-[-40px] tablet:pb-[78px] tablet:pt-[46px] xl:ml-[125px] xl:mt-[177px] xl:translate-y-0 xl:bg-left-top">
          <h2 className="mx-auto max-w-[250px] pb-[13px] text-[32px] font-bold leading-10 tracking-[-0.4px] tablet:max-w-[350px] tablet:pb-[27px] tablet:text-[48px] tablet:leading-[64px] tablet:tracking-[-0.5px] xl:m-0 xl:max-w-[380px] xl:text-heading-lg">
            Enjoyable place for all the family
          </h2>
          <p className="mx-auto max-w-[345px] text-body-sm tablet:max-w-[470px] tablet:text-body-base xl:m-0 xl:max-w-[445px]">
            Our relaxed surroundings make dining with us a great experience for
            everyone. We can even arrange a tour of the farm before your meal.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center px-[24px] pb-[101px] text-center tablet:bg-[url('/images/patterns/pattern-curve-top-left.svg')] tablet:bg-[length:50%_320px] tablet:bg-right-bottom tablet:bg-no-repeat tablet:px-0 tablet:pb-[118px] xl:flex-row-reverse xl:items-end xl:bg-[length:62%_320px] xl:px-[165px] xl:pb-0 xl:text-left desktop:px-[230px]">
        <picture className="skeleton-animation mb-[48px] h-[400px] w-[327px] shrink-0 shadow-[0px_100px_80px_-30px_rgba(0,0,0,0.25)] drop-shadow-2xl tablet:relative tablet:mb-[56px] tablet:h-[360px] tablet:w-[573px] tablet:shadow-[0px_100px_80px_-40px_rgba(0,0,0,0.25)] tablet:after:absolute tablet:after:bottom-14 tablet:after:right-[-58px] tablet:after:h-[76px] tablet:after:w-40 tablet:after:bg-[url('/images/patterns/pattern-lines.svg')] tablet:after:bg-left tablet:after:bg-no-repeat xl:relative xl:mb-0 xl:h-[720px] xl:w-[540px] xl:translate-y-20 xl:after:bottom-[362px] xl:after:right-[-114px]">
          <source
            media="(min-width: 1280px)"
            srcSet="/images/homepage/locally-sourced-desktop@2x.jpg"
          />
          <source
            media="(min-width: 768px)"
            srcSet="/images/homepage/locally-sourced-tablet@2x.jpg"
          />
          <img
            src="/images/homepage/locally-sourced-mobile@2x.jpg"
            alt="Chef finishing dish on plate"
          />
        </picture>
        <div className="mx-auto w-full bg-[url('/images/patterns/pattern-divide.svg')] bg-top bg-no-repeat pt-[43px] text-ebony-clay tablet:pt-[46px] xl:mr-[125px] xl:bg-left-top xl:pb-[165px]">
          <h2 className="mx-auto max-w-[250px] pb-[13px] text-[32px] font-bold leading-10 tracking-[-0.4px] tablet:max-w-[350px] tablet:pb-[27px] tablet:text-heading-lg xl:m-0 xl:max-w-[380px]">
            The most locally sourced food
          </h2>
          <p className="mx-auto max-w-[345px] text-body-sm tablet:max-w-[470px] tablet:text-body-base xl:m-0 xl:max-w-[445px]">
            All our ingredients come directly from our farm or local fishery. So
            you can be sure that you’re eating the freshest, most sustainable
            food.
          </p>
        </div>
      </div>
    </section>
  );
}
