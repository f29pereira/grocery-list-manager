import type { FieldLabelProps } from "@/components/shared/Form/Field/FieldLabel/FieldLabel.types";
import type { UserDetailsFields } from "@/features/auth/components/types/auth.types";
import type { TFunction } from "i18next";
import type { RegisterOptions } from "react-hook-form";

/**
 * Props for the NameField component
 * @property inputId      - input id
 * @property labelText    - label text
 * @property autoComplete - input autocomplete property
 * @property registerName - input name used by the React Hook Form register method
 * @property validation   - input validation used by the React Hook Form register method
 */
export type NameFieldProps = Pick<FieldLabelProps, "inputId" | "labelText"> & {
  autoComplete: NameFieldAutoComplete;
  registerName: NameFieldRegister;
  validation: (
    t: TFunction<"translation", undefined>,
  ) => RegisterOptions<UserDetailsFields, NameFieldRegister>;
};

/**
 * Type for the name input React Hook Form register method
 */
type NameFieldRegister = keyof Pick<
  UserDetailsFields,
  "firstName" | "lastName"
>;

/**
 * Type for the name input autocomplete property
 */
type NameFieldAutoComplete = "given-name" | "family-name";
