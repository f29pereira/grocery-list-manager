import type { ProfilePopUpLinkProps } from "./ProfilePopUpLink.types";
import { Link } from "react-router";
import HoverScaleArrowIcon from "@/components/ui/Icons/ArrowIcon/HoverScaleArrowIcon/HoverScaleArrowIcon";

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

        <HoverScaleArrowIcon
          styles="text-2xl text-brand group-hover:scale-125"
          pointingDirection="right"
        />
      </div>
    </Link>
  );
}
