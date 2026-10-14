import { doc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase/firebase";
import { DEFAULT_INITIALS_AVATAR_COLOR } from "@/constants/app.constants";

/**
 * Adds a Firebase document to the "users" collection with the user details
 * @param userId    Firebase user id
 * @param firstName user first name
 * @param lastName  user last name
 */
export const addUserDetailsDocument = async (
  userId: string,
  firstName: string,
  lastName: string,
) => {
  await setDoc(doc(db, "users", userId), {
    initialsAvatarColor: DEFAULT_INITIALS_AVATAR_COLOR,
    firstName: firstName,
    lastName: lastName,
  });
};
