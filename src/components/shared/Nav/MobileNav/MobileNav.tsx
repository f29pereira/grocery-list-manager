import { useState } from "react";
import type { MouseEvent, SyntheticEvent, TransitionEvent } from "react";
import type { MobileNavProps } from "./MobileNav.types";
import clsx from "clsx";
import useDialog from "@/hooks/useDialog";
import CloseButton from "@/components/ui/CloseButton/CloseButton";
import NavigationLink from "@/components/ui/NavigationLink/NavigationLink";

/**
 * Renders the mobile navigation dialog with:
 * - close button
 * - navigation link: Home
 *
 * The navigation element features a translation transition when opened or closed.
 *
 * Props are defined in {@link MobileNavProps}.
 */
export default function MobileNav({ isToggled, setToggle }: MobileNavProps) {
  // Custom Hook
  const dialogRef = useDialog(isToggled);

  // State
  const [isClosing, setIsClosing] = useState<boolean>(false);

  /**
   * Starts the closing of the dialog
   *
   * The dialog will be closed if reduced motion is applied
   */
  const startClosingDialog = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      dialogRef.current?.close();
      return;
    }

    setIsClosing(true);
  };

  /**
   * Starts the closing of the dialog when clicking on the backdrop
   */
  const closeOnBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) {
      startClosingDialog();
    }
  };

  /**
   * Starts closing the dialog on cancel (e.g pressing the Escape key)
   */
  const handleOnCancel = (event: SyntheticEvent<HTMLDialogElement>) => {
    event.preventDefault(); // stops the close() method
    startClosingDialog();
  };

  /**
   * Closes the dialog after the nav element transition event finishes
   */
  const handleOnTransitionEnd = (event: TransitionEvent<HTMLElement>) => {
    if (
      event.target !== event.currentTarget ||
      event.propertyName !== "translate" ||
      !isClosing
    ) {
      return;
    }

    dialogRef.current?.close();
    setIsClosing(false);
  };

  return (
    <dialog
      className="
      fixed inset-0 w-screen h-screen max-w-none max-h-none bg-black/55"
      ref={dialogRef}
      onClick={closeOnBackdropClick}
      onClose={() => setToggle(false)}
      onCancel={handleOnCancel}
      aria-label="Mobile navigation"
    >
      <nav
        className={clsx(
          "w-[65%] h-full",
          "pl-6 pt-6 rounded-r-4xl bg-white",
          "transition-transform duration-300 ease-out motion-reduce:transition-none",
          isClosing
            ? "-translate-x-full"
            : "translate-x-0 starting:-translate-x-full",
        )}
        onTransitionEnd={handleOnTransitionEnd}
        aria-label="Main navigation"
      >
        <CloseButton
          ariaLabel="Close menu"
          styles="w-9 h-9 mt-8 mb-16"
          handleClose={startClosingDialog}
        />

        <div className="ml-2">
          <NavigationLink
            styles="font-bold text-slate-800 hover:text-slate-700"
            to="/"
            handleOnClick={startClosingDialog}
            text="Home"
          />
          {/*TO DO: Add links*/}
        </div>
      </nav>
    </dialog>
  );
}
