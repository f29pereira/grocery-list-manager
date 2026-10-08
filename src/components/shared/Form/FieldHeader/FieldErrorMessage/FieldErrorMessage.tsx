import type { FieldErrorMessageProps } from "./FieldErrorMessage.types";

/**
 * Returns a field error message
 *
 * The error message features an opacity animation
 *
 * Props are defined in {@link FieldErrorMessageProps}.
 */
export default function FieldErrorMessage({
  errorId,
  errorMessage,
}: FieldErrorMessageProps) {
  return (
    <div className="absolute mt-2">
      <span
        className="font-medium text-sm text-input-error
                transition-opacity duration-200 ease-out
                starting:opacity-0 motion-reduce:transition-none
                lg:text-base"
        id={errorId}
      >
        {errorMessage}
      </span>
    </div>
  );
}
