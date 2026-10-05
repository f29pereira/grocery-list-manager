import type { TFunction } from "i18next";
import type { RegisterOptions } from "react-hook-form";
import type { AuthenticationFields } from "../../../types/auth.types";

/**
 * Props for the PasswordField component
 * @property validation - React Hook Form field validation
 */
export type PasswordFieldProps = {
  validation: (
    t: TFunction<"translation", undefined>,
  ) => RegisterOptions<AuthenticationFields, "password">;
  autoComplete: PasswordAutoComplete;
};

/**
 * Type for the password autocomplete property
 */
type PasswordAutoComplete = "new-password" | "current-password";
