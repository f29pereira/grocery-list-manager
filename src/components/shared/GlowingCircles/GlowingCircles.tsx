import clsx from "clsx";
import type { GlowingCirclesProps } from "./GlowingCircles.types";
import GlowingCircle from "./GlowingCircle/GlowingCircle";

/**
 * Renders GlowingCircle components to be displayed at the bottom left or top right of an element
 */
export default function GlowingCircles({
  circlesPlacement = "bottom-left",
}: GlowingCirclesProps) {
  const isTopRight = circlesPlacement === "top-right";
  const isBottomLeft = circlesPlacement === "bottom-left";

  return (
    <div
      className={clsx(
        "hidden absolute",
        "sm:block",
        isTopRight && "-top-5 -right-5",
        isBottomLeft && "-bottom-5 -left-5",
      )}
    >
      <GlowingCircle
        styles="relative text-8xl text-brand 
                md:text-9xl"
        animationSpeed="slow"
      />

      <GlowingCircle
        styles={clsx(
          "absolute",
          "text-6xl text-green-500 dark:text-green-400",
          "md:text-7xl",
          isTopRight && "-bottom-5 right-0",
          isBottomLeft && "-top-5",
        )}
        animationSpeed="medium"
      />

      <GlowingCircle
        styles={clsx(
          "absolute",
          "text-4xl text-green-400 dark:text-green-300 md:text-5xl",
          isTopRight && "-bottom-10 right-0",
          isBottomLeft && "-top-10",
        )}
        animationSpeed="fast"
      />
    </div>
  );
}
