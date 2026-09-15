import clsx from "clsx";
import type { SubmitButtonProps } from "./SubmitButton.types";
import PillButton from "@/components/ui/PillButton/PillButton";
import { FaCircleNotch } from "@/assets/icons/icon";

/**
 * Renders a form submit pill button
 *
 * If the associated form is submitting, displays a loading icon with spin animation instead of the buttonIcon prop
 *
 * Props are defined in {@link SubmitButtonProps}.
 */
export default function SubmitButton({
  styles,
  isSubmitting,
  buttonIcon,
  children,
}: SubmitButtonProps) {
  return (
    <PillButton
      styles={clsx(
        "bg-button",
        "shadow-lg shadow-green-600/50",
        "hover:bg-button-hover",
        styles,
      )}
    >
      <div className="flex justify-center items-center gap-4">
        {isSubmitting ? (
          <FaCircleNotch
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
