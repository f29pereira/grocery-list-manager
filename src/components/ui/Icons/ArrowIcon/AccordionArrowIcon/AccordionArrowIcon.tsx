import clsx from "clsx";
import type { AccordionArrowIconProps } from "./AccordionArrowIcon.types";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "@/assets/icons/icon";

/**
 * Renders an arrow icon pointing up or down
 *
 * The icon features a 180 degree rotation animation
 *
 * Props are defined in {@link AccordionArrowIconProps}.
 */
export default function AccordionArrowIcon({
  styles,
  isAnimating,
  pointingDirection,
}: AccordionArrowIconProps) {
  const iconStyles = `scale-150 transition-transform duration-300 motion-reduce:transition-none`;

  const animation = isAnimating && "rotate-180";

  return (
    <>
      {pointingDirection === "up" ? (
        <MdKeyboardArrowUp
          className={clsx(iconStyles, styles, animation)}
          aria-hidden="true"
        />
      ) : (
        <MdKeyboardArrowDown
          className={clsx(iconStyles, styles, animation)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
