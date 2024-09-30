import { twoDigitsNumberFormatter } from "./utils/formatters";
import { focusOnSiblingWhenComplete } from "./utils/inputFunctions";

export function DayInput({ register, setValue, dateError, clearErrors }) {
  return (
    <input
      placeholder="DD"
      type="number"
      min={1}
      max={31}
      {...register("day", {
        required: "This field is incomplete",
        min: { value: 1, message: "invalid date" },
        max: { value: 31, message: "invalid date" },
        onChange: (e) => {
          focusOnSiblingWhenComplete(e);
          clearErrors(["month", "day", "year"]);
        },
        onBlur: (e) =>
          setValue("day", twoDigitsNumberFormatter(e.target.value)),
      })}
      className={`${dateError ? "border-red text-red placeholder:text-red/50" : ""}`}
    />
  );
}
