import type { SubmitMessageProps } from "./SubmitMessage.types";
import FormErrorMessage from "./FormErrorMessage/FormErrorMessage";
import FormSuccessMessage from "./FormSucessMessage/FormSucessMessage";

/**
 * Renders an error or success message after a form submission
 */
export default function SubmitMessage({ status, message }: SubmitMessageProps) {
  return (
    <div
      className="flex justify-center items-center h-full w-full 
                overflow-hidden"
      aria-live={status === "error" ? "assertive" : "polite"}
      aria-atomic="true"
    >
      {status === "error" && message !== "" && (
        <FormErrorMessage message={message} />
      )}

      {status === "success" && message !== "" && (
        <FormSuccessMessage message={message} />
      )}
    </div>
  );
}
