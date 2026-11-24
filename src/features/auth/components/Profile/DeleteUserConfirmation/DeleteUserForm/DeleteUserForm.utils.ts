import type { TFunction } from "i18next";
import type { RegisterOptions } from "react-hook-form";
import type { DeleteUserAccountFields } from "./DeleteUserForm.types";
import { isFirebaseError } from "@/utils/common.utils";
import { getGenericAuthErrorMessage } from "../../../utils/errorMessages.utils";
import { getGenericSignInAuthErrorMessage } from "../../../utils/errorMessages.utils";
import { deleteUser, type User } from "firebase/auth";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "@/lib/firebase/firebase";

/**
 * Deletes the user's account and "users" collection document with the user's details
 * @param user Firebase user
 */
export const deleteUserAccountAndDetails = async (user: User) => {
  await deleteDoc(doc(db, "users", user.uid));
  await deleteUser(user);
};

/**
 * Returns Firebase deleteUser custom error messages
 * @param t error messages translation
 * @param error
 */
export const getDeleteUserErrorMessage = (
  t: TFunction<"translation", undefined>,
  error: unknown,
) => {
  const errorCode = isFirebaseError(error) ? error.code : "";

  return (
    getGenericAuthErrorMessage(t, errorCode) ??
    getGenericSignInAuthErrorMessage(t, errorCode) ??
    t("error-messages.generic")
  );
};

/**
 * Returns the React Hook Form validation for the current password field on the delete user's account form
 * @param t error messages translation
 */
export const currentPasswordFieldValidation = (
  t: TFunction<"translation", undefined>,
): RegisterOptions<DeleteUserAccountFields, "currentPassword"> => {
  return {
    required: t("forms.generic-errorMessages.required"),
  };
};
