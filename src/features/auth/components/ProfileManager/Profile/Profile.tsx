import { useAuth } from "@/contexts/AuthContext/useAuth";

/**
 * Renders the user's profile
 */
export default function ProfileDetails() {
  // Context
  const { authUser } = useAuth();

  return <span>ProfileDetails component</span>;
}
