import type { TFunction } from "i18next";
import type { RegisterOptions } from "react-hook-form";
import type { PasswordResetField } from "./PasswordResetForm.types";
import { getGenericAuthErrorMessage } from "../../../../utils/common.utils";
import { isFirebaseError } from "@/utils/common.utils";
import { FIREBASE_ERROR_CODES } from "@/constants/app.constants";

/**
 * Returns Firebase sendPasswordResetEmail custom error messages
 * @param t error messages translation
 * @param error
 */
export const getSendPasswordResetErrorMessage = (
  t: TFunction<"translation", undefined>,
  error: unknown,
) => {
  const errorCode = isFirebaseError(error) ? error.code : "";

  switch (errorCode) {
    case FIREBASE_ERROR_CODES.INVALID_EMAIL:
      return t("error-messages.firebase.invalid-email");
  }

  return (
    getGenericAuthErrorMessage(t, errorCode) ?? t("error-messages.generic")
  );
};

/**
 * Returns the React Hook Form validation for the email field
 */
export const passwordResetEmailFieldValidation = (
  t: TFunction<"translation", undefined>,
): RegisterOptions<PasswordResetField, "email"> => {
  return {
    required: t("forms.generic-errorMessages.required"),
  };
};
