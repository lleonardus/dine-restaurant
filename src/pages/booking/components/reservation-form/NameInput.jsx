import { ErrorMessage } from "./ErrorMessage";

export function NameInput({ register, errors }) {
  return (
    <div className="mb-[34px]">
      <input
        placeholder="Name"
        type="text"
        className={`${errors.name ? "border-red placeholder:text-red/50" : ""}`}
        {...register("name", {
          required: "This field is required",
          validate: {
            minLength: (value) =>
              value.length >= 3 || "Name must be at least 3 characters",
            maxLength: (value) =>
              value.length <= 30 || "Name must be at most 30 characters",
            noSpecialChars: (value) =>
              /^[A-Za-zÀ-ÖØ-öø-ÿÇç\s~]+$/.test(value) ||
              "Name must not contain special characters",
          },
        })}
      />
      {errors.name && (
        <ErrorMessage className={"pl-4"}>{errors.name.message}</ErrorMessage>
      )}
    </div>
  );
}
