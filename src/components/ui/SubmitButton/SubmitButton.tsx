import clsx from "clsx";
import type { SubmitButtonProps } from "./SubmitButton.types";
import PillButton from "@/components/ui/PillButton/PillButton";
import { FaSpinner } from "@/assets/icons/icon";

/**
 * Renders a submit pill button
 *
 * If the associated form is submitting, displays a loading icon with spin animation instead of the buttonIcon prop
 *
 * Props are defined in {@link SubmitButtonProps}.
 */
export default function SubmitButton({
  styles,
  handleClick,
  isSubmitting,
  buttonIcon,
  children,
}: SubmitButtonProps) {
  return (
    <PillButton
      styles={clsx(
        "disabled:cursor-not-allowed disabled:opacity-75",
        "disabled:hover:bg-button",
        styles,
      )}
      handleClick={handleClick}
      isDisabled={isSubmitting}
    >
      <div className="flex justify-center items-center gap-4">
        {isSubmitting ? (
          <FaSpinner
            className="text-2xl text-button-label 
                        motion-safe:animate-spin"
            aria-hidden="true"
          />
        ) : (
          buttonIcon
        )}

        {children}
      </div>
    </PillButton>
  );
}
