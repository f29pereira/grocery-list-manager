import clsx from "clsx";
import type { CardProps } from "./Card.types";

/**
 * Renders a card
 *
 * Props are defined in {@link CardProps}.
 */
export default function Card({ styles, children }: CardProps) {
  return (
    <div
      className={clsx(
        "overflow-hidden",
        "rounded-3xl",
        "bg-card",
        "shadow-xl dark:shadow-none",
        styles,
      )}
    >
      {children}
    </div>
  );
}
