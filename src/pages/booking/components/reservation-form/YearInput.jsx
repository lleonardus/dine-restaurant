export function YearInput({
  currentDate,
  register,
  dateError,
  clearListOfErrors,
}) {
  return (
    <input
      placeholder="YYYY"
      type="number"
      {...register("year", {
        required: "This field is incomplete",
        min: {
          value: currentDate.getFullYear(),
          message: "invalid date",
        },
        max: {
          value: currentDate.getFullYear() + 1,
          message: "invalid date",
        },
        onChange: () => clearListOfErrors(["month", "day", "year"]),
      })}
      className={`${dateError ? "border-red text-red placeholder:text-red/50" : ""}`}
    />
  );
}
