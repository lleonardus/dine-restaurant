import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../../../ui/Button";

//TODO criar arquivo separado para ErrorMessage
//TODO separar campos em components para melhorar a readability

export function ReservationForm() {
  const [period, setPeriod] = useState("AM");
  const [isOpen, setIsOpen] = useState(false);
  const [numberOfPeople, setNumberOfPeople] = useState(4);

  const currentDate = new Date();

  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      year: currentDate.getFullYear(),
    },
  });

  const dateError = errors.month || errors.day || errors.year;
  const timeError = errors.hour || errors.minutes;

  function clearListOfErrors(list) {
    list.forEach((error) => clearErrors(error));
  }

  function isDateAvailable(date) {
    const now = new Date();

    return now.getTime() <= date.getTime();
  }

  function isTimeWithinRange(
    startHour,
    startMinutes,
    endHour,
    endMinutes,
    date,
  ) {
    const hours = date.getHours();
    const minutes = date.getMinutes();

    return (
      (hours > startHour || (hours === startHour && minutes >= startMinutes)) &&
      (hours < endHour || (hours === endHour && minutes <= endMinutes))
    );
  }

  function isTimeAvailable(date) {
    const isWeekend = date.getDay() === 0 || date.getDay() === 6;

    return (
      (isWeekend && isTimeWithinRange(9, 0, 23, 30, date)) ||
      (!isWeekend && isTimeWithinRange(9, 0, 22, 0, date))
    );
  }

  async function onSubmit(formData) {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const { name, email, day, month, year, hour, minutes } = formData;
    const date = new Date(
      year,
      month - 1,
      day,
      period === "PM" && hour < 12 ? Number.parseInt(hour) + 12 : hour,
      minutes,
    );

    if (!isDateAvailable(date)) {
      setError("month", { type: "custom", message: "Unavailable date" });
    } else if (!isTimeAvailable(date)) {
      setError("hour", { type: "custom", message: "Unavailable time" });
    } else {
      const formattedDate = date.toLocaleDateString("en-US");
      const formattedTime = date.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });
      const formatted = `${formattedDate} at ${formattedTime.toLowerCase()}`;
      alert(
        `Hello, ${name}. Your reservation for ${numberOfPeople} ${numberOfPeople > 1 ? "people" : "person"} on ${formatted} has been made successfully! For more information, see the email that we sent to ${email}`,
      );
    }
  }

  return (
    <form
      id="form"
      onSubmit={handleSubmit(onSubmit)}
      className="absolute right-[50%] flex min-w-[327px] translate-x-[50%] translate-y-[-137px] flex-col bg-white px-8 pb-8 pt-[34px] shadow-[0px_100px_80px_-30px_rgba(0,0,0,0.25)] tablet:w-[540px] tablet:translate-y-[-230px] tablet:px-12 tablet:py-12 xl:right-[50%] xl:translate-x-[100%] xl:translate-y-[-341px] xl:before:absolute xl:before:bottom-0 xl:before:left-0 xl:before:h-[76px] xl:before:w-40 xl:before:-translate-x-20 xl:before:translate-y-[23px] xl:before:bg-[url('/images/patterns/pattern-lines.svg')] xl:before:bg-cover xl:before:bg-no-repeat xl:after:absolute xl:after:bottom-0 xl:after:left-0 xl:after:h-20 xl:after:w-20 xl:after:bg-white"
    >
      <div className="mb-[34px]">
        <input
          placeholder="Name"
          type="text"
          className={`${errors.name ? "border-red placeholder:text-red/50" : ""}`}
          {...register("name", {
            required: "This field is required",
            onChange: () => clearErrors("name"),
          })}
        />
        {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
      </div>
      <div className="mb-[34px]">
        <input
          placeholder="Email"
          type="text"
          className={`${errors.email ? "border-red placeholder:text-red/50" : ""}`}
          onChange={() => clearErrors("name")}
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              message: "Please use a valid email address",
            },
            onChange: () => clearErrors("name"),
          })}
        />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
      </div>
      <div className="mb-[34px] flex flex-col gap-2 tablet:flex-row tablet:items-center tablet:gap-[65px]">
        <div className="relative shrink-0 gap-0">
          <label
            htmlFor="month"
            className={`${dateError ? "border-red text-red" : ""}`}
          >
            Pick a date
          </label>
          {dateError && (
            <ErrorMessage className="max-tablet:absolute max-tablet:left-[100px] max-tablet:top-0">
              {errors.month?.message ||
                errors.day?.message ||
                errors.year?.message}
            </ErrorMessage>
          )}
        </div>
        <div className="grid grid-cols-[3fr_3fr_4.5fr] gap-[14px] tablet:grid-cols-[2fr_2fr_3fr]">
          <input
            id="month"
            placeholder="MM"
            type="number"
            {...register("month", {
              required: "This field is incomplete",
              min: { value: 1, message: "invalid date" },
              max: { value: 12, message: "invalid date" },
              onChange: () => clearListOfErrors(["month", "day", "year"]),
            })}
            className={`${dateError ? "border-red text-red placeholder:text-red/50" : ""}`}
          />
          <input
            placeholder="DD"
            type="number"
            {...register("day", {
              required: "This field is incomplete",
              min: { value: 1, message: "invalid date" },
              max: { value: 31, message: "invalid date" },
              onChange: () => clearListOfErrors(["month", "day", "year"]),
            })}
            className={`${dateError ? "border-red text-red placeholder:text-red/50" : ""}`}
          />
          <input
            placeholder="YYYY"
            type="number"
            {...register("year", {
              required: "This field is incomplete",
              min: {
                value: currentDate.getFullYear(),
                message: "invalid date",
              },
              max: {
                value: currentDate.getFullYear() + 6,
                message: "invalid date",
              },
              onChange: () => clearListOfErrors(["month", "day", "year"]),
            })}
            className={`${dateError ? "border-red text-red placeholder:text-red/50" : ""}`}
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
              {errors.hour?.message || errors.minutes?.message}
            </ErrorMessage>
          )}
        </div>
        <div className="grid grid-cols-[3fr_3fr_4.5fr] gap-[14px] tablet:grid-cols-[2fr_2fr_3fr]">
          <input
            id="hour"
            placeholder="09"
            type="number"
            {...register("hour", {
              required: "This field is incomplete",
              min: {
                value: 1,
                message: "Invalid date",
              },
              max: {
                value: 12,
                message: "Invalid date",
              },
              validate: (hour) => {
                return Number.parseInt(hour) === 12 && period === "AM"
                  ? "Invalid time"
                  : true;
              },
              onChange: () => clearListOfErrors(["hour", "minutes"]),
            })}
            className={`${timeError ? "border-red text-red placeholder:text-red/50" : ""}`}
          />
          <input
            placeholder="00"
            type="number"
            {...register("minutes", {
              required: "This field is incomplete",
              min: { value: 0, message: "invalid time" },
              max: { value: 59, message: "invalid time" },
              onChange: () => clearListOfErrors(["hour", "minutes"]),
            })}
            className={`${timeError ? "border-red text-red placeholder:text-red/50" : ""}`}
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
                  <button
                    type="button"
                    onClick={() => {
                      setPeriod("AM");
                      clearListOfErrors(["hour", "minutes"]);
                    }}
                  >
                    AM
                  </button>
                </li>
                <li
                  className={`${period === "PM" ? "bg-[url('/images/icons/icon-check.svg')] bg-[length:13px_11px] bg-[top_8px_left_17px] bg-no-repeat" : ""}`}
                >
                  <button
                    type="button"
                    onClick={() => {
                      setPeriod("PM");
                      clearListOfErrors(["hour", "minutes"]);
                    }}
                  >
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
      <Button theme={"light"} type={"submit"} disabled={isSubmitting}>
        {isSubmitting ? "Loading" : "Make Reservation"}
      </Button>
    </form>
  );
}

function ErrorMessage({ children, className }) {
  return (
    <p
      className={`font-base block text-[10px] tracking-[-0.13px] text-red ${className}`}
    >
      {children}
    </p>
  );
}
