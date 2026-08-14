import type { Dispatch, SetStateAction } from "react";

/**
 * Props for the MobileNav component
 * @property isToggled    - isToggled state
 * @property setToggle    - isToggled state setter function
 */
export type MobileNavProps = {
  isToggled: boolean;
  setToggle: Dispatch<SetStateAction<boolean>>;
};
