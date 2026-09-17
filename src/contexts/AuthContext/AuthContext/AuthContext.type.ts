import type { User } from "firebase/auth";
import type { Dispatch, SetStateAction } from "react";

/**
 * Type for the AuthContext
 * @property authUser     - authenticated user state
 * @property setAuthUser  - authenticated user state setter function
 * @property isProfileComplete - is the user profile complete
 * @property isLoading    - is loading authentication state
 * @property setIsLoading - is loading authentication state setter function
 */
export type AuthContextType = {
  authUser: AuthenticatedUser | null;
  setAuthUser: Dispatch<SetStateAction<AuthenticatedUser | null>>;
  isProfileComplete: boolean;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};

/**
 * Type for the authenticated user
 * @property user              - Firebase user
 * @property details           - user details
 */
export type AuthenticatedUser = {
  user: User | null;
  details: UserDetails | null;
};

/**
 * Type for the user details
 * @property firstName - first name
 * @property lastName  - last name
 */
export type UserDetails = {
  firstName: string;
  lastName: string;
};
