import type { TFunction } from "i18next";
import type { RegisterOptions } from "react-hook-form";
import type { UpdatePasswordFields } from "./UpdateUserPasswordForm.types";
import { getPasswordStatus } from "@/features/auth/components/services/auth.services";

/**
 * Returns the React Hook Form validation for the current password field on the update password form
 * @param t error messages translation
 */
export const currentPasswordFieldValidation = (
  t: TFunction<"translation", undefined>,
): RegisterOptions<UpdatePasswordFields, "currentPassword"> => {
  return {
    required: t("forms.generic-errorMessages.required"),
    deps: ["newPassword"], // re-evaluate new password field rules
  };
};

/**
 * Returns the React Hook Form validation for the new password field on the update password form
 * @param t error messages translation
 */
export const newPasswordFieldValidation = (
  t: TFunction<"translation", undefined>,
): RegisterOptions<UpdatePasswordFields, "newPassword"> => {
  return {
    required: t("forms.generic-errorMessages.required"),
    validate: {
      isDifferentFromCurrent: (value, formValues) => {
        return (
          value !== formValues.currentPassword ||
          t("error-messages.custom.update-password.password-not-different")
        );
      },

      isValidPassword: async (value) => {
        const status = await getPasswordStatus(value);
        return status.isValid || t("forms.generic-errorMessages.invalid");
      },
    },
  };
};

/**
 * Returns the React Hook Form validation for the confirm password field on the update password form
 * @param t error messages translation
 */
export const confirmPasswordFieldValidation = (
  t: TFunction<"translation", undefined>,
): RegisterOptions<UpdatePasswordFields, "confirmPassword"> => {
  return {
    required: t("forms.generic-errorMessages.required"),
    validate: (value, formValues) => {
      return (
        value === formValues.newPassword ||
        t("error-messages.custom.update-password.password-not-match")
      );
    },
  };
};
