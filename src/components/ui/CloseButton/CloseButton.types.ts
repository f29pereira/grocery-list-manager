/**
 * Props for the CloseButton component
 * @property ariaLabel    - aria-label text description
 * @property styles       - (optional) Tailwind CSS classes
 * @property handleClose  - close function
 */
export type CloseButtonProps = {
  ariaLabel: string;
  styles?: string;
  handleClose: () => void;
};
