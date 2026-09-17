import type { TFunction } from "i18next";
import { FIREBASE_ERROR_CODES } from "@/constants/app.constants";

/**
 * Returns a custom error message for a given auth related Firebase error
 * @param t error messages translation
 * @param error Firebase error
 */
export const getGenericAuthErrorMessage = (
  t: TFunction<"translation", undefined>,
  error: string,
) => {
  switch (error) {
    case FIREBASE_ERROR_CODES.NETWORK_REQUEST_FAILED:
      return t(
        "forms.auth.firebase-generic-error-messages.network-request-failed",
      );
    case FIREBASE_ERROR_CODES.TOO_MANY_REQUESTS:
      return t("forms.auth.firebase-generic-error-messages.too-many-requests");
  }
};

/**
 * Returns a custom error message for a given sign in user related Firebase error
 * @param t error messages translation
 * @param error Firebase error
 */
export const getGenericSignInAuthErrorMessage = (
  t: TFunction<"translation", undefined>,
  error: string,
) => {
  switch (error) {
    case FIREBASE_ERROR_CODES.INVALID_USER_TOKEN:
    case FIREBASE_ERROR_CODES.USER_TOKEN_EXPIRED:
      return t("forms.auth.firebase-generic-error-messages.user-token");
  }
};
