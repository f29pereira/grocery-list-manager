import type { AppNavigationLinkProps } from "./AppNavigationLink.types";
import { NavLink } from "react-router";
import clsx from "clsx";

/**
 * Renders a React Router NavLink element
 *
 * Props are defined in {@link AppNavigationLinkProps}.
 */
export default function AppNavigationLink({
  styles,
  activeStyles,
  to,
  end,
  handleOnClick,
  ariaLabel,
  children,
}: AppNavigationLinkProps) {
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
