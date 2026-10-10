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
        "focus-visible:focus-ring focus-visible:-outline-offset-4",
        "md:focus-visible:outline-offset-2",
        "sm:max-w-100 md:max-w-80 lg:max-w-70",
        "sm:px-6 sm:py-3 lg:px-8 lg:py-4",
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
