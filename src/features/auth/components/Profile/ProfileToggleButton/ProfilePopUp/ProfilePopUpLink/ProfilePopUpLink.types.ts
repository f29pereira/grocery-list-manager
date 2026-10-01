import type { ReactNode } from "react";

/**
 * Props for the ProfilePopUpLink component
 * @property route - route to navigate to
 * @property icon  - icon that appears close to the link text
 * @property text  - link text
 */
export type ProfilePopUpLinkProps = {
  to: string;
  children: ReactNode;
};
