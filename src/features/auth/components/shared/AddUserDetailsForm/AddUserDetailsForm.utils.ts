import { doc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase/firebase";

/**
 * Adds a Firebase document to the "users" collection with the user details
 * @param userId    Firebase user id
 * @param firstName user first name
 * @param lastName user last name
 */
export const addUserDetailsDocument = async (
  userId: string,
  firstName: string,
  lastName: string,
) => {
  await setDoc(doc(db, "users", userId), {
    firstName: firstName,
    lastName: lastName,
  });
};
