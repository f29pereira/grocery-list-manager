import type { FormSuccessMessageProps } from "./FormSucessMessage.types";
import { IoMdCheckmark } from "@/assets/icons/icon";

/**
 * Renders a general form success message with a checkmark icon
 *
 * The checkmark icon features a pop-in animation
 */
export default function FormSuccessMessage({
  message,
}: FormSuccessMessageProps) {
  return (
    <div
      className="w-full p-2
                border-2 border-solid border-brand
              bg-green-50 dark:bg-transparent
                rounded-full"
    >
      <div className="flex justify-center items-center gap-2">
        <IoMdCheckmark
          className="shrink-0 text-2xl text-brand
                    motion-safe:animate-pop-in"
          aria-hidden="true"
        />
        <p className="font-medium text-sm text-brand " aria-live="assertive">
          {message}
        </p>
      </div>
    </div>
  );
}
