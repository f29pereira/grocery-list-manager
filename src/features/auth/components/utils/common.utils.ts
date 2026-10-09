import { FIRESTORE_COLLECTIONS } from "@/constants/app.constants";
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
