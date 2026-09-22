import { useAuth } from "@/contexts/AuthContext/useAuth";
import { FaRegUserCircle, FaUserCircle } from "@/assets/icons/icon";
import InitialsAvatar from "./InitialsAvatar/InitialsAvatar";

/**
 * Renders the user's profile avatar
 */
export default function ProfileAvatar() {
  // Context
  const { authUser, isProfileComplete } = useAuth();

  // Unauthenticated user
  if (!authUser?.user) {
    return (
      <FaRegUserCircle
        className="text-3xl
                    text-brand
                    hover:text-brand-hover"
        aria-hidden="true"
      />
    );
  }

  // Authenticated user with no user details (first and last name fields)
  if (!isProfileComplete) {
    return (
      <FaUserCircle
        className="text-3xl
                text-brand
                hover:text-brand-hover"
        aria-hidden="true"
      />
    );
  }

  return <InitialsAvatar />;
}
