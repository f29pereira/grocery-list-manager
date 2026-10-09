import { FIRESTORE_COLLECTIONS } from "@/constants/app.constants";
import { db } from "@/lib/firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

/**
 * Returns a document with the user details from the collection "users" by a given user uid
 * @param uid Firebase user uid
 */
export const getUserDetailsDocumentByUid = async (uid: string) => {
  const usersDocRef = doc(db, FIRESTORE_COLLECTIONS.USERS, uid);
  const usersDocSnap = await getDoc(usersDocRef);

  return usersDocSnap.exists() ? usersDocSnap : null;
};
