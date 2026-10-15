import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase/firebase";

/**
 * Updates the Firebase "users" document collection with updated user details
 * @param userId              Firebase User ID
 * @param initialsAvatarColor color for the user's initials avatar
 * @param firstName           user's first name
 * @param lastName            user's last name
 */
export const updateUserDetailsDocument = async (
  userId: string,
  initialsAvatarColor: string,
  firstName: string,
  lastName: string,
) => {
  const documentRef = doc(db, "users", userId);

  await updateDoc(documentRef, {
    initialsAvatarColor: initialsAvatarColor,
    firstName: firstName,
    lastName: lastName,
  });
};
