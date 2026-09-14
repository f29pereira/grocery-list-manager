import { isFirebaseError } from "@/utils/common.utils";
import type { TFunction } from "i18next";
import {
  getGenericAuthErrorMessages,
  getGenericSignInAuthErrorMessages,
} from "../../../utils/common.utils";

/**
 * Returns Firebase sendEmailVerification custom error messages
 * @param t error messages translation
 * @param error
 */
export const sendEmailVerificationErrorMessage = (
  t: TFunction<"translation", undefined>,
  error: unknown,
) => {
  const errorCode = isFirebaseError(error) ? error.code : "";

  return (
    getGenericAuthErrorMessages(t, errorCode) ??
    getGenericSignInAuthErrorMessages(t, errorCode) ??
    t("forms.generic-errorMessages.error")
  );
};
