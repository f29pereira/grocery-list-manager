import type { AuthenticatedUser } from "@/contexts/AuthContext/AuthContext/AuthContext.type";
import type { TFunction } from "i18next";

/**
 * Returns the aria-label text to be used on the user profile avatar link
 * @param t        label translation
 * @param authUser autehnticated user
 */
export const getUserProfileAriaLabel = (
  t: TFunction<"translation", undefined>,
  authUser: AuthenticatedUser | null,
) => {
  return !authUser?.user
    ? t("nav.links.user-profile.not-authenticated")
    : t("nav.links.user-profile.authenticated");
};

/**
 * Returns the route for the user profile avatar link
 * @param authUser          autehnticated user
 * @param isProfileComplete is the user profile complete
 */
export const getUserProfileRoute = (
  authUser: AuthenticatedUser | null,
  isProfileComplete: boolean,
) => {
  if (!authUser?.user) {
    return "/signin";
  } else if (!isProfileComplete) {
    return ""; // TO DO: redirect to profile details form
  }

  return ""; // TO DO: redirect to the user profile
};
