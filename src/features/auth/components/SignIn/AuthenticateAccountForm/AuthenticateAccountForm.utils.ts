import type { TFunction } from "i18next";
import type { RegisterOptions } from "react-hook-form";
import type { AuthenticationFields } from "../../types/auth.types";
import { isFirebaseError } from "@/utils/common.utils";
import { FIREBASE_ERROR_CODES } from "@/constants/app.constants";
import { getGenericAuthErrorMessage } from "../../utils/common.utils";

/**
 * Returns Firebase signInWithEmailAndPassword custom error messages
 * @param t error messages translation
 * @param error
 */
export const getSignInErrorMessage = (
  t: TFunction<"translation", undefined>,
  error: unknown,
) => {
  const errorCode = isFirebaseError(error) ? error.code : "";

  switch (errorCode) {
    case FIREBASE_ERROR_CODES.INVALID_CREDENTIAL:
      return "Invalid email or password.";
    case FIREBASE_ERROR_CODES.USER_DISABLED:
      return "Sorry, this account is disabled.";
    default:
      return (
        getGenericAuthErrorMessage(t, errorCode) ?? t("error-messages.generic")
      );
  }
};

/**
 * Returns the React Hook Form validation for the email or password fields on the sign in form
 * @param t error messages translation
 */
export const signInFieldsValidation = (
  t: TFunction<"translation", undefined>,
):
  | RegisterOptions<AuthenticationFields, "email">
  | RegisterOptions<AuthenticationFields, "password"> => {
  return {
    required: t("forms.generic-errorMessages.required"),
  };
};
