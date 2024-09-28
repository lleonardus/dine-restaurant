export function DayInput({ register, dateError, clearErrors }) {
  return (
    <input
      placeholder="DD"
      type="number"
      {...register("day", {
        required: "This field is incomplete",
        min: { value: 1, message: "invalid date" },
        max: { value: 31, message: "invalid date" },
        onChange: () => clearErrors(["month", "day", "year"]),
      })}
      className={`${dateError ? "border-red text-red placeholder:text-red/50" : ""}`}
    />
  );
}
