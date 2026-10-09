import type { UserDetails } from "@/contexts/AuthContext/AuthContext/AuthContext.type";

/**
 * Returns the authenticated user's full name
 * @param userDetails authenticated user details
 */
export const getUserFullName = (userDetails: UserDetails) => {
  return `${userDetails.firstName} ${userDetails.lastName}`;
};
