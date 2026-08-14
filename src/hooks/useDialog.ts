import { useRef, useEffect } from "react";

/**
 * Custom hook that opens or closes a dialog element
 * @param isOpen is the dialog open
 * @returns ref to attach to the dialog element
 */
export default function useDialog<T extends HTMLDialogElement>(
  isOpen: boolean,
) {
  const dialogRef = useRef<T>(null);

  /**
   * Opens the dialog
   * @param dialog dialog element
   */
  const openDialog = (dialog: HTMLDialogElement) => {
    if (!dialog.open) {
      dialog.showModal();
    }
  };

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) {
      return;
    }

    if (isOpen) {
      openDialog(dialog);
    } else {
      dialog.close();
    }

    // Clean-up function
    return () => {
      dialog.close();
    };
  }, [isOpen]);

  return dialogRef;
}
