import { Link } from "react-router";
import clsx from "clsx";
import type { AppLinkProps } from "./AppLink.types";

/**
 * Renders a React Router Link element
 *
 * Props are defined in {@link AppLinkProps}.
 */
export default function AppLink({
  styles,
  to,
  handleOnClick,
  ariaLabel,
  children,
}: AppLinkProps) {
  return (
    <Link
      className={clsx(
        "rounded-full",
        "focus-visible:focus-ring focus-visible:outline-offset-2",
        styles,
      )}
      to={to}
      onClick={handleOnClick}
      aria-label={ariaLabel}
    >
      {children}
    </Link>
  );
}
