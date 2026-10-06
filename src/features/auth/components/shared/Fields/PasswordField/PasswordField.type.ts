import type { TFunction } from "i18next";
import type { FieldValues, RegisterOptions, Path } from "react-hook-form";

/**
 * Props for the PasswordField component
 * @template T            - input type for the React Hook Form useFormContext
 * @property label        - password label
 * @property autoComplete - input autocomplete property
 * @property registerName - input name used by the React Hook Form register method
 * @property validation   - input validation used by the React Hook Form register method
 */
export type PasswordFieldProps<T extends FieldValues> = {
  label: string;
  autoComplete: PasswordAutoComplete;
  registerName: Path<T>;
  validation: (
    t: TFunction<"translation", undefined>,
  ) => RegisterOptions<T, Path<T>>;
};

/**
 * Type for the password autocomplete property
 */
type PasswordAutoComplete = "new-password" | "current-password";
