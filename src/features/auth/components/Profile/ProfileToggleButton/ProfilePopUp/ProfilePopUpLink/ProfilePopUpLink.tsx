import type { ProfilePopUpLinkProps } from "./ProfilePopUpLink.types";
import { Link } from "react-router";
import { IoIosArrowForward } from "@/assets/icons/icon";

/**
 * Renders a link used by the ProfilePopUp component with:
 * - link content
 * - arrow icon
 */
export default function ProfilePopUpLink({
  to,
  children,
}: ProfilePopUpLinkProps) {
  return (
    <Link className="group rounded-full focus:outline-none" to={to}>
      <div
        className="flex justify-between items-center 
                  rounded-full 
                  group-focus-visible:focus-ring group-focus-visible:outline-offset-2"
      >
        {children}

        <IoIosArrowForward className="text-xl text-brand" aria-hidden="true" />
      </div>
    </Link>
  );
}
