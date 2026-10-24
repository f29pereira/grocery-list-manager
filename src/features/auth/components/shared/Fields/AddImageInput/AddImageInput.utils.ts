import type { TFunction } from "i18next";
import type { RegisterOptions } from "react-hook-form";
import type { UserDetailsFields } from "../../../types/auth.types";
import { ALLOWED_AVATAR_TYPES } from "@/constants/app.constants";

/**
 * Returns the React Hook Form validation for the add image input field
 * @param t error messages translation
 */
export const addImageInputValidation = (
  t: TFunction<"translation", undefined>,
): RegisterOptions<UserDetailsFields, "avatarFile"> => {
  return {
    validate: {
      isFormatValid: (value) => {
        const file = value?.[0];

        if (!file) {
          return true;
        }

        return (
          ALLOWED_AVATAR_TYPES.includes(value[0].type) ||
          t("forms.signUp.user-details-step.avatar.invalid-format")
        );
      },
      isFileLarge: (value) => {
        const file = value?.[0];

        if (!file) {
          return true;
        }

        return (
          value[0].size <= 500 * 1024 ||
          t("forms.signUp.user-details-step.avatar.invalid-size")
        );
      },
    },
  };
};
