// App theme
export const THEME_LOCAL_STORAGE = "app-theme";

// Localization
export const LOCALIZATION_LOCAL_STORAGE = "app-locale";
export const SUPPORTED_LANGUAGES = ["en", "pt"] as const;
export const DEFAULT_LANGUAGE = SUPPORTED_LANGUAGES[0];

// Firebase Errors
export const FIREBASE_ERROR_CODES = {
  EMAIL_ALREADY_IN_USE: "auth/email-already-in-use", // Thrown if there already exists an account with the given email address
  INVALID_EMAIL: "auth/invalid-email", // Thrown if the email address is not valid
  OPERATION_NOT_ALLOWED: "auth/operation-not-allowed", // Thrown if email/password accounts are not enabled. Enable email/password accounts in the Firebase Console, under the Auth tab
  WEAK_PASSWORD: "auth/weak-password", // Thrown if the password is not strong enough.
  NETWORK_REQUEST_FAILED: "auth/network-request-failed", // Thrown if a network error (such as timeout, interrupted connection or unreachable host) has occurred
  TOO_MANY_REQUESTS: "auth/too-many-requests", // Thrown if requests are blocked from a device due to unusual activity. Trying again after some delay would unblock
  INVALID_USER_TOKEN: "auth/invalid-user-token", // Thrown if the user's credential is no longer valid. The user must sign in again
  USER_TOKEN_EXPIRED: "auth/user-token-expired", // Thrown if the user's credential has expired. The user must sign in again
};

// Firestore Errors
export const FIRESTORE_ERROR_CODES = {
  UNAUTHENTICATED: "unauthenticated", // Thrown if the request does not have valid authentication credentials for the operation
  PERMISSION_DENIED: "permission-denied", // Thrown if the caller does not have permission to execute the specified operation
  UNAVAILABLE: "unavailable", // Thrown if the service is currently unavailable
};
