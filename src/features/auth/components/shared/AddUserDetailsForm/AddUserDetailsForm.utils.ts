import { doc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase/firebase";

/**
 * Adds a Firebase document to the "users" collection with the user details
 * @param userId              Firebase user ID
 * @param initialsAvatarColor color for the user's initials avatar
 * @param avatarUrl           avatar URL
 * @param firstName           user's first name
 * @param lastName            user's last name
 */
export const addUserDetailsDocument = async (
  userId: string,
  initialsAvatarColor: string,
  avatarUrl: string,
  firstName: string,
  lastName: string,
) => {
  await setDoc(doc(db, "users", userId), {
    initialsAvatarColor: initialsAvatarColor,
    avatarUrl: avatarUrl,
    firstName: firstName,
    lastName: lastName,
  });
};
