import { Button } from "../../../ui/Button";

export function Header() {
  return (
    <header>
      <div className="bg-cod-gray bg-[url('/images/homepage/hero-bg-mobile.jpg')] bg-auto bg-top bg-no-repeat pt-[220px] tablet:bg-[url('/images/homepage/hero-bg-tablet.jpg')] tablet:pt-[373px] xl:hidden"></div>
      <div className="relative flex flex-col items-center bg-black px-6 pb-[152px] pt-3 text-white tablet:pb-[216px] xl:z-[9999] xl:items-start xl:bg-[url('/images/homepage/hero-bg-desktop.jpg')] xl:bg-contain xl:bg-right xl:bg-no-repeat xl:px-[165px] xl:pb-[198px] xl:before:absolute xl:before:left-0 xl:before:top-0 xl:before:z-[-1] xl:before:h-full xl:before:w-[545px] xl:before:bg-black xl:after:absolute xl:after:left-[545px] xl:after:top-0 xl:after:z-[-1] xl:after:h-full xl:after:w-[235px] xl:after:bg-cod-gray desktop:px-[240px] desktop:before:w-[845px] desktop:after:left-[620px] desktop:after:w-[230px]">
        <div className="xl:pt-[65px]">
          <img src="/images/logo.svg" alt="logo" />
        </div>
        <div className="space-y-[21px] pb-[53px] pt-9 text-center tablet:space-y-5 tablet:pb-[52px] xl:text-left">
          <h1 className="mx-auto max-w-[250px] text-[32px] font-light leading-10 tracking-[-0.4px] tablet:max-w-[300px] tablet:text-[48px] tablet:leading-[64px] tablet:tracking-[-0.6px] xl:m-0 xl:max-w-[580px] xl:text-heading-xl">
            Exquisite dining since 1989
          </h1>
          <p className="max-w-[573px] text-body-sm tablet:text-body-base xl:max-w-[445px]">
            Experience our seasonal menu in beautiful country surroundings. Eat
            the freshest produce from the comfort of our farmhouse.
          </p>
        </div>
        <Button theme={"dark"} to={"/booking"}>
          Book a table
        </Button>
      </div>
    </header>
  );
}
