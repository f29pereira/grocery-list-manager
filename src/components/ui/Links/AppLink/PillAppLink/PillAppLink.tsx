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
        "sm:max-w-100 md:max-w-80 lg:max-w-70",
        "sm:px-6 sm:py-3 lg:px-8 lg:py-4",
        styles,
      )}
      to={to}
      ariaLabel={ariaLabel}
    >
      {children}
    </AppLink>
  );
}
