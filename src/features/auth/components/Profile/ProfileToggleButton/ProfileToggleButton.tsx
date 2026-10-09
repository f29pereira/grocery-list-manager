import { useAuth } from "@/contexts/AuthContext/useAuth";
import useToggle from "@/hooks/useToggle";
import useOutsidePointer from "@/hooks/useOutsidePointer";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { getUserFullName } from "../../utils/user.utils";
import ProfileAvatar from "../ProfileAvatar/ProfileAvatar";
import AccordionArrowIcon from "@/components/ui/Icons/ArrowIcon/AccordionArrowIcon/AccordionArrowIcon";
import ProfilePopUp from "./ProfilePopUp/ProfilePopUp";
import { getToggleButtonLabel } from "./ProfileToggleButton.utils";
import { isAuthWithProfileComplete } from "@/contexts/AuthContext/AuthProvider.utils";

/**
 * Renders the user's profile toggle button and ArrowIcon
 *
 * Displays ProfilePopUp when the button is clicked
 *
 * If a pointerdown event is detected outside the main div the ProfilePopUp is closed
 */
export default function ProfileToggleButton() {
  // Translation
  const { t } = useTranslation();

  // Context
  const { authUser } = useAuth();

  // Custom hook
  const [isToggled, toggle, setIsToggled] = useToggle(false); // ProfilePopUp and ArrowIcon toggle

  const mainDivRef = useOutsidePointer<HTMLDivElement>(() => {
    setIsToggled(false);
  });

  return (
    <div className="relative" ref={mainDivRef}>
      <button
        className="px-1 py-0.5 
                rounded-full cursor-pointer
                border-2 border-solid border-slate-500 dark:border-white
                focus-visible:focus-ring focus-visible:outline-offset-2
                theme-transition
                sm:py-1 md:px-2 md:py-1.5"
        onClick={toggle}
        aria-label={getToggleButtonLabel(t, authUser)}
        aria-expanded={isToggled}
      >
        <div className="flex justify-between items-center gap-2 md:gap-4">
          <div className="flex justify-center items-center gap-4">
            <ProfileAvatar />

            <div
              className="hidden lg:block lg:min-h-10 lg:max-w-25
                      xl:max-w-30"
            >
              <span
                className="block min-h-5
                        font-bold 
                        text-left text-sm text-paragraph 
                        truncate"
              >
                {isAuthWithProfileComplete(authUser)
                  ? getUserFullName(authUser.details)
                  : ""}
              </span>
              <span className="block text-sm text-paragraph truncate">
                {authUser?.user?.email}
              </span>
            </div>
          </div>

          <AccordionArrowIcon
            styles="text-xl text-slate-500 dark:text-white"
            isAnimating={isToggled}
            pointingDirection="down"
          />
        </div>
      </button>

      {isToggled && (
        <div
          className={clsx(
            "absolute right-0 mt-4 min-w-37.5",
            "lg:left-1/2 lg:right-auto lg:-translate-x-1/2 lg:min-w-51.75",
            "transition-discrete transition-opacity duration-300 ease-out",
            "starting:opacity-0 motion-reduce:transition-none",
            isToggled && "opacity-100",
          )}
        >
          <ProfilePopUp />
        </div>
      )}
    </div>
  );
}
