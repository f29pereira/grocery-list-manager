import type { ReactNode } from "react";
import type { NavLinkRenderProps } from "react-router";

/**
 * Props for the NavigationLink component
 * @property styles         - (optional) Tailwind CSS classes
 * @property activeStyles   - (optional) Tailwind CSS classes when the link is active
 * @property to             - route to navigate to
 * @property end            - (optional) React Router end property
 * @property handleOnClick  - (optional) on click function
 * @property ariaLabel      - aria-label text description
 * @property children       - link content
 */
// TO DO: remove optional from activeStyles
export type NavigationLinkProps = {
  styles?: string;
  activeStyles?: string;
  to: string;
  end?: boolean;
  handleOnClick?: () => void;
  ariaLabel?: string;
  children: ReactNode | ((props: NavLinkRenderProps) => ReactNode);
};
