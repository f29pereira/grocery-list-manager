import type { ReactNode } from "react";

/**
 * Props for the SubmitButton component
 * @property styles       - (optional) Tailwind CSS classes
 * @property handleClick  - (optional) onClick function
 * @property isSubmitting - is the form submitting
 * @property buttonIcon   - (optional) button icon to be displayed when the form is not submitting
 * @property children     - button content
 */
export type SubmitButtonProps = {
  styles?: string;
  handleClick?: () => void;
  isSubmitting: boolean;
  buttonIcon?: ReactNode;
  children: ReactNode;
};
