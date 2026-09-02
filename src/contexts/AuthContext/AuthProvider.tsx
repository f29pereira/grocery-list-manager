import { useState, useEffect } from "react";
import type { ReactChildrenType } from "@/types/common.types";
import { getAuth, onAuthStateChanged, type User } from "firebase/auth";
import { AuthContext } from "./AuthContext/AuthContext";

/**
 * Provides the current authenticated user context
 */
export default function AuthProvider({ children }: ReactChildrenType) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  /**
   * Updates user and isLoading state when session is restored
   */
  useEffect(() => {
    const auth = getAuth();

    return onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsLoading(false);
    });
  }, []);

  return (
    <AuthContext value={{ user, setUser, isLoading, setIsLoading }}>
      {children}
    </AuthContext>
  );
}
