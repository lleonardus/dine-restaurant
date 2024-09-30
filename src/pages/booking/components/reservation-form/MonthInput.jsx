import { focusOnSiblingWhenComplete } from "./utils/inputFunctions";
import { twoDigitsNumberFormatter } from "./utils/formatters";

export function MonthInput({ register, setValue, dateError, clearErrors }) {
  return (
    <input
      id="month"
      placeholder="MM"
      min={1}
      max={12}
      type="number"
      {...register("month", {
        required: "This field is incomplete",
        min: { value: 1, message: "invalid date" },
        max: { value: 12, message: "invalid date" },
        onChange: (e) => {
          focusOnSiblingWhenComplete(e);
          clearErrors(["month", "day", "year"]);
        },
        onBlur: (e) =>
          setValue("month", twoDigitsNumberFormatter(e.target.value)),
      })}
      className={`${dateError ? "border-red text-red placeholder:text-red/50" : ""}`}
    />
  );
}
