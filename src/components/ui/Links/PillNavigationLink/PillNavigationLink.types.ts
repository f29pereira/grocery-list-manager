import type { ReactNode } from "react";

/**
 * Props for the PillNavigationLink component
 * @property styles    - (optional) Tailwind CSS classes
 * @property to        - route to navigate to
 * @property ariaLabel - (optional) aria-label text description
 * @property children  - link content
 */
export type PillNavigationLinkProps = {
  styles?: string;
  to: string;
  ariaLabel?: string;
  children: ReactNode;
};
