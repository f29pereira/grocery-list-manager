import { useAuth } from "@/contexts/AuthContext/useAuth";
import { Outlet, Navigate } from "react-router";

/**
 * Renders the Loading component (if the user authentication is loading) or the current route content
 *
 * If no user is authenticated redirects to the "signIn" route
 */
export default function ProtectedLayout() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    // TO DO: Add Loading component
    return <p>Loading component</p>;
  }

  if (!user) {
    return <Navigate to="/signin" />;
  }

  return <Outlet />;
}
