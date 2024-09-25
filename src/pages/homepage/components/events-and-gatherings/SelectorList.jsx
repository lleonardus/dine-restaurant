export function SelectorList({ children }) {
  return (
    <ul className="mb-[27px] flex flex-col gap-4 tablet:mx-auto tablet:mb-[47px] tablet:max-w-[689px] tablet:flex-row xl:mx-0 xl:mb-0 xl:mt-[79px] xl:flex-col xl:text-left">
      {children}
    </ul>
  );
}
