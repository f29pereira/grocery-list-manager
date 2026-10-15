import clsx from "clsx";
import { useAuth } from "@/contexts/AuthContext/useAuth";
import { FaRegUserCircle, FaUserCircle } from "@/assets/icons/icon";
import {
  getUserInitial,
  getInitialsAvatarStyles,
} from "./InitialsAvatar/InitialsAvatar.utils";
import InitialsAvatar from "./InitialsAvatar/InitialsAvatar";

/**
 * Renders the user's profile avatar
 */
export default function ProfileAvatar() {
  // Context
  const { authUser, isProfileComplete } = useAuth();

  const initialsAvatarColor = getInitialsAvatarStyles(
    authUser?.details?.initialsAvatarColor,
  );
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
      styles={clsx("w-7.5 h-7.5 md:w-8.75 md:h-8.75", initialsAvatarColor)}
      firstNameInitial={firstNameInitial}
      lastNameInitial={lastNameInitial}
    />
  );
}
