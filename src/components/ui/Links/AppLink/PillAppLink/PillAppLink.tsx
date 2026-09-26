import clsx from "clsx";
import type { PillAppLinkProps } from "./PillAppLinkProps.types";
import AppLink from "../AppLink";

/**
 * Renders an app link shaped like a pill button
 *
 * Props are defined in {@link PillAppLinkProps}.
 */
export default function PillAppLink({
  styles,
  to,
  ariaLabel,
  children,
}: PillAppLinkProps) {
  return (
    <AppLink
      styles={clsx(
        "block w-full px-4 py-2",
        "dark:shadow-none",
        "md:max-w-112.5",
        styles,
      )}
      to={to}
      ariaLabel={ariaLabel}
    >
      {children}
    </AppLink>
  );
}
