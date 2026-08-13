/**
 * Props for the CloseButton component
 * @property ariaLabel    - aria-label text description
 * @property styles       - tailwind css classes
 * @property handleClose  - close function
 */
export type CloseButtonProps = {
  ariaLabel: string;
  styles?: string;
  handleClose: () => void;
};
