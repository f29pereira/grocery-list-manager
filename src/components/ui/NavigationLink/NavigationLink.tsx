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
  handleOnClick,
  text,
}: NavigationLinkProps) {
  return (
    <NavLink
      className={clsx(
        "cursor-pointer text-base",
        "focus-visible:outline-solid focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-blue-500",
        styles,
      )}
      to={to}
      onClick={handleOnClick}
    >
      {text}
    </NavLink>
  );
}
