import clsx from "clsx";
import type { InitialsAvatarProps } from "./InitialsAvatar.types";
import { useAuth } from "@/contexts/AuthContext/useAuth";
import { getInitialsAvatarStyles } from "./InitialsAvatar.utils";
import { FaRegUserCircle } from "@/assets/icons/icon";

/**
 * Renders a profile avatar with the user's initials
 *
 * If the initials are empty, it displays a user icon
 *
 * The initials and user icon feature a pop-in animation
 *
 * Props are defined in {@link InitialsAvatarProps}.
 */
export default function InitialsAvatar({
  styles = "w-7.5 h-7.5 md:w-8.75 md:h-8.75", // 30px md:35px
  fontStyles = "text-sm md:text-base lg:text-lg",
  firstNameInitial,
  lastNameInitial,
}: InitialsAvatarProps) {
  const { authUser } = useAuth();

  const colorStyles = getInitialsAvatarStyles(
    authUser?.details?.initialsAvatarColor,
  );

  const isInitialsEmpty = firstNameInitial === "" && lastNameInitial === "";

  return (
    <div
      className={clsx(
        "rounded-full theme-transition overflow-hidden",
        colorStyles,
        styles,
      )}
      aria-hidden="true"
    >
      <div className="flex justify-center items-center gap-[1.5px] w-full h-full">
        {isInitialsEmpty ? (
          <FaRegUserCircle
            className="text-5xl motion-safe:animate-pop-in"
            aria-hidden="true"
          />
        ) : (
          <>
            <span
              className={clsx(
                "font-bold leading-none motion-safe:animate-pop-in",
                fontStyles,
              )}
            >
              {firstNameInitial}
            </span>
            <span
              className={clsx(
                "font-bold leading-none motion-safe:animate-pop-in",
                fontStyles,
              )}
            >
              {lastNameInitial}
            </span>
          </>
        )}
      </div>
    </div>
  );
}
