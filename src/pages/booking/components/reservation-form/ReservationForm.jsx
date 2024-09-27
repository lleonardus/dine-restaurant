import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  isDateValid,
  isDateAvailable,
  isTimeAvailable,
} from "./utils/dateValidators";
import { NameInput } from "./NameInput";
import { EmailInput } from "./EmailInput";
import { Label } from "./Label";
import { PeriodSelector } from "./PeriodSelector";
import { NumberOfPeopleSelector } from "./NumberOfPeopleSelector";
import { Button } from "../../../../ui/Button";
import { MonthInput } from "./MonthInput";
import { DayInput } from "./DayInput";

export function ReservationForm() {
  const [period, setPeriod] = useState("AM");
  const [numberOfPeople, setNumberOfPeople] = useState(4);

  const currentDate = new Date();

  const {
    register,
    handleSubmit,
    reset,
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

  async function onSubmit(formData) {
    //Simulating an API request
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const { name, email, day, month, year, hour, minutes } = formData;
    const date = new Date(
      year,
      month - 1,
      day,
      period === "PM" && hour < 12 ? Number.parseInt(hour) + 12 : hour,
      minutes,
    );

    if (!isDateValid(date, day, month, year) || !isDateAvailable(date)) {
      setError("month", { type: "custom", message: "Unavailable date" });
    } else if (!isTimeAvailable(date)) {
      setError("hour", { type: "custom", message: "Unavailable time" });
    } else {
      reset();

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
      onSubmit={handleSubmit(onSubmit)}
      className="absolute right-[50%] flex min-w-[327px] translate-x-[50%] translate-y-[-137px] flex-col bg-white px-8 pb-8 pt-[34px] shadow-[0px_100px_80px_-30px_rgba(0,0,0,0.25)] tablet:w-[540px] tablet:translate-y-[-230px] tablet:px-12 tablet:py-12 xl:right-[50%] xl:translate-x-[100%] xl:translate-y-[-341px] xl:before:absolute xl:before:bottom-0 xl:before:left-0 xl:before:h-[76px] xl:before:w-40 xl:before:-translate-x-20 xl:before:translate-y-[23px] xl:before:bg-[url('/images/patterns/pattern-lines.svg')] xl:before:bg-cover xl:before:bg-no-repeat xl:after:absolute xl:after:bottom-0 xl:after:left-0 xl:after:h-20 xl:after:w-20 xl:after:bg-white"
    >
      <NameInput register={register} errors={errors} />
      <EmailInput register={register} errors={errors} />
      <div className="mb-[34px] flex flex-col gap-2 tablet:flex-row tablet:items-center tablet:gap-[65px]">
        <Label
          htmlFor={"month"}
          error={dateError}
          errorMessage={
            errors.month?.message || errors.day?.message || errors.year?.message
          }
        >
          Pick a date
        </Label>
        <div className="grid grid-cols-[3fr_3fr_4.5fr] gap-[14px] tablet:grid-cols-[2fr_2fr_3fr]">
          <MonthInput
            register={register}
            dateError={dateError}
            clearListOfErrors={clearListOfErrors}
          />
          <DayInput
            register={register}
            dateError={dateError}
            clearListOfErrors={clearListOfErrors}
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
                value: currentDate.getFullYear() + 1,
                message: "invalid date",
              },
              onChange: () => clearListOfErrors(["month", "day", "year"]),
            })}
            className={`${dateError ? "border-red text-red placeholder:text-red/50" : ""}`}
          />
        </div>
      </div>
      <div className="mb-[34px] flex flex-col gap-2 tablet:flex-row tablet:items-center tablet:gap-[65px]">
        <Label
          htmlFor={"hour"}
          error={timeError}
          errorMessage={errors.hour?.message || errors.minutes?.message}
        >
          Pick a time
        </Label>
        <div className="grid grid-cols-[3fr_3fr_4.5fr] gap-[14px] tablet:grid-cols-[2fr_2fr_3fr]">
          <input
            id="hour"
            placeholder="09"
            type="number"
            {...register("hour", {
              required: "This field is incomplete",
              min: {
                value: period === "AM" ? 9 : 1,
                message: "Invalid date",
              },
              max: {
                value: period === "AM" ? 11 : 12,
                message: "Invalid date",
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
          <PeriodSelector
            period={period}
            setPeriod={setPeriod}
            clearListOfErrors={clearListOfErrors}
          />
        </div>
      </div>
      <NumberOfPeopleSelector
        numberOfPeople={numberOfPeople}
        setNumberOfPeople={setNumberOfPeople}
      />
      <Button theme={"light"} type={"submit"} disabled={isSubmitting}>
        {isSubmitting ? "Loading..." : "Make Reservation"}
      </Button>
    </form>
  );
}
