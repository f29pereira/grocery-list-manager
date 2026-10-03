import clsx from "clsx";
import type { MobileProfileLinkProps } from "./MobileProfileLink.types";
import { NavLink } from "react-router";

/**
 * Renders a navigation link used by the MobileProfileMenu component
 *
 * If the link is active features a underline
 *
 * Props are defined in {@link MobileProfileLinkProps}.
 */
export default function MobileProfileLink({
  to,
  children,
}: MobileProfileLinkProps) {
  const activeStyles = `after:absolute after:-bottom-[9px] after:left-0 
                      after:content-[''] after:w-full after:h-0.75 after:bg-brand`;

  return (
    <NavLink
      className={({ isActive }) =>
        clsx(
          "relative group rounded-full",
          "focus-visible:focus-ring focus-visible:outline-offset-2",
          isActive && activeStyles,
        )
      }
      to={to}
      end={false}
      onClick={undefined}
      aria-label={""}
    >
      {children}
    </NavLink>
  );
}
