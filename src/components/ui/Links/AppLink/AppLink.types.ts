import type { ReactNode } from "react";

/**
 * Props for the AppLink component
 * @property styles         - (optional) Tailwind CSS classes
 * @property to             - route to navigate to
 * @property handleOnClick  - (optional) on click function
 * @property ariaLabel      - (optional) aria-label text description
 * @property children       - link content
 */
export type AppLinkProps = {
  styles?: string;
  to: string;
  handleOnClick?: () => void;
  ariaLabel?: string;
  children: ReactNode;
};
