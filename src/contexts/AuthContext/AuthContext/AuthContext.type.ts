import type { User } from "firebase/auth";
import type { Dispatch, SetStateAction } from "react";

/**
 * Type for the AuthContext
 * @property user      - authenticated user
 * @property isLoading - is loading authentication
 */
export type AuthContextType = {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};
