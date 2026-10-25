import clsx from "clsx";
import type { AvatarActionButtonProps } from "./AvatarActionButton.types";

/**
 * Renders an action button used by the InitialsAvatarField and ImageAvatarField components
 *
 * The button features a pop-in animation
 *
 * Props are defined in {@link AvatarActionButtonProps}.
 */
export default function AvatarActionButton({
  styles,
  handleClick,
  labelText,
  children,
}: AvatarActionButtonProps) {
  return (
    <button
      className={clsx(
        "flex justify-center items-center w-11 h-11",
        "bg-white dark:bg-slate-950 theme-transition",
        "border-2 border-solid border-input rounded-full cursor-pointer",
        "focus-visible:focus-ring focus-visible:outline-offset-2",
        "hover:bg-slate-200 dark:hover:bg-slate-900",
        "motion-safe:animate-pop-in",
        "md:w-12.5 md:h-12.5",
        styles,
      )}
      type="button"
      onClick={handleClick}
      aria-label={labelText}
    >
      {children}
    </button>
  );
}
