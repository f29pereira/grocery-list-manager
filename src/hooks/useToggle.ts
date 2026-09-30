import { useState } from "react";

/**
 * Custom hook that manages a boolean toggle state
 * @param startValue initial state value
 * @returns [isToggled, toggle, setIsToggled]
 */
export default function useToggle(startValue: boolean = false) {
  const [isToggled, setIsToggled] = useState(startValue);

  /**
   * Toggles the isToggled state
   */
  const toggle = () => {
    setIsToggled((prev) => !prev);
  };

  return [isToggled, toggle, setIsToggled] as const;
}
