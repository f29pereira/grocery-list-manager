import type { TFunction } from "i18next";
import { FIREBASE_ERROR_CODES } from "@/constants/app.constants";
import { isFirebaseError } from "@/utils/common.utils";

/**
 * Returns true if a given error code matches the Firebase "auth/invalid-credential" error
 * @param error Firebase error
 */
export const isUserInvalid = (error: unknown) => {
  const errorCode = isFirebaseError(error) ? error.code : "";
  return errorCode === FIREBASE_ERROR_CODES.INVALID_CREDENTIAL;
};

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
      return t("error-messages.firebase.network-request-failed");
    case FIREBASE_ERROR_CODES.TOO_MANY_REQUESTS:
      return t("error-messages.firebase.too-many-requests");
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
      return t("error-messages.firebase.user-token");
  }
};
