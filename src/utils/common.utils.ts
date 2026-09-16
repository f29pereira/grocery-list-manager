import { FirebaseError } from "firebase/app";
import type { TFunction } from "i18next";

/*TO DO: Add updateDoc error messages for "not-found" //  Some requested document was not found.*/

/**
 * Returns a custom error message for a given Firestore related error
 * @param t error messages translation
 * @param error Firebase error
 */
export const getGenericDocumentError = (
  t: TFunction<"translation", undefined>,
  error: unknown,
) => {
  const erroCode = isFirebaseError(error) ? error.code : "";

  switch (erroCode) {
    case "unauthenticated":
      // Thrown if the request does not have valid authentication credentials for the operation
      return t("forms.auth.firebase-generic-error-messages.user-token");
    case "permission-denied":
      // Thrown if the caller does not have permission to execute the specified operation
      return t("forms.auth.firebase-generic-error-messages.permission-denied");
    case "unavailable":
      // Thrown if the service is currently unavailable
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
