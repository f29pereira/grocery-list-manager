import { FirebaseError } from "firebase/app";
import type { TFunction } from "i18next";
import { FIRESTORE_ERROR_CODES } from "@/constants/app.constants";

/**
 * Returns Firebase getDoc or updateDoc custom error messages
 * @param t error messages translation
 * @param error Firebase error
 * @param docAction Firebase getDoc or updateDoc action
 *
 * @returns custom error message for getDoc or updateDoc if error is "not-found"
 */
export const getGetDocOrUpdateDocErrorMessage = (
  t: TFunction<"translation", undefined>,
  error: unknown,
  docAction: "getDoc" | "updateDoc",
) => {
  const errorCode = isFirebaseError(error) ? error.code : "";

  if (errorCode === FIRESTORE_ERROR_CODES.NOT_FOUND) {
    return docAction === "getDoc"
      ? t("error-messages.firestore.doc-not-found.get-doc")
      : t("error-messages.firestore.doc-not-found.update-doc");
  }

  return getGenericDocumentErrorMessage(t, error);
};

/**
 * Returns a custom error message for a given Firestore related error
 * @param t error messages translation
 * @param error Firebase error
 */
export const getGenericDocumentErrorMessage = (
  t: TFunction<"translation", undefined>,
  error: unknown,
) => {
  const errorCode = isFirebaseError(error) ? error.code : "";

  switch (errorCode) {
    case FIRESTORE_ERROR_CODES.UNAUTHENTICATED:
      return t("error-messages.firebase.user-token");
    case FIRESTORE_ERROR_CODES.PERMISSION_DENIED:
      return t("error-messages.firestore.permission-denied");
    case FIRESTORE_ERROR_CODES.UNAVAILABLE:
      return t("error-messages.firebase.network-request-failed");
    default:
      return t("error-messages.generic");
  }
};

/**
 * Type Guard function that checks if a given error is a FirebaseError
 * @param error
 */
export const isFirebaseError = (error: unknown): error is FirebaseError => {
  return error instanceof FirebaseError;
};
