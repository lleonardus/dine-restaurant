import { focusOnPreviousSiblingWhenEmpty } from "./utils/inputFunctions";
import { ErrorMessage } from "./ErrorMessage";

export function EmailInput({ register, errors }) {
  return (
    <div className="mb-[34px]">
      <input
        placeholder="Email"
        type="text"
        onKeyDown={focusOnPreviousSiblingWhenEmpty}
        className={`${errors.email ? "border-red placeholder:text-red/50" : ""}`}
        {...register("email", {
          required: "This field is required",
          pattern: {
            value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            message: "Please use a valid email address",
          },
        })}
      />
      {errors.email && (
        <ErrorMessage className={"pl-4"}>{errors.email.message}</ErrorMessage>
      )}
    </div>
  );
}
