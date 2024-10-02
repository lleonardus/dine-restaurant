import { twoDigitsNumberFormatter } from "./utils/formatters";
import { focusOnSiblingWhenComplete } from "./utils/inputFunctions";

export function MinutesInput({ register, setValue, timeError, clearErrors }) {
  return (
    <input
      placeholder="00"
      type="number"
      {...register("minutes", {
        required: "This field is incomplete",
        min: { value: 0, message: "invalid time" },
        max: { value: 59, message: "invalid time" },
        onChange: (e) => {
          focusOnSiblingWhenComplete(e, 2);
          clearErrors(["hour", "minutes"]);
        },
        onBlur: (e) =>
          setValue("minutes", twoDigitsNumberFormatter(e.target.value)),
      })}
      className={`${timeError ? "border-red text-red placeholder:text-red/50" : ""}`}
    />
  );
}
