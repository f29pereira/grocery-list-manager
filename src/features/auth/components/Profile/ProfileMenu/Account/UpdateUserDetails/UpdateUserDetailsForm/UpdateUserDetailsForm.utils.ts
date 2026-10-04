import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase/firebase";

/**
 * Updates the Firebase "users" document collection with new user details
 * @param userId    Firebase user id
 * @param firstName user first name
 * @param lastName user last name
 */
export const updateUserDetailsDocument = async (
  userId: string,
  firstName: string,
  lastName: string,
) => {
  const documentRef = doc(db, "users", userId);

  await updateDoc(documentRef, {
    firstName: firstName,
    lastName: lastName,
  });
};
