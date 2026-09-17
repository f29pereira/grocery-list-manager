import { FirebaseError } from "firebase/app";
import type { TFunction } from "i18next";
import { FIRESTORE_ERROR_CODES } from "@/constants/app.constants";

/**
 * Returns a custom error message for a given Firestore related error
 * @param t error messages translation
 * @param error Firebase error
 */
export const getGenericDocumentErrorMessage = (
  t: TFunction<"translation", undefined>,
  error: unknown,
) => {
  const erroCode = isFirebaseError(error) ? error.code : "";

  switch (erroCode) {
    case FIRESTORE_ERROR_CODES.UNAUTHENTICATED:
      return t("forms.auth.firebase-generic-error-messages.user-token");
    case FIRESTORE_ERROR_CODES.PERMISSION_DENIED:
      return t("forms.auth.firebase-generic-error-messages.permission-denied");
    case FIRESTORE_ERROR_CODES.UNAVAILABLE:
      return t(
        "forms.auth.firebase-generic-error-messages.network-request-failed",
      );
    default:
      return t("forms.generic-errorMessages.error");
  }
};

/**
 * Type Guard function that checks if a given error is a FirebaseError
 * @param error
 */
export const isFirebaseError = (error: unknown): error is FirebaseError => {
  return error instanceof FirebaseError;
};
