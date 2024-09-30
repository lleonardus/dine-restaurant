import { focusOnSiblingWhenComplete } from "./utils/inputFunctions";
import { twoDigitsNumberFormatter } from "./utils/formatters";

export function HourInput({
  period,
  register,
  setValue,
  timeError,
  clearErrors,
}) {
  const minValue = period === "AM" ? 9 : 1;
  const maxValue = period === "AM" ? 11 : 12;

  return (
    <input
      id="hour"
      placeholder="09"
      min={minValue}
      max={maxValue}
      type="number"
      {...register("hour", {
        required: "This field is incomplete",
        min: {
          value: minValue,
          message: "Invalid time",
        },
        max: {
          value: maxValue,
          message: "Invalid time",
        },
        onChange: (e) => {
          focusOnSiblingWhenComplete(e);
          clearErrors(["hour", "minutes"]);
        },
        onBlur: (e) =>
          setValue("hour", twoDigitsNumberFormatter(e.target.value)),
      })}
      className={`${timeError ? "border-red text-red placeholder:text-red/50" : ""}`}
    />
  );
}
