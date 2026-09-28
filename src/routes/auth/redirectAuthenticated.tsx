import { Navigate } from "react-router";
import { useAuth } from "@/contexts/AuthContext/useAuth";
import type { ReactChildrenType } from "@/types/common.types";
import LoadingUser from "@/features/auth/components/shared/LoadingUser/LoadingUser";

/**
 * Renders the Loading component (if the user authentication is loading) or children
 *
 * If the user profile is complete redirects to the "profile" route
 *
 * Props are defined in {@link ReactChildrenType}.
 */
export default function RedirectAuthenticated({ children }: ReactChildrenType) {
  const { isProfileComplete, isLoading } = useAuth();

  if (isLoading) {
    return <LoadingUser />;
  }

  if (isProfileComplete) {
    return <Navigate to="/profile" replace />;
  }

  return children;
}
