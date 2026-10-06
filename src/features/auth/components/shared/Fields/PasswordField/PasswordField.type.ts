import type { TFunction } from "i18next";
import type { RegisterOptions } from "react-hook-form";
import type { AuthenticationFields } from "../../../types/auth.types";

/**
 * Props for the PasswordField component
 * @property label        - password label
 * @property autoComplete - input autocomplete property
 * @property registerName - input name used by the React Hook Form register method
 * @property validation   - input validation used by the React Hook Form register method
 */
export type PasswordFieldProps = {
  label: string;
  autoComplete: PasswordAutoComplete;
  registerName: PasswordRegister;
  validation: (
    t: TFunction<"translation", undefined>,
  ) => RegisterOptions<AuthenticationFields, "password">;
};

/**
 * Type for the password React Hook Form register method
 */
type PasswordRegister = "password";
/* TO DO: Add Names for the Password Update:
  | "current-password"
  | "new-password"
  | "confirm-password"
*/

/**
 * Type for the password autocomplete property
 */
type PasswordAutoComplete = "new-password" | "current-password";
