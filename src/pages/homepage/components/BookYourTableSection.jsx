import { Button } from "../../../ui/Button";

export function BookYourTableSection() {
  return (
    <section className="flex flex-col items-center gap-5 bg-black bg-[url('/images/homepage/ready-bg-mobile.jpg')] bg-cover bg-no-repeat px-6 pb-20 pt-[84px] tablet:bg-[url('/images/homepage/ready-bg-tablet.jpg')] tablet:pb-16 tablet:pt-[72px] xl:flex-row xl:gap-[250px] xl:bg-[url('/images/homepage/ready-bg-desktop.jpg')] xl:px-[165px] xl:py-[88px] xl:*:shrink-0 desktop:px-[240px]">
      <h2 className="mx-auto max-w-[327px] text-center text-[32px] font-bold leading-10 tracking-[-0.4px] text-white tablet:max-w-fit tablet:text-[48px] tablet:leading-[64px] tablet:tracking-[-0.5px] xl:m-0 xl:text-heading-lg">
        Ready to make a reservation?
      </h2>
      <Button theme={"dark"} to={"/booking"}>
        Book a table
      </Button>
    </section>
  );
}
