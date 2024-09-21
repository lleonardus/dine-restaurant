export function RestaurantOverviewSection() {
  return (
    <section>
      <div className="flex flex-col items-center px-[24px] text-center tablet:bg-[url('/images/patterns/pattern-curve-top-right.svg')] tablet:bg-[length:50%_320px] tablet:bg-[left_top_100px] tablet:bg-no-repeat tablet:px-0 xl:flex-row xl:items-start xl:bg-auto xl:bg-[left_top_250px] xl:text-left">
        <div className="mb-[48px] h-[400px] w-[327px] translate-y-[-72px] bg-[url('/images/homepage/enjoyable-place-mobile.jpg')] bg-center bg-no-repeat shadow-[0px_100px_80px_-30px_rgba(0,0,0,0.25)] tablet:mb-[0px] tablet:h-[360px] tablet:w-[573px] tablet:translate-y-[-96px] tablet:bg-[url('/images/homepage/enjoyable-place-tablet.jpg')] tablet:shadow-[0px_100px_80px_-40px_rgba(0,0,0,0.25)] xl:relative xl:ml-[165px] xl:h-[720px] xl:w-[540px] xl:translate-y-[-70px] xl:bg-[url('/images/homepage/enjoyable-place-desktop.jpg')] xl:bg-center"></div>
        <div className="translate-y-[-72px] bg-[url('/images/patterns/pattern-divide.svg')] bg-top bg-no-repeat pb-[29px] pt-[43px] text-ebony-clay tablet:translate-y-[-40px] tablet:pb-[78px] tablet:pt-[46px] xl:ml-[125px] xl:mr-[165px] xl:mt-[177px] xl:translate-y-0 xl:bg-left-top">
          <h2 className="mx-auto max-w-[250px] pb-[13px] text-[32px] font-bold leading-10 tracking-[-0.4px] tablet:max-w-[350px] tablet:pb-[27px] tablet:text-[48px] tablet:leading-[64px] tablet:tracking-[-0.5px] xl:m-0 xl:max-w-[380px] xl:text-heading-lg">
            Enjoyable place for all the family
          </h2>
          <p className="mx-auto max-w-[345px] text-body-sm tablet:max-w-[470px] tablet:text-body-base xl:m-0 xl:max-w-[445px]">
            Our relaxed surroundings make dining with us a great experience
            for everyone. We can even arrange a tour of the farm before your
            meal.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center px-[24px] pb-[101px] text-center tablet:bg-[url('/images/patterns/pattern-curve-top-left.svg')] tablet:bg-[length:50%_320px] tablet:bg-right-bottom tablet:bg-no-repeat tablet:px-0 tablet:pb-[118px] xl:grid xl:grid-cols-2 xl:flex-row xl:items-end xl:bg-[length:62%_320px] xl:pb-0 xl:text-left">
        <div className="mb-[48px] h-[400px] w-[327px] bg-[url('/images/homepage/locally-sourced-mobile.jpg')] bg-center bg-no-repeat shadow-[0px_100px_80px_-30px_rgba(0,0,0,0.25)] drop-shadow-2xl tablet:relative tablet:mb-[56px] tablet:h-[360px] tablet:w-[573px] tablet:bg-[url('/images/homepage/locally-sourced-tablet.jpg')] tablet:shadow-[0px_100px_80px_-40px_rgba(0,0,0,0.25)] tablet:after:absolute tablet:after:bottom-14 tablet:after:right-[-58px] tablet:after:h-[76px] tablet:after:w-40 tablet:after:bg-[url('/images/patterns/pattern-lines.svg')] tablet:after:bg-left tablet:after:bg-no-repeat xl:relative xl:col-start-2 xl:mb-0 xl:ml-[30px] xl:mr-[165px] xl:h-[720px] xl:w-[540px] xl:translate-y-20 xl:bg-[url('/images/homepage/locally-sourced-desktop.jpg')] xl:bg-center xl:after:bottom-[362px] xl:after:right-[-114px]"></div>
        <div className="mx-auto w-full bg-[url('/images/patterns/pattern-divide.svg')] bg-top bg-no-repeat pt-[43px] text-ebony-clay tablet:pt-[46px] xl:col-start-1 xl:row-start-1 xl:ml-[165px] xl:mr-[125px] xl:bg-left-top xl:pb-[165px]">
          <h2 className="mx-auto max-w-[250px] pb-[13px] text-[32px] font-bold leading-10 tracking-[-0.4px] tablet:max-w-[350px] tablet:pb-[27px] tablet:text-heading-lg xl:m-0 xl:max-w-[380px]">
            The most locally sourced food
          </h2>
          <p className="mx-auto max-w-[345px] text-body-sm tablet:max-w-[470px] tablet:text-body-base xl:m-0 xl:max-w-[445px]">
            All our ingredients come directly from our farm or local
            fishery. So you can be sure that you’re eating the freshest,
            most sustainable food.
          </p>
        </div>
      </div>
    </section>
  )
}
