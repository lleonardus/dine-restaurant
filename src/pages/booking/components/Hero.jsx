export function Hero() {
  return (
    <header className="relative h-min bg-black bg-[url('/images/booking/hero-bg-mobile.jpg')] bg-cover bg-no-repeat px-6 pb-[311px] pt-[56px] text-white tablet:bg-[url('/images/booking/hero-bg-tablet.jpg')] tablet:px-[39px] tablet:pb-[268px] xl:items-start xl:bg-[url('/images/booking/hero-bg-desktop.jpg')] xl:px-[165px] xl:pb-[154px] xl:pt-[65px] desktop:px-[240px]">
      <div className="flex justify-center tablet:block">
        <img src="/images/logo.svg" alt="logo" />
      </div>
      <div className="space-y-[13px] pt-11 text-center tablet:space-y-3 tablet:pt-[70px] xl:space-y-[18px] xl:pt-[153px] xl:text-left">
        <h1 className="mx-auto max-w-[250px] text-[32px] font-light leading-10 tracking-[-0.4px] tablet:max-w-[300px] tablet:text-[48px] tablet:leading-[64px] tablet:tracking-[-0.6px] xl:m-0 xl:max-w-[580px] xl:text-heading-xl">
          Reservations
        </h1>
        <p className="mx-auto max-w-[573px] text-body-sm tablet:text-body-base xl:m-0 xl:max-w-[445px]">
          We can’t wait to host you. If you have any special requirements please
          feel free to call on the phone number below. We’ll be happy to
          accommodate you.
        </p>
      </div>
    </header>
  );
}
