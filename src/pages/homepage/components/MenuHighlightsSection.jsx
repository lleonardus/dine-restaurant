export function MenuHighlightsSection() {
  return (
    <section className="bg-black pb-[102px] pt-[72px] text-center text-white tablet:pb-[96px] tablet:pt-[96px] xl:flex xl:justify-between xl:gap-[125px] xl:px-[165px] xl:pb-[120px] xl:pl-[165px] xl:pt-[200px] xl:text-left desktop:px-[240px]">
      <div className="bg-[url('/images/patterns/pattern-divide.svg')] bg-top bg-no-repeat pt-[43px] tablet:pt-[46px] xl:bg-left-top">
        <h2 className="mx-auto max-w-[327px] pb-[13px] text-[32px] font-bold leading-10 tracking-[-0.4px] tablet:max-w-[445px] tablet:pb-[27px] tablet:text-[48px] tablet:leading-[64px] tablet:tracking-[-0.5px] xl:m-0 xl:max-w-[380px] xl:text-heading-lg">
          A few highlights from our menu
        </h2>
        <p className="mx-auto max-w-[345px] text-body-sm tablet:max-w-[470px] tablet:text-body-base xl:m-0 xl:max-w-[445px]">
          We cater for all dietary requirements, but here’s a glimpse at some of
          our diner’s favourites. Our menu is revamped every season.
        </p>
      </div>
      <ul className="mt-[85px] flex shrink-0 flex-col items-center divide-y divide-solid divide-beaver tablet:mt-[54px] tablet:text-left xl:w-[540px]">
        <li className="flex w-[327px] flex-col items-center gap-9 pb-6 tablet:w-auto tablet:flex-row tablet:items-start tablet:gap-[63px]">
          <picture className="skeleton-animation h-[245px] w-[327px] shrink-0 tablet:relative tablet:h-[96px] tablet:w-[128px] tablet:after:absolute tablet:after:-right-8 tablet:after:top-[18px] tablet:after:h-[1px] tablet:after:w-8 tablet:after:bg-beaver">
            <source
              media="(min-width: 768px)"
              srcSet="/images/homepage/salmon-desktop-tablet.jpg"
            />
            <img
              src="/images/homepage/salmon-mobile.jpg"
              alt="Seared Salmon Fillet"
            />
          </picture>
          <div className="tablet:max-w-[383px] tablet:pt-2">
            <h3 className="pb-[6px] text-heading-base">Seared Salmon Fillet</h3>
            <p className="text-body-sm">
              Our locally sourced salmon served with a refreshing buckwheat
              summer salad.
            </p>
          </div>
        </li>
        <li className="flex w-[327px] flex-col items-center gap-9 py-6 tablet:w-auto tablet:flex-row tablet:items-start tablet:gap-[63px]">
          <picture className="skeleton-animation h-[245px] w-[327px] shrink-0 tablet:relative tablet:h-[96px] tablet:w-[128px] tablet:after:absolute tablet:after:-right-8 tablet:after:top-[18px] tablet:after:h-[1px] tablet:after:w-8 tablet:after:bg-beaver">
            <source
              media="(min-width: 768px)"
              srcSet="/images/homepage/beef-desktop-tablet.jpg"
            />
            <img
              src="/images/homepage/beef-mobile.jpg"
              alt="Rosemary Filet Mignon"
            />
          </picture>
          <div className="tablet:max-w-[383px] tablet:pt-2">
            <h3 className="pb-[6px] text-heading-base">
              Rosemary Filet Mignon
            </h3>
            <p className="text-body-sm">
              Our prime beef served to your taste with a delicious choice of
              seasonal sides.
            </p>
          </div>
        </li>
        <li className="flex w-[327px] flex-col items-center gap-9 pt-6 tablet:w-auto tablet:flex-row tablet:items-start tablet:gap-[63px]">
          <picture className="skeleton-animation h-[245px] w-[327px] shrink-0 tablet:relative tablet:h-[96px] tablet:w-[128px] tablet:after:absolute tablet:after:-right-8 tablet:after:top-[18px] tablet:after:h-[1px] tablet:after:w-8 tablet:after:bg-beaver">
            <source
              media="(min-width: 768px)"
              srcSet="/images/homepage/chocolate-desktop-tablet.jpg"
            />
            <img
              src="/images/homepage/chocolate-mobile.jpg"
              alt="Summer Fruit Chocolate Mousse"
            />
          </picture>
          <div className="tablet:max-w-[383px] tablet:pt-2">
            <h3 className="pb-[6px] text-heading-base">
              Summer Fruit Chocolate Mousse
            </h3>
            <p className="text-body-sm">
              Creamy mousse combined with summer fruits and dark chocolate
              shavings.
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
}
