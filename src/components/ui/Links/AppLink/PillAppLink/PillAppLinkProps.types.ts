import type { AppLinkProps } from "../AppLink.types";

/**
 * Props for the PillAppLink component
 * @property styles    - (optional) Tailwind CSS classes
 * @property to        - route to navigate to
 * @property ariaLabel - (optional) aria-label text description
 * @property children  - link content
 */
export type PillAppLinkProps = Pick<
  AppLinkProps,
  "styles" | "to" | "ariaLabel" | "children"
>;
