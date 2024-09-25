export function SelectorItem({ children, isCurrent, onClick }) {
  return (
    <li
      className={`relative mx-auto w-fit cursor-pointer text-[17px] font-semibold uppercase leading-[28px] tracking-[2.5px] transition-colors duration-[190ms] after:absolute after:bottom-0 after:left-[50%] after:h-[1px] after:w-0 after:translate-x-[-50%] after:bg-beaver after:transition-[width] after:duration-[190ms] hover:text-cod-gray xl:m-0 xl:after:-left-[125px] xl:after:top-[50%] xl:after:translate-x-0 xl:after:translate-y-[-50%] xl:after:duration-[300ms] ${isCurrent ? "text-cod-gray after:w-12 xl:after:w-[95px]" : "text-shuttle-gray"}`}
      onClick={onClick}
    >
      {children}
    </li>
  );
}
