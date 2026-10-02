import { useTranslation } from "react-i18next";
import { FaUser } from "@/assets/icons/icon";
import SignOutButton from "./SignOutButton/SignOutButton";
import ProfilePopUpLink from "./ProfilePopUpLink/ProfilePopUpLink";

/**
 * Renders the authenticated user profile pop-up with:
 * - Profile link
 * - Sign Out Button
 */
export default function ProfilePopUp() {
  // Translation
  const { t } = useTranslation();

  return (
    <ul
      className="flex flex-col gap-2 py-6 min-w-47.5
              bg-white dark:bg-body-bg
                border-solid border-2 rounded-xl border-slate-500 dark:border-white"
      role="menu"
    >
      <li
        className="w-full p-4 
                hover:bg-slate-200 hover:dark:bg-slate-800
                  focus-visible:outline-none"
      >
        {/*Profile link*/}
        <ProfilePopUpLink to="/profile">
          <div className="flex items-center gap-2">
            <FaUser className="text-xl text-brand" aria-hidden="true" />
            <span className="font-bold text-sm text-link lg:text-base">
              {t("nav.profile.pop-up.links.profile")}
            </span>
          </div>
        </ProfilePopUpLink>

        {/*TO DO: Add links*/}
      </li>

      <li className="mt-8 mx-4">
        <SignOutButton />
      </li>
    </ul>
  );
}
