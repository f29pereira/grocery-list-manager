import type { TFunction } from "i18next";

/**
 * Returns a custom error message for a given auth related Firebase error
 * @param t error messages translation
 */
export const getGenericAuthErrorMessages = (
  t: TFunction<"translation", undefined>,
  error: string,
) => {
  switch (error) {
    case "auth/network-request-failed":
      // Thrown if a network error (such as timeout, interrupted connection or unreachable host) has occurred.
      return t(
        "forms.auth.firebase-generic-error-messages.network-request-failed",
      );
    case "auth/too-many-requests":
      // Thrown if requests are blocked from a device due to unusual activity. Trying again after some delay would unblock.
      return t("forms.auth.firebase-generic-error-messages.too-many-requests");
  }
};
