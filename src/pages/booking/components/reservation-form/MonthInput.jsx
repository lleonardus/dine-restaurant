export function MonthInput({ register, dateError, clearErrors }) {
  return (
    <input
      id="month"
      placeholder="MM"
      type="number"
      {...register("month", {
        required: "This field is incomplete",
        min: { value: 1, message: "invalid date" },
        max: { value: 12, message: "invalid date" },
        onChange: () => clearErrors(["month", "day", "year"]),
      })}
      className={`${dateError ? "border-red text-red placeholder:text-red/50" : ""}`}
    />
  );
}
