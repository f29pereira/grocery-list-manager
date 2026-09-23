import type { SubmitErrorMessageProps } from "./SubmitErrorMessage.types";
import FormErrorMessage from "../FormErrorMessage/FormErrorMessage";

/**
 * Renders a error message if an error is caught after a form submission
 *
 * Props are defined in {@link SubmitErrorMessageProps}.
 */
export default function SubmitErrorMessage({
  message,
}: SubmitErrorMessageProps) {
  return (
    <div
      className="flex justify-center items-center h-full w-full 
                overflow-hidden"
      aria-live="assertive"
      aria-atomic="true"
    >
      {message ? <FormErrorMessage message={message} /> : null}
    </div>
  );
}
