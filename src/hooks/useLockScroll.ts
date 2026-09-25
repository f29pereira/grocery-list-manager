import { useEffect } from "react";

/**
 * Custom hook that prevents document scrolling
 */
export default function useLockScroll() {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    // Clean-up function
    return () => {
      document.body.style.overflow = "";
    };
  }, []);
}
