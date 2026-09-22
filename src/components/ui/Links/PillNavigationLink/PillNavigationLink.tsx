import type { PillNavigationLinkProps } from "./PillNavigationLink.types";
import NavigationLink from "../../NavigationLink/NavigationLink";
import clsx from "clsx";

/**
 * Renders a pill navigation link
 *
 * Props are defined in {@link PillNavigationLinkProps}.
 */
export default function PillNavigationLink({
  styles,
  to,
  ariaLabel,
  children,
}: PillNavigationLinkProps) {
  return (
    <NavigationLink
      styles={clsx("block w-full px-4 py-2", "dark:shadow-none", styles)}
      to={to}
      ariaLabel={ariaLabel}
    >
      {children}
    </NavigationLink>
  );
}
