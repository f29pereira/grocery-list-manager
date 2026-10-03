import clsx from "clsx";
import type { DesktopProfileLinkProps } from "./DesktopProfileLink.types";
import { NavLink, useMatch, useHref } from "react-router";

/**
 * Renders a navigation link used by the DesktopProfileMenu component
 *
 * Props are defined in {@link DesktopProfileLinkProps}.
 */
export default function DesktopProfileLink({
  to,
  children,
}: DesktopProfileLinkProps) {
  const href = useHref(to);
  const isLinkActive = useMatch({ path: href }) !== null;

  return (
    <div
      className={clsx(
        "w-full",
        "border-2 border-solid rounded-xl",
        isLinkActive ? "border-brand" : "border-transparent",
      )}
    >
      <div className="flex items-center pl-8 py-4">
        <NavLink
          className={({ isActive }) =>
            clsx(
              "relative inline-block group",
              "rounded-full",
              "focus-visible:focus-ring focus-visible:outline-offset-2",
              isActive && `border-brand`,
            )
          }
          to={to}
          end={false}
          onClick={undefined}
          aria-label={""}
        >
          {children}
        </NavLink>
      </div>
    </div>
  );
}
