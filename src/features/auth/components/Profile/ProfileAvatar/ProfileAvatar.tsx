import { useAuth } from "@/contexts/AuthContext/useAuth";
import { FaRegUserCircle, FaUserCircle } from "@/assets/icons/icon";
import { getUserInitial } from "./InitialsAvatar/InitialsAvatar.utils";
import InitialsAvatar from "./InitialsAvatar/InitialsAvatar";

/**
 * Renders the user's profile avatar
 */
export default function ProfileAvatar() {
  // Context
  const { authUser, isProfileComplete } = useAuth();

  const firstNameInitial = getUserInitial(authUser?.details?.firstName);
  const lastNameInitial = getUserInitial(authUser?.details?.lastName);

  // Unauthenticated user
  if (!authUser?.user) {
    return (
      <div className="flex flex-row-reverse">
        <FaRegUserCircle
          className="text-3xl
                text-brand
                hover:text-brand-hover
                  md:text-[35px]"
          aria-hidden="true"
        />
      </div>
    );
  }

  // Authenticated user with no user details (first and last name fields)
  if (!isProfileComplete) {
    return (
      <FaUserCircle
        className="text-3xl
                text-brand
                hover:text-brand-hover
                  md:text-[35px]"
        aria-hidden="true"
      />
    );
  }

  return (
    <InitialsAvatar
      firstNameInitial={firstNameInitial}
      lastNameInitial={lastNameInitial}
    />
  );
}
