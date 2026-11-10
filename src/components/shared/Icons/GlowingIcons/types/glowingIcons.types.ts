/**
 * Type for the icons placement
 * @property iconsPlacement - (optional) circles placement
 */
export type IconsPlacement = {
  iconsPlacement?: "top-right" | "bottom-left";
};

/**
 * Props for the glowing icon components
 * @property styles         - (optional) Tailwind CSS classes
 * @property animationSpeed - fade in animation speed
 */
export type GlowingIconProps = {
  styles?: string;
  animationSpeed: FadeInAnimationSpeed;
};

/**
 * Type for the fade in animation speed
 */
export type FadeInAnimationSpeed = "slow" | "medium" | "fast";
