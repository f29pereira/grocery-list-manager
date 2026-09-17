import { useState, useEffect } from "react";
import type { ReactChildrenType } from "@/types/common.types";
import type { AuthenticatedUser } from "./AuthContext/AuthContext.type";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { AuthContext } from "./AuthContext/AuthContext";
import { getUserDetailsDocumentByUid } from "@/features/auth/components/utils/common.utils";

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
      setAuthUser({ user: user, details: null });

      if (user) {
        const userDetails = await getUserDetailsDocumentByUid(user.uid);

        if (userDetails) {
          const data = userDetails.data();

          setAuthUser({
            user: user,
            details: {
              firstName: data.firstName,
              lastName: data.lastName,
            },
          });
        }
      }

      setIsLoading(false);
    });
  }, []);

  const isProfileComplete = Boolean(authUser?.user && authUser?.details);

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
