import clsx from "clsx";
import type { InitialsAvatarProps } from "./InitialsAvatar.types";
import { useAuth } from "@/contexts/AuthContext/useAuth";
import {
  getInitialsAvatarStyles,
  getUserInitial,
} from "./InitialsAvatar.utils";

/**
 * Renders a profile avatar with the user's initials
 *
 * Props are defined in {@link InitialsAvatarProps}.
 */
export default function InitialsAvatar({ styles }: InitialsAvatarProps) {
  const { authUser } = useAuth();

  const colorStyles = getInitialsAvatarStyles(
    authUser?.details?.initialsAvatarColor,
  );
  const firstNameInitial = getUserInitial(authUser?.details?.firstName);
  const lastNameInitial = getUserInitial(authUser?.details?.lastName);

  return (
    <div
      className={clsx("rounded-full theme-transition", colorStyles, styles)}
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
