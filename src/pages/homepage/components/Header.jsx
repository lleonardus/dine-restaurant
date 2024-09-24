import { Button } from "../../../ui/Button";
import { Logo } from "../../../ui/Logo";

export function Header() {
  return (
    <header className="relative xl:flex xl:flex-row-reverse">
      <div className="relative bg-cod-gray pt-[220px] tablet:pt-[369px] xl:z-[9999] xl:w-[60%]">
        <picture className="absolute right-[50%] top-0 w-[375px] translate-x-[50%] tablet:w-[768px] xl:right-0 xl:w-[1370px] xl:translate-x-0 desktop:w-[1551px]">
          <source
            media="(min-width: 1280px)"
            srcSet="/images/homepage/hero-bg-desktop.jpg"
          />
          <source
            media="(min-width: 768px)"
            srcSet="/images/homepage/hero-bg-tablet.jpg"
          />
          <img
            className="xl:h-[855px] xl:w-full"
            src="/images/homepage/hero-bg-mobile.jpg"
            alt="shrimp pasta"
          />
        </picture>
      </div>
      <div className="relative flex flex-col items-center bg-black px-6 pb-[152px] pt-3 text-white tablet:pb-[216px] xl:z-[9999] xl:shrink-0 xl:items-start xl:bg-cod-gray xl:pb-[198px] xl:pl-[165px] xl:pr-0 xl:before:absolute xl:before:left-0 xl:before:top-0 xl:before:-z-10 xl:before:h-full xl:before:w-[544px] xl:before:bg-black desktop:pl-[240px] desktop:before:w-[620px]">
        <Logo className="h-8 w-[82.4px] *:h-full *:w-full tablet:h-10 tablet:w-[103px] xl:mt-[65px]" />
        <div className="space-y-[21px] pb-[53px] pt-9 text-center tablet:space-y-5 tablet:pb-[52px] xl:pt-[153px] xl:text-left">
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
