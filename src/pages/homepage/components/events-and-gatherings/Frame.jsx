export function Frame({ children }) {
  return (
    <div className="mx-auto mb-[49px] h-[400px] w-[326px] shrink-0 bg-shuttle-gray/20 shadow-[0px_100px_80px_-30px_rgba(0,0,0,0.25)] tablet:relative tablet:mb-[57px] tablet:h-[360px] tablet:w-[573px] tablet:overflow-visible tablet:shadow-[0px_100px_80px_-40px_rgba(0,0,0,0.25)] tablet:after:absolute tablet:after:-left-[58px] tablet:after:-top-[38px] tablet:after:h-[76px] tablet:after:w-40 tablet:after:bg-[url('/images/patterns/pattern-lines.svg')] xl:relative xl:m-0 xl:mb-0 xl:h-[600px] xl:w-[540px] xl:bg-center desktop:mb-0">
      {children}
    </div>
  );
}
