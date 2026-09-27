import type { ReactNode } from "react";

/**
 * Props for the PillButton component
 * @property ariaLabel    - (optional) aria-label text description
 * @property styles       - (optional) Tailwind CSS classes
 * @property handleClick  - (optional) onClick function
 * @property isDisabled   - (optional) is the button disabled
 * @property children     - button content
 */
export type PillButtonProps = {
  ariaLabel?: string;
  styles?: string;
  handleClick?: () => void;
  isDisabled?: boolean;
  children: ReactNode;
};
