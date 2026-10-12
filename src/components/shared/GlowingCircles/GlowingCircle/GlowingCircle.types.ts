/**
 * Props for the CloseButton component
 * @property styles         - (optional) Tailwind CSS classes
 * @property animationSpeed - fade in animation speed
 */
export type GlowingCircleProps = {
  styles?: string;
  animationSpeed: FadeInAnimationSpeed;
};

/**
 * Type for the fade in animation speed
 */
export type FadeInAnimationSpeed = "slow" | "medium" | "fast";
