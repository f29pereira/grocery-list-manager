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
      className="w-8.75 h-8.75 rounded-full 
                border-2 border-solid border-button dark:border-white
              bg-green-900 dark:bg-button
                theme-transition
              hover:bg-green-800 dark:hover:bg-button-hover"
    >
      <div className="flex justify-center items-center gap-0.5 w-full h-full">
        <span className="font-bold leading-none text-md text-button-label">
          {firstNameInitial}
        </span>
        <span className="font-bold leading-none text-md text-button-label">
          {lastNameInitial}
        </span>
      </div>
    </div>
  );
}
