import clsx from "clsx";
import type { HoverScaleArrowIconProps } from "./HoverScaleArrowIcon.types";
import { IoIosArrowBack, IoIosArrowForward } from "@/assets/icons/icon";

/**
 * Renders an arrow icon pointing to the left or right
 *
 * Features, as default, 30px font size and a 125% size increase animation
 *
 * Props are defined in {@link HoverScaleArrowIconProps}.
 */
export default function HoverScaleArrowIcon({
  styles,
  pointingDirection,
}: HoverScaleArrowIconProps) {
  const baseStyles = `transition-transform duration-300 motion-reduce:transition-none`;

  const defaultStyles = `text-3xl group-hover:scale-125`;

  return (
    <>
      {pointingDirection === "left" ? (
        <IoIosArrowBack
          className={clsx(baseStyles, styles ?? defaultStyles)}
          aria-hidden="true"
        />
      ) : (
        <IoIosArrowForward
          className={clsx(baseStyles, styles ?? defaultStyles)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
