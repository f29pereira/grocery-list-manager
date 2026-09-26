import { useAuth } from "@/contexts/AuthContext/useAuth";
import FinishProfile from "./FinishProfile/FinishProfile";
import Profile from "./Profile/Profile";

/**
 * Renders the user's details form or user's profile
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

  return !isProfileComplete ? <FinishProfile /> : <Profile />;
}
