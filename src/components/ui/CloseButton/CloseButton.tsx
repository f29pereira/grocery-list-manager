import type { CloseButtonProps } from "./CloseButton.types";
import { IoIosClose } from "@/assets/icons/icon";
import clsx from "clsx";

/**
 * Renders a button with a close icon
 *
 * Props are defined in {@link CloseButtonProps}.
 */
export default function CloseButton({
  ariaLabel,
  styles,
  handleClose,
}: CloseButtonProps) {
  return (
    <button
      className={clsx(
        "flex items-center justify-center",
        "rounded-full cursor-pointer",
        "text-slate-950 dark:text-white",
        "focus-visible:focus-ring focus-visible:outline-offset-1",
        "theme-transition",
        "hover:text-slate-700 hover:dark:text-slate-300",
        styles,
      )}
      aria-label={ariaLabel}
      onClick={handleClose}
    >
      <IoIosClose className="w-full h-full" aria-hidden="true" />
    </button>
  );
}
