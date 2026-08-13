import { useState } from "react";

/**
 * Custom hook that manages a boolean toggle state
 * @param startValue initial state value
 * @returns current state, state setter function and toggle function
 */
export default function useToggle(startValue: boolean) {
  const [isToggled, setIsToggled] = useState(startValue);

  /**
   * Toggles the isToggled state
   */
  const toggle = () => {
    setIsToggled((prev) => !prev);
  };

  return { isToggled, setIsToggled, toggle };
}
