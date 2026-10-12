import type { GlowingCircleProps } from "./GlowingCircle.types";
import clsx from "clsx";
import { getAnimationSpeed } from "./GlowingCircle.utils";
import { FaCircle } from "@/assets/icons/icon";

/**
 * Renders a circle icon that features a fade in and out animation
 *
 * For bigger circles should be used the slow animation, and for small circles the fast animation
 *
 * Props are defined in {@link GlowingCircleProps}.
 */
export default function GlowingCircle({
  styles,
  animationSpeed,
}: GlowingCircleProps) {
  const animation = getAnimationSpeed(animationSpeed);

  return <FaCircle className={clsx(styles, animation)} aria-hidden="true" />;
}
