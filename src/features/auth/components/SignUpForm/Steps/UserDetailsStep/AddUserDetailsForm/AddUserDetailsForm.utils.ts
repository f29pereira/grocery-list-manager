import { doc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase/firebase";
import type { TFunction } from "i18next";
import type { RegisterOptions } from "react-hook-form";
import type { UserDetailsFields } from "@/features/auth/components/types/auth.types";

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

/**
 * Returns the React Hook Form validation for the first name and last name fields
 * @param t error messages translation
 */
export const nameFieldValidation = (
  t: TFunction<"translation", undefined>,
):
  | RegisterOptions<UserDetailsFields, "firstName">
  | RegisterOptions<UserDetailsFields, "lastName"> => {
  return {
    required: t("forms.generic-errorMessages.required"),
    maxLength: {
      value: 50,
      message: t("forms.signUp.user-details-step.name.name-max-length"),
    },
    pattern: {
      value: /^[\p{L}\s'-]+$/u,
      message: t("forms.generic-errorMessages.invalid"),
    },
  };
};
