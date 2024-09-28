export function MinutesInput({ register, timeError, clearErrors }) {
  return (
    <input
      placeholder="00"
      type="number"
      {...register("minutes", {
        required: "This field is incomplete",
        min: { value: 0, message: "invalid time" },
        max: { value: 59, message: "invalid time" },
        onChange: () => clearErrors(["hour", "minutes"]),
      })}
      className={`${timeError ? "border-red text-red placeholder:text-red/50" : ""}`}
    />
  );
}
