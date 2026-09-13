import type { TFunction } from "i18next";

/**
 * Returns a custom error message for a given auth related Firebase error
 * @param t error messages translation
 * @param error Firebase error
 */
export const getGenericAuthErrorMessages = (
  t: TFunction<"translation", undefined>,
  error: string,
) => {
  switch (error) {
    case "auth/network-request-failed":
      // Thrown if a network error (such as timeout, interrupted connection or unreachable host) has occurred
      return t(
        "forms.auth.firebase-generic-error-messages.network-request-failed",
      );
    case "auth/too-many-requests":
      // Thrown if requests are blocked from a device due to unusual activity. Trying again after some delay would unblock
      return t("forms.auth.firebase-generic-error-messages.too-many-requests");
  }
};

/**
 * Returns a custom error message for a given sign in user related Firebase error
 * @param t error messages translation
 * @param error Firebase error
 */
export const getGenericSignInAuthErrorMessages = (
  t: TFunction<"translation", undefined>,
  error: string,
) => {
  switch (error) {
    case "auth/invalid-user-token": // Thrown if the user's credential is no longer valid. The user must sign in again
    case "auth/user-token-expired": // Thrown if the user's credential has expired. The user must sign in again
      return t("forms.auth.firebase-generic-error-messages.user-token");
  }
};
