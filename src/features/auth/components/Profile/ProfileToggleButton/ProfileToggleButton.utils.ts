import type { TFunction } from "i18next";
import type { AuthenticatedUser } from "@/contexts/AuthContext/AuthContext/AuthContext.type";
import { getUserFullName } from "../../utils/common.utils";
import { isAuthWithProfileComplete } from "@/contexts/AuthContext/AuthProvider.utils";

/**
 * Returns the profile toggle button label
 * @param t        label translation
 * @param authUser authenticated user
 *
 * @example getToggleButtonLabel(t, authUser)
 * // "John Doe, Profile menu"
 */
export const getToggleButtonLabel = (
  t: TFunction<"translation", undefined>,
  authUser: AuthenticatedUser | null,
) => {
  const profileMenuText = t("nav.profile.profile-toggle-btn");

  return isAuthWithProfileComplete(authUser)
    ? `${getUserFullName(authUser.details)}, ${profileMenuText}`
    : profileMenuText;
};
