import clsx from "clsx";
import type { GlowingIconProps } from "../../types/glowingIcons.types";
import { getAnimationSpeed } from "../../utils/glowingIcons.utils";
import { FaCircle } from "@/assets/icons/icon";

/**
 * Renders a circle icon that features a fade in and out animation
 *
 * For bigger circles should be used the slow animation, and for small circles the fast animation
 *
 * Props are defined in {@link GlowingIconProps}.
 */
export default function Circle({ styles, animationSpeed }: GlowingIconProps) {
  const animation = getAnimationSpeed(animationSpeed);

  return <FaCircle className={clsx(styles, animation)} aria-hidden="true" />;
}
