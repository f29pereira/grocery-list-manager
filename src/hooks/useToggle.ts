import { useState } from "react";

/**
 * Custom Hook: manages a boolean toggle state
 */
export default function useToggle(startValue: boolean) {
  const [isToggled, setIsToggled] = useState(startValue);

  /**
   * Toggles the isToggled state
   */
  const toggle = () => {
    setIsToggled((prev) => !prev);
  };

  /**
   * Sets the isToggled state by a given value
   * @param value boolean value
   */
  const setToggle = (value: boolean) => {
    setIsToggled(value);
  };

  return { isToggled, toggle, setToggle };
}
