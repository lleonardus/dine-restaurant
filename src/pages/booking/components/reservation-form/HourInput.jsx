export function HourInput({ period, register, timeError, clearListOfErrors }) {
  return (
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
  );
}
