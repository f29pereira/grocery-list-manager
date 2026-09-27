import type { ReactNode } from "react";
import type { NavLinkRenderProps } from "react-router";

/**
 * Props for the AppNavigationLink component
 * @property styles         - (optional) Tailwind CSS classes
 * @property activeStyles   - Tailwind CSS classes when the link is active
 * @property to             - route to navigate to
 * @property end            - (optional) React Router end property
 * @property handleOnClick  - (optional) on click function
 * @property ariaLabel      - aria-label text description
 * @property children       - link content
 */
export type AppNavigationLinkProps = {
  styles?: string;
  activeStyles: string;
  to: string;
  end?: boolean;
  handleOnClick?: () => void;
  ariaLabel?: string;
  children: ReactNode | ((props: NavLinkRenderProps) => ReactNode);
};
