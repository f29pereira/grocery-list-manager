import type { Dispatch, SetStateAction } from "react";
import type { AuthenticationFields } from "../../../../types/auth.types";

/**
 * Props for the PasswordResetForm component
 * @property setIsEmailSent - isEmailSent state setter function
 */
export type PasswordResetFormProps = {
  setIsEmailSent: Dispatch<SetStateAction<boolean>>;
};

/**
 * Type for the password reset form
 * @property email - email field
 */
export type PasswordResetField = Pick<AuthenticationFields, "email">;
