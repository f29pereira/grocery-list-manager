import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase/firebase";

/**
 * Clears the field avatarUrl on the Firebase "users" document collection for a given user id
 * @param userId Firebase User ID
 */
export const clearAvatarUrlOnUserDetailsDocument = async (userId: string) => {
  const documentRef = doc(db, "users", userId);

  await updateDoc(documentRef, {
    avatarUrl: "",
  });
};
