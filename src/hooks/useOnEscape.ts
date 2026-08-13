import { useEffect } from "react";

/**
 * Custom hook that executes a callback function when a element is open and the escape key is pressed
 * @param isOpened       is the element open
 * @param handleOnEscape callback function to be executed
 */
export default function useOnEscape(
  isOpened: boolean,
  handleOnEscape: () => void,
) {
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (isOpened && e.key === "Escape") {
        handleOnEscape();
      }
    };

    document.addEventListener("keydown", handleEscKey);

    // Clean-up function
    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [isOpened, handleOnEscape]);
}
