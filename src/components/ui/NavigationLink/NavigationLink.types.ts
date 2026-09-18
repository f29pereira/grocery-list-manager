import type { ReactNode } from "react";

/**
 * Props for the NavigationLink component
 * @property styles         - (optional) Tailwind CSS classes
 * @property to             - route to navigate to
 * @property end            - (optional) React Router end property
 * @property handleOnClick  - (optional) on click function
 * @property ariaLabel      - aria-label text description
 * @property children       - link content
 */
export type NavigationLinkProps = {
  styles?: string;
  to: string;
  end?: boolean;
  handleOnClick?: () => void;
  ariaLabel?: string;
  children: ReactNode;
};
