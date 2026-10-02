/**
 * Props for the AccordionArrowIcon component
 * @property styles            - (optional) Tailwind CSS classes
 * @property isAnimating       - is the icon doing an animation
 * @property pointingDirection - arrow icon pointing direction
 */
export type AccordionArrowIconProps = {
  styles?: string;
  isAnimating: boolean;
  pointingDirection: "up" | "down";
};
