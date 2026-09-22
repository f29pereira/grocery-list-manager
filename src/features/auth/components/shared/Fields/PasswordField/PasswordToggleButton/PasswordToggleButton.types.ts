/**
 * Props for the PasswordToggleButton component
 * @property isToggled - is the password visible
 * @property toggle    - password visibility toggle function
 */
export type PasswordToggleButtonProps = {
  isToggled: boolean;
  toggle: () => void;
};
