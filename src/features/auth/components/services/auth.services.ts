import type { PasswordValidationStatus, User } from "firebase/auth";
import {
  EmailAuthProvider,
  validatePassword,
  reauthenticateWithCredential,
} from "firebase/auth";
import { auth } from "@/lib/firebase/firebase";

/**
 * Reauthenticates a user with new Firebase authentication credential
 * @param user     Firebase user
 * @param email    user email
 * @param password user password
 */
export const reauthenticateUserWithCredential = async (
  user: User,
  email: string,
  password: string,
) => {
  const credential = EmailAuthProvider.credential(email, password);

  await reauthenticateWithCredential(user, credential);
};

/**
 * Returns the Firebase password status
 * @param password user password
 */
export const getPasswordStatus = async (
  password: string,
): Promise<PasswordValidationStatus> => {
  return await validatePassword(auth, password);
};
