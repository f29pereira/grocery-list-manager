import { useState, useEffect } from "react";
import type { ReactChildrenType } from "@/types/common.types";
import type { AuthenticatedUser } from "./AuthContext/AuthContext.type";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { AuthContext } from "./AuthContext/AuthContext";
import { getUserDetailsDocumentByUid } from "@/features/auth/components/utils/common.utils";
import { isAuthWithProfileComplete } from "./AuthProvider.utils";

/**
 * Provides the current authenticated user context
 */
export default function AuthProvider({ children }: ReactChildrenType) {
  const [authUser, setAuthUser] = useState<AuthenticatedUser | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  /**
   * Updates user and isLoading state when session is restored
   */
  useEffect(() => {
    const auth = getAuth();

    return onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setAuthUser(null);
        setIsLoading(false);
        return;
      }

      try {
        const userDetails = await getUserDetailsDocumentByUid(user.uid);
        setAuthUser({
          user: user,
          details: userDetails
            ? {
                firstName: userDetails.data().firstName,
                lastName: userDetails.data().lastName,
              }
            : null,
        });
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        setAuthUser({ user: user, details: null });
      }

      setIsLoading(false);
    });
  }, []);

  const isProfileComplete = isAuthWithProfileComplete(authUser);

  return (
    <AuthContext
      value={{
        authUser,
        setAuthUser,
        isProfileComplete,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </AuthContext>
  );
}
