import { useRef, useEffect } from "react";

/**
 * Custom hook that executes a callback function when a pointerdown event is detected outside the element
 *
 * @param handleClick callback function to be executed
 * @returns ref to attach to the element
 */
export default function useOutsidePointer<T extends HTMLElement>(
  handleClick: () => void,
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handleClick();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);

    // Clean-up function
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [handleClick]);

  return ref;
}
