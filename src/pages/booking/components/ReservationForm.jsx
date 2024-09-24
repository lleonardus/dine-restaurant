import { useState } from "react";
import { Button } from "../../../ui/Button";

export function ReservationForm() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [email, setEmail] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");
  const [dateError, setDateError] = useState("");
  const [hour, setHour] = useState("");
  const [minutes, setMinutes] = useState("");
  const [period, setPeriod] = useState("AM");
  const [isOpen, setIsOpen] = useState(false);
  const [timeError, setTimeError] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState(4);

  function handleInputChange(e, setInputValue, setInputError) {
    setInputValue(e.target.value);
    setInputError(false);
  }

  function isEmpty(string) {
    return string.trim() === "";
  }

  function isEmail(email) {
    const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    return regex.test(email);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (isEmpty(name)) {
      setNameError(true);
      return;
    }

    if (isEmpty(email)) {
      setEmailError("This field is required");
      return;
    }

    if (!isEmail(email)) {
      setEmailError("Please use a valid email address");
      return;
    }

    if (isEmpty(month) || isEmpty(day) || isEmpty(year)) {
      setDateError("This field is incomplete");
      return;
    }

    if (isEmpty(hour) || isEmpty(minutes) || isEmpty(period)) {
      setTimeError("This field is incomplete");
      return;
    }

    console.log("submited");
  }

  return (
    <form
      id="form"
      onSubmit={handleSubmit}
      className="absolute right-[50%] flex min-w-[327px] translate-x-[50%] translate-y-[-137px] flex-col bg-white px-8 pb-8 pt-[34px] shadow-[0px_100px_80px_-30px_rgba(0,0,0,0.25)] tablet:w-[540px] tablet:translate-y-[-230px] tablet:px-12 tablet:py-12 xl:right-[50%] xl:translate-x-[100%] xl:translate-y-[-341px] xl:before:absolute xl:before:bottom-0 xl:before:left-0 xl:before:h-[76px] xl:before:w-40 xl:before:-translate-x-20 xl:before:translate-y-[23px] xl:before:bg-[url('/images/patterns/pattern-lines.svg')] xl:before:bg-cover xl:before:bg-no-repeat xl:after:absolute xl:after:bottom-0 xl:after:left-0 xl:after:h-20 xl:after:w-20 xl:after:bg-white"
    >
      <div className="mb-[34px]">
        <input
          className={`${nameError ? "border-red placeholder:text-red/50" : ""}`}
          placeholder="Name"
          type="text"
          value={name}
          onChange={(e) => handleInputChange(e, setName, setNameError)}
        />
        {nameError && <ErrorMessage>This field is required</ErrorMessage>}
      </div>
      <div className="mb-[34px]">
        <input
          className={`${emailError ? "border-red placeholder:text-red/50" : ""}`}
          value={email}
          onChange={(e) => handleInputChange(e, setEmail, setEmailError)}
          placeholder="Email"
          type="text"
        />
        {emailError && <ErrorMessage>{emailError}</ErrorMessage>}
      </div>
      <div className="mb-[34px] flex flex-col gap-2 tablet:flex-row tablet:items-center tablet:gap-[65px]">
        <div className="relative shrink-0">
          <label
            htmlFor="month"
            className={`${dateError ? "border-red text-red" : ""}`}
          >
            Pick a date
          </label>
          {dateError && (
            <ErrorMessage className="max-tablet:absolute max-tablet:left-[100px] max-tablet:top-0">
              {dateError}
            </ErrorMessage>
          )}
        </div>
        <div className="grid grid-cols-[3fr_3fr_4.5fr] gap-[14px] tablet:grid-cols-[2fr_2fr_3fr]">
          <input
            value={month}
            className={`${dateError ? "border-red text-red placeholder:text-red/50" : ""}`}
            onChange={(e) => handleInputChange(e, setMonth, setDateError)}
            id="month"
            placeholder="MM"
            type="number"
          />
          <input
            value={day}
            className={`${dateError ? "border-red text-red placeholder:text-red/50" : ""}`}
            onChange={(e) => handleInputChange(e, setDay, setDateError)}
            placeholder="DD"
            type="number"
          />
          <input
            value={year}
            className={`${dateError ? "border-red text-red placeholder:text-red/50" : ""}`}
            onChange={(e) => handleInputChange(e, setYear, setDateError)}
            placeholder="YYYY"
            type="number"
          />
        </div>
      </div>
      <div className="mb-[34px] flex flex-col gap-2 tablet:flex-row tablet:items-center tablet:gap-[65px]">
        <div className="relative shrink-0">
          <label
            htmlFor="hour"
            className={`${timeError ? "border-red text-red" : ""}`}
          >
            Pick a time
          </label>
          {timeError && (
            <ErrorMessage className="max-tablet:absolute max-tablet:left-[100px] max-tablet:top-0">
              {timeError}
            </ErrorMessage>
          )}
        </div>
        <div className="grid grid-cols-[3fr_3fr_4.5fr] gap-[14px] tablet:grid-cols-[2fr_2fr_3fr]">
          <input
            value={hour}
            className={`${timeError ? "border-red text-red placeholder:text-red/50" : ""}`}
            onChange={(e) => handleInputChange(e, setHour, setTimeError)}
            id="hour"
            placeholder="09"
            type="number"
          />
          <input
            value={minutes}
            className={`${timeError ? "border-red text-red placeholder:text-red/50" : ""}`}
            onChange={(e) => handleInputChange(e, setMinutes, setTimeError)}
            placeholder="00"
            type="number"
          />
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsOpen((isOpen) => !isOpen)}
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
                  <button type="button" onClick={() => setPeriod("AM")}>
                    AM
                  </button>
                </li>
                <li
                  className={`${period === "PM" ? "bg-[url('/images/icons/icon-check.svg')] bg-[length:13px_11px] bg-[top_8px_left_17px] bg-no-repeat" : ""}`}
                >
                  <button type="button" onClick={() => setPeriod("PM")}>
                    PM
                  </button>
                </li>
              </span>
            </ul>
          </div>
        </div>
      </div>
      <div className="mb-8 flex items-center justify-between border-b border-shuttle-gray/40 px-[19px] pb-[17px]">
        <button
          type="button"
          className={`h-[3px] w-3 bg-[url('/images/icons/icon-minus.svg')] bg-cover bg-no-repeat hover:opacity-55 ${numberOfPeople === 1 ? "cursor-not-allowed opacity-55" : ""}`}
          onClick={() => setNumberOfPeople((n) => (n > 1 ? n - 1 : 1))}
        ></button>
        <p className="text-heading-base">
          {numberOfPeople} {numberOfPeople > 1 ? "people" : "person"}
        </p>
        <button
          type="button"
          className="h-[11px] w-[10px] bg-[url('/images/icons/icon-plus.svg')] bg-cover bg-no-repeat hover:opacity-55"
          onClick={() => setNumberOfPeople((n) => n + 1)}
        ></button>
      </div>
      <Button theme={"light"} type={"submit"}>
        Make Reservation
      </Button>
    </form>
  );
}

function ErrorMessage({ children, className }) {
  return (
    <p
      className={`font-base text-[10px] tracking-[-0.13px] text-red ${className}`}
    >
      {children}
    </p>
  );
}
