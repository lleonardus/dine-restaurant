import { focusOnSiblingWhenComplete } from "./utils/inputFunctions";

export function YearInput({ currentDate, register, dateError, clearErrors }) {
  const year = currentDate.getFullYear();

  return (
    <input
      placeholder="YYYY"
      min={year}
      max={year + 1}
      type="number"
      {...register("year", {
        required: "This field is incomplete",
        min: {
          value: year,
          message: "invalid date",
        },
        max: {
          value: year + 1,
          message: "invalid date",
        },
        onChange: (e) => {
          focusOnSiblingWhenComplete(e);
          clearErrors(["month", "day", "year"]);
        },
      })}
      className={`${dateError ? "border-red text-red placeholder:text-red/50" : ""}`}
    />
  );
}
