import type { NavigationLinkProps } from "./NavigationLink.types";
import { NavLink } from "react-router";
import clsx from "clsx";

/**
 * Renders a navigation link
 *
 * Props are defined in {@link NavigationLinkProps}.
 */
export default function NavigationLink({
  styles,
  to,
  end,
  handleOnClick,
  ariaLabel,
  children,
}: NavigationLinkProps) {
  return (
    <NavLink
      className={clsx(
        "rounded-full",
        "focus-visible:focus-ring focus-visible:outline-offset-2",
        styles,
      )}
      to={to}
      end={end}
      onClick={handleOnClick}
      aria-label={ariaLabel}
    >
      {children}
    </NavLink>
  );
}
