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
        "p-4",
        "overflow-hidden",
        "rounded-3xl",
        "bg-card",
        "shadow-xl dark:shadow-none",
        "sm:px-6 md:py-6 xl:p-8",
        styles,
      )}
    >
      {children}
    </div>
  );
}
