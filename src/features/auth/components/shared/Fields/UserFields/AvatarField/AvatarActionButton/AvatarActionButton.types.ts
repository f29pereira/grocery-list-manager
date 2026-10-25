import type { ReactNode } from "react";

/**
 * Props for the AvatarActionButton component
 * @property styles      - (optional) Tailwind CSS classes
 * @property handleClick - onClick function
 * @property labelText   - (optional) label text
 * @property children    - card content
 */
export type AvatarActionButtonProps = {
  styles?: string;
  handleClick: () => void;
  labelText?: string;
  children: ReactNode;
};
