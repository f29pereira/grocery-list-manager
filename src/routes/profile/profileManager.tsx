import { Navigate } from "react-router";
import { useAuth } from "@/contexts/AuthContext/useAuth";
import ProfileLayout from "./profileLayout";

/**
 * Renders the add user's details form or the user's profile on the "profile" route
 *
 * Displays:
 * - User's details form: if the user's profile isn't complete
 *
 * Or
 *
 * - User's profile: if the user's profile is complete
 */
export default function ProfileManager() {
  const { isProfileComplete } = useAuth();

  if (!isProfileComplete) {
    return <Navigate to="/finish-profile" replace />;
  }

  return <ProfileLayout />;
}
