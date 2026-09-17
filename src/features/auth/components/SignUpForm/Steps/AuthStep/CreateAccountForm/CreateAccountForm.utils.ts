import type { TFunction } from "i18next";
import type { RegisterOptions } from "react-hook-form";
import type { AuthenticationFields } from "../../../../types/auth.types";
import { getPasswordStatus } from "../../../../shared/PasswordField/PasswordRules/PasswordRules.utils";
import { isFirebaseError } from "@/utils/common.utils";
import { getGenericAuthErrorMessage } from "@/features/auth/components/utils/common.utils";
import { FIREBASE_ERROR_CODES } from "@/constants/app.constants";

/**
 * Returns Firebase createUserWithEmailAndPassword custom error messages
 * @param t error messages translation
 * @param error
 */
export const getCreateUserErrorMessage = (
  t: TFunction<"translation", undefined>,
  error: unknown,
) => {
  const errorCode = isFirebaseError(error) ? error.code : "";

  switch (errorCode) {
    case FIREBASE_ERROR_CODES.EMAIL_ALREADY_IN_USE:
      return t(
        "forms.signUp.auth-step.firebase-createUser-error-messages.email-in-use",
      );
    case FIREBASE_ERROR_CODES.INVALID_EMAIL:
      return t(
        "forms.signUp.auth-step.firebase-createUser-error-messages.invalid-email",
      );
    case FIREBASE_ERROR_CODES.OPERATION_NOT_ALLOWED:
      return t(
        "forms.signUp.auth-step.firebase-createUser-error-messages.operation-not-allowed",
      );
    case FIREBASE_ERROR_CODES.WEAK_PASSWORD:
      return t(
        "forms.signUp.auth-step.firebase-createUser-error-messages.weak-password",
      );
    default:
      return (
        getGenericAuthErrorMessage(t, errorCode) ??
        t("forms.generic-errorMessages.error")
      );
  }
};

/**
 * Returns the React Hook Form validation for the email field on the sign up form
 * @param t error messages translation
 */
export const signUpEmailValidation = (
  t: TFunction<"translation", undefined>,
): RegisterOptions<AuthenticationFields, "email"> => {
  return {
    required: t("forms.generic-errorMessages.required"),
    pattern: {
      value: /^[\w-.]+@(?:[\w-]+\.)+[\w-]{2,4}$/,
      message: t("forms.generic-errorMessages.invalid"),
    },
  };
};

/**
 * Returns the React Hook Form validation for the password field on the sign up form
 * @param t        error messages translation
 * @param password password field
 */
export const signUpPasswordValidation = (
  t: TFunction<"translation", undefined>,
  password: string,
): RegisterOptions<AuthenticationFields, "password"> => {
  return {
    required: t("forms.generic-errorMessages.required"),
    validate: async () => {
      const status = await getPasswordStatus(password);
      return status.isValid || t("forms.generic-errorMessages.invalid");
    },
  };
};
