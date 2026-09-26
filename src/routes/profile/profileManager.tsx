import { useAuth } from "@/contexts/AuthContext/useAuth";
import FinishProfile from "@/features/auth/components/ProfileManager/FinishProfile/FinishProfile";
import ProfileLayout from "./profileLayout";

/**
 * Renders the user's details form or the user's profile on the "profile" route
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

  return !isProfileComplete ? <FinishProfile /> : <ProfileLayout />;
}
