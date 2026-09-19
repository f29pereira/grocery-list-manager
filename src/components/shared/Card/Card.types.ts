import type { ReactNode } from "react";

/**
 * Props for the Card component
 * @property styles    - (optional) Tailwind CSS classes
 * @property children  - card content
 */
export type CardProps = {
  styles?: string;
  children: ReactNode;
};
