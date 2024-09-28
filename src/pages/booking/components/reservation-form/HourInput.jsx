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
        onChange: () => clearErrors(["hour", "minutes"]),
        onBlur: (e) =>
          setValue("hour", twoDigitsNumberFormatter(e.target.value))
        ,
      })}
      className={`${timeError ? "border-red text-red placeholder:text-red/50" : ""}`}
    />
  );
}
