import type { PillButtonProps } from "./PillButton.types";
import clsx from "clsx";

/**
 * Renders a pill button
 *
 * Props are defined in {@link PillButtonProps}.
 */
export default function PillButton({
  ariaLabel,
  styles,
  handleClick,
  isDisabled,
  children,
}: PillButtonProps) {
  return (
    <button
      className={clsx(
        "w-full px-4 py-2",
        "rounded-full cursor-pointer",
        "theme-transition dark:shadow-none",
        "focus-visible:focus-ring focus-visible:outline-offset-2",
        "md:px-6 md:py-3",
        styles,
      )}
      onClick={handleClick}
      aria-label={ariaLabel}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}
