import { useEffect, useRef, useState } from "react";

export function PeriodSelector({ period, setPeriod, clearErrors }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  function handleSelectOption(e) {
    setPeriod(e.target.innerText);
    setIsOpen(false);
    clearErrors(["hour", "minutes"]);
  }

  useEffect(function() {
    function handleBlur(e) {
      if (!ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleBlur);
    return () => document.removeEventListener("mousedown", handleBlur);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        onFocus={() => setIsOpen(true)}
        className="relative flex w-full cursor-pointer gap-[15px] border-b border-shuttle-gray/40 pb-[14px] pl-4 caret-beaver transition-colors hover:border-shuttle-gray focus:border-shuttle-gray focus:outline-none"
      >
        <span className="uppercase">{period}</span>
        <span
          className={`mt-[7px] h-[11px] w-[18px] bg-[url('/images/icons/icon-arrow.svg')] bg-cover bg-no-repeat transition-transform duration-300 ${isOpen ? "-rotate-180" : ""}`}
        ></span>
      </button>
      <ul
        className={`absolute z-[99999] grid w-[115%] translate-y-[10px] grid-rows-[0fr] bg-white text-center transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] pb-[13px] pt-[18px] shadow-[0px_20px_30px_0px_rgba(0,0,0,0.2)]" : ""}`}
      >
        <span className="space-y-4 overflow-hidden">
          <li
            className={`${period === "AM" ? "bg-[url('/images/icons/icon-check.svg')] bg-[length:13px_11px] bg-[top_8px_left_17px] bg-no-repeat" : ""}`}
          >
            <button type="button" onClick={handleSelectOption}>
              AM
            </button>
          </li>
          <li
            className={`${period === "PM" ? "bg-[url('/images/icons/icon-check.svg')] bg-[length:13px_11px] bg-[top_8px_left_17px] bg-no-repeat" : ""}`}
          >
            <button type="button" onClick={handleSelectOption}>
              PM
            </button>
          </li>
        </span>
      </ul>
    </div>
  );
}
