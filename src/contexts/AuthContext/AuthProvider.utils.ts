import type { AuthenticatedUser } from "./AuthContext/AuthContext.type";
import type { CompleteUserProfile } from "./AuthContext/AuthContext.type";

/**
 * Type Guard function that checks if a given authenticated user has a complete profile
 * @param authUser authenticated user
 */
export const isAuthWithProfileComplete = (
  authUser: AuthenticatedUser | null,
): authUser is CompleteUserProfile => {
  return Boolean(authUser?.user && authUser?.details);
};
