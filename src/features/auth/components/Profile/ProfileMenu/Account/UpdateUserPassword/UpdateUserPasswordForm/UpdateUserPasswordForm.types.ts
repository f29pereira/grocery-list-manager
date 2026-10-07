/**
 * Type for the update password fields
 * @property currentPassword - current user password field
 * @property newPassword     - new user password field
 * @property confirmPassword - confirm the new user password field
 */
export type UpdatePasswordFields = {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};
