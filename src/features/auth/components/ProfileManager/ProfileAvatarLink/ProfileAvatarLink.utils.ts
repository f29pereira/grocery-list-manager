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
 * Returns the "profile" route or the "sign-in" route if no user is authenticated
 * @param authUser authenticated user
 */
export const getUserProfileRoute = (authUser: AuthenticatedUser | null) => {
  /*if (!authUser?.user) {
    return "/sign-in";
  } else if (!isProfileComplete) {
    return ""; // TO DO: redirect to profile details form
  }

  return "/profile";*/

  return authUser?.user ? "/profile" : "/sign-in";
};
