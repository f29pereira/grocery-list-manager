import type { TFunction } from "i18next";
import {
  FIREBASE_ERROR_CODES,
  FIRESTORE_COLLECTIONS,
} from "@/constants/app.constants";
import { db } from "@/lib/firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import type { PasswordValidationStatus } from "firebase/auth";
import { auth } from "@/lib/firebase/firebase";
import { validatePassword } from "firebase/auth";

/**
 * Returns a document with the user details from the collection "users" by a given user uid
 * @param uid Firebase user uid
 */
export const getUserDetailsDocumentByUid = async (uid: string) => {
  const usersDocRef = doc(db, FIRESTORE_COLLECTIONS.USERS, uid);
  const usersDocSnap = await getDoc(usersDocRef);

  return usersDocSnap.exists() ? usersDocSnap : null;
};

/**
 * Returns the Firebase password status
 * @param password password field
 */
export const getPasswordStatus = async (
  password: string,
): Promise<PasswordValidationStatus> => {
  return await validatePassword(auth, password);
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
