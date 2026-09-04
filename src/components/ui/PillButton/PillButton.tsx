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
  children,
}: PillButtonProps) {
  return (
    <button
      className={clsx(
        "w-full px-6 py-4",
        "rounded-full cursor-pointer",
        "theme-transition dark:shadow-none",
        "focus-visible:focus-ring focus-visible:outline-offset-2",
        "md:px-8",
        styles,
      )}
      onClick={handleClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
