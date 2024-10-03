import {
  focusOnPreviousSiblingWhenEmpty,
  focusOnSiblingWhenComplete,
} from "./utils/inputFunctions";
import { twoDigitsNumberFormatter } from "./utils/formatters";

export function DayInput({ register, setValue, dateError, clearErrors }) {
  return (
    <input
      placeholder="DD"
      type="number"
      onKeyDown={focusOnPreviousSiblingWhenEmpty}
      {...register("day", {
        required: "This field is incomplete",
        min: { value: 1, message: "invalid date" },
        max: { value: 31, message: "invalid date" },
        onChange: (e) => {
          focusOnSiblingWhenComplete(e, 2);
          clearErrors(["month", "day", "year"]);
        },
        onBlur: (e) =>
          setValue("day", twoDigitsNumberFormatter(e.target.value)),
      })}
      className={`${dateError ? "border-red text-red placeholder:text-red/50" : ""}`}
    />
  );
}
