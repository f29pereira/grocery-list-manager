import type { TFunction } from "i18next";
import type { RegisterOptions } from "react-hook-form";
import type { DeleteUserAccountFields } from "./DeleteUserForm.types";

/**
 * Returns the React Hook Form validation for the current password field on the delete user's account form
 * @param t error messages translation
 */
export const currentPasswordFieldValidation = (
  t: TFunction<"translation", undefined>,
): RegisterOptions<DeleteUserAccountFields, "currentPassword"> => {
  return {
    required: t("forms.generic-errorMessages.required"),
  };
};
