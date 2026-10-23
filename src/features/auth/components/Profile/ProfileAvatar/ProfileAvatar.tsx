import clsx from "clsx";
import { useAuth } from "@/contexts/AuthContext/useAuth";
import { FaRegUserCircle, FaUserCircle } from "@/assets/icons/icon";
import {
  getUserInitial,
  getInitialsAvatarStyles,
} from "./InitialsAvatar/InitialsAvatar.utils";
import InitialsAvatar from "./InitialsAvatar/InitialsAvatar";
import Avatar from "./Avatar/Avatar";

/**
 * Renders the user's profile avatar
 */
export default function ProfileAvatar() {
  // Context
  const { authUser, isProfileComplete } = useAuth();

  // Data
  const avatarUrl = authUser?.details?.avatarUrl;
  const initialsAvatarColor = getInitialsAvatarStyles(
    authUser?.details?.initialsAvatarColor,
  );
  const firstNameInitial = getUserInitial(authUser?.details?.firstName);
  const lastNameInitial = getUserInitial(authUser?.details?.lastName);

  // Styles
  const avatarStyles = "w-7.5 h-7.5 md:w-8.75 md:h-8.75";

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

  // Authenticated user with avatar
  if (avatarUrl) {
    return <Avatar styles={avatarStyles} imageUrl={avatarUrl} />;
  }

  return (
    <InitialsAvatar
      styles={clsx(avatarStyles, initialsAvatarColor)}
      firstNameInitial={firstNameInitial}
      lastNameInitial={lastNameInitial}
    />
  );
}
