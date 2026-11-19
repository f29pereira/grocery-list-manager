import type { DeleteAccountButtonProps } from "./DeleteAccountButton.types";
import { FaUserTimes } from "@/assets/icons/icon";
import SubmitButton from "@/components/ui/Buttons/SubmitButton/SubmitButton";

/**
 * Renders a delete user account button
 *
 * Props are defined in {@link DeleteAccountButtonProps}.
 */
export default function DeleteAccountButton({
  isSubmitting,
  isDisabled,
  handleClick,
  description,
}: DeleteAccountButtonProps) {
  return (
    <SubmitButton
      styles="text-white bg-red-600 dark:bg-red-400
              shadow-lg shadow-red-600/50
              theme-transition
              hover:bg-red-500 dark:hover:bg-red-300"
      isSubmitting={isSubmitting}
      isDisabled={isDisabled}
      buttonIcon={
        <FaUserTimes
          className="text-2xl text-button-label md:text-3xl"
          aria-hidden="true"
        />
      }
      handleClick={handleClick}
    >
      <span
        className="font-bold 
                  text-md text-button-label
                  lg:text-base"
      >
        {description}
      </span>
    </SubmitButton>
  );
}
