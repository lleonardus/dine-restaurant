import { ErrorMessage } from "./ErrorMessage";

export function Label({ children, htmlFor, error, errorMessage }) {
  return (
    <div className="relative shrink-0">
      <label
        htmlFor={htmlFor}
        className={`${error ? "border-red text-red" : ""}`}
      >
        {children}
      </label>
      {error && (
        <ErrorMessage className="max-tablet:absolute max-tablet:left-[100px] max-tablet:top-0">
          {errorMessage}
        </ErrorMessage>
      )}
    </div>
  );
}
