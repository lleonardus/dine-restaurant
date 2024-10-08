import {
  focusOnPreviousSiblingWhenEmpty,
  focusOnSiblingWhenComplete,
} from "./utils/inputFunctions";
import { twoDigitsNumberFormatter } from "./utils/formatters";

export function HourInput({
  period,
  register,
  setValue,
  timeError,
  clearErrors,
}) {
  return (
    <input
      id="hour"
      placeholder="09"
      type="number"
      onKeyDown={focusOnPreviousSiblingWhenEmpty}
      {...register("hour", {
        required: "This field is incomplete",
        min: {
          value: period === "AM" ? 9 : 1,
          message: "Invalid time",
        },
        max: {
          value: period === "AM" ? 11 : 12,
          message: "Invalid time",
        },
        onChange: (e) => {
          focusOnSiblingWhenComplete(e, 2);
          clearErrors(["hour", "minutes"]);
        },
        onBlur: (e) =>
          setValue("hour", twoDigitsNumberFormatter(e.target.value)),
      })}
      className={`${timeError ? "border-red text-red placeholder:text-red/50" : ""}`}
    />
  );
}
