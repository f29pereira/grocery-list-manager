import { useAuth } from "@/contexts/AuthContext/useAuth";
import useToggle from "@/hooks/useToggle";
import { getUserFullName } from "../../utils/common.utils";
import ProfileAvatar from "../ProfileAvatarLink/ProfileAvatar/ProfileAvatar";
import ArrowIcon from "@/components/ui/Icons/ArrowIcon/ArrowIcon";

/**
 * Renders the user's profile toggle button and profile pop-up
 */
export default function ProfileToggleButton() {
  // Context
  const { authUser, isProfileComplete } = useAuth();

  // Custom hook
  const [isToggled, toggle] = useToggle(false); // ProfilePopUp toggle
  const [isIconAnimating, toggleIsIconAnimating] = useToggle(false); // ArrowIcon animation

  /**
   * Toggles the arrow icon animation and the profile pop-up
   */
  const handleClick = () => {
    toggleIsIconAnimating();
    toggle();
  };

  return (
    <div className="relative">
      <button
        className="px-1 py-0.5 
                rounded-full cursor-pointer
                border-2 border-solid border-slate-500 dark:border-white
                focus-visible:focus-ring focus-visible:outline-offset-2
                theme-transition
                sm:py-1 md:px-2 md:py-1.5"
        onClick={handleClick}
      >
        <div className="flex justify-between items-center gap-2 md:gap-4">
          <div className="flex justify-center items-center gap-4">
            <ProfileAvatar />

            <div
              className="hidden lg:block lg:max-w-25
                      xl:max-w-30"
            >
              <span
                className="block 
                        font-bold 
                        text-left text-sm text-paragraph 
                        truncate"
              >
                {getUserFullName(authUser, isProfileComplete)}
              </span>
              <span className="block text-sm text-paragraph truncate">
                {authUser?.user?.email}
              </span>
            </div>
          </div>

          <ArrowIcon
            styles="text-xl text-slate-500 dark:text-white"
            isAnimating={isIconAnimating}
            pointingDirection="down"
          />
        </div>
      </button>

      {isToggled && <div>{/*TO DO: Add ProfilePopUp component*/}</div>}
    </div>
  );
}
