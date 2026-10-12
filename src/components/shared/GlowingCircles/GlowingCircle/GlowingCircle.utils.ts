import type { FadeInAnimationSpeed } from "./GlowingCircle.types";

/**
 * Returns the custom property for fade in a out animation by a given speed animation speed
 * @param animationSpeed speed of the animation
 */
export const getAnimationSpeed = (animationSpeed: FadeInAnimationSpeed) => {
  switch (animationSpeed) {
    case "slow":
      return "motion-safe:animate-pulse-slow";
    case "medium":
      return "motion-safe:animate-pulse-medium";
    case "fast":
      return "motion-safe:animate-pulse-fast";
    default:
      return "";
  }
};
