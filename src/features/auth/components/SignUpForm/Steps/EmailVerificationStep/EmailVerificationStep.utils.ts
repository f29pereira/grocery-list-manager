import { isFirebaseError } from "@/utils/common.utils";
import type { TFunction } from "i18next";
import {
  getGenericAuthErrorMessage,
  getGenericSignInAuthErrorMessage,
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
    getGenericAuthErrorMessage(t, errorCode) ??
    getGenericSignInAuthErrorMessage(t, errorCode) ??
    t("error-messages.generic")
  );
};
