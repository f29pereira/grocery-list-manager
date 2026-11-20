import type { ReactNode } from "react";

/**
 * Props for the PillButton component
 * @property styles       - (optional) Tailwind CSS classes
 * @property type         - (optional) button type
 * @property handleClick  - (optional) onClick function
 * @property ariaLabel    - (optional) aria-label text description
 * @property isDisabled   - (optional) is the button disabled
 * @property children     - button content
 */
export type PillButtonProps = {
  styles?: string;
  type?: "button" | "submit";
  handleClick?: () => void;
  ariaLabel?: string;
  isDisabled?: boolean;
  children: ReactNode;
};
