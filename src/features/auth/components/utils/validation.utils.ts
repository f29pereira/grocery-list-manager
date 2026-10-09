import type { TFunction } from "i18next";
import type { RegisterOptions } from "react-hook-form";
import type { UserDetailsFields } from "../types/auth.types";

/**
 * Returns the React Hook Form validation for the first name and last name fields
 * @param t error messages translation
 */
export const nameFieldValidation = (
  t: TFunction<"translation", undefined>,
):
  | RegisterOptions<UserDetailsFields, "firstName">
  | RegisterOptions<UserDetailsFields, "lastName"> => {
  return {
    required: t("forms.generic-errorMessages.required"),
    maxLength: {
      value: 50,
      message: t("forms.signUp.user-details-step.name.name-max-length"),
    },
    pattern: {
      value: /^[\p{L}\s'-]+$/u,
      message: t("forms.generic-errorMessages.invalid"),
    },
  };
};
