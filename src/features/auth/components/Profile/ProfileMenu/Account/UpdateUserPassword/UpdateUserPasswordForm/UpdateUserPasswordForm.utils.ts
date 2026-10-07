import type { TFunction } from "i18next";
import type { RegisterOptions } from "react-hook-form";
import type { UpdatePasswordFields } from "./UpdateUserPasswordForm.types";

/**
 * Returns the React Hook Form validation for the password fields on the update password form
 * @param t error messages translation
 */
export const updatePasswordFieldsValidation = (
  t: TFunction<"translation", undefined>,
):
  | RegisterOptions<UpdatePasswordFields, "currentPassword">
  | RegisterOptions<UpdatePasswordFields, "newPassword">
  | RegisterOptions<UpdatePasswordFields, "confirmPassword"> => {
  return {
    required: t("forms.generic-errorMessages.required"),
  };
};
