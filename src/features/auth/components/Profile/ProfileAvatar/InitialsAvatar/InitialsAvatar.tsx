import { useAuth } from "@/contexts/AuthContext/useAuth";
import { getUserInitial } from "./InitialsAvatar.utils";

/**
 * Renders a profile avatar with the user's initials
 */
export default function InitialsAvatar() {
  const { authUser } = useAuth();

  const firstNameInitial = getUserInitial(authUser?.details?.firstName);
  const lastNameInitial = getUserInitial(authUser?.details?.lastName);

  return (
    <div
      className="w-7.5 h-7.5 rounded-full 
              bg-green-900 dark:bg-button
                theme-transition
              hover:bg-green-800 dark:hover:bg-button-hover
                md:w-8.75 md:h-8.75"
      aria-hidden="true"
    >
      <div className="flex justify-center items-center gap-[1.5px] w-full h-full">
        <span
          className="font-bold leading-none 
                    text-sm text-button-label
                    md:text-base lg:text-lg"
        >
          {firstNameInitial}
        </span>
        <span
          className="font-bold leading-none 
                    text-sm text-button-label
                    md:text-base lg:text-lg"
        >
          {lastNameInitial}
        </span>
      </div>
    </div>
  );
}
