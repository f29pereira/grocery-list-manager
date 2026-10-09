import type { PasswordValidationStatus } from "firebase/auth";
import { auth } from "@/lib/firebase/firebase";
import { validatePassword } from "firebase/auth";

/**
 * Returns the Firebase password status
 * @param password password field
 */
export const getPasswordStatus = async (
  password: string,
): Promise<PasswordValidationStatus> => {
  return await validatePassword(auth, password);
};
