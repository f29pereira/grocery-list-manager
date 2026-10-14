import clsx from "clsx";
import { useAuth } from "@/contexts/AuthContext/useAuth";
import {
  getInitialsAvatarStyles,
  getUserInitial,
} from "./InitialsAvatar.utils";

/**
 * Renders a profile avatar with the user's initials
 */
export default function InitialsAvatar() {
  const { authUser } = useAuth();

  const styles = getInitialsAvatarStyles(
    authUser?.details?.initialsAvatarColor,
  );
  const firstNameInitial = getUserInitial(authUser?.details?.firstName);
  const lastNameInitial = getUserInitial(authUser?.details?.lastName);

  return (
    <div
      className={clsx(
        "w-7.5 h-7.5 rounded-full",
        "theme-transition",
        "md:w-8.75 md:h-8.75",
        styles,
      )}
      aria-hidden="true"
    >
      <div className="flex justify-center items-center gap-[1.5px] w-full h-full">
        <span
          className="font-bold leading-none text-sm
                    md:text-base lg:text-lg"
        >
          {firstNameInitial}
        </span>
        <span
          className="font-bold leading-none text-sm
                    md:text-base lg:text-lg"
        >
          {lastNameInitial}
        </span>
      </div>
    </div>
  );
}
