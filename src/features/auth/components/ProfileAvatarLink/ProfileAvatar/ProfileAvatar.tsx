import { useAuth } from "@/contexts/AuthContext/useAuth";
import { FaRegUserCircle } from "@/assets/icons/icon";
import InitialsAvatar from "./InitialsAvatar/InitialsAvatar";

/**
 * Renders the user's profile with the initials avatar
 *
 * If the user isn't authenticated displays an user icon
 */
export default function ProfileAvatar() {
  // Context
  const { isProfileComplete } = useAuth();

  return (
    <>
      {isProfileComplete ? (
        <InitialsAvatar />
      ) : (
        <FaRegUserCircle
          className="text-3xl
                    text-brand
                    hover:text-brand-hover"
          aria-hidden="true"
        />
      )}
    </>
  );
}
