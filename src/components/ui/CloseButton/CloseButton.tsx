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
        "flex items-center justify-center rounded-full cursor-pointer text-slate-950",
        "focus-visible:outline-solid focus-visible:outline-[3.2px] focus-visible:outline-offset-1 focus-visible:outline-green-900",
        "transition-[color] delay-150 duration-300 ease-in-out motion-reduce:transition-none md:hover:text-slate-700",
        styles,
      )}
      aria-label={ariaLabel}
      onClick={handleClose}
    >
      <IoIosClose className="w-full h-full" aria-hidden="true" />
    </button>
  );
}
