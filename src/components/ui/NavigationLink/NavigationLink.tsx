import type { NavigationLinkProps } from "./NavigationLink.types";
import { NavLink } from "react-router";
import clsx from "clsx";

/**
 * Renders a React Router NavLink element
 *
 * Props are defined in {@link NavigationLinkProps}.
 */
export default function NavigationLink({
  styles,
  activeStyles,
  to,
  end,
  handleOnClick,
  ariaLabel,
  children,
}: NavigationLinkProps) {
  return (
    <NavLink
      className={({ isActive }) =>
        clsx(
          "rounded-full",
          "focus-visible:focus-ring focus-visible:outline-offset-2",
          styles,
          isActive && activeStyles,
        )
      }
      to={to}
      end={end}
      onClick={handleOnClick}
      aria-label={ariaLabel}
    >
      {children}
    </NavLink>
  );
}
