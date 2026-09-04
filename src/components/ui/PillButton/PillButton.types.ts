import type { ReactNode } from "react";

/**
 * Props for the PillButton component
 * @property ariaLabel    - (optional) saria-label text description
 * @property styles       - (optional) Tailwind CSS classes
 * @property handleClose  - (optional) onClick function
 * @property children     - button content
 */
export type PillButtonProps = {
  ariaLabel?: string;
  styles?: string;
  handleClick?: () => void;
  children: ReactNode;
};
