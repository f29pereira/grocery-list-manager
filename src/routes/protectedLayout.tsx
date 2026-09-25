import { useAuth } from "@/contexts/AuthContext/useAuth";
import { Outlet, Navigate } from "react-router";
import LoadingUser from "@/features/auth/components/shared/LoadingUser/LoadingUser";

/**
 * Renders the Loading component (if the user authentication is loading) or the current route content
 *
 * If no user is authenticated redirects to the "signIn" route
 */
export default function ProtectedLayout() {
  const { authUser, isLoading } = useAuth();

  if (isLoading) {
    return <LoadingUser />;
  }

  if (!authUser) {
    return <Navigate to="/sign-in" />;
  }

  return <Outlet />;
}
