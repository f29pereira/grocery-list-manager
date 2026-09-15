import type { FieldErrorMessageProps } from "./FieldErrorMessage.types";

/**
 * Returns a field error message
 *
 * Props are defined in {@link FieldErrorMessageProps}.
 */
export default function FieldErrorMessage({
  errorId,
  errorMessage,
}: FieldErrorMessageProps) {
  return (
    <span
      className="font-medium text-sm text-input-error 
                lg:text-base"
      id={errorId}
    >
      {errorMessage}
    </span>
  );
}
