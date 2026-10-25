import type { ReactNode } from "react";

/**
 * Props for the AvatarActionButton component
 * @property handleClick - onClick function
 * @property labelText   - (optional) label text
 * @property children    - card content
 */
export type AvatarActionButtonProps = {
  handleClick: () => void;
  labelText?: string;
  children: ReactNode;
};
